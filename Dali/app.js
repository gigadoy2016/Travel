// Dali Geographic Discovery - Interactive Web Application Logic
// Cozy Hand-Drawn Travel Infographic Theme (AMAP Edition)

// Current Application State
let map;
let markers = [];
let scenicRouteLayers = [];
let isScenicRouteVisible = true;
let currentAttractionIndex = 0;
let filteredAttractions = [...DALI_ATTRACTIONS];
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
    appTitle: "แผนที่ท่องเที่ยวต้าหลี่ (Dali Slow-Life Map)",
    appSubtitle: "11 จุดเช็คอิน & ศูนย์กลางรถไฟความเร็วสูง โอบกอดทะเลสาบเอ๋อร์ไห่ & ชางซาน · AMAP English",
    searchPlaceholder: "ค้นหาจุดเช็คอิน, ชื่ออังกฤษ, จีน, พินอิน...",
    btnTourStart: "<span>🎬</span> ทัวร์แผน 1 (Time-Lapse)",
    btnTourStop: "<span>⏹️</span> หยุดทัวร์",
    btnMapStyle: "<span>🎨</span> แผนที่",
    btnSidebar: "<span>📋</span> จุดเช็คอิน",
    btnRoute: "<span>🚲</span> เส้นทางเที่ยว",
    btnInfographic: "<span>🖼️</span> ภาพ Infographic",
    sidebarTitle: "สมุดบันทึกสถานที่แนะนำ",
    countUnit: "แห่ง",
    emptySearch: "ไม่พบสถานที่ที่ตรงกับคำค้นหา",
    catAll: "🌟 ทั้งหมด (11)",
    catTransit: "🚅 สถานีรถไฟ (HSR Hub)",
    catTown: "🏯 เมืองโบราณ",
    catLake: "🌊 ทะเลสาบ & ซานโตรินี",
    catMountain: "🏔️ เทือกเขา & ธารน้ำแข็ง",
    catCulture: "🪷 วัฒนธรรม & วัดเซน",
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
    guideTitle: "การเดินทาง & เส้นทางแนะนำ (Dali Travel Quick Guide)",
    transportHeader: "การเดินทาง :",
    routesHeader: "เส้นทางแนะนำ :",
    route1Desc: "<strong>เส้นทางสโลว์ไลฟ์รอบทะเลสาบ (3 วัน 🌊) :</strong> สถานีรถไฟต้าหลี่ ➔ เมืองโบราณต้าหลี่ ➔ อ่าวตัว S ➔ ซีโจว ➔ ซานโตรินี",
    route2Desc: "<strong>เส้นทางคาราวานม้า & ขุนเขา (2 วัน 🐴) :</strong> วัดแม่ชีจี้จาวอัน ➔ เขาชางซาน ➔ โจวเฉิง ➔ ซาซี",
    routeVisibleToast: "แสดงเส้นทางท่องเที่ยวบนแผนที่แล้ว",
    routeHiddenToast: "ซ่อนเส้นทางท่องเที่ยวแล้ว"
  },
  en: {
    appTitle: "Dali Cozy Travel Map Guide",
    appSubtitle: "11 Slow-Life Destinations & HSR Gateway around Erhai Lake & Mount Cangshan · AMAP",
    searchPlaceholder: "Search attractions, English, Pinyin, Chinese...",
    btnTourStart: "<span>🎬</span> Plan 1 Tour (Time-Lapse)",
    btnTourStop: "<span>⏹️</span> Stop Tour",
    btnMapStyle: "<span>🎨</span> Map Style",
    btnSidebar: "<span>📋</span> Places",
    btnRoute: "<span>🚲</span> Routes",
    btnInfographic: "<span>🖼️</span> Infographic PNG",
    sidebarTitle: "Travel Journal Places",
    countUnit: "spots",
    emptySearch: "No attractions matching your search",
    catAll: "🌟 All (11)",
    catTransit: "🚅 High-Speed Rail Hub",
    catTown: "🏯 Ancient Towns",
    catLake: "🌊 Lakes & Views",
    catMountain: "🏔️ Mountains & Alpine",
    catCulture: "🪷 Heritage & Zen",
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
    tourBrowsing: "Exploring Dali's slow-life geography...",
    guideTitle: "Travel Logistics & Recommended Routes",
    transportHeader: "Getting Around :",
    routesHeader: "Suggested Itineraries :",
    route1Desc: "<strong>Slow-Life Lakeside Loop (3 Days 🌊) :</strong> Dali Railway Station ➔ Dali Old Town ➔ Panxi S-Bay ➔ Xizhou ➔ Santorini",
    route2Desc: "<strong>Tea Horse Caravan & Alpine (2 Days 🐴) :</strong> Jizhao Nunnery ➔ Cangshan ➔ Zhoucheng ➔ Shaxi",
    routeVisibleToast: "Scenic routes shown on map",
    routeHiddenToast: "Scenic routes hidden"
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
// ------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  renderSidebarList();
  renderMarkers();
  renderScenicRoutes();
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
    const filterTop = navTop + navHeight + 10;
    filterBar.style.top = `${filterTop}px`;
    
    if (sidebar) {
      const filterHeight = filterBar.offsetHeight;
      sidebar.style.top = `${filterTop + filterHeight + 10}px`;
    }
  }
}

