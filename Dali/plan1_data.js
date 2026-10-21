// Plan 1 Data: Yunnan Grand Loop (6 Days 5 Nights)
// Route: BKK -> Kunming -> Lijiang -> Tiger Leaping Gorge -> Dali -> Kunming -> BKK
// Includes full itinerary, day-by-day highlights, realistic step-by-step transit transfers, and cinematic time-lapse animation steps.

const PLAN_1_ITINERARY = {
  meta: {
    titleTh: "แผน 1: เส้นทางวงรอบยูนนาน ลี่เจียง – หุบเขาเสือกระโจน – ต้าหลี่ ซานโตรินี",
    titleEn: "Plan 1: Yunnan Grand Loop (Lijiang – Tiger Leaping Gorge – Dali Santorini)",
    subtitleTh: "ทริปสโลว์ไลฟ์พรีเมียม 6 วัน 5 คืน (BKK ➔ คุนหมิง ➔ ลี่เจียง ➔ เสือกระโจน ➔ Dali ➔ คุนหมิง ➔ BKK)",
    subtitleEn: "Premium Slow-Life 6 Days 5 Nights (BKK -> Kunming -> Lijiang -> Tiger Leaping Gorge -> Dali -> Kunming -> BKK)",
    dateRange: "5 – 10 ธันวาคม 2026",
    daysCount: 6,
    nightsCount: 5,
    altitudeRange: "1,800 - 2,400 ม. (ออกซิเจนสมบูรณ์ เที่ยวสบาย 100% ไม่มีปัญหา AMS)",
    estimatedBudget: "~35,300 – 47,600 บาท / ท่าน",
    highlights: [
      "เส้นทางวงรอบสมบูรณ์แบบ ไม่ย้อนศร (คุนหมิง ➔ ลี่เจียง ➔ เสือกระโจน ➔ ต้าหลี่ ➔ คุนหมิง)",
      "พักผ่อนเมืองเก่าลี่เจียง (ซู่เหอ) 1 คืน วิวเทือกเขาหิมะมังกรหยก & หุบเขาพระจันทร์สีน้ำเงิน (Blue Moon Valley)",
      "พักผ่อนบนเขาสูงหุบเขาเสือกระโจน 2 คืนเต็มอิ่ม ณ โฮมสเตย์กระจกพาโนรามา Cloud Way ริมผา",
      "ชมแสงแรกยอดเขาหิมะกลายเป็นสีทอง 'รื่อจ้าวชินซาน' (日照金山) จากบนเตียงนอนและสระกระจกเงาฟ้า",
      "ลงสัมผัสพลังสายน้ำเชี่ยวกรากหุบเขาเสือกระโจนด้วยบันไดเลื่อนกระจกชมวิว สะดวกสบาย ไม่ต้องเดินเหนื่อย",
      "พักผ่อนรีสอร์ทหน้าผาสไตล์ถ้ำสีขาว Dali Santorini (หลี่เซียงปัง) ริมทะเลสาบเอ๋อร์ไห่ 1 คืน",
      "สโลว์ไลฟ์ต้าหลี่: ปั่นจักรยานโค้งตัว S ปันซี, ถ่ายรูปตึกหัวมุมจ้วนเจี่ยวโหลว และทุ่งนาสีทองเมืองโบราณซีโจว",
      "ขากลับนั่งรถไฟความเร็วสูงจากต้าหลี่สู่คุนหมิงเพียง 2 ชม. ชมนกนางนวลไซบีเรียชุ่ยหู และช้อปปิ้งตลาดดอกไม้โต่วหนาน"
    ]
  },

  // Key Coordinates (AMAP GCJ-02 Datum)
  locations: {
    bkk: { nameTh: "กรุงเทพฯ (BKK / DMK)", nameEn: "Bangkok", coords: [13.6900, 100.7501], icon: "✈️" },
    kmgAirport: { nameTh: "สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG)", nameEn: "Kunming Changshui Airport", coords: [25.1018, 102.9298], icon: "🛫" },
    kmgStation: { nameTh: "สถานีรถไฟคุนหมิง", nameEn: "Kunming Railway Station", coords: [25.0163, 102.7167], icon: "🚉" },
    lijiangStation: { nameTh: "สถานีรถไฟความเร็วสูงลี่เจียง", nameEn: "Lijiang Railway Station", coords: [26.8055, 100.2310], icon: "🚅" },
    shuheTown: { nameTh: "เมืองโบราณซู่เหอ ลี่เจียง", nameEn: "Shuhe Ancient Town (Lijiang)", coords: [26.9200, 100.2050], icon: "🏮" },
    blueMoonValley: { nameTh: "หุบเขาพระจันทร์สีน้ำเงิน (แม่น้ำไป๋สุ่ยเหอ)", nameEn: "Blue Moon Valley (Baishui River)", coords: [27.1350, 100.2350], icon: "🌊" },
    baishaTown: { nameTh: "เมืองโบราณไป๋ซา (กาแฟวิวเขาหิมะ)", nameEn: "Baisha Ancient Town", coords: [26.9550, 100.2150], icon: "☕" },
    tigerLeapingStation: { nameTh: "สถานีรถไฟเสือกระโจน", nameEn: "Tiger Leaping Gorge Station", coords: [27.1700, 100.0800], icon: "🚅" },
    cloudWayHomestay: { nameTh: "โฮมสเตย์กระจกเขาสูง Cloud Way เสือกระโจน", nameEn: "Cloud Way High Road Homestay", coords: [27.2450, 100.1650], icon: "🏡" },
    upperTigerLeaping: { nameTh: "จุดชมวิวหุบเขาเสือกระโจนตอนบน & บันไดเลื่อน", nameEn: "Upper Tiger Leaping Gorge", coords: [27.1850, 100.1250], icon: "🐯" },
    daliStation: { nameTh: "สถานีรถไฟความเร็วสูงต้าหลี่", nameEn: "Dali HSR Station", coords: [25.5898, 100.2520], icon: "🚅" },
    daliSantorini: { nameTh: "รีสอร์ทซานโตรินีต้าหลี่ (หลี่เซียงปัง)", nameEn: "Dali Santorini (Ideal State)", coords: [25.6830, 100.2740], icon: "🏛️" },
    panxiSbay: { nameTh: "โค้งตัว S ปันซีไห่ซี (ทะเลสาบเอ๋อร์ไห่)", nameEn: "Panxi S-Bay (Erhai Lake)", coords: [25.7950, 100.1580], icon: "🚲" },
    xizhouTown: { nameTh: "เมืองโบราณซีโจว (ตึกหัวมุม & ทุ่งนาสีทอง)", nameEn: "Xizhou Ancient Town & Wheat Fields", coords: [25.8500, 100.1300], icon: "🌾" },
    greenLakePark: { nameTh: "สวนสาธารณะชุ่ยหู คุนหมิง (ฝูงนกนางนวลไซบีเรีย)", nameEn: "Green Lake Park (Cuihu)", coords: [25.0505, 102.7045], icon: "🕊️" },
    dounanFlower: { nameTh: "ตลาดค้าดอกไม้สดโต่วหนาน", nameEn: "Dounan Flower Market", coords: [24.9080, 102.7850], icon: "💐" }
  },

  // High-Speed Railway Paths for Animated Mini Train Interpolation
  railways: {
    kunmingToLijiang: [
      [25.0163, 102.7167], // Kunming Station
      [25.0500, 102.4000],
      [25.0350, 101.9000],
      [25.0350, 101.5400], // Chuxiong (楚雄)
      [25.2000, 101.1000],
      [25.3500, 100.7500], // Xiangyun (祥云)
      [25.5898, 100.2520], // Dali Station
      [25.7500, 100.3200],
      [26.1000, 100.2800],
      [26.4000, 100.2200], // Heqing (鹤庆)
      [26.8055, 100.2310]  // Lijiang Station
    ],
    lijiangToTigerLeaping: [
      [26.8055, 100.2310], // Lijiang Station
      [27.0000, 100.1800],
      [27.1700, 100.0800]  // Tiger Leaping Gorge Station
    ],
    tigerLeapingToDali: [
      [27.1700, 100.0800], // Tiger Leaping Gorge Station
      [27.0000, 100.1800],
      [26.8055, 100.2310], // Lijiang Station
      [26.4000, 100.2200], // Heqing
      [26.1000, 100.2800],
      [25.7500, 100.3200],
      [25.5898, 100.2520]  // Dali Station
    ],
    daliToKunming: [
      [25.5898, 100.2520], // Dali Station
      [25.3500, 100.7500],
      [25.2000, 101.1000],
      [25.0350, 101.5400], // Chuxiong
      [25.0350, 101.9000],
      [25.0500, 102.4000],
      [25.0163, 102.7167]  // Kunming Station
    ]
  },

  // City Transit Routes for Animated Micro-Vehicles
  routes: {
    kmgAirportToStation: [
      [25.1018, 102.9298], // Changshui Airport (KMG)
      [25.0880, 102.8850], // Airport Expressway Gate
      [25.0720, 102.8420], // Dabanqiao
      [25.0530, 102.7950], // East Ring Road Viaduct
      [25.0340, 102.7480], // Tuodong Road
      [25.0240, 102.7240], // Tangzixiang
      [25.0163, 102.7167]  // Kunming Railway Station
    ]
  },

  // RPG Tactical Decisions (Interactive choices at critical travel transfer points)
  transitDecisions: {
    airportTransit: {
      id: "airportTransit",
      titleTh: "เควสต์เลือกวิธีเดินทาง: สนามบินคุนหมิง (KMG) ➔ สถานีรถไฟคุนหมิง (昆明站)",
      promptTh: "✈️ ถึงสนามบินคุนหมิงฉางสุ่ย (KMG) แล้ว! กรุณาเลือกวิธีเดินทางเข้าสถานีรถไฟความเร็วสูง:",
      options: [
        {
          id: "didi",
          num: 1,
          nameTh: "เรียกรถ DiDi ผ่าน Alipay / Taxi (ทางเลือกแนะนำ ⭐)",
          nameEn: "DiDi / Taxi via Alipay (Recommended)",
          badgeTh: "⚡ สบาย & ไวสุด",
          badgeColor: "#ea580c",
          icon: "🚗",
          time: "35 – 45 นาที",
          cost: "80 – 110 หยวน (~400 – 550 บาท)",
          vehicleType: "car",
          vehicleSprite: "🚕💨",
          suitableFor: "สัมภาระใหญ่ 24–28 นิ้ว / มา 2–4 คนหารกันคุ้มสุด",
          descTh: "เดินไปชั้น 1 ประตู 3 จุดนัดพบรถออนไลน์ (网约车) นั่งตรงขึ้นทางด่วนถึงหน้าสถานีรถไฟชั้น 2 ไม่ต้องยกกระเป๋าขึ้นลงบันได",
          speechTh: "🚗 เลือกเรียกรถ DiDi ผ่าน Alipay! คนขับมารับที่ชั้น 1 ประตู 3 ขึ้นทางด่วนฉิว 40 นาที ถึงหน้าสถานีรถไฟคุนหมิง (昆明站) สะดวกสบาย ไม่ต้องลากกระเป๋าหนัก!",
          speechEn: "Hailed a DiDi via Alipay at Gate 3! Cruised the expressway for 40 mins right to Kunming Station entrance. Effortless with heavy luggage!"
        },
        {
          id: "metro",
          num: 2,
          nameTh: "รถไฟใต้ดิน Kunming Metro (สาย 6 ➔ สาย 2)",
          nameEn: "Kunming Metro (Line 6 to Line 2)",
          badgeTh: "⏱️ คุมเวลาเป๊ะ 100%",
          badgeColor: "#0284c7",
          icon: "🚇",
          time: "45 – 50 นาที",
          cost: "6 หยวน (~30 บาท / ท่าน)",
          vehicleType: "subway",
          vehicleSprite: "🚇💨",
          suitableFor: "สัมภาระกะทัดรัด เน้นคุมเวลา ไม่เสี่ยงรถติดช่วงเร่งด่วน",
          descTh: "ลงชั้น B1 สแกน QR Code Alipay Transport ขึ้นสาย 6 นั่ง 8 สถานี ต่อสาย 2 ที่ Tangzixiang อีก 1 สถานี ออก Exit A/C เข้าสถานีรถไฟ",
          speechTh: "🚇 เดินลงชั้น B1 สแกน Alipay Transport ขึ้นรถไฟใต้ดินสาย 6 ต่อสาย 2 ที่ Tangzixiang เพียง 48 นาที ถึงสถานีรถไฟคุนหมิงอย่างตรงเวลาเป๊ะ!",
          speechEn: "Took Kunming Metro Line 6 and transferred to Line 2 at Tangzixiang. 48 mins sharp right into Kunming Railway Station!"
        },
        {
          id: "bus",
          num: 3,
          nameTh: "แอร์พอร์ตชัตเติลบัส สาย 2 (空港2号线)",
          nameEn: "Airport Express Bus Line 2",
          badgeTh: "🌿 นั่งชิลชมวิวเมือง",
          badgeColor: "#10b981",
          icon: "🚌",
          time: "50 – 60 นาที",
          cost: "25 หยวน (~125 บาท / ท่าน)",
          vehicleType: "bus",
          vehicleSprite: "🚌💨",
          suitableFor: "คนชอบนั่งชมวิวเรื่อยๆ สัมภาระวางใต้ท้องรถได้",
          descTh: "ซื้อตั๋วที่เคาน์เตอร์ชั้น 1 ประตู 2-3 รถออกทุก 20 นาที นั่งตรงสู่ลานหน้าสถานีรถไฟคุนหมิง ไม่ต้องเปลี่ยนสาย",
          speechTh: "🚌 ซื้อตั๋วแอร์พอร์ตบัสสาย 2 ราคา 25 หยวน ขึ้นรถที่ชั้น 1 นั่งชมวิวเมืองคุนหมิง 55 นาที มาจอดส่งถึงลานหน้าสถานีรถไฟคุนหมิงอย่างสบายใจ!",
          speechEn: "Hopped on Airport Express Bus Line 2 for 25 RMB. Enjoyed a scenic 55-min city view ride to the Kunming Station plaza!"
        }
      ]
    },

    lijiangTransit: {
      id: "lijiangTransit",
      titleTh: "เควสต์เลือกวิธีเดินทาง: สถานีรถไฟลี่เจียง ➔ เมืองโบราณซู่เหอ",
      promptTh: "🚅 ถึงสถานีรถไฟลี่เจียง (丽江站) แล้ว! เลือกวิธีเดินทางเข้าสู่ที่พักในเมืองเก่า:",
      options: [
        {
          id: "privateVan",
          num: 1,
          nameTh: "รถตู้รับ-ส่งส่วนตัว + รถเข็นกระเป๋าโรงแรม (แนะนำที่สุด ⭐⭐⭐)",
          nameEn: "Private Van + Hotel Luggage Cart (Recommended)",
          badgeTh: "⭐ สบายระดับ VIP",
          badgeColor: "#0284c7",
          icon: "🚐",
          time: "25 – 30 นาที",
          cost: "40 – 60 หยวน (~200 – 300 บาท / คัน)",
          vehicleType: "van",
          vehicleSprite: "🚐💨",
          suitableFor: "คนมีกระเป๋าเดินทางใบใหญ่ ไม่อยากลากกระเป๋าล้อพังบนถนนหินโบราณ",
          descTh: "คนขับรอรับที่ทางออกสถานี ขับส่งถึงประตูเมืองโบราณซู่เหอ พนักงานโรงแรมนำรถเข็นมารับสัมภาระพาเดินเข้าโรงแรม",
          speechTh: "🚐 นั่งรถตู้ส่วนตัว 25 นาที ส่งถึงประตูเมืองซู่เหอ พนักงานโรงแรมเข็นรถลากกระเป๋าพาเข้าที่พัก สบายมาก ไม่ต้องลากกระเป๋าบนหินโบราณ!",
          speechEn: "Private van direct to Shuhe gate. Hotel porter handled our heavy bags with luggage cart, saving our wheels from cobbled stones!"
        },
        {
          id: "taxi",
          num: 2,
          nameTh: "แท็กซี่มิเตอร์หน้าสถานี (Lijiang Station Taxi)",
          nameEn: "Metered Taxi outside Station",
          badgeTh: "⚡ สะดวกรวดเร็ว",
          badgeColor: "#ea580c",
          icon: "🚕",
          time: "30 นาที",
          cost: "45 – 55 หยวน (~225 – 275 บาท)",
          vehicleType: "car",
          vehicleSprite: "🚕💨",
          suitableFor: "เดินทาง 1-2 คน สัมภาระน้อย",
          descTh: "เข้าคิวแท็กซี่มิเตอร์หน้าทางออกสถานี วิ่งเลี่ยงเมืองส่งที่ประตูทิศเหนือเมืองโบราณซู่เหอ",
          speechTh: "🚕 ต่อแท็กซี่มิเตอร์หน้าสถานี 30 นาที ถึงซุ้มประตูเมืองโบราณซู่เหอ เดินลากกระเป๋าเข้าที่พักรับลมหนาว!",
          speechEn: "Took a metered taxi from the station curb directly to Shuhe North Gate in 30 mins."
        }
      ]
    },

    gorgeAscent: {
      id: "gorgeAscent",
      titleTh: "เควสต์เลือกวิธีเดินทาง: ลี่เจียง ➔ โฮมสเตย์ Cloud Way เสือกระโจน",
      promptTh: "🏔️ กำลังเดินทางสู่หุบเขาเสือกระโจน! เลือกวิธีไต่ระดับขึ้นสู่ถนนเขาสูง Upper Trail:",
      options: [
        {
          id: "suv4wd",
          num: 1,
          nameTh: "รถ SUV 4WD ของโรงแรม Cloud Way รับตรงขึ้นเขา (แนะนำ 100% ⭐⭐⭐)",
          nameEn: "Cloud Way 4WD SUV Direct Climb (Recommended)",
          badgeTh: "⭐ ไม่ต้องเดินเทรคกิ้ง",
          badgeColor: "#059669",
          icon: "🚙",
          time: "1 ชม. 15 นาที",
          cost: "รวมในแพ็กเกจ / 350-400 หยวนต่อคัน",
          vehicleType: "suv",
          vehicleSprite: "🚙💨",
          suitableFor: "ทุกคนที่ต้องการพักผ่อนระดับพรีเมียม ไม่ต้องแบกเป้เดินเขา 2 วัน",
          descTh: "รถ SUV ขับเคลื่อน 4 ล้อรับจากลี่เจียง วิ่งเลียบแม่น้ำจินซาเจียง ไต่ถนนเขาสูงคอนกรีตส่งถึงหน้าล็อบบี้ Cloud Way ริมผา",
          speechTh: "🚙 รถ SUV 4WD พาวิ่งไต่ถนนเขาสูงโค้งเลียบหน้าผา นั่งสบาย ไม่ต้องแบกเป้เดินป่า ส่งถึงหน้าโรงแรม Cloud Way ชมวิวเขาหิมะเต็มตา!",
          speechEn: "Cruised up the dramatic mountain cliff roads in a sturdy 4WD SUV right to Cloud Way lobby. Zero hiking fatigue!"
        },
        {
          id: "trainThenSuv",
          num: 2,
          nameTh: "รถไฟ CRH 20 นาที สู่สถานีเสือกระโจน + ต่อรถ SUV ท้องถิ่น",
          nameEn: "CRH Train (20 mins) + Local Gorge SUV",
          badgeTh: "🚅 สัมผัสรถไฟสายใหม่",
          badgeColor: "#0284c7",
          icon: "🚅",
          time: "20 นาที + รถ 35 นาที",
          cost: "26 หยวน (ตั๋วรถไฟ) + รถ 150 หยวน",
          vehicleType: "train",
          vehicleSprite: "🚅💨",
          suitableFor: "ผู้ที่อยากลองนั่งรถไฟสายใหม่ ลี่เจียง-แชงกรีล่า",
          descTh: "นั่งรถไฟหัวกระสุน CRH ลี่เจียง ➔ สถานีเสือกระโจนเพียง 20 นาที แล้วต่อรถ SUV หน้าสถานีไต่ขึ้นสู่ Upper Trail",
          speechTh: "🚅 นั่งรถไฟความเร็วสูงสายใหม่แค่ 20 นาที ลอดอุโมงค์ถึงสถานีเสือกระโจน แล้วต่อรถ SUV ไต่ขึ้นโฮมสเตย์!",
          speechEn: "Took the ultra-fast 20-min new bullet train through tunnels to Hutiaoxia Station, then SUV up the ridge!"
        }
      ]
    },

    gorgeEscalator: {
      id: "gorgeEscalator",
      titleTh: "เควสต์เลือกวิธีลงก้นหุบเขา: ชมโขดหินเสือกระโจน (Tiger Stone)",
      promptTh: "🐯 ถึงจุดชมวิวหุบเขาเสือกระโจนตอนบน! เลือกวิธีลงสู่ริมฝั่งแม่น้ำจินซาเจียง:",
      options: [
        {
          id: "escalator",
          num: 1,
          nameTh: "บันไดเลื่อนกระจกชมวิว Scenic Escalator 4 ตอน (แนะนำ ⭐⭐⭐)",
          nameEn: "Scenic Glass Escalator 4 Tiers (Recommended)",
          badgeTh: "⭐ สบาย ไม่ปวดเข่า",
          badgeColor: "#059669",
          icon: "🛗",
          time: "10 นาที",
          cost: "ไป-กลับ 70 หยวน (~350 บาท)",
          vehicleType: "escalator",
          vehicleSprite: "🛗✨",
          suitableFor: "ทุกเพศทุกวัย ปลอดภัย สบาย ไม่เหนื่อยล้า",
          descTh: "ยืนบนบันไดเลื่อนปรับอากาศชมวิวผ่านกระจก 4 ตอน เลื่อนลงสู่ริมแม่น้ำจินซาเจียง และเลื่อนขึ้นกลับชิลล์ๆ",
          speechTh: "🛗 ยืนบนบันไดเลื่อนกระจกชมวิว 4 ช่วง เลื่อนลงสู่ก้นหุบเขาอย่างสบาย ไม่เหนื่อย ไม่ปวดเข่า ถ่ายรูปโขดหินเสือกระโจนเต็มอิ่ม!",
          speechEn: "Glided down via 4-tier glass escalator right to the riverbank. Effortless descent with zero knee pain!"
        },
        {
          id: "steps",
          num: 2,
          nameTh: "เดินบันไดหินดั้งเดิม 1,000 กว่าขั้น (Traditional Stone Steps)",
          nameEn: "1,000 Traditional Stone Steps",
          badgeTh: "💪 ท้าทายกำลังขา",
          badgeColor: "#ea580c",
          icon: "🚶‍♂️",
          time: "45 – 60 นาที",
          cost: "ฟรี (รวมในตั๋วเข้า)",
          vehicleType: "walk",
          vehicleSprite: "🚶‍♂️💦",
          suitableFor: "สายฟิตเนส ขาแข็งแรง",
          descTh: "เดินลงและเดินปีนขึ้นบันไดหินชันกว่า 1,000 ขั้น สัมผัสความชันแบบดั้งเดิม",
          speechTh: "🚶‍♂️ เดินบันไดหิน 1,000 ขั้น ขาเริ่มล้า แต่ได้เหงื่อและสัมผัสความชันของหน้าผาอย่างใกล้ชิด!",
          speechEn: "Hiked the steep 1,000 stone steps down and up. A true leg workout!"
        }
      ]
    },

    erhaiActivity: {
      id: "erhaiActivity",
      titleTh: "เควสต์เลือกพาหนะ: สโลว์ไลฟ์ริมทะเลสาบเอ๋อร์ไห่ โค้งตัว S ปันซี",
      promptTh: "🚲 ถึงเส้นทางสีเขียวเลียบทะเลสาบเอ๋อร์ไห่ (Erhai Greenway) แล้ว! เลือกพาหนะชมวิว:",
      options: [
        {
          id: "bike",
          num: 1,
          nameTh: "เช่าจักรยานคลาสสิกริมน้ำ (Classic Lakeside Bicycle - แนะนำ ⭐)",
          nameEn: "Classic Lakeside Bicycle (Recommended)",
          badgeTh: "📸 โรแมนติก & ถ่ายรูปสวย",
          badgeColor: "#0284c7",
          icon: "🚲",
          time: "1.5 – 2 ชม.",
          cost: "15 – 20 หยวน (~75 – 100 บาท / คัน / วัน)",
          vehicleType: "bike",
          vehicleSprite: "🚲🍂",
          suitableFor: "คู่รัก เพื่อนฝูง สายถ่ายรูปสโลว์ไลฟ์",
          descTh: "เช่าจักรยานวินเทจมีตะกร้าดอกไม้ ปั่นช้าๆ เลียบผืนน้ำสีฟ้า รับลมหนาว 12°C ถ่ายมุมโค้งตัว S ปันซี",
          speechTh: "🚲 เช่าจักรยานคลาสสิกปั่นรับลมหนาวเลียบน้ำเอ๋อร์ไห่ ทิวสนผลัดใบสีส้ม แวะจิบกาแฟริมทาง ชิลล์ที่สุดในทริป!",
          speechEn: "Pedaling a vintage bike along the calm Erhai shore. Golden redwood pines and crisp breeze, pure bliss!"
        },
        {
          id: "golfCart",
          num: 2,
          nameTh: "รถกอล์ฟไฟฟ้าชมวิวของอุทยาน (Greenway Electric Cart)",
          nameEn: "Greenway Electric Sightseeing Cart",
          badgeTh: "🛋️ นั่งสบายไม่ต้องออกแรง",
          badgeColor: "#10b981",
          icon: "🛺",
          time: "1 ชม.",
          cost: "30 หยวน (~150 บาท / ท่าน)",
          vehicleType: "golfCart",
          vehicleSprite: "🛺💨",
          suitableFor: "ผู้สูงอายุ หรือผู้ที่ไม่อยากปั่นจักรยาน",
          descTh: "นั่งรถกอล์ฟไฟฟ้าเปิดประทุน มีหลังคากันแดด วิ่งชมวิวเลียบทะเลสาบตามเส้นทางที่กำหนด",
          speechTh: "🛺 นั่งรถกอล์ฟไฟฟ้าชมวิวเลียบทะเลสาบ ลมพัดเย็นสบาย ไม่ต้องออกแรงปั่น!",
          speechEn: "Cruised comfortably in an open-air electric sightseeing cart along the Erhai Greenway!"
        }
      ]
    },

    dounanTransit: {
      id: "dounanTransit",
      titleTh: "เควสต์เลือกวิธีเดินทาง: คุนหมิง ➔ ตลาดค้าดอกไม้สดโต่วหนาน",
      promptTh: "💐 เช้าวันสุดท้ายในคุนหมิง! เลือกวิธีเดินทางสู่ตลาดดอกไม้สดโต่วหนานที่ใหญ่ที่สุดในเอเชีย:",
      options: [
        {
          id: "didiExpress",
          num: 1,
          nameTh: "รถตู้ VIP / DiDi ทางด่วนวงแหวนใต้ (แนะนำ ⭐)",
          nameEn: "DiDi / VIP Van via South Ring Expressway (Recommended)",
          badgeTh: "⚡ สะดวกสบาย มีที่เก็บของฝาก",
          badgeColor: "#ea580c",
          icon: "🚗",
          time: "25 – 30 นาที",
          cost: "45 – 60 หยวน (~225 – 300 บาท)",
          vehicleType: "car",
          vehicleSprite: "🚕💨",
          suitableFor: "สัมภาระพร้อม มีกล่องใส่ดอกไม้และของฝาก",
          descTh: "รถมารับถึงหน้าโรงแรม วิ่งขึ้นทางด่วนวงแหวนใต้ส่งถึงประตูหน้าตลาดดอกไม้โต่วหนาน ไม่ต้องเดินไกล",
          speechTh: "🚗 นั่ง DiDi ขึ้นทางด่วน 25 นาที ถึงตลาดดอกไม้โต่วหนาน มีที่วางสัมภาระและกล่องของฝากพร้อม!",
          speechEn: "Took DiDi via expressway in 25 mins straight to Dounan Flower Market gate. Perfect for luggage & flower gifts!"
        },
        {
          id: "metroLine",
          num: 2,
          nameTh: "รถไฟใต้ดิน Kunming Metro (สาย 1 หรือ 4)",
          nameEn: "Kunming Metro Line 1 / 4 to Dounan",
          badgeTh: "💰 ประหยัด & คุมเวลา",
          badgeColor: "#0284c7",
          icon: "🚇",
          time: "40 นาที",
          cost: "5 หยวน (~25 บาท / ท่าน)",
          vehicleType: "subway",
          vehicleSprite: "🚇💨",
          suitableFor: "เน้นประหยัด เดินเล่นสบายๆ",
          descTh: "ขึ้น Metro Line 1 หรือ Line 4 ลงสถานี Dounan Station (斗南站) ทางออก C เดิน 5 นาทีถึงตลาด",
          speechTh: "🚇 นั่งรถไฟใต้ดินสาย 4 มาลงสถานี Dounan ออกทางออก C เดิน 5 นาทีถึงอาคารตลาดดอกไม้!",
          speechEn: "Rode Metro Line 4 straight to Dounan Station Exit C, 5-min walk into the flower hall!"
        }
      ]
    }
  },

  // Backward compatibility alias
  get airportOptions() {
    return this.transitDecisions.airportTransit.options;
  },

  // 6 Days Detailed Schedule (List Mode) with Comprehensive Real-World Transit Guides
  days: [
    {
      day: 1,
      date: "5 ธ.ค. 2026",
      titleTh: "กรุงเทพฯ – คุนหมิง – รถไฟความเร็วสูงสู่ลี่เจียง – เช็คอินเมืองโบราณซู่เหอ",
      titleEn: "Bangkok – Direct Flight to Kunming – HSR to Lijiang – Check-in Shuhe Ancient Town",
      tagColor: "#0284c7",
      tagBg: "#f0f9ff",
      icon: "🏮",
      altitude: "2,400 ม.",
      stay: {
        nameTh: "The Bivou Lijiang / Banyan Tree Lijiang",
        nameZh: "丽江花间堂 / 丽江悦榕庄",
        type: "โรงแรมบูทีคไม้โบราณริมลำธารใส วิวภูเขาหิมะมังกรหยก สงบเงียบ ปราศจากเสียงรบกวน (คืนที่ 1)"
      },
      mealsTh: "กลางวัน: อาหารว่างบนเครื่องบิน / ก๋วยเตี๋ยวสถานีคุนหมิง | เย็น: หม้อไฟซี่โครงหมูแห้งน่าซี (丽江腊排骨火锅)",
      mealsEn: "Lunch: In-flight snack / Kunming station noodles | Dinner: Authentic Naxi cured pork ribs hotpot",
      
      // Step-by-Step Real Transit Guide for Day 1
      transfers: [
        {
          step: 1,
          from: "กรุงเทพฯ (BKK/DMK)",
          to: "สนามบินคุนหมิงฉางสุ่ย (KMG)",
          mode: "✈️ เครื่องบินพาณิชย์ (Direct Flight)",
          duration: "2 ชม. 15 นาที",
          detail: "บินตรงจากไทย ผ่าน ตม. ฟรีวีซ่าไทย-จีน 30 วัน สแกนลายนิ้วมือที่ Kiosk แล้วเดินเข้าช่อง All Passports ตรวจพาสปอร์ตไทย รับกระเป๋าที่ชั้น 1",
          tip: "พาสปอร์ตต้องมีอายุเหลือเกิน 6 เดือน ไม่ต้องกรอกใบ ตม. กระดาษแล้ว"
        },
        {
          step: 2,
          from: "สนามบิน KMG",
          to: "สถานีรถไฟคุนหมิง (昆明站 - Kunming Station)",
          mode: "🚕 DiDi / Taxi (ทางเลือกแนะนำ ⭐) หรือ 🚇 Metro สาย 6 ➔ 2",
          duration: "35 – 45 นาที",
          detail: "ทางเลือก A (แนะนำ): เดินไปชั้น 1 ประตู 3 จุดนัดพบรถออนไลน์ (网约车) เรียกรถ DiDi ผ่าน Alipay วิ่งขึ้นทางด่วน Airport Expressway ส่งถึงหน้าประตูสถานีชั้น 2 ไม่ต้องยกกระเป๋า (~80-110 หยวน) | ทางเลือก B: ลงชั้น B1 สแกน Alipay Transport นั่ง Metro สาย 6 ลง Tangzixiang ต่อสาย 2 อีก 1 สถานี (6 หยวน 48 นาที)",
          tip: "ห้ามเลือกสถานี 'คุนหมิงใต้' (Kunming South) เพราะอยู่ไกลกว่า 40 กม. ต้องเลือก 'สถานีคุนหมิง' (昆明站) ในเมืองเท่านั้น!"
        },
        {
          step: 3,
          from: "สถานีรถไฟคุนหมิง (昆明站)",
          to: "สถานีรถไฟลี่เจียง (丽江站)",
          mode: "🚅 รถไฟความเร็วสูง (CRH ขบวน C/D ชั้นหนึ่ง First Class)",
          duration: "3 ชม. 15 นาที",
          detail: "เข้าสถานีผ่านช่อง Manual Check (人工通道) สแกนพาสปอร์ตเล่มจริง ไม่ต้องใช้ตั๋วกระดาษ ตรวจสัมภาระ X-Ray ขึ้นชานชาลาก่อนเวลา 15 นาที ขบวนรถไฟวิ่งผ่านฉู่สง เลี่ยงเมืองต้าหลี่ ตรงสู่สถานีลี่เจียง มีปลั๊กไฟ แอร์ และที่วางกระเป๋า 28 นิ้ว",
          tip: "จองรอบบ่าย 13:45 หรือ 14:15 น. จะมีเวลาต่อจากไฟลท์บินเช้าอย่างสบาย ไม่ต้องวิ่งเร่งรีบ"
        },
        {
          step: 4,
          from: "สถานีรถไฟลี่เจียง (丽江站)",
          to: "โรงแรมในเมืองโบราณซู่เหอ (束河古镇)",
          mode: "🚐 รถตู้รับ-ส่งส่วนตัว / DiDi + 🛒 รถเข็นกระเป๋าโรงแรม",
          duration: "25 – 30 นาที",
          detail: "ทางเลือก A (แนะนำ): รถตู้ส่วนตัว/DiDi รอรับที่ทางออกสถานี วิ่งถนนเลี่ยงเมืองส่งถึงประตูทิศเหนือเมืองโบราณซู่เหอ (~40-60 หยวน) จากนั้นพนักงานโรงแรมนำรถเข็นมารับกระเป๋าพาเดินบนถนนหินโบราณเข้าโรงแรม | ทางเลือก B: แท็กซี่มิเตอร์หน้าสถานี",
          tip: "ถนนในเมืองเก่าซู่เหอเป็นหินโบราณ แจ้งโรงแรมล่วงหน้าให้พนักงานเข็นรถลากกระเป๋าพาเข้าที่พัก ล้อกระเป๋าจะไม่พังและไม่เหนื่อยล้า!"
        }
      ],

      schedule: [
        { time: "08:00", labelTh: "บินตรงจากสนามบินสุวรรณภูมิ/ดอนเมือง สู่สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG)", icon: "✈️" },
        { time: "11:30", labelTh: "ผ่านด่าน ตม. ฟรีวีซ่าไทย-จีน รถ DiDi รับส่งสู่สถานีรถไฟคุนหมิง (昆明站) 40 นาที", icon: "🛂" },
        { time: "13:45", labelTh: "ขึ้นรถไฟความเร็วสูง (CRH) คุนหมิง ➔ ลี่เจียง 3.2 ชม. ชั้นหนึ่งปรับอากาศ นั่งสบายตลอดทาง", icon: "🚅" },
        { time: "17:15", labelTh: "ถึงสถานีรถไฟลี่เจียง รถตู้รับส่งสู่เมืองโบราณซู่เหอ (Shuhe Ancient Town)", icon: "🚙" },
        { time: "18:30", labelTh: "เช็คอินโรงแรมบูทีค เดินเล่นสะพานชิงหลง ดื่มด่ำมื้อค่ำหม้อไฟซี่โครงหมูแห้งรสเด็ด", icon: "🍲" }
      ]
    },

    {
      day: 2,
      date: "6 ธ.ค. 2026",
      titleTh: "หุบเขาพระจันทร์สีน้ำเงิน (Blue Moon Valley) – เมืองโบราณไป๋ซา – รถ SUV สู่หุบเขาเสือกระโจน",
      titleEn: "Blue Moon Valley – Baisha Ancient Town – Private SUV up to Cloud Way Homestay",
      tagColor: "#059669",
      tagBg: "#ecfdf5",
      icon: "🌊",
      altitude: "2,100 ม.",
      stay: {
        nameTh: "Upper trekking route · Cloud Way · Snowy mountain view homestay",
        nameZh: "虎跳峡高路·云途·雪山观景民宿",
        type: "โฮมสเตย์กระจกพาโนรามาบนหน้าผาสูง หันหน้าเข้าหายอดเขาหิมะมังกรหยก มีฮีตเตอร์พื้นและเตาผิง (คืนที่ 1)"
      },
      mealsTh: "เช้า: บุฟเฟต์โรงแรมในลี่เจียง | กลางวัน: ไก่ตุ๋นสมุนไพรยูนนาน ณ ไป๋ซา | เย็น: หม้อไฟไก่ดำบนเขา ณ Cloud Way",
      mealsEn: "Breakfast: Hotel buffet | Lunch: Baisha local chicken stew | Dinner: Highland black chicken hotpot at Cloud Way",

      // Step-by-Step Real Transit Guide for Day 2
      transfers: [
        {
          step: 1,
          from: "เมืองโบราณซู่เหอ",
          to: "ศูนย์บริการอุทยานภูเขาหิมะมังกรหยก (玉龙雪山游客中心)",
          mode: "🚙 รถตู้เหมาส่วนตัว / SUV",
          duration: "30 – 35 นาที",
          detail: "นั่งรถตู้ส่วนตัววิ่งผ่านถนนชมวิวภูเขาหิมะ 18 กม. ถึงศูนย์บริการนักท่องเที่ยวอุทยานภูเขาหิมะมังกรหยก",
          tip: "เตรียมเสื้อกันหนาว หมวกไหมพรม และแว่นกันแดด อากาศเชิงเขาประมาณ 8-12°C แดดสะท้อนหิมะแรง"
        },
        {
          step: 2,
          from: "ศูนย์บริการอุทยาน",
          to: "หุบเขาพระจันทร์สีน้ำเงิน (蓝月谷 / แม่น้ำไป๋สุ่ยเหอ 白水河)",
          mode: "🚌 รถบัสสีเขียวเพื่อสิ่งแวดล้อมของอุทยาน (Eco-Shuttle Bus / 景区环保车)",
          duration: "15 นาที",
          detail: "เปลี่ยนขึ้นรถบัสนำเที่ยวสีเขียวของอุทยาน วิ่งลัดเลาะลงสู่ก้นหุบเขาพระจันทร์สีน้ำเงิน ลงที่ป้าย Blue Moon Valley เดินเล่นบนสะพานไม้ริมน้ำมรกต",
          tip: "ไม่ต้องขึ้นกระเช้าสูง ไม่ต้องแย่งคิว ไม่เหนื่อยล้า และไม่มีปัญหาแพ้ความสูง (AMS)"
        },
        {
          step: 3,
          from: "หุบเขาพระจันทร์สีน้ำเงิน",
          to: "เมืองโบราณไป๋ซา (白沙古镇)",
          mode: "🚙 รถตู้รับส่งส่วนตัว",
          duration: "20 นาที",
          detail: "รถตู้รับจากอุทยานลงมาแวะเมืองโบราณไป๋ซา จิบกาแฟดริปยูนนานบนระเบียงไม้ชั้นสอง ชมวิวยอดเขาหิมะมังกรหยกแบบไม่มีอะไรบดบัง",
          tip: "เมืองไป๋ซาเป็นเมืองหลวงเก่าของชาวน่าซี กาแฟดริปเมล็ดพันธุ์ยูนนานอาราบิก้ารสชาติดีมาก"
        },
        {
          step: 4,
          from: "ลี่เจียง/ไป๋ซา",
          to: "โฮมสเตย์ Cloud Way เสือกระโจน (虎跳峡高路·云途)",
          mode: "🚙 รถ SUV 4WD ของโรงแรมรับตรง (แนะนำที่สุด ⭐⭐⭐) หรือ 🚅 รถไฟ CRH 20 นาที + รถ SUV",
          duration: "1 ชม. 15 นาที",
          detail: "ทางเลือก A (แนะนำ 100%): รถ SUV ขับเคลื่อน 4 ล้อของโรงแรม Cloud Way รับจากไป๋ซา วิ่งทางหลวงเลียบแม่น้ำจินซาเจียง 1.2 ชม. ถึงด่านตรวจอุทยานเสือกระโจน แล้วไต่ระดับขึ้นถนนเขาสูง (Upper Trail) ส่งถึงหน้าล็อบบี้ Cloud Way โดยไม่ต้องแบกเป้เดินเขา 2 วัน! | ทางเลือก B: นั่งรถไฟ CRH ลี่เจียง ➔ สถานีเสือกระโจน (20 นาที) แล้วต่อรถ SUV หน้าสถานีขึ้นเขา",
          tip: "ทางขึ้นเขาสูงค่อนข้างแคบและคดเคี้ยว ควรใช้รถ SUV ของโรงแรมที่มีคนขับชำนาญทางท้องถิ่น ปลอดภัย 100%"
        }
      ],

      schedule: [
        { time: "08:30", labelTh: "เดินทางสู่ 'หุบเขาพระจันทร์สีน้ำเงิน' (蓝月谷 Blue Moon Valley) เชิงเขาหิมะมังกรหยก", icon: "🌊" },
        { time: "10:00", labelTh: "ชมผืนน้ำสีฟ้าเทอร์ควอยซ์และมรกตใสลดหลั่นเป็นชั้นหินปูนขาว สะท้อนยอดเขาหิมะ ไม่ต้องปีนเขา ไม่เหนื่อย", icon: "📸" },
        { time: "12:00", labelTh: "แวะเมืองโบราณไป๋ซา (Baisha) จิบกาแฟดริปยูนนานริมระเบียงชมวิวยอดเขาหิมะมังกรหยก", icon: "☕" },
        { time: "13:30", labelTh: "นั่งรถ SUV ส่วนตัว มุ่งหน้าสู่หุบเขาเสือกระโจน (75 กม. ใช้เวลาเพียง 1.2 ชม.)", icon: "🚙" },
        { time: "16:00", labelTh: "รถ SUV ไต่ระดับสู่ Upper Trail เช็คอิน Cloud Way Homestay ชมแสงแดดยามเย็นฉาบหน้าผาหินปูน", icon: "🏡" }
      ]
    },

    {
      day: 3,
      date: "7 ธ.ค. 2026",
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
      mealsTh: "เช้า: กาแฟดริปร้อน & อาหารเช้าคันทรี่ | กลางวัน: ไก่บ้านผัดเห็ดโคน | เย็น: บาร์บีคิวเนื้อย่างกระทะร้อนชมดาว",
      mealsEn: "Breakfast: Drip coffee & country breakfast | Lunch: Wild mushroom chicken | Dinner: Starlight BBQ",

      // Step-by-Step Real Transit Guide for Day 3
      transfers: [
        {
          step: 1,
          from: "ห้องพัก Cloud Way Homestay",
          to: "ดาดฟ้าสระน้ำกระจกเงาฟ้า (Sky Mirror Pool)",
          mode: "🚶‍♂️ ลิฟต์/บันไดภายในโฮมสเตย์",
          duration: "1 นาที",
          detail: "เดินขึ้นดาดฟ้าเพื่อชมและถ่ายภาพปรากฏการณ์แสงแรกสีทอง 'รื่อจ้าวชินซาน' (日照金山) สะท้อนลงบนสระน้ำกระจกเงาฟ้า",
          tip: "พระอาทิตย์จะส่องกระทบยอดเขาหิมะมังกรหยกช่วงเวลา 07:35 – 08:00 น. เท่านั้น เตรียมกล้องให้พร้อม!"
        },
        {
          step: 2,
          from: "Cloud Way Homestay",
          to: "จุดชมวิวน้ำตกกวนอิน & Halfway Guesthouse",
          mode: "🚶‍♂️ เดินเท้าเส้นทางราบเลียบหน้าผา (Flat Scenic Cliff Walk)",
          duration: "30 – 45 นาที (1.5 กม.)",
          detail: "เดินเล่นยืดเส้นยืดสายตามทางเดินราบเรียบเลียบไหล่เขา ไม่มีความชัน ไม่ต้องปีนป่าย ชมวิวมุมกว้าง 360 องศาของหุบเขาที่ลึกที่สุดแห่งหนึ่งในโลก",
          tip: "ใส่รองเท้าผ้าใบเดินสบาย ทางเดินปลอดภัย มีราวกั้นในจุดริมผา"
        }
      ],

      schedule: [
        { time: "07:30", labelTh: "เปิดม่านห้องนอนชมปรากฏการณ์ 'รื่อจ้าวชินซาน' (日照金山) แสงทองแรกฉาบยอดเขาหิมะมังกรหยก", icon: "✨" },
        { time: "08:15", labelTh: "ถ่ายภาพสะท้อนยอดเขาทองคำบนสระกระจกเงาฟ้า (Sky Mirror Pool) บนดาดฟ้า Cloud Way", icon: "📸" },
        { time: "10:30", labelTh: "จิบกาแฟดริปอุ่นๆ ริมระเบียงหน้าผา อ่านหนังสือ ฟังเสียงสายลมธรรมชาติ", icon: "☕" },
        { time: "14:00", labelTh: "เดินเล่นทางเรียบเลียบไหล่เขา ไปยังจุดชมวิวน้ำตกกวนอิน และ Halfway Guesthouse", icon: "🚶‍♂️" },
        { time: "19:00", labelTh: "ปาร์ตี้บาร์บีคิวเนื้อย่างหน้าเตาผิง ชมทะเลดาวระยิบระยับเต็มท้องฟ้ายามค่ำคืน (Stargazing)", icon: "✨" }
      ]
    },

    {
      day: 4,
      date: "8 ธ.ค. 2026",
      titleTh: "บันไดเลื่อนกระจกชมแก่งน้ำเสือกระโจน – รถไฟความเร็วสูงสู่ต้าหลี่ (1.45 ชม.) – เช็คอินซานโตรินีริมผา",
      titleEn: "Scenic Escalator to Tiger Gorge – Direct HSR to Dali (1.45h) – Cliffside Santorini Resort",
      tagColor: "#ea580c",
      tagBg: "#fff7ed",
      icon: "🏛️",
      altitude: "1,970 ม.",
      stay: {
        nameTh: "Dali Songyun Cliff Resort / Miyue Santorini Seaview Resort",
        nameZh: "大理松云悬崖酒店 / 蜜悦·圣托里尼海景酒店",
        type: "รีสอร์ทสไตล์ถ้ำซานโตรินีสีขาวริมหน้าผา วิวทะเลสาบเอ๋อร์ไห่ 180° (คืนที่ 1 ในต้าหลี่)"
      },
      mealsTh: "เช้า: บุฟเฟต์ Cloud Way | กลางวัน: อาหารเซ็ตท้องถิ่นเชิงเขา | เย็น: ดินเนอร์อาหารฟิวชั่นริมผาซานโตรินี",
      mealsEn: "Breakfast: Cloud Way breakfast | Lunch: Foothill local lunch | Dinner: Cliffside fusion dinner at Santorini",

      // Step-by-Step Real Transit Guide for Day 4
      transfers: [
        {
          step: 1,
          from: "Cloud Way Homestay",
          to: "จุดชมวิวหุบเขาเสือกระโจนตอนบน (Upper Tiger Leaping Gorge)",
          mode: "🚙 รถ SUV ของโรงแรม",
          duration: "25 นาที",
          detail: "รถ SUV นำนักท่องเที่ยวและสัมภาระลงจากถนนเขาสูงสู่ลานจอดรถจุดชมวิวหุบเขาเสือกระโจนตอนบน สัมภาระฝากไว้บนรถได้อย่างปลอดภัย",
          tip: "ทางลงเขาถนนคอนกรีต นั่งชมวิวโค้งแม่น้ำจินซาเจียงจากมุมสูงได้อย่างสวยงาม"
        },
        {
          step: 2,
          from: "ลานจุดชมวิว",
          to: "ก้นหุบเขา & โขดหินเสือกระโจน (Tiger Stone / 虎跳石)",
          mode: "🛗 บันไดเลื่อนกระจกชมวิวปรับอากาศ 4 ตอน (Scenic Escalator ⭐ แนะนำ 100%)",
          duration: "10 นาที",
          detail: "ทางเลือก A (แนะนำ): ยืนบนบันไดเลื่อนกระจกชมวิวปรับอากาศ 4 ช่วง เลื่อนลงสู่ริมน้ำข้างโขดหินเสือกระโจน ขากลับขึ้นบันไดเลื่อน ไม่เมื่อยขา (ค่าบริการไป-กลับ 70 หยวน) | ทางเลือก B: เดินบันไดหินชัน 1,000 ขั้น (เหนื่อยมาก ล้าขา)",
          tip: "แนะนำบันไดเลื่อน 100% ประหยัดแรง ทำให้ไม่หมดแรงก่อนไปเที่ยวต้าหลี่ในช่วงบ่าย"
        },
        {
          step: 3,
          from: "หุบเขาเสือกระโจน",
          to: "สถานีรถไฟความเร็วสูงเสือกระโจน (虎跳峡站 - Tiger Leaping Gorge Station)",
          mode: "🚙 รถตู้รับส่งของอุทยาน / SUV",
          duration: "15 นาที",
          detail: "รถนำส่งถึงหน้าอาคารสถานีรถไฟความเร็วสูงเสือกระโจน ทานมื้อกลางวันเบาๆ หรือซื้อของว่างก่อนขึ้นรถไฟ",
          tip: "สถานีเสือกระโจนเป็นสถานีใหม่ ดีไซน์สไตล์ทิเบต สะอาด ทันสมัย"
        },
        {
          step: 4,
          from: "สถานีรถไฟเสือกระโจน (虎跳峡站)",
          to: "สถานีรถไฟต้าหลี่ (大理站 - Dali Station)",
          mode: "🚅 รถไฟความเร็วสูง (CRH ขบวน C/D ชั้นหนึ่ง First Class)",
          duration: "1 ชม. 45 นาที",
          detail: "ขบวนรถไฟหัวกระสุนสายตรง (Shangri-La – Lijiang – Dali Line) วิ่งลงใต้ผ่านลี่เจียงและเหอชิ่ง ยิงตรงถึงสถานีต้าหลี่โดยไม่ต้องลงเปลี่ยนขบวน สัมภาระวางสบาย",
          tip: "วิวช่วงเข้าใกล้ต้าหลี่จะเริ่มเห็นทะเลสาบเอ๋อร์ไห่ทางฝั่งซ้ายของขบวนรถไฟ"
        },
        {
          step: 5,
          from: "สถานีรถไฟต้าหลี่ (大理站)",
          to: "รีสอร์ทหน้าผาซานโตรินีต้าหลี่ (หลี่เซียงปัง / 理想邦)",
          mode: "🚐 รถตู้รับ-ส่งของรีสอร์ท / DiDi",
          duration: "20 นาที (16 กม.)",
          detail: "รถตู้รอรับที่สถานีต้าหลี่ ข้ามสะพานและอุโมงค์เลียบฝั่งตะวันออกของทะเลสาบเอ๋อร์ไห่ ส่งถึงล็อบบี้บนหน้าผาของ Dali Songyun Cliff Resort / Miyue Santorini (~50-70 หยวน)",
          tip: "ควรถึงรีสอร์ทก่อน 17:30 น. เพื่อเตรียมชมพระอาทิตย์อัสดงหลังเขาชางซานสะท้อนน้ำทะเลสาบ"
        }
      ],

      schedule: [
        { time: "09:30", labelTh: "รถรับลงสู่ก้นหุบเขาเสือกระโจนตอนบน ลงบันไดเลื่อนกระจกชมวิว สะดวกสบาย ไม่ต้องเดินบันได", icon: "🐯" },
        { time: "10:30", labelTh: "ยืนข้าง 'โขดหินเสือกระโจน' สัมผัสพลังสายน้ำสีเขียวมรกตไหลเชี่ยวกรากกระทบแก่งหินคำรามก้อง", icon: "🌊" },
        { time: "14:00", labelTh: "ขึ้นรถไฟความเร็วสูง (CRH) ขบวนตรง สถานีเสือกระโจน ➔ สถานีต้าหลี่ ใช้เวลาเพียง 1.45 ชม.", icon: "🚅" },
        { time: "16:30", labelTh: "ถึงสถานีต้าหลี่ รถตู้รับข้ามสะพานเข้าสู่ 'หลี่เซียงปัง' (Dali Santorini) ริมทะเลสาบเอ๋อร์ไห่", icon: "🚙" },
        { time: "18:00", labelTh: "ชมพระอาทิตย์อัสดงสีส้มอมชมพูค่อยๆ ลับขอบฟ้าหลังทิวเขาชางซาน สะท้อนผืนน้ำทะเลสาบเอ๋อร์ไห่", icon: "🌅" }
      ]
    },

    {
      day: 5,
      date: "9 ธ.ค. 2026",
      titleTh: "สโลว์ไลฟ์ต้าหลี่ (โค้งตัว S ปันซี & ซีโจว) – รถไฟความเร็วสูง 2 ชม. สู่คุนหมิง – ฝูงนกนางนวลไซบีเรีย",
      titleEn: "Dali Slow Life (Panxi S-Bay & Xizhou) – Direct HSR to Kunming (2h) – Siberian Gulls at Cuihu",
      tagColor: "#7c3aed",
      tagBg: "#f5f3ff",
      icon: "🕊️",
      altitude: "1,890 ม.",
      stay: {
        nameTh: "Grand Park Kunming / Sofitel Kunming Hotel",
        nameZh: "昆明君乐酒店 / 索菲特大酒店",
        type: "โรงแรมหรูระดับ 5 ดาวใจกลางเมืองคุนหมิง ติดสวนชุ่ยหูและย่านช้อปปิ้ง (คืนที่ 1 ในคุนหมิง)"
      },
      mealsTh: "เช้า: บุฟเฟต์ลอยน้ำริมสระซานโตรินี | กลางวัน: ขนมปาปาซีโจว & ยำไก่ฉีกชาวไป๋ | เย็น: ก๋วยเตี๋ยวข้ามสะพานหม้อหินร้อนเดือด",
      mealsEn: "Breakfast: Floating breakfast | Lunch: Xizhou baba & Bai chicken salad | Dinner: Authentic Guoqiao Mixian",

      // Step-by-Step Real Transit Guide for Day 5
      transfers: [
        {
          step: 1,
          from: "รีสอร์ทซานโตรินี (หลี่เซียงปัง ฝั่งตะวันออก)",
          to: "โค้งตัว S ปันซีไห่ซี (Panxi S-Bay 磻溪村S湾 ฝั่งตะวันตก)",
          mode: "🚙 รถยนต์ส่วนตัว / DiDi",
          duration: "30 นาที (25 กม.)",
          detail: "นั่งรถข้ามสะพานและถนนเลี่ยงเมืองเลียบมายังชายฝั่งตะวันตก (ไห่ซี) ของทะเลสาบเอ๋อร์ไห่ สู่จุดเช็คอินโค้งตัว S ปันซี",
          tip: "ฝั่งตะวันตก (ไห่ซี) ห้ามรถยนต์วิ่งริมน้ำ ต้องจอดที่ลานจอดรถแล้วเดินเข้าสู่เลนสีเขียว 100 เมตร"
        },
        {
          step: 2,
          from: "จุดเช็คอินโค้งตัว S ปันซี",
          to: "เส้นทางสีเขียวเลียบทะเลสาบ (Erhai Ecological Greenway)",
          mode: "🚲 เช่าจักรยานคลาสสิกริมน้ำ (แนะนำ ⭐) หรือ 🛺 รถกอล์ฟไฟฟ้าชมวิว",
          duration: "1.5 – 2 ชม.",
          detail: "ทางเลือก A (แนะนำ): เช่าจักรยานคลาสสิก 15-20 หยวน ปั่นเลียบริมน้ำ รับลมหนาว 12°C ถ่ายรูปคู่กับทิวสนเรดวูดสีส้มทอง | ทางเลือก B: นั่งรถกอล์ฟไฟฟ้าของอุทยาน 30 หยวน นั่งสบายไม่ต้องออกแรงปั่น",
          tip: "จุดถ่ายรูปที่สวยที่สุดคือบริเวณหัวโค้งที่มีต้นสนเรดวูดโน้มเข้าหาผืนน้ำทะเลสาบ"
        },
        {
          step: 3,
          from: "โค้งตัว S ปันซี",
          to: "เมืองโบราณซีโจว (喜洲古镇 - Xizhou Ancient Town)",
          mode: "🚙 รถยนต์ส่วนตัว / DiDi",
          duration: "15 นาที (12 กม.)",
          detail: "นั่งรถขึ้นเหนือ 15 นาที สู่เมืองโบราณซีโจว เดินชมสถาปัตยกรรมคฤหาสน์โบราณของชนเผ่าไป๋ ตึกหัวมุมจ้วนเจี่ยวโหลว และทุ่งนาสีทอง",
          tip: "อย่าลืมชิมขนมปาปาซีโจว (喜洲粑粑) ไส้หวานกุหลาบหรือไส้เค็มหมูสับ อบจากโอ่งดินเผาร้อนๆ"
        },
        {
          step: 4,
          from: "เมืองโบราณซีโจว",
          to: "สถานีรถไฟความเร็วสูงต้าหลี่ (大理站)",
          mode: "🚙 รถยนต์ส่วนตัว / DiDi",
          duration: "35 นาที (30 กม.)",
          detail: "รถส่งตรงสู่สถานีรถไฟต้าหลี่ ตรวจสัมภาระและสแกนพาสปอร์ตเข้าสู่ชานชาลา",
          tip: "เผื่อเวลาถึงสถานีรถไฟก่อนเวลาออกเดินทางอย่างน้อย 40 นาที"
        },
        {
          step: 5,
          from: "สถานีรถไฟต้าหลี่ (大理站)",
          to: "สถานีรถไฟคุนหมิง (昆明站 - Kunming Station)",
          mode: "🚅 รถไฟความเร็วสูง (CRH ขบวน C/D/G ชั้นหนึ่ง First Class)",
          duration: "2 ชั่วโมงถ้วน!",
          detail: "นั่งรถไฟหัวกระสุนตรงกลับสู่สถานีใจกลางเมืองคุนหมิง วิ่งเร็ว 250 กม./ชม. ตรงเวลาเป๊ะ เป็นข้อดีของแผนนี้ที่ไม่ต้องนั่งรถไฟยิงยาวจากลี่เจียง",
          tip: "มีขบวนรถไฟออกแทบทุก 20-30 นาที นั่งชมวิวภูเขาและทุ่งนาอย่างเพลิดเพลิน"
        },
        {
          step: 6,
          from: "สถานีรถไฟคุนหมิง",
          to: "โรงแรม 5 ดาว & สวนสาธารณะชุ่ยหู (翠湖公园)",
          mode: "🚕 DiDi / Taxi",
          duration: "12 – 15 นาที (~20 หยวน)",
          detail: "เรียกรถ DiDi หน้าสถานีส่งตรงถึงล็อบบี้โรงแรม Grand Park Kunming ริมสวนชุ่ยหู เดินข้ามถนน 3 นาทีไปชมฝูงนกนางนวลไซบีเรียนับหมื่นตัว",
          tip: "ซื้อขนมปังให้นกนางนวลที่ซุ้มขายในสวนชิ้นละ 10 หยวน นกจะบินโฉบรับจากมือ บรรยากาศน่ารักมาก"
        }
      ],

      schedule: [
        { time: "08:30", labelTh: "ปั่นจักรยานรับลมหนาวริมน้ำ ณ 'โค้งตัว S ปันซี' (Panxi S-Bay) ชมทิวสนเรดวูดสีส้มทอง", icon: "🚲" },
        { time: "11:30", labelTh: "เยือน 'เมืองโบราณซีโจว' ถ่ายรูปตึกหัวมุมจ้วนเจี่ยวโหลว ทุ่งนาสีทอง และชิมขนมปาปาอบโอ่ง", icon: "🌾" },
        { time: "15:30", labelTh: "ขึ้นรถไฟความเร็วสูงจากสถานีต้าหลี่ (大理站) ตรงกลับสู่ สถานีรถไฟคุนหมิง (昆明站) เพียง 2 ชั่วโมง!", icon: "🚅" },
        { time: "18:00", labelTh: "เช็คอินโรงแรม 5 ดาวคุนหมิง เดินเล่นสวนสาธารณะชุ่ยหู ให้อาหารฝูงนกนางนวลปากแดงไซบีเรีย", icon: "🕊️" },
        { time: "19:30", labelTh: "ทาน 'ก๋วยเตี๋ยวข้ามสะพาน' (过桥米线) ต้นตำรับยูนนานแท้ เสิร์ฟในชามหินร้อนเดือด", icon: "🍜" }
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
        type: "กลับถึงบ้านพร้อมความประทับใจและความทรงจำระดับมาสเตอร์พีซ"
      },
      mealsTh: "เช้า: บุฟเฟต์โรงแรม 5 ดาว | กลางวัน: อาหารตามอัธยาศัยที่สนามบินคุนหมิง",
      mealsEn: "Breakfast: Hotel buffet | Lunch: Free choice at airport",

      // Step-by-Step Real Transit Guide for Day 6
      transfers: [
        {
          step: 1,
          from: "โรงแรมริมสวนชุ่ยหู",
          to: "ตลาดค้าดอกไม้สดโต่วหนาน (斗南花卉市场)",
          mode: "🚗 DiDi / รถตู้ VIP (แนะนำ ⭐) หรือ 🚇 Metro สาย 1/4",
          duration: "25 – 30 นาที (20 กม.)",
          detail: "ทางเลือก A (แนะนำ): เรียก DiDi ขึ้นทางด่วนวงแหวนใต้ 25-30 นาที (~45-60 หยวน) ส่งถึงหน้าตลาดดอกไม้โต่วหนาน มีที่เก็บสัมภาระพร้อม | ทางเลือก B: ขึ้น Metro สาย 1 หรือ 4 ลงสถานี Dounan (斗南站) ทางออก C เดิน 5 นาที",
          tip: "ตลาดโต่วหนานเป็นตลาดดอกไม้สดที่ใหญ่ที่สุดในเอเชีย สามารถซื้อขนมเปี๊ยะดอกกุหลาบอบสด (鲜花饼) เป็นของฝากกลับไทยได้"
        },
        {
          step: 2,
          from: "ตลาดดอกไม้สดโต่วหนาน",
          to: "สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG)",
          mode: "🚗 รถยนต์ส่วนตัว / DiDi",
          duration: "35 – 40 นาที (38 กม.)",
          detail: "ขึ้นทางด่วนวงแหวนตะวันออกต่อ Airport Expressway วิ่งตรงสู่ชั้น 3 อาคารผู้โดยสารขาออก สนามบิน KMG (~90-110 หยวน)",
          tip: "ควรถึงสนามบินก่อนเวลาบินอย่างน้อย 2.5 ชั่วโมง เพื่อเช็คอิน โหลดสัมภาระ และผ่านด่าน ตม. ขาออก"
        },
        {
          step: 3,
          from: "สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG)",
          to: "กรุงเทพฯ (BKK / DMK)",
          mode: "✈️ เครื่องบินพาณิชย์ (Direct Flight)",
          duration: "2 ชม. 15 นาที",
          detail: "บินตรงกลับสู่สนามบินสุวรรณภูมิ/ดอนเมือง จบทริปวงรอบยูนนานระดับมาสเตอร์พีซอย่างราบรื่นและเปี่ยมสุข",
          tip: "อย่าลืมนำขนมเปี๊ยะกุหลาบและของฝากขึ้นเครื่องหรือโหลดใต้ท้องเครื่องตามข้อกำหนดของสายการบิน"
        }
      ],

      schedule: [
        { time: "09:30", labelTh: "เยี่ยมชม 'ตลาดดอกไม้โต่วหนาน' ตลาดค้าส่งดอกไม้สดที่ใหญ่ที่สุดในทวีปเอเชีย", icon: "💐" },
        { time: "11:00", labelTh: "ชิมขนมเปี๊ยะอบสดไส้กลีบดอกกุหลาบ (Flower Cake / 鲜花饼) ของฝากอันดับหนึ่งยูนนาน", icon: "🥮" },
        { time: "12:30", labelTh: "รถรับส่งสู่สนามบินนานาชาติคุนหมิงฉางสุ่ย (KMG) ใช้เวลาเพียง 40 นาที", icon: "🚙" },
        { time: "16:00", labelTh: "บินตรงกลับสู่กรุงเทพฯ ใช้เวลาบิน 2 ชั่วโมง 15 นาที จบทริปวงรอบยูนนานอย่างสมบูรณ์แบบ", icon: "✈️" }
      ]
    }
  ],

  // 15 Cinematic Time-Lapse Steps with Vehicle Animations, Speech Bubbles & FFT 3D Diorama Stages
  timelapseSteps: [
    {
      id: 1,
      day: 1,
      time: "08:00 น.",
      phase: "Day 1 เช้า",
      titleTh: "บินตรงจากกรุงเทพฯ สู่ สนามบินคุนหมิงฉางสุ่ย (KMG)",
      titleEn: "Flight BKK to Kunming Changshui Airport (KMG)",
      descTh: "ออกเดินทางสู่ยูนนาน บินเพียง 2 ชั่วโมง 15 นาที ผ่าน ตม. ฟรีวีซ่าไทย-จีน 30 วัน",
      descEn: "Fly directly to Kunming (2h 15m), visa-free entry for Thai travelers",
      vehicle: "airplane",
      coords: [25.1018, 102.9298],
      zoom: 10,
      fftStage: "assets/fft/airport.jpg",
      fftLocation: "KUNMING AIRPORT (KMG) · GATE 25",
      fftUnit: "Ramza (นักเดินทาง)",
      elevation: "1,890m",
      transitLegInfo: "✈️ บินตรงกรุงเทพฯ ➔ คุนหมิง 2.2 ชม. (ฟรีวีซ่า)",
      speechTh: "ออกเดินทางแล้ว! บินตรงจากไทย 2 ชม. ถึงคุนหมิง ฟรีวีซ่าฉลุย~ ✈️",
      speechEn: "Touching down in Kunming! Visa-free entry, super smooth! ✈️"
    },
    {
      id: 2,
      day: 1,
      time: "12:00 น.",
      phase: "Day 1 เที่ยง",
      titleTh: "เดินทางจากสนามบิน KMG สู่สถานีรถไฟคุนหมิง (昆明站)",
      titleEn: "Transfer from Airport to Kunming Railway Station",
      descTh: "เลือก DiDi ทางด่วน 40 นาที หรือ Metro สาย 6 ➔ 2 (48 นาที) สู่สถานีรถไฟใจกลางเมือง",
      descEn: "DiDi or Metro Line 6 transfer to Kunming central station",
      vehicle: "car",
      routeKey: "kmgAirportToStation",
      coords: [25.0163, 102.7167],
      zoom: 11,
      fftStage: "assets/fft/kunming_station.jpg",
      fftLocation: "KUNMING RAILWAY STATION (昆明站)",
      fftUnit: "Ramza & สหายร่วมทาง",
      elevation: "1,890m",
      hasDecision: "airportTransit",
      transitLegInfo: "🚕 DiDi ทางด่วน 40 นาที (~90 หยวน) หรือ 🚇 Metro สาย 6+2 (6 หยวน)",
      speechTh: "นั่ง DiDi ขึ้นทางด่วน 40 นาที ถึงสถานีรถไฟคุนหมิงชั้น 2 เตรียมขึ้นรถไฟหัวกระสุนสู่ลี่เจียง! 🚗💨",
      speechEn: "Cruised to Kunming Station via expressway in 40 mins, ready for the bullet train to Lijiang! 🚗💨"
    },
    {
      id: 3,
      day: 1,
      time: "13:45 น.",
      phase: "Day 1 บ่าย",
      titleTh: "นั่งรถไฟความเร็วสูง CRH คุนหมิง ➔ ลี่เจียง (3.2 ชม.)",
      titleEn: "CRH Bullet Train from Kunming to Lijiang (3.2 hours)",
      descTh: "รถไฟหัวกระสุนชั้นหนึ่ง วิ่งนุ่มสบาย ข้ามสะพานลอยฟ้า ผ่านฉู่สงและต้าหลี่สู่ลี่เจียง",
      descEn: "High-speed 1st class train glides across viaducts past Chuxiong and Dali to Lijiang",
      vehicle: "train",
      railKey: "kunmingToLijiang",
      coords: [26.8055, 100.2310],
      zoom: 9,
      fftStage: "assets/fft/kunming_station.jpg",
      stationA: "昆明站 คุนหมิง (Kunming)",
      stationB: "丽江站 ลี่เจียง (Lijiang)",
      departureStage: "assets/fft/kunming_station.jpg",
      departureLocation: "KUNMING RAILWAY STATION (昆明站) · PLATFORM 2",
      departureSpeechTh: "🔔 ขบวนรถไฟหัวกระสุน CRH ออกจากสถานีคุนหมิง วิ่งตรงสู่สถานีลี่เจียง... 🚅",
      departureSpeechEn: "CRH bullet train departing Kunming Station bound for Lijiang... 🚅",
      transitStage: "assets/fft/train.jpg",
      transitLocation: "YUNNAN ALPINE RAILWAY · 250 KM/H VIADUCT",
      transitSpeechTh: "🚄 วิ่งฉิว 250 km/h ข้ามทิวเขาและหุบเขาหินปูน มุ่งหน้าสู่ที่ราบสูงลี่เจียงอย่างนุ่มนวล!",
      transitSpeechEn: "Cruising 250 km/h across scenic alpine viaducts towards the Lijiang plateau!",
      arrivalStage: "assets/fft/dali_station.jpg",
      arrivalLocation: "LIJIANG RAILWAY STATION (丽江站) · ARRIVAL",
      arrivalSpeechTh: "🏁 ถึงสถานีรถไฟลี่เจียงแล้ว! 3 ชั่วโมงนิดๆ ตรงเวลาเป๊ะ อากาศเย็นสดชื่น 12°C 🏔️✨",
      arrivalSpeechEn: "Arrived at Lijiang Station on time! Crisp mountain air at 2,400m 🏔️✨",
      fftLocation: "LIJIANG RAILWAY STATION (丽江站)",
      fftUnit: "Ramza & สหายร่วมทาง (ผู้โดยสาร CRH)",
      elevation: "2,400m",
      transitLegInfo: "🚅 รถไฟความเร็วสูง CRH ชั้นหนึ่ง 3.2 ชม. (ผ่านช่อง Manual Gate พาสปอร์ตไทย)",
      speechTh: "นั่งรถไฟความเร็วสูงคุนหมิงมายิงตรงถึงลี่เจียงใน 3 ชั่วโมง สบาย ไม่เหนื่อยเลย! 🚅💨",
      speechEn: "High-speed train from Kunming directly to Lijiang in just over 3 hours. Super smooth! 🚅💨"
    },
    {
      id: 4,
      day: 1,
      time: "18:00 น.",
      phase: "Day 1 เย็น",
      titleTh: "เช็คอินเมืองโบราณซู่เหอ (Shuhe) & ดินเนอร์หม้อไฟน่าซี",
      titleEn: "Check-in Shuhe Ancient Town & Naxi Cured Ribs Hotpot",
      descTh: "รถตู้ส่วนตัว 25 นาทีส่งถึงประตูเมืองเก่า + พนักงานโรงแรมเข็นรถลากกระเป๋าพาเข้าที่พัก",
      descEn: "Tranquil Shuhe old town with clear canals, stone bridges and authentic Naxi hotpot",
      vehicle: "chibi",
      coords: [26.9200, 100.2050],
      zoom: 14,
      fftStage: "assets/fft/santorini.jpg",
      fftLocation: "SHUHE ANCIENT TOWN · LIJIANG",
      fftUnit: "Ramza & คณะเดินทาง",
      elevation: "2,400m",
      hasDecision: "lijiangTransit",
      transitLegInfo: "🚐 รถตู้รับส่ง 25 นาที + 🛒 รถเข็นกระเป๋าโรงแรมเข้าเมืองโบราณซู่เหอ",
      speechTh: "เมืองโบราณซู่เหอสงบมาก มีลำธารใสไหลผ่านหน้าโรงแรม มื้อค่ำหม้อไฟซี่โครงหมูแห้งอร่อยสุดๆ 🏮🍲",
      speechEn: "Shuhe ancient town is so peaceful with clear streams. Naxi cured rib hotpot is amazing! 🏮🍲"
    },
    {
      id: 5,
      day: 2,
      time: "09:30 น.",
      phase: "Day 2 เช้า",
      titleTh: "หุบเขาพระจันทร์สีน้ำเงิน (Blue Moon Valley 蓝月谷)",
      titleEn: "Blue Moon Valley at the foot of Jade Dragon Snow Mountain",
      descTh: "รถตู้ส่วนตัว 35 นาที ➔ ต่อรถบัสสีเขียวอุทยาน (Eco-Shuttle) 15 นาที สู่สระน้ำมรกต",
      descEn: "Turquoise glacial cascades reflecting the majestic Jade Dragon Snow Mountain",
      vehicle: "chibi",
      coords: [27.1350, 100.2350],
      zoom: 13,
      fftStage: "assets/fft/bluemoon.jpg",
      fftLocation: "BLUE MOON VALLEY · BAISHUI RIVER",
      fftUnit: "นักท่องเที่ยวชมหุบเขาพระจันทร์",
      elevation: "2,800m",
      transitLegInfo: "🚙 รถตู้ 35 นาที ➔ 🚌 รถบัสสีเขียวอุทยาน (Eco-Shuttle) 15 นาที",
      speechTh: "หุบเขาพระจันทร์สีน้ำเงิน น้ำใสสีฟ้ามรกตสวยสะกดใจ เดินเล่นสบาย ไม่ต้องแย่งคิวขึ้นกระเช้า 🌊✨",
      speechEn: "Blue Moon Valley is breathtaking! Turquoise pools without the strenuous cable car climb 🌊✨"
    },
    {
      id: 6,
      day: 2,
      time: "14:30 น.",
      phase: "Day 2 บ่าย",
      titleTh: "รถ SUV ไต่ระดับสู่โฮมสเตย์ Cloud Way เสือกระโจน",
      titleEn: "Private SUV Drive up to Cloud Way Homestay on the Gorge Cliff",
      descTh: "นั่งรถ SUV 4WD ส่วนตัวของโรงแรม 1.2 ชม. ไต่ระดับสู่ Upper Trail ส่งถึงหน้าล็อบบี้",
      descEn: "Private SUV ascends high mountain cliffs directly to Cloud Way homestay in 1.2 hours",
      vehicle: "suv",
      coords: [27.2450, 100.1650],
      zoom: 13,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "TIGER LEAPING GORGE HIGH ROAD",
      fftUnit: "คณะเดินทาง (นั่งรถ SUV ขึ้นเขา)",
      elevation: "2,100m",
      hasDecision: "gorgeAscent",
      transitLegInfo: "🚙 รถ SUV 4WD โรงแรม Cloud Way รับตรง 1.2 ชม. ไต่เขาสูง Upper Trail",
      speechTh: "นั่งรถ SUV สบายๆ ไต่เขาสู่ Cloud Way หันหน้าเข้าหาหน้าผาเขาหิมะมังกรหยกเต็มตา! 🚙🏡",
      speechEn: "Cruising up the high gorge ridge in private SUV. Face-to-face with Jade Dragon Snow Mountain! 🚙🏡"
    },
    {
      id: 7,
      day: 3,
      time: "07:30 น.",
      phase: "Day 3 เช้าตรู่",
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
      fftUnit: "Ramza (ชมแสงทองรื่อจ้าวชินซาน)",
      elevation: "2,100m",
      transitLegInfo: "🚶 เดินขึ้นดาดฟ้า Cloud Way สระกระจกเงาฟ้า (ชมแสงทอง 07:35-08:00 น.)",
      speechTh: "รื่อจ้าวชินซาน! ยอดเขาหิมะกลายเป็นสีทองคำอร่ามตา มหัศจรรย์มากกกก! ✨🏔️",
      speechEn: "Rizhao Jinshan! Snowy peaks glowing in pure morning gold! ✨🏔️"
    },
    {
      id: 8,
      day: 3,
      time: "14:00 น.",
      phase: "Day 3 บ่าย",
      titleTh: "จิบกาแฟระเบียงผา Cloud Way & ชมดาวเต็มฟ้า",
      titleEn: "Cliffside Drip Coffee & Stargazing at Cloud Way",
      descTh: "จิบกาแฟดริปริมระเบียงผา เดินเล่นจุดชมวิวน้ำตกกวนอิน และชมทะเลดาวหน้าเตาผิง",
      descEn: "Sipping hand-drip coffee over Asia's deepest gorge, cozy fireplace & stars",
      vehicle: "chibi",
      coords: [27.2450, 100.1650],
      zoom: 14,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "CLOUD WAY · CLIFFSIDE DECK & FIREPLACE",
      fftUnit: "Ramza (จิบกาแฟสโลว์ไลฟ์)",
      elevation: "2,100m",
      transitLegInfo: "🚶‍♂️ เดินเท้าเส้นทางราบเลียบหน้าผา (Flat Trail 1.5 กม.) สู่ Halfway Guesthouse",
      speechTh: "จิบกาแฟริมหน้าผา ลมหนาวพัดเย็นสบาย สโลว์ไลฟ์อย่างแท้จริง คืนนี้ดูดาวหน้าเตาผิง ☕📖",
      speechEn: "Warm hand-drip coffee on the cliff deck. Cozy fireplace and stars tonight ☕📖"
    },
    {
      id: 9,
      day: 4,
      time: "10:00 น.",
      phase: "Day 4 เช้า",
      titleTh: "หุบเขาเสือกระโจนตอนบน & บันไดเลื่อนกระจกชมวิว",
      titleEn: "Upper Tiger Leaping Gorge & Scenic Escalator",
      descTh: "รถ SUV ส่งลงเขา ➔ ลงบันไดเลื่อนกระจกสู่ก้นหุบเขา ยืนข้างโขดหินเสือกระโจน",
      descEn: "Glass escalators whisk you down to the roaring Tiger Stone on the Jinsha River",
      vehicle: "chibi",
      coords: [27.1850, 100.1250],
      zoom: 13,
      fftStage: "assets/fft/cloudway.jpg",
      fftLocation: "UPPER TIGER LEAPING GORGE · TIGER STONE",
      fftUnit: "คณะเดินทาง (ชมโขดหินเสือกระโจน)",
      elevation: "1,850m",
      hasDecision: "gorgeEscalator",
      transitLegInfo: "🚙 รถ SUV ลงเขา 25 นาที ➔ 🛗 บันไดเลื่อนกระจกชมวิว 4 ตอน (70 หยวน)",
      speechTh: "ลงบันไดเลื่อนกระจกไปยืนข้างโขดหินเสือกระโจน สายน้ำคำรามทรงพลังสุดๆ! 🐯🌊",
      speechEn: "Standing by the roaring Tiger Leaping Stone. Nature's sheer power! 🐯🌊"
    },
    {
      id: 10,
      day: 4,
      time: "14:00 น.",
      phase: "Day 4 บ่าย",
      titleTh: "รถไฟความเร็วสูงตรง สถานีเสือกระโจน ➔ ต้าหลี่ (1.45 ชม.)",
      titleEn: "Direct Bullet Train Tiger Leaping Gorge to Dali (1.45 hrs)",
      descTh: "รถตู้ 15 นาทีสู่สถานี ➔ ขึ้นรถไฟหัวกระสุน CRH ขบวนตรง วิ่งลงใต้สู่สถานีต้าหลี่",
      descEn: "Direct high-speed rail running south straight into Dali railway station",
      vehicle: "train",
      railKey: "tigerLeapingToDali",
      coords: [25.5898, 100.2520],
      zoom: 9,
      fftStage: "assets/fft/train.jpg",
      stationA: "虎跳峡站 เสือกระโจน",
      stationB: "大理站 ต้าหลี่ (Dali)",
      departureStage: "assets/fft/train.jpg",
      departureLocation: "TIGER LEAPING GORGE STATION (虎跳峡站)",
      departureSpeechTh: "🔔 ขึ้นรถไฟความเร็วสูงขบวนตรงจากเสือกระโจน มุ่งหน้าสู่เมืองต้าหลี่ 🚅💨",
      departureSpeechEn: "Boarding direct bullet train from Tiger Leaping Gorge south to Dali 🚅💨",
      transitStage: "assets/fft/train.jpg",
      transitLocation: "YUNNAN HIGH SPEED RAILWAY · 200 KM/H",
      transitSpeechTh: "🚄 วิ่งฉิว 200 km/h ผ่านลี่เจียงและเหอชิ่ง มุ่งหน้าสู่ทะเลสาบเอ๋อร์ไห่ต้าหลี่!",
      transitSpeechEn: "Cruising 200 km/h past mountain valleys straight towards Dali!",
      arrivalStage: "assets/fft/dali_station.jpg",
      arrivalLocation: "DALI RAILWAY STATION (大理站) · ARRIVAL",
      arrivalSpeechTh: "🏁 ถึงสถานีต้าหลี่แล้ว! เพียง 1.45 ชม. รถตู้รอรับข้ามสะพานสู่ซานโตรินีต้าหลี่ 🏛️🌊",
      arrivalSpeechEn: "Arrived at Dali Station in 1.45h! Transfer van ready for Santorini 🏛️🌊",
      fftLocation: "DALI RAILWAY STATION (大理站)",
      fftUnit: "Ramza & คณะเดินทาง",
      elevation: "1,970m",
      transitLegInfo: "🚙 รถส่งสถานี 15 นาที ➔ 🚅 รถไฟ CRH ขบวนตรง 1 ชม. 45 นาที สู่ต้าหลี่",
      speechTh: "นั่งรถไฟความเร็วสูงตรงจากเสือกระโจนมาต้าหลี่แค่ 1.45 ชม. สบายมาก! 🚅🏔️",
      speechEn: "Direct bullet train from Tiger Gorge to Dali in 1.45 hours. So fast and easy! 🚅🏔️"
    },
    {
      id: 11,
      day: 4,
      time: "17:30 น.",
      phase: "Day 4 เย็น",
      titleTh: "เช็คอินรีสอร์ทหน้าผาซานโตรินีต้าหลี่ (หลี่เซียงปัง)",
      titleEn: "Check-in Cliffside Santorini Resort at Erhai Lake",
      descTh: "รถตู้ส่วนตัว 20 นาที (16 กม.) ข้ามสะพานเลียบทะเลสาบ สู่รีสอร์ทสีขาวริมผา",
      descEn: "Pure white Aegean architecture overlooking Erhai sunset and Cangshan peaks",
      vehicle: "chibi",
      coords: [25.6830, 100.2740],
      zoom: 13,
      fftStage: "assets/fft/santorini.jpg",
      fftLocation: "DALI SANTORINI · IDEAL STATE",
      fftUnit: "Ramza & คณะเดินทาง (ผู้เข้าพักรีสอร์ท)",
      elevation: "1,975m",
      transitLegInfo: "🚐 รถตู้รับส่ง / DiDi 20 นาที ข้ามสะพานทะเลสาบเอ๋อร์ไห่ฝั่งตะวันออก",
      speechTh: "เช็คอินซานโตรินีต้าหลี่แล้ว! พระอาทิตย์ตกหลังเขาชางซานสวยจนแทบลืมหายใจ 🏛️🌅",
      speechEn: "Arrived at Dali Santorini! Sunset over Cangshan is pure magic 🏛️🌅"
    },
    {
      id: 12,
      day: 5,
      time: "09:30 น.",
      phase: "Day 5 เช้า",
      titleTh: "โค้งตัว S ปันซีไห่ซี & เมืองโบราณซีโจว ทุ่งนาสีทอง",
      titleEn: "Panxi S-Bay Greenway & Xizhou Ancient Town",
      descTh: "รถข้ามฝั่ง 30 นาที ➔ ปั่นจักรยานเลียบน้ำ ➔ รถ 15 นาที สู่ซีโจว ชิมขนมปาปา",
      descEn: "Lakeside greenway cycling, classic Zhuanjiao Lou building and hot Xizhou baba",
      vehicle: "bike",
      coords: [25.8500, 100.1300],
      zoom: 13,
      fftStage: "assets/fft/santorini.jpg",
      fftLocation: "XIZHOU ANCIENT TOWN · ZHUANJIAO LOU",
      fftUnit: "นักปั่นจักรยาน & เดินทอดน่อง",
      elevation: "1,974m",
      hasDecision: "erhaiActivity",
      transitLegInfo: "🚙 รถข้ามฝั่ง 30 นาที ➔ 🚲 ปั่นจักรยานเลนสีเขียว 15 หยวน ➔ 🚙 รถ 15 นาที สู่ซีโจว",
      speechTh: "ปั่นจักรยานโค้งตัว S ปันซี และชิมขนมปาปาซีโจวอบโอ่งหอมกรุ่น ทุ่งนาสีทองสวยมาก 🚲🌾",
      speechEn: "Cycling Panxi S-Bay and eating fresh Xizhou baba by golden wheat fields! 🚲🌾"
    },
    {
      id: 13,
      day: 5,
      time: "15:30 น.",
      phase: "Day 5 บ่าย",
      titleTh: "รถไฟความเร็วสูง สถานีต้าหลี่ ➔ สถานีคุนหมิง (เพียง 2 ชม.)",
      titleEn: "Fast Bullet Train from Dali to Kunming Station (2 hours)",
      descTh: "รถ 35 นาทีสู่สถานีต้าหลี่ ➔ รถไฟ CRH วิ่งตรงกลับคุนหมิงเพียง 2 ชม. นุ่มสบาย",
      descEn: "Speeding back to Kunming in just 2 hours, effortless final rail leg",
      vehicle: "train",
      railKey: "daliToKunming",
      coords: [25.0163, 102.7167],
      zoom: 9,
      fftStage: "assets/fft/train.jpg",
      stationA: "大理站 ต้าหลี่ (Dali)",
      stationB: "昆明站 คุนหมิง (Kunming)",
      departureStage: "assets/fft/dali_station.jpg",
      departureLocation: "DALI RAILWAY STATION (大理站) · PLATFORM 2",
      departureSpeechTh: "🔔 รถไฟหัวกระสุนออกจากต้าหลี่ มุ่งหน้าตรงกลับสู่สถานีรถไฟคุนหมิง 🚅",
      departureSpeechEn: "Departing Dali station on a swift 2-hour bullet train ride to Kunming 🚅",
      transitStage: "assets/fft/train.jpg",
      transitLocation: "YUNNAN EXPRESSWAY HSR · 250 KM/H",
      transitSpeechTh: "🚄 รถไฟวิ่งตรงกลับคุนหมิงผ่านฉู่สง เพียง 2 ชั่วโมง ตรงเวลาเป๊ะ!",
      transitSpeechEn: "High-speed rail gliding smoothly back to Kunming city center in 2 hours sharp!",
      arrivalStage: "assets/fft/kunming_station.jpg",
      arrivalLocation: "KUNMING RAILWAY STATION (昆明站) · ARRIVAL",
      arrivalSpeechTh: "🏁 ถึงสถานีคุนหมิงแล้ว! สบายมาก เตรียมไปชมฝูงนกนางนวลไซบีเรียที่สวนชุ่ยหู 🕊️🍜",
      arrivalSpeechEn: "Safely arrived back at Kunming Station! Off to Green Lake for seagull feeding 🕊️🍜",
      fftLocation: "DALI - KUNMING EXPRESS HSR",
      fftUnit: "ผู้โดยสารรถไฟความเร็วสูง",
      elevation: "1,890m",
      transitLegInfo: "🚙 รถสู่สถานี 35 นาที ➔ 🚅 รถไฟความเร็วสูง CRH วิ่งตรงเพียง 2 ชั่วโมงถ้วน!",
      speechTh: "นั่งรถไฟจากต้าหลี่กลับคุนหมิงแค่ 2 ชม. ไวและสบายมาก ปิดท้ายวันแบบชิลๆ! 🚅💨",
      speechEn: "Dali to Kunming takes only 2 hours on CRH bullet train. So relaxing! 🚅💨"
    },
    {
      id: 14,
      day: 5,
      time: "18:00 น.",
      phase: "Day 5 เย็น",
      titleTh: "สวนสาธารณะชุ่ยหู & ฝูงนกนางนวลไซบีเรีย",
      titleEn: "Green Lake Park & Siberian Red-Billed Gulls",
      descTh: "DiDi 15 นาทีสู่โรงแรมริมสวนชุ่ยหู เดินข้ามถนนให้อาหารนกนางนวลไซบีเรียนับหมื่นตัว",
      descEn: "Tens of thousands of migrating Siberian gulls flying around Green Lake",
      vehicle: "chibi",
      coords: [25.0505, 102.7045],
      zoom: 14,
      fftStage: "assets/fft/cuihu.jpg",
      fftLocation: "CUIHU GREEN LAKE PARK · KUNMING",
      fftUnit: "คณะเดินทาง (ให้อาหารนกนางนวล)",
      elevation: "1,890m",
      transitLegInfo: "🚕 DiDi 15 นาที จากสถานีคุนหมิง ➔ โรงแรม 5 ดาวริมสวนชุ่ยหู",
      speechTh: "ให้อาหารฝูงนกนางนวลไซบีเรียปากแดงที่สวนชุ่ยหู บินวนรอบตัวน่ารักมาก 🕊️🍜",
      speechEn: "Feeding thousands of Siberian gulls at Green Lake! So adorable 🕊️🍜"
    },
    {
      id: 15,
      day: 6,
      time: "11:00 น.",
      phase: "Day 6 เช้า/บ่าย",
      titleTh: "ตลาดดอกไม้สดโต่วหนาน ➔ บินกลับกรุงเทพฯ โดยสวัสดิภาพ",
      titleEn: "Dounan Flower Market & Flight Back to Bangkok",
      descTh: "DiDi 25 นาทีสู่ตลาดดอกไม้ ➔ รถ 40 นาทีสู่สนามบิน KMG ➔ บินตรงกลับไทย 2.2 ชม.",
      descEn: "Fresh rose flower cakes at Asia's largest flower hub, smooth flight home",
      vehicle: "airplane",
      coords: [24.9080, 102.7850],
      zoom: 11,
      fftStage: "assets/fft/dounan.jpg",
      fftLocation: "DOUNAN FLOWER MARKET · KUNMING",
      fftUnit: "Ramza & คณะเดินทาง (เดินทางกลับไทย)",
      elevation: "1,890m",
      hasDecision: "dounanTransit",
      transitLegInfo: "🚕 DiDi 25 นาที สู่ตลาดดอกไม้ ➔ 🚙 รถ 40 นาที สู่สนามบิน KMG ➔ ✈️ บินกลับไทย",
      speechTh: "ซื้อขนมเปี๊ยะกุหลาบของฝาก แล้วบินกลับกรุงเทพฯ จบทริปแสนประทับใจ! 💐✈️",
      speechEn: "Loaded with fresh rose flower cakes and unforgettable memories! 💐✈️"
    }
  ]
};
