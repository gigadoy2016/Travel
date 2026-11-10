// ============================================================================
// HARBIN (哈尔滨) 4-COLUMN VERTICAL TRIP PLANNER & AMAP ENGLISH MAP LOGIC
// - Section 1: Activity Timeline (Walk, Eat, Visit, Transit) ordered by time
// - Section 2: Chooses (28+ Harbin Attractions & Food Spots, Drag & Drop to ANY queue slot)
// - Sections 3 & 4: AMAP Harbin Interactive Map (English Labels, Pinning, Route Lines)
// ============================================================================

const STORAGE_KEY_TIMELINE = "harbin_planner_timeline_v17";
const STORAGE_KEY_CUSTOM_SPOTS = "harbin_planner_custom_spots_v11";
const IS_READ_ONLY = true; // Public View-Only Mode: Disables edits, deletes, drag-and-drop, and pin additions

// Detail Markdown File Mapping (for the original 22 Harbin docs)
const SPOT_MD_FILES = {
  0: "00_Harbin_Railway_Station.md",
  1: "01_Saint_Sophia_Cathedral.md",
  2: "02_Zhongyang_Pedestrian_Street.md",
  3: "03_Volga_Manor.md",
  4: "04_Siberian_Tiger_Park.md",
  5: "05_Sun_Island_Scenic_Area.md",
  6: "06_Binzhou_Railway_Bridge.md",
  7: "07_Songhua_River_Ice_Carnival.md",
  8: "08_Chinese_Baroque_Lao_Daowai.md",
  9: "09_Harbin_Grand_Theatre.md",
  10: "10_Flood_Control_Monument.md",
  11: "11_Harbin_Taiping_Airport.md",
  12: "12_Harbin_Ice_and_Snow_World.md",
  13: "13_Gogol_Street_Alekseyev_Church.md",
  14: "14_Songhua_River_Cableway.md",
  15: "15_Hongzhuan_Morning_Market.md",
  16: "16_Provincial_Museum.md",
  17: "17_Dragon_Tower.md",
  18: "18_Harbin_Beer_Museum.md",
  19: "19_Music_Park_Giant_Snowman.md",
  20: "20_China_Snow_Town_Xuexiang.md",
  21: "21_China_Snow_Valley_Xuegu.md"
};

// Local Fallback Images
const SPOT_LOCAL_IMGS = {
  0: "assets/places/harbin_00_station.jpg",
  1: "assets/places/harbin_01_saint_sophia.jpg",
  2: "assets/places/harbin_02_zhongyang_street.jpg",
  3: "assets/places/harbin_03_volga_manor.jpg",
  4: "assets/places/harbin_04_siberian_tiger_park.jpg",
  5: "assets/places/harbin_05_sun_island.jpg",
  6: "assets/places/harbin_06_binzhou_bridge.jpg",
  7: "assets/places/harbin_07_songhua_river_carnival.jpg",
  8: "assets/places/harbin_08_chinese_baroque.jpg",
  9: "assets/places/harbin_09_harbin_opera_house.jpg",
  10: "assets/places/harbin_10_flood_control_monument.jpg",
  11: "assets/places/harbin_11_airport.jpg",
  12: "assets/places/harbin_12_ice_and_snow_world.jpg",
  13: "assets/places/harbin_13_gogol_street.jpg",
  14: "assets/places/harbin_14_songhua_ropeway.jpg",
  15: "assets/places/harbin_15_hongzhuan_market.jpg",
  16: "assets/places/harbin_16_provincial_museum.jpg",
  17: "assets/places/harbin_17_dragon_tower.jpg",
  18: "assets/places/harbin_18_beer_museum.jpg",
  19: "assets/places/harbin_19_music_park.jpg",
  29: "assets/places/harbin_29_niufugui_hotpot.jpg"
};

// English Geographic Landmarks Overlay for AMAP Harbin Map
const HARBIN_ENGLISH_GEO_LABELS = [
  { coords: [45.7795, 126.6050], text: "🌊 SONGHUA RIVER (Frozen Ice River)" },
  { coords: [45.7660, 126.6180], text: "🏙️ DAOLI DISTRICT (Downtown Harbin)" },
  { coords: [45.7860, 126.6580], text: "🏮 DAOWAI DISTRICT (Historic Baroque)" },
  { coords: [45.7510, 126.6520], text: "🏛️ NANGANG DISTRICT" },
  { coords: [45.8050, 126.5850], text: "❄️ SONGBEI DISTRICT (North Bank)" },
  { coords: [45.7920, 126.5935], text: "⛄ SUN ISLAND (Taiyangdao)" }
];

// AMAP & English Tile Layer Configurations
const MAP_TILE_LAYERS = {
  amap_en_hybrid: {
    name: "AMAP Road + English Labels",
    isGcj: true,
    baseUrl: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scl=1&style=7",
    subdomains: "1234",
    attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AMAP (AutoNavi 高德地图)</a> · English Overlay'
  },
  carto_en: {
    name: "English Clean Street Map (Carto Voyager)",
    isGcj: false,
    baseUrl: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    subdomains: "abcd",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap (English)'
  },
  amap_sat_en: {
    name: "AMAP Satellite + English Pins",
    isGcj: true,
    baseUrl: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=en&size=1&scl=1&style=6",
    subdomains: "1234",
    attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AMAP Satellite (高德卫星)</a> · English'
  },
  amap_bilingual: {
    name: "AMAP Bilingual (EN / 中文)",
    isGcj: true,
    baseUrl: "https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_en&size=1&scl=1&style=7",
    subdomains: "1234",
    attribution: '&copy; <a href="https://www.amap.com/" target="_blank">AMAP Bilingual (高德中英地图)</a>'
  }
};

// Activity Type Metadata
const ACTIVITY_META = {
  walk: { icon: "🚶", labelTh: "การเดิน (Walk)", labelEn: "Walking", defaultMins: 60 },
  eat: { icon: "🍲", labelTh: "การกิน (Eat)", labelEn: "Dining / Food", defaultMins: 75 },
  visit: { icon: "📸", labelTh: "เที่ยวชม (Visit)", labelEn: "Sightseeing", defaultMins: 90 },
  transit: { icon: "🚕", labelTh: "เดินทาง (Transit)", labelEn: "Transit", defaultMins: 45 }
};

// Application State
let timelineState = {};
let allSpots = [];
let currentDayKey = "day1"; // Active day shown on AMAP route
let selectedDayTab = "all"; // "all" (shows Day 1-6 step table) or "day1".."day6"
let timelineViewMode = "table"; // "table" (Step-by-Step yellow table) or "card"
let currentChooseCategory = "all";
let currentChooseSearch = "";

// Column 2 State: Shows Detail of selected Column 1 item ("detail") or Chooses library ("chooses")
let col2ViewMode = "detail";
let activeTimelineSelection = {
  dayKey: "day1",
  index: 0
};
// Active Transit Mode selected in Column 2 ("auto" | "taxi" | "rail_walk" | "walk")
let selectedTransitMode = "auto";

// Drag & Drop State
let draggedPayload = null; // { source: 'chooses' | 'timeline', spotId?, dayKey?, timelineIndex?, uid? }

// Map State
let map = null;
let tileLayerInstance = null;
let satelliteOverlayInstance = null;
let currentMapLayerKey = "amap_en_hybrid";
let markerLayerGroup = null;
let routeLayerGroup = null;
let geoLabelLayerGroup = null;
let userLocationMarker = null;

let isPinModeActive = false;
let isRouteVisible = true;
let showAllHarbinPins = true;
let showPermanentEnLabels = true;
let currentDetailSpotId = null;

// ============================================================================
// 1. INITIALIZATION & DATA LOADING
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadPersistedData();
  initMap();
  renderAll();
  setupEventListeners();
  fetchLiveHarbinWeather();
  initChecklistModule();
});

function loadPersistedData() {
  // Enrich default HARBIN_ATTRACTIONS with default activityType & duration if not set
  const baseAttractions = HARBIN_ATTRACTIONS.map(spot => {
    let defaultAct = spot.activityType || "visit";
    if (!spot.activityType) {
      if (spot.category === "transit_hub") defaultAct = "transit";
      else if (spot.category === "food_dining" || spot.id === 15) defaultAct = "eat";
      else if (spot.category === "historic_street" || [2, 6, 7, 8, 10, 13, 19].includes(spot.id)) defaultAct = "walk";
    }
    return {
      ...spot,
      activityType: defaultAct,
      defaultDuration: spot.defaultDuration || ACTIVITY_META[defaultAct].defaultMins,
      isCustomPin: false
    };
  });

  // Load any user-created custom pins
  let customSpots = [];
  try {
    const savedCustom = localStorage.getItem(STORAGE_KEY_CUSTOM_SPOTS);
    if (savedCustom) customSpots = JSON.parse(savedCustom);
  } catch (e) {
    console.warn("Could not read custom spots:", e);
  }

  allSpots = [...baseAttractions, ...customSpots];

  // Load Timeline State
  try {
    const savedTimeline = localStorage.getItem(STORAGE_KEY_TIMELINE);
    if (savedTimeline) {
      timelineState = JSON.parse(savedTimeline);
    } else {
      timelineState = JSON.parse(JSON.stringify(DEFAULT_HARBIN_TIMELINE));
    }
  } catch (e) {
    timelineState = JSON.parse(JSON.stringify(DEFAULT_HARBIN_TIMELINE));
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY_TIMELINE, JSON.stringify(timelineState));
    const customOnly = allSpots.filter(s => s.isCustomPin);
    localStorage.setItem(STORAGE_KEY_CUSTOM_SPOTS, JSON.stringify(customOnly));
  } catch (e) {
    console.warn("Could not save state:", e);
  }
}

function getSpotById(spotId) {
  return allSpots.find(s => Number(s.id) === Number(spotId)) || null;
}

