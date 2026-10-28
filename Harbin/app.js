// ============================================================================
// HARBIN (哈尔滨) 4-COLUMN VERTICAL TRIP PLANNER & AMAP ENGLISH MAP LOGIC
// - Section 1: Activity Timeline (Walk, Eat, Visit, Transit) ordered by time
// - Section 2: Chooses (28+ Harbin Attractions & Food Spots, Drag & Drop to ANY queue slot)
// - Sections 3 & 4: AMAP Harbin Interactive Map (English Labels, Pinning, Route Lines)
// ============================================================================

const STORAGE_KEY_TIMELINE = "harbin_planner_timeline_v2";
const STORAGE_KEY_CUSTOM_SPOTS = "harbin_planner_custom_spots_v2";

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
  19: "assets/places/harbin_19_music_park.jpg"
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
let currentDayKey = "day1";
let currentChooseCategory = "all";
let currentChooseSearch = "";

// Drag & Drop State
let draggedPayload = null; // { source: 'chooses' | 'timeline', spotId?, timelineIndex?, uid? }

// Map State
let map = null;
let tileLayerInstance = null;
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
// 3. RENDER ALL SECTIONS
// ============================================================================
function renderAll() {
  renderDayTabs();
  renderTimelineSection();
  renderChoosesSection();
  updateInsertPositionDropdown();
  renderMapMarkersAndRoute();
}

function renderDayTabs() {
  const dayObj = timelineState[currentDayKey];
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.day === currentDayKey);
  });
  const titleEl = document.getElementById("currentDayTitle");
  if (titleEl && dayObj) {
    titleEl.textContent = `${dayObj.labelEn}: ${dayObj.titleTh}`;
  }
}

