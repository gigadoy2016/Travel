// China Geographic Discovery - Interactive Web Application Logic
// Cozy Hand-Drawn Travel Infographic Theme (AMAP Edition)
// Multi-City Architecture supporting Dali, Shangri-La & more!

// Current Application State
let map;
let markers = [];
let scenicRouteLayers = [];
let isScenicRouteVisible = true;
let currentCityKey = "dali"; // Default: Dali ('dali' or 'shangrila')
let currentAttractionIndex = 0;
let filteredAttractions = [];
let currentCategory = "all";
let isTourRunning = false;
let tourInterval = null;
let currentTileLayer;
let currentLayerKey = "amap_cozy"; // Default: Cozy Illustrated Paper AMAP
let currentLang = "th"; // Default: Thai (as requested for cozy travel feel, toggleable to EN)

// Tile Layer Presets (Featuring Cozy Illustrated AMAP & English Tiles)
const TILE_LAYERS = {
  amap_cozy: {
    key: "amap_cozy",
    nameTh: "🎨 แผนที่ลายเส้นกระดาษอุ่น (Cozy Paper AMAP)",
    nameEn: "🎨 Cozy Illustrated Paper AMAP",
    url: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scl=1&style=7",
    options: {
      subdomains: "1234",
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AutoNavi / 高德地图 (AMAP)</a>'
    },
    isGcj: true,
    isCozyFilter: true
  },
  amap_en: {
    key: "amap_en",
    nameTh: "🇨🇳 แผนที่ Gaode (AMAP ภาษาอังกฤษ)",
    nameEn: "🇨🇳 AMAP English (AutoNavi)",
    url: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scl=1&style=7",
    options: {
      subdomains: "1234",
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AutoNavi / 高德地图 (AMAP)</a>'
    },
    isGcj: true,
    isCozyFilter: false
  },
  amap_bilingual: {
    key: "amap_bilingual",
    nameTh: "🇨🇳 แผนที่ Gaode (AMAP จีน-อังกฤษ)",
    nameEn: "🇨🇳 AMAP Bilingual (中英双语)",
    url: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_en&size=1&scl=1&style=7",
    options: {
      subdomains: "1234",
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AutoNavi / 高德地图 (AMAP)</a>'
    },
    isGcj: true,
    isCozyFilter: false
  },
  amap_satellite: {
    key: "amap_satellite",
    nameTh: "🛰️ แผนที่ดาวเทียม Gaode (AMAP)",
    nameEn: "🛰️ AMAP Satellite View",
    url: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scl=1&style=6",
    options: {
      subdomains: "1234",
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AutoNavi / 高德地图 (AMAP)</a>'
    },
    isGcj: true,
    isCozyFilter: false
  },
  voyager: {
    key: "voyager",
    nameTh: "🗺️ แผนที่สากล (CartoDB Voyager)",
    nameEn: "🗺️ Global CartoDB Voyager",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    options: {
      maxZoom: 19,
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    },
    isGcj: false,
    isCozyFilter: true
  }
};

// UI Localization Dictionaries
const UI_TEXTS = {
  th: {
    searchPlaceholder: "ค้นหาจุดเช็คอิน...",
    btnTourStart: "<span>🎬</span> ทัวร์แผน 1",
    btnTourStop: "<span>⏹️</span> หยุดทัวร์",
    btnMapStyle: "<span>🎨</span> แผนที่",
    btnSidebar: "<span>📋</span> จุดเช็คอิน",
    btnRoute: "<span>🚲</span> เส้นทาง",
    btnInfographic: "<span>🖼️</span> Infographic",
    sidebarTitle: "สมุดบันทึกสถานที่แนะนำ",
    countUnit: "แห่ง",
    emptySearch: "ไม่พบสถานที่ที่ตรงกับคำค้นหา",
    pointLabel: "จุดที่",
    hoursLabel: "⏰ เวลาเปิด - ปิด",
    bestTimeLabel: "🌅 ช่วงเวลาแสงสวยที่สุด",
    ticketLabel: "🎫 อัตราค่าเข้าชม",
    transportLabel: "🚕 ข้อมูลการเดินทาง",
    highlightsTitle: "จุดไฮไลท์ที่ห้ามพลาด",
    btnPrev: "◀ ก่อนหน้า",
    btnNext: "ถัดไป ▶",
    btnCopyGps: "คัดลอก GPS",
    toastCopy: "คัดลอกพิกัด GPS แล้ว!",
    tourBrowsing: "กำลังพาชมทัศนียภาพเชิงภูมิศาสตร์บนแผนที่...",
    routeVisibleToast: "แสดงเส้นทางท่องเที่ยวบนแผนที่แล้ว",
    routeHiddenToast: "ซ่อนเส้นทางท่องเที่ยวแล้ว",
    mediaTitle: "ตัวอย่างภาพ & วิดีโอ TikTok",
    mediaSubtitle: "ไฮไลท์มุมถ่ายรูป & บรรยากาศจริง",
    gallerySectionLabel: "📷 ตัวอย่างภาพสถานที่",
    photoCounterLabel: "4 มุมแนะนำ",
    videoSectionLabel: "🎵 วิดีโอ TikTok & Douyin",
    btnTiktokLabel: "ดูคลิปรีวิวบน TikTok"
  },
  en: {
    searchPlaceholder: "Search spots, English, Chinese...",
    btnTourStart: "<span>🎬</span> Plan 1 Tour",
    btnTourStop: "<span>⏹️</span> Stop Tour",
    btnMapStyle: "<span>🎨</span> Map Style",
    btnSidebar: "<span>📋</span> Places",
    btnRoute: "<span>🚲</span> Routes",
    btnInfographic: "<span>🖼️</span> Infographic",
    sidebarTitle: "Travel Journal Places",
    countUnit: "spots",
    emptySearch: "No attractions matching your search",
    pointLabel: "Spot",
    hoursLabel: "⏰ Opening Hours",
    bestTimeLabel: "🌅 Best Time (Golden Hour)",
    ticketLabel: "🎫 Admission Fee",
    transportLabel: "🚕 Getting There",
    highlightsTitle: "Must-See Highlights",
    btnPrev: "◀ Previous",
    btnNext: "Next ▶",
    btnCopyGps: "Copy GPS",
    toastCopy: "Copied GPS Coordinates!",
    tourBrowsing: "Exploring slow-life geography...",
    routeVisibleToast: "Scenic routes shown on map",
    routeHiddenToast: "Scenic routes hidden",
    mediaTitle: "Sample Photos & TikTok Clips",
    mediaSubtitle: "Photo spots & authentic vibes",
    gallerySectionLabel: "📷 Photo Showcase",
    photoCounterLabel: "4 Curated Angles",
    videoSectionLabel: "🎵 TikTok & Douyin Videos",
    btnTiktokLabel: "Watch Reviews on TikTok"
  }
};