// ============================================================================
// 2. COORDINATE PROJECTION (AMAP GCJ-02 <-> WGS-84) & DISTANCE MATH
// ============================================================================
function gcj02ToWgs84(lat, lng) {
  const PI = Math.PI;
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

function getDisplayCoords(gcjCoords) {
  const layerCfg = MAP_TILE_LAYERS[currentMapLayerKey];
  if (layerCfg && layerCfg.isGcj) {
    return gcjCoords;
  }
  return gcj02ToWgs84(gcjCoords[0], gcjCoords[1]);
}

// Haversine Distance in km
function calcDistanceKm(coords1, coords2) {
  if (!coords1 || !coords2) return 0;
  const R = 6371;
  const dLat = ((coords2[0] - coords1[0]) * Math.PI) / 180;
  const dLon = ((coords2[1] - coords1[1]) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coords1[0] * Math.PI) / 180) *
      Math.cos((coords2[0] * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function estimateTravelLeg(distKm) {
  if (distKm < 1.6) {
    const walkMins = Math.max(5, Math.round((distKm / 4.2) * 60));
    return { mode: "🚶 Walk", mins: walkMins, textEn: `${distKm.toFixed(1)} km · ~${walkMins}m walk` };
  } else {
    const driveMins = Math.max(8, Math.round((distKm / 32) * 60 + 5));
    return { mode: "🚕 DiDi/Van", mins: driveMins, textEn: `${distKm.toFixed(1)} km · ~${driveMins}m drive` };
  }
}

// Time String Helpers ("09:30" + 60 -> "10:30")
function timeToMinutes(timeStr) {
  const [hh, mm] = (timeStr || "09:00").split(":").map(Number);
  return (hh || 0) * 60 + (mm || 0);
}

function minutesToTime(totalMins) {
  const normalized = ((totalMins % 1440) + 1440) % 1440;
  const hh = String(Math.floor(normalized / 60)).padStart(2, "0");
  const mm = String(normalized % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

// ============================================================================
// 3. RENDER ALL SECTIONS & WEATHER / TEMPERATURE BY DATE-TIME
// ============================================================================
const HARBIN_TRIP_WEATHER_BY_DAY = {
  day1: { dateTh: "4 ธ.ค. 2026", dateShort: "4 ธ.ค.", highC: -11, lowC: -22, condTh: "ฟ้าใสหนาวจัด ❄️", windKmh: 14 },
  day2: { dateTh: "5 ธ.ค. 2026", dateShort: "5 ธ.ค.", highC: -12, lowC: -23, condTh: "หิมะโปรยบางเบา 🌨️", windKmh: 16 },
  day3: { dateTh: "6 ธ.ค. 2026", dateShort: "6 ธ.ค.", highC: -14, lowC: -26, condTh: "หมู่บ้านหิมะ Snow Town (คืนที่ 1) 🍄❄️", windKmh: 18 },
  day4: { dateTh: "7 ธ.ค. 2026", dateShort: "7 ธ.ค.", highC: -15, lowC: -28, condTh: "หมู่บ้านหิมะ Snow Town (คืนที่ 2) ⛄❄️", windKmh: 15 },
  day5: { dateTh: "8 ธ.ค. 2026", dateShort: "8 ธ.ค.", highC: -12, lowC: -23, condTh: "เช้า Snow Town ➔ บ่ายฮาร์บิน 🌬️", windKmh: 17 },
  day6: { dateTh: "9 ธ.ค. 2026", dateShort: "9 ธ.ค.", highC: -10, lowC: -20, condTh: "แดดอ่อนอากาศเย็นจัด 🌤️", windKmh: 12 }
};

let liveHarbinWeather = null;

function getWeatherForSelection(dayKey, item) {
  const allDayKeys = Object.keys(timelineState);
  const dayIdx = Math.max(0, allDayKeys.indexOf(dayKey));
  const preset = HARBIN_TRIP_WEATHER_BY_DAY[dayKey] || {
    dateTh: `${4 + dayIdx} ธ.ค. 2026`,
    dateShort: `${4 + dayIdx} ธ.ค.`,
    highC: -12,
    lowC: -23,
    condTh: "อากาศหนาวจัด ❄️",
    windKmh: 15
  };

  const timeStr = item?.time || "12:00";
  const mins = timeToMinutes(timeStr);
  const hour = mins / 60;

  // Calculate realistic hourly temperature between daily lowC (at 06:00) and highC (at 14:00)
  // Using cosine curve peaking around 14:00
  const phase = ((hour - 14) / 24) * 2 * Math.PI;
  const factor = (Math.cos(phase) + 1) / 2; // 1 at 14:00, 0 at 02:00
  let hourlyTempC = Math.round(preset.lowC + (preset.highC - preset.lowC) * factor);

  // Adjust if Snow Town (spotId 20) or Snow Valley (spotId 21) which are 3-4°C colder in the mountains
  if (Number(item?.spotId) === 20 || Number(item?.spotId) === 21) {
    hourlyTempC -= 3;
  }

  const feelsLikeC = hourlyTempC - 5;
  const sourceUrl = "https://www.accuweather.com/th/cn/harbin/103326/weather-forecast/103326";
  const secondaryUrl = "https://www.timeanddate.com/weather/china/harbin/ext";

  return {
    tempC: hourlyTempC,
    feelsLikeC,
    highC: preset.highC,
    lowC: preset.lowC,
    dateTh: preset.dateTh,
    dateShort: preset.dateShort,
    timeStr,
    dayNumber: dayIdx + 1,
    condTh: preset.condTh,
    sourceName: "AccuWeather Harbin",
    sourceUrl,
    secondaryUrl
  };
}

function updateHeaderWeatherBadge() {
  const badgeLink = document.getElementById("headerWeatherBadge");
  const badgeText = document.getElementById("headerWeatherText");
  if (!badgeLink || !badgeText) return;

  const selDayKey = activeTimelineSelection.dayKey || currentDayKey || "day1";
  const items = timelineState[selDayKey]?.items || [];
  const selItem = items[activeTimelineSelection.index] || items[0] || { time: "12:00" };
  const w = getWeatherForSelection(selDayKey, selItem);

  const liveNote = liveHarbinWeather
    ? ` | ขณะนี้ ${liveHarbinWeather.tempC}°C`
    : "";

  badgeLink.href = w.sourceUrl;
  badgeLink.title = `คลิกเพื่อเปิดดูพยากรณ์อากาศฮาร์บินจากแหล่งที่มา (${w.sourceName}) · วันที่ ${w.dayNumber} (${w.dateTh}) เวลา ${w.timeStr} น. อุณหภูมิประมาณ ${w.tempC}°C (Feel like ${w.feelsLikeC}°C)`;
  badgeText.innerHTML = `❄️ <strong>${w.tempC}°C</strong> <span style="opacity:0.88;">(${w.lowC}°~${w.highC}°C)</span> · 📅 วันที่ ${w.dayNumber} (${w.dateShort}) 🕒 ${w.timeStr} น.${liveNote}`;
}

async function fetchLiveHarbinWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=45.75&longitude=126.65&current=temperature_2m,apparent_temperature&timezone=Asia%2FShanghai"
    );
    if (!res.ok) return;
    const data = await res.json();
    if (data?.current && typeof data.current.temperature_2m === "number") {
      liveHarbinWeather = {
        tempC: Math.round(data.current.temperature_2m),
        feelsC: Math.round(data.current.apparent_temperature ?? data.current.temperature_2m),
        updatedAt: data.current.time || ""
      };
      updateHeaderWeatherBadge();
    }
  } catch (_) {
    // Fallback to historical trip forecast silently if offline
  }
}

function renderAll() {
  ensureValidTimelineSelection();
  updateHeaderWeatherBadge();
  renderDayTabs();
  renderTimelineSection();
  renderSelectedTimelineDetail();
  renderChoosesSection();
  updateInsertPositionDropdown();
  renderMapMarkersAndRoute();
}

function ensureValidTimelineSelection() {
  const dayKeys = Object.keys(timelineState);
  if (!dayKeys.length) return;
  if (!timelineState[activeTimelineSelection.dayKey]) {
    activeTimelineSelection.dayKey = currentDayKey && timelineState[currentDayKey] ? currentDayKey : dayKeys[0];
    activeTimelineSelection.index = 0;
  }
  const items = timelineState[activeTimelineSelection.dayKey]?.items || [];
  if (items.length === 0) {
    activeTimelineSelection.index = 0;
  } else if (activeTimelineSelection.index >= items.length || activeTimelineSelection.index < 0) {
    activeTimelineSelection.index = Math.max(0, items.length - 1);
  }
}

function setCol2ViewMode(mode) {
  col2ViewMode = mode === "chooses" ? "chooses" : "detail";
  const detailPane = document.getElementById("col2DetailPane");
  const choosesPane = document.getElementById("col2ChoosesPane");
  const btnDetail = document.getElementById("btnCol2ModeDetail");
  const btnChooses = document.getElementById("btnCol2ModeChooses");

  if (detailPane) detailPane.hidden = col2ViewMode !== "detail";
  if (choosesPane) choosesPane.hidden = col2ViewMode !== "chooses";
  if (btnDetail) btnDetail.classList.toggle("active", col2ViewMode === "detail");
  if (btnChooses) btnChooses.classList.toggle("active", col2ViewMode === "chooses");
}

const DAY_COLORS = ["#e4572e", "#2a9d8f", "#6a4c93", "#f4a300", "#1d70b8", "#b5179e", "#059669", "#e11d48"];

// Tooltip Helpers (Disabled as requested - no intrusive floating tooltip popover)
function showFloatingTip() {
  return;
}

function moveFloatingTip() {
  return;
}

function hideFloatingTip() {
  const tip = document.getElementById("floatingTip");
  if (tip) {
    tip.style.display = "none";
    tip.innerHTML = "";
  }
}

function clearDragOverStates() {
  document.querySelectorAll(".tl-day.over, .tl-row.before").forEach(el => {
    el.classList.remove("over", "before");
  });
}

function renderDayTabs() {
  const container = document.getElementById("dayTabsContainer");
  if (!container) return;

  const dayKeys = Object.keys(timelineState);
  let html = `<button class="clean-day-pill ${selectedDayTab === "all" ? "active" : ""}" data-day="all">ทั้งหมด (${dayKeys.length} วัน)</button>`;

  dayKeys.forEach((dk, idx) => {
    const c = DAY_COLORS[idx % DAY_COLORS.length];
    const isAct = selectedDayTab === dk;
    html += `
      <button class="clean-day-pill ${isAct ? "active" : ""}" data-day="${dk}">
        <i style="background:${c}"></i>วันที่ ${idx + 1}
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".clean-day-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetDay = btn.dataset.day;
      selectedDayTab = targetDay;
      if (targetDay !== "all") {
        currentDayKey = targetDay;
      }
      renderAll();
      fitCurrentTimelineRoute();
    });
  });
}

// ============================================================================
// 4. SECTION 1: CLEAN VERTICAL DOT-AND-LINE TIMELINE (① แผนการเดินทาง)
// ============================================================================
function renderTimelineSection() {
  const container = document.getElementById("timelineListContainer");
  if (!container) return;

  const allDayKeys = Object.keys(timelineState);
  const dayKeysToRender = selectedDayTab === "all"
    ? allDayKeys
    : [currentDayKey];

  let totalAllItems = 0;
  allDayKeys.forEach(dk => {
    totalAllItems += (timelineState[dk]?.items || []).length;
  });

  // Update header count "(X รายการ)" matching screenshot
  const summaryBadge = document.getElementById("timelineSummaryBadge");
  if (summaryBadge) {
    summaryBadge.textContent = `(${totalAllItems} รายการ)`;
  }
  const mobCount = document.getElementById("mobTimelineCount");
  if (mobCount) mobCount.textContent = totalAllItems;

  container.innerHTML = "";

  dayKeysToRender.forEach(dayKey => {
    const dayObj = timelineState[dayKey];
    if (!dayObj) return;
    const dayIdx = allDayKeys.indexOf(dayKey);
    const c = DAY_COLORS[(dayIdx >= 0 ? dayIdx : 0) % DAY_COLORS.length];
    const items = dayObj.items || [];

    const dayEl = document.createElement("div");
    dayEl.className = `tl-day ${dayKey === currentDayKey ? "focused-day" : ""}`;
    dayEl.dataset.dayKey = dayKey;

    // Extract optional date subtitle e.g. "4 ธ.ค."
    const dateSubMatch = (dayObj.labelTh || "").match(/\((.*?)\)/);
    const dateSubText = dateSubMatch ? ` · ${dateSubMatch[1]}` : "";

    const dh = document.createElement("div");
    dh.className = "tl-dh";
    dh.innerHTML = `
      <i style="background:${c}"></i>
      <span>วันที่ ${dayIdx + 1}<span class="tl-day-sub">${dateSubText}</span></span>
      ${allDayKeys.length > 1 ? `<button type="button" class="tl-del-day" title="ลบวันที่ ${dayIdx + 1}">🗑️</button>` : ""}
    `;

    // Clicking Day Header focuses this day on the map
    dh.addEventListener("click", e => {
      if (e.target.closest(".tl-del-day")) {
        delete timelineState[dayKey];
        const remaining = Object.keys(timelineState);
        if (currentDayKey === dayKey) currentDayKey = remaining[0] || "day1";
        if (selectedDayTab === dayKey) selectedDayTab = "all";
        saveState();
        renderAll();
        return;
      }
      currentDayKey = dayKey;
      renderAll();
      fitCurrentTimelineRoute();
    });

    dayEl.appendChild(dh);

    const listEl = document.createElement("div");
    listEl.className = "tl-list";
    listEl.style.setProperty("--c", c);

    if (items.length === 0) {
      listEl.innerHTML = `<div class="tl-empty">ลากสถานที่มาวางที่นี่</div>`;
    }

    items.forEach((item, index) => {
      const spot = getSpotById(item.spotId);

      // Format display title in strict order: 1. English -> 2. Thai -> 3. Chinese (up to 2 lines)
      let displayTitleHtml = "";
      let displayTitlePlain = "";
      if (item.isFlightStep) {
        const enPart = item.customNameEn || spot?.nameEn || "";
        const thPart = item.customNameTh || spot?.nameTh || "";
        const zhPart = spot?.nameZh ? spot.nameZh.split(" ")[0] : "";
        const tailParts = [thPart, zhPart].filter(Boolean).join(" · ");
        displayTitleHtml = `<span class="n-en">✈️ ${enPart || thPart}</span>${enPart && tailParts ? ` <span class="n-sub">· ${tailParts}</span>` : ""}`;
        displayTitlePlain = `✈️ ${[enPart, thPart, zhPart].filter(Boolean).join(" · ")}`;
      } else if (spot) {
        const enPart = item.customNameEn || spot.nameEn || "";
        const thPart = item.customNameTh || spot.nameTh || "";
        const zhPart = spot.nameZh ? spot.nameZh.split(" ")[0] : "";
        const tailParts = [thPart, zhPart].filter(Boolean).join(" · ");
        displayTitleHtml = `<span class="n-en">${enPart}</span>${tailParts ? ` <span class="n-sub">· ${tailParts}</span>` : ""}`;
        displayTitlePlain = [enPart, thPart, zhPart].filter(Boolean).join(" · ");
      } else {
        const enPart = item.customNameEn || "";
        const thPart = item.customNameTh || "";
        displayTitleHtml = `<span class="n-en">${enPart || thPart || "Custom Activity"}</span>${enPart && thPart && enPart !== thPart ? ` <span class="n-sub">· ${thPart}</span>` : ""}`;
        displayTitlePlain = [enPart, thPart].filter(Boolean).join(" · ") || "Custom Activity";
      }

      const tipDetail = item.noteTh || (spot ? spot.ratingDescTh : "") || "";

      const isSelectedRow =
        activeTimelineSelection.dayKey === dayKey &&
        Number(activeTimelineSelection.index) === Number(index);

      const row = document.createElement("div");
      row.className = `tl-row ${isSelectedRow ? "active-selected" : ""}`;
      row.draggable = !IS_READ_ONLY;
      row.dataset.dayKey = dayKey;
      row.dataset.index = index;
      row.dataset.uid = item.uid;

      if (IS_READ_ONLY) {
        row.innerHTML = `
          <span class="t" style="cursor:default;" title="${item.time || "09:00"}">${item.time || "09:00"}</span>
          <span class="n">${displayTitleHtml}</span>
        `;
      } else {
        row.innerHTML = `
          <span class="t" title="คลิกเพื่อเปลี่ยนเวลา">${item.time || "09:00"}</span>
          <span class="n">${displayTitleHtml}</span>
          <button type="button" class="edit-btn" title="แก้ไขรายละเอียด">✎</button>
          <button type="button" class="x" title="เอาออก">×</button>
        `;

        // Click time (.t) -> prompt for quick time change (just like Downloads/index.html)
        row.querySelector(".t").addEventListener("click", e => {
          e.stopPropagation();
          const v = prompt("เวลา (HH:MM)", item.time || "09:00");
          if (v && /^\d{1,2}:\d{2}$/.test(v.trim())) {
            const formatted = v.trim().padStart(5, "0");
            item.time = formatted;
            const endMins = timeToMinutes(formatted) + Number(item.duration || 60);
            item.timeLabel = `${formatted} - ${minutesToTime(endMins)} น.`;
            saveState();
            renderAll();
          }
        });

        // Click edit button (.edit-btn) -> open full edit modal
        row.querySelector(".edit-btn").addEventListener("click", e => {
          e.stopPropagation();
          openEditTimelineModal(index, dayKey);
        });

        // Click remove button (.x) -> remove item from day
        row.querySelector(".x").addEventListener("click", e => {
          e.stopPropagation();
          removeTimelineItem(index, dayKey);
        });
      }

      // Click row -> select this item to show full Detail & Transit in Column 2 + focus on map
      row.addEventListener("click", () => {
        currentDayKey = dayKey;
        activeTimelineSelection = { dayKey, index };
        selectedTransitMode = "auto";
        setCol2ViewMode("detail");
        renderAll();
        focusTimelineItemOnMap(index, dayKey);
      });

      // Hover tooltip & highlight pin on map
      row.addEventListener("mouseenter", e => {
        showFloatingTip(e, displayTitlePlain, tipDetail);
      });
      row.addEventListener("mousemove", moveFloatingTip);
      row.addEventListener("mouseleave", hideFloatingTip);

      if (!IS_READ_ONLY) {
        // Drag start on timeline row
        row.addEventListener("dragstart", e => {
          hideFloatingTip();
          draggedPayload = {
            source: "timeline",
            dayKey,
            timelineIndex: index,
            uid: item.uid
          };
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("text/plain", JSON.stringify(draggedPayload));
        });

        row.addEventListener("dragend", () => {
          draggedPayload = null;
          clearDragOverStates();
        });

        // Drag over row -> show orange top insertion line (.before)
        row.addEventListener("dragover", e => {
          e.preventDefault();
          e.stopPropagation();
          clearDragOverStates();
          row.classList.add("before");
        });

        // Drop onto row -> insert before this row
        row.addEventListener("drop", e => {
          e.preventDefault();
          e.stopPropagation();
          clearDragOverStates();
          handleDropAtTimelineIndex(index, dayKey);
        });
      }

      listEl.appendChild(row);
    });

    dayEl.appendChild(listEl);

    if (!IS_READ_ONLY) {
      // Drag over Day container -> show dashed outline (.over) and drop at end of day
      dayEl.addEventListener("dragover", e => {
        e.preventDefault();
        clearDragOverStates();
        dayEl.classList.add("over");
      });

      dayEl.addEventListener("dragleave", e => {
        if (!dayEl.contains(e.relatedTarget)) {
          dayEl.classList.remove("over");
        }
      });

      dayEl.addEventListener("drop", e => {
        e.preventDefault();
        clearDragOverStates();
        handleDropAtTimelineIndex(items.length, dayKey);
      });
    }

    container.appendChild(dayEl);
  });
}

function createTimelineDropZone(insertIndex, dayKey = currentDayKey) {
  const dz = document.createElement("div");
  dz.className = "timeline-dropzone";
  dz.dataset.insertIndex = insertIndex;
  dz.dataset.dayKey = dayKey;
  const dayLabel = timelineState[dayKey]?.labelEn.split(" (")[0] || dayKey;
  dz.innerHTML = `<span class="drop-hint">➕ แทรกคิวที่ #${insertIndex + 1} (${dayLabel})</span>`;

  dz.addEventListener("dragover", e => {
    e.preventDefault();
    dz.classList.add("drag-over");
  });

  dz.addEventListener("dragleave", () => {
    dz.classList.remove("drag-over");
  });

  dz.addEventListener("drop", e => {
    e.preventDefault();
    dz.classList.remove("drag-over");
    handleDropAtTimelineIndex(insertIndex, dayKey);
  });

  dz.addEventListener("click", () => {
    currentDayKey = dayKey;
    openCustomActivityModal({ queuePos: insertIndex });
  });

  return dz;
}

function handleDropAtTimelineIndex(targetIndex, targetDayKey = currentDayKey) {
  document.body.classList.remove("is-dragging");
  document.querySelectorAll(".timeline-dropzone.drag-over").forEach(el => el.classList.remove("drag-over"));

  if (!draggedPayload) return;

  currentDayKey = targetDayKey;
  const targetItems = timelineState[targetDayKey].items;

  if (draggedPayload.source === "chooses") {
    insertSpotIntoTimeline(draggedPayload.spotId, targetIndex, targetDayKey);
  } else if (draggedPayload.source === "timeline") {
    const sourceDayKey = draggedPayload.dayKey || currentDayKey;
    const sourceItems = timelineState[sourceDayKey].items;
    const fromIndex = draggedPayload.timelineIndex;

    if (sourceDayKey === targetDayKey && (fromIndex === targetIndex || fromIndex + 1 === targetIndex)) {
      draggedPayload = null;
      return;
    }

    const [moved] = sourceItems.splice(fromIndex, 1);
    const adjustedTarget = (sourceDayKey === targetDayKey && fromIndex < targetIndex)
      ? targetIndex - 1
      : targetIndex;
    targetItems.splice(adjustedTarget, 0, moved);

    saveState();
    renderAll();
    showToast(`ย้ายไปที่ ${timelineState[targetDayKey].labelTh} คิวที่ #${adjustedTarget + 1} แล้ว`);
  }

  draggedPayload = null;
}

function insertSpotIntoTimeline(spotId, targetIndex = "end", targetDayKey = currentDayKey) {
  const spot = getSpotById(spotId);
  if (!spot) return;

  currentDayKey = targetDayKey;
  const items = timelineState[targetDayKey].items;
  const insertAt = targetIndex === "end" || targetIndex === undefined || targetIndex > items.length
    ? items.length
    : Math.max(0, Number(targetIndex));

  let suggestedTime = "09:30";
  if (insertAt > 0 && items[insertAt - 1]) {
    const prev = items[insertAt - 1];
    const prevEnd = timeToMinutes(prev.time) + Number(prev.duration || 60) + 15;
    suggestedTime = minutesToTime(prevEnd);
  } else if (items.length > 0 && items[0]) {
    const firstStart = Math.max(360, timeToMinutes(items[0].time) - Number(spot.defaultDuration || 60) - 15);
    suggestedTime = minutesToTime(firstStart);
  }

  const endMins = timeToMinutes(suggestedTime) + Number(spot.defaultDuration || 60);
  const newItem = {
    uid: `tl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    spotId: spot.id,
    customNameTh: spot.nameTh,
    customNameEn: spot.nameEn,
    time: suggestedTime,
    timeLabel: `${suggestedTime} - ${minutesToTime(endMins)} น.`,
    duration: spot.defaultDuration || 60,
    actType: spot.activityType || "visit",
    noteTh: spot.shortBulletsTh && spot.shortBulletsTh[0] ? spot.shortBulletsTh[0] : spot.ratingDescTh,
    noteEn: spot.shortBulletsEn && spot.shortBulletsEn[0] ? spot.shortBulletsEn[0] : spot.ratingDescEn
  };

  items.splice(insertAt, 0, newItem);
  activeTimelineSelection = { dayKey: targetDayKey, index: insertAt };

  saveState();
  renderAll();
  focusSpotOnMap(spot.id, true);
  showToast(`➕ แทรก "${spot.nameTh}" ลงใน ${timelineState[targetDayKey].labelTh} คิวที่ #${insertAt + 1} แล้ว!`);
}

function cascadeTimesFromIndex(startIndex, dayKey = currentDayKey) {
  const items = timelineState[dayKey].items;
  for (let i = startIndex + 1; i < items.length; i++) {
    if (items[i].isFlightStep) continue;
    const prev = items[i - 1];
    const prevEndMins = timeToMinutes(prev.time) + Number(prev.duration || 60) + 15;
    const currStartMins = timeToMinutes(items[i].time);
    if (currStartMins < prevEndMins) {
      items[i].time = minutesToTime(prevEndMins);
      const endMins = prevEndMins + Number(items[i].duration || 60);
      items[i].timeLabel = `${items[i].time} - ${minutesToTime(endMins)} น.`;
    }
  }
}

function autoRecalculateDayTimes(notify = true, dayKey = currentDayKey) {
  const items = timelineState[dayKey].items;
  if (!items.length) return;
  let cursorMins = timeToMinutes(items[0].time || "09:00");
  items.forEach((item, idx) => {
    if (item.isFlightStep) {
      cursorMins = timeToMinutes(item.time) + Number(item.duration || 60) + 30;
      return;
    }
    if (idx > 0) {
      item.time = minutesToTime(cursorMins);
    }
    const endMins = cursorMins + Number(item.duration || 60);
    item.timeLabel = `${item.time} - ${minutesToTime(endMins)} น.`;
    cursorMins = endMins + 15;
  });
  saveState();
  renderAll();
  if (notify) showToast("⏱️ จัดเรียงเวลาต่อเนื่องอัตโนมัติเรียบร้อยแล้ว!");
}

function moveTimelineItem(fromIdx, toIdx, dayKey = currentDayKey) {
  const items = timelineState[dayKey].items;
  if (toIdx < 0 || toIdx >= items.length) return;
  const [moved] = items.splice(fromIdx, 1);
  items.splice(toIdx, 0, moved);
  saveState();
  renderAll();
  showToast(`เลื่อนคิวไปที่ลำดับ #${toIdx + 1} แล้ว`);
}

function removeTimelineItem(index, dayKey = currentDayKey) {
  const items = timelineState[dayKey].items;
  const removed = items.splice(index, 1)[0];
  saveState();
  renderAll();
  const spot = removed ? getSpotById(removed.spotId) : null;
  showToast(`🗑️ ลบ "${removed?.customNameTh || (spot ? spot.nameTh : "รายการ")}" ออกจาก Timeline แล้ว`);
}

function updateInsertPositionDropdown() {
  const select = document.getElementById("selectInsertIndex");
  if (!select) return;
  const currentVal = select.value;
  const items = timelineState[currentDayKey]?.items || [];

  let html = `<option value="end">ต่อท้ายคิว (#${items.length + 1} End)</option>`;
  html += `<option value="0">แทรกคิวแรก (#1 Top)</option>`;
  items.forEach((it, idx) => {
    if (idx > 0) {
      const sp = getSpotById(it.spotId);
      const shortName = (it.customNameEn || sp?.nameEn || `Stop ${idx + 1}`).slice(0, 18);
      html += `<option value="${idx}">แทรกคิวที่ #${idx + 1} (ก่อน ${shortName})</option>`;
    }
  });
  select.innerHTML = html;
  if ([...select.options].some(o => o.value === currentVal)) {
    select.value = currentVal;
  }
}

// ============================================================================
// 5. SECTION 2: DETAIL OF COLUMN 1 (TRANSIT FROM PREV STOP, PHOTOS, INFO, LINKS)
// ============================================================================
function getFlattenedTimelineStops() {
  const flat = [];
  Object.keys(timelineState).forEach((dayKey, dayIdx) => {
    const items = timelineState[dayKey]?.items || [];
    items.forEach((item, index) => {
      flat.push({ dayKey, dayIdx, index, item });
    });
  });
  return flat;
}

function navigateTimelineSelection(delta) {
  const flat = getFlattenedTimelineStops();
  if (!flat.length) return;
  const curPos = flat.findIndex(
    x => x.dayKey === activeTimelineSelection.dayKey && x.index === activeTimelineSelection.index
  );
  const nextPos = Math.min(flat.length - 1, Math.max(0, (curPos === -1 ? 0 : curPos) + delta));
  const target = flat[nextPos];
  if (!target) return;
  currentDayKey = target.dayKey;
  activeTimelineSelection = { dayKey: target.dayKey, index: target.index };
  selectedTransitMode = "auto";
  setCol2ViewMode("detail");
  renderAll();
  focusTimelineItemOnMap(target.index, target.dayKey);
}

function zoomMapBetweenTwoCoords(coordsA, coordsB) {
  if (!map || !coordsA || !coordsB) return;
  map.closePopup();
  const ptA = getDisplayCoords(coordsA);
  const ptB = getDisplayCoords(coordsB);
  const bounds = L.latLngBounds([ptA, ptB]).pad(0.32);
  map.flyToBounds(bounds, {
    paddingTopLeft: [70, 75],
    paddingBottomRight: [70, 75],
    maxZoom: 17,
    duration: 0.85
  });
}

// Real Harbin Metro Stations & Transit Transfer Hubs (GCJ-02 Coordinates)
const HARBIN_TRANSIT_HUBS = [
  {
    id: "metro_zhongyang",
    nameEn: "Metro Line 2 · Zhongyangdajie Stn (Exit 2)",
    nameTh: "สถานีรถไฟใต้ดิน Zhongyangdajie (Line 2 ทางออก 2)",
    nameZh: "中央大街地铁站 (2号线)",
    lineTh: "รถไฟใต้ดินสาย 2 (Metro Line 2)",
    coords: [45.7689, 126.6188],
    spotIds: [2, 15, 22, 24, 25, 29]
  },
  {
    id: "metro_renmin",
    nameEn: "Metro Line 2 · People's Square Stn",
    nameTh: "สถานีรถไฟใต้ดิน People's Square (Line 2)",
    nameZh: "人民广场地铁站 (2号线)",
    lineTh: "รถไฟใต้ดินสาย 2 (Metro Line 2)",
    coords: [45.7768, 126.6162],
    spotIds: [7, 10, 14, 19, 28]
  },
  {
    id: "metro_harbin_stn",
    nameEn: "Metro Line 2 · Harbin Railway Station",
    nameTh: "สถานีรถไฟฮาร์บิน (Metro Line 2 / HSR)",
    nameZh: "哈尔滨站 (地铁2号线/高铁)",
    lineTh: "รถไฟใต้ดินสาย 2 (Metro Line 2)",
    coords: [45.7611, 126.6309],
    spotIds: [0, 1]
  },
  {
    id: "metro_bowuguan",
    nameEn: "Metro Line 1/2 · Museum Station (Bowuguan)",
    nameTh: "สถานีรถไฟใต้ดิน Bowuguan พิพิธภัณฑ์ (Line 1/2)",
    nameZh: "博物馆地铁站 (1/2号线)",
    lineTh: "รถไฟใต้ดินสาย 1/2 (Metro Line 1/2)",
    coords: [45.7576, 126.6419],
    spotIds: [13, 16, 17, 27]
  },
  {
    id: "metro_baroque",
    nameEn: "Metro Line 3 · Chinese Baroque Stn",
    nameTh: "สถานีรถไฟใต้ดิน Chinese Baroque (Line 3)",
    nameZh: "中华巴洛克街区地铁站 (3号线)",
    lineTh: "รถไฟใต้ดินสาย 3 (Metro Line 3)",
    coords: [45.7828, 126.6508],
    spotIds: [6, 8, 23]
  },
  {
    id: "metro_sun_island",
    nameEn: "Metro Line 2 · Sun Island Stn (Exit 3)",
    nameTh: "สถานีรถไฟใต้ดิน Sun Island เกาะพระอาทิตย์ (Line 2)",
    nameZh: "太阳岛地铁站 (2号线)",
    lineTh: "รถไฟใต้ดินสาย 2 (Metro Line 2)",
    coords: [45.7915, 126.5986],
    spotIds: [4, 5, 9, 26]
  },
  {
    id: "metro_ice_world",
    nameEn: "Metro Line 2 · Ice & Snow World Stn",
    nameTh: "สถานีรถไฟใต้ดิน Ice & Snow World (Line 2)",
    nameZh: "冰雪大世界地铁站 (2号线)",
    lineTh: "รถไฟใต้ดินสาย 2 (Metro Line 2)",
    coords: [45.7804, 126.5652],
    spotIds: [12, 18]
  }
];

function findNearestMetroHub(spotId, coords) {
  if (spotId !== undefined && spotId !== null && spotId !== "") {
    const byId = HARBIN_TRANSIT_HUBS.find(h => h.spotIds.includes(Number(spotId)));
    if (byId) return byId;
  }
  if (!coords) return HARBIN_TRANSIT_HUBS[0];
  let best = HARBIN_TRANSIT_HUBS[0];
  let bestDist = Infinity;
  HARBIN_TRANSIT_HUBS.forEach(h => {
    const d = calcDistanceKm(coords, h.coords);
    if (d < bestDist) {
      bestDist = d;
      best = h;
    }
  });
  return best;
}

function buildMultiModalPlansForStop(prevItem, currItem, prevCoords, currCoords, prevSpot, currSpot) {
  if (!prevCoords || !currCoords) return null;

  const distKm = calcDistanceKm(prevCoords, currCoords);
  const walkMins = Math.max(4, Math.round((distKm / 4.2) * 60));
  const driveMins = Math.max(8, Math.round((distKm / 30) * 60 + 5));
  const estTaxiMin = Math.max(9, Math.round(9 + Math.max(0, distKm - 3) * 2.2));
  const estTaxiMax = Math.round(estTaxiMin * 1.35 + 4);

  const prevSid = prevItem?.spotId !== undefined && prevItem?.spotId !== null ? Number(prevItem.spotId) : -1;
  const currSid = currItem?.spotId !== undefined && currItem?.spotId !== null ? Number(currItem.spotId) : -1;

  // Recommended default mode when "auto" is active
  const defaultMode = distKm <= 0.85 ? "walk" : "taxi";
  const activeMode = selectedTransitMode === "auto" ? defaultMode : selectedTransitMode;

  // -------------------------------------------------------------------------
  // PLAN 1: TAXI / DIDI / PRIVATE VAN (ขับรถส่งตรงถึงจุดหมาย)
  // -------------------------------------------------------------------------
  const midTaxiPoint = [
    (prevCoords[0] + currCoords[0]) / 2 + (currCoords[1] - prevCoords[1]) * 0.08,
    (prevCoords[1] + currCoords[1]) / 2 - (currCoords[0] - prevCoords[0]) * 0.08
  ];
  const taxiPlan = {
    modeKey: "taxi",
    titleTh: distKm > 45
      ? `🚐 เหมารถตู้ / รถบัสทางไกลตรงถึงที่หมาย (~${(distKm / 65).toFixed(1)} ชม. · ${distKm.toFixed(0)} กม.)`
      : `🚕 เรียก DiDi / แท็กซี่ ส่งตรงถึงจุดหมาย (~${driveMins} นาที · ${distKm.toFixed(1)} กม.)`,
    descTh: distKm > 45
      ? `เดินทางจากจุดก่อนหน้าด้วยรถตู้เหมาล้อโซ่หิมะ วิ่งตามทางหลวงหิมะส่งถึงหน้าจุดหมายโดยตรง`
      : `เรียกผ่านแอป DiDi หรือโบกแท็กซี่จากจุดก่อนหน้า ส่งถึงหน้าจุดหมายโดยไม่ต้องเดินตากลมหนาว (ค่าโดยสารประมาณ ${estTaxiMin}–${estTaxiMax} หยวน)`,
    legs: [
      {
        type: "taxi",
        color: "#e4572e",
        dashArray: "10, 12",
        pathCoords: [prevCoords, midTaxiPoint, currCoords],
        badgeTh: distKm > 45
          ? `🚐 รถตู้/บัสทางไกล ${distKm.toFixed(0)} กม. (~${(distKm / 65).toFixed(1)} ชม.)`
          : `🚕 DiDi / แท็กซี่ ${distKm.toFixed(1)} กม. (~${driveMins} นาที · ${estTaxiMin}-${estTaxiMax}¥)`,
        stepTextTh: distKm > 45
          ? `ช่วงเดียวถึง: 🚐 นั่งรถตู้/รถบัสท่องเที่ยว ${distKm.toFixed(0)} กม. (~${(distKm / 65).toFixed(1)} ชม.) ส่งถึงจุดหมาย`
          : `ช่วงเดียวถึง: 🚕 นั่ง DiDi / แท็กซี่ ${distKm.toFixed(1)} กม. (~${driveMins} นาที) ส่งถึงหน้าจุดหมาย`
      }
    ],
    transferHubs: []
  };

  // -------------------------------------------------------------------------
  // PLAN 2: RAIL / METRO / AIRPORT BUS + WALK TO DESTINATION (รถไฟ/รถบัส + เดินเท้าถึงจุดหมาย)
  // -------------------------------------------------------------------------
  let railWalkPlan = null;

  if (prevSid === 11 || currSid === 11) {
    // Airport Bus Line 3 + Walk to/from Zhongyang Street
    const busStopCoords = [45.7672, 126.6175];
    const walkToDestMeters = Math.max(120, Math.round(calcDistanceKm(busStopCoords, prevSid === 11 ? currCoords : prevCoords) * 1000));
    const walkToDestMins = Math.max(3, Math.round(walkToDestMeters / 70));

    if (prevSid === 11) {
      railWalkPlan = {
        modeKey: "rail_walk",
        titleTh: `🚌 รถบัสสนามบิน (Airport Bus สาย 3) + 🚶 เดินเท้าเข้าที่พัก (~50 นาที · 20 หยวน)`,
        descTh: `ประหยัดและสะดวก: นั่ง Airport Bus สาย 3 จากสนามบิน HRB T2 มาลงป้ายถนนจงหยาง (Jingwei St.) แล้วเดินเท้าต่อเข้าที่พัก`,
        legs: [
          {
            type: "bus",
            color: "#7c3aed",
            dashArray: null,
            pathCoords: [prevCoords, [45.6950, 126.4400], busStopCoords],
            badgeTh: `🚌 ช่วงที่ 1: Airport Bus สาย 3 (~45 นาที · 20¥)`,
            stepTextTh: `ช่วงที่ 1 (รถบัส): 🚌 นั่ง Airport Shuttle Bus สาย 3 จากสนามบิน HRB T2 ➔ ลงป้ายถนนจงหยาง (中央大街经纬街站)`
          },
          {
            type: "walk",
            color: "#10b981",
            dashArray: "5, 8",
            pathCoords: [busStopCoords, currCoords],
            badgeTh: `🚶 ช่วงที่ 2: เดินเท้า ${walkToDestMeters} ม. (~${walkToDestMins} นาที)`,
            stepTextTh: `ช่วงที่ 2 (เดินเท้า): 🚶 เดินจากป้ายรถบัสสนามบิน ${walkToDestMeters} เมตร (~${walkToDestMins} นาที) ➔ ถึงจุดหมาย`
          }
        ],
        transferHubs: [
          {
            coords: busStopCoords,
            label: `🚏 จุดลง Airport Bus สาย 3 ➔ เดินต่อ ${walkToDestMeters} ม.`
          }
        ]
      };
    } else {
      railWalkPlan = {
        modeKey: "rail_walk",
        titleTh: `🚶 เดินไปจุดขึ้นรถ + 🚌 Airport Bus สาย 3 สู่สนามบิน (~50 นาที · 20 หยวน)`,
        descTh: `เดินจากจุดเริ่มต้นไปขึ้นรถบัสสนามบินที่ถนนจงหยาง ตรงสู่ท่าอากาศยานฮาร์บิน T2`,
        legs: [
          {
            type: "walk",
            color: "#10b981",
            dashArray: "5, 8",
            pathCoords: [prevCoords, busStopCoords],
            badgeTh: `🚶 ช่วงที่ 1: เดินไปป้ายรถบัส ${walkToDestMeters} ม.`,
            stepTextTh: `ช่วงที่ 1 (เดินเท้า): 🚶 เดินไปป้าย Airport Bus ถนนจงหยาง (${walkToDestMeters} ม. · ~${walkToDestMins} นาที)`
          },
          {
            type: "bus",
            color: "#7c3aed",
            dashArray: null,
            pathCoords: [busStopCoords, [45.6950, 126.4400], currCoords],
            badgeTh: `🚌 ช่วงที่ 2: Airport Bus สู่สนามบิน HRB T2 (~45 นาที)`,
            stepTextTh: `ช่วงที่ 2 (รถบัส): 🚌 นั่ง Airport Bus ยาวถึงหน้าอาคารผู้โดยสารสนามบินฮาร์บิน T2`
          }
        ],
        transferHubs: [
          {
            coords: busStopCoords,
            label: `🚏 จุดขึ้น Airport Bus ไปสนามบิน`
          }
        ]
      };
    }
  } else if (distKm > 45) {
    // High-Speed Rail (Harbin Station <-> Yabuli West) + Highway Bus + Walk in Snow Town
    const yabuliWestCoords = [44.9100, 128.5868];
    const snowTownGateCoords = [44.3345, 128.2093];
    const goingToSnow = currCoords[0] < 45.0;

    if (goingToSnow) {
      railWalkPlan = {
        modeKey: "rail_walk",
        titleTh: `🚅 รถไฟความเร็วสูง (HSR) + 🚌 รถบัสหิมะ + 🚶 เดินเข้าที่พัก (~3 ชม.)`,
        descTh: `นั่งรถไฟหัวกระสุนจากสถานีฮาร์บิน (哈尔滨站) ไปลงสถานี Yabuli West (亚布力西站) ต่อรถบัสอุทยาน และเดินเข้าถนนเสวี่ยยวิ่น`,
        legs: [
          {
            type: "rail",
            color: "#7c3aed",
            dashArray: null,
            pathCoords: [prevCoords, [45.3200, 127.4500], yabuliWestCoords],
            badgeTh: `🚅 ช่วงที่ 1: รถไฟความเร็วสูง HSR ➔ สถานี Yabuli West (~1.2 ชม.)`,
            stepTextTh: `ช่วงที่ 1 (รถไฟ HSR): 🚅 นั่งรถไฟความเร็วสูงจากสถานีฮาร์บิน ➔ ลงสถานี Yabuli West (亚布力西站 · ~75 หยวน)`
          },
          {
            type: "bus",
            color: "#0891b2",
            dashArray: "8, 6",
            pathCoords: [yabuliWestCoords, [44.5800, 128.3400], snowTownGateCoords],
            badgeTh: `🚌 ช่วงที่ 2: รถบัสถนนสายหิมะ Yaxue (~1.5 ชม.)`,
            stepTextTh: `ช่วงที่ 2 (รถบัสหิมะ): 🚌 ต่อรถชัทเทิลบัสจากหน้าสถานี Yabuli West วิ่งผ่านถนนสายหิมะ ➔ ด่านหมู่บ้านหิมะ Snow Town`
          },
          {
            type: "walk",
            color: "#10b981",
            dashArray: "4, 7",
            pathCoords: [snowTownGateCoords, currCoords],
            badgeTh: `🚶 ช่วงที่ 3: เดินเท้าเข้าหมู่บ้านหิมะ ~350 ม. (5 นาที)`,
            stepTextTh: `ช่วงที่ 3 (เดินเท้า): 🚶 เดินเท้าจากจุดจอดรถอุทยานเข้าสู่ถนนคนเดินเสวี่ยยวิ่นและที่พัก (~350 ม.)`
          }
        ],
        transferHubs: [
          {
            coords: yabuliWestCoords,
            label: `🚅 สถานีรถไฟความเร็วสูง Yabuli West (ต่อรถบัสหิมะ)`
          },
          {
            coords: snowTownGateCoords,
            label: `🚏 จุดจอดรถอุทยาน Snow Town ➔ 🚶 เดินเข้าหมู่บ้าน`
          }
        ]
      };
    } else {
      const harbinStnCoords = [45.76354, 126.64327];
      railWalkPlan = {
        modeKey: "rail_walk",
        titleTh: `🚌 รถบัสหิมะ + 🚅 รถไฟความเร็วสูงกลับฮาร์บิน + 🚶 เดินเข้าจุดหมาย`,
        descTh: `นั่งรถบัสจากหมู่บ้านหิมะมาขึ้นรถไฟความเร็วสูงที่สถานี Yabuli West กลับสู่สถานีรถไฟฮาร์บิน แล้วต่อเข้าจุดหมาย`,
        legs: [
          {
            type: "bus",
            color: "#0891b2",
            dashArray: "8, 6",
            pathCoords: [prevCoords, yabuliWestCoords],
            badgeTh: `🚌 ช่วงที่ 1: รถบัส Snow Town ➔ สถานี Yabuli West (~1.5 ชม.)`,
            stepTextTh: `ช่วงที่ 1 (รถบัส): 🚌 นั่งรถบัสจากหมู่บ้านหิมะ Snow Town ➔ สถานีรถไฟความเร็วสูง Yabuli West`
          },
          {
            type: "rail",
            color: "#7c3aed",
            dashArray: null,
            pathCoords: [yabuliWestCoords, [45.3200, 127.4500], harbinStnCoords],
            badgeTh: `🚅 ช่วงที่ 2: รถไฟความเร็วสูง HSR ➔ สถานีฮาร์บิน (~1.2 ชม.)`,
            stepTextTh: `ช่วงที่ 2 (รถไฟ HSR): 🚅 นั่งรถไฟความเร็วสูงกลับถึงสถานีรถไฟฮาร์บิน (哈尔滨站)`
          },
          {
            type: "walk",
            color: "#10b981",
            dashArray: "4, 7",
            pathCoords: [harbinStnCoords, currCoords],
            badgeTh: `🚇/🚶 ช่วงที่ 3: จากสถานีฮาร์บินเข้าสู่จุดหมาย`,
            stepTextTh: `ช่วงที่ 3 (เข้าจุดหมาย): 🚇 ต่อรถไฟใต้ดิน/เดินเท้าจากสถานีฮาร์บินเข้าสู่จุดหมาย`
          }
        ],
        transferHubs: [
          {
            coords: yabuliWestCoords,
            label: `🚅 สถานี Yabuli West (ขึ้นรถไฟ HSR กลับฮาร์บิน)`
          },
          {
            coords: harbinStnCoords,
            label: `🚅 สถานีรถไฟฮาร์บิน (哈尔滨站)`
          }
        ]
      };
    }
  } else {
    // Urban Harbin Metro + Walking Leg to Destination
    const originHub = findNearestMetroHub(prevSid, prevCoords);
    const destHub = findNearestMetroHub(currSid, currCoords);
    const walkFromStnMeters = Math.max(90, Math.round(calcDistanceKm(destHub.coords, currCoords) * 1000));
    const walkFromStnMins = Math.max(2, Math.round(walkFromStnMeters / 70));

    if (originHub.id !== destHub.id) {
      const walkToOriginMeters = Math.max(80, Math.round(calcDistanceKm(prevCoords, originHub.coords) * 1000));
      const walkToOriginMins = Math.max(2, Math.round(walkToOriginMeters / 70));
      railWalkPlan = {
        modeKey: "rail_walk",
        titleTh: `🚇 รถไฟใต้ดิน (${destHub.lineTh}) + 🚶 เดินเท้าถึงจุดหมาย`,
        descTh: currSpot?.transportTh?.fromStation || `เดินไปขึ้นรถไฟใต้ดินที่ ${originHub.nameTh} นั่งไปลง ${destHub.nameTh} แล้วเดินเท้าต่ออีก ${walkFromStnMeters} ม.`,
        legs: [
          {
            type: "walk",
            color: "#10b981",
            dashArray: "4, 7",
            pathCoords: [prevCoords, originHub.coords],
            badgeTh: `🚶 ช่วงที่ 1: เดินไปสถานี ${walkToOriginMeters} ม. (~${walkToOriginMins} นาที)`,
            stepTextTh: `ช่วงที่ 1 (เดินไปสถานี): 🚶 เดินเท้า ${walkToOriginMeters} ม. (~${walkToOriginMins} นาที) ไปขึ้นรถไฟใต้ดินที่ ${originHub.nameTh}`
          },
          {
            type: "rail",
            color: "#7c3aed",
            dashArray: null,
            pathCoords: [originHub.coords, destHub.coords],
            badgeTh: `🚇 ช่วงที่ 2: นั่ง ${destHub.lineTh} ➔ ลงสถานี ${destHub.nameZh.split(" ")[0]}`,
            stepTextTh: `ช่วงที่ 2 (รถไฟใต้ดิน): 🚇 นั่งรถไฟใต้ดินจาก ${originHub.nameZh.split(" ")[0]} ➔ ลงที่ ${destHub.nameTh} (ค่าโดยสาร ~2-4 หยวน)`
          },
          {
            type: "walk",
            color: "#10b981",
            dashArray: "4, 7",
            pathCoords: [destHub.coords, currCoords],
            badgeTh: `🚶 ช่วงที่ 3: เดินจากสถานี ${walkFromStnMeters} ม. (~${walkFromStnMins} นาที) ถึงจุดหมาย`,
            stepTextTh: `ช่วงที่ 3 (เดินเข้าจุดหมาย): 🚶 ออกจากสถานีเดินเท้าต่ออีก ${walkFromStnMeters} ม. (~${walkFromStnMins} นาที) ถึงจุดหมาย`
          }
        ],
        transferHubs: [
          {
            coords: originHub.coords,
            label: `🚇 ขึ้นรถไฟใต้ดิน: ${originHub.nameZh.split(" ")[0]}`
          },
          {
            coords: destHub.coords,
            label: `🚇 ลงสถานี ${destHub.nameZh.split(" ")[0]} ➔ 🚶 เดินต่อ ${walkFromStnMeters} ม.`
          }
        ]
      };
    } else {
      // Same Metro station area (e.g. both stops in Zhongyang Street / Daoli area)
      railWalkPlan = {
        modeKey: "rail_walk",
        titleTh: `🚇 สถานีรถไฟใต้ดินใกล้เคียง (${destHub.nameZh.split(" ")[0]}) + 🚶 เดินเท้าถึงจุดหมาย`,
        descTh: currSpot?.transportTh?.fromStation || `อยู่ในโซนเดียวกับ ${destHub.nameTh} สามารถเดินเชื่อมถึงจุดหมายได้เลย (${walkFromStnMeters} ม.)`,
        legs: [
          {
            type: "rail",
            color: "#7c3aed",
            dashArray: null,
            pathCoords: [prevCoords, destHub.coords],
            badgeTh: `🚇 จุดเชื่อมต่อ ${destHub.nameZh.split(" ")[0]}`,
            stepTextTh: `ช่วงที่ 1 (จุดอ้างอิงสถานี): 🚇 สถานีหลักประจำย่านคือ ${destHub.nameTh} (${destHub.nameZh})`
          },
          {
            type: "walk",
            color: "#10b981",
            dashArray: "4, 7",
            pathCoords: [destHub.coords, currCoords],
            badgeTh: `🚶 เดินจากสถานี ${walkFromStnMeters} ม. (~${walkFromStnMins} นาที) ถึงจุดหมาย`,
            stepTextTh: `ช่วงที่ 2 (เดินเท้าเข้าจุดหมาย): 🚶 เดินเท้าจากสถานี/ถนนสายหลัก ${walkFromStnMeters} ม. (~${walkFromStnMins} นาที) ถึงจุดหมาย`
          }
        ],
        transferHubs: [
          {
            coords: destHub.coords,
            label: `🚇 ${destHub.nameZh.split(" ")[0]} ➔ 🚶 เดิน ${walkFromStnMeters} ม.`
          }
        ]
      };
    }
  }

  // -------------------------------------------------------------------------
  // PLAN 3: WALKING ROUTE & INSIDE AREA EXPLORATION (เดินเท้าชมเมือง / เดินภายในพื้นที่)
  // -------------------------------------------------------------------------
  const walkMeters = Math.max(60, Math.round(distKm * 1000));
  const estSteps = Math.max(90, Math.round(walkMeters * 1.35));
  const midWalkCorner = [
    prevCoords[0] + (currCoords[0] - prevCoords[0]) * 0.52,
    prevCoords[1] + (currCoords[1] - prevCoords[1]) * 0.48
  ];
  const walkPlan = {
    modeKey: "walk",
    titleTh: distKm <= 2.5
      ? `🚶 เดินเท้าชมเมืองตามทางเท้า (${distKm < 1 ? `${walkMeters} เมตร` : `${distKm.toFixed(1)} กม.`} · ~${walkMins} นาที)`
      : `🚶 การเดินชมภายในพื้นที่ & เส้นทางเดินเท้า (~${estSteps.toLocaleString()} ก้าว)`,
    descTh: currSpot?.transportTh?.inside || `เดินเท้าชมบรรยากาศเมืองหนาวจากจุดก่อนหน้ามายังจุดหมาย (${distKm < 1 ? `ระยะทางเพียง ${walkMeters} ม.` : `ระยะทาง ${distKm.toFixed(1)} กม.`})`,
    legs: [
      {
        type: "walk",
        color: "#10b981",
        dashArray: "5, 8",
        pathCoords: [prevCoords, midWalkCorner, currCoords],
        badgeTh: `🚶 เดินเท้า ${distKm < 1 ? `${walkMeters} ม.` : `${distKm.toFixed(1)} กม.`} (~${walkMins} นาที · ~${estSteps.toLocaleString()} ก้าว)`,
        stepTextTh: `เส้นทางเดินเท้า: 🚶 เดินจากจุดก่อนหน้า ${distKm < 1 ? `${walkMeters} เมตร` : `${distKm.toFixed(1)} กม.`} (ใช้เวลา ~${walkMins} นาที · ประมาณ ${estSteps.toLocaleString()} ก้าว) ถึงจุดหมาย`
      }
    ],
    transferHubs: []
  };

  // Order plans so the most sensible one for this distance is first, while keeping all 3 clickable
  const plansByKey = {
    taxi: taxiPlan,
    rail_walk: railWalkPlan,
    walk: walkPlan
  };
  const orderedKeys = distKm <= 0.85
    ? ["walk", "rail_walk", "taxi"]
    : ["taxi", "rail_walk", "walk"];

  return {
    activeMode,
    defaultMode,
    plansByKey,
    orderedPlans: orderedKeys.map(k => plansByKey[k])
  };
}

function zoomMapToTransitPlan(plan) {
  if (!map || !plan || !plan.legs || !plan.legs.length) return;
  map.closePopup();
  const allPts = [];
  plan.legs.forEach(leg => {
    (leg.pathCoords || []).forEach(c => {
      if (c) allPts.push(getDisplayCoords(c));
    });
  });
  if (allPts.length >= 2) {
    const bounds = L.latLngBounds(allPts).pad(0.32);
    map.flyToBounds(bounds, {
      paddingTopLeft: [70, 75],
      paddingBottomRight: [70, 75],
      maxZoom: 17,
      duration: 0.85
    });
  }
}

function renderSelectedTimelineDetail() {
  const container = document.getElementById("col2DetailPane");
  if (!container) return;

  const allDayKeys = Object.keys(timelineState);
  const selDayKey = activeTimelineSelection.dayKey || currentDayKey || allDayKeys[0];
  const dayObj = timelineState[selDayKey];
  const items = dayObj?.items || [];
  const dayIdx = Math.max(0, allDayKeys.indexOf(selDayKey));
  const dayColor = DAY_COLORS[dayIdx % DAY_COLORS.length];

  if (!items.length) {
    container.innerHTML = `
      <div class="col2-info-card" style="text-align:center; padding:28px 14px;">
        <div style="font-size:2rem; margin-bottom:8px;">📋</div>
        <div style="font-weight:800; color:#0f172a; font-size:0.9rem;">ยังไม่มีรายการในวันที่ ${dayIdx + 1}</div>
        <p style="font-size:0.76rem; color:#64748b; margin:6px 0 14px;">คลิกเลือกรายการใน <strong>① แผนการเดินทาง</strong> ด้านซ้าย หรือกดปุ่มด้านล่างเพื่อเพิ่มสถานที่เข้าตาราง</p>
        <button type="button" class="btn-col2-mini" id="btnEmptySwitchToChooses" style="max-width:220px; margin:0 auto;">
          ➕ เปิดคลังสถานที่ (${allSpots.length} แห่ง)
        </button>
      </div>
    `;
    container.querySelector("#btnEmptySwitchToChooses")?.addEventListener("click", () => {
      setCol2ViewMode("chooses");
    });
    return;
  }

  const selIdx = Math.min(items.length - 1, Math.max(0, Number(activeTimelineSelection.index) || 0));
  const item = items[selIdx];
  const spot = getSpotById(item.spotId);
  const currCoords = item.customCoords || (spot ? spot.coords : [45.7725, 126.6208]);

  // Find Previous Item (in same day, or last stop of previous day)
  let prevItem = null;
  let prevDayLabel = "";
  if (selIdx > 0) {
    prevItem = items[selIdx - 1];
    prevDayLabel = `จุดที่ #${selIdx} (วันที่ ${dayIdx + 1})`;
  } else if (dayIdx > 0) {
    for (let d = dayIdx - 1; d >= 0; d--) {
      const pKey = allDayKeys[d];
      const pItems = timelineState[pKey]?.items || [];
      if (pItems.length > 0) {
        prevItem = pItems[pItems.length - 1];
        prevDayLabel = `จุดสุดท้ายของวันที่ ${d + 1}`;
        break;
      }
    }
  }

  const prevSpot = prevItem ? getSpotById(prevItem.spotId) : null;
  const prevCoords = prevItem
    ? (prevItem.customCoords || (prevSpot ? prevSpot.coords : null))
    : null;

  // Place Names & Metadata (Full English, Full Thai, Full Chinese)
  const nameEn = (item.customNameEn && spot?.nameEn && item.customNameEn !== spot.nameEn)
    ? (item.customNameEn.includes(spot.nameEn) ? item.customNameEn : `${item.customNameEn} (${spot.nameEn})`)
    : (spot?.nameEn || item.customNameEn || "Harbin Stop");
  const nameTh = (item.customNameTh && spot?.nameTh && item.customNameTh !== spot.nameTh)
    ? (item.customNameTh.includes(spot.nameTh) ? item.customNameTh : `${item.customNameTh} (${spot.nameTh})`)
    : (spot?.nameTh || item.customNameTh || "สถานที่ในแผนการเดินทาง");
  const nameZh = spot?.nameZh || (item.isFlightStep ? "哈尔滨太平国际机场 (Harbin Taiping Intl Airport)" : "哈尔滨景点");
  const pinyin = spot?.pinyin || "";
  const actType = item.actType || (spot ? spot.activityType : "visit") || "visit";
  const actMeta = ACTIVITY_META[actType] || ACTIVITY_META.visit;

  const prevNameEn = prevItem
    ? (prevSpot?.nameEn || prevItem.customNameEn || "")
    : "Bangkok Suvarnabhumi Airport (BKK)";
  const prevNameTh = prevItem
    ? (prevItem.customNameTh || (prevSpot ? prevSpot.nameTh : prevItem.customNameEn))
    : "จุดเริ่มต้นของทริป (สนามบินสุวรรณภูมิ BKK / ที่พัก)";
  const prevNameZh = prevItem
    ? (prevSpot?.nameZh || "")
    : "曼谷素万那普国际机场";
  const prevFullLabel = [prevNameEn, prevNameTh, prevNameZh].filter(Boolean).join(" · ");
  const currFullLabel = [nameEn, nameTh, nameZh].filter(Boolean).join(" · ");
  const prevTime = prevItem ? (prevItem.time || "08:00") : "จุดเริ่มต้น";

  // Calculate Distance & Transit Advice from Previous Stop
  const distKm = (prevCoords && currCoords) ? calcDistanceKm(prevCoords, currCoords) : 0;
  const walkMins = Math.max(4, Math.round((distKm / 4.2) * 60));
  const driveMins = Math.max(8, Math.round((distKm / 30) * 60 + 5));
  const estTaxiMin = Math.max(9, Math.round(9 + Math.max(0, distKm - 3) * 2.2));
  const estTaxiMax = Math.round(estTaxiMin * 1.35 + 4);

  let transitBadgeText = "จุดเริ่มต้น";
  let transitArrowSummary = "จุดเริ่มต้นของการเดินทาง";
  let recommendedMethodHtml = "";
  let extraSpotTransportHtml = "";

  // Ensure EVERY activity (including Flight steps & 1st item of the trip) has interactive multi-modal plans on the map
  const fallbackAirportSpot = getSpotById(11);
  const fallbackHotelSpot = getSpotById(28) || getSpotById(2);
  const effectivePrevItem = prevItem || { spotId: 11, customNameTh: "สนามบินฮาร์บิน T2", customNameEn: "Harbin Airport T2" };
  const effectiveCurrItem = item.isFlightStep
    ? (items.find(x => !x.isFlightStep) || { spotId: 28, customNameTh: "LIZZY • Ritz Hotel ถนนจงหยาง", customNameEn: "LIZZY • Ritz Hotel Central St." })
    : item;
  const effectivePrevSpot = prevSpot || fallbackAirportSpot;
  const effectiveCurrSpot = item.isFlightStep
    ? (getSpotById(effectiveCurrItem.spotId) || fallbackHotelSpot)
    : spot;
  const effectivePrevCoords = item.isFlightStep
    ? (fallbackAirportSpot ? fallbackAirportSpot.coords : [45.6262, 126.2485])
    : (prevCoords || (fallbackAirportSpot ? fallbackAirportSpot.coords : [45.6262, 126.2485]));
  const effectiveCurrCoords = item.isFlightStep
    ? (effectiveCurrItem.customCoords || (effectiveCurrSpot ? effectiveCurrSpot.coords : [45.77606, 126.62103]))
    : currCoords;

  const multiModalBundle = buildMultiModalPlansForStop(
    item.isFlightStep ? { spotId: 11 } : effectivePrevItem,
    effectiveCurrItem,
    effectivePrevCoords,
    effectiveCurrCoords,
    effectivePrevSpot,
    effectiveCurrSpot
  );

  if (multiModalBundle) {
    const effDistKm = calcDistanceKm(effectivePrevCoords, effectiveCurrCoords);
    transitBadgeText = item.isFlightStep ? `✈️ เที่ยวบิน + เข้าเมือง ${effDistKm.toFixed(1)} กม.` : `${effDistKm.toFixed(1)} กม.`;
    const activeModeKey = multiModalBundle.activeMode;

    if (item.isFlightStep) {
      transitArrowSummary = `⬇ เที่ยวบินตามตาราง (Trip.com Booking: Confirmed ✅) + คลิกเลือกวิธีเดินทางจากสนามบินฮาร์บิน T2 เข้าที่พักด้านล่าง`;
    } else if (effDistKm <= 0.45) {
      const meters = Math.max(50, Math.round(effDistKm * 1000));
      transitArrowSummary = `⬇ ห่างกันเพียง ~${meters} เมตร (คลิกเลือกวิธีเดินทางด้านล่างเพื่อแสดงเส้นทางแยกช่วงบนแผนที่)`;
    } else if (effDistKm <= 45) {
      transitArrowSummary = `⬇ ระยะทาง ~${effDistKm.toFixed(1)} กม. (คลิกที่กล่องวิธีเดินทางด้านล่าง เพื่อดูเส้นทาง รถไฟ/รถบัส + เดินเท้า บนแผนที่)`;
    } else {
      const hours = (effDistKm / 65).toFixed(1);
      transitArrowSummary = `⬇ เส้นทางระหว่างเมือง ~${effDistKm.toFixed(0)} กม. (~${hours} ชม. · คลิกเลือกวิธีเดินทางเพื่อดูจุดต่อรถไฟ/รถบัสบนแผนที่)`;
    }

    const flightNoteBanner = item.isFlightStep ? `
      <div class="col2-method-row recommended" style="margin-bottom:6px;">
        <strong>✈️ ขั้นตอนเที่ยวบิน &amp; ต่อเครื่อง:</strong><br>
        ${item.noteTh || "เช็คอินล่วงหน้าอย่างน้อย 2.5 - 3 ชั่วโมง ตรวจสอบสัมภาระและอาคารผู้โดยสารตามใบจอง"}
      </div>
    ` : "";

    const orderedPlans = (multiModalBundle.orderedPlans || []).filter(Boolean);

    recommendedMethodHtml = flightNoteBanner + orderedPlans.map(plan => {
      const isSelected = plan.modeKey === activeModeKey;
      const isDefaultRec = plan.modeKey === multiModalBundle.defaultMode;
      const legsHtml = (plan.legs || []).map(leg => {
        const legTypeClass = leg.type === "rail" ? "leg-rail" : leg.type === "bus" ? "leg-bus" : leg.type === "walk" ? "leg-walk" : "leg-taxi";
        return `
          <div class="method-leg-step ${legTypeClass}">
            ${leg.stepTextTh || leg.badgeTh || ""}
          </div>
        `;
      }).join("");

      return `
        <div class="col2-method-row clickable-method ${isDefaultRec ? "recommended" : ""} ${isSelected ? "active-mode-selected" : ""}"
             data-transit-mode="${plan.modeKey}"
             title="คลิกเพื่อแสดงเส้นทาง ${plan.titleTh} แยกตามขั้นตอนบนแผนที่ AMAP">
          <div class="col2-method-header-line">
            <strong>${isDefaultRec ? "⭐ แนะนำ: " : ""}${plan.titleTh}</strong>
            <span class="method-click-pill">${isSelected ? "✓ แสดงบนแผนที่อยู่" : "🗺️ คลิกดูบนแผนที่"}</span>
          </div>
          <div>${plan.descTh || ""}</div>
          <div class="method-legs-breakdown">
            ${legsHtml}
          </div>
        </div>
      `;
    }).join("");

    if (spot?.transportTh?.inside) {
      extraSpotTransportHtml = `
        <div class="col2-method-row" style="background:#fffbeb; border-color:#fde68a;">
          <strong>💡 การเดินชมภายในพื้นที่:</strong> ${spot.transportTh.inside}
        </div>
      `;
    }
  }

  // Image Source (Flight ticket image for flight steps, or Spot image with fallback)
  const heroImgSrc = item.isFlightStep
    ? "1/S__27820034.jpg"
    : (spot?.image || SPOT_LOCAL_IMGS[spot?.id] || "assets/places/harbin_01_saint_sophia.jpg");
  const fallbackHeroImg = item.isFlightStep
    ? "1/S__27820034.jpg"
    : (SPOT_LOCAL_IMGS[spot?.id] || heroImgSrc);

  // Build Highlights List
  const bullets = [
    ...(spot?.highlightsTh || []),
    ...(spot?.shortBulletsTh || [])
  ];
  const uniqueBullets = [...new Set(bullets)].slice(0, 5);

  // Build Search Queries & Deep Links
  const qGoogleTh = encodeURIComponent(`${nameTh} ${nameZh.split(" ")[0]} ฮาร์บิน รีวิว การเดินทาง`);
  const qGoogleImg = encodeURIComponent(`${nameZh} ${nameEn} Harbin winter`);
  const qXhs = encodeURIComponent(`${nameZh.split(" ")[0]} 哈尔滨`);
  const qYoutube = encodeURIComponent(`เที่ยวฮาร์บิน ${nameTh} ${nameEn}`);
  const qPantip = encodeURIComponent(`${nameTh} ฮาร์บิน site:pantip.com OR site:readme.me OR site:trip.com`);
  const amapUrl = `https://uri.amap.com/marker?position=${currCoords[1].toFixed(4)},${currCoords[0].toFixed(4)}&name=${encodeURIComponent(nameZh || nameEn)}`;
  const localMdFile = spot && SPOT_MD_FILES[spot.id] ? SPOT_MD_FILES[spot.id] : null;

  // Check flat position for Prev/Next buttons
  const flatStops = getFlattenedTimelineStops();
  const flatPos = flatStops.findIndex(x => x.dayKey === selDayKey && x.index === selIdx);
  const hasPrevStop = flatPos > 0;
  const hasNextStop = flatPos >= 0 && flatPos < flatStops.length - 1;
  const weatherInfo = getWeatherForSelection(selDayKey, item);

  container.innerHTML = `
    <!-- Top Stepper Bar: Shows active Day & Stop # in Column 1 -->
    <div class="col2-stepper-bar">
      <div class="col2-stepper-pos">
        <i style="background:${dayColor}"></i>
        <span>วันที่ ${dayIdx + 1} · คิวที่ #${selIdx + 1}/${items.length}</span>
      </div>
      <div class="col2-stepper-btns">
        <button type="button" class="btn-col2-step" id="btnCol2PrevStop" ${!hasPrevStop ? "disabled" : ""} title="ดูรายละเอียดจุดก่อนหน้า">
          ◀ ก่อนหน้า
        </button>
        <button type="button" class="btn-col2-step" id="btnCol2NextStop" ${!hasNextStop ? "disabled" : ""} title="ดูรายละเอียดจุดถัดไป">
          ถัดไป ▶
        </button>
      </div>
    </div>

    <!-- SELECTED PLACE FULL NAME HEADER CARD (แสดงชื่อเต็ม: 1. อังกฤษ 2. ไทย 3. จีน ทันทีที่เลือกสถานที่) -->
    <div class="col2-selected-title-card">
      <div class="col2-sel-top-meta">
        <span class="col2-sel-time-badge">🕒 ${item.time || "09:00"} น. (~${item.duration || 60} นาที)</span>
        <span class="col2-sel-cat-badge">${actMeta.icon} ${spot?.categoryLabelEn || actMeta.labelEn} · ${spot?.categoryLabelTh || actMeta.labelTh}</span>
      </div>
      <div class="col2-sel-lang-row">
        <span class="lang-tag en">EN</span>
        <div class="lang-val en-val">${nameEn}</div>
      </div>
      <div class="col2-sel-lang-row">
        <span class="lang-tag th">TH</span>
        <div class="lang-val th-val">${nameTh}</div>
      </div>
      <div class="col2-sel-lang-row">
        <span class="lang-tag zh">中文</span>
        <div class="lang-val zh-val">${nameZh} ${pinyin ? `<span class="pinyin-sub">(${pinyin})</span>` : ""}</div>
      </div>
    </div>

    <!-- 1. TRANSIT FROM PREVIOUS STOP (วิธีการเดินทางจากจุดก่อนหน้า) -->
    <div class="col2-transit-card">
      <div class="col2-section-header">
        <span class="col2-section-title">🧭 วิธีเดินทางจากจุดก่อนหน้า</span>
        <span class="col2-dist-pill">${transitBadgeText}</span>
      </div>

      <div class="col2-route-flow">
        <div class="col2-route-point">
          <span class="col2-route-badge from">จาก ${prevTime}</span>
          <span class="col2-route-name">${prevFullLabel}</span>
        </div>
        <div class="col2-route-arrow">${transitArrowSummary}</div>
        <div class="col2-route-point">
          <span class="col2-route-badge to">ถึง ${item.time || "09:00"}</span>
          <span class="col2-route-name">${currFullLabel}</span>
        </div>
      </div>

      <div class="col2-transit-methods">
        ${recommendedMethodHtml}
        ${extraSpotTransportHtml}
      </div>

      <div class="col2-taxi-card">
        <div class="col2-taxi-text">
          <span>🚕 ป้ายภาษาจีน &amp; อังกฤษเต็ม สำหรับคนขับแท็กซี่ / แอป DiDi:</span>
          <b>请带我去：${nameZh}</b>
          <div style="color:#bae6fd; font-size:0.74rem; font-weight:600; margin-top:2px;">EN: ${nameEn}</div>
          ${pinyin ? `<small style="color:#94a3b8;">Pinyin: ${pinyin}</small>` : ""}
        </div>
      </div>

      <div class="col2-transit-actions">
        <button type="button" class="btn-col2-mini" id="btnCol2CopyZh">
          📋 คัดลอกชื่อจีน-อังกฤษเต็ม
        </button>
        ${prevCoords ? `
          <button type="button" class="btn-col2-mini" id="btnCol2ZoomSegment">
            🗺️ ซูมเส้นทางคู่นี้บนแผนที่
          </button>
        ` : ""}
        ${item.isFlightStep ? `
          <button type="button" class="btn-col2-mini" id="btnCol2OpenFlightModal">
            ✈️ ดูรูปตั๋วบินเต็มจอ
          </button>
        ` : ""}
      </div>
    </div>

    <!-- 2. PHOTO & CORE PLACE INFO (รูปภาพและข้อมูลหลัก) -->
    <div class="col2-hero-card">
      <div class="col2-hero-img-wrap" id="col2HeroImgWrap" title="คลิกเพื่อดูรูปขนาดใหญ่">
        <img src="${heroImgSrc}" alt="${nameEn} - ${nameTh}" onerror="this.onerror=null; this.src='${fallbackHeroImg}';">
        <div class="col2-hero-badges">
          <span class="col2-hero-pill time">🕒 ${item.time || "09:00"} น. (~${item.duration || 60} นาที)</span>
          <span class="col2-hero-pill">${actMeta.icon} ${spot?.categoryLabelTh || actMeta.labelTh}</span>
        </div>
      </div>
      <div class="col2-hero-body">
        <div class="col2-title-zh">${nameEn}</div>
        <div class="col2-title-th">${nameTh}</div>
        <div class="col2-title-en" style="font-size:0.84rem; font-weight:700; color:#0f172a; margin-top:3px;">🇨🇳 ${nameZh} ${pinyin ? `<span style="color:#64748b; font-weight:500;">(${pinyin})</span>` : ""} ${spot?.rating ? `· ⭐ ${spot.rating}` : ""}</div>

        ${(item.noteTh || item.noteEn) ? `
          <div class="col2-note-callout">
            <strong>📝 บันทึกในตาราง:</strong> ${item.noteTh || item.noteEn}
          </div>
        ` : ""}

        <div class="col2-transit-actions" style="margin-top:10px;">
          <button type="button" class="btn-col2-mini" id="btnCol2FocusPin">
            📍 ซูมหมุดบนแผนที่ AMAP
          </button>
          <button type="button" class="btn-col2-mini" id="btnCol2EditItem">
            ✎ แก้ไขเวลา / บันทึกโน้ต
          </button>
        </div>
      </div>
    </div>

    <!-- 3. COMPREHENSIVE DETAILS (รายละเอียดสถานที่ เวลาเปิด-ปิด ค่าเข้าชม ไฮไลท์) -->
    <div class="col2-info-card">
      <div class="col2-section-header">
        <span class="col2-section-title" style="color:#0f172a;">📌 รายละเอียด &amp; ข้อมูลสำคัญ</span>
      </div>

      <div class="col2-info-grid">
        <div class="col2-info-box">
          <span class="lbl">🕒 เวลาเปิด-ปิด</span>
          <span class="val">${spot?.openingHoursTh || spot?.openingHoursEn || "เช็คตามเวลาท้องถิ่น"}</span>
        </div>
        <div class="col2-info-box">
          <span class="lbl">🎫 ค่าเข้าชม / ค่าใช้จ่าย</span>
          <span class="val">${spot?.ticketPriceTh || spot?.ticketPriceEn || "ไม่มีค่าเข้าชม / ตามสั่ง"}</span>
        </div>
        <div class="col2-info-box">
          <span class="lbl">✨ ช่วงเวลาแนะนำ</span>
          <span class="val">${spot?.bestTimeTh || spot?.bestTimeEn || "เที่ยวได้ตลอดวัน"}</span>
        </div>
        <div class="col2-info-box">
          <span class="lbl">📍 พิกัด AMAP (GCJ-02)</span>
          <span class="val">${currCoords[0].toFixed(4)}, ${currCoords[1].toFixed(4)}</span>
        </div>
        <a href="${weatherInfo.sourceUrl}" target="_blank" rel="noopener noreferrer" class="col2-info-box" style="grid-column: 1 / -1; text-decoration:none; background:linear-gradient(90deg,#eff6ff,#e0f2fe); border-color:#7dd3fc; display:flex; align-items:center; justify-content:space-between; gap:8px;" title="คลิกเพื่อเปิดเว็บไซต์พยากรณ์อากาศแหล่งที่มา (${weatherInfo.sourceName})">
          <div>
            <span class="lbl" style="color:#0369a1;">❄️ อุณหภูมิ ณ วันที่ ${weatherInfo.dayNumber} (${weatherInfo.dateTh}) · เวลา ${weatherInfo.timeStr} น.</span>
            <span class="val" style="color:#0c4a6e; font-size:0.82rem;">🌡️ <strong>${weatherInfo.tempC}°C</strong> (รู้สึกจริง ${weatherInfo.feelsLikeC}°C · ช่วงวัน ${weatherInfo.lowC}°C ~ ${weatherInfo.highC}°C · ${weatherInfo.condTh})</span>
          </div>
          <span style="background:#0284c7; color:#ffffff; font-size:0.68rem; font-weight:800; padding:4px 8px; border-radius:6px; white-space:nowrap;">ดูเว็บพยากรณ์ ↗</span>
        </a>
      </div>

      ${(spot?.descriptionTh || spot?.ratingDescTh) ? `
        <div class="col2-desc-text">
          ${spot.descriptionTh || spot.ratingDescTh}
        </div>
      ` : ""}

      ${uniqueBullets.length > 0 ? `
        <div style="font-size:0.74rem; font-weight:800; color:#0369a1; margin-bottom:5px;">✨ ไฮไลท์ &amp; สิ่งที่ห้ามพลาด:</div>
        <ul class="col2-hl-list">
          ${uniqueBullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      ` : ""}
    </div>

    <!-- 4. SEARCH & EXTERNAL LINKS (ลิงก์สำหรับ Search หาข้อมูลเพิ่ม) -->
    <div class="col2-links-card">
      <div class="col2-section-header">
        <span class="col2-section-title" style="color:#0369a1;">🔗 ลิงก์สำหรับ Search หาข้อมูลเพิ่ม</span>
      </div>
      <div style="font-size:0.72rem; color:#64748b;">คลิกเพื่อค้นหารีวิวล่าสุด รูปภาพ คลิปวิดีโอ และแผนที่นำทางของ <strong>${nameTh}</strong>:</div>

      <div class="col2-links-grid">
        <a href="https://www.google.com/search?q=${qGoogleTh}" target="_blank" rel="noopener" class="col2-search-link google">
          <span>🔍</span> Google ค้นหารีวิวไทย
        </a>
        <a href="https://www.google.com/search?tbm=isch&q=${qGoogleImg}" target="_blank" rel="noopener" class="col2-search-link images">
          <span>🖼️</span> Google ดูรูปสถานที่จริง
        </a>
        <a href="https://www.xiaohongshu.com/search_result?keyword=${qXhs}" target="_blank" rel="noopener" class="col2-search-link xhs">
          <span>📕</span> Xiaohongshu (小红书)
        </a>
        <a href="https://www.youtube.com/results?search_query=${qYoutube}" target="_blank" rel="noopener" class="col2-search-link youtube">
          <span>🎬</span> YouTube คลิปพาเที่ยว
        </a>
        <a href="${amapUrl}" target="_blank" rel="noopener" class="col2-search-link amap">
          <span>🗺️</span> เปิดนำทางใน AMAP จีน
        </a>
        <a href="https://www.google.com/search?q=${qPantip}" target="_blank" rel="noopener" class="col2-search-link pantip">
          <span>💬</span> รีวิว Pantip &amp; Trip.com
        </a>
        ${spot?.bookingUrl ? `
          <a href="${spot.bookingUrl}" target="_blank" rel="noopener noreferrer" class="col2-search-link local-doc full-span" style="background:linear-gradient(90deg,#2563eb,#1d4ed8); color:#ffffff; border-color:#1e40af; font-weight:800;">
            <span>🏨</span> เปิดหน้าจองโรงแรมบน Trip.com (เช็คอิน 4 ธ.ค. – เช็คเอาท์ 6 ธ.ค. 2026) ↗
          </a>
        ` : ""}
        ${localMdFile ? `
          <a href="${localMdFile}" target="_blank" class="col2-search-link local-doc full-span">
            <span>📄</span> เปิดอ่านคู่มือเจาะลึกประจำสถานที่ (${localMdFile})
          </a>
        ` : ""}
      </div>
    </div>
  `;

  // Wire up interactive buttons inside Column 2 Detail Pane
  container.querySelector("#btnCol2PrevStop")?.addEventListener("click", () => navigateTimelineSelection(-1));
  container.querySelector("#btnCol2NextStop")?.addEventListener("click", () => navigateTimelineSelection(1));

  container.querySelector("#btnCol2CopyZh")?.addEventListener("click", () => {
    const textToCopy = `${nameZh} | ${nameEn} (${nameTh})`;
    navigator.clipboard?.writeText(textToCopy);
    showToast(`📋 คัดลอกชื่อเต็ม "${textToCopy}" เรียบร้อยแล้ว`);
  });

  container.querySelector("#btnCol2ZoomSegment")?.addEventListener("click", () => {
    if (prevCoords && currCoords) {
      zoomMapBetweenTwoCoords(prevCoords, currCoords);
      showToast(`🗺️ ซูมดูเส้นทางจาก "${prevNameTh}" ➔ "${nameTh}" บนแผนที่ AMAP`);
    }
  });

  container.querySelector("#btnCol2OpenFlightModal")?.addEventListener("click", () => {
    const fm = document.getElementById("flightModalBackdrop");
    if (fm) fm.hidden = false;
  });

  container.querySelector("#col2HeroImgWrap")?.addEventListener("click", () => {
    if (item.isFlightStep) {
      const fm = document.getElementById("flightModalBackdrop");
      if (fm) fm.hidden = false;
    } else if (spot) {
      openSpotDetailModal(spot.id);
    }
  });

  container.querySelector("#btnCol2FocusPin")?.addEventListener("click", () => {
    focusTimelineItemOnMap(selIdx, selDayKey);
  });

  container.querySelector("#btnCol2EditItem")?.addEventListener("click", () => {
    openEditTimelineModal(selIdx, selDayKey);
  });

  // Wire up clickable transit method cards (แสดงแยกช่วง รถไฟ/รถบัส + เดินเท้า บนแผนที่ AMAP)
  container.querySelectorAll(".col2-method-row.clickable-method[data-transit-mode]").forEach(cardEl => {
    cardEl.addEventListener("click", () => {
      const modeKey = cardEl.dataset.transitMode;
      if (!modeKey || !multiModalBundle || !multiModalBundle.plansByKey?.[modeKey]) return;
      selectedTransitMode = modeKey;
      const chosenPlan = multiModalBundle.plansByKey[modeKey];
      renderSelectedTimelineDetail();
      renderMapMarkersAndRoute();
      zoomMapToTransitPlan(chosenPlan);
      showToast(`🗺️ แสดงเส้นทาง "${chosenPlan.titleTh}" แยกขั้นตอนบนแผนที่ AMAP`);
    });
  });
}

// ============================================================================
// 5B. SECTION 2: CHOOSES (ATTRACTION & FOOD CARDS) RENDERING
// ============================================================================
function filterMatchesCategory(spot, cat) {
  if (cat === "all") return true;
  if (cat === "food_dining") return spot.category === "food_dining" || spot.activityType === "eat" || spot.id === 15;
  if (cat === "walk_street") return spot.category === "historic_street" || spot.activityType === "walk";
  if (cat === "russian_heritage") return spot.category === "russian_heritage";
  if (cat === "ice_snow") return spot.category === "ice_snow";
  if (cat === "culture_wildlife") {
    return ["wildlife_nature", "culture_heritage", "modern_architecture", "scenic_landmark"].includes(spot.category);
  }
  if (cat === "transit_hub") return spot.category === "transit_hub";
  return spot.category === cat;
}

function renderChoosesSection() {
  const container = document.getElementById("choosesListContainer");
  if (!container) return;

  const dayItems = timelineState[currentDayKey]?.items || [];
  const q = currentChooseSearch.trim().toLowerCase();

  const filtered = allSpots.filter(spot => {
    const catMatch = filterMatchesCategory(spot, currentChooseCategory);
    if (!catMatch) return false;
    if (!q) return true;
    const hay = `${spot.nameTh} ${spot.nameEn} ${spot.nameZh} ${spot.pinyin || ""} ${(spot.tags || []).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });

  const countBadge = document.getElementById("choosesCountBadge");
  if (countBadge) countBadge.textContent = `${filtered.length} สถานที่`;

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:24px 12px; color:#64748b; font-size:0.8rem;">
        ไม่พบสถานที่ที่ตรงกับคำค้นหา "${currentChooseSearch}"
      </div>
    `;
    return;
  }

  filtered.forEach(spot => {
    const queuePositions = [];
    dayItems.forEach((it, idx) => {
      if (Number(it.spotId) === Number(spot.id)) queuePositions.push(`#${idx + 1}`);
    });
    const isInQueue = queuePositions.length > 0;
    const actType = spot.activityType || "visit";
    const actMeta = ACTIVITY_META[actType] || ACTIVITY_META.visit;

    const card = document.createElement("div");
    card.className = `choose-card ${isInQueue ? "in-timeline" : ""}`;
    card.draggable = !IS_READ_ONLY;
    card.dataset.spotId = spot.id;

    const fallbackImg = SPOT_LOCAL_IMGS[spot.id] || spot.image;

    card.innerHTML = `
      <div class="choose-thumb-wrap">
        <img src="${spot.image}" alt="${spot.nameEn}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
        <span class="choose-id-badge">#${String(spot.id).padStart(2, "0")}</span>
        <span class="choose-icon-badge">${spot.doodleIcon || actMeta.icon}</span>
      </div>
      <div class="choose-info">
        <div>
          <div class="choose-title-row">
            <div class="choose-name-en">${spot.nameEn}</div>
          </div>
          <div class="choose-name-th">${spot.nameTh} · <span style="color:#64748b;">${spot.nameZh}</span></div>
          <div class="choose-meta-row">
            <span class="choose-tag tl-act-badge ${actType}">${actMeta.icon} ${actMeta.labelEn} (~${spot.defaultDuration || 60}m)</span>
            <span class="choose-tag" style="background:#f1f5f9; color:#334155;">⭐ ${spot.rating || "4.9"}</span>
            ${isInQueue ? `<span class="choose-in-queue-pill">✓ คิว ${queuePositions.join(", ")}</span>` : ""}
          </div>
        </div>
        <div class="choose-actions-row">
          ${!IS_READ_ONLY ? `
            <button class="btn-choose-insert" data-action="insert" title="แทรกเข้า Timeline ตามตำแหน่งคิวที่เลือก">
              ➕ แทรกคิว (Insert)
            </button>
          ` : ""}
          <button class="btn-choose-mini" data-action="pin-map" title="ดูหมุดบนแผนที่ AMAP">
            📍 Map
          </button>
          <button class="btn-choose-mini" data-action="detail" title="ดูข้อมูลสถานที่ฉบับเต็ม">
            📖 ข้อมูล
          </button>
        </div>
      </div>
    `;

    if (!IS_READ_ONLY) {
      // Drag events from Section 2 (Chooses) to Section 1 (Timeline)
      card.addEventListener("dragstart", e => {
        hideFloatingTip();
        draggedPayload = {
          source: "chooses",
          spotId: spot.id
        };
        document.body.classList.add("is-dragging");
        e.dataTransfer.effectAllowed = "copyMove";
        e.dataTransfer.setData("text/plain", JSON.stringify(draggedPayload));
      });

      card.addEventListener("dragend", () => {
        document.body.classList.remove("is-dragging");
        clearDragOverStates();
      });
    }

    card.addEventListener("mouseenter", e => {
      showFloatingTip(e, spot, {
        title: `${spot.nameZh || ""} ${spot.nameTh}`,
        sub: `${spot.nameEn} · ${spot.categoryLabelTh || ""}`,
        desc: spot.ratingDescTh || spot.descriptionTh || ""
      });
    });
    card.addEventListener("mousemove", moveFloatingTip);
    card.addEventListener("mouseleave", hideFloatingTip);

    // Button clicks on Choose Card
    card.addEventListener("click", e => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === "insert") {
        const targetPos = document.getElementById("selectInsertIndex")?.value || "end";
        insertSpotIntoTimeline(spot.id, targetPos);
      } else if (action === "pin-map") {
        focusSpotOnMap(spot.id, true);
      } else if (action === "detail") {
        openSpotDetailModal(spot.id);
      }
    });

    container.appendChild(card);
  });
}

// ============================================================================
// 6. SECTIONS 3 & 4: AMAP INTERACTIVE MAP OF HARBIN (哈尔滨) IN ENGLISH
// ============================================================================
function initMap() {
  const harbinCenter = getDisplayCoords([45.7725, 126.6250]);

  map = L.map("map", {
    center: harbinCenter,
    zoom: 12,
    zoomControl: false
  });

  // Add Zoom Control to bottom-right in English
  L.control.zoom({
    position: "bottomright",
    zoomInTitle: "Zoom In (Harbin AMAP)",
    zoomOutTitle: "Zoom Out (Harbin AMAP)"
  }).addTo(map);

  markerLayerGroup = L.layerGroup().addTo(map);
  routeLayerGroup = L.layerGroup().addTo(map);
  geoLabelLayerGroup = L.layerGroup().addTo(map);

  setMapTileLayer(currentMapLayerKey);

  // Live coordinates display on mousemove
  map.on("mousemove", e => {
    const coordEl = document.getElementById("mapLiveCoords");
    if (coordEl) {
      coordEl.textContent = `AMAP Harbin: ${e.latlng.lat.toFixed(4)}° N, ${e.latlng.lng.toFixed(4)}° E`;
    }
  });

  // Click on map when Pin Mode is active -> Drop custom pin at that location!
  map.on("click", e => {
    if (IS_READ_ONLY) return;
    if (!isPinModeActive) return;
    handleMapPinClick(e.latlng);
  });

  // Right-click (contextmenu) anywhere on map
  map.on("contextmenu", e => {
    if (IS_READ_ONLY) return;
    handleMapPinClick(e.latlng);
  });
}

function setMapTileLayer(layerKey) {
  currentMapLayerKey = layerKey;
  const cfg = MAP_TILE_LAYERS[layerKey] || MAP_TILE_LAYERS.amap_en_hybrid;

  if (tileLayerInstance) {
    map.removeLayer(tileLayerInstance);
  }
  if (satelliteOverlayInstance) {
    map.removeLayer(satelliteOverlayInstance);
    satelliteOverlayInstance = null;
  }

  tileLayerInstance = L.tileLayer(cfg.baseUrl, {
    subdomains: cfg.subdomains,
    maxZoom: 18,
    attribution: cfg.attribution
  }).addTo(map);

  // If satellite mode, add transparent hybrid road lines & labels on top
  if (layerKey === "amap_sat_en") {
    satelliteOverlayInstance = L.tileLayer("https://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_en&size=1&scl=1&style=8", {
      subdomains: "1234",
      maxZoom: 18,
      opacity: 0.92
    }).addTo(map);
  }

  updateSatelliteButtonState();
  renderEnglishGeoLabels();
  renderMapMarkersAndRoute();
}

function updateSatelliteButtonState() {
  const btn = document.getElementById("btnToggleSatellite");
  const isSat = (currentMapLayerKey === "amap_sat_en");
  if (btn) {
    btn.classList.toggle("active", isSat);
    btn.innerHTML = isSat ? `<span>🗺️</span> แผนที่ปกติ` : `<span>🛰️</span> ภาพดาวเทียม`;
    btn.title = isSat ? "คลิกเพื่อสลับกลับเป็นแผนที่ถนนปกติ" : "คลิกเพื่อสลับเป็นโหมดแผนที่ภาพถ่ายดาวเทียม (Satellite)";
  }
  const select = document.getElementById("selectMapLayer");
  if (select && select.value !== currentMapLayerKey) {
    select.value = currentMapLayerKey;
  }
}

function renderEnglishGeoLabels() {
  if (!geoLabelLayerGroup) return;
  geoLabelLayerGroup.clearLayers();
  if (!showPermanentEnLabels) return;

  HARBIN_ENGLISH_GEO_LABELS.forEach(lbl => {
    const pos = getDisplayCoords(lbl.coords);
    const icon = L.divIcon({
      className: "amap-en-district-wrapper",
      html: `<div class="amap-en-district-label">${lbl.text}</div>`,
      iconSize: [180, 22],
      iconAnchor: [90, 11]
    });
    L.marker(pos, { icon, interactive: false, zIndexOffset: -200 }).addTo(geoLabelLayerGroup);
  });
}

function getTimelineItemCoords(item) {
  if (!item) return null;
  const spot = getSpotById(item.spotId);
  if (item.customCoords) return item.customCoords;
  if (spot && spot.coords) return spot.coords;
  // Fallback for flight steps without spotId (e.g. BKK / PVG transit steps) -> Harbin Taiping Airport T2
  if (item.isFlightStep) {
    const airportSpot = getSpotById(11);
    return airportSpot ? airportSpot.coords : [45.6262, 126.2485];
  }
  return [45.77606, 126.62103];
}

function getPreviousTimelineItemInfo(index, dayKey = currentDayKey) {
  const allDayKeys = Object.keys(timelineState);
  const dayIdx = allDayKeys.indexOf(dayKey);
  const items = timelineState[dayKey]?.items || [];

  if (index > 0 && items[index - 1]) {
    return {
      item: items[index - 1],
      index: index - 1,
      dayKey,
      queueNum: index
    };
  }
  if (dayIdx > 0) {
    for (let d = dayIdx - 1; d >= 0; d--) {
      const pKey = allDayKeys[d];
      const pItems = timelineState[pKey]?.items || [];
      if (pItems.length > 0) {
        return {
          item: pItems[pItems.length - 1],
          index: pItems.length - 1,
          dayKey: pKey,
          queueNum: pItems.length
        };
      }
    }
  }
  return null;
}

function renderMapMarkersAndRoute() {
  if (!map || !markerLayerGroup || !routeLayerGroup) return;

  markerLayerGroup.clearLayers();
  routeLayerGroup.clearLayers();

  const dayObj = timelineState[currentDayKey];
  const dayItems = dayObj ? dayObj.items : [];

  // Identify Currently Focused Stop & Previous Stop in currentDayKey
  const hasActiveFocusInDay =
    activeTimelineSelection &&
    activeTimelineSelection.dayKey === currentDayKey &&
    dayItems[activeTimelineSelection.index];

  const currFocusIdx = hasActiveFocusInDay ? Number(activeTimelineSelection.index) : -1;
  const currFocusItem = currFocusIdx >= 0 ? dayItems[currFocusIdx] : null;
  const prevFocusInfo = hasActiveFocusInDay ? getPreviousTimelineItemInfo(currFocusIdx, currentDayKey) : null;
  const prevFocusIdx = (prevFocusInfo && prevFocusInfo.dayKey === currentDayKey) ? Number(prevFocusInfo.index) : -1;

  const currFocusSpotId = currFocusItem
    ? (currFocusItem.spotId !== undefined && currFocusItem.spotId !== null && currFocusItem.spotId !== ""
        ? Number(currFocusItem.spotId)
        : (currFocusItem.isFlightStep ? 11 : null))
    : null;
  const prevFocusSpotId = prevFocusInfo?.item
    ? (prevFocusInfo.item.spotId !== undefined && prevFocusInfo.item.spotId !== null && prevFocusInfo.item.spotId !== ""
        ? Number(prevFocusInfo.item.spotId)
        : (prevFocusInfo.item.isFlightStep ? 11 : null))
    : null;

  // Map spotId -> array of 1-based queue numbers in current timeline
  const spotQueueMap = new Map();
  dayItems.forEach((it, idx) => {
    if (it.spotId !== undefined && it.spotId !== null && it.spotId !== "") {
      const sid = Number(it.spotId);
      if (!spotQueueMap.has(sid)) spotQueueMap.set(sid, []);
      spotQueueMap.get(sid).push(idx + 1);
    }
  });

  // 1. Render All Harbin Attraction Markers (in English)
  allSpots.forEach(spot => {
    const sid = Number(spot.id);
    const queueNums = spotQueueMap.get(sid) || [];
    const isActiveInQueue = queueNums.length > 0;
    const isCurrFocusedSpot = currFocusSpotId !== null && sid === currFocusSpotId;
    const isPrevFocusedSpot = prevFocusSpotId !== null && sid === prevFocusSpotId && !isCurrFocusedSpot;

    if (!showAllHarbinPins && !isActiveInQueue && !isCurrFocusedSpot && !isPrevFocusedSpot) return;

    const displayPos = getDisplayCoords(spot.coords);
    const prevBadgeNum = prevFocusIdx >= 0 ? (prevFocusIdx + 1) : (prevFocusInfo?.queueNum || "•");
    const badgeText = isCurrFocusedSpot
      ? (currFocusIdx + 1)
      : isPrevFocusedSpot
      ? prevBadgeNum
      : isActiveInQueue
      ? queueNums.join(",")
      : (spot.doodleIcon || "•");

    const bgColor = isCurrFocusedSpot
      ? "#e4572e"
      : isPrevFocusedSpot
      ? "#10b981"
      : isActiveInQueue
      ? "#0284c7"
      : (spot.isCustomPin ? "#e11d48" : (spot.categoryColor || "#475569"));

    const shortEnName = spot.nameEn.length > 26 ? spot.nameEn.slice(0, 24) + "…" : spot.nameEn;

    let roleClass = "";
    let labelHtml = "";
    if (isCurrFocusedSpot) {
      roleClass = "is-active-queue is-curr-stop";
      labelHtml = `<div class="pin-en-label">🎯 ถึง #${currFocusIdx + 1}: ${shortEnName}</div>`;
    } else if (isPrevFocusedSpot) {
      roleClass = "is-active-queue is-prev-stop";
      labelHtml = `<div class="pin-en-label">🟢 จาก #${prevBadgeNum}: ${shortEnName}</div>`;
    } else if (hasActiveFocusInDay) {
      roleClass = `${isActiveInQueue ? "is-active-queue" : ""} is-dimmed-pin`;
      labelHtml = showPermanentEnLabels ? `<div class="pin-en-label">${isActiveInQueue ? `#${queueNums[0]} ` : ""}${shortEnName}</div>` : "";
    } else {
      roleClass = isActiveInQueue ? "is-active-queue" : "";
      labelHtml = showPermanentEnLabels ? `<div class="pin-en-label">${isActiveInQueue ? `#${queueNums[0]} ` : ""}${shortEnName}</div>` : "";
    }

    const pinHtml = `
      <div class="harbin-map-pin ${roleClass}">
        <div class="pin-bubble" style="background:${bgColor};">
          <span class="pin-bubble-inner">${badgeText}</span>
        </div>
        ${labelHtml}
      </div>
    `;

    const icon = L.divIcon({
      className: "custom-harbin-pin-container",
      html: pinHtml,
      iconSize: [160, 62],
      iconAnchor: [80, 34],
      popupAnchor: [0, -28]
    });

    const marker = L.marker(displayPos, {
      icon,
      zIndexOffset: isCurrFocusedSpot ? 3000 : isPrevFocusedSpot ? 2500 : isActiveInQueue ? 900 : 100
    });

    marker.bindPopup(createEnglishPopupHtml(spot, queueNums));
    marker.addTo(markerLayerGroup);
    spot._leafletMarker = marker;
  });

  // 2. Render Custom Timeline Items that don't reference a catalog spotId
  dayItems.forEach((it, idx) => {
    if (it.spotId === undefined || it.spotId === null || it.spotId === "") {
      if (!it.customCoords) return;
      const isCurrFocusedCustom = idx === currFocusIdx;
      const isPrevFocusedCustom = idx === prevFocusIdx && !isCurrFocusedCustom;
      const displayPos = getDisplayCoords(it.customCoords);
      const shortEn = (it.customNameEn || `Activity #${idx + 1}`).slice(0, 24);

      let roleClass = "is-active-queue";
      let labelText = `#${idx + 1} ${shortEn}`;
      let bg = "#e11d48";
      if (isCurrFocusedCustom) {
        roleClass = "is-active-queue is-curr-stop";
        labelText = `🎯 ถึง #${idx + 1}: ${shortEn}`;
        bg = "#e4572e";
      } else if (isPrevFocusedCustom) {
        roleClass = "is-active-queue is-prev-stop";
        labelText = `🟢 จาก #${idx + 1}: ${shortEn}`;
        bg = "#10b981";
      } else if (hasActiveFocusInDay) {
        roleClass = "is-active-queue is-dimmed-pin";
      }

      const pinHtml = `
        <div class="harbin-map-pin ${roleClass}">
          <div class="pin-bubble" style="background:${bg};">
            <span class="pin-bubble-inner">${idx + 1}</span>
          </div>
          ${showPermanentEnLabels || isCurrFocusedCustom || isPrevFocusedCustom ? `<div class="pin-en-label">${labelText}</div>` : ""}
        </div>
      `;
      const icon = L.divIcon({
        className: "custom-harbin-pin-container",
        html: pinHtml,
        iconSize: [160, 62],
        iconAnchor: [80, 34],
        popupAnchor: [0, -28]
      });
      L.marker(displayPos, {
        icon,
        zIndexOffset: isCurrFocusedCustom ? 3000 : isPrevFocusedCustom ? 2500 : 900
      }).addTo(markerLayerGroup);
    }
  });

  // 3. Render Timeline Route Path & Highlight Active Focused Segment
  renderTimelineRouteAndSummary(dayItems);
}

function createEnglishPopupHtml(spot, queueNums) {
  const inQueueText = queueNums.length > 0
    ? `<span style="background:#0284c7; color:#fff; padding:2px 6px; border-radius:4px; font-size:0.65rem;">In Timeline Queue #${queueNums.join(", #")}</span>`
    : `<span style="background:#f1f5f9; color:#475569; padding:2px 6px; border-radius:4px; font-size:0.65rem;">Available Choice</span>`;

  const fallbackImg = SPOT_LOCAL_IMGS[spot.id] || spot.image;

  return `
    <div class="amap-en-popup">
      <div class="popup-hero">
        <img src="${spot.image}" alt="${spot.nameEn}" onerror="this.onerror=null; this.src='${fallbackImg}';">
        <span class="popup-cat-tag">${spot.doodleIcon || "📍"} ${spot.categoryLabelEn || "Harbin Attraction"}</span>
      </div>
      <div class="popup-body">
        <div style="margin-bottom:4px;">${inQueueText}</div>
        <div class="popup-title-en">${spot.nameEn}</div>
        <div class="popup-title-sub">${spot.nameZh} · ${spot.nameTh}</div>
        <div class="popup-desc-en">${spot.ratingDescEn || spot.descriptionEn || ""}</div>
        <div class="popup-coords">AMAP GPS: ${spot.coords[0].toFixed(4)}° N, ${spot.coords[1].toFixed(4)}° E</div>
        <div class="popup-btn-row">
          <button class="popup-btn primary" onclick="window.appInsertSpotFromMap(${spot.id})">➕ Insert to Timeline</button>
          <button class="popup-btn" onclick="window.appOpenSpotDetail(${spot.id})">📖 Full Guide</button>
        </div>
      </div>
    </div>
  `;
}

// Expose global handlers for Leaflet popup buttons
window.appInsertSpotFromMap = function(spotId) {
  const targetPos = document.getElementById("selectInsertIndex")?.value || "end";
  insertSpotIntoTimeline(spotId, targetPos);
};

window.appOpenSpotDetail = function(spotId) {
  openSpotDetailModal(spotId);
};

function renderTimelineRouteAndSummary(dayItems) {
  const routeNodes = [];
  dayItems.forEach((it, idx) => {
    const spot = getSpotById(it.spotId);
    const coords = it.customCoords || (spot ? spot.coords : null);
    if (coords) {
      routeNodes.push({
        queueNum: idx + 1,
        index: idx,
        time: it.time,
        nameEn: it.customNameEn || (spot ? spot.nameEn : `Stop #${idx + 1}`),
        icon: spot ? spot.doodleIcon : ACTIVITY_META[it.actType || "visit"]?.icon || "📍",
        gcjCoords: coords,
        displayCoords: getDisplayCoords(coords)
      });
    }
  });

  let totalDistKm = 0;
  let totalTravelMins = 0;

  const hasActiveFocusInDay =
    activeTimelineSelection &&
    activeTimelineSelection.dayKey === currentDayKey &&
    dayItems[activeTimelineSelection.index];
  const currFocusIdx = hasActiveFocusInDay ? Number(activeTimelineSelection.index) : -1;

  if (routeNodes.length >= 2) {
    // Filter background polyline to Harbin local stops so BKK/Shanghai flight coords don't distort Harbin view
    const localNodes = routeNodes.filter(n => n.gcjCoords[0] >= 42.0);
    const bgLatlngs = (localNodes.length >= 2 ? localNodes : routeNodes).map(n => n.displayCoords);

    if (isRouteVisible) {
      // Subtle Background Day Route Line
      L.polyline(bgLatlngs, {
        color: "#64748b",
        weight: 3.5,
        opacity: hasActiveFocusInDay ? 0.32 : 0.75,
        dashArray: "6, 8",
        lineCap: "round",
        lineJoin: "round"
      }).addTo(routeLayerGroup);
    }

    // Calculate segment distances for day summary
    for (let i = 0; i < routeNodes.length - 1; i++) {
      const a = routeNodes[i];
      const b = routeNodes[i + 1];
      const segKm = calcDistanceKm(a.gcjCoords, b.gcjCoords);
      const leg = estimateTravelLeg(segKm);
      if (segKm < 400) {
        totalDistKm += segKm;
        totalTravelMins += leg.mins;
      }

      if (isRouteVisible && !hasActiveFocusInDay && segKm < 400) {
        const midLat = (a.displayCoords[0] + b.displayCoords[0]) / 2;
        const midLng = (a.displayCoords[1] + b.displayCoords[1]) / 2;
        const segIcon = L.divIcon({
          className: "route-seg-wrapper",
          html: `<div class="route-segment-label">#${a.queueNum}➔#${b.queueNum}: ${leg.textEn}</div>`,
          iconSize: [140, 20],
          iconAnchor: [70, 10]
        });
        L.marker([midLat, midLng], { icon: segIcon, interactive: false }).addTo(routeLayerGroup);
      }
    }
  }

  // Highlight the ACTIVE focused segment for EVERY stop in the day (including stop #1 or flight steps)
  if (isRouteVisible && hasActiveFocusInDay && currFocusIdx >= 0) {
    const currItemObj = dayItems[currFocusIdx];
    const prevInfo = getPreviousTimelineItemInfo(currFocusIdx, currentDayKey);
    const fallbackAirportSpot = getSpotById(11);
    const fallbackHotelSpot = getSpotById(28) || getSpotById(2);

    let effPrevItem = currItemObj.isFlightStep
      ? { spotId: 11 }
      : (prevInfo?.item || { spotId: 11 });
    let effCurrItem = currItemObj.isFlightStep
      ? (dayItems.find(x => !x.isFlightStep) || { spotId: 28 })
      : currItemObj;

    let effPrevCoords = currItemObj.isFlightStep
      ? (fallbackAirportSpot ? fallbackAirportSpot.coords : [45.6262, 126.2485])
      : (getTimelineItemCoords(effPrevItem) || [45.6262, 126.2485]);
    let effCurrCoords = getTimelineItemCoords(effCurrItem) || [45.77606, 126.62103];

    // If clicking #1 morning hotel start (same spot as last night's hotel), show the departure route to #2
    if (currFocusIdx === 0 && calcDistanceKm(effPrevCoords, effCurrCoords) < 0.01 && dayItems[1]) {
      effPrevItem = currItemObj;
      effCurrItem = dayItems[1];
      effPrevCoords = getTimelineItemCoords(effPrevItem) || effPrevCoords;
      effCurrCoords = getTimelineItemCoords(effCurrItem) || effCurrCoords;
    }

    const effPrevSpot = getSpotById(effPrevItem.spotId) || fallbackAirportSpot;
    const effCurrSpot = getSpotById(effCurrItem.spotId) || fallbackHotelSpot;

    const bundle = buildMultiModalPlansForStop(
      effPrevItem,
      effCurrItem,
      effPrevCoords,
      effCurrCoords,
      effPrevSpot,
      effCurrSpot
    );

    const activeModeKey = bundle
      ? (selectedTransitMode === "auto"
          ? bundle.defaultMode
          : (bundle.plansByKey?.[selectedTransitMode] ? selectedTransitMode : bundle.defaultMode))
      : null;

    const activePlan = (bundle && activeModeKey && bundle.plansByKey) ? bundle.plansByKey[activeModeKey] : null;

    if (activePlan && activePlan.legs && activePlan.legs.length > 0) {
      activePlan.legs.forEach((planLeg, legIdx) => {
        const rawCoords = planLeg.pathCoords || [];
        if (rawCoords.length < 2) return;
        const legLatLngs = rawCoords.map(c => getDisplayCoords(c));
        const fromDisp = legLatLngs[0];
        const toDisp = legLatLngs[legLatLngs.length - 1];

        // 1. White High-Contrast Outer Road Casing
        L.polyline(legLatLngs, {
          color: "#ffffff",
          weight: 12,
          opacity: 0.96,
          lineCap: "round",
          lineJoin: "round"
        }).addTo(routeLayerGroup);

        // 2. Mode-Specific Core Line
        L.polyline(legLatLngs, {
          color: planLeg.color || "#e4572e",
          weight: planLeg.type === "walk" ? 6 : 7.5,
          opacity: 1,
          dashArray: planLeg.dashArray || null,
          lineCap: "round",
          lineJoin: "round"
        }).addTo(routeLayerGroup);

        // 3. Animated Flow Dashes showing direction along each leg
        L.polyline(legLatLngs, {
          color: planLeg.flowColor || "#fde047",
          weight: 3.2,
          opacity: 0.95,
          dashArray: planLeg.type === "walk" ? "4, 10" : "10, 12",
          lineCap: "round",
          className: "active-segment-flow-line"
        }).addTo(routeLayerGroup);

        // 4. Directional Arrow Marker along leg
        const dLat = toDisp[0] - fromDisp[0];
        const dLng = toDisp[1] - fromDisp[1];
        const angleDeg = Math.atan2(-dLat, dLng) * (180 / Math.PI);
        const arrowPoints = activePlan.legs.length === 1 ? [0.3, 0.7] : [0.55];

        arrowPoints.forEach(t => {
          const arrowLat = fromDisp[0] + dLat * t;
          const arrowLng = fromDisp[1] + dLng * t;
          const arrowIcon = L.divIcon({
            className: "route-seg-wrapper",
            html: `<div class="active-segment-arrow-icon" style="border-color:${planLeg.color || "#e4572e"}; color:${planLeg.color || "#c2410c"}; transform: rotate(${angleDeg.toFixed(1)}deg);">➤</div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11]
          });
          L.marker([arrowLat, arrowLng], { icon: arrowIcon, interactive: false, zIndexOffset: 2600 }).addTo(routeLayerGroup);
        });

        // 5. Callout Pill at the midpoint of each leg
        const midIdx = Math.floor(legLatLngs.length / 2);
        const midLat = legLatLngs.length === 2
          ? (fromDisp[0] + toDisp[0]) / 2
          : legLatLngs[midIdx][0];
        const midLng = legLatLngs.length === 2
          ? (fromDisp[1] + toDisp[1]) / 2
          : legLatLngs[midIdx][1];
        const legBadgeIcon = L.divIcon({
          className: "route-seg-wrapper",
          html: `<div class="active-segment-badge" style="border-color:${planLeg.color || "#fde047"};">${planLeg.badgeTh || ""}</div>`,
          iconSize: [230, 28],
          iconAnchor: [115, legIdx % 2 === 0 ? -8 : 26]
        });
        L.marker([midLat, midLng], { icon: legBadgeIcon, interactive: false, zIndexOffset: 2800 + legIdx }).addTo(routeLayerGroup);
      });

      // 6. Render Transfer Station / Hub Pins
      if (activePlan.transferHubs && activePlan.transferHubs.length > 0) {
        activePlan.transferHubs.forEach((hub, hIdx) => {
          if (!hub.coords) return;
          const hubDisp = getDisplayCoords(hub.coords);
          const hubIcon = L.divIcon({
            className: "route-seg-wrapper",
            html: `<div class="transfer-hub-pin">${hub.label || hub.nameTh || "🚇 จุดเชื่อมต่อ"}</div>`,
            iconSize: [210, 32],
            iconAnchor: [105, 16]
          });
          L.marker(hubDisp, { icon: hubIcon, interactive: false, zIndexOffset: 2750 + hIdx }).addTo(routeLayerGroup);
        });
      }
    }
  }

  // Update Bottom English Route Summary Bar
  const dayObj = timelineState[currentDayKey];
  document.getElementById("routeDayLabel").textContent = dayObj ? dayObj.labelEn : "Day 1";
  document.getElementById("routeStopsCount").textContent = `${routeNodes.length} Pins`;
  document.getElementById("routeTotalDist").textContent = `${totalDistKm.toFixed(1)} km`;

  const hrs = Math.floor(totalTravelMins / 60);
  const mins = totalTravelMins % 60;
  document.getElementById("routeTotalTime").textContent = hrs > 0 ? `~${hrs}h ${mins}m` : `~${mins}m`;

  const chainContainer = document.getElementById("routeChainContainer");
  if (chainContainer) {
    if (routeNodes.length === 0) {
      chainContainer.innerHTML = `<span style="color:#94a3b8; font-size:0.75rem;">No stops in timeline — Drag attractions from Section 2 into Section 1 to build your Harbin route!</span>`;
    } else {
      chainContainer.innerHTML = routeNodes
        .map((node, i) => {
          const shortEn = node.nameEn.length > 22 ? node.nameEn.slice(0, 20) + "…" : node.nameEn;
          const isCurr = node.index === currFocusIdx;
          const pill = `
            <span class="route-node-pill" style="${isCurr ? "border-color:#f97316; background:#7c2d12;" : ""}" onclick="window.appFocusTimelineIndex(${node.index})" title="${node.time} - ${node.nameEn}">
              <span class="num" style="${isCurr ? "background:#f97316;" : ""}">${node.queueNum}</span>
              <span>${node.icon} ${shortEn}</span>
            </span>
          `;
          return i < routeNodes.length - 1 ? `${pill}<span class="route-arrow">➔</span>` : pill;
        })
        .join("");
    }
  }
}

window.appFocusTimelineIndex = function(index) {
  activeTimelineSelection = { dayKey: currentDayKey, index };
  selectedTransitMode = "auto";
  setCol2ViewMode("detail");
  renderAll();
  focusTimelineItemOnMap(index, currentDayKey);
};

function focusSpotOnMap(spotId, openPopup = false) {
  const spot = getSpotById(spotId);
  if (!spot || !map) return;
  const pos = getDisplayCoords(spot.coords);
  map.flyTo(pos, 16, { duration: 0.85 });
  if (openPopup && spot._leafletMarker) {
    setTimeout(() => {
      spot._leafletMarker.openPopup();
    }, 450);
  }
}

function focusTimelineItemOnMap(index, dayKey = currentDayKey) {
  const items = timelineState[dayKey]?.items || [];
  const item = items[index];
  if (!item || !map) return;

  // Close any open popup so the highlighted route and pins are completely unobstructed
  map.closePopup();

  const fallbackAirportCoords = getSpotById(11)?.coords || [45.6262, 126.2485];
  const fallbackHotelCoords = getSpotById(28)?.coords || [45.77606, 126.62103];

  if (item.isFlightStep) {
    // For any flight step, zoom clearly to show Harbin Airport T2 <-> Hotel transfer route on the map
    const ptAirport = getDisplayCoords(fallbackAirportCoords);
    const ptHotel = getDisplayCoords(fallbackHotelCoords);
    const bounds = L.latLngBounds([ptAirport, ptHotel]).pad(0.28);
    map.flyToBounds(bounds, {
      paddingTopLeft: [70, 75],
      paddingBottomRight: [70, 75],
      maxZoom: 16,
      duration: 0.85
    });
    return;
  }

  const currCoords = getTimelineItemCoords(item);
  if (!currCoords) return;

  // Check if there is a Previous Stop in the timeline to zoom & frame the route segment [prev -> curr]
  const prevInfo = getPreviousTimelineItemInfo(index, dayKey);
  let prevCoords = prevInfo ? getTimelineItemCoords(prevInfo.item) : fallbackAirportCoords;
  let targetCoords = currCoords;

  // If clicking #1 morning hotel start (same coordinates as last night's hotel), frame [#1 Hotel -> #2 First Stop]
  if (index === 0 && prevCoords && calcDistanceKm(prevCoords, currCoords) < 0.01 && items[1]) {
    const nextCoords = getTimelineItemCoords(items[1]);
    if (nextCoords) {
      prevCoords = currCoords;
      targetCoords = nextCoords;
    }
  }

  if (prevCoords) {
    const segDistKm = calcDistanceKm(prevCoords, targetCoords);
    if (segDistKm > 0.005 && segDistKm < 380) {
      const ptPrev = getDisplayCoords(prevCoords);
      const ptCurr = getDisplayCoords(targetCoords);
      const bounds = L.latLngBounds([ptPrev, ptCurr]).pad(0.32);
      map.flyToBounds(bounds, {
        paddingTopLeft: [70, 75],
        paddingBottomRight: [70, 75],
        maxZoom: 17,
        duration: 0.85
      });
      return;
    }
  }

  const pos = getDisplayCoords(currCoords);
  map.flyTo(pos, 16, { duration: 0.85 });
}

function fitCurrentTimelineRoute() {
  const items = timelineState[currentDayKey]?.items || [];
  const pts = [];
  items.forEach(it => {
    const sp = getSpotById(it.spotId);
    const c = it.customCoords || (sp ? sp.coords : null);
    if (c) pts.push(getDisplayCoords(c));
  });
  if (pts.length > 0 && map) {
    map.fitBounds(L.latLngBounds(pts), { padding: [55, 55], maxZoom: 15 });
    showToast("🎯 ปรับมุมมองแผนที่ให้พอดีกับเส้นทาง Timeline แล้ว");
  }
}

// ============================================================================
// 7. PIN MODE (ปักหมุดสถานที่ใหม่บนแผนที่ฮาร์บิน) & MODALS
// ============================================================================
function togglePinMode(forceState) {
  isPinModeActive = typeof forceState === "boolean" ? forceState : !isPinModeActive;
  const btn = document.getElementById("btnPinMode");
  const banner = document.getElementById("pinModeBanner");
  const mapEl = document.getElementById("map");

  if (btn) {
    btn.classList.toggle("active", isPinModeActive);
    btn.innerHTML = isPinModeActive ? `<span>📌</span> Pin Mode: ON` : `<span>📌</span> Pin Mode: OFF`;
  }
  if (banner) banner.hidden = !isPinModeActive;
  if (mapEl) mapEl.classList.toggle("pin-cursor", isPinModeActive);

  if (isPinModeActive) {
    showToast("📌 เปิดโหมดปักหมุด: คลิกจุดใดก็ได้บนแผนที่ฮาร์บินเพื่อปักหมุดใหม่!");
  }
}

function handleMapPinClick(latlng) {
  if (IS_READ_ONLY) return;
  togglePinMode(false);
  openCustomActivityModal({
    lat: Number(latlng.lat.toFixed(4)),
    lng: Number(latlng.lng.toFixed(4)),
    nameEn: "Custom Pinned Spot in Harbin",
    nameTh: "หมุดสถานที่ที่ปักเองบนแผนที่"
  });
}

function openCustomActivityModal(opts = {}) {
  const backdrop = document.getElementById("activityModalBackdrop");
  const items = timelineState[currentDayKey]?.items || [];

  document.getElementById("modalTitle").textContent = opts.editUid
    ? "✏️ แก้ไขกิจกรรมใน Timeline (Edit Timeline Activity)"
    : "➕ เพิ่มกิจกรรม / ปักหมุดสถานที่ใหม่บนแผนที่ (Add Activity & Map Pin)";

  document.getElementById("formEditUid").value = opts.editUid || "";
  document.getElementById("formSpotId").value = opts.spotId !== undefined ? opts.spotId : "";
  document.getElementById("formNameEn").value = opts.nameEn || "";
  document.getElementById("formNameTh").value = opts.nameTh || "";
  document.getElementById("formActType").value = opts.actType || "walk";
  document.getElementById("formTime").value = opts.time || "10:30";
  document.getElementById("formDuration").value = opts.duration || 60;
  document.getElementById("formLat").value = opts.lat || 45.7725;
  document.getElementById("formLng").value = opts.lng || 126.6208;
  document.getElementById("formNote").value = opts.note || "";

  // Populate Queue Position dropdown
  const qSelect = document.getElementById("formQueuePos");
  let qHtml = `<option value="end">ต่อท้ายคิว (#${items.length + 1} End)</option>`;
  for (let i = 0; i <= items.length; i++) {
    qHtml += `<option value="${i}">แทรกคิวที่ #${i + 1}</option>`;
  }
  qSelect.innerHTML = qHtml;
  if (opts.queuePos !== undefined) {
    qSelect.value = String(opts.queuePos);
  }

  backdrop.hidden = false;
}

function openEditTimelineModal(index, dayKey = currentDayKey) {
  currentDayKey = dayKey;
  const items = timelineState[dayKey]?.items || [];
  const item = items[index];
  if (!item) return;
  const spot = getSpotById(item.spotId);
  const coords = item.customCoords || (spot ? spot.coords : [45.7725, 126.6208]);

  openCustomActivityModal({
    editUid: item.uid,
    spotId: item.spotId !== undefined && item.spotId !== null ? item.spotId : "",
    nameEn: item.customNameEn || (spot ? spot.nameEn : ""),
    nameTh: item.customNameTh || (spot ? spot.nameTh : ""),
    actType: item.actType || "visit",
    time: item.time || "10:00",
    duration: item.duration || 60,
    lat: coords[0],
    lng: coords[1],
    note: item.noteTh || item.noteEn || "",
    queuePos: index
  });
}

function openSpotDetailModal(spotId) {
  const spot = getSpotById(spotId);
  if (!spot) return;
  currentDetailSpotId = spot.id;

  document.getElementById("detailModalCat").textContent = `${spot.doodleIcon || "📍"} ${spot.categoryLabelEn || "Harbin Attraction"} · ${spot.categoryLabelTh || ""}`;
  document.getElementById("detailModalTitle").textContent = `${spot.nameEn} (${spot.nameTh})`;
  document.getElementById("detailModalSub").textContent = `${spot.nameZh} · ${spot.pinyin || ""}`;

  const imgEl = document.getElementById("detailModalImg");
  imgEl.src = spot.image;
  imgEl.onerror = () => {
    imgEl.src = SPOT_LOCAL_IMGS[spot.id] || spot.image;
  };

  document.getElementById("detailModalRating").textContent = `${spot.ratingStars || "⭐⭐⭐⭐⭐"} ${spot.rating || "4.9"}`;
  document.getElementById("detailModalCoords").textContent = `📍 AMAP: ${spot.coords[0].toFixed(4)}, ${spot.coords[1].toFixed(4)}`;
  document.getElementById("detailModalHours").textContent = `${spot.openingHoursEn || "-"} (${spot.openingHoursTh || "-"})`;
  document.getElementById("detailModalBestTime").textContent = `${spot.bestTimeEn || "-"}`;
  document.getElementById("detailModalTicket").textContent = `${spot.ticketPriceEn || "-"} (${spot.ticketPriceTh || "-"})`;

  document.getElementById("detailModalDescEn").textContent = spot.descriptionEn || spot.ratingDescEn || "";
  document.getElementById("detailModalDescTh").textContent = spot.descriptionTh || spot.ratingDescTh || "";

  const hlEn = document.getElementById("detailModalHighlightsEn");
  hlEn.innerHTML = (spot.highlightsEn || spot.shortBulletsEn || []).map(h => `<li>${h}</li>`).join("");

  const hlTh = document.getElementById("detailModalHighlightsTh");
  hlTh.innerHTML = (spot.highlightsTh || spot.shortBulletsTh || []).map(h => `<li>${h}</li>`).join("");

  const docLink = document.getElementById("detailModalDocLink");
  if (SPOT_MD_FILES[spot.id]) {
    docLink.href = SPOT_MD_FILES[spot.id];
    docLink.style.display = "inline-flex";
  } else {
    docLink.style.display = "none";
  }

  document.getElementById("detailModalBackdrop").hidden = false;
}

// ============================================================================
// 8. EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
  // Export to Excel (.xlsx) Buttons (Top Header + Column 1 Header)
  document.getElementById("btnExportXlsx")?.addEventListener("click", () => {
    exportTripToXlsx();
  });
  document.getElementById("btnInlineExportXlsx")?.addEventListener("click", () => {
    exportTripToXlsx();
  });

  // "+ วัน" Button in Section 1 Header (matches screenshot design)
  document.getElementById("btnAddDay")?.addEventListener("click", () => {
    const existingKeys = Object.keys(timelineState);
    const nextDayNum = existingKeys.length + 1;
    const newDayKey = `day${nextDayNum}`;
    timelineState[newDayKey] = {
      dayNumber: nextDayNum,
      labelTh: `วันที่ ${nextDayNum}`,
      labelEn: `Day ${nextDayNum}: Harbin Custom Day`,
      themeTh: `จัดตารางอิสระ — ลากสถานที่จากส่วนที่ 2 มาวางที่นี่`,
      items: []
    };
    currentDayKey = newDayKey;
    selectedDayTab = "all";
    saveState();
    renderAll();
    const container = document.getElementById("timelineListContainer");
    if (container) {
      setTimeout(() => {
        container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      }, 60);
    }
    showToast(`➕ เพิ่ม "วันที่ ${nextDayNum}" เรียบร้อยแล้ว — ลากสถานที่มาวางได้เลย`);
  });

  // Allow dragging a timeline row back to Section 2 (Chooses) to remove it
  const choosesSec = document.getElementById("sectionChooses");
  if (choosesSec) {
    choosesSec.addEventListener("dragover", e => {
      if (draggedPayload && draggedPayload.source === "timeline") {
        e.preventDefault();
      }
    });
    choosesSec.addEventListener("drop", e => {
      if (draggedPayload && draggedPayload.source === "timeline") {
        e.preventDefault();
        removeTimelineItem(draggedPayload.fromIndex, draggedPayload.fromDayKey || currentDayKey);
        draggedPayload = null;
      }
    });
  }

  // Column 2 Mode Switcher: "📋 รายละเอียดจุดที่เลือก" vs "➕ เพิ่มสถานที่ (28)"
  document.getElementById("btnCol2ModeDetail")?.addEventListener("click", () => {
    setCol2ViewMode("detail");
  });
  document.getElementById("btnCol2ModeChooses")?.addEventListener("click", () => {
    setCol2ViewMode("chooses");
  });

  // Timeline Display Mode Switcher (Table vs Card)
  document.getElementById("btnModeTable")?.addEventListener("click", () => {
    timelineViewMode = "table";
    renderAll();
  });

  document.getElementById("btnModeCard")?.addEventListener("click", () => {
    timelineViewMode = "card";
    renderAll();
  });

  // Flight Ticket Modal (1/S__27820034.jpg)
  const openFlightModal = () => {
    const fm = document.getElementById("flightModalBackdrop");
    if (fm) fm.hidden = false;
  };
  const closeFlightModal = () => {
    const fm = document.getElementById("flightModalBackdrop");
    if (fm) fm.hidden = true;
  };
  document.getElementById("btnViewFlightTicket")?.addEventListener("click", openFlightModal);
  document.getElementById("btnInlineFlight")?.addEventListener("click", openFlightModal);
  document.getElementById("btnCloseFlightModal")?.addEventListener("click", closeFlightModal);
  document.getElementById("btnCloseFlightModalBottom")?.addEventListener("click", closeFlightModal);

  // Mobile / Tablet Responsive View Tabs
  document.querySelectorAll(".mobile-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".mobile-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const view = tab.dataset.view;
      const ws = document.getElementById("mainWorkspace");
      ws.classList.remove("view-col1", "view-col2", "view-col34");
      if (view !== "all") ws.classList.add(`view-${view}`);
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 150);
    });
  });

  // Chooses Category Filter Chips
  document.querySelectorAll("#choosesFilterBar .filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#choosesFilterBar .filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentChooseCategory = chip.dataset.cat;
      renderChoosesSection();
    });
  });

  // Chooses Search Box
  const searchInput = document.getElementById("choosesSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentChooseSearch = e.target.value;
      renderChoosesSection();
    });
  }
  document.getElementById("btnClearChoosesSearch")?.addEventListener("click", () => {
    currentChooseSearch = "";
    if (searchInput) searchInput.value = "";
    renderChoosesSection();
  });

  // Header & Timeline Quick Buttons
  document.getElementById("btnResetHarbinView")?.addEventListener("click", () => {
    if (map) map.flyTo(getDisplayCoords([45.7725, 126.6250]), 12, { duration: 0.8 });
  });

  document.getElementById("btnAutoTime")?.addEventListener("click", () => {
    autoRecalculateDayTimes(true);
  });

  document.getElementById("btnResetDay")?.addEventListener("click", () => {
    if (selectedDayTab === "all") {
      timelineState = JSON.parse(JSON.stringify(DEFAULT_HARBIN_TIMELINE));
      saveState();
      renderAll();
      fitCurrentTimelineRoute();
      showToast("🔄 รีเซ็ตตารางการเดินทางทั้ง 6 วัน (รวมตารางบิน) กลับเป็นค่าเริ่มต้นแล้ว");
    } else if (DEFAULT_HARBIN_TIMELINE[currentDayKey]) {
      timelineState[currentDayKey] = JSON.parse(JSON.stringify(DEFAULT_HARBIN_TIMELINE[currentDayKey]));
      saveState();
      renderAll();
      fitCurrentTimelineRoute();
      showToast("🔄 รีเซ็ตตารางกิจกรรมของวันนี้กลับเป็นค่าเริ่มต้นแล้ว");
    }
  });

  document.getElementById("btnAddCustomModal")?.addEventListener("click", () => {
    openCustomActivityModal({ actType: "walk" });
  });

  document.getElementById("btnQuickAddWalk")?.addEventListener("click", () => {
    openCustomActivityModal({
      actType: "walk",
      nameEn: "Winter Stroll in Harbin",
      nameTh: "เดินเล่นชมเมืองหิมะฮาร์บิน",
      duration: 45
    });
  });

  document.getElementById("btnQuickAddEat")?.addEventListener("click", () => {
    openCustomActivityModal({
      actType: "eat",
      nameEn: "Harbin Local Food & Hot Drink Break",
      nameTh: "แวะทานอาหารท้องถิ่น / จิบเครื่องดื่มอุ่นๆ",
      duration: 60
    });
  });

  document.getElementById("btnClearTimeline")?.addEventListener("click", () => {
    timelineState[currentDayKey].items = [];
    saveState();
    renderAll();
    showToast("🗑️ ล้างคิวกิจกรรมในวันนี้แล้ว — ลากสถานที่จากส่วนที่ 2 มาใส่ใหม่ได้เลย");
  });

  // Map Top Drawer Toggle (ลิ้นชักเก็บส่วนหัวและปุ่มควบคุมแผนที่)
  const toggleMapTopDrawer = forceState => {
    const drawer = document.getElementById("mapTopDrawer");
    const triggerBtn = document.getElementById("btnToggleMapDrawer");
    const caret = document.getElementById("mapDrawerCaret");
    if (!drawer) return;
    const isNowOpen = typeof forceState === "boolean"
      ? forceState
      : !drawer.classList.contains("is-open");
    drawer.classList.toggle("is-open", isNowOpen);
    drawer.setAttribute("aria-hidden", String(!isNowOpen));
    if (triggerBtn) triggerBtn.classList.toggle("active", isNowOpen);
    if (caret) caret.textContent = isNowOpen ? "▴" : "▾";
  };

  document.getElementById("btnToggleMapDrawer")?.addEventListener("click", () => {
    toggleMapTopDrawer();
  });
  document.getElementById("btnCloseMapDrawer")?.addEventListener("click", () => {
    toggleMapTopDrawer(false);
  });
  document.getElementById("btnQuickFitRoute")?.addEventListener("click", () => {
    fitCurrentTimelineRoute();
  });
  document.getElementById("btnToggleSatellite")?.addEventListener("click", () => {
    if (currentMapLayerKey === "amap_sat_en") {
      setMapTileLayer("amap_en_hybrid");
      if (typeof showToast === "function") showToast("🗺️ สลับสู่โหมดแผนที่ปกติ (Road Map)");
    } else {
      setMapTileLayer("amap_sat_en");
      if (typeof showToast === "function") showToast("🛰️ สลับสู่โหมดภาพถ่ายดาวเทียม (Satellite Hybrid)");
    }
  });

  // Map Toolbar Controls
  document.getElementById("btnPinMode")?.addEventListener("click", () => {
    togglePinMode();
    toggleMapTopDrawer(false);
  });
  document.getElementById("btnCancelPinMode")?.addEventListener("click", () => togglePinMode(false));

  document.getElementById("btnToggleLegend")?.addEventListener("click", e => {
    const legend = document.getElementById("mapLegend");
    if (!legend) return;
    const isNowVisible = legend.hidden;
    legend.hidden = !isNowVisible;
    e.currentTarget.classList.toggle("active", isNowVisible);
  });

  document.getElementById("btnToggleRoute")?.addEventListener("click", e => {
    isRouteVisible = !isRouteVisible;
    const btn = e.currentTarget;
    btn.classList.toggle("active", isRouteVisible);
    btn.innerHTML = isRouteVisible ? `<span>🧭</span> Route Path: ON` : `<span>🧭</span> Route Path: OFF`;
    renderMapMarkersAndRoute();
  });

  document.getElementById("btnToggleAllPins")?.addEventListener("click", e => {
    showAllHarbinPins = !showAllHarbinPins;
    const btn = e.currentTarget;
    btn.classList.toggle("active", showAllHarbinPins);
    btn.innerHTML = showAllHarbinPins ? `<span>📍</span> All Pins (${allSpots.length})` : `<span>📍</span> Timeline Pins Only`;
    renderMapMarkersAndRoute();
  });

  document.getElementById("btnToggleEnLabels")?.addEventListener("click", e => {
    showPermanentEnLabels = !showPermanentEnLabels;
    const btn = e.currentTarget;
    btn.classList.toggle("active", showPermanentEnLabels);
    renderEnglishGeoLabels();
    renderMapMarkersAndRoute();
  });

  document.getElementById("selectMapLayer")?.addEventListener("change", e => {
    setMapTileLayer(e.target.value);
  });

  document.getElementById("btnFitRoute")?.addEventListener("click", () => {
    fitCurrentTimelineRoute();
  });

  document.getElementById("btnLocateMe")?.addEventListener("click", () => {
    const centerPos = getDisplayCoords([45.7715, 126.6208]); // Zhongyang Street Harbin Hub
    if (userLocationMarker) map.removeLayer(userLocationMarker);
    userLocationMarker = L.circleMarker(centerPos, {
      radius: 10,
      color: "#ffffff",
      weight: 3,
      fillColor: "#10b981",
      fillOpacity: 1
    }).addTo(map);
    userLocationMarker.bindPopup(`<strong>📡 Current Position (Harbin Center)</strong><br>Zhongyang Pedestrian Street, Daoli District, Harbin (哈尔滨)`).openPopup();
    map.flyTo(centerPos, 14, { duration: 0.9 });
    showToast("📡 แสดงตำแหน่งที่ตั้งปัจจุบันใจกลางเมืองฮาร์บิน (Harbin)");
  });

  // Fullscreen Map Toggle Buttons
  document.getElementById("btnFullscreenMap")?.addEventListener("click", () => {
    toggleMapFullscreen();
  });

  document.getElementById("btnFloatingFullscreen")?.addEventListener("click", () => {
    toggleMapFullscreen();
  });

  // Activity / Custom Pin Modal Submit
  document.getElementById("btnCloseActivityModal")?.addEventListener("click", () => {
    document.getElementById("activityModalBackdrop").hidden = true;
  });
  document.getElementById("btnCancelModal")?.addEventListener("click", () => {
    document.getElementById("activityModalBackdrop").hidden = true;
  });

  document.getElementById("activityForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const editUid = document.getElementById("formEditUid").value;
    const existingSpotId = document.getElementById("formSpotId").value;
    const nameEn = document.getElementById("formNameEn").value.trim();
    const nameTh = document.getElementById("formNameTh").value.trim();
    const actType = document.getElementById("formActType").value;
    const time = document.getElementById("formTime").value;
    const duration = Number(document.getElementById("formDuration").value) || 60;
    const lat = Number(document.getElementById("formLat").value) || 45.7725;
    const lng = Number(document.getElementById("formLng").value) || 126.6208;
    const note = document.getElementById("formNote").value.trim();
    const queuePos = document.getElementById("formQueuePos").value;

    const items = timelineState[currentDayKey].items;

    if (editUid) {
      // Update existing timeline item
      const idx = items.findIndex(it => it.uid === editUid);
      if (idx !== -1) {
        items[idx].customNameEn = nameEn;
        items[idx].customNameTh = nameTh;
        items[idx].actType = actType;
        items[idx].time = time;
        items[idx].duration = duration;
        items[idx].customCoords = [lat, lng];
        items[idx].noteTh = note;
        items[idx].noteEn = note;

        const targetIdx = queuePos === "end" ? items.length - 1 : Number(queuePos);
        if (targetIdx !== idx && targetIdx >= 0 && targetIdx < items.length) {
          const [moved] = items.splice(idx, 1);
          items.splice(targetIdx, 0, moved);
        }
      }
      showToast("💾 บันทึกการแก้ไขกิจกรรมเรียบร้อยแล้ว");
    } else {
      // Create a new Custom Spot in Section 2 (Chooses) AND insert into Section 1 (Timeline)
      let spotIdToUse = existingSpotId !== "" ? Number(existingSpotId) : null;
      if (spotIdToUse === null) {
        const newSpotId = allSpots.length > 0 ? Math.max(...allSpots.map(s => Number(s.id))) + 1 : 28;
        const newCustomSpot = {
          id: newSpotId,
          nameTh,
          nameEn,
          nameZh: "自定义地点 (Harbin Pin)",
          category: actType === "eat" ? "food_dining" : (actType === "walk" ? "historic_street" : "scenic_landmark"),
          activityType: actType,
          defaultDuration: duration,
          categoryLabelTh: ACTIVITY_META[actType]?.labelTh || "หมุดปักเอง",
          categoryLabelEn: ACTIVITY_META[actType]?.labelEn || "Custom Pin",
          categoryColor: "#e11d48",
          doodleIcon: "📌",
          rating: 5.0,
          ratingStars: "⭐⭐⭐⭐⭐",
          ratingDescTh: note || "สถานที่ปักหมุดเพิ่มเติมบนแผนที่ฮาร์บิน",
          ratingDescEn: note || "User-pinned location in Harbin (哈尔滨)",
          coords: [lat, lng],
          image: "https://images.unsplash.com/photo-1548625361-12503722f42a?auto=format&fit=crop&w=600&q=80",
          tags: ["Custom Pin", nameEn, nameTh],
          isCustomPin: true
        };
        allSpots.unshift(newCustomSpot);
        spotIdToUse = newSpotId;
      }

      const newTlItem = {
        uid: `tl-${Date.now()}`,
        spotId: spotIdToUse,
        customNameEn: nameEn,
        customNameTh: nameTh,
        time,
        duration,
        actType,
        customCoords: [lat, lng],
        noteTh: note,
        noteEn: note
      };

      const insertIdx = queuePos === "end" ? items.length : Math.min(items.length, Math.max(0, Number(queuePos)));
      items.splice(insertIdx, 0, newTlItem);
      showToast(`📌 ปักหมุด "${nameEn}" และแทรกลงคิวที่ #${insertIdx + 1} แล้ว!`);
    }

    document.getElementById("activityModalBackdrop").hidden = true;
    saveState();
    renderAll();
    if (map) map.flyTo(getDisplayCoords([lat, lng]), 14, { duration: 0.8 });
  });

  // Detail Modal Listeners
  document.getElementById("btnCloseDetailModal")?.addEventListener("click", () => {
    document.getElementById("detailModalBackdrop").hidden = true;
  });
  document.getElementById("btnDetailFlyTo")?.addEventListener("click", () => {
    document.getElementById("detailModalBackdrop").hidden = true;
    if (currentDetailSpotId !== null) focusSpotOnMap(currentDetailSpotId, true);
  });
  document.getElementById("btnDetailAddTimeline")?.addEventListener("click", () => {
    document.getElementById("detailModalBackdrop").hidden = true;
    if (currentDetailSpotId !== null) {
      const targetPos = document.getElementById("selectInsertIndex")?.value || "end";
      insertSpotIntoTimeline(currentDetailSpotId, targetPos);
    }
  });

  // Escape key closes modals, exits Fullscreen Map, or cancels Pin Mode
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (isPinModeActive) togglePinMode(false);
      const mapSec = document.getElementById("sectionMap");
      if (mapSec && mapSec.classList.contains("is-fullscreen")) {
        toggleMapFullscreen(false);
      }
      document.getElementById("activityModalBackdrop").hidden = true;
      document.getElementById("detailModalBackdrop").hidden = true;
      const fm = document.getElementById("flightModalBackdrop");
      if (fm) fm.hidden = true;
    }
  });
}