// ============================================================================
// 4. SECTION 1: TIMELINE RENDERING & DRAG-AND-DROP QUEUE INSERTION
// ============================================================================
function renderTimelineSection() {
  const container = document.getElementById("timelineListContainer");
  const dayObj = timelineState[currentDayKey];
  if (!container || !dayObj) return;

  const items = dayObj.items || [];
  let totalDurationMins = 0;
  items.forEach(it => {
    totalDurationMins += Number(it.duration || 60);
  });

  // Update summary badges
  const summaryBadge = document.getElementById("timelineSummaryBadge");
  if (summaryBadge) {
    const hrs = (totalDurationMins / 60).toFixed(1);
    summaryBadge.textContent = `${items.length} คิว · ${hrs} ชม.`;
  }
  const mobCount = document.getElementById("mobTimelineCount");
  if (mobCount) mobCount.textContent = items.length;

  container.innerHTML = "";

  // Always render Drop Zone #0 at the very top of the timeline
  container.appendChild(createTimelineDropZone(0));

  if (items.length === 0) {
    const emptyBox = document.createElement("div");
    emptyBox.style.cssText = "text-align:center; padding:28px 12px; color:#64748b; font-size:0.8rem; border:1.5px dashed #cbd5e1; border-radius:10px; margin:8px 0;";
    emptyBox.innerHTML = `
      <div style="font-size:1.8rem; margin-bottom:6px;">❄️</div>
      <strong>ยังไม่มีคิวกิจกรรมในวันนี้</strong>
      <p style="margin-top:4px; font-size:0.74rem;">ลากสถานที่หรือร้านอาหารจาก <strong>ส่วนที่ 2 (Chooses)</strong> มาวางแทรกที่นี่ได้เลย!</p>
    `;
    container.appendChild(emptyBox);
    return;
  }

  items.forEach((item, index) => {
    const spot = getSpotById(item.spotId);
    const actType = item.actType || (spot ? spot.activityType : "visit") || "visit";
    const actMeta = ACTIVITY_META[actType] || ACTIVITY_META.visit;

    const startMins = timeToMinutes(item.time);
    const endMins = startMins + Number(item.duration || 60);
    const endTimeStr = minutesToTime(endMins);

    const nameEn = item.customNameEn || (spot ? spot.nameEn : "Custom Activity");
    const nameTh = item.customNameTh || (spot ? spot.nameTh : "กิจกรรมกำหนดเอง");
    const nameZh = spot ? spot.nameZh : "哈尔滨";
    const noteText = item.noteTh || item.noteEn || (spot ? spot.ratingDescTh : "");

    // Calculate distance to next stop
    let legHtml = "";
    if (index < items.length - 1) {
      const nextItem = items[index + 1];
      const nextSpot = getSpotById(nextItem.spotId);
      const c1 = item.customCoords || (spot ? spot.coords : null);
      const c2 = nextItem.customCoords || (nextSpot ? nextSpot.coords : null);
      if (c1 && c2) {
        const distKm = calcDistanceKm(c1, c2);
        const leg = estimateTravelLeg(distKm);
        legHtml = `
          <div class="tl-leg-connector" title="Distance to Stop #${index + 2}">
            <span>⬇ Next: Stop #${index + 2} (${leg.mode})</span>
            <strong>${leg.textEn}</strong>
          </div>
        `;
      }
    }

    const card = document.createElement("div");
    card.className = `timeline-card act-${actType}`;
    card.draggable = true;
    card.dataset.index = index;
    card.dataset.uid = item.uid;

    card.innerHTML = `
      <div class="tl-card-top">
        <div class="tl-time-group">
          <span class="tl-queue-num" title="Queue #${index + 1}">${index + 1}</span>
          <span class="tl-time-badge" title="Click Edit to change time">${item.time} - ${endTimeStr} (${item.duration}m)</span>
          <span class="tl-act-badge ${actType}">${actMeta.icon} ${actMeta.labelTh}</span>
        </div>
        <div class="tl-card-actions">
          <button class="tl-btn" data-action="up" title="เลื่อนคิวขึ้น (Move Up)" ${index === 0 ? "disabled" : ""}>▲</button>
          <button class="tl-btn" data-action="down" title="เลื่อนคิวลง (Move Down)" ${index === items.length - 1 ? "disabled" : ""}>▼</button>
          <button class="tl-btn" data-action="map" title="ดูหมุดบนแผนที่ (Focus on Map)">📍</button>
          <button class="tl-btn" data-action="edit" title="แก้ไขเวลา/กิจกรรม (Edit)">✏️</button>
          <button class="tl-btn delete" data-action="delete" title="ลบออกจากคิว (Remove)">🗑️</button>
        </div>
      </div>
      <div class="tl-card-title" data-action="map">${nameEn}</div>
      <div class="tl-card-sub">${nameTh} · <span style="color:#0284c7;">${nameZh}</span></div>
      ${noteText ? `<div class="tl-card-note">${noteText}</div>` : ""}
      ${legHtml}
    `;

    // Drag events for reordering inside Timeline
    card.addEventListener("dragstart", e => {
      draggedPayload = {
        source: "timeline",
        timelineIndex: index,
        uid: item.uid
      };
      card.classList.add("dragging");
      document.body.classList.add("is-dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", JSON.stringify(draggedPayload));
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      document.body.classList.remove("is-dragging");
      document.querySelectorAll(".timeline-dropzone.drag-over").forEach(el => el.classList.remove("drag-over"));
    });

    // Also allow dropping directly onto a timeline card (inserts before or after based on mouse Y)
    card.addEventListener("dragover", e => {
      e.preventDefault();
      const rect = card.getBoundingClientRect();
      const isBottomHalf = e.clientY > rect.top + rect.height / 2;
      const targetZoneIndex = isBottomHalf ? index + 1 : index;
      document.querySelectorAll(".timeline-dropzone").forEach(dz => {
        dz.classList.toggle("drag-over", Number(dz.dataset.insertIndex) === targetZoneIndex);
      });
    });

    card.addEventListener("drop", e => {
      e.preventDefault();
      const rect = card.getBoundingClientRect();
      const isBottomHalf = e.clientY > rect.top + rect.height / 2;
      const targetZoneIndex = isBottomHalf ? index + 1 : index;
      handleDropAtTimelineIndex(targetZoneIndex);
    });

    // Action buttons inside card
    card.addEventListener("click", e => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === "up") moveTimelineItem(index, index - 1);
      else if (action === "down") moveTimelineItem(index, index + 1);
      else if (action === "delete") removeTimelineItem(index);
      else if (action === "edit") openEditTimelineModal(index);
      else if (action === "map") focusTimelineItemOnMap(index);
    });

    container.appendChild(card);

    // Render Drop Zone right after this item (index + 1)
    container.appendChild(createTimelineDropZone(index + 1));
  });
}

function createTimelineDropZone(insertIndex) {
  const dz = document.createElement("div");
  dz.className = "timeline-dropzone";
  dz.dataset.insertIndex = insertIndex;
  dz.innerHTML = `<span class="drop-hint">➕ วางที่นี่เพื่อแทรกคิวที่ #${insertIndex + 1} (Insert at Queue #${insertIndex + 1})</span>`;

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
    handleDropAtTimelineIndex(insertIndex);
  });

  // Clicking a dropzone when not dragging opens the quick-add modal for that exact queue position
  dz.addEventListener("click", () => {
    openCustomActivityModal({ queuePos: insertIndex });
  });

  return dz;
}

