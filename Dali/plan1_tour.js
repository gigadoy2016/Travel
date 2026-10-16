// Plan 1 Interactive Tour & Time-Lapse Engine
// Features: List Mode (6 Days Itinerary) + Time-Lapse Mode (Final Fantasy Tactics 3D Diorama + Tactical Mini-Map + Station-to-Station Train Animation)

let plan1ActiveStepIndex = 0;
let plan1IsPlaying = false;
let plan1Timer = null;
let plan1Speed = 1; // 1x or 2x
let plan1VehicleMarker = null;
let plan1ChibiMarker = null;
let plan1ActiveRouteLine = null;
let plan1AnimFrameId = null;
let plan1TrainPhaseTimer1 = null;
let plan1TrainPhaseTimer2 = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  if (typeof map !== 'undefined' && map) {
    map.setMinZoom(6);
  }
  setupPlan1TourUI();
});

// Setup Plan 1 UI Elements & Event Listeners
function setupPlan1TourUI() {
  const btnAutoTour = document.getElementById("btnAutoTour");
  if (btnAutoTour) {
    btnAutoTour.innerHTML = `<span>🎬</span> ทัวร์แผน 1 (Time-Lapse)`;
    btnAutoTour.title = "เปิดทัวร์อัตโนมัติ & ไทม์แลปส์ แผน 1: หุบเขาเสือกระโจน & ต้าหลี่ ซานโตรินี (Final Fantasy Tactics Edition)";
    
    btnAutoTour.onclick = (e) => {
      e.preventDefault();
      openPlan1Modal();
    };
  }

  injectPlan1DOMElements();
}