function toggleMapFullscreen(forceState) {
  const mapSection = document.getElementById("sectionMap");
  const btnTop = document.getElementById("btnFullscreenMap");
  const btnFloat = document.getElementById("btnFloatingFullscreen");
  if (!mapSection) return;

  const isNowFull = typeof forceState === "boolean"
    ? forceState
    : !mapSection.classList.contains("is-fullscreen");

  mapSection.classList.toggle("is-fullscreen", isNowFull);

  if (btnTop) {
    btnTop.classList.toggle("active", isNowFull);
    btnTop.innerHTML = isNowFull
      ? `<span>🗗</span> ย่อกลับ 4 ส่วน (Exit Fullscreen)`
      : `<span>⛶</span> เต็มจอ (Fullscreen)`;
  }

  if (btnFloat) {
    btnFloat.innerHTML = isNowFull
      ? `<span>🗗</span> ย่อกลับ 4 ส่วน (ESC)`
      : `<span>⛶</span> ขยายเต็มจอ`;
  }

  // Resize Leaflet map canvas immediately and after layout repaint
  if (map) {
    map.invalidateSize();
    setTimeout(() => {
      map.invalidateSize();
    }, 180);
  }

  showToast(
    isNowFull
      ? "⛶ ขยายแผนที่เต็มจอแล้ว (กดปุ่มเดิม หรือกด ESC เพื่อย่อกลับ 4 ส่วน)"
      : "🗗 กลับสู่มุมมองแบ่ง 4 ส่วนแนวตั้งเรียบร้อยแล้ว"
  );
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ============================================================================
// 8. EXPORT TO EXCEL (.XLSX) — แสดงลิสต์สถานที่และแผนการเดินทางแยกเป็นข้อๆ
// ============================================================================
function exportTripToXlsx() {
  const allDayKeys = Object.keys(timelineState);
  const timelineRows = [];
  let globalItemNum = 1;
  let prevGlobalItem = null;
  let prevGlobalSpot = null;
  let prevGlobalCoords = null;

  allDayKeys.forEach((dayKey, dayIdx) => {
    const dayObj = timelineState[dayKey];
    const items = dayObj?.items || [];
    const dayLabel = dayObj?.labelTh || `วันที่ ${dayIdx + 1}`;

    items.forEach((item, idx) => {
      const spot = getSpotById(item.spotId);
      const actType = item.actType || (spot ? spot.activityType : "visit") || "visit";
      const actMeta = ACTIVITY_META[actType] || ACTIVITY_META.visit;

      const nameEn = item.customNameEn || spot?.nameEn || `Stop #${idx + 1}`;
      const nameTh = item.customNameTh || spot?.nameTh || nameEn;
      const nameZh = spot?.nameZh || (item.isFlightStep ? "哈尔滨太平国际机场 / 浦东国际机场" : "哈尔滨景点");
      const pinyin = spot?.pinyin || "";
      const currCoords = getTimelineItemCoords(item) || [45.77606, 126.62103];

      const prevNameEn = prevGlobalItem
        ? (prevGlobalItem.customNameEn || prevGlobalSpot?.nameEn || "")
        : "จุดเริ่มต้นของทริป (Suvarnabhumi BKK)";
      const prevNameTh = prevGlobalItem
        ? (prevGlobalItem.customNameTh || prevGlobalSpot?.nameTh || prevNameEn)
        : "ท่าอากาศยานสุวรรณภูมิ (BKK)";

      const distKm = (prevGlobalCoords && currCoords && !item.isFlightStep)
        ? calcDistanceKm(prevGlobalCoords, currCoords)
        : 0;

      // Build itemized transit steps (แยกเป็นข้อๆ 1, 2, 3)
      let transitStepsList = "";
      if (item.isFlightStep) {
        transitStepsList = `1) ✈️ เที่ยวบินตามตาราง (Trip.com Booking: Confirmed ✅)\n2) 🚌 เข้าเมืองด้วย Airport Bus สาย 3 ลงถนนจงหยาง (20 หยวน) หรือ 🚕 DiDi (~45 นาที)`;
      } else {
        const bundle = buildMultiModalPlansForStop(
          prevGlobalItem || { spotId: 11 },
          item,
          prevGlobalCoords || [45.6262, 126.2485],
          currCoords,
          prevGlobalSpot || getSpotById(11),
          spot
        );
        if (bundle && bundle.orderedPlans) {
          transitStepsList = bundle.orderedPlans
            .map((p, pIdx) => {
              const legLines = (p.legs || []).map((l, lIdx) => `   ${pIdx + 1}.${lIdx + 1}) ${l.stepTextTh || l.badgeTh}`).join("\n");
              return `ทางเลือกที่ ${pIdx + 1}: ${p.titleTh}\n${legLines}`;
            })
            .join("\n");
        }
      }

      // Build itemized highlights & notes (แยกเป็นข้อๆ 1, 2, 3)
      const bulletItems = [];
      if (item.noteTh) bulletItems.push(`บันทึกตาราง: ${item.noteTh}`);
      if (spot?.shortBulletsTh) bulletItems.push(...spot.shortBulletsTh);
      if (spot?.highlightsTh) bulletItems.push(...spot.highlightsTh);
      const uniqueBulletItems = [...new Set(bulletItems)];
      const itemizedPointsText = uniqueBulletItems
        .map((b, bIdx) => `${bIdx + 1}. ${b}`)
        .join("\n");

      const weatherInfo = getWeatherForSelection(dayKey, item);
      const amapUrl = `https://uri.amap.com/marker?position=${currCoords[1].toFixed(4)},${currCoords[0].toFixed(4)}&name=${encodeURIComponent(nameZh || nameEn)}`;

      timelineRows.push({
        "ข้อที่ (No.)": globalItemNum,
        "วันที่ (Day)": dayLabel,
        "คิวที่ (Queue)": `#${idx + 1}/${items.length}`,
        "เวลา (Time)": item.time || "09:00",
        "ระยะเวลา (นาที)": Number(item.duration || 60),
        "ประเภทกิจกรรม": `${actMeta.icon} ${actMeta.labelTh}`,
        "1. ชื่ออังกฤษ (English Name)": nameEn,
        "2. ชื่อไทย (Thai Name)": nameTh,
        "3. ชื่อจีน (Chinese Name / ยื่นให้แท็กซี่)": nameZh,
        "พินอิน (Pinyin)": pinyin,
        "เดินทางจากจุดก่อนหน้า": `${prevNameEn} (${prevNameTh})`,
        "ระยะทางจากจุดก่อนหน้า (กม.)": item.isFlightStep ? "เที่ยวบิน" : Number(distKm.toFixed(2)),
        "วิธีเดินทางแยกเป็นข้อๆ (รถไฟ/รถบัส/เดินเท้า/DiDi)": transitStepsList,
        "รายละเอียด & จุดเด่นของสถานที่ (แยกเป็นข้อๆ)": itemizedPointsText,
        "เวลาเปิด-ปิด": spot?.openingHoursTh || "-",
        "ค่าเข้าชม / ค่าใช้จ่าย": spot?.ticketPriceTh || "-",
        "อุณหภูมิคาดการณ์ (°C)": `${weatherInfo.tempC}°C (ช่วงวัน ${weatherInfo.lowC}°C ~ ${weatherInfo.highC}°C)`,
        "พิกัด AMAP (Lat, Lng)": `${currCoords[0].toFixed(4)}, ${currCoords[1].toFixed(4)}`,
        "ลิงก์จอง / แผนที่นำทาง": spot?.bookingUrl || amapUrl
      });

      globalItemNum++;
      prevGlobalItem = item;
      prevGlobalSpot = spot;
      prevGlobalCoords = currCoords;
    });
  });

  // Sheet 2: Itemized List of All Harbin Places (รวมสถานที่ทั้งหมดแยกเป็นข้อๆ)
  const allSpotsRows = allSpots.map((spot, idx) => {
    const bullets = [
      ...(spot.shortBulletsTh || []),
      ...(spot.highlightsTh || [])
    ];
    const uniqueBullets = [...new Set(bullets)];
    const numberedHighlights = uniqueBullets.map((b, i) => `${i + 1}. ${b}`).join("\n");

    const transitBullets = [];
    if (spot.transportTh?.fromStation) transitBullets.push(`1. รถไฟใต้ดิน/จากสถานี: ${spot.transportTh.fromStation}`);
    if (spot.transportTh?.fromAirport) transitBullets.push(`2. จากสนามบิน: ${spot.transportTh.fromAirport}`);
    if (spot.transportTh?.inside) transitBullets.push(`3. การเดินภายในพื้นที่: ${spot.transportTh.inside}`);

    return {
      "ข้อที่ (No.)": idx + 1,
      "รหัสหมุด (Spot ID)": spot.id,
      "1. ชื่อสถานที่ (อังกฤษ - EN)": spot.nameEn || "",
      "2. ชื่อสถานที่ (ไทย - TH)": spot.nameTh || "",
      "3. ชื่อสถานที่ (จีน - 中文)": spot.nameZh || "",
      "พินอิน (Pinyin)": spot.pinyin || "",
      "หมวดหมู่": `${spot.doodleIcon || "📍"} ${spot.categoryLabelTh || ""}`,
      "คะแนนรีวิว": spot.rating ? `${spot.rating} (${spot.ratingStars || "⭐⭐⭐⭐⭐"})` : "-",
      "ไฮไลท์ & รายละเอียด (แยกเป็นข้อๆ)": numberedHighlights || spot.descriptionTh || "",
      "วิธีเดินทาง (แยกเป็นข้อๆ)": transitBullets.join("\n"),
      "เวลาเปิด-ปิด": spot.openingHoursTh || "-",
      "ช่วงเวลาแนะนำ": spot.bestTimeTh || "-",
      "ค่าเข้าชม / ค่าใช้จ่าย": spot.ticketPriceTh || "-",
      "พิกัด AMAP (Lat, Lng)": spot.coords ? `${spot.coords[0].toFixed(4)}, ${spot.coords[1].toFixed(4)}` : "-",
      "ลิงก์จอง / ข้อมูลเพิ่ม": spot.bookingUrl || (SPOT_MD_FILES[spot.id] || "-")
    };
  });

  const fileName = `Harbin_Trip_Plan_List_${new Date().toISOString().slice(0, 10)}.xlsx`;

  if (typeof XLSX !== "undefined") {
    const wb = XLSX.utils.book_new();

    const wsTimeline = XLSX.utils.json_to_sheet(timelineRows);
    wsTimeline["!cols"] = [
      { wch: 10 }, // ข้อที่
      { wch: 16 }, // วันที่
      { wch: 10 }, // คิวที่
      { wch: 10 }, // เวลา
      { wch: 14 }, // ระยะเวลา
      { wch: 18 }, // ประเภท
      { wch: 42 }, // ชื่ออังกฤษ
      { wch: 42 }, // ชื่อไทย
      { wch: 36 }, // ชื่อจีน
      { wch: 24 }, // พินอิน
      { wch: 38 }, // เดินทางจากจุดก่อนหน้า
      { wch: 16 }, // ระยะทาง
      { wch: 58 }, // วิธีเดินทางแยกเป็นข้อๆ
      { wch: 62 }, // รายละเอียดแยกเป็นข้อๆ
      { wch: 26 }, // เวลาเปิด-ปิด
      { wch: 28 }, // ค่าเข้าชม
      { wch: 28 }, // อุณหภูมิ
      { wch: 22 }, // พิกัด
      { wch: 45 }  // ลิงก์
    ];
    XLSX.utils.book_append_sheet(wb, wsTimeline, "1_แผนเดินทางรายข้อ");

    const wsSpots = XLSX.utils.json_to_sheet(allSpotsRows);
    wsSpots["!cols"] = [
      { wch: 10 }, // ข้อที่
      { wch: 12 }, // รหัสหมุด
      { wch: 38 }, // ชื่ออังกฤษ
      { wch: 38 }, // ชื่อไทย
      { wch: 36 }, // ชื่อจีน
      { wch: 24 }, // พินอิน
      { wch: 26 }, // หมวดหมู่
      { wch: 18 }, // คะแนน
      { wch: 65 }, // ไฮไลท์แยกเป็นข้อๆ
      { wch: 55 }, // วิธีเดินทางแยกเป็นข้อๆ
      { wch: 26 }, // เวลาเปิด-ปิด
      { wch: 26 }, // ช่วงเวลาแนะนำ
      { wch: 28 }, // ค่าเข้าชม
      { wch: 22 }, // พิกัด
      { wch: 45 }  // ลิงก์
    ];
    XLSX.utils.book_append_sheet(wb, wsSpots, "2_ลิสต์สถานที่ทั้งหมด");

    XLSX.writeFile(wb, fileName);
    showToast(`📊 ดาวน์โหลดไฟล์ "${fileName}" (${timelineRows.length} รายการเดินทาง + ${allSpotsRows.length} สถานที่) เรียบร้อยแล้ว!`);
  } else {
    showToast("⚠️ ไม่พบไลบรารี XLSX กรุณาเชื่อมต่ออินเทอร์เน็ตแล้วรีเฟรชหน้าเว็บ");
  }
}

// ============================================================================
// CHECKLIST INTERACTIVE MODULE (สำหรับ ผู้เดินทาง 2 ท่าน · 2 Travelers)
// ============================================================================
const HARBIN_CHECKLIST_STORAGE_KEY = "harbin_travel_checklist_state_v2";

const HARBIN_CHECKLIST_DATA = {
  shared: {
    title: "🤝 ของใช้ร่วมกัน & ภารกิจส่วนกลาง (Shared Items)",
    items: [
      { id: "sh_flight", text: "ใบยืนยันตั๋วเครื่องบินไป-กลับ (Trip.com Booking: Confirmed ✅) พิมพ์สำรอง 1 ชุด" },
      { id: "sh_hotel", text: "ใบจองโรงแรม / แผนเดินทาง 6 วัน (พิมพ์ภาษาอังกฤษ/จีน เผื่อ ตม. จีนขอดู ฟรีวีซ่า 30 วัน)" },
      { id: "sh_cash", text: "เงินสดหยวน (RMB) ติดตัวไว้สำรองฉุกเฉิน (ประมาณ 1,000 – 1,500 หยวน)" },
      { id: "sh_apps", text: "แอปจำเป็นในเครื่อง: Amap (高德地图) แผนที่จีนแม่นยำ + Baidu/Google Translate ภาษาจีน Offline" },
      { id: "sh_thermos", text: "กระติกน้ำเก็บความร้อน (Thermos) ขนาด 400-500ml ไว้จิบน้ำอุ่นแก้หนาวระหว่างเดินเที่ยว" },
      { id: "sh_body_warmer", text: "แผ่นร้อนแปะลำตัว (Body Warmer) กองกลาง 20–30 แผ่น (ห้ามแปะผิวตรงๆ ให้แปะบนลองจอน)" },
      { id: "sh_toe_warmer", text: "แผ่นร้อนแปะเท้า/ถุงเท้า (Toe Warmer) กองกลาง 15–20 คู่ (ช่วยให้อุ่นเดินสบายมาก)" },
      { id: "sh_hand_warmer", text: "แผ่นร้อนแบบถือ/กำมือพกในกระเป๋าเสื้อโค้ท 10–15 ชิ้น" },
      { id: "sh_adapter", text: "หัวแปลงปลั๊ก Universal Adapter + ปลั๊กพ่วง / Fast Charger ส่วนกลาง" },
      { id: "sh_sunscreen", text: "ครีมกันแดดทาหน้า/คอ SPF 50+ PA++++ (หิมะขาวสะท้อนแดดแรงมาก)" },
      { id: "sh_nasal", text: "สเปรย์พ่นจมูกน้ำเกลือ (ป้องกันเยื่อบุโพรงจมูกแห้งแตกเลือดกำเดาไหลจากอากาศแห้งจัด)" },
      { id: "sh_med_cold", text: "ยาสามัญ: ยาแก้หวัด ลดไข้ (Paracetamol, Tiffy), ยาลดน้ำมูก, ยาแก้แพ้" },
      { id: "sh_med_throat", text: "ยาสามัญ: ยาอมแก้เจ็บคอ, สเปรย์พ่นคอ (Propoliz / Kamillosan)" },
      { id: "sh_med_stomach", text: "ยาสามัญ: ยาแก้ท้องเสีย, ผงเกลือแร่ (ORS), ยาช่วยย่อย" },
      { id: "sh_med_firstaid", text: "ยาสามัญ: พลาสเตอร์ยา, แผ่นแปะแก้ปวดเมื่อยขา/กล้ามเนื้อจากการเดิน" },
      { id: "sh_luggage", text: "กระเป๋าเดินทางใบใหญ่โหลดใต้เครื่อง (เสื้อผ้าหนา, ของเหลวเกิน 100ml) ติดป้ายชื่อ-เบอร์ภาษาอังกฤษ" }
    ]
  },
  personal: {
    rangsan: {
      key: "rangsan",
      name: "👨 ผู้เดินทาง 1 (Traveler 1)",
      themeClass: "rangsan",
      badgeColor: "#0284c7",
      items: [
        { id: "rs_passport", text: "หนังสือเดินทาง (Passport): อายุคงเหลือ > 6 เดือน" },
        { id: "rs_travelcard", text: "บัตร Travel Card ผูกกับ Alipay & WeChat Pay (ยืนยัน Real-Name แล้ว)" },
        { id: "rs_sim", text: "Travel SIM / Data Roaming จากไทย (ไม่บล็อก LINE, FB, Google)" },
        { id: "rs_powerbank", text: "พาวเวอร์แบงก์ (ไม่เกิน 20,000 mAh ถือขึ้นเครื่อง) + สายชาร์จ" },
        { id: "rs_phone_warm", text: "แผ่นอุ่นหลังมือถือ / ซองใส่มือถือกันแบตเตอรี่ดับในอากาศติดลบ" },
        { id: "rs_heattech", text: "Base Layer: ลองจอน / Heattech Ultra Warm แนบเนื้อ (3–4 ชุด)" },
        { id: "rs_fleece", text: "Mid Layer: เสื้อสเวตเตอร์ฟลีซ (Fleece) หรือไหมพรมหนา (2–3 ตัว)" },
        { id: "rs_vest", text: "Mid Layer: เสื้อกั๊กขนเป็ดบาง (Ultralight Down Vest) (1 ตัว)" },
        { id: "rs_coat", text: "Outer Layer: เสื้อโค้ทขนเป็ดตัวหนายาวกันลม-หิมะ (1–2 ตัว)" },
        { id: "rs_pants", text: "Outer Layer: กางเกงกันลมบุขนแกะ / กางเกงสกี (2–3 ตัว)" },
        { id: "rs_sleepwear", text: "ชุดนอนเนื้อหนานุ่มอบอุ่นสำหรับโรงแรม (2 ชุด)" },
        { id: "rs_boots", text: "รองเท้าลุยหิมะ Snow Boots บุขนหนา กันน้ำ กันลื่น ดอกยางลึก (+1 ไซส์)" },
        { id: "rs_socks", text: "ถุงเท้ากันหนาว Wool / Thermal Socks หนาพิเศษ (5–6 คู่)" },
        { id: "rs_gloves", text: "ถุงมือกันหนาวกันลมทัชสกรีนได้ + ถุงมือผ้าบางชั้นใน" },
        { id: "rs_hat", text: "หมวกไหมพรม / หมวกบุขนปิดคลุมหูมิดชิด (1–2 ใบ)" },
        { id: "rs_scarf", text: "ผ้าพันคอหนา หรือ ปลอกคอกันลม (Neck Warmer)" },
        { id: "rs_sunglasses", text: "แว่นกันแดด (ป้องกันแสงสะท้อนหิมะ Snow Blindness)" },
        { id: "rs_mask", text: "หน้ากากอนามัย / แมสก์ผ้าหนา ช่วยให้อากาศหายใจอุ่นขึ้น" },
        { id: "rs_skincare", text: "ลิปมันบำรุงเข้มข้น + ครีมบำรุงหน้า/ผิว + แฮนด์ครีม (อากาศแห้งจัด)" },
        { id: "rs_personal_med", text: "ยาประจำตัว (ถ้ามี ให้เตรียมเพียงพอ 6 วัน)" },
        { id: "rs_daypack", text: "กระเป๋าเป้สะพายหลัง (Daypack) พกของติดตัวขึ้นเครื่อง" }
      ]
    },
    sunisa: {
      key: "sunisa",
      name: "👩 ผู้เดินทาง 2 (Traveler 2)",
      themeClass: "sunisa",
      badgeColor: "#ec4899",
      items: [
        { id: "sn_passport", text: "หนังสือเดินทาง (Passport): อายุคงเหลือ > 6 เดือน" },
        { id: "sn_travelcard", text: "บัตร Travel Card ผูกกับ Alipay & WeChat Pay (ยืนยัน Real-Name แล้ว)" },
        { id: "sn_sim", text: "Travel SIM / Data Roaming จากไทย (ไม่บล็อก LINE, FB, Google)" },
        { id: "sn_powerbank", text: "พาวเวอร์แบงก์ (ไม่เกิน 20,000 mAh ถือขึ้นเครื่อง) + สายชาร์จ" },
        { id: "sn_phone_warm", text: "แผ่นอุ่นหลังมือถือ / ซองใส่มือถือกันแบตเตอรี่ดับในอากาศติดลบ" },
        { id: "sn_heattech", text: "Base Layer: ลองจอน / Heattech Ultra Warm แนบเนื้อ (3–4 ชุด)" },
        { id: "sn_fleece", text: "Mid Layer: เสื้อสเวตเตอร์ฟลีซ (Fleece) หรือไหมพรมหนา (2–3 ตัว)" },
        { id: "sn_vest", text: "Mid Layer: เสื้อกั๊กขนเป็ดบาง (Ultralight Down Vest) (1 ตัว)" },
        { id: "sn_coat", text: "Outer Layer: เสื้อโค้ทขนเป็ดตัวหนายาวกันลม-หิมะ (1–2 ตัว)" },
        { id: "sn_pants", text: "Outer Layer: กางเกงกันลมบุขนแกะ / กางเกงสกี (2–3 ตัว)" },
        { id: "sn_sleepwear", text: "ชุดนอนเนื้อหนานุ่มอบอุ่นสำหรับโรงแรม (2 ชุด)" },
        { id: "sn_boots", text: "รองเท้าลุยหิมะ Snow Boots บุขนหนา กันน้ำ กันลื่น ดอกยางลึก (+1 ไซส์)" },
        { id: "sn_socks", text: "ถุงเท้ากันหนาว Wool / Thermal Socks หนาพิเศษ (5–6 คู่)" },
        { id: "sn_gloves", text: "ถุงมือกันหนาวกันลมทัชสกรีนได้ + ถุงมือผ้าบางชั้นใน" },
        { id: "sn_hat", text: "หมวกไหมพรม / หมวกบุขนนุ่มปิดคลุมหูมิดชิด (1–2 ใบ)" },
        { id: "sn_earmuffs", text: "ที่ปิดหูบุขน (Earmuffs) กันลมหนาวบาดหู (พิเศษสำหรับผู้เดินทาง 2)" },
        { id: "sn_scarf", text: "ผ้าพันคอหนานุ่ม หรือ ปลอกคอกันลม (Neck Warmer)" },
        { id: "sn_sunglasses", text: "แว่นกันแดด (ป้องกันแสงสะท้อนหิมะ Snow Blindness)" },
        { id: "sn_mask", text: "หน้ากากอนามัย / แมสก์ผ้าหนา ช่วยให้อากาศหายใจอุ่นขึ้น" },
        { id: "sn_skincare", text: "ลิปบาล์มบำรุงเข้มข้น + ครีมบำรุงผิวหน้า + แฮนด์ครีม + น้ำตาเทียม" },
        { id: "sn_personal_med", text: "ยาประจำตัว (ถ้ามี ให้เตรียมเพียงพอ 6 วัน)" },
        { id: "sn_daypack", text: "กระเป๋าเป้สะพายหลัง (Daypack) พกของติดตัวขึ้นเครื่อง" }
      ]
    }
  }
};

let checklistFilter = "all";

function loadChecklistState() {
  try {
    const raw = localStorage.getItem(HARBIN_CHECKLIST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveChecklistState(state) {
  try {
    localStorage.setItem(HARBIN_CHECKLIST_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save checklist state:", e);
  }
}

function getAllChecklistItemsFlat() {
  const list = [...HARBIN_CHECKLIST_DATA.shared.items];
  list.push(...HARBIN_CHECKLIST_DATA.personal.rangsan.items);
  list.push(...HARBIN_CHECKLIST_DATA.personal.sunisa.items);
  return list;
}

function renderChecklist() {
  const container = document.getElementById("checklistContainer");
  const state = loadChecklistState();

  const allItems = getAllChecklistItemsFlat();
  const totalCount = allItems.length;
  const doneCount = allItems.filter(i => state[i.id]).length;
  const pendingCount = totalCount - doneCount;
  const percent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  const progressText = document.getElementById("checklistProgressText");
  const percentBadge = document.getElementById("checklistPercentBadge");
  const progressFill = document.getElementById("checklistProgressFill");
  const headerBadge = document.getElementById("headerChecklistBadge");

  const countAll = document.getElementById("countFilterAll");
  const countPending = document.getElementById("countFilterPending");
  const countDone = document.getElementById("countFilterDone");

  if (progressText) progressText.textContent = `${doneCount} / ${totalCount} รายการ (${percent}%)`;
  if (percentBadge) percentBadge.textContent = `${percent}%`;
  if (progressFill) progressFill.style.width = `${percent}%`;
  if (headerBadge) headerBadge.textContent = `${percent}%`;

  if (countAll) countAll.textContent = totalCount;
  if (countPending) countPending.textContent = pendingCount;
  if (countDone) countDone.textContent = doneCount;

  if (!container) return;
  container.innerHTML = "";

  // 1. Render Shared Items Section
  const sharedItems = HARBIN_CHECKLIST_DATA.shared.items;
  const visibleShared = sharedItems.filter(item => {
    const isDone = !!state[item.id];
    if (checklistFilter === "pending") return !isDone;
    if (checklistFilter === "done") return isDone;
    return true;
  });

  const sharedDone = sharedItems.filter(i => state[i.id]).length;

  if (visibleShared.length > 0 || checklistFilter === "all") {
    const sharedCard = document.createElement("div");
    sharedCard.className = "checklist-shared-card";
    sharedCard.innerHTML = `
      <div class="checklist-shared-header">
        <span class="checklist-shared-title">${HARBIN_CHECKLIST_DATA.shared.title}</span>
        <span class="checklist-shared-pill">พร้อม ${sharedDone} / ${sharedItems.length}</span>
      </div>
      <div class="checklist-items-list" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:6px;">
        ${visibleShared.map(item => {
          const isChecked = !!state[item.id];
          return `
            <label class="checklist-item ${isChecked ? 'checked' : ''}" data-id="${item.id}">
              <input type="checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''}>
              <span class="cl-item-text">${item.text}</span>
              ${isChecked ? '<span class="cl-item-badge">✓ พร้อมแล้ว</span>' : ''}
            </label>
          `;
        }).join("")}
      </div>
    `;
    container.appendChild(sharedCard);
  }

  // 2. Render 2-Column Split for Personal Items (Traveler 1 & Traveler 2)
  const twoColGrid = document.createElement("div");
  twoColGrid.className = "checklist-two-col-grid";

  ["rangsan", "sunisa"].forEach(key => {
    const person = HARBIN_CHECKLIST_DATA.personal[key];
    const visiblePersonal = person.items.filter(item => {
      const isDone = !!state[item.id];
      if (checklistFilter === "pending") return !isDone;
      if (checklistFilter === "done") return isDone;
      return true;
    });

    const personDone = person.items.filter(i => state[i.id]).length;

    const col = document.createElement("div");
    col.className = `cl-person-column ${person.themeClass}`;
    col.innerHTML = `
      <div class="cl-person-header">
        <span class="cl-person-name">${person.name}</span>
        <span class="cl-person-progress-pill">พร้อม ${personDone} / ${person.items.length}</span>
      </div>
      <div class="checklist-items-list">
        ${visiblePersonal.map(item => {
          const isChecked = !!state[item.id];
          return `
            <label class="checklist-item ${isChecked ? 'checked' : ''}" data-id="${item.id}">
              <input type="checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''}>
              <span class="cl-item-text">${item.text}</span>
              ${isChecked ? '<span class="cl-item-badge">✓ พร้อมแล้ว</span>' : ''}
            </label>
          `;
        }).join("")}
        ${visiblePersonal.length === 0 ? '<div style="font-size:0.75rem; color:#94a3b8; text-align:center; padding:12px 0;">ไม่มีรายการในหมวดนี้</div>' : ''}
      </div>
    `;
    twoColGrid.appendChild(col);
  });

  container.appendChild(twoColGrid);

  // Bind item change events
  container.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener("change", (e) => {
      const itemId = e.target.dataset.id;
      const checked = e.target.checked;
      const currentState = loadChecklistState();
      if (checked) {
        currentState[itemId] = true;
      } else {
        delete currentState[itemId];
      }
      saveChecklistState(currentState);
      renderChecklist();
    });
  });
}

function initChecklistModule() {
  const modal = document.getElementById("checklistModalBackdrop");
  const openModal = () => {
    if (modal) {
      modal.hidden = false;
      renderChecklist();
    }
  };
  const closeModal = () => {
    if (modal) modal.hidden = true;
  };

  document.getElementById("btnOpenChecklistModal")?.addEventListener("click", openModal);
  document.getElementById("btnInlineChecklist")?.addEventListener("click", openModal);
  document.getElementById("btnCloseChecklistModal")?.addEventListener("click", closeModal);
  document.getElementById("btnCloseChecklistModalBottom")?.addEventListener("click", closeModal);

  // Close on outside click
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Filter Buttons
  document.querySelectorAll("#checklistFilterGroup .cl-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#checklistFilterGroup .cl-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      checklistFilter = btn.dataset.filter || "all";
      renderChecklist();
    });
  });

  // Check All Button
  document.getElementById("btnChecklistCheckAll")?.addEventListener("click", () => {
    const allState = {};
    const allItems = getAllChecklistItemsFlat();
    allItems.forEach(item => {
      allState[item.id] = true;
    });
    saveChecklistState(allState);
    renderChecklist();
    if (typeof showToast === "function") showToast("✓ ติ๊กเตรียมพร้อมแล้วทุกรายการ!");
  });

  // Reset Button
  document.getElementById("btnChecklistReset")?.addEventListener("click", () => {
    if (confirm("ต้องการรีเซ็ตสถานะเช็คลิสต์ทั้งหมดเพื่อเริ่มเช็คใหม่หรือไม่?")) {
      saveChecklistState({});
      renderChecklist();
      if (typeof showToast === "function") showToast("🔄 รีเซ็ตสถานะเช็คลิสต์เรียบร้อยแล้ว");
    }
  });

  // Print Button
  document.getElementById("btnChecklistPrint")?.addEventListener("click", () => {
    window.print();
  });

  // Initial calculation for header badge
  renderChecklist();
}