function handleDropAtTimelineIndex(targetIndex) {
  document.body.classList.remove("is-dragging");
  document.querySelectorAll(".timeline-dropzone.drag-over").forEach(el => el.classList.remove("drag-over"));

  if (!draggedPayload) return;

  const items = timelineState[currentDayKey].items;

  if (draggedPayload.source === "chooses") {
    insertSpotIntoTimeline(draggedPayload.spotId, targetIndex);
  } else if (draggedPayload.source === "timeline") {
    const fromIndex = draggedPayload.timelineIndex;
    if (fromIndex === targetIndex || fromIndex + 1 === targetIndex) {
      draggedPayload = null;
      return;
    }
    const [moved] = items.splice(fromIndex, 1);
    const adjustedTarget = fromIndex < targetIndex ? targetIndex - 1 : targetIndex;
    items.splice(adjustedTarget, 0, moved);
    autoRecalculateDayTimes(false);
    saveState();
    renderAll();
    showToast(`สลับคิวไปที่ลำดับ #${adjustedTarget + 1} เรียบร้อยแล้ว`);
  }

  draggedPayload = null;
}

function insertSpotIntoTimeline(spotId, targetIndex = "end") {
  const spot = getSpotById(spotId);
  if (!spot) return;

  const items = timelineState[currentDayKey].items;
  const insertAt = targetIndex === "end" || targetIndex === undefined || targetIndex > items.length
    ? items.length
    : Math.max(0, Number(targetIndex));

  // Determine sensible start time based on neighbor
  let suggestedTime = "09:30";
  if (insertAt > 0 && items[insertAt - 1]) {
    const prev = items[insertAt - 1];
    const prevEnd = timeToMinutes(prev.time) + Number(prev.duration || 60) + 15;
    suggestedTime = minutesToTime(prevEnd);
  } else if (items.length > 0 && items[0]) {
    const firstStart = Math.max(360, timeToMinutes(items[0].time) - Number(spot.defaultDuration || 60) - 15);
    suggestedTime = minutesToTime(firstStart);
  }

  const newItem = {
    uid: `tl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    spotId: spot.id,
    time: suggestedTime,
    duration: spot.defaultDuration || 60,
    actType: spot.activityType || "visit",
    noteTh: spot.shortBulletsTh && spot.shortBulletsTh[0] ? spot.shortBulletsTh[0] : spot.ratingDescTh,
    noteEn: spot.shortBulletsEn && spot.shortBulletsEn[0] ? spot.shortBulletsEn[0] : spot.ratingDescEn
  };

  items.splice(insertAt, 0, newItem);

  // If inserted in the middle, cascade subsequent times forward smoothly
  if (insertAt < items.length - 1) {
    cascadeTimesFromIndex(insertAt);
  }

  saveState();
  renderAll();
  focusSpotOnMap(spot.id, true);
  showToast(`➕ แทรก "${spot.nameEn}" ลงในคิวที่ #${insertAt + 1} แล้ว!`);
}

function cascadeTimesFromIndex(startIndex) {
  const items = timelineState[currentDayKey].items;
  for (let i = startIndex + 1; i < items.length; i++) {
    const prev = items[i - 1];
    const prevEndMins = timeToMinutes(prev.time) + Number(prev.duration || 60) + 15;
    const currStartMins = timeToMinutes(items[i].time);
    if (currStartMins < prevEndMins) {
      items[i].time = minutesToTime(prevEndMins);
    }
  }
}

function autoRecalculateDayTimes(notify = true) {
  const items = timelineState[currentDayKey].items;
  if (!items.length) return;
  let cursorMins = timeToMinutes(items[0].time || "09:00");
  items.forEach((item, idx) => {
    if (idx === 0) {
      item.time = minutesToTime(cursorMins);
    } else {
      item.time = minutesToTime(cursorMins);
    }
    cursorMins += Number(item.duration || 60) + 15; // 15m buffer between activities
  });
  saveState();
  renderAll();
  if (notify) showToast("⏱️ จัดเรียงเวลาต่อเนื่องอัตโนมัติเรียบร้อยแล้ว!");
}

function moveTimelineItem(fromIdx, toIdx) {
  const items = timelineState[currentDayKey].items;
  if (toIdx < 0 || toIdx >= items.length) return;
  const [moved] = items.splice(fromIdx, 1);
  items.splice(toIdx, 0, moved);
  autoRecalculateDayTimes(false);
  saveState();
  renderAll();
  showToast(`เลื่อนคิวไปที่ลำดับ #${toIdx + 1} แล้ว`);
}

function removeTimelineItem(index) {
  const items = timelineState[currentDayKey].items;
  const removed = items.splice(index, 1)[0];
  saveState();
  renderAll();
  const spot = removed ? getSpotById(removed.spotId) : null;
  showToast(`🗑️ ลบ "${spot ? spot.nameEn : (removed?.customNameEn || "Activity")}" ออกจาก Timeline แล้ว`);
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
// 5. SECTION 2: CHOOSES (ATTRACTION & FOOD CARDS) RENDERING
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
    card.draggable = true;
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
          <button class="btn-choose-insert" data-action="insert" title="แทรกเข้า Timeline ตามตำแหน่งคิวที่เลือก">
            ➕ แทรกคิว (Insert)
          </button>
          <button class="btn-choose-mini" data-action="pin-map" title="ดูหมุดบนแผนที่ AMAP">
            📍 Map
          </button>
          <button class="btn-choose-mini" data-action="detail" title="ดูข้อมูลสถานที่ฉบับเต็ม">
            📖 ข้อมูล
          </button>
        </div>
      </div>
    `;

    // Drag events from Section 2 (Chooses) to Section 1 (Timeline)
    card.addEventListener("dragstart", e => {
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
      document.querySelectorAll(".timeline-dropzone.drag-over").forEach(el => el.classList.remove("drag-over"));
    });

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
    if (!isPinModeActive) return;
    handleMapPinClick(e.latlng);
  });

  // Right-click (contextmenu) anywhere on map also lets user drop a custom pin!
  map.on("contextmenu", e => {
    handleMapPinClick(e.latlng);
  });
}

function setMapTileLayer(layerKey) {
  currentMapLayerKey = layerKey;
  const cfg = MAP_TILE_LAYERS[layerKey] || MAP_TILE_LAYERS.amap_en_hybrid;

  if (tileLayerInstance) {
    map.removeLayer(tileLayerInstance);
  }

  tileLayerInstance = L.tileLayer(cfg.baseUrl, {
    subdomains: cfg.subdomains,
    maxZoom: 18,
    attribution: cfg.attribution
  }).addTo(map);

  renderEnglishGeoLabels();
  renderMapMarkersAndRoute();
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

function renderMapMarkersAndRoute() {
  if (!map || !markerLayerGroup || !routeLayerGroup) return;

  markerLayerGroup.clearLayers();
  routeLayerGroup.clearLayers();

  const dayObj = timelineState[currentDayKey];
  const dayItems = dayObj ? dayObj.items : [];

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
    const queueNums = spotQueueMap.get(Number(spot.id)) || [];
    const isActiveInQueue = queueNums.length > 0;

    if (!showAllHarbinPins && !isActiveInQueue) return;

    const displayPos = getDisplayCoords(spot.coords);
    const badgeText = isActiveInQueue ? queueNums.join(",") : (spot.doodleIcon || "•");
    const bgColor = isActiveInQueue
      ? "#0284c7"
      : (spot.isCustomPin ? "#e11d48" : (spot.categoryColor || "#475569"));

    const shortEnName = spot.nameEn.length > 26 ? spot.nameEn.slice(0, 24) + "…" : spot.nameEn;

    const pinHtml = `
      <div class="harbin-map-pin ${isActiveInQueue ? "is-active-queue" : ""}">
        <div class="pin-bubble" style="background:${bgColor};">
          <span class="pin-bubble-inner">${badgeText}</span>
        </div>
        ${showPermanentEnLabels ? `<div class="pin-en-label">${isActiveInQueue ? `#${queueNums[0]} ` : ""}${shortEnName}</div>` : ""}
      </div>
    `;

    const icon = L.divIcon({
      className: "custom-harbin-pin-container",
      html: pinHtml,
      iconSize: [140, 56],
      iconAnchor: [70, 32],
      popupAnchor: [0, -28]
    });

    const marker = L.marker(displayPos, {
      icon,
      zIndexOffset: isActiveInQueue ? 1000 : 100
    });

    marker.bindPopup(createEnglishPopupHtml(spot, queueNums));
    marker.addTo(markerLayerGroup);
    spot._leafletMarker = marker;
  });

  // 2. Render Custom Timeline Items that don't reference a catalog spotId
  dayItems.forEach((it, idx) => {
    if (it.spotId === undefined || it.spotId === null || it.spotId === "") {
      if (!it.customCoords) return;
      const displayPos = getDisplayCoords(it.customCoords);
      const shortEn = (it.customNameEn || `Activity #${idx + 1}`).slice(0, 24);
      const pinHtml = `
        <div class="harbin-map-pin is-active-queue">
          <div class="pin-bubble" style="background:#e11d48;">
            <span class="pin-bubble-inner">${idx + 1}</span>
          </div>
          ${showPermanentEnLabels ? `<div class="pin-en-label">#${idx + 1} ${shortEn}</div>` : ""}
        </div>
      `;
      const icon = L.divIcon({
        className: "custom-harbin-pin-container",
        html: pinHtml,
        iconSize: [140, 56],
        iconAnchor: [70, 32],
        popupAnchor: [0, -28]
      });
      L.marker(displayPos, { icon, zIndexOffset: 1000 }).addTo(markerLayerGroup);
    }
  });

  // 3. Render Timeline Route Path & Update English Route Bar
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

  if (routeNodes.length >= 2) {
    const latlngs = routeNodes.map(n => n.displayCoords);

    if (isRouteVisible) {
      // Outer glow route line
      L.polyline(latlngs, {
        color: "#0284c7",
        weight: 7,
        opacity: 0.25,
        lineCap: "round",
        lineJoin: "round"
      }).addTo(routeLayerGroup);

      // Inner dashed directional line
      L.polyline(latlngs, {
        color: "#0284c7",
        weight: 3.5,
        opacity: 0.95,
        dashArray: "8, 8",
        lineCap: "round"
      }).addTo(routeLayerGroup);
    }

    // Calculate segment distances and place midpoint English labels
    for (let i = 0; i < routeNodes.length - 1; i++) {
      const a = routeNodes[i];
      const b = routeNodes[i + 1];
      const segKm = calcDistanceKm(a.gcjCoords, b.gcjCoords);
      const leg = estimateTravelLeg(segKm);
      totalDistKm += segKm;
      totalTravelMins += leg.mins;

      if (isRouteVisible) {
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
          const pill = `
            <span class="route-node-pill" onclick="window.appFocusTimelineIndex(${node.index})" title="${node.time} - ${node.nameEn}">
              <span class="num">${node.queueNum}</span>
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
  focusTimelineItemOnMap(index);
};

function focusSpotOnMap(spotId, openPopup = true) {
  const spot = getSpotById(spotId);
  if (!spot || !map) return;
  const pos = getDisplayCoords(spot.coords);
  map.flyTo(pos, 15, { duration: 0.9 });
  if (openPopup && spot._leafletMarker) {
    setTimeout(() => {
      spot._leafletMarker.openPopup();
    }, 450);
  }
}

function focusTimelineItemOnMap(index) {
  const items = timelineState[currentDayKey]?.items || [];
  const item = items[index];
  if (!item) return;
  if (item.spotId !== undefined && item.spotId !== null && item.spotId !== "") {
    focusSpotOnMap(item.spotId, true);
  } else if (item.customCoords) {
    const pos = getDisplayCoords(item.customCoords);
    map.flyTo(pos, 15, { duration: 0.9 });
  }
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

function openEditTimelineModal(index) {
  const items = timelineState[currentDayKey]?.items || [];
  const item = items[index];
  if (!item) return;
  const spot = getSpotById(item.spotId);
  const coords = item.customCoords || (spot ? spot.coords : [45.7725, 126.6208]);

  openCustomActivityModal({
    editUid: item.uid,
    spotId: item.spotId !== undefined ? item.spotId : "",
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
  // Day Selector Tabs
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentDayKey = btn.dataset.day;
      renderAll();
      fitCurrentTimelineRoute();
    });
  });

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
    if (DEFAULT_HARBIN_TIMELINE[currentDayKey]) {
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

  // Map Toolbar Controls
  document.getElementById("btnPinMode")?.addEventListener("click", () => togglePinMode());
  document.getElementById("btnCancelPinMode")?.addEventListener("click", () => togglePinMode(false));

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

  // Escape key closes modals or cancels Pin Mode
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (isPinModeActive) togglePinMode(false);
      document.getElementById("activityModalBackdrop").hidden = true;
      document.getElementById("detailModalBackdrop").hidden = true;
    }
  });
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