// ----------------------------------------------------------------------------------
// High-Precision Coordinate Math (AMAP GCJ-02 <-> WGS-84)
// ----------------------------------------------------------------------------------
function gcj02ToWgs84(lat, lng) {
  const PI = 3.1415926535897932384626;
  const a = 6378245.0;
  const ee = 0.00669342162296594323;

  function transformLat(x, y) {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
    return ret;
  }

  function transformLng(x, y) {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
    return ret;
  }

  let dLat = transformLat(lng - 105.0, lat - 35.0);
  let dLng = transformLng(lng - 105.0, lat - 35.0);
  const radLat = lat / 180.0 * PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * PI);
  dLng = (dLng * 180.0) / (a / sqrtMagic * Math.cos(radLat) * PI);
  return [lat - dLat, lng - dLng];
}

function getEffectiveCoords(item) {
  const isGcj = TILE_LAYERS[currentLayerKey].isGcj;
  if (isGcj) {
    return item.coords;
  } else {
    return gcj02ToWgs84(item.coords[0], item.coords[1]);
  }
}

// ----------------------------------------------------------------------------------
// Initialize Leaflet Map
// ----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const activeCity = CITIES[currentCityKey];
  filteredAttractions = [...activeCity.attractions];
  initMap();
  renderCategoryFilterPills();
  renderSidebarList();
  renderMarkers();
  renderScenicRoutes();
  renderQuickGuideBanner();
  setupEventListeners();
  updateUIStrings();
  adjustHeaderOffsets();
});

window.addEventListener("resize", adjustHeaderOffsets);

function adjustHeaderOffsets() {
  const navbar = document.querySelector(".top-navbar");
  const filterBar = document.querySelector(".filter-bar");
  const sidebar = document.querySelector(".sidebar-panel");
  if (navbar && filterBar) {
    const navHeight = navbar.offsetHeight;
    const navTop = parseInt(window.getComputedStyle(navbar).top) || 14;
    const filterTop = navTop + navHeight + 8;
    filterBar.style.top = `${filterTop}px`;
    
    if (sidebar) {
      const filterHeight = filterBar.offsetHeight;
      sidebar.style.top = `${filterTop + filterHeight + 8}px`;
    }
  }
}

function initMap() {
  const city = CITIES[currentCityKey];

  map = L.map("map", {
    center: city.center,
    zoom: city.defaultZoom,
    minZoom: 6,
    maxZoom: 18,
    zoomControl: false
  });

  // Custom Zoom Control at bottom right
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Set Cozy Paper AMAP as initial layer
  setTileLayer("amap_cozy");
}

function setTileLayer(key) {
  if (currentTileLayer) {
    map.removeLayer(currentTileLayer);
  }
  currentLayerKey = key;
  const layerConfig = TILE_LAYERS[key];
  currentTileLayer = L.tileLayer(layerConfig.url, layerConfig.options).addTo(map);

  // Apply or remove cozy paper filter class on map container
  const mapEl = document.getElementById("map");
  if (layerConfig.isCozyFilter) {
    mapEl.classList.add("cozy-tile-filter");
  } else {
    mapEl.classList.remove("cozy-tile-filter");
  }

  // Re-render markers and routes to ensure datum alignment
  renderMarkers();
  renderScenicRoutes();

  const layerName = currentLang === 'en' ? layerConfig.nameEn : layerConfig.nameTh;
  showToast(`${currentLang === 'en' ? 'Map Style' : 'เลเยอร์แผนที่'}: ${layerName}`);
}

// ----------------------------------------------------------------------------------
// City Switching Logic (Dali <-> Shangri-La)
// ----------------------------------------------------------------------------------
function switchCity(cityKey) {
  if (!CITIES[cityKey]) return;
  currentCityKey = cityKey;
  const city = CITIES[cityKey];

  // Update City Selector Button UI
  const cityBtnName = document.getElementById("cityBtnName");
  if (cityBtnName) {
    cityBtnName.innerText = currentLang === 'en' ? city.nameEn : city.nameTh;
  }
  const cityBtnIcon = document.getElementById("cityBtnIcon");
  if (cityBtnIcon) {
    cityBtnIcon.innerText = city.icon;
  }
  const brandIcon = document.getElementById("brandIcon");
  if (brandIcon) {
    brandIcon.innerText = city.icon;
  }

  // Update active state in dropdown menu
  document.querySelectorAll(".city-dropdown-item").forEach(item => {
    item.classList.toggle("active", item.dataset.cityId === cityKey);
  });
  
  // Close dropdown menu
  const wrapper = document.getElementById("citySelectorWrapper");
  if (wrapper) wrapper.classList.remove("open");

  // Reset category filter & search
  currentCategory = "all";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  // Update active city data
  filteredAttractions = [...city.attractions];
  currentAttractionIndex = 0;

  // Fly map to new city center
  if (map) {
    map.flyTo(city.center, city.defaultZoom, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }

  // Re-render all city-dependent UI elements
  renderCategoryFilterPills();
  renderMarkers();
  renderScenicRoutes();
  renderSidebarList();
  renderQuickGuideBanner();
  updateUIStrings();
  adjustHeaderOffsets();

  // Informative toast
  const cityName = currentLang === 'en' ? city.nameEn : city.nameTh;
  showToast(currentLang === 'en' ? `Switched to ${cityName}` : `เปลี่ยนเป็นเมือง: ${cityName}`);
}

// ----------------------------------------------------------------------------------
// Rendering Dynamic Category Filter Pills
// ------------------------------------------------------------------
function renderCategoryFilterPills() {
  const filterBar = document.getElementById("filterBar");
  if (!filterBar) return;
  const city = CITIES[currentCityKey];
  if (!city || !city.categories) return;

  filterBar.innerHTML = "";
  city.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `filter-pill ${currentCategory === cat.id ? 'active' : ''}`;
    btn.dataset.category = cat.id;
    btn.id = `filter-${cat.id}`;
    const label = currentLang === 'en' ? cat.labelEn : cat.labelTh;
    btn.innerHTML = `<span>${cat.icon}</span> ${label}`;

    btn.addEventListener("click", () => {
      filterByCategory(cat.id);
    });

    filterBar.appendChild(btn);
  });
}

