/**
 * Bourdain's Table — Restaurant Dataset
 *
 * Restaurants Anthony Bourdain visited across his TV shows:
 *   - A Cook's Tour (CT) — Food Network, 2002–2003
 *   - No Reservations (NR) — Travel Channel, 2005–2012
 *   - The Layover (LO) — Travel Channel, 2011–2013
 *   - Parts Unknown (PU) — CNN, 2013–2018
 *
 * Sources:
 *   - anthonybourdainworldmap.com
 *   - eatlikebourdain.com
 *   - noreservationslocations.com
 *   - Episode guides on Wikipedia
 *   - Various Bourdain fan databases and articles
 */

const RESTAURANTS = [
  // ===== UNITED STATES =====
  {
    name: "Katz's Delicatessen",
    city: "New York",
    state: "NY",
    country: "United States",
    lat: 40.7223,
    lng: -73.9874,
    show: "No Reservations",
    season: 1,
    episode: 1,
    dish: "Pastrami on rye",
    note: "Bourdain called this an essential New York experience. The pastrami here has been hand-carved since 1888.",
    status: "open"
  },
  {
    name: "Le Bernardin",
    city: "New York",
    state: "NY",
    country: "United States",
    lat: 40.7615,
    lng: -73.9818,
    show: "No Reservations",
    season: 4,
    episode: 3,
    dish: "Poached halibut, tuna tartare",
    note: "Eric Ripert's legendary seafood temple. Bourdain and Ripert were close friends — this was like a second home for him.",
    status: "open"
  },
  {
    name: "Peter Luger Steak House",
    city: "Brooklyn",
    state: "NY",
    country: "United States",
    lat: 40.7099,
    lng: -73.9625,
    show: "No Reservations",
    season: 4,
    episode: 3,
    dish: "Porterhouse for two",
    note: "Cash only, no-nonsense service, legendary porterhouse. Bourdain considered it the gold standard of New York steakhouses.",
    status: "open"
  },
  {
    name: "Franklin Barbecue",
    city: "Austin",
    state: "TX",
    country: "United States",
    lat: 30.2701,
    lng: -97.7313,
    show: "Parts Unknown",
    season: 4,
    episode: 5,
    dish: "Brisket",
    note: "Bourdain waited in the infamous line and declared the brisket worth every minute. Aaron Franklin's masterwork.",
    status: "open"
  },
  {
    name: "Waffle House",
    city: "Atlanta",
    state: "GA",
    country: "United States",
    lat: 33.7600,
    lng: -84.3885,
    show: "Parts Unknown",
    season: 7,
    episode: 6,
    dish: "Scattered, smothered, and covered hash browns",
    note: "Bourdain was a vocal Waffle House fan, calling it 'an irony-free zone where everything is beautiful and nothing hurts.'",
    status: "open"
  },
  {
    name: "Casamento's",
    city: "New Orleans",
    state: "LA",
    country: "United States",
    lat: 29.9175,
    lng: -90.1043,
    show: "No Reservations",
    season: 2,
    episode: 1,
    dish: "Oyster loaf",
    note: "White-tiled neighborhood oyster joint. Bourdain loved the raw oysters and the old-school fried oyster loaf.",
    status: "open"
  },
  {
    name: "Dooky Chase's",
    city: "New Orleans",
    state: "LA",
    country: "United States",
    lat: 29.9671,
    lng: -90.0795,
    show: "Parts Unknown",
    season: 11,
    episode: 1,
    dish: "Fried chicken, gumbo z'herbes",
    note: "Leah Chase's legendary Creole restaurant. Bourdain visited after Hurricane Katrina and called her the Queen of Creole Cuisine.",
    status: "open"
  },
  {
    name: "Willie Mae's Scotch House",
    city: "New Orleans",
    state: "LA",
    country: "United States",
    lat: 29.9619,
    lng: -90.0785,
    show: "No Reservations",
    season: 2,
    episode: 1,
    dish: "Fried chicken",
    note: "Bourdain said this was the best fried chicken in the world — crispy, peppery, transcendent.",
    status: "open"
  },
  {
    name: "Parkway Bakery & Tavern",
    city: "New Orleans",
    state: "LA",
    country: "United States",
    lat: 29.9696,
    lng: -90.0914,
    show: "No Reservations",
    season: 2,
    episode: 1,
    dish: "Roast beef po'boy",
    note: "A classic New Orleans po'boy spot. Bourdain loved the overflowing roast beef with gravy.",
    status: "open"
  },
  {
    name: "Prince's Hot Chicken Shack",
    city: "Nashville",
    state: "TN",
    country: "United States",
    lat: 36.1761,
    lng: -86.7545,
    show: "No Reservations",
    season: 4,
    episode: 12,
    dish: "Hot chicken",
    note: "The originator of Nashville hot chicken. Bourdain called it 'uniquely, assertively, almost hallucinogenically spicy.'",
    status: "open"
  },
  {
    name: "Pat's King of Steaks",
    city: "Philadelphia",
    state: "PA",
    country: "United States",
    lat: 39.9334,
    lng: -75.1588,
    show: "No Reservations",
    season: 4,
    episode: 17,
    dish: "Cheesesteak",
    note: "Bourdain weighed in on the Pat's vs. Geno's debate, covering the cheesesteak war at the corner of 9th and Passyunk.",
    status: "open"
  },
  {
    name: "Swan Oyster Depot",
    city: "San Francisco",
    state: "CA",
    country: "United States",
    lat: 37.7866,
    lng: -122.4218,
    show: "The Layover",
    season: 1,
    episode: 1,
    dish: "Dungeness crab, oysters on the half shell",
    note: "Counter-only, no tables. Bourdain called it one of his favorite places in America — the seafood salad and cracked crab are legendary.",
    status: "open"
  },
  {
    name: "Tadich Grill",
    city: "San Francisco",
    state: "CA",
    country: "United States",
    lat: 37.7915,
    lng: -122.4006,
    show: "The Layover",
    season: 1,
    episode: 1,
    dish: "Cioppino, sand dabs",
    note: "California's oldest continuously operating restaurant, since 1849. Bourdain appreciated its no-nonsense seafood tradition.",
    status: "open"
  },
  {
    name: "Philippe's",
    city: "Los Angeles",
    state: "CA",
    country: "United States",
    lat: 34.0589,
    lng: -118.2381,
    show: "The Layover",
    season: 2,
    episode: 1,
    dish: "French dip sandwich",
    note: "Claims to have invented the French dip in 1918. Bourdain enjoyed the no-frills sawdust-on-the-floor atmosphere.",
    status: "open"
  },
  {
    name: "In-N-Out Burger",
    city: "Los Angeles",
    state: "CA",
    country: "United States",
    lat: 34.0556,
    lng: -118.3538,
    show: "The Layover",
    season: 2,
    episode: 1,
    dish: "Double-Double Animal Style",
    note: "Bourdain admitted his love for In-N-Out, calling it a California essential and one of the best fast-food burgers around.",
    status: "open"
  },
  {
    name: "Pizzeria Bianco",
    city: "Phoenix",
    state: "AZ",
    country: "United States",
    lat: 33.4499,
    lng: -112.0660,
    show: "No Reservations",
    season: 3,
    episode: 11,
    dish: "Rosa pizza (red onion, pistachios, Parmigiano, rosemary)",
    note: "Chris Bianco's legendary pizza. Bourdain declared it the best pizza in America.",
    status: "open"
  },
  {
    name: "Skyline Chili",
    city: "Cincinnati",
    state: "OH",
    country: "United States",
    lat: 39.1021,
    lng: -84.5120,
    show: "No Reservations",
    season: 5,
    episode: 16,
    dish: "3-way (chili, spaghetti, cheese)",
    note: "Cincinnati-style chili. Bourdain was fascinated by the regional obsession and tried it in the city that worships it.",
    status: "open"
  },
  {
    name: "Joe's Stone Crab",
    city: "Miami Beach",
    state: "FL",
    country: "United States",
    lat: 25.7682,
    lng: -80.1342,
    show: "No Reservations",
    season: 4,
    episode: 1,
    dish: "Stone crab claws, key lime pie",
    note: "An iconic South Beach institution since 1913. Bourdain loved the perfectly cracked stone crab claws and the mustard sauce.",
    status: "open"
  },
  {
    name: "The Varsity",
    city: "Atlanta",
    state: "GA",
    country: "United States",
    lat: 33.7711,
    lng: -84.3893,
    show: "Parts Unknown",
    season: 7,
    episode: 6,
    dish: "Chili dogs, onion rings, frosted orange",
    note: "The world's largest drive-in restaurant. Bourdain explored Atlanta's food culture with this greasy-spoon icon.",
    status: "open"
  },
  {
    name: "Cochon",
    city: "New Orleans",
    state: "LA",
    country: "United States",
    lat: 29.9419,
    lng: -90.0671,
    show: "No Reservations",
    season: 2,
    episode: 1,
    dish: "Cochon with turnips, cracklins",
    note: "Donald Link's Cajun-meets-fine-dining concept. Bourdain loved the whole-hog approach and nose-to-tail cooking.",
    status: "open"
  },
  {
    name: "Keens Steakhouse",
    city: "New York",
    state: "NY",
    country: "United States",
    lat: 40.7505,
    lng: -73.9887,
    show: "The Layover",
    season: 1,
    episode: 2,
    dish: "Mutton chop",
    note: "Since 1885, famous for its legendary mutton chop and collection of clay pipes on the ceiling. A Bourdain favorite.",
    status: "open"
  },
  {
    name: "Shopsin's",
    city: "New York",
    state: "NY",
    country: "United States",
    lat: 40.7423,
    lng: -74.0041,
    show: "No Reservations",
    season: 4,
    episode: 3,
    dish: "Mac and cheese pancakes",
    note: "Kenny Shopsin's famously cranky restaurant with a 900-item menu. Bourdain found it gloriously unhinged.",
    status: "open"
  },
  {
    name: "Husk",
    city: "Charleston",
    state: "SC",
    country: "United States",
    lat: 32.7789,
    lng: -79.9313,
    show: "Parts Unknown",
    season: 4,
    episode: 2,
    dish: "Cheeseburger, shrimp and grits",
    note: "Sean Brock's Southern restaurant. Bourdain was moved by Brock's mission to revive heirloom Southern ingredients.",
    status: "open"
  },
  {
    name: "Doe's Eat Place",
    city: "Greenville",
    state: "MS",
    country: "United States",
    lat: 33.4101,
    lng: -91.0571,
    show: "Parts Unknown",
    season: 3,
    episode: 8,
    dish: "Hot tamales, porterhouse steak",
    note: "A Mississippi Delta institution. You enter through the kitchen. Bourdain was fascinated by the Delta's food traditions.",
    status: "open"
  },
  {
    name: "Pepe's Pizzeria",
    city: "New Haven",
    state: "CT",
    country: "United States",
    lat: 41.3027,
    lng: -72.9078,
    show: "No Reservations",
    season: 4,
    episode: 3,
    dish: "White clam pizza (apizza)",
    note: "Bourdain loved New Haven-style apizza and called Pepe's white clam pie one of the great American food experiences.",
    status: "open"
  },
  {
    name: "Jim's Steaks",
    city: "Philadelphia",
    state: "PA",
    country: "United States",
    lat: 39.9372,
    lng: -75.1590,
    show: "No Reservations",
    season: 4,
    episode: 17,
    dish: "Cheesesteak with Whiz",
    note: "Part of Bourdain's Philly cheesesteak exploration. The South Street location is a local icon.",
    status: "closed"
  },

  // ===== VIETNAM =====
  {
    name: "Bún Chả Hương Liên",
    city: "Hanoi",
    country: "Vietnam",
    lat: 21.0133,
    lng: 105.8485,
    show: "Parts Unknown",
    season: 8,
    episode: 1,
    dish: "Bún chả",
    note: "Where Bourdain dined with President Obama on tiny plastic stools, drinking Hanoi beer. The 'Obama combo' is now on the menu.",
    status: "open"
  },
  {
    name: "Phở Gia Truyền",
    city: "Hanoi",
    country: "Vietnam",
    lat: 21.0348,
    lng: 105.8516,
    show: "No Reservations",
    season: 5,
    episode: 5,
    dish: "Phở bò (beef pho)",
    note: "A family-run phở stall since the 1950s. Bourdain called Vietnamese phở the greatest soup in the world.",
    status: "open"
  },
  {
    name: "Quán Ăn Ngon",
    city: "Hanoi",
    country: "Vietnam",
    lat: 21.0255,
    lng: 105.8429,
    show: "A Cook's Tour",
    season: 1,
    episode: 7,
    dish: "Various Vietnamese street foods",
    note: "One of the first places Bourdain fell in love with Vietnam — the trip that changed everything for him.",
    status: "open"
  },
  {
    name: "Lunch Lady (Nguyễn Thị Thanh)",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.7875,
    lng: 106.7011,
    show: "No Reservations",
    season: 5,
    episode: 5,
    dish: "Different noodle soup each day",
    note: "A street vendor with a different soup each day of the week. Bourdain helped make her famous worldwide.",
    status: "open"
  },
  {
    name: "Cơm Niêu Sài Gòn",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.7885,
    lng: 106.6918,
    show: "A Cook's Tour",
    season: 1,
    episode: 8,
    dish: "Clay pot rice, broken rice dishes",
    note: "Famous for throwing clay pots of rice across the restaurant. Bourdain was captivated by the spectacle and the food.",
    status: "open"
  },

  // ===== JAPAN =====
  {
    name: "Sukiyabashi Jiro",
    city: "Tokyo",
    country: "Japan",
    lat: 35.6735,
    lng: 139.7636,
    show: "No Reservations",
    season: 7,
    episode: 1,
    dish: "Omakase sushi",
    note: "Jiro Ono's legendary 10-seat sushi counter in a subway station. Bourdain was awestruck by the precision and devotion.",
    status: "open"
  },
  {
    name: "Ramen Street (Tokyo Station)",
    city: "Tokyo",
    country: "Japan",
    lat: 35.6812,
    lng: 139.7671,
    show: "No Reservations",
    season: 7,
    episode: 1,
    dish: "Various ramen styles",
    note: "The underground ramen alley beneath Tokyo Station. Bourdain slurped his way through multiple bowls.",
    status: "open"
  },
  {
    name: "Yakitori Alley (Yurakucho)",
    city: "Tokyo",
    country: "Japan",
    lat: 35.6746,
    lng: 139.7628,
    show: "No Reservations",
    season: 7,
    episode: 1,
    dish: "Chicken yakitori, grilled organs",
    note: "Tiny smoke-filled yakitori stalls under the train tracks. Bourdain loved the late-night atmosphere and cold beer.",
    status: "open"
  },
  {
    name: "Tsukiji Fish Market",
    city: "Tokyo",
    country: "Japan",
    lat: 35.6654,
    lng: 139.7707,
    show: "A Cook's Tour",
    season: 1,
    episode: 3,
    dish: "Tuna sashimi, sushi breakfast",
    note: "Bourdain visited the iconic tuna auction and had sushi for breakfast. Now relocated to Toyosu Market.",
    status: "closed"
  },
  {
    name: "Warayakiya",
    city: "Tokyo",
    country: "Japan",
    lat: 35.6627,
    lng: 139.7047,
    show: "Parts Unknown",
    season: 2,
    episode: 7,
    dish: "Straw-flame seared bonito (katsuo no tataki)",
    note: "Specializes in straw-fire grilling. Bourdain was mesmerized by the dramatic open-flame technique.",
    status: "open"
  },
  {
    name: "Osaka street food (Dōtonbori)",
    city: "Osaka",
    country: "Japan",
    lat: 34.6687,
    lng: 135.5013,
    show: "No Reservations",
    season: 7,
    episode: 2,
    dish: "Takoyaki, okonomiyaki",
    note: "Bourdain explored Osaka's street food culture — Japan's kitchen — and stuffed himself with octopus balls and savory pancakes.",
    status: "open"
  },

  // ===== FRANCE =====
  {
    name: "Le Comptoir du Panthéon",
    city: "Paris",
    country: "France",
    lat: 48.8462,
    lng: 2.3449,
    show: "No Reservations",
    season: 3,
    episode: 4,
    dish: "Steak frites, crème brûlée",
    note: "A classic Parisian bistro. Bourdain loved the simplicity and perfection of a well-executed steak frites.",
    status: "open"
  },
  {
    name: "Au Pied de Cochon",
    city: "Paris",
    country: "France",
    lat: 48.8617,
    lng: 2.3461,
    show: "A Cook's Tour",
    season: 1,
    episode: 11,
    dish: "Pied de cochon (pig's foot), onion soup",
    note: "24-hour brasserie near Les Halles. Bourdain loved the unapologetic celebration of pig parts and late-night excess.",
    status: "open"
  },
  {
    name: "L'Ami Jean",
    city: "Paris",
    country: "France",
    lat: 48.8591,
    lng: 2.3121,
    show: "The Layover",
    season: 2,
    episode: 6,
    dish: "Rice pudding, Basque dishes",
    note: "Stéphane Jégo's Basque-influenced bistro. Bourdain raved about the legendary rice pudding.",
    status: "open"
  },
  {
    name: "Le Chateaubriand",
    city: "Paris",
    country: "France",
    lat: 48.8688,
    lng: 2.3753,
    show: "The Layover",
    season: 2,
    episode: 6,
    dish: "Tasting menu (changes daily)",
    note: "Inaki Aizpitarte's neo-bistro that redefined Parisian dining. Bourdain was excited by its creative, irreverent approach.",
    status: "open"
  },
  {
    name: "Les Halles",
    city: "New York",
    state: "NY",
    country: "United States",
    lat: 40.7077,
    lng: -74.0049,
    show: "A Cook's Tour",
    season: 1,
    episode: 1,
    dish: "Steak frites, cassoulet",
    note: "The Park Avenue brasserie where Bourdain was executive chef. This is where Kitchen Confidential happened. Now closed.",
    status: "closed"
  },
  {
    name: "La Closerie des Lilas",
    city: "Paris",
    country: "France",
    lat: 48.8428,
    lng: 2.3376,
    show: "Parts Unknown",
    season: 11,
    episode: 8,
    dish: "Steak tartare",
    note: "Hemingway's favorite bar. Bourdain, a Hemingway devotee, drank here and reflected on the literary Paris he loved.",
    status: "open"
  },

  // ===== ITALY =====
  {
    name: "Da Enzo al 29",
    city: "Rome",
    country: "Italy",
    lat: 41.8893,
    lng: 12.4748,
    show: "Parts Unknown",
    season: 8,
    episode: 7,
    dish: "Cacio e pepe, carbonara",
    note: "A Trastevere trattoria doing Roman classics to perfection. Bourdain loved the simplicity of proper cacio e pepe.",
    status: "open"
  },
  {
    name: "Roscioli",
    city: "Rome",
    country: "Italy",
    lat: 41.8943,
    lng: 12.4735,
    show: "Parts Unknown",
    season: 8,
    episode: 7,
    dish: "Carbonara, salumi and cheese",
    note: "Bakery, deli, and restaurant. Bourdain went deep on the carbonara and the curated selection of Italian cured meats.",
    status: "open"
  },
  {
    name: "Pizzeria Da Michele",
    city: "Naples",
    country: "Italy",
    lat: 40.8494,
    lng: 14.2629,
    show: "No Reservations",
    season: 7,
    episode: 11,
    dish: "Margherita pizza",
    note: "Since 1870, serving only margherita and marinara. Bourdain called it the purest expression of Neapolitan pizza.",
    status: "open"
  },
  {
    name: "Trattoria Mario",
    city: "Florence",
    country: "Italy",
    lat: 43.7741,
    lng: 11.2524,
    show: "No Reservations",
    season: 7,
    episode: 11,
    dish: "Bistecca alla fiorentina, ribollita",
    note: "A communal-table lunch-only spot near the San Lorenzo Market. Bourdain loved the massive Florentine steak.",
    status: "open"
  },

  // ===== MEXICO =====
  {
    name: "Tacos El Califa de León",
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4367,
    lng: -99.1477,
    show: "Parts Unknown",
    season: 3,
    episode: 7,
    dish: "Tacos de bistec, suadero tacos",
    note: "Street-side taco stand. Bourdain devoured tacos in Mexico City and declared the street food culture unbeatable.",
    status: "open"
  },
  {
    name: "Pujol",
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4336,
    lng: -99.1905,
    show: "Parts Unknown",
    season: 3,
    episode: 7,
    dish: "Mole madre (two moles, aged and fresh)",
    note: "Enrique Olvera's world-renowned restaurant. Bourdain was moved by the mole madre — 1,500+ days of mole layered with new.",
    status: "open"
  },
  {
    name: "Contramar",
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4234,
    lng: -99.1716,
    show: "Parts Unknown",
    season: 3,
    episode: 7,
    dish: "Tuna tostadas, grilled red and green snapper",
    note: "Gabriela Cámara's seafood restaurant. Bourdain loved the split-painted grilled snapper — half red, half green.",
    status: "open"
  },
  {
    name: "La Guerrerense",
    city: "Ensenada",
    country: "Mexico",
    lat: 31.8624,
    lng: -116.6267,
    show: "No Reservations",
    season: 4,
    episode: 8,
    dish: "Sea urchin tostadas, ceviche",
    note: "Sabina Bandera's legendary street cart. Bourdain declared her seafood tostadas among the best things he'd ever eaten.",
    status: "open"
  },

  // ===== PERU =====
  {
    name: "Central",
    city: "Lima",
    country: "Peru",
    lat: -12.1526,
    lng: -77.0226,
    show: "Parts Unknown",
    season: 6,
    episode: 6,
    dish: "Tasting menu exploring Peru's altitudes",
    note: "Virgilio Martínez's altitude-based tasting menu. Bourdain was fascinated by the exploration of Peru's ecosystems through food.",
    status: "open"
  },
  {
    name: "La Mar",
    city: "Lima",
    country: "Peru",
    lat: -12.1207,
    lng: -77.0335,
    show: "No Reservations",
    season: 4,
    episode: 15,
    dish: "Ceviche, tiradito",
    note: "Gastón Acurio's cevichería. Bourdain called Lima a world-class food city and the ceviche here magnificent.",
    status: "open"
  },
  {
    name: "Anticuchos street vendors",
    city: "Lima",
    country: "Peru",
    lat: -12.0580,
    lng: -77.0375,
    show: "No Reservations",
    season: 4,
    episode: 15,
    dish: "Anticuchos (grilled beef heart skewers)",
    note: "Street-grilled beef hearts over charcoal. Bourdain called anticuchos 'one of the greatest street foods on earth.'",
    status: "open"
  },

  // ===== ARGENTINA =====
  {
    name: "Don Julio",
    city: "Buenos Aires",
    country: "Argentina",
    lat: -34.5866,
    lng: -58.4261,
    show: "Parts Unknown",
    season: 10,
    episode: 4,
    dish: "Ojo de bife (ribeye), provoleta",
    note: "One of Buenos Aires' top parrillas. Bourdain loved the Argentine ritual of grilling massive cuts over open flame.",
    status: "open"
  },
  {
    name: "El Obrero",
    city: "Buenos Aires",
    country: "Argentina",
    lat: -34.6422,
    lng: -58.3618,
    show: "No Reservations",
    season: 3,
    episode: 5,
    dish: "Milanesa, grilled meats, flan",
    note: "A La Boca neighborhood bodegón. Bourdain appreciated this working-class joint covered in soccer memorabilia.",
    status: "open"
  },

  // ===== LEBANON =====
  {
    name: "Tawlet",
    city: "Beirut",
    country: "Lebanon",
    lat: 33.8925,
    lng: 35.5075,
    show: "Parts Unknown",
    season: 1,
    episode: 3,
    dish: "Lebanese home cooking buffet",
    note: "A different grandmother cooks each day. Bourdain was deeply moved by Beirut and the resilience of its food culture.",
    status: "open"
  },
  {
    name: "Le Chef",
    city: "Beirut",
    country: "Lebanon",
    lat: 33.8968,
    lng: 35.5095,
    show: "Parts Unknown",
    season: 1,
    episode: 3,
    dish: "Kibbeh, stuffed grape leaves, moussaka",
    note: "A tiny hole-in-the-wall serving homestyle Lebanese food. Bourdain called it the real Beirut experience.",
    status: "open"
  },

  // ===== SINGAPORE =====
  {
    name: "Tian Tian Hainanese Chicken Rice",
    city: "Singapore",
    country: "Singapore",
    lat: 1.2806,
    lng: 103.8445,
    show: "Parts Unknown",
    season: 10,
    episode: 1,
    dish: "Hainanese chicken rice",
    note: "Maxwell Food Centre hawker stall. Bourdain called Singapore's hawker centers some of the best eating on the planet.",
    status: "open"
  },
  {
    name: "328 Katong Laksa",
    city: "Singapore",
    country: "Singapore",
    lat: 1.3050,
    lng: 103.9048,
    show: "Parts Unknown",
    season: 10,
    episode: 1,
    dish: "Katong laksa",
    note: "Famous for their rich, spicy coconut curry laksa — eaten with a spoon because the noodles are cut short.",
    status: "open"
  },
  {
    name: "Jumbo Seafood",
    city: "Singapore",
    country: "Singapore",
    lat: 1.2884,
    lng: 103.8535,
    show: "No Reservations",
    season: 3,
    episode: 9,
    dish: "Chilli crab",
    note: "Singapore's iconic chilli crab. Bourdain called it mandatory eating — sweet, spicy, messy, and perfect with mantou buns.",
    status: "open"
  },

  // ===== HONG KONG =====
  {
    name: "Tim Ho Wan",
    city: "Hong Kong",
    country: "Hong Kong",
    lat: 22.3282,
    lng: 114.1604,
    show: "The Layover",
    season: 2,
    episode: 4,
    dish: "BBQ pork buns, shrimp dumplings",
    note: "The cheapest Michelin-starred restaurant in the world. Bourdain said the baked BBQ pork buns were 'insanely good.'",
    status: "open"
  },
  {
    name: "Yat Lok",
    city: "Hong Kong",
    country: "Hong Kong",
    lat: 22.2832,
    lng: 114.1553,
    show: "Parts Unknown",
    season: 12,
    episode: 1,
    dish: "Roast goose",
    note: "One-Michelin-star roast goose in a bare-bones setting. Bourdain loved the lacquered, crispy-skinned goose.",
    status: "open"
  },
  {
    name: "Ser Wong Fun",
    city: "Hong Kong",
    country: "Hong Kong",
    lat: 22.2841,
    lng: 114.1535,
    show: "No Reservations",
    season: 1,
    episode: 12,
    dish: "Snake soup",
    note: "A legendary snake soup restaurant. Bourdain was game for anything, and snake soup in Hong Kong was right up his alley.",
    status: "open"
  },

  // ===== SOUTH KOREA =====
  {
    name: "Gwangjang Market",
    city: "Seoul",
    country: "South Korea",
    lat: 37.5700,
    lng: 126.9991,
    show: "Parts Unknown",
    season: 5,
    episode: 1,
    dish: "Bindaetteok (mung bean pancakes), japchae",
    note: "Korea's oldest traditional market. Bourdain wandered the stalls, eating mung bean pancakes fried to order.",
    status: "open"
  },
  {
    name: "Myeongdong Kyoja",
    city: "Seoul",
    country: "South Korea",
    lat: 37.5634,
    lng: 126.9859,
    show: "Parts Unknown",
    season: 5,
    episode: 1,
    dish: "Kalguksu (knife-cut noodle soup)",
    note: "A Seoul institution famous for its hand-cut noodle soup. Simple, comforting, and packed at lunchtime.",
    status: "open"
  },

  // ===== CHINA =====
  {
    name: "Sichuan hot pot restaurants",
    city: "Chengdu",
    country: "China",
    lat: 30.5728,
    lng: 104.0668,
    show: "Parts Unknown",
    season: 1,
    episode: 5,
    dish: "Má là hot pot (numbing and spicy)",
    note: "Bourdain dove into Sichuan's fiery hot pot culture, embracing the mouth-numbing Sichuan peppercorn experience.",
    status: "open"
  },
  {
    name: "Street food stalls",
    city: "Shanghai",
    country: "China",
    lat: 31.2304,
    lng: 121.4737,
    show: "No Reservations",
    season: 3,
    episode: 2,
    dish: "Xiaolongbao (soup dumplings), scallion pancakes",
    note: "Bourdain explored Shanghai's rapidly changing food landscape, from street dumplings to high-end dining.",
    status: "open"
  },

  // ===== INDIA =====
  {
    name: "Karim's",
    city: "Delhi",
    country: "India",
    lat: 28.6505,
    lng: 77.2337,
    show: "No Reservations",
    season: 2,
    episode: 10,
    dish: "Mutton korma, seekh kebab, naan",
    note: "Near the Jama Masjid, serving Mughlai cuisine since 1913. Bourdain called it a temple to meat.",
    status: "open"
  },
  {
    name: "Rajasthan street food",
    city: "Rajasthan",
    country: "India",
    lat: 26.9124,
    lng: 75.7873,
    show: "Parts Unknown",
    season: 4,
    episode: 4,
    dish: "Dal baati churma, laal maas",
    note: "Bourdain explored Rajasthani cuisine — the fiery red meat curry (laal maas) and traditional dal baati.",
    status: "open"
  },
  {
    name: "Leopold Café",
    city: "Mumbai",
    country: "India",
    lat: 18.9223,
    lng: 72.8317,
    show: "Parts Unknown",
    season: 4,
    episode: 4,
    dish: "Beer, Mumbai street food",
    note: "Iconic Colaba café. Bourdain drank here and discussed Mumbai's complex history and culinary diversity.",
    status: "open"
  },

  // ===== THAILAND =====
  {
    name: "Jay Fai",
    city: "Bangkok",
    country: "Thailand",
    lat: 13.7555,
    lng: 100.5019,
    show: "Parts Unknown",
    season: 8,
    episode: 5,
    dish: "Crab omelet, drunken noodles",
    note: "The legendary goggle-wearing street cook. Bourdain witnessed her wok skills — she later earned a Michelin star.",
    status: "open"
  },
  {
    name: "Raan Jay Fai (Pad Thai Thip Samai)",
    city: "Bangkok",
    country: "Thailand",
    lat: 13.7534,
    lng: 100.5027,
    show: "No Reservations",
    season: 3,
    episode: 3,
    dish: "Pad Thai wrapped in egg",
    note: "Famous for their pad Thai wrapped in a thin egg crepe. Bourdain called Bangkok street food the best in the world.",
    status: "open"
  },
  {
    name: "Isaan street food",
    city: "Chiang Mai",
    country: "Thailand",
    lat: 18.7883,
    lng: 98.9853,
    show: "No Reservations",
    season: 3,
    episode: 3,
    dish: "Larb, som tam (green papaya salad), sticky rice",
    note: "Bourdain explored Northern Thai and Isaan-style eating — spicy, sour, funky, and eaten with sticky rice by hand.",
    status: "open"
  },

  // ===== MOROCCO =====
  {
    name: "Djemaa el-Fna food stalls",
    city: "Marrakech",
    country: "Morocco",
    lat: 31.6258,
    lng: -7.9891,
    show: "No Reservations",
    season: 4,
    episode: 6,
    dish: "Lamb tagine, snail soup, grilled meats",
    note: "The famous night market. Bourdain waded into the chaos and smoke, eating grilled meats among the crowds and storytellers.",
    status: "open"
  },
  {
    name: "Café Clock",
    city: "Fez",
    country: "Morocco",
    lat: 34.0609,
    lng: -4.9736,
    show: "Parts Unknown",
    season: 2,
    episode: 4,
    dish: "Camel burger, Moroccan tea",
    note: "A cultural café in the medina. Bourdain explored Fez's labyrinthine old city and tried the famous camel burger.",
    status: "open"
  },

  // ===== TURKEY =====
  {
    name: "Çiya Sofrası",
    city: "Istanbul",
    country: "Turkey",
    lat: 41.0252,
    lng: 29.0255,
    show: "No Reservations",
    season: 5,
    episode: 3,
    dish: "Kurdish kebabs, regional Anatolian dishes",
    note: "Musa Dağdeviren's celebration of forgotten Turkish regional dishes. Bourdain called it one of his favorite restaurants anywhere.",
    status: "open"
  },
  {
    name: "Kebab stalls in Kadıköy",
    city: "Istanbul",
    country: "Turkey",
    lat: 40.9899,
    lng: 29.0240,
    show: "Parts Unknown",
    season: 3,
    episode: 4,
    dish: "Adana kebab, lahmacun",
    note: "Bourdain explored Istanbul's Asian side, eating street kebabs and enjoying the less-touristed Kadıköy neighborhood.",
    status: "open"
  },

  // ===== SPAIN =====
  {
    name: "Tickets",
    city: "Barcelona",
    country: "Spain",
    lat: 41.3755,
    lng: 2.1630,
    show: "Parts Unknown",
    season: 11,
    episode: 6,
    dish: "Avant-garde tapas",
    note: "Albert Adrià's creative tapas bar. Bourdain explored Barcelona's revolutionary food scene.",
    status: "open"
  },
  {
    name: "Bar Pinotxo",
    city: "Barcelona",
    country: "Spain",
    lat: 41.3818,
    lng: 2.1722,
    show: "No Reservations",
    season: 3,
    episode: 15,
    dish: "Chickpeas with blood sausage, baby squid",
    note: "Inside La Boqueria market. Bourdain loved this tiny counter for its honest, market-fresh Catalan cooking.",
    status: "open"
  },
  {
    name: "Asador Etxebarri",
    city: "Atxondo",
    country: "Spain",
    lat: 43.0958,
    lng: -2.5882,
    show: "Parts Unknown",
    season: 11,
    episode: 6,
    dish: "Grilled everything (chorizo, goat's milk, beef chop)",
    note: "Victor Arguinzoniz grills everything over custom charcoal. Bourdain called it one of the most exciting restaurants on earth.",
    status: "open"
  },
  {
    name: "Mercado de San Miguel",
    city: "Madrid",
    country: "Spain",
    lat: 40.4154,
    lng: -3.7089,
    show: "The Layover",
    season: 2,
    episode: 8,
    dish: "Jamón ibérico, pintxos, vermouth",
    note: "Bourdain grazed through this iron-and-glass market, sampling Ibérico ham and sipping vermouth from the barrel.",
    status: "open"
  },

  // ===== PORTUGAL =====
  {
    name: "Cervejaria Ramiro",
    city: "Lisbon",
    country: "Portugal",
    lat: 38.7214,
    lng: -9.1360,
    show: "Parts Unknown",
    season: 9,
    episode: 6,
    dish: "Tiger prawns, percebes (gooseneck barnacles), steak sandwich",
    note: "Bourdain loved the ritual: mountains of shellfish, ice-cold beer, and finishing with a steak sandwich. Pure Lisbon.",
    status: "open"
  },

  // ===== UNITED KINGDOM =====
  {
    name: "St. John",
    city: "London",
    country: "United Kingdom",
    lat: 51.5206,
    lng: -0.1012,
    show: "No Reservations",
    season: 3,
    episode: 14,
    dish: "Roast bone marrow and parsley salad",
    note: "Fergus Henderson's nose-to-tail temple. Bourdain called the bone marrow salad 'the dish that changed everything' for him.",
    status: "open"
  },
  {
    name: "The Harwood Arms",
    city: "London",
    country: "United Kingdom",
    lat: 51.4798,
    lng: -0.1948,
    show: "The Layover",
    season: 1,
    episode: 6,
    dish: "Venison scotch egg, game pie",
    note: "London's only Michelin-starred pub. Bourdain appreciated the elevated British pub food and the game-heavy menu.",
    status: "open"
  },
  {
    name: "Dishoom",
    city: "London",
    country: "United Kingdom",
    lat: 51.5158,
    lng: -0.1310,
    show: "Parts Unknown",
    season: 8,
    episode: 6,
    dish: "Bacon naan roll, black daal",
    note: "Bombay café-inspired restaurant. Bourdain was charmed by the bacon naan roll and London's evolving food scene.",
    status: "open"
  },

  // ===== COLOMBIA =====
  {
    name: "La Puerta Falsa",
    city: "Bogotá",
    country: "Colombia",
    lat: 4.5979,
    lng: -74.0748,
    show: "Parts Unknown",
    season: 11,
    episode: 5,
    dish: "Tamales, chocolate con queso, ajiaco",
    note: "Supposedly the smallest restaurant in Bogotá, operating since 1816. Bourdain had traditional chocolate with cheese.",
    status: "open"
  },
  {
    name: "Mini-Mal",
    city: "Bogotá",
    country: "Colombia",
    lat: 4.6055,
    lng: -74.0659,
    show: "Parts Unknown",
    season: 11,
    episode: 5,
    dish: "Modern Colombian tasting menu",
    note: "Eduardo Martínez's restaurant exploring Colombian indigenous ingredients. Bourdain was excited by the culinary potential.",
    status: "open"
  },

  // ===== BRAZIL =====
  {
    name: "Bar do Mineiro",
    city: "Rio de Janeiro",
    country: "Brazil",
    lat: -22.9217,
    lng: -43.1819,
    show: "No Reservations",
    season: 6,
    episode: 3,
    dish: "Feijoada, pastéis, caipirinhas",
    note: "In the Santa Teresa neighborhood. Bourdain loved the Saturday feijoada tradition and the bohemian vibe.",
    status: "open"
  },
  {
    name: "Mocotó",
    city: "São Paulo",
    country: "Brazil",
    lat: -23.4801,
    lng: -46.5782,
    show: "Parts Unknown",
    season: 2,
    episode: 1,
    dish: "Mocotó (cow foot soup), Northeastern Brazilian cuisine",
    note: "Rodrigo Oliveira's restaurant celebrating Brazil's Northeast. Bourdain was fascinated by the regional traditions.",
    status: "open"
  },

  // ===== ETHIOPIA =====
  {
    name: "Yod Abyssinia",
    city: "Addis Ababa",
    country: "Ethiopia",
    lat: 9.0054,
    lng: 38.7636,
    show: "Parts Unknown",
    season: 6,
    episode: 4,
    dish: "Injera with various wots (stews), kitfo (raw beef)",
    note: "Traditional Ethiopian dining with live music. Bourdain ate communally from shared injera platters, tearing and scooping.",
    status: "open"
  },

  // ===== NIGERIA =====
  {
    name: "Yellow Chilli",
    city: "Lagos",
    country: "Nigeria",
    lat: 6.4317,
    lng: 3.4328,
    show: "Parts Unknown",
    season: 7,
    episode: 8,
    dish: "Jollof rice, suya, pounded yam",
    note: "Bourdain explored Lagos's chaotic, vibrant food scene and was blown away by the energy and flavors of Nigerian cooking.",
    status: "open"
  },

  // ===== TRINIDAD =====
  {
    name: "Street food doubles vendors",
    city: "Port of Spain",
    country: "Trinidad and Tobago",
    lat: 10.6596,
    lng: -61.5086,
    show: "No Reservations",
    season: 5,
    episode: 12,
    dish: "Doubles (curried chickpeas in fried dough)",
    note: "Bourdain called Trinidad's doubles one of the world's great street foods — Indian-Caribbean fusion at its finest.",
    status: "open"
  },

  // ===== URUGUAY =====
  {
    name: "Mercado del Puerto",
    city: "Montevideo",
    country: "Uruguay",
    lat: -34.9074,
    lng: -56.2108,
    show: "No Reservations",
    season: 3,
    episode: 5,
    dish: "Asado (wood-fired grilled meats)",
    note: "A legendary market of open-fire grill restaurants. Bourdain loved the primal, smoke-filled meat market atmosphere.",
    status: "open"
  },

  // ===== IRAN =====
  {
    name: "Moslem Restaurant",
    city: "Tehran",
    country: "Iran",
    lat: 35.6731,
    lng: 51.4188,
    show: "Parts Unknown",
    season: 3,
    episode: 5,
    dish: "Tahdig (crispy rice), kebab koobideh",
    note: "Bourdain visited Iran when few Western cameras could. He was moved by the hospitality and the crispy tahdig rice.",
    status: "open"
  },

  // ===== LAOS =====
  {
    name: "Joma Bakery Café",
    city: "Luang Prabang",
    country: "Laos",
    lat: 19.8871,
    lng: 102.1352,
    show: "A Cook's Tour",
    season: 1,
    episode: 9,
    dish: "Coffee and pastries",
    note: "Bourdain explored the French colonial influence in Laos. The country's blend of French and Southeast Asian food fascinated him.",
    status: "open"
  },
  {
    name: "Night market food stalls",
    city: "Luang Prabang",
    country: "Laos",
    lat: 19.8876,
    lng: 102.1353,
    dish: "Laap, sticky rice, grilled meats",
    show: "Parts Unknown",
    season: 1,
    episode: 8,
    note: "Bourdain ate at the night market stalls along the Mekong, savoring Laotian laap and fresh herbs.",
    status: "open"
  },

  // ===== CAMBODIA =====
  {
    name: "Romdeng",
    city: "Phnom Penh",
    country: "Cambodia",
    lat: 11.5705,
    lng: 104.9275,
    show: "Parts Unknown",
    season: 1,
    episode: 4,
    dish: "Deep-fried tarantulas, fish amok",
    note: "A social enterprise training former street youth. Bourdain ate the deep-fried tarantulas — crispy outside, gooey inside.",
    status: "open"
  },

  // ===== MYANMAR =====
  {
    name: "Tea shops and street stalls",
    city: "Yangon",
    country: "Myanmar",
    lat: 16.8661,
    lng: 96.1951,
    show: "Parts Unknown",
    season: 1,
    episode: 1,
    dish: "Mohinga (fish noodle soup), tea leaf salad",
    note: "The very first Parts Unknown episode. Bourdain explored Myanmar as it was opening to the world, eating mohinga for breakfast.",
    status: "open"
  },

  // ===== PORTUGAL / AZORES =====
  {
    name: "Cozido das Furnas (geothermal stew)",
    city: "Furnas, São Miguel",
    country: "Portugal",
    lat: 37.7747,
    lng: -25.3095,
    show: "Parts Unknown",
    season: 9,
    episode: 6,
    dish: "Cozido das Furnas (stew cooked underground by volcanic heat)",
    note: "A stew literally cooked by volcanic heat underground. Bourdain watched it unearthed from the steaming ground.",
    status: "open"
  },

  // ===== GREECE =====
  {
    name: "To Steki tou Ilia",
    city: "Athens",
    country: "Greece",
    lat: 37.9764,
    lng: 23.7182,
    show: "Parts Unknown",
    season: 7,
    episode: 2,
    dish: "Grilled lamb chops, Greek salad",
    note: "A simple neighborhood taverna. Bourdain ate grilled lamb chops during a politically charged visit to Greece.",
    status: "open"
  },

  // ===== SENEGAL =====
  {
    name: "Restaurant Lagon 1",
    city: "Dakar",
    country: "Senegal",
    lat: 14.6713,
    lng: -17.4611,
    show: "Parts Unknown",
    season: 5,
    episode: 5,
    dish: "Thiéboudienne (fish and rice), yassa poulet",
    note: "Bourdain explored Senegalese cuisine and called thiéboudienne — the national dish — soul food in the truest sense.",
    status: "open"
  },

  // ===== GEORGIA (COUNTRY) =====
  {
    name: "Shavi Lomi",
    city: "Tbilisi",
    country: "Georgia",
    lat: 41.7052,
    lng: 44.8015,
    show: "Parts Unknown",
    season: 12,
    episode: 4,
    dish: "Khinkali (dumplings), khachapuri (cheese bread)",
    note: "Bourdain discovered Georgia's incredible food culture — the cheese-filled bread, soup dumplings, and legendary hospitality.",
    status: "open"
  },

  // ===== PHILIPPINES =====
  {
    name: "Aling Lucing's Sisig",
    city: "Angeles City",
    country: "Philippines",
    lat: 15.1449,
    lng: 120.5893,
    show: "Parts Unknown",
    season: 7,
    episode: 1,
    dish: "Sisig (sizzling chopped pig face)",
    note: "Credited as the birthplace of sisig. Bourdain declared sisig 'perfectly delicious — crunchy, sour, salty, rich.'",
    status: "open"
  },

  // ===== JAMAICA =====
  {
    name: "Scotchies",
    city: "Montego Bay",
    country: "Jamaica",
    lat: 18.4762,
    lng: -77.9227,
    show: "No Reservations",
    season: 4,
    episode: 4,
    dish: "Jerk chicken, jerk pork",
    note: "Open-air jerk pit using pimento wood. Bourdain loved the smoky, spicy, authentically Jamaican jerk.",
    status: "open"
  },

  // ===== COLOMBIA =====
  {
    name: "Bazurto Market food stalls",
    city: "Cartagena",
    country: "Colombia",
    lat: 10.4143,
    lng: -75.5354,
    show: "Parts Unknown",
    season: 11,
    episode: 5,
    dish: "Fried fish, coconut rice, patacones",
    note: "The chaotic, vibrant market of Cartagena. Bourdain waded in and ate with the locals far from the tourist areas.",
    status: "open"
  },

  // ===== ISRAEL/PALESTINE =====
  {
    name: "Abu Shukri",
    city: "Jerusalem",
    country: "Israel",
    lat: 31.7793,
    lng: 35.2309,
    show: "Parts Unknown",
    season: 2,
    episode: 1,
    dish: "Hummus, falafel, msabbaha",
    note: "In the Old City. Bourdain's Jerusalem episode was one of his most powerful — he explored food amid deep conflict.",
    status: "open"
  },

  // ===== SCOTLAND =====
  {
    name: "The Fife Arms",
    city: "Braemar",
    country: "United Kingdom",
    lat: 57.0063,
    lng: -3.3977,
    show: "Parts Unknown",
    season: 12,
    episode: 5,
    dish: "Venison, haggis, Scotch whisky",
    note: "Bourdain explored Scotland's wild Highlands, eating game and drinking whisky in the dramatic landscape.",
    status: "open"
  },

  // ===== DENMARK =====
  {
    name: "Noma",
    city: "Copenhagen",
    country: "Denmark",
    lat: 55.6836,
    lng: 12.6102,
    show: "Parts Unknown",
    season: 2,
    episode: 5,
    dish: "New Nordic tasting menu (foraging-based)",
    note: "René Redzepi's boundary-pushing restaurant. Bourdain respected the Nordic foraging philosophy even as he craved a burger.",
    status: "closed"
  },

  // ===== MALAYSIA =====
  {
    name: "Nasi kandar stalls",
    city: "Penang",
    country: "Malaysia",
    lat: 5.4141,
    lng: 100.3288,
    show: "No Reservations",
    season: 5,
    episode: 7,
    dish: "Char kway teow, nasi kandar, rojak",
    note: "Bourdain called Penang one of the great food cities. The char kway teow — wok hei-kissed noodles — left him speechless.",
    status: "open"
  },

  // ===== INDONESIA =====
  {
    name: "Warung street food",
    city: "Jakarta",
    country: "Indonesia",
    lat: -6.1751,
    lng: 106.8650,
    show: "Parts Unknown",
    season: 12,
    episode: 3,
    dish: "Nasi goreng, satay, bakso",
    note: "Bourdain explored Jakarta's street warungs and was overwhelmed by the diversity of Indonesia's food culture.",
    status: "open"
  },

  // ===== KENYA =====
  {
    name: "Carnivore Restaurant",
    city: "Nairobi",
    country: "Kenya",
    lat: -1.3273,
    lng: 36.7841,
    show: "Parts Unknown",
    season: 6,
    episode: 8,
    dish: "Various grilled game meats",
    note: "Famous for its all-you-can-eat grilled meats. Bourdain explored Nairobi's food scene beyond the safari tourism.",
    status: "open"
  },

  // ===== CUBA =====
  {
    name: "La Guarida",
    city: "Havana",
    country: "Cuba",
    lat: 23.1371,
    lng: -82.3861,
    show: "Parts Unknown",
    season: 6,
    episode: 1,
    dish: "Ropa vieja, Cuban cocktails",
    note: "In a crumbling Havana mansion. Bourdain dined on the rooftop and reflected on Cuba's frozen-in-time beauty.",
    status: "open"
  },

  // ===== CANADA =====
  {
    name: "Joe Beef",
    city: "Montreal",
    country: "Canada",
    lat: 45.4836,
    lng: -73.5760,
    show: "Parts Unknown",
    season: 4,
    episode: 1,
    dish: "Foie gras double-down, lobster spaghetti",
    note: "David McMillan and Frédéric Morin's decadent temple. Bourdain called it one of his favorite restaurants on the planet.",
    status: "open"
  },
  {
    name: "Schwartz's Deli",
    city: "Montreal",
    country: "Canada",
    lat: 45.5169,
    lng: -73.5775,
    show: "The Layover",
    season: 1,
    episode: 5,
    dish: "Smoked meat sandwich",
    note: "Montreal's legendary smoked meat. Bourdain was a vocal fan — medium fat, on rye, with mustard.",
    status: "open"
  },
  {
    name: "Au Pied de Cochon",
    city: "Montreal",
    country: "Canada",
    lat: 45.5236,
    lng: -73.5668,
    show: "No Reservations",
    season: 1,
    episode: 10,
    dish: "Foie gras poutine, duck in a can",
    note: "Martin Picard's foie-gras-on-everything palace. Bourdain loved the excess — the foie gras poutine is legendary.",
    status: "open"
  },

  // ===== AUSTRALIA =====
  {
    name: "Rockpool Bar & Grill",
    city: "Melbourne",
    country: "Australia",
    lat: -37.8201,
    lng: 144.9694,
    show: "No Reservations",
    season: 5,
    episode: 8,
    dish: "Dry-aged steak, wood-fired grill",
    note: "Neil Perry's acclaimed restaurant. Bourdain was impressed by Australia's high-quality produce and meat.",
    status: "open"
  },

  // ===== WEST VIRGINIA =====
  {
    name: "Hillbilly Hot Dogs",
    city: "Lesage",
    state: "WV",
    country: "United States",
    lat: 38.4458,
    lng: -82.2806,
    show: "Parts Unknown",
    season: 11,
    episode: 7,
    dish: "Loaded hot dogs, deep-fried everything",
    note: "A roadside stand made of old school buses. Bourdain visited West Virginia to tell stories the media usually ignores.",
    status: "open"
  },

  // ===== MASSACHUSETTS =====
  {
    name: "Neptune Oyster",
    city: "Boston",
    state: "MA",
    country: "United States",
    lat: 42.3634,
    lng: -71.0561,
    show: "The Layover",
    season: 2,
    episode: 3,
    dish: "Lobster roll (hot, buttered)",
    note: "Bourdain championed the hot buttered lobster roll here. Tiny place, big flavors, North End institution.",
    status: "open"
  },

  // ===== NEW JERSEY =====
  {
    name: "White Manna",
    city: "Hackensack",
    state: "NJ",
    country: "United States",
    lat: 40.8848,
    lng: -74.0404,
    show: "No Reservations",
    season: 4,
    episode: 3,
    dish: "Sliders",
    note: "A tiny Art Deco diner with griddle sliders since 1946. Bourdain called them some of the best burgers in America.",
    status: "open"
  },

  // ===== CHICAGO =====
  {
    name: "Gene & Jude's",
    city: "River Grove",
    state: "IL",
    country: "United States",
    lat: 41.9296,
    lng: -87.8376,
    show: "The Layover",
    season: 1,
    episode: 7,
    dish: "Chicago-style hot dog (no ketchup)",
    note: "Depression-era hot dog stand. No seats, no ketchup, no pretense. Bourdain respected the Chicago hot dog code.",
    status: "open"
  },
  {
    name: "Portillo's",
    city: "Chicago",
    state: "IL",
    country: "United States",
    lat: 41.8887,
    lng: -87.6323,
    show: "The Layover",
    season: 1,
    episode: 7,
    dish: "Italian beef sandwich, chocolate cake shake",
    note: "A Chicago institution. Bourdain dove into the Italian beef — dipped, with giardiniera, dripping with jus.",
    status: "open"
  },

  // ===== MONTANA =====
  {
    name: "Jorgenson's Bar",
    city: "Helena",
    state: "MT",
    country: "United States",
    lat: 46.5927,
    lng: -112.0361,
    show: "Parts Unknown",
    season: 7,
    episode: 3,
    dish: "Steak, local beer, Montana whiskey",
    note: "Bourdain explored Montana's wide-open spaces and the culture of hunting, fishing, and eating close to the land.",
    status: "open"
  },

  // ===== SARDINIA =====
  {
    name: "Local shepherd's meal",
    city: "Sardinia",
    country: "Italy",
    lat: 39.2238,
    lng: 9.1217,
    show: "Parts Unknown",
    season: 2,
    episode: 3,
    dish: "Roast suckling pig, pane carasau, pecorino",
    note: "Bourdain ate with Sardinian shepherds — roasting a whole pig outdoors, drinking local Cannonau wine, living simply.",
    status: "open"
  },

  // ===== BEIRUT =====
  {
    name: "Al Falamanki",
    city: "Beirut",
    country: "Lebanon",
    lat: 33.8906,
    lng: 35.4992,
    show: "No Reservations",
    season: 2,
    episode: 13,
    dish: "Manakish, hummus, grilled meats, argileh",
    note: "Bourdain's 2006 visit was interrupted by war. He was evacuated but returned — Beirut remained one of his great loves.",
    status: "open"
  },

  // ===== PUERTO RICO =====
  {
    name: "Lechonera Los Pinos",
    city: "Guavate",
    country: "Puerto Rico",
    lat: 18.1613,
    lng: -66.1009,
    show: "No Reservations",
    season: 5,
    episode: 1,
    dish: "Lechón asado (whole roast pig)",
    note: "On the Pork Highway. Bourdain ate slow-roasted whole pig, crispy skin and all, in the mountains of Puerto Rico.",
    status: "open"
  },

  // ===== KOREATOWN LA =====
  {
    name: "Park's BBQ",
    city: "Los Angeles",
    state: "CA",
    country: "United States",
    lat: 34.0620,
    lng: -118.3033,
    show: "The Layover",
    season: 2,
    episode: 1,
    dish: "USDA Prime galbi, bulgogi",
    note: "Koreatown's finest Korean BBQ. Bourdain loved the late-night K-Town scene and grilling prime short ribs tableside.",
    status: "open"
  },

  // ===== OKINAWA =====
  {
    name: "Makishi Public Market",
    city: "Naha, Okinawa",
    country: "Japan",
    lat: 26.2149,
    lng: 127.6801,
    show: "No Reservations",
    season: 7,
    episode: 2,
    dish: "Soki soba, pig ears, sea grapes",
    note: "Bourdain explored Okinawa's unique food culture — a blend of Japanese, Chinese, and Southeast Asian influences.",
    status: "open"
  },

  // ===== DETROIT =====
  {
    name: "Dearborn Meat Market",
    city: "Dearborn",
    state: "MI",
    country: "United States",
    lat: 42.3223,
    lng: -83.1763,
    show: "Parts Unknown",
    season: 4,
    episode: 6,
    dish: "Middle Eastern grilled meats, fattoush",
    note: "Bourdain explored Dearborn's Arab-American community and found some of the best Middle Eastern food outside the Middle East.",
    status: "open"
  },

  // ===== TANZANIA =====
  {
    name: "Forodhani Gardens Night Market",
    city: "Stone Town, Zanzibar",
    country: "Tanzania",
    lat: -6.1599,
    lng: 39.1866,
    show: "Parts Unknown",
    season: 6,
    episode: 8,
    dish: "Zanzibar pizza, grilled seafood, sugarcane juice",
    note: "The waterfront night market. Bourdain loved the sizzling Zanzibar pizza and spice-island flavors at sunset.",
    status: "open"
  },

  // ===== BORNEO =====
  {
    name: "Jungle longhouse meal",
    city: "Sarawak",
    country: "Malaysia",
    lat: 1.5533,
    lng: 110.3592,
    show: "Parts Unknown",
    season: 7,
    episode: 4,
    dish: "Wild boar, jungle ferns, tuak (rice wine)",
    note: "Bourdain stayed with indigenous Iban people in a longhouse, eating wild boar and drinking rice wine in the Borneo jungle.",
    status: "open"
  },

  // ===== QUEENS, NY =====
  {
    name: "SriPraPhai",
    city: "Queens",
    state: "NY",
    country: "United States",
    lat: 40.7527,
    lng: -73.9177,
    show: "No Reservations",
    season: 4,
    episode: 3,
    dish: "Green papaya salad, crispy watercress salad, curries",
    note: "Bourdain said Queens had the best and most diverse food in New York. SriPraPhai was his go-to for Thai food.",
    status: "open"
  },

  // ===== MADAGASCAR =====
  {
    name: "Street food market",
    city: "Antananarivo",
    country: "Madagascar",
    lat: -18.8792,
    lng: 47.5079,
    show: "Parts Unknown",
    season: 5,
    episode: 4,
    dish: "Zebu steak, romazava (meat stew), vary amin'anana",
    note: "Bourdain was one of the few food personalities to feature Madagascar, exploring its unique blend of African, Asian, and French cuisines.",
    status: "open"
  }
];

// Show abbreviation mapping for CSS classes and display
const SHOW_MAP = {
  "No Reservations": { abbr: "NR", cssClass: "show-nr", fullName: "No Reservations" },
  "Parts Unknown": { abbr: "PU", cssClass: "show-pu", fullName: "Parts Unknown" },
  "The Layover": { abbr: "LO", cssClass: "show-lo", fullName: "The Layover" },
  "A Cook's Tour": { abbr: "CT", cssClass: "show-ct", fullName: "A Cook's Tour" },
};
