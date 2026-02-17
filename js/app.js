/**
 * Bourdain's Table — Main Application
 *
 * Handles: Leaflet map initialization, marker creation & clustering,
 * sidebar rendering, search/filter, zip code proximity, geolocation,
 * and map↔sidebar interaction sync.
 */

(function () {
  'use strict';

  // ---- State ----
  let map;
  let markerClusterGroup;
  let markers = []; // { marker, data, distance }
  let userMarker = null;
  let userLocation = null; // { lat, lng }
  let activeFilters = new Set(); // show names currently active
  let searchQuery = '';

  // ---- DOM References ----
  const mapEl = document.getElementById('map');
  const zipInput = document.getElementById('zip-input');
  const btnSearch = document.getElementById('btn-search');
  const btnLocate = document.getElementById('btn-locate');
  const btnReset = document.getElementById('btn-reset');
  const btnSurprise = document.getElementById('btn-surprise');
  const locationStatus = document.getElementById('location-status');
  const searchInput = document.getElementById('search-input');
  const filterContainer = document.getElementById('filter-stamps');
  const restaurantList = document.getElementById('restaurant-list');
  const restaurantCount = document.getElementById('restaurant-count');

  // ==================================================================
  // Map Initialization
  // ==================================================================

  function initMap() {
    map = L.map('map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 18,
      scrollWheelZoom: true,
      worldCopyJump: true,
    });

    // CartoDB Voyager (no labels) — clean vintage base, no foreign-script text
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 18,
        subdomains: 'abcd',
      }
    ).addTo(map);

    // Marker cluster group
    markerClusterGroup = L.markerClusterGroup({
      maxClusterRadius: 45,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      iconCreateFunction: function (cluster) {
        const count = cluster.getChildCount();
        let size = 'small';
        if (count >= 20) size = 'large';
        else if (count >= 10) size = 'medium';
        return L.divIcon({
          html: '<div>' + count + '</div>',
          className: 'marker-cluster marker-cluster-' + size,
          iconSize: L.point(40, 40),
        });
      },
    });
    map.addLayer(markerClusterGroup);
  }

  // ==================================================================
  // Markers
  // ==================================================================

  function getShowClass(show) {
    const info = SHOW_MAP[show];
    return info ? info.cssClass : 'show-nr';
  }

  function getShowAbbr(show) {
    const info = SHOW_MAP[show];
    return info ? info.abbr : '?';
  }

  function createMarkerIcon(restaurant) {
    const cssClass = getShowClass(restaurant.show);
    return L.divIcon({
      className: '',
      html: '<div class="marker-stamp ' + cssClass + '">' + escapeHtml(getShowAbbr(restaurant.show)) + '</div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16],
    });
  }

  function buildPopupContent(restaurant, distance) {
    const cssClass = getShowClass(restaurant.show);
    const loc = restaurant.state
      ? restaurant.city + ', ' + restaurant.state + ', ' + restaurant.country
      : restaurant.city + ', ' + restaurant.country;

    let html = '<div class="popup-content">';
    html += '<h3>' + escapeHtml(restaurant.name) + '</h3>';
    html += '<span class="popup-show ' + cssClass + '">' + escapeHtml(restaurant.show) + '</span>';

    if (restaurant.season || restaurant.episode) {
      html += '<span class="popup-location" style="margin-left:6px;">';
      if (restaurant.season) html += 'S' + restaurant.season;
      if (restaurant.episode) html += 'E' + restaurant.episode;
      html += '</span>';
    }

    html += '<div class="popup-location">' + escapeHtml(loc) + '</div>';

    if (restaurant.dish) {
      html += '<div class="popup-dish">' + escapeHtml(restaurant.dish) + '</div>';
    }

    if (restaurant.note) {
      html += '<div class="popup-note">' + escapeHtml(restaurant.note) + '</div>';
    }

    if (restaurant.status === 'closed') {
      html += '<div class="popup-status closed">PERMANENTLY CLOSED</div>';
    }

    if (restaurant.website) {
      html += '<div class="popup-website"><a href="' + escapeHtml(restaurant.website) + '" target="_blank" rel="noopener">Visit Website</a></div>';
    }

    if (distance !== null && distance !== undefined) {
      html += '<div class="popup-distance">' + formatDistance(distance) + ' from you</div>';
    }

    html += '</div>';
    return html;
  }

  function addMarkers() {
    markerClusterGroup.clearLayers();
    markers = [];

    RESTAURANTS.forEach(function (r, idx) {
      const marker = L.marker([r.lat, r.lng], {
        icon: createMarkerIcon(r),
      });

      let dist = null;
      if (userLocation) {
        dist = haversineDistance(userLocation.lat, userLocation.lng, r.lat, r.lng);
      }

      marker.bindPopup(buildPopupContent(r, dist), { maxWidth: 280 });

      // When popup opens, highlight the corresponding sidebar card
      marker.on('popupopen', function () {
        highlightCard(idx);
        scrollToCard(idx);
      });

      marker.on('popupclose', function () {
        clearCardHighlights();
      });

      markers.push({ marker: marker, data: r, distance: dist, index: idx });
      markerClusterGroup.addLayer(marker);
    });
  }

  // ==================================================================
  // Sidebar Rendering
  // ==================================================================

  function getFilteredRestaurants() {
    return markers.filter(function (m) {
      // Show filter
      if (activeFilters.size > 0 && !activeFilters.has(m.data.show)) {
        return false;
      }
      // Search filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const haystack = (
          m.data.name + ' ' +
          m.data.city + ' ' +
          (m.data.state || '') + ' ' +
          m.data.country + ' ' +
          (m.data.dish || '')
        ).toLowerCase();
        if (haystack.indexOf(q) === -1) {
          return false;
        }
      }
      return true;
    });
  }

  function renderSidebar() {
    let filtered = getFilteredRestaurants();

    // Sort by distance if user location is set, otherwise by name
    if (userLocation) {
      filtered.sort(function (a, b) {
        return (a.distance || Infinity) - (b.distance || Infinity);
      });
    } else {
      filtered.sort(function (a, b) {
        return a.data.name.localeCompare(b.data.name);
      });
    }

    restaurantCount.textContent = filtered.length + ' of ' + RESTAURANTS.length + ' places';

    if (filtered.length === 0) {
      restaurantList.innerHTML = '<div class="no-results">No restaurants match your search.</div>';
      return;
    }

    let html = '';
    filtered.forEach(function (m) {
      const r = m.data;
      const cssClass = getShowClass(r.show);
      const loc = r.state
        ? r.city + ', ' + r.state
        : r.city + ', ' + r.country;

      html += '<div class="restaurant-card ' + cssClass + '" data-index="' + m.index + '">';

      // Header: name + distance
      html += '<div class="card-header">';
      html += '<span class="card-name">' + escapeHtml(r.name) + '</span>';
      if (m.distance !== null && m.distance !== undefined) {
        html += '<span class="card-distance">' + formatDistance(m.distance) + '</span>';
      }
      html += '</div>';

      // Location
      html += '<div class="card-location">' + escapeHtml(loc) + '</div>';

      // Show stamp + episode
      html += '<span class="card-show ' + cssClass + '">' + escapeHtml(r.show) + '</span>';
      if (r.season || r.episode) {
        html += '<span class="card-episode">';
        if (r.season) html += 'S' + r.season;
        if (r.episode) html += 'E' + r.episode;
        html += '</span>';
      }

      // Dish
      if (r.dish) {
        html += '<div class="card-dish">' + escapeHtml(r.dish) + '</div>';
      }

      // Note
      if (r.note) {
        html += '<div class="card-note">' + escapeHtml(r.note) + '</div>';
      }

      // Status
      if (r.status === 'closed') {
        html += '<div class="card-status closed">Permanently Closed</div>';
      }

      // Website link
      if (r.website) {
        html += '<div class="card-website"><a href="' + escapeHtml(r.website) + '" target="_blank" rel="noopener" onclick="event.stopPropagation();">View Menu / Website</a></div>';
      }

      html += '</div>';
    });

    restaurantList.innerHTML = html;

    // Attach click handlers to cards
    var cards = restaurantList.querySelectorAll('.restaurant-card');
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        flyToMarker(idx);
      });
    });

    // Also update which markers are visible on the map
    updateMapMarkers(filtered);
  }

  function updateMapMarkers(filtered) {
    markerClusterGroup.clearLayers();
    var filteredIndices = new Set(filtered.map(function (m) { return m.index; }));
    markers.forEach(function (m) {
      if (filteredIndices.has(m.index)) {
        markerClusterGroup.addLayer(m.marker);
      }
    });
  }

  // ==================================================================
  // Map ↔ Sidebar Interaction
  // ==================================================================

  function flyToMarker(idx) {
    var entry = markers.find(function (m) { return m.index === idx; });
    if (!entry) return;

    map.flyTo([entry.data.lat, entry.data.lng], 14, { duration: 1 });

    // Open popup after fly completes
    setTimeout(function () {
      // Make sure marker is not in a cluster
      markerClusterGroup.zoomToShowLayer(entry.marker, function () {
        entry.marker.openPopup();
      });
    }, 1100);
  }

  function highlightCard(idx) {
    clearCardHighlights();
    var card = restaurantList.querySelector('[data-index="' + idx + '"]');
    if (card) {
      card.classList.add('active');
    }
  }

  function clearCardHighlights() {
    var active = restaurantList.querySelectorAll('.restaurant-card.active');
    active.forEach(function (el) { el.classList.remove('active'); });
  }

  function scrollToCard(idx) {
    var card = restaurantList.querySelector('[data-index="' + idx + '"]');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ==================================================================
  // Location / Proximity
  // ==================================================================

  function setUserLocation(lat, lng, label) {
    userLocation = { lat: lat, lng: lng };

    // Remove old user marker
    if (userMarker) {
      map.removeLayer(userMarker);
    }

    // Add user marker
    userMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: '',
        html: '<div class="marker-user"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      }),
      zIndexOffset: 1000,
    }).addTo(map);
    userMarker.bindPopup('<div class="popup-content"><h3>You are here</h3><div class="popup-location">' + escapeHtml(label) + '</div></div>');

    // Recalculate distances
    markers.forEach(function (m) {
      m.distance = haversineDistance(lat, lng, m.data.lat, m.data.lng);
      // Update popup with distance
      m.marker.setPopupContent(buildPopupContent(m.data, m.distance));
    });

    // Re-render sidebar sorted by distance
    renderSidebar();

    // Zoom to show user and nearest 5 restaurants
    zoomToNearest();

    locationStatus.textContent = label;
    locationStatus.classList.remove('error');
  }

  function zoomToNearest() {
    var sorted = markers.slice().sort(function (a, b) {
      return (a.distance || Infinity) - (b.distance || Infinity);
    });

    var nearest = sorted.slice(0, 5);
    var bounds = L.latLngBounds([
      [userLocation.lat, userLocation.lng],
    ]);

    nearest.forEach(function (m) {
      bounds.extend([m.data.lat, m.data.lng]);
    });

    map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 12, duration: 1.5 });
  }

  function clearLocation() {
    userLocation = null;
    if (userMarker) {
      map.removeLayer(userMarker);
      userMarker = null;
    }
    markers.forEach(function (m) {
      m.distance = null;
      m.marker.setPopupContent(buildPopupContent(m.data, null));
    });
    zipInput.value = '';
    searchInput.value = '';
    searchQuery = '';
    activeFilters.clear();
    locationStatus.textContent = '';

    // Reset filter stamp styles
    var stamps = filterContainer.querySelectorAll('.stamp-filter');
    stamps.forEach(function (s) { s.classList.remove('active'); });

    renderSidebar();
    map.flyTo([20, 0], 2, { duration: 1 });
  }

  // Zip code search handler
  async function handleZipSearch() {
    var zip = zipInput.value.trim();
    if (!/^\d{5}$/.test(zip)) {
      locationStatus.textContent = 'Please enter a valid 5-digit US zip code';
      locationStatus.classList.add('error');
      return;
    }

    locationStatus.textContent = 'Looking up zip code...';
    locationStatus.classList.remove('error');

    try {
      var result = await geocodeZip(zip);
      setUserLocation(result.lat, result.lng, result.city + ', ' + result.state + ' ' + zip);
    } catch (e) {
      locationStatus.textContent = 'Could not find that zip code. Try another.';
      locationStatus.classList.add('error');
    }
  }

  // Geolocation handler
  async function handleGeolocate() {
    locationStatus.textContent = 'Finding your location...';
    locationStatus.classList.remove('error');

    try {
      var pos = await getUserLocation();
      setUserLocation(pos.lat, pos.lng, 'Your location (' + pos.lat.toFixed(4) + ', ' + pos.lng.toFixed(4) + ')');
    } catch (e) {
      locationStatus.textContent = e.message;
      locationStatus.classList.add('error');
    }
  }

  // ==================================================================
  // Surprise Me
  // ==================================================================

  function handleSurprise() {
    var filtered = getFilteredRestaurants();
    if (filtered.length === 0) return;
    var pick = filtered[Math.floor(Math.random() * filtered.length)];
    flyToMarker(pick.index);
  }

  // ==================================================================
  // Filters
  // ==================================================================

  function initFilters() {
    var shows = Object.keys(SHOW_MAP);
    shows.forEach(function (show) {
      var info = SHOW_MAP[show];
      var btn = document.createElement('button');
      btn.className = 'stamp-filter ' + info.cssClass;
      btn.textContent = info.fullName;
      btn.setAttribute('data-show', show);

      btn.addEventListener('click', function () {
        if (activeFilters.has(show)) {
          activeFilters.delete(show);
          btn.classList.remove('active');
        } else {
          activeFilters.add(show);
          btn.classList.add('active');
        }
        renderSidebar();
      });

      filterContainer.appendChild(btn);
    });
  }

  // ==================================================================
  // Event Listeners
  // ==================================================================

  function initEvents() {
    // Zip code search
    btnSearch.addEventListener('click', handleZipSearch);
    zipInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleZipSearch();
    });

    // Geolocation
    btnLocate.addEventListener('click', handleGeolocate);

    // Reset
    btnReset.addEventListener('click', clearLocation);

    // Surprise Me
    btnSurprise.addEventListener('click', handleSurprise);

    // Search
    var debouncedSearch = debounce(function () {
      searchQuery = searchInput.value.trim();
      renderSidebar();
    }, 250);
    searchInput.addEventListener('input', debouncedSearch);
  }

  // ==================================================================
  // Bootstrap
  // ==================================================================

  function init() {
    initMap();
    addMarkers();
    initFilters();
    renderSidebar();
    initEvents();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
