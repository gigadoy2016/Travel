// Plan 1 Data: Tiger Leaping Gorge Cloud Way & Dali Santorini (6 Days 5 Nights)
// Includes full itinerary, day-by-day highlights, railway polylines, and cinematic time-lapse animation steps.

const PLAN_1_ITINERARY = {
  meta: {
    titleTh: "แผน 1: มนต์เสน่ห์หุบเขาเสือกระโจน & ต้าหลี่ ซานโตรินี",
    titleEn: "Plan 1: Tiger Leaping Gorge Cloud Way & Dali Santorini",
    subtitleTh: "ทริปสโลว์ไลฟ์พรีเมียม 6 วัน 5 คืน (คุนหมิง – ต้าหลี่ – ลี่เจียง – หุบเขาเสือกระโจน)",
    subtitleEn: "Premium Slow-Life 6 Days 5 Nights (Kunming – Dali – Lijiang – Tiger Leaping Gorge)",
    dateRange: "5 – 10 ธันวาคม 2026",
    daysCount: 6,
    nightsCount: 5,
    altitudeRange: "1,800 - 2,400 ม. (ออกซิเจนหนาแน่น เที่ยวสบาย 100% ไม่มีปัญหา AMS)",
    estimatedBudget: "~34,900 – 47,500 บาท / ท่าน",
    highlights: [
      "พักรีสอร์ทหน้าผาสไตล์ซานโตรินีริมทะเลสาบเอ๋อร์ไห่ต้าหลี่ 1 คืน",
      "พักโฮมสเตย์กระจกเขาสูง Cloud Way เสือกระโจน 2 คืนเต็มอิ่ม",
      "ชมแสงแรกยอดเขาหิมะกลายเป็นสีทอง 'รื่อจ้าวชินซาน' (日照金山) จากบนเตียงนอน",
      "รถไฟความเร็วสูง (CRH) ชั้นหนึ่งเชื่อมต่อทุกเมืองตรงเวลา สะดวกสบาย",
      "ไม่ต้องเดินเทรคกิ้งโหด มีรถ SUV รับส่ง และลงหุบเขาเสือกระโจนด้วยบันไดเลื่อนกระจก"
    ]
  },

  // Key Coordinates (AMAP GCJ-02 Datum)
  locations: {
    bkk: { nameTh: "กรุงเทพฯ (BKK / DMK)", nameEn: "Bangkok", coords: [13.6900, 100.7501], icon: "✈️" },
    kmgAirport: { nameTh: "สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG)", nameEn: "Kunming Changshui Airport", coords: [25.1018, 102.9298], icon: "🛫" },
    kmgStation: { nameTh: "สถานีรถไฟคุนหมิง", nameEn: "Kunming Railway Station", coords: [25.0163, 102.7167], icon: "🚉" },
    daliStation: { nameTh: "สถานีรถไฟความเร็วสูงต้าหลี่", nameEn: "Dali HSR Station", coords: [25.5898, 100.2520], icon: "🚅" },
    daliSantorini: { nameTh: "รีสอร์ทซานโตรินีต้าหลี่ (หลี่เซียงปัง)", nameEn: "Dali Santorini (Ideal State)", coords: [25.6830, 100.2740], icon: "🏛️" },
    panxiSbay: { nameTh: "โค้งตัว S ปันซีไห่ซี (ทะเลสาบเอ๋อร์ไห่)", nameEn: "Panxi S-Bay (Erhai Lake)", coords: [25.7950, 100.1580], icon: "🚲" },
    lijiangStation: { nameTh: "สถานีรถไฟลี่เจียง", nameEn: "Lijiang Railway Station", coords: [26.8055, 100.2310], icon: "🚅" },
    shuheTown: { nameTh: "เมืองโบราณซู่เหอ ลี่เจียง", nameEn: "Shuhe Ancient Town", coords: [26.9208, 100.2052], icon: "🏯" },
    blueMoonValley: { nameTh: "หุบเขาพระจันทร์สีน้ำเงิน (เชิงเขามังกรหยก)", nameEn: "Blue Moon Valley (Jade Dragon)", coords: [27.1350, 100.2450], icon: "🌊" },
    cloudWayHomestay: { nameTh: "โฮมสเตย์กระจกเขาสูง Cloud Way เสือกระโจน", nameEn: "Cloud Way High Road Homestay", coords: [27.2450, 100.1650], icon: "🏡" },
    upperTigerLeaping: { nameTh: "จุดชมวิวหุบเขาเสือกระโจนตอนบน & บันไดเลื่อน", nameEn: "Upper Tiger Leaping Gorge", coords: [27.1850, 100.1250], icon: "🐯" },
    tigerLeapingStation: { nameTh: "สถานีรถไฟเสือกระโจน", nameEn: "Tiger Leaping Gorge Station", coords: [27.1700, 100.0800], icon: "🚅" },
    greenLakePark: { nameTh: "สวนสาธารณะชุ่ยหู คุนหมิง (ฝูงนกนางนวลไซบีเรีย)", nameEn: "Green Lake Park (Cuihu)", coords: [25.0505, 102.7045], icon: "🕊️" },
    dounanFlower: { nameTh: "ตลาดค้าดอกไม้สดโต่วหนาน", nameEn: "Dounan Flower Market", coords: [24.9080, 102.7850], icon: "💐" }
  },

  // High-Speed Railway Paths for Animated Mini Train Interpolation
  railways: {
    kunmingToDali: [
      [25.0163, 102.7167], // Kunming Station
      [25.0500, 102.4000],
      [25.0350, 101.9000],
      [25.0350, 101.5400], // Chuxiong (楚雄)
      [25.2000, 101.1000],
      [25.3500, 100.7500], // Xiangyun (祥云)
      [25.5898, 100.2520]  // Dali Station
    ],
    daliToLijiang: [
      [25.5898, 100.2520], // Dali Station
      [25.7500, 100.3200],
      [26.1000, 100.2800],
      [26.4000, 100.2200], // Heqing (鹤庆)
      [26.8055, 100.2310]  // Lijiang Station
    ],
    tigerLeapingToKunming: [
      [27.1700, 100.0800], // Tiger Leaping Gorge Station
      [26.8055, 100.2310], // Lijiang
      [26.4000, 100.2200],
      [25.5898, 100.2520], // Dali
      [25.3500, 100.7500],
      [25.0350, 101.5400], // Chuxiong
      [25.0163, 102.7167]  // Kunming
    ]
  },

  // 6 Days Detailed Schedule (List Mode)
  days: [
    {
      day: 1,
      date: "5 ธ.ค. 2026",
      titleTh: "กรุงเทพฯ – บินตรงสู่คุนหมิง – รถไฟความเร็วสูงสู่ต้าหลี่ – เช็คอินรีสอร์ทหน้าผาซานโตรินี",
      titleEn: "Bangkok – Direct Flight to Kunming – HSR to Dali – Check-in Cliffside Santorini Resort",
      tagColor: "#ea580c",
      tagBg: "#fff7ed",
      icon: "🏛️",
      altitude: "1,970 ม.",
      stay: {
        nameTh: "Dali Songyun Cliff Resort / Miyue Santorini Seaview Resort",
        nameZh: "大理松云悬崖酒店 / 蜜悦·圣托里尼海景酒店",
        type: "รีสอร์ทสไตล์ถ้ำซานโตรินีสีขาวริมหน้าผา วิวทะเลสาบเอ๋อร์ไห่ 180°"
      },
      mealsTh: "กลางวัน: อาหารว่างบนเครื่องบิน / เย็น: ดินเนอร์อาหารฟิวชั่นริมผาซานโตรินี",
      mealsEn: "Lunch: In-flight snack / Dinner: Western fusion dinner at cliffside Santorini",
      schedule: [
        { time: "09:00", labelTh: "บินตรงจากสนามบินสุวรรณภูมิ/ดอนเมือง สู่สนามบินคุนหมิงฉางสุ่ย (KMG)", icon: "✈️" },
        { time: "12:30", labelTh: "ผ่านด่าน ตม. ฟรีวีซ่าสำหรับคนไทย รถรับสู่สถานีรถไฟคุนหมิง", icon: "🛂" },
        { time: "14:00", labelTh: "นั่งรถไฟความเร็วสูง (CRH) คุนหมิง ➔ ต้าหลี่ ใช้เวลาเพียง 2 ชั่วโมง", icon: "🚅" },
        { time: "16:30", labelTh: "ถึงสถานีรถไฟต้าหลี่ รถตู้รับข้ามสะพานมุ่งหน้าสู่รีสอร์ทหน้าผาซานโตรินี (หลี่เซียงปัง)", icon: "🚙" },
        { time: "18:00", labelTh: "ชมพระอาทิตย์อัสดงสีส้มอมชมพูตกหลังทิวเขาชางซาน สะท้อนผืนน้ำทะเลสาบเอ๋อร์ไห่สุดโรแมนติก", icon: "🌅" }
      ]
    },
    {
      day: 2,
      date: "6 ธ.ค. 2026",
      titleTh: "ทะเลสาบเอ๋อร์ไห่โค้งตัว S ปันซี – รถไฟความเร็วสูงสู่ลี่เจียง – เมืองโบราณซู่เหอ",
      titleEn: "Panxi S-Bay at Erhai Lake – Bullet Train to Lijiang – Shuhe Ancient Town",
      tagColor: "#0284c7",
      tagBg: "#f0f9ff",
      icon: "🚲",
      altitude: "2,400 ม.",
      stay: {
        nameTh: "The Bivou Lijiang / Banyan Tree Lijiang / Boutique Naxi Courtyard",
        nameZh: "丽江束河精品客栈 / 悦榕庄",
        type: "โรงแรมบูทีคสไตล์คอร์ทยาร์ดชนชาติน่าซี เงียบสงบ ติดลำธารใส"
      },
      mealsTh: "เช้า: บุฟเฟต์ลอยน้ำริมสระ / กลางวัน: ข้าวผัดเห็ดทรัฟเฟิล / เย็น: หม้อไฟไก่ตุ๋นเห็ดป่ายูนนาน",
      mealsEn: "Breakfast: Floating breakfast / Lunch: Truffle fried rice / Dinner: Wild mushroom chicken hotpot",
      schedule: [
        { time: "08:30", labelTh: "จิบกาแฟชมแสงอรุณกระทบผืนน้ำทะเลสาบ ทานอาหารเช้าลอยน้ำ (Floating Breakfast)", icon: "☕" },
        { time: "10:00", labelTh: "แวะถ่ายรูปจุดแลนด์มาร์ก 'โค้งตัว S ปันซีไห่ซี' ทางจักรยานริมน้ำ ทิวสนเรดวูดสีส้ม", icon: "🚲" },
        { time: "13:30", labelTh: "นั่งรถไฟความเร็วสูง ต้าหลี่ ➔ ลี่เจียง เพียง 1 ชั่วโมง 20 นาที", icon: "🚅" },
        { time: "15:30", labelTh: "เช็คอินเข้าสู่เมืองโบราณซู่เหอ เดินเล่นข้ามสะพานหินชิงหลงโบราณ", icon: "🏯" },
        { time: "18:30", labelTh: "ทานมื้อค่ำหม้อไฟไก่ตุ๋นเห็ดป่ายูนนาน ท่ามกลางเสียงดนตรีโฟล์กเบาๆ", icon: "🍲" }
      ]
    },
    {
      day: 3,
      date: "7 ธ.ค. 2026",
      titleTh: "หุบเขาพระจันทร์สีน้ำเงิน – รถ SUV สู่หุบเขาเสือกระโจน – เช็คอินโฮมสเตย์กระจก Cloud Way",
      titleEn: "Blue Moon Valley – SUV to Tiger Leaping Gorge – Check-in Cloud Way Panoramic Homestay",
      tagColor: "#059669",
      tagBg: "#ecfdf5",
      icon: "🌊",
      altitude: "2,100 ม.",
      stay: {
        nameTh: "Upper trekking route · Cloud Way · Snowy mountain view homestay",
        nameZh: "虎跳峡高路·云途·雪山观景民宿",
        type: "โฮมสเตย์กระจกพาโนรามาบนหน้าผาสูง ประจันหน้ายอดเขาหิมะมังกรหยก มีฮีตเตอร์พื้นและเตาผิง (คืนที่ 1)"
      },
      mealsTh: "เช้า: บุฟเฟต์โรงแรม / กลางวัน: อาหารเซ็ตยูนนาน / เย็น: หม้อไฟซี่โครงหมูแห้งวิวหน้าผา Cloud Way",
      mealsEn: "Breakfast: Hotel buffet / Lunch: Yunnan set / Dinner: Cured pork rib hotpot with snow mountain view",
      schedule: [
        { time: "09:00", labelTh: "เดินทางสู่เชิงเขาหิมะมังกรหยก ชมความงามบริสุทธิ์ของ 'หุบเขาพระจันทร์สีน้ำเงิน' (Blue Moon Valley)", icon: "🌊" },
        { time: "11:30", labelTh: "ชมสระน้ำหินปูนขั้นบันไดสีฟ้าครามสดใสราวมรกต โดยมียอดเขาหิมะ 13 ยอดเป็นฉากหลัง", icon: "🏔️" },
        { time: "13:30", labelTh: "นั่งรถ SUV ส่วนตัว มุ่งหน้าสู่หุบเขาเสือกระโจน ไต่ระดับสู่ถนนเขาสูง ไม่ต้องเดินแบกเป้หนัก", icon: "🚙" },
        { time: "16:00", labelTh: "เช็คอิน Cloud Way Homestay ห้องพักกระจกบานใหญ่จรดเพดาน มองเห็นหน้าผาหิมะเต็มตา", icon: "🏡" },
        { time: "18:00", labelTh: "ชมพระอาทิตย์อัสดงยามเย็น แสงสีส้มทองฉาบทาลงบนยอดเขาหิมะตรงหน้าห้องพัก", icon: "🌅" }
      ]
    },
    {
      day: 4,
      date: "8 ธ.ค. 2026",
      titleTh: "สโลว์ไลฟ์ ณ Cloud Way: ชมแสงทองยอดเขาหิมะ 'รื่อจ้าวชินซาน' – จิบกาแฟระเบียงผา – ชมทะเลดาว",
      titleEn: "Slow Life at Cloud Way: Sunrise Golden Mountain 'Rizhao Jinshan' – Cliff Coffee & Stargazing",
      tagColor: "#d97706",
      tagBg: "#fffbeb",
      icon: "🌅",
      altitude: "2,100 ม.",
      stay: {
        nameTh: "Upper trekking route · Cloud Way · Snowy mountain view homestay",
        nameZh: "虎跳峡高路·云途·雪山观景民宿",
        type: "โฮมสเตย์กระจกพาโนรามาบนหน้าผาสูง พักผ่อนสบายๆ ไม่ต้องย้ายกระเป๋า (คืนที่ 2)"
      },
      mealsTh: "เช้า: กาแฟดริปร้อน & อาหารเช้าคันทรี่ / กลางวัน: ไก่บ้านผัดเห็ดโคน / เย็น: บาร์บีคิวเนื้อย่างกระทะร้อนชมดาว",
      mealsEn: "Breakfast: Drip coffee & country breakfast / Lunch: Wild mushroom chicken / Dinner: Starlight BBQ",
      schedule: [
        { time: "07:30", labelTh: "เปิดม่านห้องนอนชมปรากฏการณ์ 'รื่อจ้าวชินซาน' (日照金山) แสงทองแรกฉาบยอดเขาหิมะมังกรหยก", icon: "✨" },
        { time: "08:15", labelTh: "ถ่ายภาพสะท้อนยอดเขาทองคำบนสระกระจกเงาฟ้า (Sky Mirror Pool) บนดาดฟ้า Cloud Way", icon: "📸" },
        { time: "10:30", labelTh: "จิบกาแฟดริปอุ่นๆ ริมระเบียงหน้าผา อ่านหนังสือ ฟังเสียงสายลมธรรมชาติ", icon: "☕" },
        { time: "14:00", labelTh: "เดินเล่นทางเรียบเลียบไหล่เขา ไปยังจุดชมวิวน้ำตกกวนอิน และ Halfway Guesthouse", icon: "🚶‍♂️" },
        { time: "19:00", labelTh: "ปาร์ตี้บาร์บีคิวเนื้อย่างหน้าเตาผิง ชมทะเลดาวระยิบระยับเต็มท้องฟ้ายามค่ำคืน (Stargazing)", icon: "✨" }
      ]
    },
    {
      day: 5,
      date: "9 ธ.ค. 2026",
      titleTh: "หุบเขาเสือกระโจนตอนบน – รถไฟความเร็วสูงสู่คุนหมิง – ฝูงนกนางนวลไซบีเรียทะเลสาบชุ่ยหู",
      titleEn: "Upper Tiger Leaping Gorge – Direct HSR to Kunming – Siberian Red-Billed Gulls at Green Lake",
      tagColor: "#7c3aed",
      tagBg: "#f5f3ff",
      icon: "🐯",
      altitude: "1,890 ม.",
      stay: {
        nameTh: "Grand Park Kunming / Sofitel Kunming Hotel",
        nameZh: "昆明君乐酒店 / 索菲特大酒店",
        type: "โรงแรมหรูระดับ 5 ดาวใจกลางเมืองคุนหมิง ใกล้สวนชุ่ยหูและย่านช้อปปิ้ง"
      },
      mealsTh: "เช้า: อาหารเช้า Cloud Way / กลางวัน: อาหารว่างบนรถไฟความเร็วสูง / เย็น: ก๋วยเตี๋ยวข้ามสะพานหม้อหินร้อนเดือด",
      mealsEn: "Breakfast: Cloud Way breakfast / Lunch: Train snacks / Dinner: Authentic Guoqiao Mixian in sizzling stone bowl",
      schedule: [
        { time: "09:30", labelTh: "รถรับส่งลงสู่จุดชมวิวหุบเขาเสือกระโจนตอนบน นั่งบันไดเลื่อนกระจกชมวิว สะดวกสบาย", icon: "🐯" },
        { time: "10:30", labelTh: "ยืนข้าง 'โขดหินเสือกระโจน' สัมผัสพลังสายน้ำสีเขียวมรกตกระทบแก่งหินพร้อมเสียงคำรามกึกก้อง", icon: "🌊" },
        { time: "12:30", labelTh: "ขึ้นรถไฟความเร็วสูงจากสถานีเสือกระโจน (Tiger Leaping Gorge Station) ตรงสู่ นครคุนหมิง", icon: "🚅" },
        { time: "16:30", labelTh: "เช็คอินโรงแรม 5 ดาวคุนหมิง เดินเล่นสวนสาธารณะชุ่ยหู (Green Lake Park)", icon: "🏨" },
        { time: "17:30", labelTh: "ให้อาหารฝูงนกนางนวลปากแดงไซบีเรียนับหมื่นตัวที่อพยพมาลอยเหนือน้ำรับแดดยามเย็น", icon: "🕊️" },
        { time: "19:00", labelTh: "ทาน 'ก๋วยเตี๋ยวข้ามสะพาน' (过桥米线) ต้นตำรับยูนนานแท้ เสิร์ฟในชามหินร้อนเดือด", icon: "🍜" }
      ]
    },
    {
      day: 6,
      date: "10 ธ.ค. 2026",
      titleTh: "ตลาดค้าดอกไม้สดโต่วหนาน – สู่สนามบินคุนหมิงฉางสุ่ย – บินตรงกลับกรุงเทพฯ",
      titleEn: "Dounan Flower Market – Transfer to Kunming Airport – Direct Flight back to Bangkok",
      tagColor: "#db2777",
      tagBg: "#fdf2f8",
      icon: "💐",
      altitude: "1,890 ม.",
      stay: {
        nameTh: "เดินทางกลับถึงกรุงเทพฯ โดยสวัสดิภาพ",
        nameZh: "顺利返回曼谷",
        type: "กลับถึงบ้านพร้อมความประทับใจเต็มเปี่ยม"
      },
      mealsTh: "เช้า: บุฟเฟต์โรงแรม 5 ดาว / กลางวัน: อาหารตามอัธยาศัยที่สนามบิน",
      mealsEn: "Breakfast: Hotel buffet / Lunch: Free choice at airport",
      schedule: [
        { time: "09:30", labelTh: "เยี่ยมชม 'ตลาดดอกไม้โต่วหนาน' ตลาดค้าส่งดอกไม้สดที่ใหญ่ที่สุดในเอเชีย", icon: "💐" },
        { time: "11:00", labelTh: "ชิมขนมเปี๊ยะอบสดไส้กลีบดอกกุหลาบ (Flower Cake / 鲜花饼) ของฝากอันดับหนึ่งยูนนาน", icon: "🥮" },
        { time: "12:30", labelTh: "รถรับส่งสู่สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG)", icon: "🚙" },
        { time: "15:00", labelTh: "บินตรงกลับสู่กรุงเทพฯ ใช้เวลาเพียง 2 ชั่วโมงเศษ พร้อมภาพถ่ายสวยงามระดับมาสเตอร์พีซ", icon: "✈️" }
      ]
    }
  ],

  // 14 Cinematic Time-Lapse Steps with Vehicle Animations, Speech Bubbles & FFT 3D Diorama Stages
  timelapseSteps: [
    {
      id: 1,
      day: 1,
      time: "09:00 น.",
      phase: "Day 1 เช้า",
      titleTh: "บินตรงจากกรุงเทพฯ สู่ สนามบินคุนหมิงฉางสุ่ย (KMG)",
      titleEn: "Flight BKK to Kunming Changshui Airport (KMG)",
      descTh: "ออกเดินทางสู่ยูนนาน บินเพียง 2 ชั่วโมง 15 นาที ผ่าน ตม. ฟรีวีซ่า",
      descEn: "Fly directly to Kunming (2h 15m), visa-free entry for Thai travelers",
      vehicle: "airplane",
      coords: [25.1018, 102.9298],
      zoom: 10,
      fftStage: "assets/fft/airport.jpg",
      fftLocation: "KUNMING AIRPORT (KMG) · GATE 25",
      fftUnit: "Ramza Beoulve (Voyager)",
      fftHp: "999/999",
      fftMp: "250/250",
      elevation: "1,970m",
      speechTh: "ออกเดินทางแล้ว! บินตรงจากไทย 2 ชม. ถึงคุนหมิง ฟรีวีซ่าฉลุย~ ✈️",
      speechEn: "Touching down in Kunming! Visa-free entry, super smooth! ✈️"
    },
    {
      id: 2,
      day: 1,
      time: "14:00 น.",
      phase: "Day 1 บ่าย",
      titleTh: "นั่งรถไฟความเร็วสูง CRH คุนหมิง ➔ ต้าหลี่ (2 ชม.)",
      titleEn: "CRH Bullet Train from Kunming to Dali (2 hours)",
      descTh: "รถไฟหัวกระสุนชั้นหนึ่ง วิ่งนุ่มสบาย ชมวิวทิวทัศน์ทุ่งดอกไม้และขุนเขา",
      descEn: "High-speed 1st class train glides west past mountains and lakes",
      vehicle: "train",
      railKey: "kunmingToDali",
      coords: [25.5898, 100.2520],
      zoom: 9,
      fftStage: "assets/fft/train.jpg",
      fftLocation: "YUNNAN HIGH SPEED RAIL · CRH",
      fftUnit: "Squire (CRH Rider)",
      fftHp: "880/880",
      fftMp: "210/210",
      elevation: "1,980m",
      speechTh: "นั่งรถไฟหัวกระสุน CRH คุนหมิงไปต้าหลี่ 2 ชม. ตรงเวลาและนุ่มมาก! 🚅💨",
      speechEn: "High-speed CRH to Dali taking only 2 hours. Super smooth ride! 🚅💨"
    },
    {
      id: 3,
      day: 1,
      time: "17:30 น.",
      phase: "Day 1 เย็น",
      titleTh: "เช็คอินรีสอร์ทหน้าผาซานโตรินีต้าหลี่ (หลี่เซียงปัง)",
      titleEn: "Check-in Cliffside Santorini Resort at Erhai Lake",
      descTh: "รีสอร์ทสีขาวริมผา ชมพระอาทิตย์อัสดงสีส้มอมชมพูตกหลังทิวเขาชางซาน",
      descEn: "Pure white Aegean architecture overlooking Erhai sunset and Cangshan peaks",
      vehicle: "chibi",
      coords: [25.6830, 100.2740],
      zoom: 13,
      fftStage: "assets/fft/santorini.jpg",
      fftLocation: "DALI SANTORINI · IDEAL STATE",
      fftUnit: "Ramza & Allies (Resort Guest)",
      fftHp: "999/999",
      fftMp: "280/280",
      elevation: "1,975m",
      speechTh: "เช็คอินซานโตรินีต้าหลี่แล้ว! พระอาทิตย์ตกหลังเขาชางซานสวยจนแทบลืมหายใจ 🏛️🌅",
      speechEn: "Arrived at Dali Santorini! Sunset over Cangshan is pure magic 🏛️🌅"
    },
    {
      id: 4,
      day: 2,
      time: "09:30 น.",
      phase: "Day 2 เช้า",
      titleTh: "โค้งตัว S ปันซีไห่ซี ทะเลสาบเอ๋อร์ไห่",
      titleEn: "Panxi S-Bay Greenway at Erhai Lake",
      descTh: "ทางปั่นจักรยานริมน้ำ ทิวสนเรดวูดสีส้มผลัดใบ และฝูงนกเป็ดน้ำ",
      descEn: "Lakeside greenway with golden redwood pines and gentle breezes",
      vehicle: "bike",
      coords: [25.7950, 100.1580],
      zoom: 13,
      fftStage: "assets/fft/santorini.jpg",
      fftLocation: "PANXI S-BAY · ERHAI GREENWAY",
      fftUnit: "Archer (Cyclist)",
      fftHp: "760/760",
      fftMp: "180/180",
      elevation: "1,972m",
      speechTh: "ปั่นจักรยานรับลมหนาวที่อ่าวตัว S ปันซี สนผลัดใบสีส้มสวยคลาสสิกมาก 🚲🍂",
      speechEn: "Cycling along Panxi S-Bay! Golden redwood pines and clear water 🚲🍂"
    },
    {
      id: 5,
      day: 2,
      time: "14:00 น.",
      phase: "Day 2 บ่าย",
      titleTh: "รถไฟความเร็วสูง ต้าหลี่ ➔ ลี่เจียง (1.5 ชม.)",
      titleEn: "Bullet Train from Dali to Lijiang (1.5 hours)",
      descTh: "ไต่ระดับขึ้นสู่เมืองแห่งสายน้ำและขุนเขาหิมะลี่เจียง อากาศเย็นสบาย",
      descEn: "Scenic railway linking the two romantic ancient kingdoms",
      vehicle: "train",
      railKey: "daliToLijiang",
      coords: [26.8055, 100.2310],
      zoom: 9,
      fftStage: "assets/fft/train.jpg",
      fftLocation: "DALI - LIJIANG ALPINE RAILWAY",
      fftUnit: "Knight (Express Traveler)",
      fftHp: "920/920",
      fftMp: "190/190",
      elevation: "2,200m",
      speechTh: "นั่งรถไฟหัวกระสุนต่อไปลี่เจียง 1.5 ชม. อากาศเริ่มเย็นฉ่ำ 15°C แล้ว 🚅❄️",
      speechEn: "Bullet train to Lijiang! Crisp alpine breeze welcoming us 🚅❄️"
    },
    {
      id: 6,
      day: 2,
      time: "17:00 น.",
      phase: "Day 2 เย็น",
      titleTh: "เช็คอินเมืองโบราณซู่เหอ ลี่เจียง",
      titleEn: "Shuhe Ancient Town & Naxi Courtyard Stay",
      descTh: "เมืองโบราณชนชาติน่าซี สะพานหินชิงหลง จิบชาผู่เอ๋อร์ หม้อไฟไก่ตุ๋นเห็ดป่า",
      descEn: "Peaceful stone-paved alleys, Qinglong Bridge and wild mushroom hotpot",
      vehicle: "chibi",
      coords: [26.9208, 100.2052],
      zoom: 14,
      fftStage: "assets/fft/shuhe.jpg",
      fftLocation: "SHUHE ANCIENT TOWN · QINGLONG BRIDGE",
      fftUnit: "Ramza & White Mage (Tea Drinker)",
      fftHp: "890/890",
      fftMp: "320/320",
      elevation: "2,400m",
      speechTh: "เดินข้ามสะพานหินชิงหลงในซู่เหอ แวะทานหม้อไฟไก่ตุ๋นเห็ดป่าอุ่นๆ สบายท้อง 🏯🍲",
      speechEn: "Strolling Shuhe ancient alleys and enjoying hot wild mushroom stew 🏯🍲"
    },
    {
      id: 7,
      day: 3,
      time: "10:00 น.",
      phase: "Day 3 เช้า",
      titleTh: "หุบเขาพระจันทร์สีน้ำเงิน (Blue Moon Valley)",
      titleEn: "Blue Moon Valley at the foot of Jade Dragon Snow Mountain",
      descTh: "สระน้ำหินปูนขั้นบันไดสีฟ้าครามดั่งมรกต ฉากหลังคือยอดเขาหิมะมังกรหยก",
      descEn: "Glacial turquoise terraced ponds with 13 snow peaks rising behind",
      vehicle: "chibi",
      coords: [27.1350, 100.2450],
      zoom: 13,
      fftStage: "assets/fft/bluemoon.jpg",
      fftLocation: "BLUE MOON VALLEY · JADE DRAGON",
      fftUnit: "Ramza & Agrias (Photographer)",
      fftHp: "950/950",
      fftMp: "290/290",
      elevation: "2,900m",
      speechTh: "ว้าว! น้ำสีฟ้าเทอร์ควอยซ์ใสสะท้อนยอดเขาหิมะมังกรหยก เหมือนภาพวาดเลย 🌊🏔️",
      speechEn: "Breathtaking turquoise water mirroring Jade Dragon Snow Mountain! 🌊🏔️"
    },
    {
      id: 8,
      day: 3,
      time: "14:30 น.",
      phase: "Day 3 บ่าย",
      titleTh: "รถ SUV ไต่ระดับสู่ถนนเขาสูงหุบเขาเสือกระโจน",
      titleEn: "Scenic SUV Drive to Tiger Leaping Gorge High Road",
      descTh: "นั่งรถ SUV ส่วนตัวสบายๆ ขึ้นสู่ถนน Upper Trail โดยไม่ต้องแบกเป้เดินเท้า",
      descEn: "Private SUV ascends high mountain cliffs directly to Cloud Way homestay",
      vehicle: "suv",
      coords: [27.2450, 100.1650],
      zoom: 12,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "TIGER LEAPING GORGE HIGH ROAD",
      fftUnit: "SUV Driver & Party",
      fftHp: "999/999",
      fftMp: "250/250",
      elevation: "2,100m",
      speechTh: "นั่งรถ SUV ไต่ถนนเขาสูงขึ้น Cloud Way ไม่ต้องเดินแบกเป้ สบายระดับ 5 ดาว 🚙✨",
      speechEn: "Cruising up the high mountain ridge in private SUV. Zero hiking strain! 🚙✨"
    },
    {
      id: 9,
      day: 4,
      time: "07:45 น.",
      phase: "Day 4 เช้าตรู่",
      titleTh: "มหัศจรรย์แสงแรก 'รื่อจ้าวชินซาน' (日照金山) ณ Cloud Way",
      titleEn: "Golden Mountain Sunrise 'Rizhao Jinshan' from Cloud Way",
      descTh: "เปิดม่านห้องนอนชมแสงทองฉาบทายอดเขาหิมะมังกรหยก สะท้อนสระกระจกเงาฟ้า",
      descEn: "Sunrise turns snowy peaks into blinding gold right from your bedroom window",
      vehicle: "chibi",
      coords: [27.2450, 100.1650],
      zoom: 14,
      isSpecialGold: true,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "CLOUD WAY · RIZHAO JINSHAN (日照金山)",
      fftUnit: "Ramza (Awe-Inspired)",
      fftHp: "999/999",
      fftMp: "999/999",
      elevation: "2,100m",
      speechTh: "รื่อจ้าวชินซาน! ยอดเขาหิมะกลายเป็นสีทองคำอร่ามตา มหัศจรรย์มากกกก! ✨🏔️",
      speechEn: "Rizhao Jinshan! Snowy peaks glowing in pure morning gold! ✨🏔️"
    },
    {
      id: 10,
      day: 4,
      time: "14:00 น.",
      phase: "Day 4 บ่าย",
      titleTh: "จิบกาแฟระเบียงผา Cloud Way & ชมดาวเต็มฟ้า",
      titleEn: "Cliffside Drip Coffee & Stargazing at Cloud Way",
      descTh: "จิบกาแฟดริปริมระเบียงผา เดินเล่นจุดชมวิวน้ำตกกวนอิน และชมทะเลดาวหน้าเตาผิง",
      descEn: "Sipping hand-drip coffee over Asia's deepest gorge, cozy fireplace & stars",
      vehicle: "chibi",
      coords: [27.2450, 100.1650],
      zoom: 14,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "CLOUD WAY · CLIFFSIDE DECK & FIREPLACE",
      fftUnit: "Ramza (Coffee Connoisseur)",
      fftHp: "999/999",
      fftMp: "350/350",
      elevation: "2,100m",
      speechTh: "จิบกาแฟริมหน้าผา ลมหนาวพัดเย็นสบาย สโลว์ไลฟ์อย่างแท้จริง ☕📖",
      speechEn: "Warm hand-drip coffee on the cliff deck. True soul rejuvenation ☕📖"
    },
    {
      id: 11,
      day: 5,
      time: "10:00 น.",
      phase: "Day 5 เช้า",
      titleTh: "หุบเขาเสือกระโจนตอนบน & บันไดเลื่อนกระจกชมวิว",
      titleEn: "Upper Tiger Leaping Gorge & Scenic Escalator",
      descTh: "ลงบันไดเลื่อนกระจกสู่ก้นหุบเขา ยืนข้างโขดหินเสือกระโจน สัมผัสพลังสายน้ำเชี่ยวกราก",
      descEn: "Glass escalators whisk you down to the roaring Tiger Stone on the Jinsha River",
      vehicle: "chibi",
      coords: [27.1850, 100.1250],
      zoom: 13,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "UPPER TIGER LEAPING GORGE · TIGER STONE",
      fftUnit: "Knight & Monk (Adventurer)",
      fftHp: "960/960",
      fftMp: "240/240",
      elevation: "1,850m",
      speechTh: "ลงบันไดเลื่อนกระจกไปยืนข้างโขดหินเสือกระโจน สายน้ำคำรามทรงพลังสุดๆ! 🐯🌊",
      speechEn: "Standing by the roaring Tiger Leaping Stone. Nature's sheer power! 🐯🌊"
    },
    {
      id: 12,
      day: 5,
      time: "13:30 น.",
      phase: "Day 5 บ่าย",
      titleTh: "รถไฟความเร็วสูง สถานีเสือกระโจน ➔ นครคุนหมิง",
      titleEn: "Direct Bullet Train from Tiger Leaping Gorge to Kunming",
      descTh: "รถไฟความเร็วสูงสายใหม่ นั่งตรงจากเสือกระโจนกลับสู่นครคุนหมิง สะดวกและรวดเร็ว",
      descEn: "New high-speed railway whisks travelers directly back to Kunming city center",
      vehicle: "train",
      railKey: "tigerLeapingToKunming",
      coords: [25.0163, 102.7167],
      zoom: 9,
      fftStage: "assets/fft/train.jpg",
      fftLocation: "TIGER LEAPING - KUNMING DIRECT HSR",
      fftUnit: "Squire (HSR Passenger)",
      fftHp: "900/900",
      fftMp: "200/200",
      elevation: "1,900m",
      speechTh: "ขึ้นรถไฟหัวกระสุนจากสถานีเสือกระโจน วิ่งตรงกลับคุนหมิง สะดวกมาก 🚅💨",
      speechEn: "Direct high-speed train from Tiger Leaping Gorge back to Kunming! 🚅💨"
    },
    {
      id: 13,
      day: 5,
      time: "17:30 น.",
      phase: "Day 5 เย็น",
      titleTh: "สวนสาธารณะชุ่ยหู & ฝูงนกนางนวลไซบีเรีย",
      titleEn: "Green Lake Park & Siberian Red-Billed Gulls",
      descTh: "ฝูงนกนางนวลปากแดงไซบีเรียนับหมื่นตัวอพยพมาลอยเหนือน้ำ ทานก๋วยเตี๋ยวข้ามสะพาน",
      descEn: "Tens of thousands of migrating Siberian gulls flying around Green Lake",
      vehicle: "chibi",
      coords: [25.0505, 102.7045],
      zoom: 14,
      fftStage: "assets/fft/cuihu.jpg",
      fftLocation: "CUIHU GREEN LAKE PARK · KUNMING",
      fftUnit: "Archer & Chemist (Bird Feeder)",
      fftHp: "850/850",
      fftMp: "260/260",
      elevation: "1,890m",
      speechTh: "ให้อาหารฝูงนกนางนวลไซบีเรียปากแดงที่สวนชุ่ยหู บินวนรอบตัวน่ารักมาก 🕊️🍜",
      speechEn: "Feeding thousands of Siberian gulls at Green Lake! So adorable 🕊️🍜"
    },
    {
      id: 14,
      day: 6,
      time: "11:00 น.",
      phase: "Day 6 เช้า/บ่าย",
      titleTh: "ตลาดดอกไม้สดโต่วหนาน ➔ บินกลับกรุงเทพฯ โดยสวัสดิภาพ",
      titleEn: "Dounan Flower Market & Flight Back to Bangkok",
      descTh: "ชิมขนมเปี๊ยะกุหลาบสด ซื้อของฝาก แล้วบินตรงกลับไทย จบทริปสโลว์ไลฟ์มาสเตอร์พีซ",
      descEn: "Fresh rose flower cakes at Asia's largest flower hub, smooth flight home",
      vehicle: "airplane",
      coords: [24.9080, 102.7850],
      zoom: 11,
      fftStage: "assets/fft/dounan.jpg",
      fftLocation: "DOUNAN FLOWER MARKET · KUNMING",
      fftUnit: "Ramza & Party (Gift Shopper)",
      fftHp: "999/999",
      fftMp: "300/300",
      elevation: "1,890m",
      speechTh: "ซื้อขนมเปี๊ยะกุหลาบของฝาก แล้วบินกลับกรุงเทพฯ จบทริปแสนประทับใจ! 💐✈️",
      speechEn: "Loaded with fresh rose flower cakes and unforgettable memories! 💐✈️"
    }
  ]
};
