/**
 * Utility functions for Eat Like Anthony
 */

/**
 * Calculate the haversine distance between two points on Earth.
 * @param {number} lat1 - Latitude of point 1 (degrees)
 * @param {number} lon1 - Longitude of point 1 (degrees)
 * @param {number} lat2 - Latitude of point 2 (degrees)
 * @param {number} lon2 - Longitude of point 2 (degrees)
 * @returns {number} Distance in miles
 */
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 3958.8; // Earth's radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Format distance for display.
 * Under 1 mile: show decimal. Under 100: one decimal. Over 100: integer with commas.
 */
function formatDistance(miles) {
  if (miles < 1) {
    return miles.toFixed(2) + ' mi';
  } else if (miles < 100) {
    return miles.toFixed(1) + ' mi';
  } else {
    return Math.round(miles).toLocaleString() + ' mi';
  }
}

/**
 * Geocode a US zip code using the Zippopotam.us API.
 * @param {string} zip - 5-digit US zip code
 * @returns {Promise<{lat: number, lng: number, city: string, state: string}>}
 */
async function geocodeZip(zip) {
  const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
  if (!response.ok) {
    throw new Error('Invalid zip code');
  }
  const data = await response.json();
  const place = data.places[0];
  return {
    lat: parseFloat(place.latitude),
    lng: parseFloat(place.longitude),
    city: place['place name'],
    state: place['state abbreviation'],
  };
}

/**
 * Get the user's current position via browser geolocation.
 * @returns {Promise<{lat: number, lng: number}>}
 */
function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error('Unable to retrieve your location'));
      },
      { timeout: 10000 }
    );
  });
}

/**
 * Debounce a function call.
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Escape HTML to prevent XSS in dynamic content.
 */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