function initMap() {
  // Center of Erhai Lake Valley (Dali Ancient Town & Erhai basin)
  const daliCenter = [25.7500, 100.1800];

  map = L.map("map", {
    center: daliCenter,
    zoom: 11,
    minZoom: 9,
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
// Rendering Custom Cozy Hand-Drawn Marker Pins on Map
// Exact Mathematical Needle Tip Alignment Anchored at [110, 56]
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
// ------------------------------------------------------------------
function renderScenicRoutes() {
  scenicRouteLayers.forEach(l => map.removeLayer(l));
  scenicRouteLayers = [];

  if (!isScenicRouteVisible) return;

  // Route 1: Erhai Lake Loop starting from Dali Railway Station (0 -> 1 -> 5 -> 4 -> 2 -> 9 -> 7 -> 6 -> 0)
  const route1Ids = [0, 1, 5, 4, 2, 9, 7, 6, 0];
  const route1Points = route1Ids.map(id => {
    const spot = DALI_ATTRACTIONS.find(a => a.id === id);
    return getEffectiveCoords(spot);
  });

  const line1 = L.polyline(route1Points, {
    color: '#E07A5F',
    weight: 3.5,
    opacity: 0.85,
    dashArray: '8, 8',
    className: 'scenic-route-dash'
  }).addTo(map);

  line1.bindTooltip(
    currentLang === 'en' ? "🌊 Erhai Lake Scenic Greenway Loop" : "🌊 เส้นทางสโลว์ไลฟ์รอบทะเลสาบเอ๋อร์ไห่",
    { sticky: true, className: 'custom-leaflet-tooltip' }
  );
  scenicRouteLayers.push(line1);

  // Route 2: Ancient Caravan & Mountain Trail (10 -> 8 -> 1 -> 3)
  const route2Ids = [10, 8, 1, 3];
  const route2Points = route2Ids.map(id => {
    const spot = DALI_ATTRACTIONS.find(a => a.id === id);
    return getEffectiveCoords(spot);
  });

  const line2 = L.polyline(route2Points, {
    color: '#5B8266',
    weight: 3.5,
    opacity: 0.85,
    dashArray: '6, 8',
    className: 'scenic-route-dash'
  }).addTo(map);

  line2.bindTooltip(
    currentLang === 'en' ? "🐴 Cangshan & Tea Horse Road Trail" : "🐴 เส้นทางขุนเขาชางซาน & คาราวานม้าซาซี",
    { sticky: true, className: 'custom-leaflet-tooltip' }
  );
  scenicRouteLayers.push(line2);
}

function toggleScenicRoutes() {
  isScenicRouteVisible = !isScenicRouteVisible;
  const btn = document.getElementById("btnScenicRoute");
  btn.classList.toggle("active", isScenicRouteVisible);
  renderScenicRoutes();
  const t = UI_TEXTS[currentLang];
  showToast(isScenicRouteVisible ? t.routeVisibleToast : t.routeHiddenToast);
}

// ----------------------------------------------------------------------------------
// Rendering Sidebar List (Travel Scrapbook Index Cards)
// ------------------------------------------------------------------
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

  document.getElementById("attractionCount").innerText = `${filteredAttractions.length} ${t.countUnit}`;
}

// ----------------------------------------------------------------------------------
// Selecting an Attraction
// ------------------------------------------------------------------
function selectAttraction(id, openModal = true) {
  const item = DALI_ATTRACTIONS.find(a => a.id === id);
  if (!item) return;

  currentAttractionIndex = DALI_ATTRACTIONS.findIndex(a => a.id === id);
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
  
  // Titles and Subtitles
  document.getElementById("modalHeroImg").src = item.image;
  document.getElementById("modalTitleTh").innerText = `${item.doodleIcon || ''} ${currentLang === 'en' ? item.nameEn : item.nameTh}`;
  document.getElementById("modalTitleSub").innerText = `${item.nameZh} · ${item.pinyin} ${currentLang === 'en' ? `(${item.nameTh})` : `(${item.nameEn})`}`;
  
  // Badges
  const orderBadge = document.getElementById("modalOrderBadge");
  orderBadge.innerText = item.id === 0 ? (currentLang === 'en' ? 'HSR Gateway' : 'ประตูสู่ต้าหลี่ 🚅') : `${t.pointLabel} ${item.id} / 10`;
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
    <strong>${currentLang === 'en' ? 'From Old Town:' : 'จากเมืองเก่า:'}</strong> ${trans.fromOldTown || trans.fromAirport || trans.inside}
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

  modalOverlay.classList.add("active");
}

function closeAttractionModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

function navigateModal(direction) {
  currentAttractionIndex = (currentAttractionIndex + direction + DALI_ATTRACTIONS.length) % DALI_ATTRACTIONS.length;
  const nextItem = DALI_ATTRACTIONS[currentAttractionIndex];
  selectAttraction(nextItem.id, true);
}

// ----------------------------------------------------------------------------------
// Category Filters & Search
// ------------------------------------------------------------------
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
  const currentSearch = searchQuery || document.getElementById("searchInput").value.trim().toLowerCase();

  filteredAttractions = DALI_ATTRACTIONS.filter(item => {
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
// ------------------------------------------------------------------
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

  tourInterval = setInterval(() => {
    currentAttractionIndex = (currentAttractionIndex + 1) % DALI_ATTRACTIONS.length;
    runTourStep();
  }, 6500);
}

function runTourStep() {
  const item = DALI_ATTRACTIONS[currentAttractionIndex];
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
// ------------------------------------------------------------------
function toggleLanguage() {
  currentLang = currentLang === "en" ? "th" : "en";
  updateUIStrings();
  renderSidebarList();
  renderMarkers();
  renderScenicRoutes();

  // If modal is currently open, refresh it
  if (document.getElementById("modalOverlay").classList.contains("active")) {
    const currentItem = DALI_ATTRACTIONS[currentAttractionIndex];
    openAttractionModal(currentItem);
  }

  showToast(currentLang === 'en' ? "Language: English" : "เปลี่ยนภาษา: ไทย");
}

function updateUIStrings() {
  const t = UI_TEXTS[currentLang];

  document.getElementById("appTitle").innerText = t.appTitle;
  document.getElementById("appSubtitle").innerText = t.appSubtitle;
  document.getElementById("searchInput").placeholder = t.searchPlaceholder;
  
  if (!isTourRunning) {
    document.getElementById("btnAutoTour").innerHTML = t.btnTourStart;
  }
  document.getElementById("btnMapStyle").innerHTML = t.btnMapStyle;
  document.getElementById("btnToggleSidebar").innerHTML = t.btnSidebar;
  document.getElementById("btnScenicRoute").innerHTML = t.btnRoute;
  const btnInfographic = document.getElementById("btnInfographicPng");
  if (btnInfographic) btnInfographic.innerHTML = t.btnInfographic;
  document.getElementById("sidebarHeaderTitle").innerHTML = `<span>📍</span> ${t.sidebarTitle}`;

  // Filter Pills
  document.getElementById("filterAll").innerHTML = t.catAll;
  const filterTransit = document.getElementById("filterTransit");
  if (filterTransit) filterTransit.innerHTML = t.catTransit;
  document.getElementById("filterTown").innerHTML = t.catTown;
  document.getElementById("filterLake").innerHTML = t.catLake;
  document.getElementById("filterMountain").innerHTML = t.catMountain;
  document.getElementById("filterCulture").innerHTML = t.catCulture;

  // Modal Labels
  document.getElementById("labelHours").innerHTML = t.hoursLabel;
  document.getElementById("labelBestTime").innerHTML = t.bestTimeLabel;
  document.getElementById("labelTicket").innerHTML = t.ticketLabel;
  document.getElementById("labelTransport").innerHTML = t.transportLabel;
  document.getElementById("labelHighlights").innerHTML = `<span>✨</span> ${t.highlightsTitle}`;

  document.getElementById("btnModalPrev").innerHTML = t.btnPrev;
  document.getElementById("btnModalNext").innerHTML = t.btnNext;
  document.getElementById("btnCopyGps").innerHTML = `<span>📋</span> ${t.btnCopyGps}`;
  
  // Language button label
  document.getElementById("btnLangToggle").innerHTML = currentLang === "en" ? "🇹🇭 TH" : "🇬🇧 EN";

  // Guide Banner
  document.getElementById("guideBannerTitle").innerText = t.guideTitle;
  document.getElementById("guideTransportLabel").innerText = t.transportHeader;
  document.getElementById("guideRoutesLabel").innerText = t.routesHeader;
  document.getElementById("route1Desc").innerHTML = t.route1Desc;
  document.getElementById("route2Desc").innerHTML = t.route2Desc;
}

// ----------------------------------------------------------------------------------
// Map Layer Switcher
// ------------------------------------------------------------------
function cycleMapStyle() {
  const keys = Object.keys(TILE_LAYERS);
  const nextIndex = (keys.indexOf(currentLayerKey) + 1) % keys.length;
  setTileLayer(keys[nextIndex]);
}

// ----------------------------------------------------------------------------------
// Toast Notification
// ------------------------------------------------------------------
function showToast(text) {
  const toast = document.getElementById("toastMsg");
  toast.innerText = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// ----------------------------------------------------------------------------------
// Event Listeners Setup
// ------------------------------------------------------------------
function setupEventListeners() {
  // Category Pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      filterByCategory(pill.dataset.category);
    });
  });

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
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeAttractionModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAttractionModal();
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
    currentAttractionIndex = (currentAttractionIndex + 1) % DALI_ATTRACTIONS.length;
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

  // Travel Guide Banner Minimize Toggle
  const guideBanner = document.getElementById("travelGuideBanner");
  document.getElementById("guideBannerToggle").addEventListener("click", () => {
    guideBanner.classList.toggle("minimized");
  });

  // Reset Bounds on Brand Click
  document.getElementById("brandSection").addEventListener("click", () => {
    const effectivePoints = DALI_ATTRACTIONS.map(a => getEffectiveCoords(a));
    const bounds = L.latLngBounds(effectivePoints);
    map.fitBounds(bounds, { padding: [60, 60], duration: 1.0 });
  });
}