// ----------------------------------------------------------------------------------
// Rendering Custom Cozy Hand-Drawn Marker Pins on Map
// Exact Mathematical Needle Tip Alignment Anchored at [125, 60]
// ----------------------------------------------------------------------------------
function renderMarkers() {
  markers.forEach(m => map.removeLayer(m.marker));
  markers = [];

  filteredAttractions.forEach((item) => {
    const coords = getEffectiveCoords(item);
    const displayName = currentLang === 'en' ? item.nameEn : item.nameTh;
    const bullets = currentLang === 'en' ? item.shortBulletsEn : item.shortBulletsTh;

    // Cozy Sticker Marker HTML
    const pinHtml = `
      <div class="cozy-sticker-marker" id="pin-${item.id}">
        <div class="sticker-pill" style="border-color: ${item.doodleBorderColor || '#2B2D42'}; background: ${item.pastelBg || '#FFFFFF'};">
          <span class="sticker-num" style="background: ${item.categoryColor};">${item.id}</span>
          <span class="sticker-icon">${item.doodleIcon || '📍'}</span>
          <span class="sticker-name">${displayName}</span>
        </div>
        <div class="sticker-needle" style="border-top-color: ${item.doodleBorderColor || '#2B2D42'};"></div>
        <div class="sticker-dot" style="background: ${item.categoryColor};"></div>
      </div>
    `;

    // 250px wide container, needle bottom tip exactly at [125, 60]
    const icon = L.divIcon({
      html: pinHtml,
      className: 'leaflet-precise-marker-wrapper',
      iconSize: [250, 60],
      iconAnchor: [125, 60]
    });

    const marker = L.marker(coords, { icon: icon }).addTo(map);

    marker.on('click', () => {
      selectAttraction(item.id, true);
    });

    // Tooltip designed like a mini illustrated sketchbook memo
    const bulletsHtml = (bullets || []).map(b => `<div style="font-size:13px; color:#535868; margin-top:3px; line-height:1.4;">• ${b}</div>`).join("");

    marker.bindTooltip(`
      <div style="font-family:var(--font-main); text-align:left; max-width:260px; padding:3px;">
        <div style="font-family:var(--font-heading); font-size:15.5px; font-weight:bold; color:#2B2D42;">
          ${item.doodleIcon || ''} ${displayName}
        </div>
        <div style="font-size:12.5px; color:#7E8496; margin-bottom:5px;">
          ${item.nameZh} · ${item.pinyin} · <span style="color:#D97706; font-weight:bold;">★ ${item.rating}</span>
        </div>
        ${bulletsHtml}
      </div>
    `, {
      direction: 'top',
      offset: [0, -56],
      className: 'custom-leaflet-tooltip'
    });

    markers.push({ id: item.id, marker: marker });
  });
}

// ----------------------------------------------------------------------------------
// Rendering Scenic Travel Route (Dashed Hand-Drawn Polyline)
// ----------------------------------------------------------------------------------
function renderScenicRoutes() {
  scenicRouteLayers.forEach(l => map.removeLayer(l));
  scenicRouteLayers = [];

  if (!isScenicRouteVisible) return;
  const city = CITIES[currentCityKey];
  if (!city || !city.scenicRoutes) return;

  city.scenicRoutes.forEach(route => {
    const routePoints = route.spotIds.map(id => {
      const spot = city.attractions.find(a => a.id === id);
      return spot ? getEffectiveCoords(spot) : null;
    }).filter(Boolean);

    if (routePoints.length < 2) return;

    const line = L.polyline(routePoints, {
      color: route.color || '#E07A5F',
      weight: 3.5,
      opacity: 0.85,
      dashArray: route.dashArray || '8, 8',
      className: 'scenic-route-dash'
    }).addTo(map);

    const tooltipName = currentLang === 'en' ? route.nameEn : route.nameTh;
    line.bindTooltip(tooltipName, { sticky: true, className: 'custom-leaflet-tooltip' });
    scenicRouteLayers.push(line);
  });
}

function toggleScenicRoutes() {
  isScenicRouteVisible = !isScenicRouteVisible;
  const btn = document.getElementById("btnScenicRoute");
  btn.classList.toggle("active", isScenicRouteVisible);
  renderScenicRoutes();
  const t = UI_TEXTS[currentLang];
  showToast(isScenicRouteVisible ? t.routeVisibleToast : t.routeHiddenToast);
  if (isScenicRouteVisible) {
    expandGuideBanner();
  }
}