// Inject Required HTML Containers into DOM
function injectPlan1DOMElements() {
  if (document.getElementById("plan1ModalOverlay")) return;

  // 1. Plan 1 Master Modal (List View & Tour Hub)
  const modalHtml = `
    <div class="plan1-modal-overlay" id="plan1ModalOverlay">
      <div class="plan1-modal-card">
        <!-- Modal Header -->
        <div class="plan1-modal-header">
          <div class="plan1-modal-title-group">
            <div class="plan1-badge-pill">⭐ ตัวเลือกแนะนำอันดับ 1 · แผนปรับปรุงใหม่</div>
            <h2>🎬 ทัวร์แผน 1: มนต์เสน่ห์หุบเขาเสือกระโจน & ต้าหลี่ ซานโตรินี</h2>
            <p>ทริปสโลว์ไลฟ์ 6 วัน 5 คืน (คุนหมิง ➔ ต้าหลี่ ➔ ลี่เจียง ➔ เสือกระโจน) · Final Fantasy Tactics 3D Animation</p>
          </div>
          <button class="plan1-modal-close" id="plan1ModalCloseBtn" title="ปิดหน้าต่าง">✕</button>
        </div>

        <!-- Mode Switcher Tabs -->
        <div class="plan1-tab-bar">
          <button class="plan1-tab-btn active" id="tabPlan1List">
            <span>📋</span> กำหนดการเดินทาง 6 วัน (List Mode)
          </button>
          <button class="plan1-tab-btn" id="tabPlan1Timelapse">
            <span>⚔️</span> เริ่มดูไทม์แลปส์ 3D FFT (Time-Lapse Mode)
          </button>
        </div>

        <!-- Modal Body Content -->
        <div class="plan1-modal-body" id="plan1ModalBody">
          <!-- Rendered dynamically by renderPlan1List() -->
        </div>

        <!-- Modal Footer CTA -->
        <div class="plan1-modal-footer">
          <div class="plan1-footer-summary">
            <span>🏔️ ความสูง: 1,800 - 2,400 ม.</span>
            <span>💰 งบประมาณ: ~34,900 – 47,500 บาท/ท่าน</span>
          </div>
          <button class="plan1-btn-launch-timelapse" id="btnLaunchTimelapse">
            <span>⚔️</span> เริ่มเล่นไทม์แลปส์ 3D FFT (Start Time-Lapse)
          </button>
        </div>
      </div>
    </div>

    <!-- 2. Final Fantasy Tactics 3D Isometric Diorama Stage (Central Stage) -->
    <div class="fft-diorama-theater" id="fftDioramaTheater">
      <div class="fft-stage-3d-wrapper" id="fftStage3D">
        
        <!-- Background Isometric Diorama Image Layer -->
        <div class="fft-diorama-card" id="fftDioramaCard">
          <img id="fftDioramaImg" class="fft-diorama-img" src="assets/fft/airport.jpg" alt="Final Fantasy Tactics Stage" />
          <div class="fft-scanline-fx"></div>
          <div class="fft-vignette-fx"></div>
          <div class="fft-gold-aura" id="fftGoldAura"></div>
          <div class="fft-speed-lines" id="fftSpeedLines"></div>
        </div>

        <!-- Top-Left: Active Turn Header (Never Collides) -->
        <div class="fft-turn-card" id="fftTurnCard">
          <div class="fft-turn-badge" id="fftTurnBadge">TURN 01 / 14</div>
          <div class="fft-turn-unit-info">
            <span class="fft-swords-icon">⚔️</span>
            <div>
              <strong id="fftActiveUnit">Ramza Beoulve</strong>
              <span class="fft-job-title" id="fftJobTitle">Voyager / นักเดินทาง</span>
            </div>
          </div>
        </div>

        <!-- Top-Center: Tactical Location Card (Centered, Never Collides) -->
        <div class="fft-location-card" id="fftLocationCard">
          <div class="fft-location-flag">📍 <span id="fftLocationName">KUNMING AIRPORT (KMG) · GATE 25</span></div>
          <div class="fft-location-sub"><span id="fftLocationElev">ELEV: 1,970m</span> · MAP: 16x16 · WEATHER: CLEAR</div>
        </div>

      </div>
    </div>

    <!-- 3. Bottom Dock: Vertical Stack (Zero Overlap Guaranteed!) -->
    <div class="fft-bottom-dock" id="fftBottomDock">
      
      <!-- Train Station-to-Station Live Progress Track HUD -->
      <div class="fft-train-transit-hud" id="fftTrainTransitHud" style="display: none;">
        <div class="transit-station-tag origin" id="transitOriginStation">🚉 昆明站 (Kunming)</div>
        <div class="transit-track-line">
          <div class="transit-progress-fill" id="transitProgressFill"></div>
          <div class="transit-train-icon" id="transitTrainIcon">🚅</div>
        </div>
        <div class="transit-station-tag dest" id="transitDestStation">🏁 大理站 (Dali)</div>
        <div class="transit-speed-badge" id="transitSpeedBadge">⚡ 250 km/h</div>
      </div>

      <!-- Row 1: Classic FFT Aged Parchment Dialogue Box with Integrated Unit Badge -->
      <div class="fft-parchment-dialogue-box" id="fftParchmentBox">
        <div class="parchment-corner top-left"></div>
        <div class="parchment-corner top-right"></div>
        <div class="parchment-corner bottom-left"></div>
        <div class="parchment-corner bottom-right"></div>
        
        <div class="parchment-inner-layout">
          <!-- Unit Portrait & Mini Stats (Cleanly on Left) -->
          <div class="parchment-unit-avatar-box">
            <div class="unit-avatar-face" id="fftAvatarFace">🧑‍🌾</div>
            <div class="unit-avatar-stats">
              <strong id="fftActiveUnitName">Ramza</strong>
              <div class="avatar-bars">
                <span class="bar-tag hp">HP <span id="fftHpVal">999/999</span></span>
                <span class="bar-tag mp">MP <span id="fftMpVal">250/250</span></span>
              </div>
            </div>
          </div>

          <!-- Dialogue Text (On Right) -->
          <div class="parchment-dialogue-content">
            <div class="parchment-speaker-row">
              <span class="parchment-speaker" id="fftParchmentSpeaker">Ramza (นักเดินทาง):</span>
              <span class="parchment-step-indicator" id="fftParchmentStep">Step 1 of 14</span>
            </div>
            <p class="parchment-text-th" id="fftParchmentTh">ออกเดินทางแล้ว! บินตรงจากไทย 2 ชม. ถึงคุนหมิง ฟรีวีซ่าฉลุย~ ✈️</p>
            <p class="parchment-text-en" id="fftParchmentEn">Touching down in Kunming! Visa-free entry, super smooth! ✈️</p>
          </div>
        </div>
      </div>

      <!-- Row 2: Cinema Scrubber Bar (Docked directly underneath Row 1) -->
      <div class="plan1-cinema-bar" id="plan1CinemaBar">
        <!-- Status Top Row -->
        <div class="cinema-top-row">
          <div class="cinema-info-meta">
            <span class="cinema-day-badge" id="cinemaDayBadge">Day 1</span>
            <span class="cinema-clock" id="cinemaClock">⏰ 09:00 น.</span>
            <span class="cinema-phase" id="cinemaPhase">Day 1 เช้า</span>
          </div>
          <div class="cinema-title-box">
            <strong id="cinemaTitle">กำลังเริ่มต้นการเดินทาง...</strong>
            <span id="cinemaDesc">เตรียมพร้อมออกเดินทางสู่ยูนนาน</span>
          </div>
          <div class="cinema-speed-toggle">
            <button class="cinema-btn-speed" id="btnCinemaSpeed" title="ปรับความเร็ว 1x / 2x">1x</button>
            <button class="cinema-btn-list" id="btnCinemaOpenList" title="เปิดดูรายการกำหนดการ">📋 รายการ</button>
            <button class="cinema-btn-close" id="btnCinemaClose" title="หยุดและออกจาก Time-Lapse">✕ ออก</button>
          </div>
        </div>

        <!-- Timeline Scrubber Track -->
        <div class="cinema-timeline-wrapper">
          <div class="cinema-timeline-track" id="cinemaTimelineTrack">
            <div class="cinema-timeline-progress" id="cinemaTimelineProgress"></div>
            <!-- 6 Day Checkpoints -->
            <div class="timeline-dot-group">
              <button class="timeline-dot active" data-day="1" title="Day 1: คุนหมิง ➔ ต้าหลี่">
                <span class="dot-num">D1</span>
                <span class="dot-label">ต้าหลี่</span>
              </button>
              <button class="timeline-dot" data-day="2" title="Day 2: อ่าวตัว S ➔ ลี่เจียง">
                <span class="dot-num">D2</span>
                <span class="dot-label">ลี่เจียง</span>
              </button>
              <button class="timeline-dot" data-day="3" title="Day 3: สู่หุบเขาเสือกระโจน Cloud Way">
                <span class="dot-num">D3</span>
                <span class="dot-label">เสือกระโจน</span>
              </button>
              <button class="timeline-dot" data-day="4" title="Day 4: แสงทองรื่อจ้าวชินซาน ณ Cloud Way">
                <span class="dot-num">D4</span>
                <span class="dot-label">รื่อจ้าวชินซาน</span>
              </button>
              <button class="timeline-dot" data-day="5" title="Day 5: เสือกระโจน ➔ คุนหมิง นกนางนวล">
                <span class="dot-num">D5</span>
                <span class="dot-label">คุนหมิง</span>
              </button>
              <button class="timeline-dot" data-day="6" title="Day 6: ตลาดดอกไม้ ➔ กรุงเทพฯ">
                <span class="dot-num">D6</span>
                <span class="dot-label">กลับไทย</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Playback Controls Bottom Row -->
        <div class="cinema-controls-row">
          <button class="cinema-btn" id="btnCinemaPrev" title="ย้อนกลับ">⏮️ ย้อนกลับ</button>
          <button class="cinema-btn cinema-btn-play" id="btnCinemaPlayPause" title="เล่น / หยุดชั่วคราว">
            <span>⏸️</span> หยุดชั่วคราว
          </button>
          <button class="cinema-btn" id="btnCinemaNext" title="ถัดไป">ถัดไป ⏭️</button>
        </div>
      </div>

    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = modalHtml;
  document.body.appendChild(container);

  // Tactical Header on Mini-Map
  const mapElement = document.getElementById("map");
  if (mapElement && !document.getElementById("minimapHeader")) {
    const miniHeader = document.createElement("div");
    miniHeader.className = "minimap-tactical-header";
    miniHeader.id = "minimapHeader";
    miniHeader.innerHTML = `
      <span>📡 TACTICAL GPS RADAR</span>
      <span id="minimapCoords">YUNNAN</span>
    `;
    mapElement.appendChild(miniHeader);
  }

  // Hook up Modal Events
  document.getElementById("plan1ModalCloseBtn").onclick = closePlan1Modal;
  document.getElementById("plan1ModalOverlay").onclick = (e) => {
    if (e.target.id === "plan1ModalOverlay") closePlan1Modal();
  };

  document.getElementById("tabPlan1List").onclick = () => switchModalTab("list");
  document.getElementById("tabPlan1Timelapse").onclick = () => {
    closePlan1Modal();
    startPlan1Timelapse(0);
  };
  document.getElementById("btnLaunchTimelapse").onclick = () => {
    closePlan1Modal();
    startPlan1Timelapse(0);
  };

  // Hook up Cinema Bar Events
  document.getElementById("btnCinemaClose").onclick = stopPlan1Timelapse;
  document.getElementById("btnCinemaPlayPause").onclick = togglePlan1PlayPause;
  document.getElementById("btnCinemaNext").onclick = () => stepPlan1Timelapse(1);
  document.getElementById("btnCinemaPrev").onclick = () => stepPlan1Timelapse(-1);
  document.getElementById("btnCinemaSpeed").onclick = togglePlan1Speed;
  document.getElementById("btnCinemaOpenList").onclick = () => {
    pausePlan1Timelapse();
    openPlan1Modal();
  };

  // Timeline Checkpoint Click
  document.querySelectorAll(".timeline-dot").forEach(dot => {
    dot.onclick = () => {
      const day = parseInt(dot.dataset.day);
      const stepIndex = PLAN_1_ITINERARY.timelapseSteps.findIndex(s => s.day === day);
      if (stepIndex !== -1) {
        jumpToPlan1Step(stepIndex);
      }
    };
  });

  // 3D Parallax Tilt on Mouse Move
  const theater = document.getElementById("fftDioramaTheater");
  const stage = document.getElementById("fftStage3D");
  if (theater && stage) {
    theater.addEventListener("mousemove", (e) => {
      const rect = theater.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    theater.addEventListener("mouseleave", () => {
      stage.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    });
  }
}

// Open Plan 1 Master Modal
function openPlan1Modal() {
  const modal = document.getElementById("plan1ModalOverlay");
  if (!modal) return;
  renderPlan1List();
  modal.classList.add("active");
}

function closePlan1Modal() {
  const modal = document.getElementById("plan1ModalOverlay");
  if (modal) modal.classList.remove("active");
}

function switchModalTab(tab) {
  const tabList = document.getElementById("tabPlan1List");
  const tabTimelapse = document.getElementById("tabPlan1Timelapse");
  tabList.classList.toggle("active", tab === "list");
  tabTimelapse.classList.toggle("active", tab === "timelapse");
}

// ----------------------------------------------------------------------------------
// MODE 1: Render Itinerary List (Day 1 - Day 6)
// ----------------------------------------------------------------------------------
function renderPlan1List() {
  const container = document.getElementById("plan1ModalBody");
  if (!container) return;

  const daysHtml = PLAN_1_ITINERARY.days.map(d => {
    const scheduleItems = d.schedule.map(s => `
      <div class="plan1-sched-item">
        <span class="sched-time">${s.icon} ${s.time}</span>
        <span class="sched-desc">${s.labelTh}</span>
      </div>
    `).join("");

    return `
      <div class="plan1-day-card" id="dayCard-${d.day}">
        <div class="plan1-day-card-header" style="background:${d.tagBg}; border-left: 5px solid ${d.tagColor};">
          <div class="plan1-day-badge" style="background:${d.tagColor};">Day ${d.day}</div>
          <div class="plan1-day-header-info">
            <div class="plan1-day-date">${d.date} · ระดับความสูง: ${d.altitude}</div>
            <h3 class="plan1-day-title">${d.icon} ${d.titleTh}</h3>
          </div>
          <button class="plan1-btn-flyto" onclick="flyToPlan1Day(${d.day})" title="บินไปจุดนี้บนแผนที่">
            📍 ดูพิกัด
          </button>
        </div>

        <div class="plan1-day-card-body">
          <div class="plan1-sched-list">
            ${scheduleItems}
          </div>

          <div class="plan1-day-meta-grid">
            <div class="meta-box stay-box">
              <span class="meta-icon">🏨</span>
              <div class="meta-text">
                <strong>ที่พักสุดเอ็กซ์คลูซีฟ:</strong>
                <p>${d.stay.nameTh} (${d.stay.type})</p>
              </div>
            </div>
            <div class="meta-box meal-box">
              <span class="meta-icon">🍲</span>
              <div class="meta-text">
                <strong>มื้ออาหารเด่น:</strong>
                <p>${d.mealsTh}</p>
              </div>
            </div>
          </div>

          <div class="plan1-day-action-row">
            <button class="plan1-btn-start-day" onclick="startTimelapseFromDay(${d.day})">
              ⚔️ เริ่มดูไทม์แลปส์ 3D FFT เฉพาะวันที่ ${d.day}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="plan1-list-container">
      <div class="plan1-intro-banner">
        <strong>💡 ไฮไลท์การเดินทาง:</strong> แผนนี้เน้นเที่ยวแบบสโลว์ไลฟ์ พักผ่อนสบายๆ ไม่เร่งรีบ (จำกัดไฮไลท์ไม่เกิน 2 แห่งต่อวัน) เดินทางด้วยรถไฟความเร็วสูง (CRH) ชั้นหนึ่ง และพักผ่อน ณ 2 จุดพักผ่อนระดับมาสเตอร์พีซ: <strong>รีสอร์ทซานโตรินีต้าหลี่</strong> และ <strong>โฮมสเตย์กระจกเขาสูง Cloud Way เสือกระโจน</strong>
      </div>
      ${daysHtml}
    </div>
  `;
}

function flyToPlan1Day(day) {
  closePlan1Modal();
  const step = PLAN_1_ITINERARY.timelapseSteps.find(s => s.day === day);
  if (step && map) {
    map.flyTo(step.coords, step.zoom || 12, { duration: 1.5 });
    showChibiSpeech(step.coords, step.speechTh);
  }
}

function startTimelapseFromDay(day) {
  closePlan1Modal();
  const stepIndex = PLAN_1_ITINERARY.timelapseSteps.findIndex(s => s.day === day);
  startPlan1Timelapse(stepIndex !== -1 ? stepIndex : 0);
}

// ----------------------------------------------------------------------------------
// MODE 2: Time-Lapse Cinematic Engine & Final Fantasy Tactics 3D Diorama
// ----------------------------------------------------------------------------------
function startPlan1Timelapse(startStepIndex = 0) {
  if (typeof stopAutoTour === 'function') stopAutoTour();

  // 1. Enter Timelapse Mode (Minimizes Main Menu, Shrinks Map to Tactical Mini-Map)
  document.body.classList.add("timelapse-mode-active");

  const theater = document.getElementById("fftDioramaTheater");
  if (theater) theater.classList.add("active");

  const bottomDock = document.getElementById("fftBottomDock");
  if (bottomDock) bottomDock.classList.add("active");

  // Invalidate Leaflet Map Size so it scales seamlessly to Tactical Mini-Map
  setTimeout(() => {
    if (map) map.invalidateSize();
  }, 450);

  plan1ActiveStepIndex = startStepIndex;
  plan1IsPlaying = true;
  updatePlayPauseBtnIcon();

  runPlan1Step(plan1ActiveStepIndex);
}

function stopPlan1Timelapse() {
  plan1IsPlaying = false;
  clearTimeout(plan1Timer);
  cancelAnimationFrame(plan1AnimFrameId);
  clearTrainJourneyTimers();

  // 1. Exit Timelapse Mode (Restores Full Screen Map & Main Navigation)
  document.body.classList.remove("timelapse-mode-active");

  const theater = document.getElementById("fftDioramaTheater");
  if (theater) theater.classList.remove("active");

  const bottomDock = document.getElementById("fftBottomDock");
  if (bottomDock) bottomDock.classList.remove("active");

  // Restore Leaflet Map to Full Screen
  setTimeout(() => {
    if (map) {
      map.invalidateSize();
      map.flyTo([25.7500, 100.1800], 11, { duration: 1.2 });
    }
  }, 450);

  cleanupPlan1Markers();
}

function cleanupPlan1Markers() {
  if (plan1VehicleMarker && map) {
    map.removeLayer(plan1VehicleMarker);
    plan1VehicleMarker = null;
  }
  if (plan1ChibiMarker && map) {
    map.removeLayer(plan1ChibiMarker);
    plan1ChibiMarker = null;
  }
  if (plan1ActiveRouteLine && map) {
    map.removeLayer(plan1ActiveRouteLine);
    plan1ActiveRouteLine = null;
  }
}

function clearTrainJourneyTimers() {
  clearTimeout(plan1TrainPhaseTimer1);
  clearTimeout(plan1TrainPhaseTimer2);
  const card = document.getElementById("fftDioramaCard");
  if (card) card.classList.remove("train-cruising-motion");
  const hud = document.getElementById("fftTrainTransitHud");
  if (hud) hud.style.display = "none";
}

function togglePlan1PlayPause() {
  if (plan1IsPlaying) {
    pausePlan1Timelapse();
  } else {
    resumePlan1Timelapse();
  }
}

function pausePlan1Timelapse() {
  plan1IsPlaying = false;
  clearTimeout(plan1Timer);
  cancelAnimationFrame(plan1AnimFrameId);
  clearTrainJourneyTimers();
  updatePlayPauseBtnIcon();
}

function resumePlan1Timelapse() {
  plan1IsPlaying = true;
  updatePlayPauseBtnIcon();
  stepPlan1Timelapse(1);
}

function updatePlayPauseBtnIcon() {
  const btn = document.getElementById("btnCinemaPlayPause");
  if (btn) {
    btn.innerHTML = plan1IsPlaying ? `<span>⏸️</span> พัก` : `<span>▶️</span> เล่น`;
  }
}

function togglePlan1Speed() {
  plan1Speed = plan1Speed === 1 ? 2 : 1;
  const btn = document.getElementById("btnCinemaSpeed");
  if (btn) btn.innerText = `${plan1Speed}x`;
}

function stepPlan1Timelapse(direction) {
  clearTimeout(plan1Timer);
  cancelAnimationFrame(plan1AnimFrameId);
  clearTrainJourneyTimers();

  const totalSteps = PLAN_1_ITINERARY.timelapseSteps.length;
  plan1ActiveStepIndex = (plan1ActiveStepIndex + direction + totalSteps) % totalSteps;
  runPlan1Step(plan1ActiveStepIndex);
}

function jumpToPlan1Step(index) {
  clearTimeout(plan1Timer);
  cancelAnimationFrame(plan1AnimFrameId);
  clearTrainJourneyTimers();

  plan1ActiveStepIndex = index;
  runPlan1Step(plan1ActiveStepIndex);
}

// ----------------------------------------------------------------------------------
// Run a single Time-Lapse Step (Syncs FFT 3D Diorama & Tactical Mini-Map)
// ----------------------------------------------------------------------------------
function runPlan1Step(index) {
  const step = PLAN_1_ITINERARY.timelapseSteps[index];
  if (!step) return;

  clearTrainJourneyTimers();

  // 1. Update Cinema Bar UI
  document.getElementById("cinemaDayBadge").innerText = `Day ${step.day}`;
  document.getElementById("cinemaClock").innerText = `⏰ ${step.time}`;
  document.getElementById("cinemaPhase").innerText = step.phase;
  document.getElementById("cinemaTitle").innerText = step.titleTh;
  document.getElementById("cinemaDesc").innerText = step.descTh;

  // Update Mini-Map GPS text
  const minimapCoords = document.getElementById("minimapCoords");
  if (minimapCoords) {
    minimapCoords.innerText = `${step.coords[0].toFixed(2)}°N, ${step.coords[1].toFixed(2)}°E`;
  }

  // Update Scrubber Progress
  const total = PLAN_1_ITINERARY.timelapseSteps.length;
  const progressPct = ((index + 1) / total) * 100;
  document.getElementById("cinemaTimelineProgress").style.width = `${progressPct}%`;

  // Update Active Day Dot
  document.querySelectorAll(".timeline-dot").forEach(dot => {
    dot.classList.toggle("active", parseInt(dot.dataset.day) === step.day);
  });

  // 2. Perform Vehicle Animation & FFT Stage Updates
  cleanupPlan1Markers();

  if (step.vehicle === 'train') {
    runTrainStationToStationAnimation(step, index);
  } else {
    runScenicAttractionStep(step, index);
  }
}

// ----------------------------------------------------------------------------------
// Station-to-Station Animated Train Travel Engine (Phase 1 -> 2 -> 3)
// ----------------------------------------------------------------------------------
function runTrainStationToStationAnimation(step, index) {
  const transitHud = document.getElementById("fftTrainTransitHud");
  const originTag = document.getElementById("transitOriginStation");
  const destTag = document.getElementById("transitDestStation");
  const progFill = document.getElementById("transitProgressFill");
  const trainIco = document.getElementById("transitTrainIcon");
  const speedBdg = document.getElementById("transitSpeedBadge");
  const card = document.getElementById("fftDioramaCard");

  if (transitHud) transitHud.style.display = "flex";
  if (originTag) originTag.innerText = step.stationA || "สถานีต้นทาง";
  if (destTag) destTag.innerText = step.stationB || "สถานีปลายทาง";
  if (progFill) progFill.style.width = "0%";
  if (trainIco) trainIco.style.left = "0%";
  if (speedBdg) speedBdg.innerText = "0 km/h (เตรียมออกเดินทาง)";

  const totalDuration = 10500 / plan1Speed;
  const phase1Dur = 3200 / plan1Speed;
  const phase2Dur = 4200 / plan1Speed;

  // --- PHASE 1: DEPARTURE AT STATION A ---
  setFFTStageImage(step.departureStage || step.fftStage);
  updateFFTTurnCard(index, step.fftUnit || "Ramza & Squire", "Voyager / นักเดินทาง");
  updateFFTLocationCard(step.departureLocation || step.fftLocation, step.elevation);
  updateFFTParchment(step.fftUnit || "Ramza (นักเดินทาง)", index + 1, step.departureSpeechTh || step.speechTh, step.departureSpeechEn || step.speechEn, step.fftHp, step.fftMp);

  // Train starts creeping out of platform
  setTimeout(() => {
    if (progFill) progFill.style.width = "20%";
    if (trainIco) trainIco.style.left = "20%";
    if (speedBdg) speedBdg.innerText = "80 km/h (ออกจากชานชาลา)";
  }, 700 / plan1Speed);

  // Mini-map railway track animation
  if (step.railKey && PLAN_1_ITINERARY.railways[step.railKey]) {
    animateMiniTrainAlongRail(step.railKey, step.speechTh);
  }

  // --- PHASE 2: IN-TRANSIT SPEEDING CRUISE (Viaduct through Karst Peaks) ---
  plan1TrainPhaseTimer1 = setTimeout(() => {
    setFFTStageImage(step.transitStage || "assets/fft/train.jpg");
    if (card) card.classList.add("train-cruising-motion");

    updateFFTLocationCard(step.transitLocation || "YUNNAN HIGH SPEED RAIL · 250 KM/H VIADUCT", "1,980m");
    updateFFTParchment(step.fftUnit || "Ramza (นักเดินทาง)", index + 1, step.transitSpeechTh || step.speechTh, step.transitSpeechEn || step.speechEn, step.fftHp, step.fftMp);

    if (progFill) progFill.style.width = "75%";
    if (trainIco) trainIco.style.left = "75%";
    if (speedBdg) speedBdg.innerText = "⚡ 250 km/h (ความเร็วคงที่)";
  }, phase1Dur);

  // --- PHASE 3: ARRIVAL AT STATION B ---
  plan1TrainPhaseTimer2 = setTimeout(() => {
    if (card) card.classList.remove("train-cruising-motion");
    setFFTStageImage(step.arrivalStage || "assets/fft/dali_station.jpg");

    updateFFTLocationCard(step.arrivalLocation || step.fftLocation, step.elevation);
    updateFFTParchment(step.fftUnit || "Ramza (นักเดินทาง)", index + 1, step.arrivalSpeechTh || step.speechTh, step.arrivalSpeechEn || step.speechEn, step.fftHp, step.fftMp);

    if (progFill) progFill.style.width = "100%";
    if (trainIco) trainIco.style.left = "100%";
    if (speedBdg) speedBdg.innerText = "🏁 เข้าเทียบชานชาลา";
  }, phase1Dur + phase2Dur);

  scheduleNextStep(totalDuration);
}

// ----------------------------------------------------------------------------------
// Scenic Attractions (Dali, Shuhe, Cloud Way, etc.)
// ----------------------------------------------------------------------------------
function runScenicAttractionStep(step, index) {
  const card = document.getElementById("fftDioramaCard");
  if (card) card.classList.remove("train-cruising-motion");
  const transitHud = document.getElementById("fftTrainTransitHud");
  if (transitHud) transitHud.style.display = "none";

  setFFTStageImage(step.fftStage);
  updateFFTTurnCard(index, step.fftUnit || "Ramza Beoulve", "Voyager / นักเดินทาง");
  updateFFTLocationCard(step.fftLocation || "YUNNAN", step.elevation);
  updateFFTParchment(step.fftUnit || "Ramza (นักเดินทาง)", index + 1, step.speechTh, step.speechEn, step.fftHp, step.fftMp);

  const goldAura = document.getElementById("fftGoldAura");
  if (goldAura) goldAura.classList.toggle("active", !!step.isSpecialGold);

  const stepDuration = 7500 / plan1Speed;

  if (step.vehicle === 'airplane') {
    animateMiniPlane(step.coords, step.speechTh, () => {
      scheduleNextStep(stepDuration * 0.3);
    });
  } else if (step.vehicle === 'suv') {
    animateMiniSUV(step.coords, step.speechTh, () => {
      scheduleNextStep(stepDuration * 0.3);
    });
  } else {
    flyToAttractionWithChibi(step.coords, step.zoom || 11, step.speechTh, step.isSpecialGold);
    scheduleNextStep(stepDuration);
  }
}

// ----------------------------------------------------------------------------------
// Helper Functions to Update FFT UI Elements
// ----------------------------------------------------------------------------------
function setFFTStageImage(src) {
  const img = document.getElementById("fftDioramaImg");
  if (img && src) {
    img.style.opacity = "0.2";
    setTimeout(() => {
      img.src = src;
      img.style.opacity = "1";
    }, 180);
  }
}

function updateFFTTurnCard(index, unitName, jobTitle) {
  const turnBadge = document.getElementById("fftTurnBadge");
  const activeUnit = document.getElementById("fftActiveUnit");
  const jobTitleEl = document.getElementById("fftJobTitle");
  if (turnBadge) turnBadge.innerText = `TURN ${String(index + 1).padStart(2, '0')} / 14`;
  if (activeUnit) activeUnit.innerText = unitName;
  if (jobTitleEl) jobTitleEl.innerText = jobTitle || "Voyager / นักเดินทาง";
}

function updateFFTLocationCard(locationName, elevation) {
  const locEl = document.getElementById("fftLocationName");
  const elevEl = document.getElementById("fftLocationElev");
  if (locEl) locEl.innerText = locationName || "YUNNAN";
  if (elevEl) elevEl.innerText = `ELEV: ${elevation || '2,000m'}`;
}

function updateFFTParchment(speaker, stepNum, thText, enText, hp, mp) {
  const speakerEl = document.getElementById("fftParchmentSpeaker");
  const stepEl = document.getElementById("fftParchmentStep");
  const thEl = document.getElementById("fftParchmentTh");
  const enEl = document.getElementById("fftParchmentEn");
  const hpEl = document.getElementById("fftHpVal");
  const mpEl = document.getElementById("fftMpVal");
  const unitNameEl = document.getElementById("fftActiveUnitName");

  if (speakerEl) speakerEl.innerText = `${speaker}:`;
  if (stepEl) stepEl.innerText = `Step ${stepNum} of 14`;
  if (thEl) thEl.innerText = `"${thText}"`;
  if (enEl) enEl.innerText = enText || "";
  if (hpEl) hpEl.innerText = hp || "999/999";
  if (mpEl) mpEl.innerText = mp || "250/250";
  if (unitNameEl) unitNameEl.innerText = (speaker.split(" ")[0] || "Ramza").replace("(", "");
}

function scheduleNextStep(delayMs) {
  if (!plan1IsPlaying) return;
  plan1Timer = setTimeout(() => {
    if (plan1IsPlaying) {
      const nextIndex = (plan1ActiveStepIndex + 1) % PLAN_1_ITINERARY.timelapseSteps.length;
      plan1ActiveStepIndex = nextIndex;
      runPlan1Step(plan1ActiveStepIndex);
    }
  }, delayMs);
}

// ----------------------------------------------------------------------------------
// Mini Bullet Train along Railway on Mini-Map
// ----------------------------------------------------------------------------------
function animateMiniTrainAlongRail(railKey, speechText, onComplete) {
  const points = PLAN_1_ITINERARY.railways[railKey];
  if (!points || points.length < 2) return;

  plan1ActiveRouteLine = L.polyline(points, {
    color: '#0284c7',
    weight: 4.5,
    opacity: 0.85,
    dashArray: '8, 8',
    className: 'railway-track-glow'
  }).addTo(map);

  map.fitBounds(plan1ActiveRouteLine.getBounds(), { padding: [20, 20], duration: 1.0 });

  const trainIcon = L.divIcon({
    className: 'mini-train-leaflet-icon',
    html: `
      <div class="mini-crh-train-sprite">
        <div class="train-smoke">💨</div>
        <div class="train-body-doodle">
          <span class="train-front">🚅</span>
          <span class="train-name">CRH</span>
        </div>
      </div>
    `,
    iconSize: [90, 45],
    iconAnchor: [45, 22]
  });

  const startPt = points[0];
  plan1VehicleMarker = L.marker(startPt, { icon: trainIcon, zIndexOffset: 2000 }).addTo(map);

  const totalDuration = (6000 / plan1Speed);
  const startTime = performance.now();

  function animateTrain(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / totalDuration, 1);

    const currentCoords = interpolatePolyline(points, progress);
    if (plan1VehicleMarker) {
      plan1VehicleMarker.setLatLng(currentCoords);
    }

    if (progress < 1) {
      plan1AnimFrameId = requestAnimationFrame(animateTrain);
    } else {
      if (onComplete) onComplete();
    }
  }

  plan1AnimFrameId = requestAnimationFrame(animateTrain);
}

// ----------------------------------------------------------------------------------
// Mini Airplane on Mini-Map
// ----------------------------------------------------------------------------------
function animateMiniPlane(targetCoords, speechText, onComplete) {
  const startPt = [targetCoords[0] - 1.0, targetCoords[1] - 1.5];
  map.flyTo(targetCoords, 9, { duration: 1.5 });

  const planeIcon = L.divIcon({
    className: 'mini-plane-leaflet-icon',
    html: `
      <div class="mini-plane-sprite">
        <div class="plane-trail">💨✈️</div>
      </div>
    `,
    iconSize: [80, 40],
    iconAnchor: [40, 20]
  });

  plan1VehicleMarker = L.marker(startPt, { icon: planeIcon, zIndexOffset: 2000 }).addTo(map);

  const duration = 2400 / plan1Speed;
  const startTime = performance.now();

  function animatePlane(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const lat = startPt[0] + (targetCoords[0] - startPt[0]) * progress;
    const lng = startPt[1] + (targetCoords[1] - startPt[1]) * progress;

    if (plan1VehicleMarker) plan1VehicleMarker.setLatLng([lat, lng]);

    if (progress < 1) {
      plan1AnimFrameId = requestAnimationFrame(animatePlane);
    } else {
      if (onComplete) onComplete();
    }
  }

  plan1AnimFrameId = requestAnimationFrame(animatePlane);
}

// ----------------------------------------------------------------------------------
// Mini SUV on Mini-Map
// ----------------------------------------------------------------------------------
function animateMiniSUV(targetCoords, speechText, onComplete) {
  const startPt = [targetCoords[0] - 0.08, targetCoords[1] - 0.06];
  map.flyTo(targetCoords, 10, { duration: 1.2 });

  const suvIcon = L.divIcon({
    className: 'mini-suv-leaflet-icon',
    html: `
      <div class="mini-suv-sprite">
        <div class="suv-body">🚙💨</div>
      </div>
    `,
    iconSize: [80, 40],
    iconAnchor: [40, 20]
  });

  plan1VehicleMarker = L.marker(startPt, { icon: suvIcon, zIndexOffset: 2000 }).addTo(map);

  const duration = 2200 / plan1Speed;
  const startTime = performance.now();

  function animateSUV(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const lat = startPt[0] + (targetCoords[0] - startPt[0]) * progress;
    const lng = startPt[1] + (targetCoords[1] - startPt[1]) * progress;

    if (plan1VehicleMarker) plan1VehicleMarker.setLatLng([lat, lng]);

    if (progress < 1) {
      plan1AnimFrameId = requestAnimationFrame(animateSUV);
    } else {
      if (onComplete) onComplete();
    }
  }

  plan1AnimFrameId = requestAnimationFrame(animateSUV);
}

// ----------------------------------------------------------------------------------
// SD Chibi Traveler Character on Mini-Map
// ----------------------------------------------------------------------------------
function flyToAttractionWithChibi(coords, zoom, speechText, isGoldHighlight = false) {
  map.flyTo(coords, zoom, { duration: 1.2 });

  const goldClass = isGoldHighlight ? 'gold-shimmer-highlight' : '';

  const chibiIcon = L.divIcon({
    className: 'chibi-sd-leaflet-icon',
    html: `
      <div class="chibi-sd-marker ${goldClass}">
        <div class="chibi-sd-avatar">
          <div class="chibi-head">🧑‍🌾</div>
        </div>
      </div>
    `,
    iconSize: [60, 60],
    iconAnchor: [30, 30]
  });

  plan1ChibiMarker = L.marker(coords, { icon: chibiIcon, zIndexOffset: 2500 }).addTo(map);
}

function showChibiSpeech(coords, text) {
  if (plan1ChibiMarker && map) map.removeLayer(plan1ChibiMarker);

  const chibiIcon = L.divIcon({
    className: 'chibi-sd-leaflet-icon',
    html: `
      <div class="chibi-sd-marker">
        <div class="chibi-sd-avatar">
          <div class="chibi-head">🧑‍🌾</div>
        </div>
      </div>
    `,
    iconSize: [60, 60],
    iconAnchor: [30, 30]
  });

  plan1ChibiMarker = L.marker(coords, { icon: chibiIcon, zIndexOffset: 2500 }).addTo(map);
}

// ----------------------------------------------------------------------------------
// Polyline Coordinate Interpolation Math
// ----------------------------------------------------------------------------------
function interpolatePolyline(pts, t) {
  if (pts.length === 0) return [0, 0];
  if (pts.length === 1) return pts[0];
  if (t <= 0) return pts[0];
  if (t >= 1) return pts[pts.length - 1];

  let totalDist = 0;
  const dists = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const d = Math.hypot(pts[i+1][0] - pts[i][0], pts[i+1][1] - pts[i][1]);
    dists.push(d);
    totalDist += d;
  }

  const targetDist = t * totalDist;
  let accumulated = 0;

  for (let i = 0; i < dists.length; i++) {
    if (accumulated + dists[i] >= targetDist) {
      const segT = (targetDist - accumulated) / dists[i];
      const lat = pts[i][0] + (pts[i+1][0] - pts[i][0]) * segT;
      const lng = pts[i][1] + (pts[i+1][1] - pts[i][1]) * segT;
      return [lat, lng];
    }
    accumulated += dists[i];
  }

  return pts[pts.length - 1];
}