// ----------------------------------------------------------------------------------
// Rendering Sidebar List (Travel Scrapbook Index Cards)
// ----------------------------------------------------------------------------------
function renderSidebarList() {
  const container = document.getElementById("attractionList");
  container.innerHTML = "";
  const t = UI_TEXTS[currentLang];

  if (filteredAttractions.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 10px; color: var(--color-ink-muted);">
        <p style="font-size: 32px; margin-bottom: 8px;">🔍</p>
        <p>${t.emptySearch}</p>
      </div>
    `;
    return;
  }

  filteredAttractions.forEach(item => {
    const card = document.createElement("div");
    card.className = "attraction-card";
    card.id = `card-${item.id}`;
    
    const primaryName = currentLang === 'en' ? item.nameEn : item.nameTh;
    const secondaryName = currentLang === 'en' ? `${item.nameZh} · ${item.nameTh}` : `${item.nameZh} · ${item.pinyin}`;
    const catLabel = currentLang === 'en' ? item.categoryLabelEn : item.categoryLabelTh;
    const bullets = currentLang === 'en' ? item.shortBulletsEn : item.shortBulletsTh;

    const bulletsListHtml = (bullets || []).map(b => `
      <li class="card-bullet-item">
        <span class="card-bullet-dot" style="background:${item.categoryColor}"></span>
        <span>${b}</span>
      </li>
    `).join("");

    card.innerHTML = `
      <div class="card-top-row">
        <div class="card-thumb-wrapper">
          <img class="card-thumb" src="${item.image}" alt="${primaryName}" loading="lazy" />
          <div class="card-order-tag" style="background:${item.categoryColor}">${item.id}</div>
        </div>
        <div class="card-info">
          <div class="card-title-row">
            <span class="card-title" title="${primaryName}">${item.doodleIcon || '📍'} ${primaryName}</span>
            <span class="card-score">★ ${item.rating}</span>
          </div>
          <div class="card-sub">${secondaryName}</div>
          <div class="card-meta-chips">
            <span class="card-chip" style="border-left: 3px solid ${item.categoryColor}">
              ${catLabel}
            </span>
            <span class="card-chip">🎫 ${item.ticketPriceEn === 'Free admission' ? (currentLang === 'en' ? 'Free' : 'ฟรี') : 'มีบัตร'}</span>
          </div>
        </div>
      </div>
      <ul class="card-bullets-list">
        ${bulletsListHtml}
      </ul>
    `;

    card.addEventListener("click", () => {
      selectAttraction(item.id, true);
    });

    container.appendChild(card);
  });

  const countEl = document.getElementById("attractionCount");
  if (countEl) {
    countEl.innerText = `${filteredAttractions.length} ${t.countUnit}`;
  }
}

// ----------------------------------------------------------------------------------
// Selecting an Attraction
// ----------------------------------------------------------------------------------
function selectAttraction(id, openModal = true) {
  const city = CITIES[currentCityKey];
  const item = city.attractions.find(a => a.id === id);
  if (!item) return;

  currentAttractionIndex = city.attractions.findIndex(a => a.id === id);
  const targetCoords = getEffectiveCoords(item);

  // Smooth FlyTo
  map.flyTo(targetCoords, 14, {
    duration: 1.2,
    easeLinearity: 0.25
  });

  // Highlight Marker Pin
  document.querySelectorAll(".cozy-sticker-marker").forEach(el => el.classList.remove("active"));
  const activePinEl = document.getElementById(`pin-${item.id}`);
  if (activePinEl) activePinEl.classList.add("active");

  // Highlight Sidebar Card
  document.querySelectorAll(".attraction-card").forEach(el => el.classList.remove("active"));
  const activeCard = document.getElementById(`card-${item.id}`);
  if (activeCard) {
    activeCard.classList.add("active");
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if (openModal) {
    openAttractionModal(item);
  }
}

// ----------------------------------------------------------------------------------
// Detailed Modal Window (Travel Scrapbook / Polaroid Diary)
// ------------------------------------------------------------------
function openAttractionModal(item) {
  const modalOverlay = document.getElementById("modalOverlay");
  const t = UI_TEXTS[currentLang];
  const city = CITIES[currentCityKey];
  
  // Titles and Subtitles
  document.getElementById("modalHeroImg").src = item.image;
  document.getElementById("modalTitleTh").innerText = `${item.doodleIcon || ''} ${currentLang === 'en' ? item.nameEn : item.nameTh}`;
  document.getElementById("modalTitleSub").innerText = `${item.nameZh} · ${item.pinyin} ${currentLang === 'en' ? `(${item.nameTh})` : `(${item.nameEn})`}`;
  
  // Badges
  const orderBadge = document.getElementById("modalOrderBadge");
  const totalSpots = city.attractions.length - 1;
  orderBadge.innerText = item.id === 0 ? (currentLang === 'en' ? 'HSR Gateway' : 'ประตูสู่เมือง 🚅') : `${t.pointLabel} ${item.id} / ${totalSpots}`;
  orderBadge.style.background = item.pastelBg || '#FFFDF8';
  orderBadge.style.color = item.categoryColor;
  
  const categoryBadge = document.getElementById("modalCategoryBadge");
  categoryBadge.innerText = currentLang === 'en' ? item.categoryLabelEn : item.categoryLabelTh;

  // Rating
  document.getElementById("modalRatingScore").innerHTML = `⭐ ${item.rating} / 5.0`;
  document.getElementById("modalRatingDesc").innerText = currentLang === 'en' ? item.ratingDescEn : item.ratingDescTh;

  // Descriptions
  document.getElementById("modalDescription").innerText = currentLang === 'en' ? item.descriptionEn : item.descriptionTh;

  // Info Grid
  document.getElementById("modalHours").innerText = currentLang === 'en' ? item.openingHoursEn : item.openingHoursTh;
  document.getElementById("modalBestTime").innerText = currentLang === 'en' ? item.bestTimeEn : item.bestTimeTh;
  document.getElementById("modalTicket").innerText = currentLang === 'en' ? item.ticketPriceEn : item.ticketPriceTh;
  
  const trans = currentLang === 'en' ? item.transportEn : item.transportTh;
  document.getElementById("modalTransport").innerHTML = `
    <strong>${currentLang === 'en' ? 'From Station:' : 'จากสถานีรถไฟ:'}</strong> ${trans.fromStation}<br>
    <strong>${currentLang === 'en' ? 'From Old Town / City:' : 'จากเมืองโบราณ / ใจกลางเมือง:'}</strong> ${trans.fromOldTown || trans.fromAirport || trans.inside}
  `;

  // Highlights
  const highlights = currentLang === 'en' ? item.highlightsEn : item.highlightsTh;
  document.getElementById("modalHighlights").innerHTML = highlights.map(h => `<li>${h}</li>`).join("");

  // Map Links and GPS
  const coords = getEffectiveCoords(item);
  const coordsStr = `${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`;
  const btnCopyGps = document.getElementById("btnCopyGps");
  btnCopyGps.onclick = () => {
    navigator.clipboard.writeText(coordsStr).then(() => {
      showToast(`${t.toastCopy} (${coordsStr})`);
    });
  };

  // Google Maps link uses WGS-84 coordinates
  const wgs = gcj02ToWgs84(item.coords[0], item.coords[1]);
  const btnGoogleMap = document.getElementById("btnGoogleMap");
  btnGoogleMap.href = `https://www.google.com/maps/search/?api=1&query=${wgs[0].toFixed(6)},${wgs[1].toFixed(6)}`;

  // Gaode URI link uses native GCJ-02 coordinates
  const btnGaodeMap = document.getElementById("btnGaodeMap");
  btnGaodeMap.href = `https://uri.amap.com/marker?position=${item.coords[1].toFixed(6)},${item.coords[0].toFixed(6)}&name=${encodeURIComponent(item.nameZh)}`;

  // Update Media Showcase (Sample Photos & TikTok Hub)
  renderMediaShowcase(item);

  modalOverlay.classList.add("active");
}

// ----------------------------------------------------------------------------------
// Media Showcase: Sample Photos & TikTok / Social Discovery Hub
// ----------------------------------------------------------------------------------
function renderMediaShowcase(item) {
  const mediaKey = `${currentCityKey}_${item.id}`;
  const media = (typeof ATTRACTION_MEDIA_DATA !== 'undefined' && ATTRACTION_MEDIA_DATA[mediaKey]) 
    ? ATTRACTION_MEDIA_DATA[mediaKey] 
    : {
        tiktokQuery: `${item.nameZh} ${item.nameEn} Yunnan China`,
        hashtags: `#${item.nameEn.replace(/[^a-zA-Z0-9]/g, '')} #YunnanTravel`,
        views: '2.0M+ Views',
        douyinQuery: item.nameZh,
        redbookQuery: item.nameZh,
        cover: item.image,
        photos: [
          { url: item.image, titleTh: item.nameTh, titleEn: item.nameEn, tagTh: 'ภาพหลัก', tagEn: 'Main View' }
        ]
      };

  // 1. Render Sample Photos (4 items with zoom icon)
  const gridEl = document.getElementById("samplePhotosGrid");
  if (gridEl && media.photos) {
    gridEl.innerHTML = media.photos.map((p, idx) => `
      <div class="sample-photo-card" data-idx="${idx}" title="${currentLang === 'en' ? p.titleEn : p.titleTh}">
        <img src="${p.url}" alt="${currentLang === 'en' ? p.titleEn : p.titleTh}" loading="lazy" onerror="this.src='${item.image}'" />
        <div class="sample-photo-zoom-icon">🔍</div>
        <div class="sample-photo-overlay">
          <span class="sample-photo-title">${currentLang === 'en' ? p.titleEn : p.titleTh}</span>
        </div>
      </div>
    `).join("");

    // Click to open Lightbox
    gridEl.querySelectorAll(".sample-photo-card").forEach((card, idx) => {
      card.addEventListener("click", () => {
        const photo = media.photos[idx];
        openLightbox(
          photo, 
          currentLang === 'en' ? photo.titleEn : photo.titleTh, 
          currentLang === 'en' ? photo.tagEn : photo.tagTh
        );
      });
    });
  }

  // 2. Render TikTok Card & Links
  const tiktokCover = document.getElementById("tiktokCoverImg");
  if (tiktokCover) {
    tiktokCover.src = media.cover || item.image;
    tiktokCover.onerror = () => { tiktokCover.src = item.image; };
  }

  const reelHashtags = document.getElementById("tiktokReelHashtags");
  if (reelHashtags) reelHashtags.innerText = media.hashtags || `#${item.nameEn.replace(/[^a-zA-Z0-9]/g, '')}`;

  const reelViews = document.getElementById("tiktokReelViews");
  if (reelViews) reelViews.innerText = `🔥 ${media.views || '2.0M+ Views'}`;

  // TikTok Search URL
  const tiktokQuery = media.tiktokQuery || `${item.nameEn} ${item.nameZh} Yunnan China`;
  const tiktokSearchUrl = `https://www.tiktok.com/search?q=${encodeURIComponent(tiktokQuery)}`;
  
  const btnTiktokMain = document.getElementById("btnTiktokMain");
  if (btnTiktokMain) {
    btnTiktokMain.href = tiktokSearchUrl;
  }
  
  const tiktokReelMock = document.getElementById("tiktokReelMock");
  if (tiktokReelMock) {
    tiktokReelMock.href = tiktokSearchUrl;
  }

  // Douyin & Xiaohongshu Links
  const douyinQuery = media.douyinQuery || item.nameZh;
  const btnDouyin = document.getElementById("btnDouyin");
  if (btnDouyin) {
    btnDouyin.href = `https://www.douyin.com/search/${encodeURIComponent(douyinQuery)}`;
  }

  const redbookQuery = media.redbookQuery || item.nameZh;
  const btnRedbook = document.getElementById("btnRedbook");
  if (btnRedbook) {
    btnRedbook.href = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(redbookQuery)}`;
  }
}

// Lightbox Zoom Overlay
function openLightbox(photoObj, title, tag) {
  const lightbox = document.getElementById("lightboxOverlay");
  if (!lightbox) return;
  const imgEl = document.getElementById("lightboxImg");
  if (imgEl) imgEl.src = photoObj.url;
  const titleEl = document.getElementById("lightboxTitle");
  if (titleEl) titleEl.innerText = title || "";
  const tagEl = document.getElementById("lightboxTag");
  if (tagEl) tagEl.innerText = tag || (currentLang === 'en' ? 'Photo Spot' : 'มุมถ่ายรูป');
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightboxOverlay");
  if (lightbox) lightbox.classList.remove("active");
}

function closeAttractionModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

function navigateModal(direction) {
  const city = CITIES[currentCityKey];
  currentAttractionIndex = (currentAttractionIndex + direction + city.attractions.length) % city.attractions.length;
  const nextItem = city.attractions[currentAttractionIndex];
  selectAttraction(nextItem.id, true);
}

// ----------------------------------------------------------------------------------
// Category Filters & Search
// ----------------------------------------------------------------------------------
function filterByCategory(category) {
  currentCategory = category;

  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === category);
  });

  applyFilters();
}

function handleSearch(query) {
  applyFilters(query.trim().toLowerCase());
}

function applyFilters(searchQuery = "") {
  const city = CITIES[currentCityKey];
  const currentSearch = searchQuery || document.getElementById("searchInput").value.trim().toLowerCase();

  filteredAttractions = city.attractions.filter(item => {
    const matchCategory = (currentCategory === "all") || (item.category === currentCategory);
    const matchSearch = !currentSearch || (
      item.nameTh.toLowerCase().includes(currentSearch) ||
      item.nameZh.toLowerCase().includes(currentSearch) ||
      item.pinyin.toLowerCase().includes(currentSearch) ||
      item.nameEn.toLowerCase().includes(currentSearch) ||
      item.tags.some(tag => tag.toLowerCase().includes(currentSearch))
    );
    return matchCategory && matchSearch;
  });

  renderSidebarList();
  renderMarkers();

  if (filteredAttractions.length > 0) {
    const effectivePoints = filteredAttractions.map(a => getEffectiveCoords(a));
    const bounds = L.latLngBounds(effectivePoints);
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 13, duration: 1.0 });
  }
}

// ----------------------------------------------------------------------------------
// Auto Tour Mode
// ----------------------------------------------------------------------------------
function toggleAutoTour() {
  if (isTourRunning) {
    stopAutoTour();
  } else {
    startAutoTour();
  }
}

function startAutoTour() {
  isTourRunning = true;
  const t = UI_TEXTS[currentLang];
  const tourBtn = document.getElementById("btnAutoTour");
  tourBtn.classList.add("active");
  tourBtn.innerHTML = t.btnTourStop;
  document.getElementById("tourBanner").classList.add("active");

  currentAttractionIndex = 0;
  runTourStep();

  const city = CITIES[currentCityKey];
  tourInterval = setInterval(() => {
    currentAttractionIndex = (currentAttractionIndex + 1) % city.attractions.length;
    runTourStep();
  }, 6500);
}

function runTourStep() {
  const city = CITIES[currentCityKey];
  const item = city.attractions[currentAttractionIndex];
  selectAttraction(item.id, false);

  const title = currentLang === 'en' ? `${item.id}. ${item.doodleIcon || ''} ${item.nameEn} (${item.nameZh})` : `${item.id}. ${item.doodleIcon || ''} ${item.nameTh} (${item.nameZh})`;
  const sub = currentLang === 'en' ? `${item.categoryLabelEn} · ⭐ ${item.rating}/5.0 · ${item.ratingDescEn}` : `${item.categoryLabelTh} · ⭐ ${item.rating}/5.0 · ${item.ratingDescTh}`;

  document.getElementById("tourProgressTitle").innerText = title;
  document.getElementById("tourProgressSub").innerText = sub;
}

function stopAutoTour() {
  isTourRunning = false;
  clearInterval(tourInterval);
  const t = UI_TEXTS[currentLang];
  const tourBtn = document.getElementById("btnAutoTour");
  tourBtn.classList.remove("active");
  tourBtn.innerHTML = t.btnTourStart;
  document.getElementById("tourBanner").classList.remove("active");
}

// ----------------------------------------------------------------------------------
// Language Toggle (TH / EN)
// ----------------------------------------------------------------------------------
function toggleLanguage() {
  currentLang = currentLang === "en" ? "th" : "en";
  updateUIStrings();
  renderSidebarList();
  renderMarkers();
  renderScenicRoutes();

  // If modal is currently open, refresh it
  if (document.getElementById("modalOverlay").classList.contains("active")) {
    const city = CITIES[currentCityKey];
    const currentItem = city.attractions[currentAttractionIndex];
    if (currentItem) openAttractionModal(currentItem);
  }

  showToast(currentLang === 'en' ? "Language: English" : "เปลี่ยนภาษา: ไทย");
}

function updateUIStrings() {
  const city = CITIES[currentCityKey];
  const t = UI_TEXTS[currentLang];

  // Dynamic City Titles
  const appTitle = document.getElementById("appTitle");
  if (appTitle) {
    appTitle.innerText = currentLang === 'en' ? city.appTitleEn : city.appTitleTh;
  }
  const appSubtitle = document.getElementById("appSubtitle");
  if (appSubtitle) {
    appSubtitle.innerText = currentLang === 'en' ? city.appSubtitleEn : city.appSubtitleTh;
  }

  // City Selector Button Label
  const cityBtnName = document.getElementById("cityBtnName");
  if (cityBtnName) {
    cityBtnName.innerText = currentLang === 'en' ? city.nameEn : city.nameTh;
  }

  // Search Placeholder
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }
  
  if (!isTourRunning) {
    const btnAutoTour = document.getElementById("btnAutoTour");
    if (btnAutoTour) btnAutoTour.innerHTML = t.btnTourStart;
  }
  
  const btnMapStyle = document.getElementById("btnMapStyle");
  if (btnMapStyle) btnMapStyle.innerHTML = t.btnMapStyle;

  const btnToggleSidebar = document.getElementById("btnToggleSidebar");
  if (btnToggleSidebar) btnToggleSidebar.innerHTML = t.btnSidebar;

  const btnScenicRoute = document.getElementById("btnScenicRoute");
  if (btnScenicRoute) btnScenicRoute.innerHTML = t.btnRoute;

  const btnInfographic = document.getElementById("btnInfographicPng");
  if (btnInfographic) btnInfographic.innerHTML = t.btnInfographic;

  const sidebarHeaderTitle = document.getElementById("sidebarHeaderTitle");
  if (sidebarHeaderTitle) sidebarHeaderTitle.innerHTML = `<span>📍</span> ${t.sidebarTitle}`;

  // Re-render categories with new language
  renderCategoryFilterPills();

  // Modal Labels
  const labelHours = document.getElementById("labelHours");
  if (labelHours) labelHours.innerHTML = t.hoursLabel;
  const labelBestTime = document.getElementById("labelBestTime");
  if (labelBestTime) labelBestTime.innerHTML = t.bestTimeLabel;
  const labelTicket = document.getElementById("labelTicket");
  if (labelTicket) labelTicket.innerHTML = t.ticketLabel;
  const labelTransport = document.getElementById("labelTransport");
  if (labelTransport) labelTransport.innerHTML = t.transportLabel;
  const labelHighlights = document.getElementById("labelHighlights");
  if (labelHighlights) labelHighlights.innerHTML = `<span>✨</span> ${t.highlightsTitle}`;

  const btnModalPrev = document.getElementById("btnModalPrev");
  if (btnModalPrev) btnModalPrev.innerHTML = t.btnPrev;
  const btnModalNext = document.getElementById("btnModalNext");
  if (btnModalNext) btnModalNext.innerHTML = t.btnNext;
  const btnCopyGps = document.getElementById("btnCopyGps");
  if (btnCopyGps) btnCopyGps.innerHTML = `<span>📋</span> ${t.btnCopyGps}`;
  
  // Language button label
  const btnLangToggle = document.getElementById("btnLangToggle");
  if (btnLangToggle) btnLangToggle.innerHTML = currentLang === "en" ? "🇹🇭 TH" : "🇬🇧 EN";

  const collapseBtnText = document.querySelector(".guide-collapse-btn .collapse-btn-text");
  if (collapseBtnText) {
    collapseBtnText.innerText = currentLang === 'en' ? "Collapse" : "หุบเข้าข้าง";
  }

  // Media Showcase Labels
  const mediaTitleText = document.getElementById("mediaTitleText");
  if (mediaTitleText) mediaTitleText.innerText = t.mediaTitle;
  const mediaSubtitleText = document.getElementById("mediaSubtitleText");
  if (mediaSubtitleText) mediaSubtitleText.innerText = t.mediaSubtitle;
  const gallerySectionLabel = document.getElementById("gallerySectionLabel");
  if (gallerySectionLabel) gallerySectionLabel.innerText = t.gallerySectionLabel;
  const photoCounterBadge = document.getElementById("photoCounterBadge");
  if (photoCounterBadge) photoCounterBadge.innerText = t.photoCounterLabel;
  const videoSectionLabel = document.getElementById("videoSectionLabel");
  if (videoSectionLabel) videoSectionLabel.innerText = t.videoSectionLabel;
  const btnTiktokLabel = document.getElementById("btnTiktokLabel");
  if (btnTiktokLabel) btnTiktokLabel.innerText = t.btnTiktokLabel;

  // Re-render travel guide banner
  renderQuickGuideBanner();
}

// ----------------------------------------------------------------------------------
// Rendering Quick Guide Banner based on active City
// ----------------------------------------------------------------------------------
function renderQuickGuideBanner() {
  const city = CITIES[currentCityKey];
  if (!city || !city.guide) return;

  const titleEl = document.getElementById("guideBannerTitle");
  if (titleEl) {
    titleEl.innerText = currentLang === 'en' ? city.guide.titleEn : city.guide.titleTh;
  }

  const sideTabLabel = document.getElementById("guideSideTabLabel");
  if (sideTabLabel) {
    if (currentCityKey === 'shangrila') {
      sideTabLabel.innerText = currentLang === 'en' ? "Shangri-La Guide" : "เส้นทางแนะนำแชงกรีล่า";
    } else if (currentCityKey === 'lijiang') {
      sideTabLabel.innerText = currentLang === 'en' ? "Lijiang Travel Guide" : "การเดินทาง & เส้นทางแนะนำลี่เจียง";
    } else {
      sideTabLabel.innerText = currentLang === 'en' ? "Dali Travel Guide" : "การเดินทาง & เส้นทางแนะนำต้าหลี่";
    }
  }

  const chipsContainer = document.querySelector(".guide-chips");
  if (chipsContainer && city.guide.chips) {
    chipsContainer.innerHTML = city.guide.chips.map(chip => {
      const text = currentLang === 'en' ? chip.textEn : chip.textTh;
      return `<span class="guide-chip">${chip.icon} ${text}</span>`;
    }).join("");
  }

  const routesContainer = document.querySelector(".guide-routes");
  if (routesContainer && city.guide.routes) {
    routesContainer.innerHTML = city.guide.routes.map(r => {
      const desc = currentLang === 'en' ? r.descEn : r.descTh;
      return `
        <div class="guide-route-item">
          <span class="route-num">${r.num}</span>
          <span class="route-desc">${desc}</span>
        </div>
      `;
    }).join("");
  }
}

function minimizeGuideBanner() {
  const guideBanner = document.getElementById("travelGuideBanner");
  const guideSideTab = document.getElementById("btnGuideSideTab");
  if (guideBanner) guideBanner.classList.add("minimized");
  if (guideSideTab) guideSideTab.classList.add("visible");
}

function expandGuideBanner() {
  const guideBanner = document.getElementById("travelGuideBanner");
  const guideSideTab = document.getElementById("btnGuideSideTab");
  if (guideBanner) guideBanner.classList.remove("minimized");
  if (guideSideTab) guideSideTab.classList.remove("visible");
}

// ----------------------------------------------------------------------------------
// Map Layer Switcher
// ----------------------------------------------------------------------------------
function cycleMapStyle() {
  const keys = Object.keys(TILE_LAYERS);
  const nextIndex = (keys.indexOf(currentLayerKey) + 1) % keys.length;
  setTileLayer(keys[nextIndex]);
}

// ----------------------------------------------------------------------------------
// Toast Notification
// ----------------------------------------------------------------------------------
function showToast(text) {
  const toast = document.getElementById("toastMsg");
  toast.innerText = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// ----------------------------------------------------------------------------------
// Event Listeners Setup
// ----------------------------------------------------------------------------------
function setupEventListeners() {
  // City Selector Dropdown Toggle
  const citySelectorBtn = document.getElementById("citySelectorBtn");
  const citySelectorWrapper = document.getElementById("citySelectorWrapper");
  if (citySelectorBtn && citySelectorWrapper) {
    citySelectorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      citySelectorWrapper.classList.toggle("open");
    });

    // Close dropdown on click outside
    document.addEventListener("click", (e) => {
      if (!citySelectorWrapper.contains(e.target)) {
        citySelectorWrapper.classList.remove("open");
      }
    });

    // City Dropdown Item Clicks
    document.querySelectorAll(".city-dropdown-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const cityId = item.dataset.cityId;
        if (cityId && cityId !== currentCityKey) {
          switchCity(cityId);
        } else {
          citySelectorWrapper.classList.remove("open");
        }
      });
    });
  }

  // Brand icon reset view
  const brandIcon = document.getElementById("brandIcon");
  if (brandIcon) {
    brandIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      const city = CITIES[currentCityKey];
      map.flyTo(city.center, city.defaultZoom, { duration: 1.2 });
    });
  }

  // Search Input
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    clearSearchBtn.style.display = val ? "block" : "none";
    handleSearch(val);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    applyFilters();
  });

  // Language Toggle
  document.getElementById("btnLangToggle").addEventListener("click", toggleLanguage);

  // Scenic Route Toggle
  document.getElementById("btnScenicRoute").addEventListener("click", toggleScenicRoutes);

  // Modal Controls
  document.getElementById("modalCloseBtn").addEventListener("click", closeAttractionModal);
  const mediaCloseBtn = document.getElementById("mediaCloseBtn");
  if (mediaCloseBtn) mediaCloseBtn.addEventListener("click", closeAttractionModal);

  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay" || e.target.id === "modalDialogDuo") closeAttractionModal();
  });

  // Lightbox Close Controls
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target.id === "lightboxOverlay") closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const lb = document.getElementById("lightboxOverlay");
      if (lb && lb.classList.contains("active")) {
        closeLightbox();
      } else {
        closeAttractionModal();
      }
    }
  });

  document.getElementById("btnModalPrev").addEventListener("click", () => navigateModal(-1));
  document.getElementById("btnModalNext").addEventListener("click", () => navigateModal(1));

  // Auto Tour Controls (Delegates to Plan 1 Tour & Time-Lapse)
  document.getElementById("btnAutoTour").addEventListener("click", () => {
    if (typeof openPlan1Modal === 'function') {
      openPlan1Modal();
    } else {
      toggleAutoTour();
    }
  });
  document.getElementById("tourBtnStop").addEventListener("click", stopAutoTour);
  document.getElementById("tourBtnNext").addEventListener("click", () => {
    const city = CITIES[currentCityKey];
    currentAttractionIndex = (currentAttractionIndex + 1) % city.attractions.length;
    runTourStep();
  });

  // Map Layer Button
  document.getElementById("btnMapStyle").addEventListener("click", cycleMapStyle);

  // Sidebar Toggle
  const sidebar = document.getElementById("sidebarPanel");
  document.getElementById("btnToggleSidebar").addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
  document.getElementById("sidebarCloseBtn").addEventListener("click", () => {
    sidebar.classList.add("collapsed");
  });

  // Travel Guide Banner Slide-to-Side Collapse & Expand ("หุบเข้าด้านข้าง")
  const guideToggleHeader = document.getElementById("guideBannerToggle");
  if (guideToggleHeader) {
    guideToggleHeader.addEventListener("click", () => {
      minimizeGuideBanner();
    });
  }

  const collapseBtn = document.getElementById("btnToggleGuideBanner");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      minimizeGuideBanner();
    });
  }

  const guideSideTab = document.getElementById("btnGuideSideTab");
  if (guideSideTab) {
    guideSideTab.addEventListener("click", (e) => {
      e.stopPropagation();
      expandGuideBanner();
    });
  }

  // Delegated fallback listener to ensure 100% click capture on the side tab
  document.addEventListener("click", (e) => {
    if (e.target.closest("#btnGuideSideTab")) {
      expandGuideBanner();
    }
  });

  // Reset Bounds on Brand Section Click (excluding dropdown)
  document.getElementById("brandSection").addEventListener("click", (e) => {
    if (e.target.closest("#citySelectorWrapper")) return;
    const city = CITIES[currentCityKey];
    const effectivePoints = city.attractions.map(a => getEffectiveCoords(a));
    const bounds = L.latLngBounds(effectivePoints);
    map.fitBounds(bounds, { padding: [60, 60], duration: 1.0 });
  });
}
