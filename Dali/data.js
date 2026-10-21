// Data for Dali Top 10 Attractions (Bilingual: Thai / English / Chinese)
// Coordinates are calibrated directly on AMAP (GCJ-02 Datum) for 100% pinpoint accuracy.
const DALI_ATTRACTIONS = [
  {
    id: 0,
    nameTh: "สถานีรถไฟความเร็วสูงต้าหลี่",
    nameZh: "大理站 (高铁站)",
    pinyin: "Dàlǐ Zhàn",
    nameEn: "Dali Railway Station (HSR Hub)",
    category: "transit_hub",
    categoryLabelTh: "ศูนย์กลางรถไฟความเร็วสูง",
    categoryLabelEn: "High-Speed Rail Hub",
    categoryColor: "#dc2626",
    pastelBg: "#fef2f2",
    badgeColor: "#fecaca",
    doodleBorderColor: "#b91c1c",
    doodleIcon: "🚅",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ประตูหลักสู่ต้าหลี่ สะอาด ตรงเวลา จุดต่อรถเมล์สาย 8 และ DiDi",
    ratingDescEn: "Primary gateway to Dali: fast, modern, direct bus No. 8 & DiDi hub",
    coords: [25.5898, 100.2520], // Southern tip of Erhai Lake (Xiaguan)
    image: "assets/places/00_dali_railway_station.jpg",
    tags: ["รถไฟความเร็วสูง", "สถานีต้าหลี่", "จุดต่อรถ", "High-Speed Rail", "Dali Station"],
    shortBulletsTh: [
      "ประตูหลักสู่ต้าหลี่ รถไฟหัวกระสุนจากคุนหมิง 2 ชม.",
      "จุดขึ้นรถเมล์สาย 8 ตรงสู่เมืองโบราณต้าหลี่ (3 หยวน)",
      "จุดต่อรถ DiDi, รถบัสนำเที่ยว และรถไฟไปลี่เจียง/แชงกรีล่า"
    ],
    shortBulletsEn: [
      "Main gateway: 2-hr bullet train from Kunming",
      "Bus No. 8 direct to Dali Old Town (3 RMB, 45 min)",
      "Central hub for DiDi, scenic lake buses & trains to Lijiang"
    ],
    openingHoursTh: "เปิดทุกวัน 06:00 - 23:30 น. (ตามตารางเดินรถไฟ)",
    openingHoursEn: "Daily 06:00 - 23:30 (Follows train schedules)",
    bestTimeTh: "เดินทางช่วงเช้า 08:00 - 10:00 น. เพื่อให้มีเวลาเที่ยวต้าหลี่เต็มวัน",
    bestTimeEn: "Morning arrival 08:00 - 10:00 to maximize your day in Dali",
    ticketPriceTh: "ค่าโดยสารรถไฟความเร็วสูง คุนหมิง-ต้าหลี่ ชั้นสองประมาณ 145 หยวน",
    ticketPriceEn: "Kunming - Dali bullet train 2nd class ticket approx 145 RMB",
    transportTh: {
      fromStation: "จุดศูนย์กลางการเดินทางหลักในเขตเซี่ยกวาน (Xiaguan)",
      fromAirport: "ห่างจากสนามบินต้าหลี่ 15 กม. รถบัส 25 หยวน หรือ DiDi 35 หยวน",
      inside: "มีบันไดเลื่อน ลิฟต์ ป้ายภาษาอังกฤษชัดเจน และจุดเรียกแท็กซี่ใต้ดิน"
    },
    transportEn: {
      fromStation: "Central transport hub in Xiaguan city center",
      fromAirport: "15 km from Dali Airport. Shuttle bus 25 RMB or DiDi 35 RMB",
      inside: "Modern amenities: escalators, English signage & underground taxi rank"
    },
    highlightsTh: [
      "ชุมทางรถไฟความเร็วสูงหลักของยูนนานตะวันตก เชื่อมต่อคุนหมิง-ต้าหลี่-ลี่เจียง-แชงกรีล่า",
      "รถไฟความเร็วสูงจากคุนหมิงใช้เวลาเพียง 2 ชั่วโมง วิ่งวันละกว่า 40 เที่ยว",
      "จุดขึ้นรถเมล์สาย 8 หน้าสถานี วิ่งตรงสู่ประตูเมืองทิศใต้เมืองโบราณต้าหลี่ (3 หยวน)",
      "จุดเชื่อมต่อไปยังซานโตรินีต้าหลี่เพียง 15 กม. (DiDi ข้ามสะพาน 30-40 หยวน)"
    ],
    highlightsEn: [
      "Primary western Yunnan HSR hub connecting Kunming, Dali, Lijiang, and Shangri-La",
      "Frequent high-speed CRH trains from Kunming taking just 2 hours (>40 trains/day)",
      "Direct City Bus No. 8 from front square to Dali Old Town South Gate (3 RMB)",
      "Short 15 km drive to Dali Santorini across the southern lake bridge (DiDi 30-40 RMB)"
    ],
    descriptionTh: "สถานีรถไฟความเร็วสูงต้าหลี่ (大理站) ตั้งอยู่ทางตอนใต้ของทะเลสาบเอ๋อร์ไห่ ในเขตเซี่ยกวาน เป็นจุดเริ่มต้นและประตูต้อนรับนักเดินทางทุกคนเข้าสู่เมืองต้าหลี่ สะดวกรวดเร็วด้วยรถไฟหัวกระสุนจากคุนหมิง และมีระบบขนส่งสาธารณะเชื่อมต่อไปยังจุดท่องเที่ยวสำคัญทั่วทั้งต้าหลี่อย่างครบวงจร",
    descriptionEn: "Dali Railway Station (大理站), located at the southern tip of Erhai Lake in Xiaguan, is the premier arrival gateway for all travelers. Offers seamless 2-hour bullet train connections from Kunming and comprehensive transit links across all major Dali destinations."
  },
  {
    id: 1,
    nameTh: "เมืองโบราณต้าหลี่",
    nameZh: "大理古城",
    pinyin: "Dàlǐ Gǔchéng",
    nameEn: "Dali Ancient Town",
    category: "ancient_town",
    categoryLabelTh: "เมืองประวัติศาสตร์",
    categoryLabelEn: "Historical City",
    categoryColor: "#ea580c",
    pastelBg: "#fff7ed",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🏯",
    rating: 4.6,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "บรรยากาศมีชีวิตชีวา เดินง่าย สตรีทฟู้ดและคาเฟ่สายคราฟต์เพียบ",
    ratingDescEn: "Lively vibe, walkable cobblestone streets, craft cafes & folk music",
    coords: [25.6945, 100.1638], // Central core around Wuhua Building / Fuxing Road
    image: "assets/places/01_dali_ancient_town.jpg",
    tags: ["อาณาจักรน่านเจ้า", "หออู่ฮวา", "ถนนเหรินหมิน", "Nanzhao Kingdom", "Wuhua Building"],
    shortBulletsTh: [
      "ประตูเมืองโบราณ 600 ปี & หออู่ฮวาชมวิวชางซาน",
      "ถนนคนเดินเหรินหมิน คาเฟ่ดริป & ดนตรีโฟล์กยามค่ำ",
      "สตรีทฟู้ดพื้นเมือง & ดื่มด่ำวิถีชนเผ่าไป๋"
    ],
    shortBulletsEn: [
      "600-year South Gate & Wuhua panoramic tower",
      "Renmin Road indie cafes & live acoustic music",
      "Authentic Bai street snacks & ancient history"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง ทุกวัน (ร้านค้า 09:00 - 23:30 น.)",
    openingHoursEn: "Open 24 hours daily (Shops & cafes 09:00 - 23:30)",
    bestTimeTh: "ช่วงเช้า 07:30 - 09:30 น. (สงบ ไร้คน) และ ช่วงค่ำ 18:30 - 21:30 น. (แสงสีและดนตรีโฟล์ก)",
    bestTimeEn: "Morning 07:30 - 09:30 (Quiet, golden light) & Evening 18:30 - 21:30 (Lanterns & music)",
    ticketPriceTh: "เข้าชมฟรี (ไม่มีค่าผ่านประตู)",
    ticketPriceEn: "Free admission",
    transportTh: {
      fromStation: "รถเมล์สาย 8 หรือ 4 (3 หยวน, 45 นาที) / แท็กซี่-DiDi 17 กม. (35-45 หยวน, 30 นาที)",
      fromAirport: "รถบัสสนามบิน (25 หยวน) หรือ แท็กซี่ 70-80 หยวน (40 นาที)",
      inside: "เขตทางเท้าห้ามรถเข้า มีรถกอล์ฟไฟฟ้ารอบเมือง 10-20 หยวน"
    },
    transportEn: {
      fromStation: "Bus No. 8 or 4 (3 RMB, 45 min) / Taxi-DiDi 17 km (35-45 RMB, 30 min)",
      fromAirport: "Airport shuttle bus (25 RMB) or Taxi 70-80 RMB (40 min)",
      inside: "Pedestrian only. Electric sightseeing golf cart available (10-20 RMB)"
    },
    highlightsTh: [
      "ประตูเมืองทิศใต้ (South Gate) ประตูเมืองที่เก่าแก่สง่างามที่สุด อายุกว่า 600 ปี",
      "หออู่ฮวา (Wuhua Building) หอระฆังใจกลางเมือง ชมวิวพาโนรามาเทือกเขาชางซาน",
      "ถนนคนเดินเหรินหมิน (Renmin Road) แหล่งรวมร้านหนังสืออิสระ คาเฟ่ดริป และดนตรีโฟล์ก",
      "ร่องน้ำใสจากเขาชางซานไหลผ่านกลางตรอกหินทั่วเมืองโบราณ"
    ],
    highlightsEn: [
      "South Gate: The grandest ancient gate with over 600 years of history",
      "Wuhua Building: Central landmark tower with panoramic Cangshan mountain views",
      "Renmin Road: Bustling street of indie bookstores, craft coffee & live acoustic music",
      "Crystalline mountain spring water running through traditional stone ditches"
    ],
    descriptionTh: "อดีตเมืองหลวงอันเกรียงไกรของอาณาจักรน่านเจ้าและอาณาจักรต้าหลี่ที่มีประวัติศาสตร์ยาวนานกว่า 1,200 ปี โอบล้อมด้วยกำแพงเมืองโบราณและยอดเขาชางซาน สัมผัสวิถีชีวิตชนเผ่าไป๋ผสมผสานวัฒนธรรมศิลปะร่วมสมัยอย่างลงตัว",
    descriptionEn: "The ancient capital of the Nanzhao and Dali Kingdoms spanning over 1,200 years of history. Flanked by Cangshan Mountain and Erhai Lake, it perfectly blends authentic Bai ethnic architecture with contemporary bohemian culture."
  },
  {
    id: 2,
    nameTh: "เมืองโบราณซีโจว",
    nameZh: "喜洲古镇",
    pinyin: "Xǐzhōu Gǔzhèn",
    nameEn: "Xizhou Ancient Town",
    category: "ancient_town",
    categoryLabelTh: "สถาปัตยกรรมชนเผ่าไป๋",
    categoryLabelEn: "Bai Architecture",
    categoryColor: "#ea580c",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#d97706",
    doodleIcon: "🌾",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ชาวต่างชาติหลงรักที่สุด สโลว์ไลฟ์ ถ่ายรูปสวย วัฒนธรรมแท้จริง",
    ratingDescEn: "Top favorite among foreign travelers: slow-paced, photogenic & authentic",
    coords: [25.8524, 100.1298], // Xizhou Corner House (转角楼) & Sifang Street
    image: "assets/places/02_xizhou_ancient_town.jpg",
    tags: ["ตึกมุมโค้ง", "ทุ่งนาสี่ฤดู", "คฤหาสน์ตระกูลเหยียน", "ขนมปาปา", "Corner House"],
    shortBulletsTh: [
      "ตึกมุมโค้งไอคอนิกจ้วนเจี่ยวโหลว ถ่ายรูปสวยทุกฤดูกาล",
      "ทุ่งนาข้าวสาลีสีทอง & คาเฟ่กระจกชมวิวเทือกเขาชางซาน",
      "ขนมซีโจวปาปาเตาถ่านโบราณ กรอบนอกนุ่มในหอมกรุ่น"
    ],
    shortBulletsEn: [
      "Iconic curved Corner House (Zhuanjiao Lou)",
      "Vast golden wheat field cafes facing Cangshan",
      "Wood-fired crispy savory/sweet Xizhou Baba pie"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง ทุกวัน (คฤหาสน์ 08:30 - 17:30 น.)",
    openingHoursEn: "Open 24 hours daily (Yan Courtyard: 08:30 - 17:30)",
    bestTimeTh: "ช่วงเช้า 08:30 - 11:30 น. (ตลาดเช้าคุณยายชาวไป๋) และ บ่าย 15:30 - 18:00 น. (แดดสีทองกระทบทุ่งนา)",
    bestTimeEn: "Morning 08:30 - 11:30 (Morning market) & Afternoon 15:30 - 18:00 (Golden light on fields)",
    ticketPriceTh: "เข้าเมืองฟรี (คฤหาสน์ตระกูลเหยียน 30 หยวน)",
    ticketPriceEn: "Free town admission (Yan Courtyard museum: 30 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟต้าหลี่ 35 กม. DiDi ประมาณ 70-80 หยวน (50 นาที)",
      fromOldTown: "ห่างจากเมืองโบราณต้าหลี่ 18 กม. มินิบัส 7-10 หยวน (30 นาที) หรือ DiDi 35-45 หยวน",
      inside: "เดินเท้าสะดวก หรือเช่าจักรยานปั่นเลียบทุ่งนา"
    },
    transportEn: {
      fromStation: "35 km from Dali Station. DiDi approx 70-80 RMB (50 min)",
      fromOldTown: "18 km north of Dali Old Town. Minibus 7-10 RMB (30 min) or DiDi 35-45 RMB",
      inside: "Easy to walk or rent bicycles along picturesque field paths"
    },
    highlightsTh: [
      "ตึกมุมโค้งจ้วนเจี่ยวโหลว (Corner House) อาคารไม้ทรงครึ่งวงกลมสุดไอคอนิก",
      "ทุ่งนากว้างใหญ่โอบล้อมเมืองโบราณ พร้อมคาเฟ่กระจกวิวทุ่งนาและภูเขาชางซาน",
      "คฤหาสน์ตระกูลเหยียน (Yan Family Courtyard) สถาปัตยกรรมสามลานหนึ่งกำแพงเงา",
      "ชิมขนมซีโจวปาปา (Xizhou Baba) พายโบราณอบเตาถ่านกรอบนอกนุ่มใน หอมกรุ่น"
    ],
    highlightsEn: [
      "Zhuanjiao Lou (Corner House): Iconic curved wooden heritage architecture",
      "Vast seasonal crop fields with scenic glass cafes facing Cangshan Mountain",
      "Yan Family Courtyard: Masterpiece of Bai residential compound & Three-Course Tea",
      "Taste Xizhou Baba: Traditional wood-fired crispy pancake snack (sweet or savory)"
    ],
    descriptionTh: "พิพิธภัณฑ์มีชีวิตของสถาปัตยกรรมชนเผ่าไป๋ที่สมบูรณ์ที่สุดในจีน อายุกว่าพันปี โดดเด่นด้วยอาคารปูนขาวตัดคิ้วปูนปั้นสีเทาดำ และวิถีชีวิตสโลว์ไลฟ์ริมทุ่งนาข้าวสาลี",
    descriptionEn: "A living museum of China's best-preserved Bai ethnic architecture. Renowned for its white-walled, grey-eaved courtyards, sweeping pastoral wheat fields, and laid-back artisan lifestyle."
  },
  {
    id: 3,
    nameTh: "เมืองโบราณซาซี",
    nameZh: "沙溪古镇",
    pinyin: "Shāxī Gǔzhèn",
    nameEn: "Shaxi Ancient Town",
    category: "ancient_town",
    categoryLabelTh: "เส้นทางสายชาม้าโบราณ",
    categoryLabelEn: "Tea Horse Road",
    categoryColor: "#ea580c",
    pastelBg: "#f5f3ff",
    badgeColor: "#ddd6fe",
    doodleBorderColor: "#7c3aed",
    doodleIcon: "🐴",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "มรดกโลก WMF ดั้งเดิม เงียบสงบ ตามรอยซีรีส์ Meet Yourself",
    ratingDescEn: "World Monuments Fund heritage: tranquil, rustic, filming site of Meet Yourself",
    coords: [26.3195, 99.8512], // Yujin Bridge & Sideng Square
    image: "assets/places/03_shaxi_ancient_town.jpg",
    tags: ["สะพานหินอวี้จิน", "เวทีงิ้วโบราณ", "ตลาดนัดวันศุกร์", "Meet Yourself", "Yujin Bridge"],
    shortBulletsTh: [
      "สะพานหินอวี้จินข้ามแม่น้ำ & บรรยากาศหมอกยามเช้า",
      "ลานค้ากองคาราวานม้าชวาแห่งเดียวในโลกที่ยังมีชีวิต",
      "ตามรอยซีรีส์ดัง 'Meet Yourself' ตัดขาดความวุ่นวาย"
    ],
    shortBulletsEn: [
      "Yujin stone bridge & peaceful morning river mist",
      "Sole surviving active Ancient Tea Horse caravan market",
      "Serene filming site of hit drama 'Meet Yourself'"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง ทุกวัน (วัดซิงเจี้ยว 08:30 - 17:00 น.)",
    openingHoursEn: "Open 24 hours daily (Xingjiao Temple: 08:30 - 17:00)",
    bestTimeTh: "ยามเช้า 07:00 - 09:00 น. (หมอกเหนือน้ำสะพานหิน) และ วันศุกร์ (ตลาดนัดชนเผ่า)",
    bestTimeEn: "Morning 07:00 - 09:00 (Mist over stone bridge) & Friday Market (Ethnic market)",
    ticketPriceTh: "เข้าเมืองฟรี (วัดซิงเจี้ยว 20 หยวน)",
    ticketPriceEn: "Free town admission (Xingjiao Temple: 20 RMB)",
    transportTh: {
      fromStation: "ห่างจากต้าหลี่ 110 กม. รถตู้เหมาส่วนตัว 1.5 - 2 ชม. (สะดวกที่สุด)",
      fromOldTown: "รถบัสต้าหลี่ไปเจี้ยนชวน (35 หยวน, 1.5 ชม.) ต่อมินิบัสไปซาซี (13 หยวน, 40 นาที)",
      inside: "เดินเท้า 100% บรรยากาศเงียบสงบปราศจากเสียงเครื่องยนต์"
    },
    transportEn: {
      fromStation: "110 km north of Dali. Private charter 1.5 - 2 hrs (Recommended)",
      fromOldTown: "Bus to Jianchuan (35 RMB, 1.5 hr) then local green van to Shaxi (13 RMB, 40 min)",
      inside: "Pedestrian only. Totally serene without traffic noise"
    },
    highlightsTh: [
      "สะพานหินอวี้จิน (Yujin Bridge) ข้ามแม่น้ำเฮยฮุ่ยเจียง ฉากเด่นในซีรีส์ Meet Yourself",
      "ตลาดโบราณซื่อเติงเจีย (Sideng Street) ลานค้าชาม้าแห่งเดียวในโลกที่ยังมีชีวิต",
      "เวทีงิ้วไม้สามชั้นอายุกว่า 500 ปี ตรงข้ามวัดซิงเจี้ยว",
      "ร้านหนังสือเซียนเฟิงซาซี (Avant-Garde) รีโนเวทจากโรงสีข้าวเก่าวิวทิวเขา"
    ],
    highlightsEn: [
      "Yujin Stone Bridge across Heihui River: Legendary photography spot",
      "Sideng Street Market Square: The only surviving market on Ancient Tea Horse Road",
      "500-year-old three-story wooden ancient theater stage opposite Xingjiao Temple",
      "Librairie Avant-Garde Shaxi: World-acclaimed bookstore repurposed from old mill"
    ],
    descriptionTh: "ตลาดการค้าบนเส้นทางสายชาม้าโบราณ (Tea Horse Road) ที่ได้รับการอนุรักษ์ไว้อย่างบริสุทธิ์ที่สุด บ้านดินสีน้ำตาล สะพานหินเก่าแก่ และความสงบเงียบที่ตัดขาดจากความวุ่นวาย",
    descriptionEn: "Recognized by the World Monuments Fund as the sole surviving active market on the Ancient Tea Horse Road. Rammed-earth houses, cobblestones, and timeless mountain tranquility."
  },
  {
    id: 4,
    nameTh: "ทะเลสาบเอ๋อร์ไห่ & โค้งตัว S ปันซี",
    nameZh: "洱海生态廊道 & 磻溪村S湾",
    pinyin: "Ěrhǎi Shēngtài Lángdào & Pánxīcūn S-Wān",
    nameEn: "Erhai Lake & Panxi S-Bay",
    category: "nature_lake",
    categoryLabelTh: "ธรรมชาติ & ทะเลสาบ",
    categoryLabelEn: "Nature & Lake",
    categoryColor: "#0284c7",
    pastelBg: "#ecfeff",
    badgeColor: "#cffafe",
    doodleBorderColor: "#0891b2",
    doodleIcon: "🚲",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "เลนปั่นจักรยานริมน้ำระดับพรีเมียม วิวทะเลสาบสวยที่สุด",
    ratingDescEn: "World-class lakeside greenway: peaceful cycling & breathtaking water views",
    coords: [25.7783, 100.1473], // Pinpointed precisely at the S-curved bike road on the shore in Panxi Village
    image: "assets/places/04_panxi_s_bay.jpg",
    tags: ["เลนจักรยานริมน้ำ", "โค้งตัว S", "ต้นสนเรดวูด", "Cycling", "Panxi S-Bay"],
    shortBulletsTh: [
      "เลนจักรยานโค้งตัว S ริมน้ำสีฟ้าคราม ปลอดรถยนต์ 100%",
      "ฝูงนกนางนวลไซบีเรียว่ายน้ำเล่น & โฉบกินขนม",
      "ทิวต้นสนเรดวูดสีส้มทอง & นั่งจิบกาแฟดริปริมน้ำ"
    ],
    shortBulletsEn: [
      "Car-free scenic S-curved bike path right on the lake",
      "Migrating Siberian gulls & gentle mountain reflections",
      "Fiery winter redwood trees & lakeside drip coffee"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง ทุกวัน (ไม่มีวันหยุด)",
    openingHoursEn: "Open 24 hours daily",
    bestTimeTh: "ช่วงพระอาทิตย์ขึ้น 07:00 - 08:30 น. และ บ่ายแก่ๆ 16:30 - 18:30 น. (ลมเย็น แสงสีส้ม)",
    bestTimeEn: "Sunrise 07:00 - 08:30 & Golden Hour 16:30 - 18:30 (Cool breeze & orange glow)",
    ticketPriceTh: "เข้าชมฟรี (เช่าจักรยานชั่วโมงละ 15-30 หยวน หรือเหมาวัน 50-80 หยวน)",
    ticketPriceEn: "Free admission (Bike rental 15-30 RMB/hr or 50-80 RMB/day)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟ 25 กม. DiDi ประมาณ 45-55 หยวน (35 นาที)",
      fromOldTown: "ห่างจากเมืองโบราณต้าหลี่ 12 กม. DiDi ปักหมุด '磻溪村S湾' 25-30 หยวน (20 นาที)",
      inside: "ห้ามรถยนต์เข้า ปั่นจักรยาน วิ่งออกกำลังกาย หรือนั่งรถกอล์ฟไฟฟ้าอุทยาน"
    },
    transportEn: {
      fromStation: "25 km from railway station. DiDi 45-55 RMB (35 min)",
      fromOldTown: "12 km from Dali Old Town. DiDi to 'Panxi S-Bay' 25-30 RMB (20 min)",
      inside: "Zero motor vehicles. Cycling, jogging or electric shuttle carts only"
    },
    highlightsTh: [
      "ถนนโค้งตัว S ริมผืนน้ำสีฟ้าคราม จุดเช็คอินยอดนิยมอันดับ 1 ของทะเลสาบเอ๋อร์ไห่",
      "ต้นสนเรดวูด (Metasequoia) ริมน้ำที่เปลี่ยนเป็นสีส้มแดงสวยงามในฤดูหนาว",
      "ฝูงนกเป็ดน้ำและนกนางนวลว่ายน้ำเล่นริมฝั่งทะเลสาบ",
      "ร้านกาแฟมินิมอลและดริปบาร์ริมผืนน้ำ นั่งชมวิวเงาภูเขาชางซานสะท้อนน้ำ"
    ],
    highlightsEn: [
      "Iconic S-curved bike road right along crystal waters: Top viral spot",
      "Metasequoia dawn redwood trees turning fiery orange in winter",
      "Flocks of migrating waterfowl and Siberian gulls swimming by the shore",
      "Minimalist lakeside drip coffee bars with reflections of Cangshan mountain"
    ],
    descriptionTh: "ระเบียงระบบนิเวศริมทะเลสาบเอ๋อร์ไห่ฝั่งตะวันตก ระยะทางกว่า 40 กม. ที่ห้ามรถยนต์ใช้น้ำมันเข้า 100% สัมผัสสายลมบริสุทธิ์และทิวทัศน์ผืนน้ำสะท้อนเทือกเขาชางซานดั่งภาพวาด",
    descriptionEn: "A 40-km protected ecological lakeside promenade along western Erhai Lake. Strictly car-free, perfect for leisurely cycling while admiring Cangshan reflections on azure waters."
  },
  {
    id: 5,
    nameTh: "เจดีย์สามองค์แห่งวัดฉงเซิ่ง",
    nameZh: "崇圣寺三塔文化旅游区",
    pinyin: "Chóngshèngsì Sāntǎ",
    nameEn: "Three Pagodas of Chongsheng Temple",
    category: "culture_heritage",
    categoryLabelTh: "มรดกประวัติศาสตร์พันปี",
    categoryLabelEn: "Heritage Pagodas",
    categoryColor: "#7c3aed",
    pastelBg: "#f3e8ff",
    badgeColor: "#e9d5ff",
    doodleBorderColor: "#6d28d9",
    doodleIcon: "🪷",
    rating: 4.5,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "สัญลักษณ์เมืองต้าหลี่ สระสะท้อนเงาเจดีย์และยอดเขาหิมะงดงามมาก",
    ratingDescEn: "Dali's monumental thousand-year symbol with spectacular water reflections",
    coords: [25.7029, 100.1393], // Qianxun Pagoda & Reflection Pool area
    image: "assets/places/05_three_pagodas.jpg",
    tags: ["เจดีย์เฉียนสวิน", "ราชวงศ์ถัง", "วัดหลวงอาณาจักรต้าหลี่", "Tang Dynasty", "Three Pagodas"],
    shortBulletsTh: [
      "เจดีย์องค์ประธานสมัยราชวงศ์ถัง สูง 69.13 ม. ยืนหยัดพันปี",
      "สระจวี้อิ่งฉือ จุดถ่ายภาพสะท้อนเงาเจดีย์คู่เทือกเขาชางซาน",
      "อารามหลวงศักดิ์สิทธิ์ที่อดีตกษัตริย์ต้าหลี่ 9 พระองค์ทรงผนวช"
    ],
    shortBulletsEn: [
      "1,100-yr Tang Dynasty Qianxun Pagoda (69.13 m)",
      "Juyingchi mirror pool reflection against snow peaks",
      "Sacred Royal Buddhist temple where 9 kings took vows"
    ],
    openingHoursTh: "07:30 – 18:30 น. (ปิดจำหน่ายบัตร 17:00 น.) ทุกวัน",
    openingHoursEn: "07:30 – 18:30 daily (Tickets sold until 17:00)",
    bestTimeTh: "ช่วงเช้า 08:00 – 10:00 น. (แสงแดดส่องด้านหน้าเจดีย์ ผิวน้ำในสระนิ่งสงบเงาชัดเจน)",
    bestTimeEn: "Morning 08:00 – 10:00 (Frontal sunlight, calm reflection pond)",
    ticketPriceTh: "75 หยวน/ท่าน (รถกอล์ฟในอุทยาน 35 หยวน)",
    ticketPriceEn: "75 RMB/person (Park electric shuttle: 35 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟ 19 กม. DiDi ประมาณ 40-45 หยวน",
      fromOldTown: "ห่างจากประตูด้านเหนือเมืองเก่าเพียง 1.5 กม. เดินเท้า 20 นาที หรือ DiDi 10-12 หยวน (5 นาที)",
      inside: "มีรถกอล์ฟบริการรับส่งขึ้นสู่วัดฉงเซิ่งด้านบน"
    },
    transportEn: {
      fromStation: "19 km from railway station. DiDi approx 40-45 RMB",
      fromOldTown: "Only 1.5 km north of Dali Old Town. 20 min walk or DiDi 10-12 RMB (5 min)",
      inside: "Internal electric carts available for the uphill temple climb"
    },
    highlightsTh: [
      "เจดีย์เฉียนสวินองค์ประธาน สูง 69.13 เมตร ศิลปะสมัยราชวงศ์ถัง ผ่านแผ่นดินไหวมานับพันปี",
      "เจดีย์บริวารแปดเหลี่ยมคู่ขนาบซ้ายขวา ศิลปะอาณาจักรต้าหลี่ สูง 42.19 เมตร",
      "สระจวี้อิ่งฉือ (Juyingchi) จุดถ่ายรูปสะท้อนเงาเจดีย์ 3 องค์คู่ยอดเขาหิมะชางซาน",
      "อารามหลวงวัดฉงเซิ่ง ที่ซึ่งกษัตริย์ต้าหลี่ในอดีตถึง 9 พระองค์ทรงสละราชย์ออกผนวช"
    ],
    highlightsEn: [
      "Central Qianxun Pagoda: 69.13 m tall Tang masterpiece surviving major earthquakes",
      "Two flanking octagonal brick pagodas (42.19 m) from the Dali Kingdom era",
      "Juyingchi Reflection Pond: Postcard mirror shot of pagodas against snow peaks",
      "Chongsheng Royal Temple where 9 ancient Dali emperors took monastic vows"
    ],
    descriptionTh: "โบราณสถานระดับ AAAAA และสัญลักษณ์ทางประวัติศาสตร์ที่สำคัญที่สุดของเมืองต้าหลี่ สร้างขึ้นตั้งแต่ศตวรรษที่ 9 ยืนหยัดข้ามกาลเวลากว่า 1,100 ปีอย่างสง่างาม",
    descriptionEn: "A national AAAAA historic monument and the undisputed landmark of Dali dating to the 9th century. Stands proudly against Mount Cangshan with reflections echoing 1,100 years of history."
  },
  {
    id: 6,
    nameTh: "ด่านซานโตรินีต้าหลี่ (หลี่เซียงปัง)",
    nameZh: "理想邦文化旅游度假小镇",
    pinyin: "Lǐxiǎngbāng (Dàlǐ Shèngtuōlǐní)",
    nameEn: "Dali Santorini (The Ideal State)",
    category: "nature_lake",
    categoryLabelTh: "สถาปัตยกรรม & วิวพาโนรามา",
    categoryLabelEn: "Cliff Architecture",
    categoryColor: "#0284c7",
    pastelBg: "#eff6ff",
    badgeColor: "#bfdbfe",
    doodleBorderColor: "#2563eb",
    doodleIcon: "🏛️",
    rating: 4.4,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "วิวทะเลสาบพระอาทิตย์ตกดินอลังการ ดีไซน์ถ้ำสีขาวสไตล์กรีซ",
    ratingDescEn: "Spectacular sunset views over Erhai Lake with Aegean cave design",
    coords: [25.6980, 100.2675], // Cliffside resort village overlooking Erhai Lake
    image: "assets/places/06_dali_santorini.jpg",
    tags: ["สไตล์กรีซ", "บ้านถ้ำสีขาว", "พระอาทิตย์ตกดิน", "Santorini", "Ideal State"],
    shortBulletsTh: [
      "สถาปัตยกรรมบ้านถ้ำสีขาวโค้งมนลดหลั่นตามหน้าผา",
      "จุดชมพระอาทิตย์ตกที่สวยที่สุดในต้าหลี่ แสงสีส้มสะท้อนน้ำ",
      "สระว่ายน้ำอินฟินิตี้ ซุ้มโค้งโรแมนติก & คาเฟ่วิวทะเลสาบ"
    ],
    shortBulletsEn: [
      "Whitewashed Aegean cave villas on lakeside cliffs",
      "Top sunset vantage point over Erhai and Mount Cangshan",
      "Infinity pools, cactus gardens & editorial photo spots"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง ทุกวัน (ร้านค้า/คาเฟ่ 09:30 - 22:00 น.)",
    openingHoursEn: "Open 24 hours daily (Cafes 09:30 - 22:00)",
    bestTimeTh: "ช่วงเย็น 16:30 – 19:00 น. (Golden Hour ชมพระอาทิตย์ตกหลังเทือกเขาชางซาน)",
    bestTimeEn: "Evening 16:30 – 19:00 (Sunset golden hour over Mount Cangshan)",
    ticketPriceTh: "เข้าชมพื้นที่สาธารณะฟรี (คาเฟ่และโรงแรมคิดค่าบริการตามเมนู/ห้องพัก)",
    ticketPriceEn: "Free public access (Cafes & resorts charge by menu/room)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟเพียง 15 กม. ข้ามสะพานทะเลสาบ DiDi 30-40 หยวน (20 นาที)",
      fromAirport: "ใกล้สนามบินต้าหลี่มาก ห่างเพียง 12 กม. นั่งแท็กซี่ 25-35 หยวน (15 นาที)",
      fromOldTown: "ห่างจากเมืองโบราณ 28 กม. (ข้ามทะเลสาบ) DiDi 65-75 หยวน (40-45 นาที)"
    },
    transportEn: {
      fromStation: "15 km from railway station across the lake. DiDi 30-40 RMB (20 min)",
      fromAirport: "Very close to airport (12 km). Taxi 25-35 RMB (15 min)",
      fromOldTown: "28 km from Dali Old Town. DiDi 65-75 RMB (40-45 min)"
    },
    highlightsTh: [
      "สถาปัตยกรรมสไตล์เกาะซานโตรินี บ้านถ้ำสีขาวโค้งมนลดหลั่นตามหน้าผาริมทะเลสาบ",
      "จุดชมพระอาทิตย์ตกดินที่ดีที่สุดในต้าหลี่ แสงสีทองส้มสะท้อนผืนน้ำเอ๋อร์ไห่ 180 องศา",
      "รีสอร์ทหรูระดับท็อป เช่น Dali Songyun Cliff Resort และ Miyue Santorini",
      "สระว่ายน้ำอินฟินิตี้ ซุ้มประตูโค้ง และมุมถ่ายภาพระดับไฮเอนด์"
    ],
    highlightsEn: [
      "Aegean white cave houses cascading down the cliffside overlooking Erhai Lake",
      "Unrivaled vantage point for romantic sunsets behind the Cangshan mountains",
      "Luxury cliff hotels such as Dali Songyun and Miyue Santorini with infinity pools",
      "Iconic arches, cactus gardens, and mirror pools popular for editorial photography"
    ],
    descriptionTh: "เมืองตากอากาศสีขาวริมหน้าผาฝั่งตะวันออกของทะเลสาบเอ๋อร์ไห่ ที่ผสมผสานความโรแมนติกของทะเลอีเจียนเข้ากับความยิ่งใหญ่ของเทือกเขาชางซานจนได้รับสมญานามว่า 'ซานโตรินีแห่งแดนมังกร'",
    descriptionEn: "A dazzling whitewashed cliffside resort enclave on eastern Erhai Lake. Fuses Mediterranean aesthetic with dramatic Yunnan mountain panoramas, known as the 'Santorini of China'."
  },
  {
    id: 7,
    nameTh: "เมืองโบราณซวงหลาง",
    nameZh: "双廊古镇",
    pinyin: "Shuāngláng Gǔzhèn",
    nameEn: "Shuanglang Ancient Town",
    category: "ancient_town",
    categoryLabelTh: "เมืองศิลปะริมน้ำ",
    categoryLabelEn: "Artistic Lakeside Town",
    categoryColor: "#ea580c",
    pastelBg: "#fdf2f8",
    badgeColor: "#fbcfe8",
    doodleBorderColor: "#db2777",
    doodleIcon: "🪑",
    rating: 4.6,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "วิวขุนเขาและผืนน้ำอันดับ 1 คาเฟ่ริมน้ำโรแมนติกมาก",
    ratingDescEn: "Premier lakeside views, artistic boutiques, and romantic over-water cafes",
    coords: [25.9105, 100.2078], // Waterfront promenade & Sun Palace area
    image: "assets/places/07_shuanglang_ancient_town.jpg",
    tags: ["วังสุริยัน", "วังจันทรา", "เกาะหนานจ้าว", "Sun Palace", "Shuanglang"],
    shortBulletsTh: [
      "เก้าอี้ขาวริมน้ำสุดโรแมนติก จุดถ่ายรูปซิกเนเจอร์ต้าหลี่",
      "พระราชวังสุริยัน (Sun Palace) สตูดิโอริมน้ำของศิลปินหยางลี่ผิง",
      "คาเฟ่ระเบียงยื่นเหนือผืนน้ำ นั่งฟังเสียงคลื่นจิบชาสบายใจ"
    ],
    shortBulletsEn: [
      "Famous lakeside white bench signature photo spot",
      "Sun Palace: Waterfront retreat of dancer Yang Liping",
      "Over-water wooden cafes listening to gentle lake ripples"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง ทุกวัน (วังสุริยัน 09:00 - 18:00 น. ต้องจองล่วงหน้า)",
    openingHoursEn: "Open 24 hours daily (Sun Palace 09:00 - 18:00, reservation required)",
    bestTimeTh: "ช่วงบ่ายถึงค่ำ 14:30 – 19:30 น. (จิบกาแฟริมน้ำ ทานปลาย่างพื้นเมืองชมพระอาทิตย์ตก)",
    bestTimeEn: "Afternoon to evening 14:30 – 19:30 (Lakeside tea, local grilled fish & sunset)",
    ticketPriceTh: "เข้าเมืองฟรี (เกาะหนานจ้าวรวมเรือ 50 หยวน, วังสุริยัน 128 หยวนพร้อมชา)",
    ticketPriceEn: "Free town admission (Nanzhao Island 50 RMB inc boat; Sun Palace 128 RMB inc tea)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟ 55 กม. DiDi ประมาณ 110-130 หยวน (1 ชม.)",
      fromOldTown: "ห่างจากเมืองโบราณต้าหลี่ 45 กม. รถบัสท่องเที่ยวตรง 25 หยวน (1 ชม.) หรือ DiDi 90-110 หยวน",
      fromXizhou: "นั่งเรือข้ามฟากชมวิวทะเลสาบจากท่าเรือใกล้ซีโจว หรือนั่งรถอ้อม 30 นาที"
    },
    transportEn: {
      fromStation: "55 km from railway station. DiDi 110-130 RMB (1 hr)",
      fromOldTown: "45 km from Dali Old Town. Direct tourist shuttle 25 RMB (1 hr) or DiDi 90-110 RMB",
      fromXizhou: "Scenic boat ferry across the lake or 30 min drive around the north shore"
    },
    highlightsTh: [
      "พระราชวังสุริยัน (Sun Palace) สตูดิโอริมน้ำของศิลปินนักเต้นแห่งชาติ หยางลี่ผิง",
      "เกาะวัฒนธรรมหนานจ้าว (Nanzhao Customs Island) นั่งเรือข้ามฟากชมรูปปั้นกวนอิมหินขาว",
      "คาเฟ่ริมน้ำระเบียงยื่นลงในผืนน้ำทะเลสาบ นั่งฟังเสียงคลื่นและลมเย็น",
      "สมญานาม 'เมืองที่มีทิวทัศน์ขุนเขาชางซานและทะเลสาบเอ๋อร์ไห่ที่สวยที่สุด'"
    ],
    highlightsEn: [
      "Sun Palace: The artistic waterfront retreat of legendary dancer Yang Liping",
      "Nanzhao Customs Island: 5-minute ferry ride to giant white stone Guanyin statue",
      "Waterfront cafes with wooden decks extending right above gentle lake ripples",
      "Crowned as the finest scenic vantage point combining Cangshan peaks and Erhai waters"
    ],
    descriptionTh: "อดีตหมู่บ้านชาวประมงชนเผ่าไป๋ที่กลายมาเป็นเมืองศิลปะริมน้ำยอดนิยม ตั้งอยู่ทางมุมตะวันออกเฉียงเหนือของทะเลสาบเอ๋อร์ไห่ จุดชมวิวที่มองเห็นเทือกเขาชางซานทอดยาวขนานกับผืนน้ำได้สง่างามที่สุด",
    descriptionEn: "A Bai fishing hamlet turned bohemian art village on northeastern Erhai Lake. Famed for its artistic waterfront architecture, boutique hotels, and unparalleled mountain-lake vistas."
  },
  {
    id: 8,
    nameTh: "เทือกเขาชางซาน & กระเช้าลอยฟ้าซีหม่าถาน",
    nameZh: "苍山地质公园 & 洗马潭索道",
    pinyin: "Cāngshān & Xǐmǎtán Suǒdào",
    nameEn: "Cangshan Mountain & Ximatan Cableway",
    category: "mountain_nature",
    categoryLabelTh: "เทือกเขาแอลป์ & ธารน้ำแข็ง",
    categoryLabelEn: "Alpine & Glacier",
    categoryColor: "#059669",
    pastelBg: "#f0fdf4",
    badgeColor: "#bbf7d0",
    doodleBorderColor: "#16a34a",
    doodleIcon: "🚠",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "กระเช้าสู่ยอดเขา 3,920 ม. วิวอลังการ ทางเดินหน้าผาร่มรื่น",
    ratingDescEn: "Epic 3,920 m high cable car, glacial lake, and flat cliff boardwalks",
    coords: [25.6725, 100.1415], // Lower cableway terminal near Tianlong Film City
    image: "assets/places/08_cangshan_mountain.jpg",
    tags: ["ยอดเขา 3,920 ม.", "ทะเลสาบล้างม้า", "ทางเดินอวี้ไต้", "Cangshan", "Ximatan"],
    shortBulletsTh: [
      "กระเช้าลอยฟ้าซีหม่าถานสู่ยอดเขาหิมะ 3,920 เมตร",
      "สระล้างม้า ทะเลสาบธารน้ำแข็งดึกดำบรรพ์บนยอดดอย",
      "ทางเดินหินลอยฟ้าอวี้ไต้เลียบหน้าผาป่าสนร่มรื่น 11 กม."
    ],
    shortBulletsEn: [
      "Subalpine cableway ascending to 3,920 m elevation",
      "Ancient Ximatan glacial pool frozen in winter",
      "11-km flat shaded Jade Belt cliff walkway & panorama"
    ],
    openingHoursTh: "08:30 – 17:00 น. (กระเช้ารอบสุดท้ายขึ้นยอด 14:00 น.) ทุกวัน",
    openingHoursEn: "08:30 – 17:00 daily (Last ascent to peak 14:00)",
    bestTimeTh: "ช่วงเช้า 08:30 – 11:30 น. (โอกาสฟ้าเปิดบนยอดเขาสูงที่สุด และชมเมฆหยกคาดเอว)",
    bestTimeEn: "Morning 08:30 – 11:30 (Highest chance of clear skies and 'Jade Belt Cloud' formation)",
    ticketPriceTh: "กระเช้าซีหม่าถานขึ้นยอดบนสุดไป-กลับ 280-320 หยวน (รวมค่าเข้าอุทยานชางซาน)",
    ticketPriceEn: "Ximatan round-trip cableway to top 3,920 m: 280-320 RMB (inc park entry)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟต้าหลี่ 18 กม. DiDi ประมาณ 40 หยวน (30 นาที)",
      fromOldTown: "ห่างจากเมืองโบราณต้าหลี่เพียง 3 กม. DiDi ใช้เวลาเพียง 10 นาที (12-18 หยวน)",
      inside: "กระเช้าลอยฟ้า 2 ช่วง และสะพานไม้เดินเลียบหน้าผาอย่างปลอดภัย"
    },
    transportEn: {
      fromStation: "18 km from railway station. DiDi approx 40 RMB (30 min)",
      fromOldTown: "Only 3 km from Dali Old Town. DiDi takes 10 min (12-18 RMB)",
      inside: "Two-stage modern gondola cableway and safe elevated wooden cliff trails"
    },
    highlightsTh: [
      "กระเช้าลอยฟ้าซีหม่าถาน ไต่ระดับความสูงจาก 2,200 ม. สู่ยอดเขาหิมะที่ความสูง 3,920 ม.",
      "ทะเลสาบซีหม่าถาน (สระล้างม้า) ทะเลสาบธารน้ำแข็งโบราณบนยอดเขา ในฤดูหนาวกลายเป็นน้ำแข็ง",
      "ถนนลอยฟ้าอวี้ไต้ (Jade Belt Road) ทางเดินหินปูเลียบหน้าผาที่ความสูง 2,600 ม. เดินง่ายมาก",
      "ชมวิว Bird's-eye view ทะเลสาบเอ๋อร์ไห่ทั้งผืนน้ำและเมืองต้าหลี่จากมุมสูงเสียดฟ้า"
    ],
    highlightsEn: [
      "Ximatan Cableway: Soars from 2,200 m to subalpine summit at 3,920 m",
      "Ximatan Glacial Lake: Ancient alpine pool freezing over in winter months",
      "Jade Belt Cloud Road: 11-km flat cliffside paved hiking trail at 2,600 m elevation",
      "Sweeping bird's-eye panorama of all Erhai Lake and the Dali plain below"
    ],
    descriptionTh: "ปราการธรรมชาติทางทิศตะวันตกของต้าหลี่ ประกอบด้วย 19 ยอดเขา และ 18 ลำธารน้ำตก ยอดเขาสูงสุด 4,122 ม. สัมผัสความหลากหลายทางชีวภาพ ป่าสนดึกดำบรรพ์ และอากาศบริสุทธิ์บนยอดเขา",
    descriptionEn: "Dali's mighty western natural backbone featuring 19 soaring peaks and 18 clear streams reaching up to 4,122 m. Offers rich alpine biodiversity, ancient rhododendron forests, and exhilarating cable car ascents."
  },
  {
    id: 9,
    nameTh: "หมู่บ้านมัดย้อมครามโบราณโจวเฉิง",
    nameZh: "周城村 (白族扎染之乡)",
    pinyin: "Zhōuchéng Cūn (Báizú Zhārǎn)",
    nameEn: "Zhoucheng Village (Bai Tie-Dye)",
    category: "culture_heritage",
    categoryLabelTh: "มรดกภูมิปัญญาช่างฝีมือ",
    categoryLabelEn: "Intangible Craft",
    categoryColor: "#7c3aed",
    pastelBg: "#e0e7ff",
    badgeColor: "#c7d2fe",
    doodleBorderColor: "#4f46e5",
    doodleIcon: "🧵",
    rating: 4.7,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "เวิร์กช็อปมัดย้อมครามธรรมชาติ สนุก ได้ผลงานกลับบ้าน ชุมชนน่ารัก",
    ratingDescEn: "Hands-on natural indigo tie-dye workshop, authentic Bai grandmothers",
    coords: [25.8850, 100.1165], // Puzhen Tie-Dye Workshop & Ancient Stage
    image: "assets/places/09_zhoucheng_tie_dye.jpg",
    tags: ["มรดกวัฒนธรรมชาติ", "ครามธรรมชาติ", "เวิร์กช็อป DIY", "Tie-Dye", "Zhoucheng"],
    shortBulletsTh: [
      "ถิ่นกำเนิดมรดกภูมิปัญญาผ้ามัดย้อมครามระดับชาติ",
      "ลานตากผ้าครามสีน้ำเงินขาวโบกสะบัดกลางแดด ถ่ายรูปสวย",
      "เวิร์กช็อป DIY มัดย้อมสีพืชธรรมชาติแท้ ชิ้นเดียวในโลก"
    ],
    shortBulletsEn: [
      "Birthplace of National Intangible Heritage Bai tie-dye",
      "Iconic drying yards of blue & white fluttering indigo cloth",
      "Hands-on DIY organic herbal tie-dye scarf workshop"
    ],
    openingHoursTh: "เปิดทุกวัน 08:30 – 18:00 น. (ตัวหมู่บ้านเปิด 24 ชม.)",
    openingHoursEn: "Daily 08:30 – 18:00 (Village open 24 hrs)",
    bestTimeTh: "ช่วงบ่าย 13:30 – 16:30 น. (แสงแดดส่องลานตากผ้าครามสวยงาม และมีเวลาทำ DIY 1-1.5 ชม.)",
    bestTimeEn: "Afternoon 13:30 – 16:30 (Sunlit drying courtyards & 1-1.5 hr DIY session)",
    ticketPriceTh: "เข้าชมฟรี (เวิร์กช็อปทำผ้ามัดย้อม 30 - 120 หยวน ตามขนาดชิ้นงาน)",
    ticketPriceEn: "Free admission (DIY tie-dye 30 - 120 RMB depending on fabric choice)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟ 40 กม. DiDi ประมาณ 80-90 หยวน (1 ชม.)",
      fromOldTown: "ห่างจากเมืองโบราณต้าหลี่ 23 กม. มินิบัสไปเอ่อร์หยวน 8-10 หยวน หรือ DiDi 50 หยวน (35 นาที)",
      fromXizhou: "อยู่ห่างจากซีโจวเพียง 5 กม. นั่งรถแท็กซี่ต่อเพียง 10 นาที (15 หยวน)"
    },
    transportEn: {
      fromStation: "40 km from railway station. DiDi 80-90 RMB (1 hr)",
      fromOldTown: "23 km north of Dali Old Town. Minibus 8-10 RMB or DiDi 50 RMB (35 min)",
      fromXizhou: "Only 5 km north of Xizhou. Taxi takes 10 min (15 RMB)"
    },
    highlightsTh: [
      "หมู่บ้านชนเผ่าไป๋ที่ใหญ่ที่สุดในจีน ถิ่นกำเนิดมรดกวัฒนธรรมผ้ามัดย้อมระดับชาติ",
      "พิพิธภัณฑ์ผูเจิน (Puzhen Tie-Dye Museum) ลานตากผ้าครามสีน้ำเงินขาวโบกสะบัดกลางแดด",
      "เวิร์กช็อปมัดย้อม DIY ด้วยสีย้อมครามธรรมชาติแท้ (สมุนไพรพืช) ปราศจากสารเคมี",
      "ลานต้นไทรโบราณ 500 ปีคู่กลางหมู่บ้าน ชมคุณยายชาวไป๋สวมชุดพื้นเมืองดั้งเดิม"
    ],
    highlightsEn: [
      "Largest Bai ethnic village in China and home of National Intangible Cultural Heritage",
      "Puzhen Tie-Dye Museum: Giant courtyards of indigo-and-white fabrics fluttering in breeze",
      "Hands-on DIY workshop using 100% natural plant-based indigo dye without chemicals",
      "Pair of 500-year-old sacred banyan trees at village center with traditionally dressed elders"
    ],
    descriptionTh: "เมืองหลวงแห่งผ้ามัดย้อมครามของจีนที่มีประวัติยาวนานนับพันปี สัมผัสความประณีตของลวดลายมัดย้อมกว่า 100 แบบ และลองทำผ้าพันคอสีครามเป็นของขวัญชิ้นเดียวในโลกด้วยมือคุณเอง",
    descriptionEn: "China's foremost historic center for authentic Bai indigo tie-dye. Learn over 100 traditional knot patterns and hand-craft your own one-of-a-kind silk or cotton souvenir."
  },
  {
    id: 10,
    nameTh: "วัดแม่ชีหมื่นบุปผา จี้จาวอัน",
    nameZh: "寂照庵",
    pinyin: "Jìzhào'ān",
    nameEn: "Jizhao Nunnery",
    category: "culture_heritage",
    categoryLabelTh: "สวนพืชอวบน้ำ & อาหารเจเซน",
    categoryLabelEn: "Zen Succulent Garden",
    categoryColor: "#059669",
    pastelBg: "#ecfdf5",
    badgeColor: "#a7f3d0",
    doodleBorderColor: "#047857",
    doodleIcon: "🪴",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "วัดแม่ชีที่สวยและสงบที่สุดในจีน ไร้ควันธูป อาหารเจอร่อยเลิศ",
    ratingDescEn: "China's most serene nunnery: smoke-free, thousands of succulents & healthy Zen food",
    coords: [25.6565, 100.1580], // Halfway up Cangshan Mountain above Gantong Temple
    image: "assets/places/10_jizhao_nunnery.jpg",
    tags: ["พืชอวบน้ำหมื่นต้น", "ไร้ควันธูป", "อาหารเจ 20 หยวน", "Jizhao", "Succulents"],
    shortBulletsTh: [
      "วัดแม่ชีไร้ควันธูป บูชาพระพุทธองค์ด้วยดอกไม้สด & ไม้อวบน้ำ",
      "สวนพืชอวบน้ำและบอนไซนับหมื่นต้น ร่มรื่นท่ามกลางป่าสน",
      "อาหารเจเพื่อสุขภาพ 20 หยวน & โรงน้ำชาเซนฟรีผ่อนคลายจิตใจ"
    ],
    shortBulletsEn: [
      "Tranquil smoke-free temple adored with living blossoms",
      "Sanctuary of 10,000 potted succulents nestled in pine forest",
      "Wholesome 20-RMB vegetarian lunch & peaceful Zen tea"
    ],
    openingHoursTh: "08:00 – 17:30 น. ทุกวัน (อาหารเจมื้อเที่ยง 11:30 – 13:00 น. เริ่มขายคูปอง 11:00)",
    openingHoursEn: "Daily 08:00 – 17:30 (Vegetarian lunch 11:30 – 13:00, tickets sold at 11:00)",
    bestTimeTh: "ช่วงเช้า 09:30 – 11:30 น. (ชมสวนดอกไม้และจิบชาก่อนมื้ออาหาร) หรือ บ่าย 14:00 – 16:30 น.",
    bestTimeEn: "Morning 09:30 – 11:30 (Admire succulents & tea before lunch) or Afternoon 14:00 – 16:30",
    ticketPriceTh: "เข้าชมฟรี (คูปองอาหารเจบุฟเฟต์ 20 หยวน/ท่าน ตักทานห้ามเหลือ)",
    ticketPriceEn: "Free temple admission (Vegetarian buffet lunch: 20 RMB/person, no food waste permitted)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟ 15 กม. DiDi ไปลานจอดรถวัดก่านทง 30 หยวน (25 นาที)",
      fromOldTown: "ห่างจากเมืองโบราณต้าหลี่ 10 กม. DiDi ปักหมุด '感通寺停车场' 20-25 หยวน (15-20 นาที)",
      inside: "จากลานจอดรถ เดินเท้าขึ้นเนินเขาในป่าสนร่มรื่น 800 เมตร (15-20 นาที)"
    },
    transportEn: {
      fromStation: "15 km from railway station. DiDi to Gantong Temple parking 30 RMB (25 min)",
      fromOldTown: "10 km from Dali Old Town. DiDi to 'Gantong Temple parking' 20-25 RMB (15-20 min)",
      inside: "Scenic 800 m uphill stroll through shaded pine forest from parking lot (15-20 min)"
    },
    highlightsTh: [
      "วัดแม่ชีที่ไม่มีการจุดธูปควันคลุ้ง บูชาพระพุทธองค์ด้วยความสงบ ดอกไม้สด และต้นไม้",
      "สวนพืชอวบน้ำ (Succulents) นับหมื่นต้น บอนไซ และกล้วยไม้ป่าประดับทั่วทั้งวัด",
      "โรงน้ำชาเซนบริการน้ำชาสมุนไพรและน้ำแร่ภูเขาต้มสุกฟรี นั่งฟังเสียงลมในป่าสน",
      "อาหารเจเพื่อสุขภาพรสเลิศ 20 หยวน ปรุงจากผักสดบนเขา สะอาด และเปี่ยมด้วยความตั้งใจ"
    ],
    highlightsEn: [
      "Smoke-free temple: Flowers and living succulents replace burning incense",
      "Enchanting sanctuary of over 10,000 potted succulents, bonsai, and wild orchids",
      "Zen teahouse offering complimentary spring tea while listening to pine wind",
      "Famous 20-RMB healthy vegetarian buffet prepared with mountain herbs and devotion"
    ],
    descriptionTh: "วัดพุทธแม่ชีที่ซ่อนตัวอยู่กลางป่าสนโบราณบนไหล่เขาชางซาน ดุจดั่งสวนสวรรค์เซนกลางหุบเขาที่ช่วยเยียวยาจิตใจและคืนความสงบสุขให้แก่ผู้มาเยือน",
    descriptionEn: "An idyllic Buddhist nunnery nestled within Cangshan's ancient pine forests. Renowned as a spiritual healing oasis free of incense smoke, filled with succulent blossoms and Zen tranquility."
  }
];

// Data for Shangri-La Top 9 Attractions (Bilingual: Thai / English / Chinese)
// Coordinates are calibrated directly on AMAP (GCJ-02 Datum) for 100% pinpoint accuracy.
const SHANGRILA_ATTRACTIONS = [
  {
    id: 0,
    nameTh: "สถานีรถไฟความเร็วสูงแชงกรีล่า",
    nameZh: "香格里拉站 (高铁站)",
    pinyin: "Xiānggélǐlā Zhàn",
    nameEn: "Shangri-La Railway Station (HSR Hub)",
    category: "transit_hub",
    categoryLabelTh: "ศูนย์กลางรถไฟความเร็วสูง",
    categoryLabelEn: "High-Speed Rail Hub",
    categoryColor: "#dc2626",
    pastelBg: "#fef2f2",
    badgeColor: "#fecaca",
    doodleBorderColor: "#b91c1c",
    doodleIcon: "🚅",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "สถานีรถไฟความเร็วสูงบนที่ราบสูง 3,274 ม. ประตูสู่ทิเบตแดนสวรรค์ อาคารสวยงามมาก",
    ratingDescEn: "Altitude 3,274m HSR station: Tibetan palace facade, clean & high-speed link to Dali/Kunming",
    coords: [27.7942, 99.7125],
    image: "assets/places/shangrila_00_station.jpg",
    tags: ["รถไฟความเร็วสูง", "แชงกรีล่า", "สถานีรถไฟ", "HSR Hub", "Gateway"],
    shortBulletsTh: [
      "สถานีรถไฟความเร็วสูงบนที่ราบสูง 3,274 เมตร สถาปัตยกรรมทิเบตสง่างาม",
      "เชื่อมต่อรถไฟ CRH จากคุนหมิง (4.5 ชม.), ต้าหลี่ (2.5 ชม.), ลี่เจียง (1.2 ชม.)",
      "มีรถเมล์สาย 1 ตรงสู่เมืองโบราณตู๋เค่อจง (2 หยวน) และจุดเรียก DiDi สะดวกสบาย"
    ],
    shortBulletsEn: [
      "Alpine HSR station at 3,274m altitude with Tibetan architectural grandeur",
      "Direct bullet trains from Kunming (4.5h), Dali (2.5h), Lijiang (1.2h)",
      "City bus No. 1 direct to Dukezong Ancient Town (2 RMB) & easy DiDi pickup"
    ],
    openingHoursTh: "เปิดทุกวัน 06:30 - 22:30 น. (ตามตารางเดินรถไฟ)",
    openingHoursEn: "Daily 06:30 - 22:30 (Follows train schedules)",
    bestTimeTh: "เดินทางถึงช่วงเช้า 09:00 - 11:00 น. เพื่อให้ร่างกายปรับตัวกับความสูง",
    bestTimeEn: "Morning arrival 09:00 - 11:00 to acclimatize slowly to high altitude",
    ticketPriceTh: "รถไฟความเร็วสูง ต้าหลี่-แชงกรีล่า ชั้นสองประมาณ 85-110 หยวน",
    ticketPriceEn: "Dali - Shangri-La bullet train 2nd class approx 85-110 RMB",
    transportTh: {
      fromStation: "จุดเริ่มต้นการเดินทางหลักในเขตเมืองแชงกรีล่า",
      fromAirport: "ห่างจากสนามบินตี๋ชิ่ง แชงกรีล่า (DIG) 7 กม. DiDi ประมาณ 15 หยวน",
      inside: "มีฮีตเตอร์อุ่น ลิฟต์ บันไดเลื่อน และห้องพยาบาลให้ออกซิเจนฟรี"
    },
    transportEn: {
      fromStation: "Main transportation hub for Shangri-La Tibetan Plateau",
      fromAirport: "7 km from Diqing Shangri-La Airport (DIG), DiDi ~15 RMB",
      inside: "Heated waiting halls, escalators, and complimentary oxygen wellness lounge"
    },
    highlightsTh: [
      "ทางรถไฟลี่เจียง-แชงกรีล่า (丽香铁路) สิ่งมหัศจรรย์ทางวิศวกรรมข้ามสะพานแม่น้ำจินซาเจียง",
      "อาคารสถานีสไตล์ทิเบตประดับตรากงล้อมนต์ธรรมจักรสีทองตระการตา",
      "จุดต่อรถเมล์สาย 1 และสายพิเศษสู่วัดซงจ้านหลิน และเมืองโบราณตู๋เค่อจง",
      "มีตู้จ่ายน้ำร้อนและห้องพักผ่อนพร้อมอุปกรณ์ช่วยปรับระดับความสูง"
    ],
    highlightsEn: [
      "Lijiang - Shangri-La Railway: world-class engineering marvel crossing Jinsha River",
      "Majestic Tibetan station exterior adorned with golden Dharma wheel emblems",
      "Direct bus routes to Songzanlin Monastery and Dukezong Ancient Town",
      "Equipped with oxygen relaxation lounges and hot drinking water facilities"
    ],
    descriptionTh: "สถานีรถไฟความเร็วสูงแชงกรีล่า ชุมทางคมนาคมระดับโลกบนความสูงกว่า 3,200 เมตรที่เปิดให้บริการอย่างเป็นทางการ พลิกโฉมการเดินทางสู่แดนสวรรค์แชงกรีล่าให้สะดวกรวดเร็วและปลอดภัยในทุกฤดูกาล",
    descriptionEn: "Shangri-La Railway Station, situated at over 3,200 meters elevation, revolutionizes travel into the Tibetan paradise with fast, comfortable CRH bullet trains running year-round."
  },
  {
    id: 1,
    nameTh: "วัดซงจ้านหลิน (พระราชวังโปตาลัยน้อย)",
    nameZh: "噶丹·松赞林寺",
    pinyin: "Gádān Sōngzànlín Sì",
    nameEn: "Ganden Sumtseling Monastery (Little Potala)",
    category: "tibetan_monastery",
    categoryLabelTh: "อารามทิเบตศักดิ์สิทธิ์",
    categoryLabelEn: "Tibetan Monastery",
    categoryColor: "#b45309",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#92400e",
    doodleIcon: "🛕",
    rating: 4.95,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "อารามพุทธทิเบตที่ใหญ่ที่สุดในยูนนาน ยอดทองอร่ามศักดิ์สิทธิ์สะท้อนผืนน้ำ",
    ratingDescEn: "Largest Tibetan Buddhist monastery in Yunnan: golden roofs, vibrant murals & sacred aura",
    coords: [27.8631, 99.7046],
    image: "assets/places/shangrila_01_songzanlin.jpg",
    tags: ["โปตาลัยน้อย", "วัดทิเบต", "ซงจ้านหลิน", "Little Potala", "Sumtseling"],
    shortBulletsTh: [
      "อารามพุทธทิเบตนิกายหมวกเหลือง (เกลุก) สร้างปี ค.ศ. 1679 โดยทะไลลามะที่ 5",
      "ยอดหลังคาทองคำแท้สะท้อนผืนน้ำทะเลสาบลาหมู่หยางชั่ว (Lamuyangcuo)",
      "ทางเดินไม้รอบทะเลสาบชมมุมโปสการ์ดพาโนรามาสวยงามสะกดสายตา"
    ],
    shortBulletsEn: [
      "Founded in 1679 by the 5th Dalai Lama, crown jewel of Gelug Yellow Hat Buddhism",
      "Gilded roofs shimmering across sacred Lamuyangcuo Lake",
      "Scenic wooden boardwalk around the lake for iconic postcard reflections"
    ],
    openingHoursTh: "07:30 – 18:30 น. ทุกวัน (ฤดูหนาว 08:00 – 18:00 น.)",
    openingHoursEn: "Daily 07:30 – 18:30 (Winter 08:00 – 18:00)",
    bestTimeTh: "เช้า 08:30 – 10:30 น. (ชมแสงอาทิตย์กระทบยอดทองและหมอกเหนือน้ำ) หรือ บ่าย 16:00 – 17:30 น.",
    bestTimeEn: "Morning 08:30 – 10:30 (Golden light on roofs & mist) or Afternoon 16:00 – 17:30",
    ticketPriceTh: "บัตรเข้าชมรวมรถบัสนำเที่ยว 115 หยวน (ตั๋วผู้สูงอายุ 75 หยวน)",
    ticketPriceEn: "Admission incl. shuttle bus 115 RMB (Senior discount: 75 RMB)",
    transportTh: {
      fromStation: "จากสถานีรถไฟ 12 กม. DiDi 25 หยวน หรือรถเมล์สาย 3 (2 หยวน)",
      fromOldTown: "จากเมืองโบราณตู๋เค่อจง 5 กม. DiDi 12 หยวน หรือรถเมล์สาย 3 ต่อเดียวถึง",
      inside: "มีรถบัสอุทยานรับส่งจาก Tourist Center ถึงหน้าบันไดวัด และมีจุดพักเหนื่อย"
    },
    transportEn: {
      fromStation: "12 km from HSR Station. DiDi ~25 RMB or Bus No. 3 (2 RMB)",
      fromOldTown: "5 km from Dukezong Ancient Town. DiDi ~12 RMB or direct Bus No. 3",
      inside: "Eco shuttle bus runs from visitor center to temple gates; resting pavilions along stairs"
    },
    highlightsTh: [
      "พระอุโบสถหลัก 2 หลัง จาชาง (Zhashang) และจี๋คัง (Jikang) ประดิษฐานพระพุทธรูปศากยมุนีทองสัมฤทธิ์สูง 8 เมตร",
      "จิตรกรรมฝาผนังทังคา (Thangka) โบราณฝีมือประณีตที่บันทึกพุทธประวัติและตำนานทิเบต",
      "ทางเดินไม้ริมทะเลสาบลาหมู่หยางชั่ว มุมถ่ายภาพสะท้อนน้ำที่งดงามที่สุดในแชงกรีล่า",
      "สัมผัสวิถีชีวิตพระสงฆ์ทิเบตและการเดินเวียนประทักษิณตามเข็มนาฬิกาเพื่อความเป็นสิริมงคล"
    ],
    highlightsEn: [
      "Two grand main halls (Zhashang and Jikang) enshrining an 8-meter gilded Shakyamuni Buddha",
      "Ancient Thangka wall murals depicting Buddhist scriptures and Tibetan folklore",
      "Boardwalk loop encircling sacred Lamuyangcuo Lake with postcard-perfect reflections",
      "Authentic Tibetan monk chanting sessions and clockwise kora prayer walks"
    ],
    descriptionTh: "วัดซงจ้านหลิน หรือกาดัน ซงจ้านหลิน ได้รับการขนานนามว่า 'พระราชวังโปตาลัยน้อย' ด้วยสถาปัตยกรรมปราการหินสีขาวตัดแดงและยอดหลังคาทองคำอร่ามที่ตั้งตระหง่านอยู่บนเนินเขาศักดิ์สิทธิ์",
    descriptionEn: "Nicknamed the 'Little Potala Palace', Songzanlin Monastery is Yunnan's largest Tibetan Buddhist sanctum, perched majestically against sacred hills with shimmering golden spires."
  },
  {
    id: 2,
    nameTh: "เมืองโบราณตู๋เค่อจง & กงล้อมนต์ทองคำยักษ์",
    nameZh: "独克宗古城 · 大佛寺转经筒",
    pinyin: "Dúkèzōng Gǔchéng · Zhuǎnjīngtǒng",
    nameEn: "Dukezong Ancient Town & Giant Prayer Wheel",
    category: "ancient_town",
    categoryLabelTh: "เมืองโบราณพันปี",
    categoryLabelEn: "Ancient Town",
    categoryColor: "#c2410c",
    pastelBg: "#fff7ed",
    badgeColor: "#ffedd5",
    doodleBorderColor: "#9a3412",
    doodleIcon: "🏯",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "เมืองโบราณแสงจันทร์ 1,300 ปีบนเส้นทางคาราวานชา-ม้า กงล้อมนต์ยักษ์ใหญ่ที่สุดในโลก",
    ratingDescEn: "1,300-year-old 'Moonlight City' on Tea-Horse Road featuring world's largest golden prayer wheel",
    coords: [27.8139, 99.7061],
    image: "assets/places/shangrila_02_dukezong.jpg",
    tags: ["เมืองโบราณแสงจันทร์", "กงล้อมนต์ยักษ์", "ตู๋เค่อจง", "Dukezong", "Prayer Wheel"],
    shortBulletsTh: [
      "เมืองโบราณทิเบต 'แสงจันทร์บนโขดหิน' อายุ 1,300 ปีบนเส้นทางค้าชา-ม้าโบราณ",
      "หมุนกงล้อมนต์ทองคำยักษ์สูง 21 เมตร หนัก 60 ตัน บนยอดเขากุยชาน (ร่วมแรง 4-5 คน)",
      "ร้านชาเนยจามรี คาเฟ่ทิเบต และการเต้นรำพื้นเมืองกัวจวงรอบกองไฟที่ลานสี่เหลี่ยมยามค่ำ"
    ],
    shortBulletsEn: [
      "1,300-year-old Tibetan 'Castle on Stone' stronghold along the historic Tea Horse Road",
      "Spin the colossal 21m-tall, 60-ton golden prayer wheel on Guishan Hill (requires 4-5 people)",
      "Lively Tibetan butter tea cafes and evening Guazhuang bonfire folk dancing in the square"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง (กงล้อมนต์และวัดต้าฝอเปิด 08:00 – 22:00 น.)",
    openingHoursEn: "Open 24 hours (Guishan Temple & Prayer Wheel 08:00 – 22:00)",
    bestTimeTh: "ช่วงเย็นและค่ำ 17:30 – 21:30 น. (เปิดไฟประดับสีทองอร่ามและชมการเต้นรำกัวจวง)",
    bestTimeEn: "Evening 17:30 – 21:30 (Illuminated golden nightscape & bonfire dancing)",
    ticketPriceTh: "เข้าชมฟรี (กงล้อมนต์และวัดต้าฝอเข้าชมฟรี)",
    ticketPriceEn: "Free admission (Temple and prayer wheel are completely free)",
    transportTh: {
      fromStation: "จากสถานีรถไฟ 5 กม. DiDi 10-12 หยวน หรือรถเมล์สาย 1 (2 หยวน)",
      fromAirport: "จากสนามบินตี๋ชิ่ง 6 กม. DiDi 15 หยวน (12 นาที)",
      inside: "เดินเท้าปูหินโบราณ มีบันไดขึ้นเขากุยชาน 120 ขั้นสู่กงล้อมนต์"
    },
    transportEn: {
      fromStation: "5 km from HSR Station. DiDi 10-12 RMB or Bus No. 1 (2 RMB)",
      fromAirport: "6 km from Airport. DiDi 15 RMB (12 min)",
      inside: "Cobblestone pedestrian alleys; 120 stone steps up Guishan Hill to prayer wheel"
    },
    highlightsTh: [
      "กงล้อมนต์ทองคำยักษ์ที่ใหญ่ที่สุดในโลก บรรจุพระคัมภีร์มนต์ศักดิ์สิทธิ์กว่า 1.24 ล้านบท",
      "จุดชมวิวพาโนรามาหลังคาสีดำและกำแพงหินขาวของเมืองโบราณตู๋เค่อจงจากยอดเขากุยชาน",
      "ลานวัฒนธรรมมูนสแควร์ (Yueguang Plaza) จุดรวมนักท่องเที่ยวและชุมชนท้องถิ่น",
      "พิพิธภัณฑ์วัฒนธรรมทิเบตและร้านเช่าชุดทิเบตถ่ายภาพความทรงจำสุดประทับใจ"
    ],
    highlightsEn: [
      "World's largest prayer wheel loaded with 1.24 million sacred Buddhist mantras",
      "Panoramic vista over slate-roofed Tibetan homes from the peak of Guishan Park",
      "Moonlight Square: bustling epicenter with Tibetan crafts and cultural performances",
      "Authentic Tibetan photo-shooting studios and handicraft workshops"
    ],
    descriptionTh: "เมืองโบราณตู๋เค่อจง เมืองโบราณทิเบตที่ได้รับการอนุรักษ์ไว้อย่างมีชีวิตชีวา โดดเด่นด้วยบ้านโบราณไม้และดินอัด กลิ่นหอมของธูปสนไซเปรส และกงล้อมนต์ทองคำยักษ์ที่ส่องสว่างดุจประภาคารแห่งศรัทธายามค่ำคืน",
    descriptionEn: "Dukezong Ancient Town is a living sanctuary of Tibetan culture, famous for its labyrinth of stone alleys, fragrant juniper incense, and the iconic golden prayer wheel shining brightly at night."
  },
  {
    id: 3,
    nameTh: "อุทยานแห่งชาติผู่ต๋าชั่ว (ทะเลสาบสู่ตูหู)",
    nameZh: "普达措国家公园 · 属都湖",
    pinyin: "Pǔdácuò Guójiā Gōngyuán · Shǔdū Hú",
    nameEn: "Potatso National Park · Shudu Lake",
    category: "alpine_nature",
    categoryLabelTh: "อุทยานแห่งชาติ & ทะเลสาบ",
    categoryLabelEn: "National Park & Lake",
    categoryColor: "#047857",
    pastelBg: "#ecfdf5",
    badgeColor: "#a7f3d0",
    doodleBorderColor: "#065f46",
    doodleIcon: "🌲",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "อุทยานแห่งชาติแห่งแรกของจีน ป่าสนดึกดำบรรพ์ ทะเลสาบกระจกเงาและไอหมอกยามเช้า",
    ratingDescEn: "China's first national park: pristine mirror lakes, ancient spruce forests & alpine meadows",
    coords: [27.8286, 99.9882],
    image: "assets/places/shangrila_03_potatso.jpg",
    tags: ["ผู่ต๋าชั่ว", "สู่ตูหู", "ป่าสนโบราณ", "มรดกโลก", "Potatso"],
    shortBulletsTh: [
      "อุทยานแห่งชาติแห่งแรกของจีน ความสูง 3,500 – 4,159 เมตร ผืนป่าสนและทะเลสาบสมบูรณ์",
      "ทางเดินสะพานไม้เลียบทะเลสาบสู่ตูหู 3.3 กม. เดินสบาย ไร้บันไดชัน สัมผัสไอหมอกผิวน้ำ",
      "ทุ่งหญ้าอัลไพน์ ทะเลสาบปี้ถ่าไห่ ฝูงม้า จามรี และกระรอกป่าคุ้นเคยกับผู้คน"
    ],
    shortBulletsEn: [
      "China's first national park situated at 3,500 - 4,159m, UNESCO protected biodiversity",
      "Gentle 3.3 km wooden boardwalk along Shudu Lake with zero steep climbs and scenic mists",
      "Alpine grasslands, grazing yaks, wild horses, and friendly native birds"
    ],
    openingHoursTh: "08:30 – 16:00 น. (ปิดรับนักท่องเที่ยว 16:00, รถบัสรอบสุดท้าย 18:00 น.)",
    openingHoursEn: "08:30 – 16:00 (Last entry 16:00, last shuttle bus 18:00)",
    bestTimeTh: "เช้า 08:30 – 11:30 น. (ชมไอหมอกลอยเหนือน้ำทะเลสาบสู่ตูหูและแสงแดดส่องทะลุป่าสน)",
    bestTimeEn: "Morning 08:30 – 11:30 (Morning mist over Shudu Lake and radiant forest sunbeams)",
    ticketPriceTh: "บัตรเข้าชมรวมรถบัสนำเที่ยวไฟฟ้า 100 หยวน (ฤดูหนาว 68-80 หยวน)",
    ticketPriceEn: "Admission incl. eco shuttle bus 100 RMB (Winter off-peak ~68-80 RMB)",
    transportTh: {
      fromStation: "จากสถานีรถไฟ 28 กม. รถบัสท่องเที่ยวจากสถานีขนส่ง 15 หยวน หรือ DiDi 60-70 หยวน",
      fromOldTown: "จากเมืองโบราณตู๋เค่อจง 22 กม. รถตู้ท่องเที่ยวหน้าประตูเมือง 15-20 หยวน หรือ DiDi 50 หยวน",
      inside: "มีรถบัสนำเที่ยวอุทยานพลังงานไฟฟ้าจอดรับ-ส่งตามจุดท่องเที่ยวหลัก สะดวกสบายมาก"
    },
    transportEn: {
      fromStation: "28 km from HSR Station. Tourist shuttle 15 RMB or DiDi 60-70 RMB",
      fromOldTown: "22 km from Dukezong. Direct scenic shuttle from parking lot (15-20 RMB)",
      inside: "Electric shuttle buses stop at each scenic section; gentle flat wooden plank path"
    },
    highlightsTh: [
      "ทะเลสาบสู่ตูหู (Shudu Lake) แหล่งน้ำใสกระจกเงาที่มีสาหร่ายและหญ้าน้ำโบราณใต้ผืนน้ำ",
      "สะพานไม้เดินศึกษาธรรมชาติ 3.3 กิโลเมตร ที่ออกแบบกลมกลืนกับระบบนิเวศ ไม่ทำลายสิ่งแวดล้อม",
      "ป่าสนดึกดำบรรพ์ที่เต็มไปด้วยเคราฤๅษี (Usnea) บ่งบอกถึงความบริสุทธิ์สูงสุดของอากาศ",
      "จุดชมทุ่งหญ้าเลี้ยงสัตว์ทิเบต ชมฝูงจามรีขนยาวและลูกม้าวิ่งเล่นอย่างอิสระ"
    ],
    highlightsEn: [
      "Shudu Lake: pristine mirror waters teeming with ancient subaquatic flora",
      "3.3 km elevated eco-boardwalk meticulously engineered to protect alpine wetlands",
      "Ancient virgin spruce and fir canopy covered in beard lichen—testament to pure air quality",
      "Highland pastures where yaks and Tibetan ponies roam freely against pine backdrop"
    ],
    descriptionTh: "อุทยานแห่งชาติผู่ต๋าชั่ว ผืนป่าและทะเลสาบชุ่มน้ำบนที่ราบสูงที่ได้รับการคุ้มครองระดับสูงสุด ดินแดนแห่งความเงียบสงบที่สายลมพัดผ่านยอดสนและผืนน้ำใสสะท้อนท้องฟ้าคราม",
    descriptionEn: "Potatso National Park is an ecological wonderland on the Tibetan plateau, famous for its mirror-clear lakes, pristine ancient pine forests, and ethereal morning mists."
  },
  {
    id: 4,
    nameTh: "ทุ่งหญ้า & ทะเลสาบนาพาไห่ (ทะเลสาบตามฤดูกาล)",
    nameZh: "纳帕海 · 依拉草原",
    pinyin: "Nàpà Hǎi · Yīlā Cǎoyuán",
    nameEn: "Napa Lake & Yila Grassland",
    category: "alpine_nature",
    categoryLabelTh: "ทุ่งหญ้า & ทะเลสาบ",
    categoryLabelEn: "Grassland & Lake",
    categoryColor: "#0284c7",
    pastelBg: "#f0f9ff",
    badgeColor: "#bae6fd",
    doodleBorderColor: "#0369a1",
    doodleIcon: "🌊",
    rating: 4.85,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ทุ่งหญ้าสเตปป์สีทอง ฝูงจามรี ม้าแคระทิเบต และถนนลอยน้ำเลียบทะเลสาบ",
    ratingDescEn: "Expansive highland steppe & lake: roaming yaks, black-necked cranes & flooded highway",
    coords: [27.8762, 99.6453],
    image: "assets/places/shangrila_04_napa_lake.jpg",
    tags: ["นาพาไห่", "ทุ่งหญ้าอีลา", "จามรี", "ถนนลอยน้ำ", "Napa Lake"],
    shortBulletsTh: [
      "ฤดูฝนน้ำหลากเป็นทะเลสาบใสกว้างใหญ่ ฤดูหนาวลดระดับกลายเป็นทุ่งหญ้าสเตปป์สีทอง",
      "ฝูงจามรี ม้าแคระทิเบต และฝูงนกกระเรียนคอดำหายากบินอพยพมาหลบหนาว",
      "เส้นทางขับรถ/ปั่นจักรยานรอบทะเลสาบ 40 กม. ชมวิวหมู่บ้านทิเบตดั้งเดิมและยอดเขาหิมะ"
    ],
    shortBulletsEn: [
      "Seasonal wetland: sparkling lake in late summer, golden vast steppe in autumn/winter",
      "Graze with yaks and Tibetan horses; winter habitat for rare black-necked cranes",
      "Scenic 40 km lakeside road trip through traditional wooden Tibetan farmsteads"
    ],
    openingHoursTh: "เปิดทุกวัน 08:00 – 18:30 น. (เส้นทางถนนรอบทะเลสาบเปิดตลอด 24 ชม.)",
    openingHoursEn: "Daily 08:00 – 18:30 (Scenic ring road open 24 hours)",
    bestTimeTh: "ช่วงบ่ายถึงเย็น 15:30 – 18:30 น. (แสงอาทิตย์สีทองกระทบทุ่งหญ้าและผืนน้ำ)",
    bestTimeEn: "Afternoon to Sunset 15:30 – 18:30 (Golden light reflecting off water and grasslands)",
    ticketPriceTh: "ชมรอบทะเลสาบฟรี (หากเข้าจุดชมวิวจุดบริการขี่ม้า 40-60 หยวนตามตกลง)",
    ticketPriceEn: "Free viewing along ring road (Private horse riding ranches ~40-60 RMB)",
    transportTh: {
      fromStation: "จากสถานีรถไฟ 14 กม. DiDi 25-30 หยวน หรือเหมารถเที่ยวรอบทะเลสาบ 100-150 หยวน",
      fromOldTown: "จากเมืองโบราณตู๋เค่อจง 8 กม. เช่าสกู๊ตเตอร์ไฟฟ้า 50 หยวน/วัน หรือ DiDi 15-20 หยวน",
      inside: "ถนนลาดยางอย่างดีรอบทะเลสาบ เหมาะสำหรับการขับรถชมวิว แวะถ่ายรูปตามจุดพัก"
    },
    transportEn: {
      fromStation: "14 km from HSR Station. DiDi ~25-30 RMB or hired taxi loop ~120 RMB",
      fromOldTown: "8 km from Dukezong. Electric scooter rental 50 RMB/day or DiDi 18 RMB",
      inside: "Paved lakeside scenic highway with abundant pull-offs and photo platforms"
    },
    highlightsTh: [
      "ถนนน้ำหลากนาพาไห่ (Water Road) จุดถ่ายภาพรถวิ่งผ่านผิวน้ำที่โด่งดังในโซเชียลมีเดีย",
      "ทุ่งหญ้าอีลา (Yila Grassland) ทุ่งหญ้าธรรมชาติที่ใหญ่ที่สุดในทิเบตยูนนาน",
      "ฝูงนกกระเรียนคอดำ (Black-necked Cranes) นกคุ้มครองระดับสูงสุดที่จะพบได้ในฤดูหนาว",
      "บ้านเรือนชาวทิเบตทำจากท่อนไม้ซุงและโครงสร้างตากข้าวบาร์เลย์บนที่ราบสูงอันเป็นเอกลักษณ์"
    ],
    highlightsEn: [
      "Famous 'Water Road' where scenic highway gently crosses shallow lake waters",
      "Yila Grassland: largest alpine meadow in northwestern Yunnan plateau",
      "Winter sanctuary for endangered migratory black-necked cranes",
      "Distinctive Tibetan log cabins and timber barley-drying drying racks"
    ],
    descriptionTh: "นาพาไห่และทุ่งหญ้าอีลา คือภาพวาดธรรมชาติที่มีชีวิต ความมหัศจรรย์ของพื้นที่ชุ่มน้ำที่เปลี่ยนแปลงไปตามฤดูกาล โอบล้อมด้วยภูเขาหิมะและฝูงสัตว์เลี้ยงบนทุ่งหญ้ากว้างไกล",
    descriptionEn: "Napa Lake & Yila Grassland is a living canvas where seasonal waters sculpt a dynamic sanctuary of golden steppes, grazing herds, and migratory birds beneath snow-capped peaks."
  },
  {
    id: 5,
    nameTh: "ภูเขาหิมะสือข่า (หุบเขาพระจันทร์สีน้ำเงิน)",
    nameZh: "石卡雪山 (蓝月山谷)",
    pinyin: "Shíkǎ Xuěshān",
    nameEn: "Shika Snow Mountain (Blue Moon Valley)",
    category: "snow_mountain",
    categoryLabelTh: "ภูเขาหิมะศักดิ์สิทธิ์",
    categoryLabelEn: "Snow Mountain",
    categoryColor: "#4338ca",
    pastelBg: "#eef2ff",
    badgeColor: "#c7d2fe",
    doodleBorderColor: "#3730a3",
    doodleIcon: "🏔️",
    rating: 4.88,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "กระเช้าลอยฟ้ายาวที่สุดในเอเชียสู่ยอดเขา 4,500 ม. ชม 8 ยอดเขาหิมะศักดิ์สิทธิ์แบบ 360°",
    ratingDescEn: "Panoramic cableway to 4,500m summit: 360° vistas of 8 sacred snow peaks including Meili",
    coords: [27.7947, 99.6019],
    image: "assets/places/shangrila_05_shika_snow_mountain.jpg",
    tags: ["ภูเขาหิมะสือข่า", "กระเช้าลอยฟ้า", "ยอดเขาศักดิ์สิทธิ์", "Shika Snow Mountain"],
    shortBulletsTh: [
      "นั่งกระเช้าลอยฟ้า 2 ช่วง ความยาว 4,190 เมตร ขึ้นสู่ยอดเขาหิมะ 4,500 เมตร",
      "จุดชมวิว 360 องศา เห็นยอดเขาหิมะศักดิ์สิทธิ์ 8 ลูก รวมเขาหิมะเหม่ยลี่และมังกรหยก",
      "ทุ่งหญ้าย่าลาที่สถานีกระเช้าชั้นกลาง สวยงามดั่งสวิตเซอร์แลนด์ มีจามรีและดอกไม้ป่า"
    ],
    shortBulletsEn: [
      "Two-stage 4,190m cableway ascending directly to 4,500m alpine summit",
      "360-degree vista witnessing 8 iconic sacred snow ranges simultaneously",
      "Mid-station Yala Meadow resembling Swiss alpine valleys with sheep & wildflowers"
    ],
    openingHoursTh: "08:30 – 16:30 น. (กระเช้ารอบสุดท้ายขึ้น 15:00 น.)",
    openingHoursEn: "08:30 – 16:30 (Last uphill cable car departs at 15:00)",
    bestTimeTh: "เช้า 09:00 – 12:00 น. (ท้องฟ้าแจ่มใส ลมสงบ โอกาสเห็นยอดเขาหิมะชัดเจน 100%)",
    bestTimeEn: "Morning 09:00 – 12:00 (Clear skies, low winds, optimal 8-peak visibility)",
    ticketPriceTh: "บัตรเข้าชมรวมกระเช้าไป-กลับ 220 หยวน",
    ticketPriceEn: "Admission incl. two-stage round-trip cable car 220 RMB",
    transportTh: {
      fromStation: "จากสถานีรถไฟ 10 กม. DiDi 20-25 หยวน (15 นาที)",
      fromOldTown: "จากเมืองโบราณตู๋เค่อจง 7 กม. DiDi 15 หยวน หรือรถตู้สายสือข่า 10 หยวน",
      inside: "กระเช้าลอยฟ้าปิดมิดชิดปลอดภัย มีห้องอุ่นและอุปกรณ์ออกซิเจนจำหน่ายที่สถานี"
    },
    transportEn: {
      fromStation: "10 km from HSR Station. DiDi 20-25 RMB (15 min)",
      fromOldTown: "7 km from Dukezong. DiDi ~15 RMB or scenic shuttle 10 RMB",
      inside: "Fully enclosed modern gondolas; heated stations equipped with oxygen bar"
    },
    highlightsTh: [
      "ยอดเขาสือข่า (4,500 ม.) ยอดเขาแห่งความโชคดีและสันติภาพตามคติพุทธทิเบต",
      "สามารถมองเห็นเทือกเขาหิมะเหม่ยลี่ (Meili), ปี้หลัว (Biluo), ยู่หลง (Jade Dragon) และฮาป๋า (Haba)",
      "ทางเดินสะพานไม้บนยอดเขาหิมะ สัมผัสหิมะจริงตลอดฤดูหนาวและฤดูใบไม้ผลิ",
      "หมู่บ้านทิเบตดั้งเดิมและป่ากุหลาบพันปีที่เบ่งบานหลากสีสันในช่วงต้นฤดูร้อน"
    ],
    highlightsEn: [
      "Shika Summit (4,500m): sacred mountain of fortune and inner peace in Tibetan belief",
      "Breathtaking skyline framing Meili, Biluo, Jade Dragon, and Haba snow peaks",
      "Summit wooden viewing walkways offering safe alpine snow exploration",
      "Lush rhododendron groves blooming vividly around the mid-level station"
    ],
    descriptionTh: "ภูเขาหิมะสือข่า หรือหุบเขาพระจันทร์สีน้ำเงิน เปรียบประดุจระเบียงชมวิวแห่งหลังคาโลก นำพานักเดินทางขึ้นสู่ความสูง 4,500 เมตรเพื่อสัมผัสความยิ่งใหญ่ของเทือกเขาหิมะศักดิ์สิทธิ์อย่างใกล้ชิดและปลอดภัย",
    descriptionEn: "Shika Snow Mountain (Blue Moon Valley) offers an unforgettable alpine journey aboard one of Asia's longest cable cars, crowning travelers with 360-degree vistas of the Himalayas' eastern guardians."
  },
  {
    id: 6,
    nameTh: "หุบเขาเสือกระโจน แชงกรีล่า (ช่วงบน & ลานหินเสือกระโจน)",
    nameZh: "虎跳峡 (香格里拉段 · 上虎跳)",
    pinyin: "Hǔtiào Xiá",
    nameEn: "Tiger Leaping Gorge (Shangri-La Section)",
    category: "alpine_nature",
    categoryLabelTh: "ช่องแคบผาหินธรรมชาติ",
    categoryLabelEn: "Gorge & Canyon",
    categoryColor: "#d97706",
    pastelBg: "#fffbeb",
    badgeColor: "#fde68a",
    doodleBorderColor: "#b45309",
    doodleIcon: "🐯",
    rating: 4.95,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ช่องแคบหุบเหวที่ลึกที่สุดในโลก กระแสน้ำแยงซีเกียงเชี่ยวกราก บันไดเลื่อนกระจกชมวิวสะดวกสบาย",
    ratingDescEn: "World's deepest river canyon: roaring Jinsha River rapids & scenic glass escalator access",
    coords: [27.1812, 100.1265],
    image: "assets/places/shangrila_06_tiger_leaping_gorge.jpg",
    tags: ["เสือกระโจน", "แม่น้ำจินซาเจียง", "บันไดเลื่อนกระจก", "Tiger Leaping Gorge"],
    shortBulletsTh: [
      "หนึ่งในช่องแคบหุบเหวที่ลึกและอลังการที่สุดในโลก ขนาบด้วยเขาหิมะมังกรหยกและเขาหิมะฮาป๋า",
      "จุดชมวิวเสือกระโจนฝั่งแชงกรีล่า มีบันไดเลื่อนกระจกชมวิวลงสู่โขดหินแก่งน้ำเชี่ยวกราก",
      "สัมผัสพลังเสียงคำรามดังกึกก้องของแม่น้ำจินซาเจียง (ต้นน้ำแยงซี) กระทบหินเสือกระโจน"
    ],
    shortBulletsEn: [
      "World's deepest gorge flanked by Jade Dragon Snow Mountain and Haba Snow Mountain",
      "Shangri-La scenic section features panoramic glass escalators descending to river level",
      "Feel the thunderous roar of the roaring Jinsha (Yangtze) River crashing against the Tiger Rock"
    ],
    openingHoursTh: "08:30 – 17:30 น. ทุกวัน",
    openingHoursEn: "Daily 08:30 – 17:30",
    bestTimeTh: "เช้า 09:30 – 12:00 น. หรือ บ่าย 14:00 – 16:30 น. (แสงแดดส่องทะลุหุบผาเกิดรุ้งกินน้ำ)",
    bestTimeEn: "Morning 09:30 – 12:00 or Afternoon 14:00 – 16:30 (Sunlight creating canyon rainbows)",
    ticketPriceTh: "บัตรเข้าชม 45 หยวน (ค่าบันไดเลื่อนไป-กลับ 70 หยวน ไม่ต้องเดินเหนื่อย)",
    ticketPriceEn: "Admission 45 RMB (Optional round-trip glass escalator: 70 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟเสือกระโจน (Hutiaoxia HSR) เพียง 6 กม. แท็กซี่ 15-20 หยวน",
      fromOldTown: "จากแชงกรีล่า 95 กม. รถบัสท่องเที่ยว 35 หยวน หรือนั่งรถไฟความเร็วสูงลงสถานีเสือกระโจน (30 นาที)",
      inside: "ทางเดินไม้เรียบ และบันไดเลื่อนกระจกชมวิวลงสู่ลานหินเสือกระโจนริมน้ำ"
    },
    transportEn: {
      fromStation: "6 km from Tiger Leaping Gorge HSR Station. Taxi ~15-20 RMB",
      fromOldTown: "95 km from Shangri-La. CRH bullet train to Hutiaoxia Station (30 min) + local taxi",
      inside: "Flat wooden walkway & scenic escalators directly down to the riverside viewing platform"
    },
    highlightsTh: [
      "หินเสือกระโจน (Tiger Leaping Stone) ก้อนหินยักษ์กลางแม่น้ำตามตำนานเสือกระโดดข้ามหุบเขา",
      "บันไดเลื่อนกระจกชมวิวปรับอากาศ อำนวยความสะดวกสบาย ไม่ต้องเดินบันไดชัน 1,000 ขั้น",
      "ทิวทัศน์หน้าผาหินสูงชันกว่า 3,900 เมตรจากก้นเหวถึงยอดเขาหิมะ",
      "จุดเชื่อมต่อการเดินทางจากแชงกรีล่าสู่ลี่เจียงและต้าหลี่ด้วยรถไฟความเร็วสูง"
    ],
    highlightsEn: [
      "Legendary Tiger Leaping Rock standing firm in the torrent where a tiger leaped across",
      "Modern climate-controlled glass sightseeing escalators saving over 1,000 steep steps",
      "Towering vertical cliff drop of over 3,900 meters from mountain summit to canyon floor",
      "Convenient HSR train connection linking Shangri-La, Lijiang, and Dali"
    ],
    descriptionTh: "หุบเขาเสือกระโจน มหัศจรรย์ทางธรรมชาติระดับโลกที่แม่น้ำแยงซีเกียงไหลบีบคั้นผ่านช่องผาแคบระหว่างสองเทือกเขาหิมะยักษ์ เป็นภาพความยิ่งใหญ่ตระการตาที่ต้องมาสัมผัสด้วยตาตนเองสักครั้งในชีวิต",
    descriptionEn: "Tiger Leaping Gorge is an awe-inspiring geological phenomenon where the raging Yangtze torrent carves deeply between twin colossal snow massifs, offering unmatched thrills and beauty."
  },
  {
    id: 7,
    nameTh: "ธารหินปูนสีขาวไป๋สุ่ยไถ (ปามุคคาเลแห่งยูนนาน)",
    nameZh: "白水台",
    pinyin: "Báishuǐ Tái",
    nameEn: "Baishuitai White Water Terraces",
    category: "culture_heritage",
    categoryLabelTh: "มหัศจรรย์ธรรมชาติ & วัฒนธรรม",
    categoryLabelEn: "Natural Wonder & Culture",
    categoryColor: "#0891b2",
    pastelBg: "#ecfeff",
    badgeColor: "#a5f3fc",
    doodleBorderColor: "#0e7490",
    doodleIcon: "🪷",
    rating: 4.82,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ธารน้ำแร่หินปูนขั้นบันไดสีขาวมุก มรดกธรรมชาติศักดิ์สิทธิ์และต้นกำเนิดวัฒนธรรมตงปา",
    ratingDescEn: "Glistening white limestone cascade terraces: holy cradle of Naxi Dongba culture & crystal waters",
    coords: [27.5028, 100.0389],
    image: "assets/places/shangrila_07_baishuitai.jpg",
    tags: ["ไป๋สุ่ยไถ", "ปามุคคาเลเมืองจีน", "วัฒนธรรมตงปา", "Baishuitai"],
    shortBulletsTh: [
      "ธารน้ำแร่หินปูนสีขาวมุกซ้อนเป็นชั้นบันไดคล้ายปามุคคาเลในตุรกี",
      "แหล่งกำเนิดวัฒนธรรมและอักษรภาพตงปา (Dongba) อันศักดิ์สิทธิ์ของชนเผ่าน่าซี",
      "น้ำแร่ธรรมชาติใสสีฟ้าเทอร์ควอยซ์สะท้อนท้องฟ้าและป่าเขียวขจี"
    ],
    shortBulletsEn: [
      "Stunning stepped white travertine terraces resembling Pamukkale in Turkey",
      "Sacred birthland of the Naxi Dongba religion and hieroglyphic pictographic script",
      "Turquoise mineral-rich spring waters mirroring azure skies and alpine forest"
    ],
    openingHoursTh: "08:00 – 17:30 น. ทุกวัน",
    openingHoursEn: "Daily 08:00 – 17:30",
    bestTimeTh: "ช่วงสาย 10:00 – 13:00 น. (แสงแดดส่องกระทบชั้นหินปูนเกิดประกายสีขาวมุกระยิบระยับ)",
    bestTimeEn: "Midday 10:00 – 13:00 (Direct sunlight illuminating radiant pearly white pools)",
    ticketPriceTh: "บัตรเข้าชม 30 หยวน",
    ticketPriceEn: "Admission ticket 30 RMB",
    transportTh: {
      fromStation: "ห่างจากสถานีเสือกระโจน 60 กม. หรือจากตัวเมืองแชงกรีล่า 100 กม. แนะนำเหมารถท่องเที่ยว",
      fromOldTown: "จากเมืองโบราณตู๋เค่อจง มีรถบัสท่องเที่ยววันละ 1 เที่ยว (30 หยวน) หรือเหมารถเที่ยวคู่เสือกระโจน",
      inside: "เดินบันไดขึ้นเนินเขาในป่าสนร่มรื่นประมาณ 20 นาที หรือเช่าม้าท้องถิ่น 30-50 หยวน"
    },
    transportEn: {
      fromStation: "60 km from Hutiaoxia HSR / 100 km from Shangri-La town. Chartered car recommended",
      fromOldTown: "Daily morning scenic coach from Dukezong bus station (30 RMB) or private day tour",
      inside: "20-minute pleasant uphill walk through pine groves or local horseback ride (30-50 RMB)"
    },
    highlightsTh: [
      "ชั้นหินปูนแคลเซียมคาร์บอเนตธรรมชาติที่ก่อตัวมานานหลายพันปี มีรูปร่างคล้ายนาขั้นบันได",
      "บ่อน้ำแร่ศักดิ์สิทธิ์ที่ชาวพื้นเมืองเชื่อว่าเป็นที่สถิตของเทพเจ้าแห่งสายน้ำ",
      "จุดชมวิวยอดผา มองเห็นผืนน้ำสีฟ้าขาวตัดกับป่าสนเขียวชอุ่มเบื้องล่าง",
      "สัมผัสวัฒนธรรมดั้งเดิมของชนเผ่าน่าซีและชนเผ่าไป๋ที่อาศัยอยู่โดยรอบ"
    ],
    highlightsEn: [
      "Millennia-old calcium carbonate terraces sculpted like terraced rice paddies",
      "Sacred holy springs revered by ethnic locals as water deities' sanctuaries",
      "Clifftop panoramic decks capturing emerald pine hills contrasted against white mineral pools",
      "Authentic Naxi and Bai ethnic villages preserving timeless farming and weaving traditions"
    ],
    descriptionTh: "ไป๋สุ่ยไถ ดินแดนมหัศจรรย์ที่ธรรมชาติสรรค์สร้างธารน้ำแร่สีขาวบริสุทธิ์ซ้อนทับกันดุจบันไดเงินสู่สวรรค์ เป็นทั้งมรดกทางธรณีวิทยาและศูนย์รวมจิตวิญญาณแห่งวัฒนธรรมตงปา",
    descriptionEn: "Baishuitai is a natural masterpiece of stepped white travertine formations, celebrated as both an extraordinary geological wonder and the spiritual birthplace of ancient Dongba culture."
  },
  {
    id: 8,
    nameTh: "หมู่บ้านทิเบตฮาป๋า & เชิงเขาหิมะฮาป๋า",
    nameZh: "哈巴雪山观景台 · 哈巴村",
    pinyin: "Hābǎ Xuěshān · Hābǎ Cūn",
    nameEn: "Haba Snow Mountain Viewpoint & Village",
    category: "snow_mountain",
    categoryLabelTh: "ภูเขาหิมะ & ชุมชนท้องถิ่น",
    categoryLabelEn: "Snow Mountain & Village",
    categoryColor: "#6366f1",
    pastelBg: "#eef2ff",
    badgeColor: "#c7d2fe",
    doodleBorderColor: "#4338ca",
    doodleIcon: "🏔️",
    rating: 4.86,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "จุดชมวิวยอดเขาหิมะฮาป๋า 5,396 ม. สัมผัสวิถีชีวิตหมู่บ้านทิเบตดั้งเดิมใต้ร่มเงาขุนเขา",
    ratingDescEn: "Spectacular vantage point of 5,396m Haba Snow Peak & tranquil alpine Tibetan village life",
    coords: [27.3556, 100.1082],
    image: "assets/places/shangrila_08_haba_snow_mountain.jpg",
    tags: ["เขาหิมะฮาป๋า", "หมู่บ้านฮาป๋า", "จุดชมวิว", "Haba Snow Mountain"],
    shortBulletsTh: [
      "ยอดเขาหิมะฮาป๋าสูง 5,396 เมตร ตั้งตระหง่านประจันหน้ากับเขาหิมะมังกรหยก",
      "หมู่บ้านทิเบตและมุสลิมดั้งเดิมเงียบสงบ ชมทัศนียภาพขุนเขาและทุ่งดอกกุหลาบพันปี",
      "จุดแวะพักผ่อนยอดนิยมบนเส้นทางวงแหวนตะวันออก เสือกระโจน-ไป๋สุ่ยไถ"
    ],
    shortBulletsEn: [
      "Majestic 5,396m Haba Snow Mountain standing face-to-face with Jade Dragon Snow Mountain",
      "Serene multi-ethnic Tibetan and Hui village nestled in pristine alpine valley",
      "Prime rest stop along the Shangri-La Eastern Loop between Tiger Leaping Gorge & Baishuitai"
    ],
    openingHoursTh: "เปิดชมวิวตลอด 24 ชั่วโมง",
    openingHoursEn: "Open 24 hours (Village scenic decks always accessible)",
    bestTimeTh: "ช่วงเช้า 07:30 – 10:00 น. (ชมแสงอาทิตย์สีทองกระทบยอดเขาหิมะ) หรือ บ่าย 15:00 – 17:00 น.",
    bestTimeEn: "Morning 07:30 – 10:00 (Golden sunrise illumination) or Afternoon 15:00 – 17:00",
    ticketPriceTh: "ชมวิวฟรี (บริการโฮมสเตย์และร้านอาหารทิเบตราคามิตรภาพ)",
    ticketPriceEn: "Free viewing (Homestays and authentic Tibetan fare available)",
    transportTh: {
      fromStation: "ห่างจากสถานีเสือกระโจน 45 กม. รถยนต์ส่วนบุคคลหรือรถตู้ท้องถิ่นประมาณ 1 ชั่วโมง",
      fromOldTown: "จากแชงกรีล่า 120 กม. ตามเส้นทางวงแหวนตะวันออก (Eastern Tourist Loop)",
      inside: "มีจุดชมวิวริมถนนลาดยาง มีลานจอดรถและร้านน้ำชาชมวิวพาโนรามา"
    },
    transportEn: {
      fromStation: "45 km from Hutiaoxia HSR Station via paved scenic mountain pass (~1 hr)",
      fromOldTown: "120 km from Shangri-La via the Eastern Tourist Ring Road",
      inside: "Roadside panoramic decks equipped with parking lots and warm tea pavilions"
    },
    highlightsTh: [
      "มุมมองยอดเขาหิมะฮาป๋าที่ตระหง่านฟ้าแบบประชิดตาที่สุดแห่งหนึ่งในยูนนาน",
      "ทัศนียภาพหมู่บ้านบนเนินเขาเขียวขจี ลำธารน้ำแร่ใสไหลผ่าน และฝูงแพะภูเขา",
      "โฮมสเตย์ทิเบตที่ให้ประสบการณ์ลิ้มลองอาหารพื้นบ้าน เช่น หม้อไฟเนื้อจามรีและแป้งส่านจือ",
      "อากาศเย็นสบายสดชื่นตลอดทั้งปี ปลอดจากมลภาวะและความวุ่นวาย"
    ],
    highlightsEn: [
      "Up-close perspective of Haba's glacier-draped pyramid crest",
      "Terraced pastoral village scenery with cascading alpine streams and mountain goats",
      "Cozy Tibetan homestays serving authentic yak hotpot and freshly brewed barley tea",
      "Crisp, rejuvenating alpine air untouched by urban bustle"
    ],
    descriptionTh: "หมู่บ้านฮาป๋าและจุดชมวิวเขาหิมะฮาป๋า ดินแดนแห่งความสงบร่มเย็นใต้ร่มเงาของยอดเขาหิมะสูงเสียดฟ้า เป็นจุดพักใจบนเส้นทางท่องเที่ยวธรรมชาติที่เปิดโอกาสให้ผู้มาเยือนได้สัมผัสวิถีชีวิตชนบทที่ราบสูงอย่างแท้จริง",
    descriptionEn: "Haba Village and Viewpoint offer a serene alpine haven beneath the looming heights of Mount Haba, welcoming travelers with crisp mountain breezes, warm local hospitality, and pristine vistas."
  }
];


// Data for Lijiang Top 10 Attractions (Bilingual: Thai / English / Chinese)
// Calibrated directly on AMAP (GCJ-02 Datum) for 100% pinpoint accuracy.
const LIJIANG_ATTRACTIONS = [
  {
    id: 0,
    nameTh: "สถานีรถไฟความเร็วสูงลี่เจียง",
    nameZh: "丽江站 (高铁站)",
    pinyin: "Lìjiāng Zhàn",
    nameEn: "Lijiang Railway Station (HSR Hub)",
    category: "transit_hub",
    categoryLabelTh: "ศูนย์กลางรถไฟความเร็วสูง",
    categoryLabelEn: "High-Speed Rail Hub",
    categoryColor: "#dc2626",
    pastelBg: "#fef2f2",
    badgeColor: "#fecaca",
    doodleBorderColor: "#b91c1c",
    doodleIcon: "🚅",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ประตูหลักสู่ลี่เจียงและภูเขาหิมะมังกรหยก เชื่อมคุนหมิง ต้าหลี่ แชงกรีล่า สะอาดทันสมัย",
    ratingDescEn: "Gateway to Lijiang & Jade Dragon Snow Mountain: modern HSR hub connecting Dali & Shangri-La",
    coords: [26.8055, 100.2310],
    image: "assets/places/lijiang_00_station.jpg",
    tags: ["รถไฟความเร็วสูง", "สถานีลี่เจียง", "จุดต่อรถ", "High-Speed Rail", "Lijiang Station"],
    shortBulletsTh: [
      "ศูนย์กลางรถไฟความเร็วสูงเชื่อมต่อคุนหมิง ต้าหลี่ และแชงกรีล่า",
      "มีรถเมล์สาย 16 และ 18 วิ่งตรงสู่เมืองโบราณต้าเหยียน (2 หยวน)",
      "จุดเรียกรถ DiDi และแท็กซี่มิเตอร์เป็นระเบียบ เดินทางเข้าเมืองเก่าเพียง 20 นาที"
    ],
    shortBulletsEn: [
      "Key western Yunnan HSR hub linking Kunming, Dali, and Shangri-La",
      "Direct City Bus No. 16 & 18 to Dayan Ancient Town (2 RMB, 35 min)",
      "Dedicated DiDi pickup lane; only 20 min ride to Lijiang Old Town South Gate"
    ],
    openingHoursTh: "เปิดทุกวัน 06:00 - 23:00 น. (ตามตารางเดินรถไฟ)",
    openingHoursEn: "Daily 06:00 - 23:00 (Follows train schedules)",
    bestTimeTh: "เดินทางช่วงเช้า 08:30 - 10:30 น. เพื่อเข้าเช็คอินที่พักและเที่ยวเมืองเก่าช่วงบ่าย",
    bestTimeEn: "Morning arrival 08:30 - 10:30 for early hotel drop-off and afternoon exploration",
    ticketPriceTh: "รถไฟความเร็วสูง ต้าหลี่-ลี่เจียง ชั้นสองประมาณ 34-45 หยวน (1.5 ชม.)",
    ticketPriceEn: "Dali - Lijiang bullet train 2nd class approx 34-45 RMB (1.5h)",
    transportTh: {
      fromStation: "ศูนย์กลางการเดินทางหลักในเขตอำเภออวี้หลง ชานเมืองลี่เจียง",
      fromAirport: "ห่างจากสนามบินลี่เจียงซานอี้ (LJG) 26 กม. รถแอร์พอร์ตบัส 20 หยวน หรือ DiDi 60-70 หยวน",
      inside: "มีบันไดเลื่อน ลิฟต์ ห้องรับรองผู้โดยสาร ป้ายภาษาอังกฤษชัดเจน และจุดฝากกระเป๋า"
    },
    transportEn: {
      fromStation: "Primary transport hub located in Yulong County, south of Lijiang center",
      fromAirport: "26 km from Lijiang Sanyi Airport (LJG). Airport shuttle 20 RMB or DiDi 60-70 RMB",
      inside: "Modern facilities: escalators, elevators, English signs, and luggage storage"
    },
    highlightsTh: [
      "ทางรถไฟความเร็วสูงเชื่อมต้าหลี่-ลี่เจียง-แชงกรีล่า เส้นทางรถไฟที่สวยที่สุดแห่งหนึ่งของจีน",
      "มองเห็นวิวเทือกเขาหิมะมังกรหยกทอดยาวเป็นฉากหลังตั้งแต่ก้าวออกจากขบวนรถไฟ",
      "มีรถบัสตรงเข้าเมืองโบราณลี่เจียง (ต้าเหยียน) และรถตู้บริการนำเที่ยวรอบเมือง",
      "ห้องโถงกว้างขวาง ปลอดภัย สะดวกสบาย ตรวจสัมภาระรวดเร็วด้วยระบบสแกนพาสปอร์ต"
    ],
    highlightsEn: [
      "Crucial stop along the world-famous Dali - Lijiang - Shangri-La highland railway",
      "Breathtaking snow-draped Jade Dragon Mountain panoramic vista right from station square",
      "Direct transit links to Dayan Old Town South Gate and tourist shuttle depots",
      "Spacious, clean waiting halls with high-speed automated passport gates"
    ],
    descriptionTh: "สถานีรถไฟความเร็วสูงลี่เจียง ชุมทางคมนาคมระดับโลกที่เปิดประตูต้อนรับนักเดินทางจากทั่วทุกมุมโลกสู่นครโบราณมรดกโลกและขุนเขาหิมะศักดิ์สิทธิ์ ด้วยการเดินทางที่สะดวกรวดเร็วและตรงเวลา",
    descriptionEn: "Lijiang Railway Station serves as the modern gateway welcoming slow-travelers to Yunnan's UNESCO World Heritage old town and the sacred Jade Dragon snow peaks."
  },
  {
    id: 1,
    nameTh: "เมืองโบราณลี่เจียง (ต้าเหยียน)",
    nameZh: "丽江古城 (大研古镇)",
    pinyin: "Lìjiāng Gǔchéng (Dàyán Gǔzhèn)",
    nameEn: "Lijiang Ancient Town (Dayan Old Town)",
    category: "ancient_town",
    categoryLabelTh: "เมืองโบราณมรดกโลก",
    categoryLabelEn: "UNESCO Ancient Town",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🏯",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "มรดกโลก UNESCO กังหันน้ำยักษ์ ลำธารใส และโคมแดงระยิบระยับยามค่ำคืน",
    ratingDescEn: "UNESCO World Heritage: ancient waterwheels, stone canals, cobblestones & cozy night lanterns",
    coords: [26.8720, 100.2380],
    image: "assets/places/lijiang_01_old_town.jpg",
    tags: ["เมืองโบราณลี่เจียง", "ต้าเหยียน", "มรดกโลก", "Dayan", "UNESCO Heritage"],
    shortBulletsTh: [
      "มรดกโลกทางวัฒนธรรม UNESCO เมืองโบราณไร้กำแพงอายุกว่า 800 ปี",
      "กังหันน้ำคู่ยักษ์ (Big Waterwheels) และสะพานต้าสือเฉียว (Dashi Bridge)",
      "สายน้ำใสไหลผ่านหน้าบ้านเรือนไม้สไตล์ชนชาติน่าซี ค่ำคืนโรแมนติกมาก"
    ],
    shortBulletsEn: [
      "UNESCO World Heritage site: 800-year-old wall-less ancient canal town",
      "Iconic giant twin waterwheels, Sifang Square & historic Dashi Bridge",
      "Crystal highland spring streams flowing beside Naxi timber architectures"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง (ร้านค้า & คาเฟ่เปิด 09:00 - 23:30 น.)",
    openingHoursEn: "Open 24/7 (Shops & cafes typically open 09:00 - 23:30)",
    bestTimeTh: "ช่วงเช้า 07:00 - 09:00 น. (คนน้อย ถ่ายรูปสวยสงบ) และยามค่ำ 19:30 - 22:00 น. (แสงโคมแดงสะท้อนน้ำ)",
    bestTimeEn: "Early morning 07:00 - 09:00 (peaceful & crowd-free) and evening 19:30 - 22:00 (glowing red lanterns)",
    ticketPriceTh: "ค่าบำรุงรักษาเมืองโบราณ 50 หยวน (ตรวจเป็นจุดๆ ในสถานที่สำคัญ เช่น คฤหาสน์มู่)",
    ticketPriceEn: "Ancient Town Protection Fee 50 RMB (inspected at key landmarks like Mu Palace)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟลี่เจียง 9 กม. นั่ง DiDi 20-25 หยวน หรือรถเมล์สาย 16/18 ลงป้าย Nanmen (ประตูทิศใต้)",
      fromAirport: "ห่างจากสนามบิน 28 กม. นั่งแอร์พอร์ตบัส 20 หยวนลง Lanxue Square หรือ DiDi 60-70 หยวน",
      fromOldTown: "ศูนย์กลางของเมือง เดินเท้าสำรวจตรอกซอยหินกรวด",
      inside: "ถนนปูด้วยหินกรวดโบราณ (Five-Flower Stone) แนะนำใส่รองเท้าผ้าใบเดินสบาย และพักใกล้ประตูเมืองเพื่อสะดวกต่อการลากกระเป๋า"
    },
    transportEn: {
      fromStation: "9 km from Lijiang Station. DiDi approx 20-25 RMB or Bus No. 16/18 to South Gate",
      fromAirport: "28 km from airport. Airport shuttle bus 20 RMB or DiDi 60-70 RMB",
      fromOldTown: "Epicenter of Lijiang; exploration is 100% walking on cobblestone lanes",
      inside: "Historic uneven cobblestones: wear comfortable sneakers and stay near gates to avoid dragging luggage"
    },
    highlightsTh: [
      "จัตุรัสซื่อฟางเจีย (Sifang Street) ชุมทางค้าขายโบราณบนเส้นทางคาราวานชาม้า",
      "กังหันน้ำโบราณคู่และกำแพงแผ่นไม้ขอพรตงปา (Dongba Wishing Bells)",
      "สะพานหินต้าสือเฉียว จุดถ่ายภาพยอดฮิตที่มองเห็นเงาสะท้อนของยอดเขาหิมะและแสงโคมไฟ",
      "บรรยากาศดนตรีสดและคาเฟ่ริมลำธารที่น้ำใสจนมองเห็นฝูงปลาแหวกว่าย"
    ],
    highlightsEn: [
      "Historic Sifang Square: ancient commercial hub of the Tea Horse Road",
      "Giant landmark waterwheels and the famous wall of wooden Dongba wishing bells",
      "Dashi Stone Bridge offering reflective water views of mountain slopes and lantern lights",
      "Vibrant acoustic folk music lounges and teahouses perched beside crystal-clear canals"
    ],
    descriptionTh: "เมืองโบราณลี่เจียง หรือต้าเหยียน เมืองโบราณมรดกโลกที่ไม่มีกำแพงเมืองล้อมรอบ โดดเด่นด้วยระบบคลองระบายน้ำอัจฉริยะที่หล่อเลี้ยงบ้านเรือนไม้โบราณของชนชาติน่าซี เป็นหัวใจแห่งมนต์เสน่ห์ยูนนานที่ไม่ควรพลาด",
    descriptionEn: "Lijiang Ancient Town (Dayan), an intact UNESCO World Heritage jewel, enchants visitors with its labyrinth of cobblestone streets, flowing mountain waterways, and rich Naxi folk traditions."
  },
  {
    id: 2,
    nameTh: "เมืองโบราณซู่เหอ",
    nameZh: "束河古镇",
    pinyin: "Shùhé Gǔzhèn",
    nameEn: "Shuhe Ancient Town",
    category: "ancient_town",
    categoryLabelTh: "เมืองโบราณคาราวานม้า",
    categoryLabelEn: "Ancient Tea Horse Town",
    categoryColor: "#ea580c",
    pastelBg: "#ffedd5",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🐴",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "จุดพักคาราวานม้าโบราณที่เงียบสงบ สโลว์ไลฟ์แท้จริง ลำธารใส และสะพานชิงหลง",
    ratingDescEn: "Tranquil Tea Horse Road retreat: ancient stone bridge, willow-shaded springs & laid-back vibe",
    coords: [26.9200, 100.2050],
    image: "assets/places/lijiang_02_shuhe.jpg",
    tags: ["เมืองโบราณซู่เหอ", "ซู่เหอ", "คาราวานชาม้า", "Shuhe", "Tea Horse Road"],
    shortBulletsTh: [
      "เมืองโบราณต้นกำเนิดกองคาราวานชาม้า บรรยากาศเงียบสงบกว่าต้าเหยียน",
      "สระน้ำมังกรเก้าเศียร (จิ่วติ่งหลงถาน) น้ำใสราวกระจกมรกต",
      "สะพานหินชิงหลงเฉียว (Qinglong Bridge) อายุ 400 ปี รอยเกือกม้าประวัติศาสตร์"
    ],
    shortBulletsEn: [
      "Original cradle of Tea Horse Road merchants, significantly quieter than Dayan",
      "Jiuding Longtan (Nine Dragon Pool) crystal jade alpine spring water",
      "400-year-old Qinglong Stone Bridge with historic horse hoof depressions"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง (ร้านค้า & คาเฟ่เปิด 09:30 - 22:30 น.)",
    openingHoursEn: "Open 24/7 (Stores & teahouses open 09:30 - 22:30)",
    bestTimeTh: "ช่วงบ่าย 14:00 - 17:30 น. จิบชาผู่เอ๋อร์ริมธารน้ำ และยามอาทิตย์อัสดง",
    bestTimeEn: "Afternoon 14:00 - 17:30 for streamside Pu'er tea sipping and golden hour strolls",
    ticketPriceTh: "เข้าชมฟรี (เดิมมีค่าบำรุง แต่ปัจจุบันเปิดให้เข้าชมได้ฟรีตลอดวัน)",
    ticketPriceEn: "Free admission (Currently open to public without entrance fee)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟลี่เจียง 16 กม. นั่ง DiDi ประมาณ 30-35 หยวน",
      fromAirport: "ห่างจากสนามบิน 35 กม. DiDi ประมาณ 75-85 หยวน",
      fromOldTown: "ห่างจากเมืองโบราณต้าเหยียนขึ้นไปทางเหนือ 6 กม. นั่ง DiDi เพียง 12-15 หยวน (15 นาที)",
      inside: "เดินเท้าสบายๆ ตรอกซอยกว้างขวาง ร่มรื่นด้วยต้นหลิวและต้นสน"
    },
    transportEn: {
      fromStation: "16 km from Lijiang Station. DiDi approx 30-35 RMB (30 min)",
      fromAirport: "35 km from airport. DiDi approx 75-85 RMB",
      fromOldTown: "6 km north of Dayan Old Town; quick DiDi ride 12-15 RMB (15 min)",
      inside: "Pleasant pedestrian walking along willow-lined canals and spacious cobbled paths"
    },
    highlightsTh: [
      "สะพานหินชิงหลงเฉียว (สะพานมังกรเขียว) จุดถ่ายรูปยอดนิยมที่มีรอยสึกจากเกือกม้าคาราวานนับร้อยปี",
      "สระจิ่วติ่งหลงถาน (Jiuding Longtan) ตาน้ำผุดบริสุทธิ์จากหิมะมังกรหยกที่มีสาหร่ายน้ำพริ้วไหวสวยงาม",
      "พิพิธภัณฑ์วัฒนธรรมคาราวานชาม้า (Tea Horse Road Museum) เล่าเรื่องราวการค้าใบชาสู่ทิเบตและอินเดีย",
      "คาเฟ่สไตล์สโลว์ไลฟ์และร้านคราฟต์เวิร์กช็อปเครื่องหนังและผ้าทอน่าซี"
    ],
    highlightsEn: [
      "Historic Qinglong Stone Bridge showing centuries-old indentations from caravan horseshoes",
      "Jiuding Longtan Spring: pristine emerald waters bubbling directly from snow runoff",
      "Tea Horse Road Museum detailing ancient high-altitude trade journeys to Tibet & India",
      "Cozy open-air teahouses, artisanal leather crafting workshops, and handmade Naxi textiles"
    ],
    descriptionTh: "เมืองโบราณซู่เหอ ดินแดนแห่งความสงบงามที่ซ่อนตัวอยู่ทางตอนเหนือของลี่เจียง อดีตศูนย์รวมพ่อค้าม้าและช่างฝีมือ ปัจจุบันกลายเป็นสวรรค์ของผู้ที่รักการเดินทางแบบสโลว์ไลฟ์ จิบชา ฟังเสียงสายน้ำ และพักผ่อนอย่างแท้จริง",
    descriptionEn: "Shuhe Ancient Town, an authentic sanctuary nestled at the foot of Jade Dragon Snow Mountain, preserves the quiet dignity and rustic romance of ancient caravans away from city crowds."
  },
  {
    id: 3,
    nameTh: "เมืองโบราณไป๋ซา & จิตรกรรมฝาผนัง",
    nameZh: "白沙古镇 (白沙壁画)",
    pinyin: "Báishā Gǔzhèn (Báishā Bìhuà)",
    nameEn: "Baisha Ancient Town & Murals",
    category: "ancient_town",
    categoryLabelTh: "หมู่บ้านดั้งเดิม & ภาพฝาผนัง",
    categoryLabelEn: "Heritage Village & Murals",
    categoryColor: "#059669",
    pastelBg: "#d1fae5",
    badgeColor: "#a7f3d0",
    doodleBorderColor: "#047857",
    doodleIcon: "🎨",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "เมืองหลวงดั้งเดิมของชนชาติน่าซี คาเฟ่ดาดฟ้าชมวิวเขาหิมะมังกรหยก และภาพเขียนฝาผนังโบราณ",
    ratingDescEn: "Ancient Naxi capital: rooftop cafes framing snow peaks, slow village life & historic murals",
    coords: [26.9550, 100.2150],
    image: "assets/places/lijiang_03_baisha.jpg",
    tags: ["เมืองโบราณไป๋ซา", "ไป๋ซา", "จิตรกรรมฝาผนัง", "Baisha", "Murals"],
    shortBulletsTh: [
      "เมืองหลวงแห่งแรกของชาวน่าซี บรรยากาศชนบทดั้งเดิมและเรียบง่ายที่สุด",
      "จุดเช็คอินยอดฮิต: นั่งจิบกาแฟบนดาดฟ้า มองเห็นยอดเขาหิมะมังกรหยกชัดเจน",
      "จิตรกรรมฝาผนังไป๋ซา อายุกว่า 500 ปี ผสานพุทธ เต๋า ทิเบต และตงปา"
    ],
    shortBulletsEn: [
      "First political capital of the Naxi people, preserving rustic village authenticity",
      "Trending rooftop cafes offering iconic unobstructed views of Jade Dragon Snow Mountain",
      "500-year-old Baisha Murals blending Tibetan Buddhism, Daoism, and Dongba spirituality"
    ],
    openingHoursTh: "เมืองโบราณเปิดตลอดวัน (เขตจิตรกรรมฝาผนังเปิด 08:30 - 17:30 น.)",
    openingHoursEn: "Town open 24/7 (Murals Exhibition Hall open 08:30 - 17:30)",
    bestTimeTh: "ช่วงเช้า 09:00 - 11:30 น. และบ่ายแก่ๆ 15:30 - 18:00 น. แสงแดดส่องหน้าผาเขาหิมะงดงามที่สุด",
    bestTimeEn: "Morning 09:00 - 11:30 & late afternoon 15:30 - 18:00 when sunlight illuminates snow peaks",
    ticketPriceTh: "เข้าชมตัวเมืองโบราณฟรี (เข้าชมจิตรกรรมฝาผนังไป๋ซา 30 หยวน)",
    ticketPriceEn: "Free town entry (Baisha Murals museum ticket 30 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟลี่เจียง 20 กม. DiDi ประมาณ 40 หยวน",
      fromAirport: "ห่างจากสนามบิน 40 กม. DiDi ประมาณ 90 หยวน",
      fromOldTown: "ห่างจากต้าเหยียน 11 กม. นั่ง DiDi เพียง 20-25 หยวน (20 นาที) หรือรถเมล์สาย 6",
      inside: "หมู่บ้านขนาดกะทัดรัด เดินเล่นสบาย มีคุณตาคุณยายชาวน่าซีนั่งเย็บปักผ้าและขายผลไม้พื้นเมือง"
    },
    transportEn: {
      fromStation: "20 km from Lijiang Station. DiDi approx 40 RMB (35 min)",
      fromAirport: "40 km from airport. DiDi approx 90 RMB",
      fromOldTown: "11 km north of Dayan Old Town; DiDi 20-25 RMB (20 min) or City Bus No. 6",
      inside: "Compact rustic village; leisurely walking amongst local elders spinning thread and selling sweet fruits"
    },
    highlightsTh: [
      "คาเฟ่ดาดฟ้าวิวหลักล้าน เช่น 7 Sea Cafe ถ่ายรูปแก้วกาแฟคู่ยอดเขาหิมะมังกรหยกได้อย่างลงตัว",
      "จิตรกรรมฝาผนังไป๋ซา ณ วัดต้าเป่าจี (Dabaoji Palace) ผลงานศิลปะชิ้นเอกยุคราชวงศ์หมิง",
      "สถาบันปักผ้าไหมซวงซือ (Baisha Naxi Embroidery Institute) ชมนักปักผ้าลวดลายวิจิตรระดับชาติ",
      "คลินิกสมุนไพรจีนของหมอเหอ (Dr. Ho's Herbal Clinic) ผู้มีชื่อเสียงโด่งดังไปทั่วโลก"
    ],
    highlightsEn: [
      "Trending rooftop cafes (e.g. 7 Sea Cafe) framing artisan coffee against the snowy mountain backdrop",
      "Ming-Dynasty Dabaoji Palace murals depicting harmonious coexistence of major eastern religions",
      "Baisha Naxi Silk Embroidery Institute showcasing master artisans weaving hand-spun silk tapestries",
      "Legendary Dr. Ho's Chinese Herbal Clinic, famous worldwide for traditional highland botanical medicine"
    ],
    descriptionTh: "เมืองโบราณไป๋ซา อดีตศูนย์กลางอำนาจของตระกูลมู่ก่อนย้ายไปต้าเหยียน ที่นี่คงความเงียบสงบและเรียบง่ายแบบชนบทดั้งเดิม เป็นจุดชมวิวภูเขาหิมะมังกรหยกที่สวยและโรแมนติกที่สุดแห่งหนึ่งในลี่เจียง",
    descriptionEn: "Baisha Ancient Town, the primitive cradle of Naxi civilization, retains timeless serenity with clay-tiled rooftops, mountain-view coffee terraces, and priceless historic murals."
  },
  {
    id: 4,
    nameTh: "ภูเขาหิมะมังกรหยก & กลาเซียร์ปาร์ค",
    nameZh: "玉龙雪山 · 冰川公园",
    pinyin: "Yùlóng Xuěshān (Bīngchuān Gōngyuán)",
    nameEn: "Jade Dragon Snow Mountain & Glacier Park",
    category: "mountain_nature",
    categoryLabelTh: "ยอดเขาหิมะศักดิ์สิทธิ์ 4,680 ม.",
    categoryLabelEn: "Sacred Snow Peak 4,680m",
    categoryColor: "#0284c7",
    pastelBg: "#e0f2fe",
    badgeColor: "#bae6fd",
    doodleBorderColor: "#0369a1",
    doodleIcon: "🏔️",
    rating: 5.0,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ยอดเขาศักดิ์สิทธิ์ กระเช้าใหญ่ขึ้นสู่ความสูง 4,506 ม. และเดินแตะขอบฟ้า 4,680 ม.",
    ratingDescEn: "Sacred snow mountain: grand cableway to 4,506m and wooden boardwalk climb to 4,680m summit",
    coords: [27.1050, 100.1980],
    image: "assets/places/lijiang_04_yulong_snow_mountain.jpg",
    tags: ["ภูเขาหิมะมังกรหยก", "กลาเซียร์ปาร์ค", "4680เมตร", "Jade Dragon", "Glacier Park"],
    shortBulletsTh: [
      "เทือกเขาหิมะ 13 ยอดทอดยาวดุจมังกรหยกเลื้อย ความสูงยอดสูงสุด 5,596 ม.",
      "กระเช้าใหญ่ลอยฟ้า (Grand Cableway) สู่กลาเซียร์ปาร์คที่ความสูง 4,506 เมตร",
      "เดินตามสะพานไม้แตะหลักหมุดความสูง 4,680 เมตร ท่ามกลางธารน้ำแข็งพันปี"
    ],
    shortBulletsEn: [
      "13 continuous snow peaks resembling a silver-jade dragon; highest crest at 5,596m",
      "Grand Cableway whisking passengers to Glacier Park at 4,506 meters above sea level",
      "Wooden skyway stairway leading up to the iconic 4,680-meter milestone marker"
    ],
    openingHoursTh: "เปิดทุกวัน 07:00 - 18:00 น. (กระเช้ารอบสุดท้ายขึ้นประมาณ 15:30 น.)",
    openingHoursEn: "Daily 07:00 - 18:00 (Last cable car ascending ~15:30)",
    bestTimeTh: "ช่วงเช้าตรู่ 07:30 - 10:00 น. ท้องฟ้าเปิดแจ่มใส ลมสงบ และมองเห็นธารน้ำแข็งชัดเจน",
    bestTimeEn: "Early morning 07:30 - 10:00 for clearest blue skies, calmer winds, and pristine glacier views",
    ticketPriceTh: "บัตรเข้าอุทยาน 100 หยวน + กระเช้าใหญ่กลาเซียร์ปาร์คพร้อมรถชัตเติล 140 หยวน (รวม ~240 หยวน)",
    ticketPriceEn: "Mountain park entrance 100 RMB + Grand Cableway & eco-bus 140 RMB (Total ~240 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟ 40 กม. แนะนำต่อรถจากตัวเมืองหรือเหมารถ",
      fromAirport: "ห่างจากสนามบินลี่เจียง 60 กม. ใช้เวลาเดินทางประมาณ 1.5 ชม.",
      fromOldTown: "ห่างจากเมืองโบราณต้าเหยียน 30 กม. ขึ้นรถบัสนำเที่ยวสาย 101 ที่หน้าประตูเมือง (15 หยวน) หรือ DiDi/เหมารถ 80-100 หยวน",
      inside: "จากสถานีบริการนักท่องเที่ยว ขึ้นรถชัตเติลบัสอุทยานไปยังสถานีกระเช้าใหญ่ ต้องจองคิวรอบกระเช้าล่วงหน้าผ่านมินิแอป"
    },
    transportEn: {
      fromStation: "40 km from Lijiang Railway Station; best accessed via town transfers or chartered car",
      fromAirport: "60 km from airport; approx 1.5 hours drive",
      fromOldTown: "30 km north of Dayan Old Town; Snow Mountain Tourist Bus No. 101 (15 RMB) or DiDi ~80-100 RMB",
      inside: "Transfer via eco-shuttle from Visitor Center to cableway lower station. Advance real-name booking required"
    },
    highlightsTh: [
      "จุดชมวิวธารน้ำแข็งหมายเลข 1 (Glacier No. 1) ธารน้ำแข็งยุคควอเทอร์นารีอายุนับล้านปี",
      "ป้ายสลักหิน '4680米' จุดเช็คอินแห่งความภาคภูมิใจที่ต้องถ่ายรูปเก็บไว้เป็นที่ระลึก",
      "ทัศนียภาพทะเลหมอกและยอดเขาหิมะขาวบริสุทธิ์ตัดกับท้องฟ้าสีครามลี่เจียง",
      "ระบบรักษาความปลอดภัยยอดเยี่ยม มีจุดพัก ห้องอุ่นร่างกาย และเจ้าหน้าที่บริการออกซิเจนตลอดทาง"
    ],
    highlightsEn: [
      "Glacier No. 1: million-year-old Quaternary hanging glacier clinging to steep rock walls",
      "Celebrated '4680m' stone pillar: the ultimate high-altitude snapshot achievement",
      "Dramatic sea of clouds churning below jagged snow ridges under deep plateau azure skies",
      "Top-tier alpine safety amenities: heated rest cabins and oxygen supply stations along stairs"
    ],
    descriptionTh: "ภูเขาหิมะมังกรหยก ยอดเขาศักดิ์สิทธิ์ประจำชนชาติน่าซีที่มียอดหิมะปกคลุมตลอดทั้งปี ความมหัศจรรย์ทางธรรมชาติที่เปิดโอกาสให้นักเดินทางขึ้นไปสัมผัสความยิ่งใหญ่ของธารน้ำแข็งบนความสูงเฉียด 4,700 เมตรได้อย่างปลอดภัย",
    descriptionEn: "Jade Dragon Snow Mountain stands as the spiritual sanctuary of the Naxi people. Its glacier park offers an unforgettable, world-class opportunity to touch pristine highland ice at 4,680 meters."
  },
  {
    id: 5,
    nameTh: "หุบเขาพระจันทร์สีน้ำเงิน (แม่น้ำไป๋สุ่ยเหอ)",
    nameZh: "蓝月谷 (白水河)",
    pinyin: "Lányuè Gǔ (Báishuǐ Hé)",
    nameEn: "Blue Moon Valley (Baishui River)",
    category: "nature_lake",
    categoryLabelTh: "หุบเขาธารน้ำสีเทอร์ควอยซ์",
    categoryLabelEn: "Turquoise Alpine Valley",
    categoryColor: "#0891b2",
    pastelBg: "#cffafe",
    badgeColor: "#a5f3fc",
    doodleBorderColor: "#0e7490",
    doodleIcon: "🌊",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ธารน้ำแร่สีมรกตและฟ้าเทอร์ควอยซ์ 4 บึงขั้นบันไดหินปูน วิวเขาหิมะสะท้อนน้ำสะกดสายตา",
    ratingDescEn: "Turquoise & emerald glacial pools nestled under Jade Dragon Snow Mountain; sheer fairytale beauty",
    coords: [27.1350, 100.2350],
    image: "assets/places/lijiang_05_blue_moon_valley.jpg",
    tags: ["หุบเขาพระจันทร์สีน้ำเงิน", "บลูมูนวัลเลย์", "ไป๋สุ่ยเหอ", "Blue Moon Valley", "Baishui River"],
    shortBulletsTh: [
      "ธารน้ำแร่ละลายจากหิมะมังกรหยก สีฟ้าเทอร์ควอยซ์เปลี่ยนตามแสงแดด",
      "บึงน้ำใส 4 ชั้น: บึงอวี้เย่ว์ จิ้งถัน หลานเย่ว์ และทิงเทา",
      "มีสะพานไม้และขั้นบันไดหินปูนสีขาวสะท้อนเงายอดเขาหิมะอย่างงดงาม"
    ],
    shortBulletsEn: [
      "Meltwater mineral stream glowing brilliant turquoise, shifting hues with sunlight",
      "4 stepped terraces: Yuye Lake, Jingtan Lake, Lanyue Lake, and Tingtao Lake",
      "White limestone terrace cascades mirroring the sharp snow peaks in glassy reflections"
    ],
    openingHoursTh: "เปิดทุกวัน 08:00 - 17:30 น. (อยู่ภายในเขตอุทยานภูเขาหิมะมังกรหยก)",
    openingHoursEn: "Daily 08:00 - 17:30 (Located inside Jade Dragon Mountain Scenic Area)",
    bestTimeTh: "ช่วงเที่ยงถึงบ่าย 11:30 - 15:00 น. แสงแดดส่องตรงลงน้ำ ทำให้น้ำเปล่งประกายสีฟ้าเขียวมรกตสดใสที่สุด",
    bestTimeEn: "Midday 11:30 - 15:00 when overhead sunshine reflects vivid mineral turquoise colors",
    ticketPriceTh: "รวมอยู่ในบัตรเข้าอุทยานภูเขาหิมะมังกรหยกแล้ว (มีรถกอล์ฟเสริม 50 หยวน หรือเดินเท้าชมฟรี)",
    ticketPriceEn: "Included in Jade Dragon Mountain general admission (Optional sightseeing golf cart 50 RMB or walk free)",
    transportTh: {
      fromStation: "อยู่ในเขตอุทยานภูเขาหิมะมังกรหยก",
      fromAirport: "เดินทางผ่านตัวเมืองลี่เจียงเข้าสู่อุทยาน",
      fromOldTown: "นั่งรถชัตเติลบัสของอุทยานต่อจากสถานีกระเช้า หรือจากศูนย์บริการนักท่องเที่ยวกานไห่จื่อ (Ganhaizi)",
      inside: "มีทางเดินไม้ริมธารน้ำร่มรื่น เดินสบายมาก แนะนำเดินเท้าจากบึงบนลงบึงล่างเพื่อซึมซับความงามแบบสโลว์ไลฟ์"
    },
    transportEn: {
      fromStation: "Situated inside Jade Dragon Snow Mountain Scenic Area",
      fromAirport: "Accessed via central Lijiang into the northern mountain park",
      fromOldTown: "Park eco-shuttle bus directly connects cable car stations to Blue Moon Valley stops",
      inside: "Paved wooden boardwalk hugging lake shores; leisurely downhill walk is highly recommended over carts"
    },
    highlightsTh: [
      "บึงน้ำอวี้เย่ว์หู (Yuye Lake) บึงน้ำใสที่มองเห็นเงายอดเขาหิมะมังกรหยกสะท้อนในน้ำคมชัดดั่งกระจกเงา",
      "น้ำตกหินปูนขั้นบันไดสีขาวคล้ายปามุกคาเลจำลอง น้ำไหลเป็นม่านใสระยิบระยับ",
      "จุดถ่ายรูปคู่กับจามรีขาวริมธารน้ำ (มีค่าบริการถ่ายรูปกับจามรีประมาณ 20-30 หยวน)",
      "อากาศบริสุทธิ์เย็นสบาย เสียงน้ำไหลขับกล่อมท่ามกลางป่าสนอัลไพน์"
    ],
    highlightsEn: [
      "Yuye Lake: glass-like turquoise surface reflecting the pristine jagged peaks with surreal clarity",
      "Stepped white travertine cascades creating ethereal curtains of glistening glacial meltwater",
      "Photo opportunities with gentle white yaks wading along the pebble shallows (small fee ~20-30 RMB)",
      "Invigorating pine-scented highland breezes and peaceful alpine river acoustics"
    ],
    descriptionTh: "หุบเขาพระจันทร์สีน้ำเงิน หรือธารน้ำไป๋สุ่ยเหอ ดั่งอัญมณีสีเทอร์ควอยซ์ที่ซ่อนตัวอยู่ใต้หุบเขาหิมะมังกรหยก แร่ธาตุในหินปูนและน้ำแร่จากธารน้ำแข็งรังสรรค์เฉดสีฟ้าครามอันน่าอัศจรรย์ใจดุจแดนสวรรค์ในเทพนิยาย",
    descriptionEn: "Blue Moon Valley, glistening like a polished turquoise sapphire beneath the snowy cliffs, bewitches travelers with its multi-tiered mineral pools and surreal fairytale waterscapes."
  },
  {
    id: 6,
    nameTh: "สระน้ำมังกรดำ (สวนเฮยหลงถาน)",
    nameZh: "黑龙潭公园 (玉泉公园)",
    pinyin: "Hēilóngtán Gōngyuán (Yùquán Gōngyuán)",
    nameEn: "Black Dragon Pool Park (Heilongtan)",
    category: "nature_lake",
    categoryLabelTh: "สระมังกรดำ & เงาสะท้อนเขาหิมะ",
    categoryLabelEn: "Black Dragon Pool & Reflection",
    categoryColor: "#0d9488",
    pastelBg: "#ccfbf1",
    badgeColor: "#99f6e4",
    doodleBorderColor: "#0f766e",
    doodleIcon: "🪷",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "มุมโปสการ์ดระดับโลก สะพาน 5 ช่อง ศาลาเต๋อยั่วโหลว และเงาสะท้อนยอดเขาหิมะมังกรหยก",
    ratingDescEn: "World-famous postcard view: 5-arch marble bridge, ancient pavilion & Jade Dragon snow reflection",
    coords: [26.8870, 100.2320],
    image: "assets/places/lijiang_06_black_dragon_pool.jpg",
    tags: ["สระน้ำมังกรดำ", "เฮยหลงถาน", "เงาสะท้อนเขาหิมะ", "Black Dragon Pool", "Heilongtan"],
    shortBulletsTh: [
      "มุมถ่ายภาพคลาสสิกของลี่เจียงที่ตีพิมพ์ลงนิตยสารท่องเที่ยวระดับโลก",
      "สะพานหิน 5 ช่องซูฉุ่ยเฉียว และศาลากลางน้ำเต๋อยั่วโหลว (Deyue Tower)",
      "เดินจากประตูทิศเหนือของเมืองโบราณต้าเหยียนเพียง 10-15 นาที"
    ],
    shortBulletsEn: [
      "World-renowned classic photography spot featured on countless magazine covers",
      "Five-hole Suocui Marble Bridge and the exquisite Moon-Embracing Pavilion (Deyue Lou)",
      "Convenient 10-15 minute peaceful walk north of Dayan Ancient Town waterwheel"
    ],
    openingHoursTh: "เปิดทุกวัน 07:00 - 19:30 น.",
    openingHoursEn: "Daily 07:00 - 19:30",
    bestTimeTh: "ช่วงเช้า 07:30 - 09:30 น. (ผิวน้ำนิ่งสงบ ไร้ระลอกคลื่น สะท้อนเงายอดเขาหิมะชัดเจนที่สุด)",
    bestTimeEn: "Morning 07:30 - 09:30 for glass-calm waters reflecting the snow mountain before winds pick up",
    ticketPriceTh: "เข้าชมฟรี (แสดงหลักฐานบัตรบำรุงรักษาเมืองเก่าลี่เจียง 50 หยวน หรือบางช่วงเข้าฟรี)",
    ticketPriceEn: "Free admission (Town Protection Fee receipt of 50 RMB may be requested at main gate)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟลี่เจียง 11 กม. นั่ง DiDi 25 หยวน",
      fromAirport: "ห่างจากสนามบิน 30 กม. DiDi ประมาณ 70 หยวน",
      fromOldTown: "เดินเท้าเลียบตามลำธารน้ำขึ้นไปทางเหนือจากกังหันน้ำยักษ์เมืองเก่าเพียง 1.2 กม. (15 นาที)",
      inside: "สวนสาธารณะร่มรื่นด้วยต้นไม้โบราณ มีทางเดินรอบสระน้ำ บรรยากาศสงบและผ่อนคลาย"
    },
    transportEn: {
      fromStation: "11 km from Lijiang Railway Station; DiDi approx 25 RMB",
      fromAirport: "30 km from airport; DiDi ~70 RMB",
      fromOldTown: "Pleasant 1.2 km riverside stroll north of the Dayan Old Town waterwheels (15 min)",
      inside: "Serene parkland shaded by ancient weeping willows and pines; wide walking circuits around the pool"
    },
    highlightsTh: [
      "มุมถ่ายภาพสะพานซูฉุ่ยเฉียว (Suocui Bridge) พาดข้ามสระน้ำโดยมียอดเขาหิมะมังกรหยกตั้งตระหง่านอยู่เบื้องหลัง",
      "สถาบันวิจัยวัฒนธรรมตงปา (Dongba Cultural Research Institute) แหล่งเรียนรู้อักษรภาพโบราณของชาวน่าซี",
      "ตาน้ำพุหยก (Yuquan Spring) น้ำผุดธรรมชาติใต้ดินใสบริสุทธิ์ที่หล่อเลี้ยงคลองทั่วเมืองลี่เจียง",
      "ศาลาเต๋อยั่วโหลว สถาปัตยกรรมไม้โบราณทรงคุณค่ากลางผืนน้ำมรกต"
    ],
    highlightsEn: [
      "Iconic angle: marble arch bridge aligned harmoniously beneath the snow-capped summit of Jade Dragon",
      "Dongba Culture Research Institute housing ancient pictographic manuscripts and cultural relics",
      "Yuquan Spring: pristine subterranean springs that nourish the entire waterway grid of Lijiang",
      "Moon-Embracing Deyue Pavilion showcasing multi-eaved traditional timber architectural elegance"
    ],
    descriptionTh: "สระน้ำมังกรดำ หรือสวนเฮยหลงถาน สถานที่ที่รวมความงามทางธรรมชาติและสถาปัตยกรรมโบราณไว้อย่างสมบูรณ์แบบ ผิวน้ำใสที่สะท้อนเงายอดเขาหิมะมังกรหยกเคียงคู่สะพานหินอ่อนและศาลาจีนโบราณ คือภาพจำอันเป็นอมตะของลี่เจียง",
    descriptionEn: "Black Dragon Pool Park (Heilongtan) offers the quintessence of classical Yunnan scenery, famous for its timeless mirror reflections of Jade Dragon Snow Mountain across tranquil jade waters."
  },
  {
    id: 7,
    nameTh: "คฤหาสน์ตระกูลมู่ & หอว่านกู่โหลว (เขาสิงโต)",
    nameZh: "木府 · 狮子山万古楼",
    pinyin: "Mù Fǔ (Shīzǐshān Wàngǔ Lóu)",
    nameEn: "Mu Palace & Lion Hill Wangu Tower",
    category: "culture_heritage",
    categoryLabelTh: "พระราชวังต้องห้ามจำลอง & จุดชมวิวเมือง",
    categoryLabelEn: "Mu Palace & Lion Hill",
    categoryColor: "#7c3aed",
    pastelBg: "#f3e8ff",
    badgeColor: "#e9d5ff",
    doodleBorderColor: "#6d28d9",
    doodleIcon: "👑",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "พระราชวังต้องห้ามแห่งยูนนาน ศูนย์กลางอำนาจเจ้าเมืองน่าซี และหอชมวิวพาโนรามา 360 องศาบนเขาสิงโต",
    ratingDescEn: "Mini Forbidden City of Yunnan: historic Naxi chieftain palace & 360-degree panoramic old town tower",
    coords: [26.8685, 100.2340],
    image: "assets/places/lijiang_07_mu_palace.jpg",
    tags: ["คฤหาสน์ตระกูลมู่", "เขาสิงโต", "ว่านกู่โหลว", "Mu Palace", "Wangu Tower"],
    shortBulletsTh: [
      "ศูนย์กลางการปกครองของเจ้าผู้ครองนครตระกูลมู่ ยิ่งใหญ่ดุจพระราชวังต้องห้าม",
      "สถาปัตยกรรมผสมผสานระหว่างฮั่น น่าซี และทิเบตอย่างประณีตวิจิตร",
      "เดินทะลุขึ้นเขาสิงโตสู่หอว่านกู่โหลว ชมวิวกระเบื้องหลังคาเมืองเก่าลี่เจียงแบบ 360 องศา"
    ],
    shortBulletsEn: [
      "Seat of hereditary Naxi chieftains (Tusi Mu clan), known as Yunnan's Mini Forbidden City",
      "Exquisite fusion of Han imperial, Naxi tribal, and Tibetan architectural masterworks",
      "Trail ascending to Lion Hill's Wangu Tower for 360-degree panoramic views of sea of gray tiled roofs"
    ],
    openingHoursTh: "เปิดทุกวัน 08:30 - 17:30 น. (หอว่านกู่โหลวและคาเฟ่เขาสิงโตเปิดถึง 21:00 น.)",
    openingHoursEn: "Daily 08:30 - 17:30 (Lion Hill cafes & viewpoints open until 21:00)",
    bestTimeTh: "ช่วงบ่ายแก่ๆ 15:30 - 18:00 น. ขึ้นเขาสิงโตชมพระอาทิตย์ตกและแสงไฟเมืองเก่าเริ่มเปิด",
    bestTimeEn: "Late afternoon 15:30 - 18:00 to catch golden hour sunset transitioning into evening town illuminations",
    ticketPriceTh: "บัตรเข้าชมคฤหาสน์ตระกูลมู่ 40 หยวน (หอว่านกู่โหลวบนเขาสิงโต 35 หยวน)",
    ticketPriceEn: "Mu Palace admission 40 RMB (Lion Hill Wangu Tower 35 RMB)",
    transportTh: {
      fromStation: "อยู่ในเมืองโบราณต้าเหยียน",
      fromAirport: "เดินทางสู่เมืองโบราณต้าเหยียน",
      fromOldTown: "ตั้งอยู่ทางทิศตะวันตกเฉียงใต้ของจัตุรัสซื่อฟางเจีย เดินเท้าเพียง 5-8 นาที",
      inside: "เดินชมตัววังไล่ระดับขึ้นตามไหล่เขา ด้านหลังมีทางเดินขึ้นบันไดสู่เขาสิงโต (Lion Hill Park)"
    },
    transportEn: {
      fromStation: "Located inside Dayan Ancient Town",
      fromAirport: "Via Dayan Ancient Town connections",
      fromOldTown: "5-8 minute walk southwest from central Sifang Square",
      inside: "Stepped palace pavilions ascending the slope, connecting directly to Lion Hill trail behind"
    },
    highlightsTh: [
      "ซุ้มประตูหินสลัก 'จงอี้' (Loyalty Arch) ของพระราชทานจากจักรพรรดิราชวงศ์หมิง",
      "ท้องพระโรงใหญ่ว่านเจวี่ยนโหลว (Wanjuan Tower) แหล่งเก็บคัมภีร์และสมบัติโบราณล้ำค่า",
      "หอว่านกู่โหลว (Wangu Tower) หอไม้โบราณ 5 ชั้นสูง 33 เมตร สร้างโดยไม่ใช้ตะปูแม้แต่ตัวเดียว",
      "คาเฟ่บนเขาสิงโต มุมจิบกาแฟชมทะเลหลังคากระเบื้องสีเทาของเมืองเก่าทอดยาวจรดขอบฟ้า"
    ],
    highlightsEn: [
      "Imperial Stone Loyalty Archway granted personally by Ming Emperor Wanli",
      "Grand Wanjuan Pavilion housing priceless historical scrolls and clan treasures",
      "Wangu Tower: 33-meter, 5-tiered timber tower constructed entirely without a single iron nail",
      "Lion Hill scenic coffee balconies offering breathtaking vistas over the undulating sea of clay roof tiles"
    ],
    descriptionTh: "คฤหาสน์ตระกูลมู่ (มู่ฝู่) ประจักษ์พยานแห่งความรุ่งเรืองและอำนาจของตระกูลมู่ผู้ปกครองลี่เจียงยาวนานกว่า 400 ปี ความโอ่อ่าอลังการของสถาปัตยกรรมและมุมมองแบบพาโนรามาจากเขาสิงโตคือสิ่งที่ไม่ควรพลาด",
    descriptionEn: "Mu Palace stands as the grand testament to the 400-year reign of Naxi chieftains. Together with Lion Hill's Wangu Tower, it commands the most awe-inspiring panoramic perspective over ancient Lijiang."
  },
  {
    id: 8,
    nameTh: "ทะเลสาบลาชื่อไห่ & เส้นทางคาราวานชาม้า",
    nameZh: "拉市海湿地公园",
    pinyin: "Lāshìhǎi Shīdì Gōngyuán",
    nameEn: "Lashi Lake Wetland & Ancient Tea Horse Road",
    category: "nature_lake",
    categoryLabelTh: "พื้นที่ชุ่มน้ำ & ขี่ม้าคาราวาน",
    categoryLabelEn: "Wetland & Horse Trekking",
    categoryColor: "#2563eb",
    pastelBg: "#dbeafe",
    badgeColor: "#bfdbfe",
    doodleBorderColor: "#1d4ed8",
    doodleIcon: "🦢",
    rating: 4.7,
    ratingStars: "⭐⭐⭐⭐½",
    ratingDescTh: "ทะเลสาบพื้นที่ชุ่มน้ำ นกอพยพในฤดูหนาว ขี่ม้าแคระตามรอยคาราวานชาม้าโบราณผ่านป่าสน",
    ratingDescEn: "Scenic plateau wetland: winter migratory bird sanctuary & historic Tea Horse trail riding",
    coords: [26.8850, 100.1400],
    image: "assets/places/lijiang_08_lashi_lake.jpg",
    tags: ["ลาชื่อไห่", "ขี่ม้าคาราวาน", "พื้นที่ชุ่มน้ำ", "Lashi Lake", "Tea Horse Trail"],
    shortBulletsTh: [
      "ทะเลสาบที่ราบสูงและพื้นที่ชุ่มน้ำอนุรักษ์ระดับสากล แหล่งพักของนกอพยพกว่า 30,000 ตัว",
      "กิจกรรมยอดฮิต: ขี่ม้าแคระยูนนานตามรอยเส้นทางคาราวานชาม้าโบราณผ่านป่าสนและขุนเขา",
      "ล่องแพไม้ไผ่ชมความเงียบสงบของผืนน้ำ ทุ่งหญ้า และวิวทิวทัศน์ชนบท"
    ],
    shortBulletsEn: [
      "Pristine plateau wetland & international sanctuary welcoming over 30,000 winter birds",
      "Classic highland activity: riding Yunnan ponies along forested Tea Horse caravan trails",
      "Peaceful bamboo rafting across mirrored waters framed by open green meadows"
    ],
    openingHoursTh: "เปิดทุกวัน 08:30 - 18:00 น.",
    openingHoursEn: "Daily 08:30 - 18:00",
    bestTimeTh: "ช่วงเช้า 09:00 - 11:30 น. (อากาศสดชื่น ไม่ร้อน ขี่ม้าสบาย) หรือฤดูหนาว พ.ย. - มี.ค. สำหรับดูนกอพยพ",
    bestTimeEn: "Morning 09:00 - 11:30 for crisp horse-trekking; Nov - Mar for vibrant migratory birdwatching",
    ticketPriceTh: "บัตรเข้าชมพื้นที่ชุ่มน้ำ 30 หยวน (แพ็กเกจขี่ม้าคาราวาน + ล่องแพ ประมาณ 160-260 หยวนตามระยะทาง)",
    ticketPriceEn: "Wetland park ticket 30 RMB (Horse riding & boating package ~160-260 RMB depending on route)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟลี่เจียง 15 กม. นั่ง DiDi ประมาณ 30-35 หยวน",
      fromAirport: "ห่างจากสนามบิน 32 กม. DiDi ประมาณ 70 หยวน",
      fromOldTown: "ห่างจากเมืองโบราณลี่เจียงไปทางทิศตะวันตก 12 กม. นั่ง DiDi เพียง 20-25 หยวน (20 นาที)",
      inside: "มีจุดบริการขี่ม้าที่ได้มาตรฐานพร้อมคนจูงม้าดูแลความปลอดภัย และทางเดินสะพานไม้ริมทะเลสาบ"
    },
    transportEn: {
      fromStation: "15 km west of Lijiang Station; DiDi approx 30-35 RMB",
      fromAirport: "32 km from airport; DiDi ~70 RMB",
      fromOldTown: "12 km west of Dayan Old Town; DiDi 20-25 RMB (20 min)",
      inside: "Standardized equestrian centers with professional horse handlers and lakeshore wooden boardwalks"
    },
    highlightsTh: [
      "เส้นทางขี่ม้าลัดเลาะผ่านป่าสนเขา ลำธารโบราณ และจุดชมวิวมุมสูงของทะเลสาบลาชื่อไห่",
      "ชมนกกระเรียนคอดำและหงส์อพยพจากไซบีเรียในช่วงฤดูหนาว (พฤศจิกายน - มีนาคม)",
      "สวนดอกไม้ริมทะเลสาบและจุดถ่ายภาพสไตล์มินิมอลริมน้ำ",
      "ชิมไก่หม้อดินเผาพื้นเมือง (Naxi Claypot Chicken) และปลาสดจากทะเลสาบ"
    ],
    highlightsEn: [
      "Horseback trail weaving through aromatic pine forests, mountain springs, and valley overlooks",
      "Birdwatching for rare black-necked cranes and Siberian migratory waterfowl during winter months",
      "Charming lakeside floral gardens and aesthetic photo installations along the water's edge",
      "Savoring authentic local Naxi claypot chicken and freshly caught seasonal lake fish"
    ],
    descriptionTh: "ทะเลสาบลาชื่อไห่ พื้นที่ชุ่มน้ำอันอุดมสมบูรณ์และจุดแวะพักคาราวานม้าในอดีต สัมผัสประสบการณ์ขี่ม้าอย่างปลอดภัยท่ามกลางธรรมชาติบริสุทธิ์และสายลมอ่อน เป็นอีกหนึ่งไฮไลท์สโลว์ไลฟ์ที่น่าประทับใจ",
    descriptionEn: "Lashi Lake Wetland blends serene plateau aquatic scenery with living caravan heritage, offering memorable horseback treks along historical mountain paths."
  },
  {
    id: 9,
    nameTh: "การแสดงความประทับใจลี่เจียง & หุบเขาตงปา",
    nameZh: "印象丽江 · 东巴谷",
    pinyin: "Yìnxiàng Lìjiāng (Dōngbā Gǔ)",
    nameEn: "Impression Lijiang Live Show & Dongba Valley",
    category: "culture_heritage",
    categoryLabelTh: "การแสดงกลางแจ้ง & วัฒนธรรมตงปา",
    categoryLabelEn: "Impression Lijiang Show",
    categoryColor: "#db2777",
    pastelBg: "#fce7f3",
    badgeColor: "#fbcfe8",
    doodleBorderColor: "#be185d",
    doodleIcon: "🎭",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "การแสดงกลางแจ้งระดับโลก โดยผู้กำกับจางอี้โหมว นักแสดงพื้นเมืองกว่า 500 ชีวิต วิวเขาหิมะ 360 องศา",
    ratingDescEn: "World-class open-air live production by Zhang Yimou: 500 indigenous performers at 3,100m altitude",
    coords: [27.1250, 100.2450],
    image: "assets/places/lijiang_09_impression_lijiang.jpg",
    tags: ["ความประทับใจลี่เจียง", "อิมเพรสชั่นลี่เจียง", "จางอี้โหมว", "Impression Lijiang", "Dongba Valley"],
    shortBulletsTh: [
      "สุดยอดการแสดงกลางแจ้งกำกับโดยผู้กำกับชื่อก้องโลก จางอี้โหมว (Zhang Yimou)",
      "เวทีดินแดงกลางแจ้งความสูง 3,100 เมตร โดยมียอดเขาหิมะมังกรหยกเป็นฉากหลังจริง",
      "นักแสดงชาวเขาพื้นเมือง 16 ชนเผ่ากว่า 500 คน พร้อมม้าศึก ถ่ายทอดจิตวิญญาณแห่งขุนเขา"
    ],
    shortBulletsEn: [
      "Epic open-air theatrical production directed by world-renowned director Zhang Yimou",
      "Red sandstone amphitheater situated at 3,100m elevation with natural snow peaks as backdrop",
      "Over 500 indigenous villagers and galloping horses celebrating ancient spiritual heritage"
    ],
    openingHoursTh: "การแสดงจัดวันละ 2-3 รอบ (รอบปกติ 11:10 น., 13:30 น. ความยาวรอบละ 65 นาที)",
    openingHoursEn: "Shows run 2-3 times daily (Typical times: 11:10, 13:30; runtime 65 minutes)",
    bestTimeTh: "รอบเวลา 11:10 น. หรือ 13:30 น. (วางแผนชมโชว์ก่อนหรือหลังขึ้นกระเช้าหรือเที่ยวหุบเขาพระจันทร์)",
    bestTimeEn: "11:10 or 13:30 showtimes; ideal to combine seamlessly with Blue Moon Valley touring",
    ticketPriceTh: "บัตรชมการแสดงที่นั่งธรรมดา 280 หยวน (ที่นั่ง VIP 346 หยวน) ซื้อร่วมกับตั๋วอุทยานได้",
    ticketPriceEn: "Standard seating ticket 280 RMB (VIP 346 RMB); bundle options available with park pass",
    transportTh: {
      fromStation: "อยู่ในเขตอุทยานภูเขาหิมะมังกรหยก ลานกานไห่จื่อ (Ganhaizi)",
      fromAirport: "เดินทางร่วมกับทริปภูเขาหิมะมังกรหยก",
      fromOldTown: "นั่งรถบัสนำเที่ยวสาย 101 หรือ DiDi จากเมืองเก่าลี่เจียงมายังโรงละครกลางแจ้งกานไห่จื่อ",
      inside: "โรงละครกลางแจ้ง อากาศอาจเย็นและแดดแรง ควรเตรียมหมวก แว่นกันแดด และเสื้อกันหนาว"
    },
    transportEn: {
      fromStation: "Located at Ganhaizi plateau inside Jade Dragon Snow Mountain Scenic Area",
      fromAirport: "Combined with Jade Dragon Mountain itinerary",
      fromOldTown: "Tourist Bus No. 101 or DiDi from Dayan Old Town direct to Ganhaizi Amphitheater",
      inside: "Open-air highland venue: intense UV and cool winds; bring sunglasses, wide brim hat & warm layer"
    },
    highlightsTh: [
      "องก์ที่ 1 'คาราวานชาม้า' เสียงก้องกังวานของบทเพลงพื้นบ้านและเสียงเกือกม้าสะเทือนผืนดิน",
      "องก์ 'ดื่มเหล้ากับสวรรค์' การบูชาเทพเจ้าแห่งขุนเขาและคำอธิษฐานศักดิ์สิทธิ์ของชนเผ่าน่าซี",
      "พิธีล้างบาปและอธิษฐานขอพรใต้ผืนฟ้าที่สร้างความประทับใจจนน้ำตาซึม",
      "ความสมจริง 100% เพราะนักแสดงทุกคนคือชาวบ้านชาวเขาตัวจริง ไม่ใช่นักแสดงอาชีพ"
    ],
    highlightsEn: [
      "Act 1 'Tea Horse Caravan': raw, passionate vocal harmonies echoing against rumbling horse hooves",
      "Act 'Drinking with Heaven': sacred highland ritual honoring mountain deities and ancestral spirits",
      "Moving Dongba blessing ceremony connecting performers and spectators under the boundless blue sky",
      "Authentic emotional resonance: all 500 performers are local farmers and horsemen, not stage actors"
    ],
    descriptionTh: "การแสดง Impression Lijiang เป็นการแสดงที่ยิ่งใหญ่และตราตรึงใจที่สุดแห่งหนึ่งของจีน ผสานความงามอันตระการตาของธรรมชาติเข้ากับพลังศรัทธาของชาวพื้นเมือง เป็นประสบการณ์ที่ทรงคุณค่าและลืมไม่ลง",
    descriptionEn: "Impression Lijiang offers an unforgettable soul-stirring live spectacle, marrying the monumental drama of snowy crags with the profound cultural heartbeat of Yunnan's indigenous people."
  },
  {
    id: 10,
    nameTh: "หมู่บ้านโบราณยวี่หู (บ้านหินดั้งเดิม ดร.โจเซฟ ร็อค)",
    nameZh: "玉湖村 (洛克故居)",
    pinyin: "Yùhú Cūn (Luòkè Gùjū)",
    nameEn: "Yuhu Ancient Stone Village / Rock's Residence",
    category: "ancient_town",
    categoryLabelTh: "หมู่บ้านหินธารหิมะ & ร็อคกี้",
    categoryLabelEn: "Stone Village & Rock's House",
    categoryColor: "#475569",
    pastelBg: "#f1f5f9",
    badgeColor: "#e2e8f0",
    doodleBorderColor: "#334155",
    doodleIcon: "🏡",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "หมู่บ้านหินภูเขาไฟโบราณใต้เชิงเขาหิมะมังกรหยก บ้านพัก ดร.โจเซฟ ร็อค ผู้บันทึกความงามลี่เจียงสู่โลก",
    ratingDescEn: "Ancient volcanic stone village at mountain foot: Dr. Joseph Rock's botanist residence & tranquil lake",
    coords: [27.0250, 100.2180],
    image: "assets/places/lijiang_10_yuhu_village.jpg",
    tags: ["หมู่บ้านยวี่หู", "ยวี่หู", "โจเซฟร็อค", "Yuhu Village", "Joseph Rock"],
    shortBulletsTh: [
      "หมู่บ้านน่าซีโบราณสร้างจากหินภูเขาไฟสีเทาดำ ตั้งอยู่ใต้เชิงเขาหิมะมังกรหยก",
      "บ้านพักเดิมของ ดร. โจเซฟ ร็อค (Joseph Rock) นักพฤกษศาสตร์ National Geographic",
      "ทะเลสาบหยกยวี่หู (Yuhu Lake) บึงน้ำใสสะท้อนยอดเขาหิมะที่เงียบสงบ ไร้ความวุ่นวาย"
    ],
    shortBulletsEn: [
      "Ancient Naxi village built entirely from dark volcanic stones beneath snow slopes",
      "Former home of Dr. Joseph Rock, National Geographic botanist who introduced Lijiang to the world",
      "Pristine Yuhu Lake reflecting towering cliffs without tourist commercialization"
    ],
    openingHoursTh: "เปิดทุกวัน 08:30 - 18:00 น. (บ้านพัก ดร.ร็อค เปิด 09:00 - 17:00 น.)",
    openingHoursEn: "Village open daily 08:30 - 18:00 (Rock's Residence open 09:00 - 17:00)",
    bestTimeTh: "ช่วงบ่าย 13:30 - 16:30 น. เดินทอดน่องในตรอกหินโบราณ และขี่ม้าขึ้นทะเลสาบยวี่หู",
    bestTimeEn: "Afternoon 13:30 - 16:30 for rustic stone lane strolls and gentle horse ride to Yuhu Lake",
    ticketPriceTh: "เข้าชมหมู่บ้านฟรี (บ้านพัก ดร.โจเซฟ ร็อค 25 หยวน, ขี่ม้าขึ้นทะเลสาบประมาณ 100 หยวน)",
    ticketPriceEn: "Free village entry (Dr. Rock's Residence museum 25 RMB, optional horseback ride ~100 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟลี่เจียง 25 กม. DiDi ประมาณ 50-60 หยวน",
      fromAirport: "ห่างจากสนามบิน 45 กม. DiDi ประมาณ 110 หยวน",
      fromOldTown: "ห่างจากเมืองโบราณต้าเหยียนขึ้นไปทางเหนือ 16 กม. นั่ง DiDi เพียง 30-35 หยวน (30 นาที) หรือรถเมล์สาย 17",
      inside: "ถนนในหมู่บ้านปูด้วยหินภูเขาไฟแบบดั้งเดิม มีคาเฟ่หินลับๆ ซ่อนตัวอยู่ท่ามกลางบ้านเรือนพื้นเมือง"
    },
    transportEn: {
      fromStation: "25 km north of Lijiang Station; DiDi approx 50-60 RMB",
      fromAirport: "45 km from airport; DiDi ~110 RMB",
      fromOldTown: "16 km north of Dayan Old Town; DiDi 30-35 RMB (30 min) or City Bus No. 17",
      inside: "Cobbled volcanic stone alleys; hidden specialty coffee spots tucked within traditional stone farmsteads"
    },
    highlightsTh: [
      "บ้านพักไม้และหินของ ดร.โจเซฟ ร็อค ที่เก็บรวบรวมภาพถ่ายโบราณ เครื่องพิมพ์ดีด และบันทึกประวัติศาสตร์",
      "สถาปัตยกรรมกำแพงหินภูเขาไฟ 'หินไข่นกกระทา' เอกลักษณ์เฉพาะตัวที่ไม่พบที่ใดในโลก",
      "ขี่ม้าขึ้นไปยังทะเลสาบหยกยวี่หู (Yuhu Reservoir) ทุ่งหญ้าเลี้ยงม้ากว้างใหญ่ใต้หน้าผาหิมะ",
      "บรรยากาศเงียบสงบ ไร้การปรุงแต่ง ได้สัมผัสรอยยิ้มและวิถีชีวิตจริงของชาวน่าซีอย่างอบอุ่น"
    ],
    highlightsEn: [
      "Dr. Joseph Rock's preserved rustic stone quarters showcasing vintage cameras, typewriters & notes",
      "Unique volcanic pebble and stone architecture ('quail-egg stone' walls) found nowhere else",
      "Horseback trek up to serene Yuhu Lake pasture directly beneath the colossal snow massif",
      "Authentic, uncommercialized countryside warmth with genuine smiles from local Naxi villagers"
    ],
    descriptionTh: "หมู่บ้านโบราณยวี่หู ดินแดนแห่งหินและสายลมใต้ร่มเงาของภูเขาหิมะมังกรหยก จุดเริ่มต้นที่ทำให้ชาวโลกได้รู้จักกับความงดงามของลี่เจียงผ่านบันทึกของ ดร.โจเซฟ ร็อค สถานที่ที่เวลาราวกับหยุดนิ่งไว้",
    descriptionEn: "Yuhu Ancient Stone Village nestles at the immediate foot of Jade Dragon Snow Mountain. Built of raw volcanic rock, it preserves the authentic serenity that captivated explorer Joseph Rock a century ago."
  }
];

// Multi-City Registry for Dynamic City Switching
const CITIES = {
  dali: {
    id: "dali",
    nameTh: "ต้าหลี่ (Dali)",
    nameZh: "大理",
    pinyin: "Dàlǐ",
    nameEn: "Dali",
    icon: "🏔️",
    descTh: "ทะเลสาบเอ๋อร์ไห่ & ภูเขาชางซาน (11 จุดเช็คอิน)",
    descEn: "Erhai Lake & Mount Cangshan (11 Spots)",
    center: [25.7500, 100.1800],
    defaultZoom: 11,
    appTitleTh: "แผนที่ท่องเที่ยวต้าหลี่ (Dali Slow-Life Map)",
    appTitleEn: "Dali Cozy Travel Map Guide",
    appSubtitleTh: "11 จุดเช็คอิน · ชุมทางรถไฟความเร็วสูง · เอ๋อร์ไห่ & ชางซาน · AMAP",
    appSubtitleEn: "11 Slow-Life Spots & HSR Gateway around Erhai & Mount Cangshan · AMAP",
    attractions: DALI_ATTRACTIONS,
    categories: [
      { id: "all", icon: "🌟", labelTh: "ทั้งหมด (11)", labelEn: "All (11)" },
      { id: "transit_hub", icon: "🚅", labelTh: "สถานีรถไฟ (HSR Hub)", labelEn: "HSR Station" },
      { id: "ancient_town", icon: "🏯", labelTh: "เมืองโบราณ", labelEn: "Ancient Towns" },
      { id: "nature_lake", icon: "🌊", labelTh: "ทะเลสาบ & ซานโตรินี", labelEn: "Lakes & Views" },
      { id: "mountain_nature", icon: "🏔️", labelTh: "เทือกเขา & ธารน้ำแข็ง", labelEn: "Mountains" },
      { id: "culture_heritage", icon: "🪷", labelTh: "วัฒนธรรม & วัดเซน", labelEn: "Heritage & Zen" }
    ],
    scenicRoutes: [
      {
        nameTh: "🌊 เส้นทางสโลว์ไลฟ์รอบทะเลสาบเอ๋อร์ไห่",
        nameEn: "🌊 Erhai Lake Scenic Greenway Loop",
        spotIds: [0, 1, 5, 4, 2, 9, 7, 6, 0],
        color: "#E07A5F",
        dashArray: "8, 8"
      },
      {
        nameTh: "🐴 เส้นทางขุนเขาชางซาน & คาราวานม้าซาซี",
        nameEn: "🐴 Cangshan & Tea Horse Road Trail",
        spotIds: [10, 8, 1, 3],
        color: "#5B8266",
        dashArray: "6, 8"
      }
    ],
    guide: {
      titleTh: "การเดินทาง & เส้นทางแนะนำ (Dali Travel Quick Guide)",
      titleEn: "Travel Logistics & Recommended Routes (Dali)",
      chips: [
        { icon: "🚅", textTh: "<strong>รถไฟความเร็วสูง</strong> (คุนหมิง ➔ ต้าหลี่ 2 ชม.)", textEn: "<strong>Bullet Train</strong> (Kunming ➔ Dali 2h)" },
        { icon: "🚲", textTh: "<strong>จักรยานริมทะเลสาบ</strong> (เลนสีเขียว 100%)", textEn: "<strong>Lakeside Cycling</strong> (Greenway)" },
        { icon: "🚌", textTh: "<strong>รถบัสนำเที่ยวรอบเอ๋อร์ไห่</strong>", textEn: "<strong>Scenic Lake Bus</strong>" },
        { icon: "🚕", textTh: "<strong>DiDi / แท็กซี่</strong> (สะดวกมาก)", textEn: "<strong>DiDi Taxi</strong> (Very easy)" }
      ],
      routes: [
        { num: "1", descTh: "<strong>เส้นทางสโลว์ไลฟ์รอบทะเลสาบ (3 วัน 🌊) :</strong> สถานีรถไฟต้าหลี่ ➔ เมืองโบราณต้าหลี่ ➔ อ่าวตัว S ➔ ซีโจว ➔ ซานโตรินี", descEn: "<strong>Slow-Life Lakeside Loop (3 Days 🌊) :</strong> Dali Station ➔ Dali Old Town ➔ S-Bay ➔ Xizhou ➔ Santorini" },
        { num: "2", descTh: "<strong>เส้นทางคาราวานม้า & ขุนเขา (2 วัน 🐴) :</strong> วัดแม่ชีจี้จาวอัน ➔ เขาชางซาน ➔ โจวเฉิง ➔ ซาซี", descEn: "<strong>Caravan & Mountain Trail (2 Days 🐴) :</strong> Jizhao Nunnery ➔ Cangshan ➔ Zhoucheng ➔ Shaxi" }
      ]
    }
  },
  shangrila: {
    id: "shangrila",
    nameTh: "แชงกรีล่า (Shangri-La)",
    nameZh: "香格里拉",
    pinyin: "Xiānggélǐlā",
    nameEn: "Shangri-La",
    icon: "🛕",
    descTh: "วัดซงจ้านหลิน & ผู่ต๋าชั่ว แดนสวรรค์ทิเบต (9 จุดเช็คอิน)",
    descEn: "Songzanlin Monastery & Potatso Tibetan Alpine (9 Spots)",
    center: [27.8268, 99.7072],
    defaultZoom: 11,
    appTitleTh: "แผนที่ท่องเที่ยวแชงกรีล่า (Shangri-La Alpine Map)",
    appTitleEn: "Shangri-La Sacred Alpine Travel Map",
    appSubtitleTh: "9 จุดเช็คอินยอดเขาหิมะ & อารามทิเบตแดนสวรรค์ โปตาลาจำลอง · AMAP",
    appSubtitleEn: "9 Sacred Tibetan Alpine Destinations & HSR Hub at 3,200m · AMAP",
    attractions: SHANGRILA_ATTRACTIONS,
    categories: [
      { id: "all", icon: "🌟", labelTh: "ทั้งหมด (9)", labelEn: "All (9)" },
      { id: "transit_hub", icon: "🚅", labelTh: "สถานีรถไฟ (HSR Hub)", labelEn: "HSR Station" },
      { id: "tibetan_monastery", icon: "🛕", labelTh: "อารามทิเบต", labelEn: "Monasteries" },
      { id: "ancient_town", icon: "🏯", labelTh: "เมืองโบราณตู๋เค่อจง", labelEn: "Ancient Towns" },
      { id: "alpine_nature", icon: "🌲", labelTh: "อุทยาน & ทะเลสาบ & หุบเหว", labelEn: "Lakes & Canyons" },
      { id: "snow_mountain", icon: "🏔️", labelTh: "ภูเขาหิมะศักดิ์สิทธิ์", labelEn: "Snow Peaks" },
      { id: "culture_heritage", icon: "🪷", labelTh: "ธารหินปูน & วัฒนธรรม", labelEn: "Heritage" }
    ],
    scenicRoutes: [
      {
        nameTh: "🛕 เส้นทางมนต์เสน่ห์ทิเบต & มรดกโลกผู่ต๋าชั่ว",
        nameEn: "🛕 Sacred Tibetan Heritage & Potatso Loop",
        spotIds: [0, 2, 1, 3],
        color: "#B45309",
        dashArray: "8, 8"
      },
      {
        nameTh: "🏔️ เส้นทางทุ่งหญ้า ทะเลสาบ & ยอดเขาหิมะสือข่า",
        nameEn: "🏔️ Napa Lake & Shika Snow Mountain Trail",
        spotIds: [2, 4, 5, 6, 7],
        color: "#0284C7",
        dashArray: "6, 8"
      }
    ],
    guide: {
      titleTh: "การเดินทาง & เส้นทางแนะนำ (Shangri-La Quick Guide)",
      titleEn: "Travel Logistics & Recommended Routes (Shangri-La)",
      chips: [
        { icon: "🚅", textTh: "<strong>รถไฟความเร็วสูง</strong> (ต้าหลี่ ➔ แชงกรีล่า 2.5 ชม.)", textEn: "<strong>Bullet Train</strong> (Dali ➔ Shangri-La 2.5h)" },
        { icon: "🫁", textTh: "<strong>ความสูง 3,200ม.</strong> (เดินช้าๆ จิบน้ำอุ่น ไม่ต้องรีบ)", textEn: "<strong>Altitude 3,200m</strong> (Pace slowly & hydrate)" },
        { icon: "🚌", textTh: "<strong>รถเมล์สาย 1 & 3</strong> (เชื่อมสถานี-เมืองเก่า-วัดซงจ้านหลิน)", textEn: "<strong>Bus No. 1 & 3</strong> (Station ➔ Town ➔ Temple)" },
        { icon: "🚕", textTh: "<strong>DiDi / เหมารถ</strong> (สะดวกมาก)", textEn: "<strong>DiDi Taxi</strong> (Easy & affordable)" }
      ],
      routes: [
        { num: "1", descTh: "<strong>เส้นทางไฮไลท์ทิเบต & ธรรมชาติ (2 วัน 🛕) :</strong> สถานีแชงกรีล่า ➔ เมืองเก่าตู๋เค่อจง (กงล้อมนต์) ➔ วัดซงจ้านหลิน ➔ ผู่ต๋าชั่ว", descEn: "<strong>Classic Tibetan & Potatso (2 Days 🛕) :</strong> HSR Station ➔ Dukezong ➔ Songzanlin ➔ Potatso National Park" },
        { num: "2", descTh: "<strong>เส้นทางขุนเขาหิมะ & ธารน้ำแร่ขาว (2 วัน 🏔️) :</strong> ทะเลสาบนาพาไห่ ➔ ภูเขาหิมะสือข่า ➔ หุบเขาเสือกระโจน ➔ ไป๋สุ่ยไถ", descEn: "<strong>Snow Peak & White Terraces (2 Days 🏔️) :</strong> Napa Lake ➔ Shika Mountain ➔ Tiger Leaping Gorge ➔ Baishuitai" }
      ]
    }
  },

  lijiang: {
    id: "lijiang",
    nameTh: "ลี่เจียง (Lijiang)",
    nameZh: "丽江",
    pinyin: "Lìjiāng",
    nameEn: "Lijiang",
    icon: "🏮",
    descTh: "เมืองโบราณมรดกโลก & ภูเขาหิมะมังกรหยก (11 จุดเช็คอิน)",
    descEn: "UNESCO Ancient Town & Jade Dragon Snow Mountain (11 Spots)",
    center: [26.9000, 100.2200],
    defaultZoom: 11,
    appTitleTh: "แผนที่ท่องเที่ยวลี่เจียง (Lijiang Heritage & Snow Mountain Map)",
    appTitleEn: "Lijiang Heritage & Jade Dragon Snow Mountain Map",
    appSubtitleTh: "11 จุดเช็คอิน เมืองมรดกโลก ยอดเขาหิมะมังกรหยก หุบเขาพระจันทร์สีน้ำเงิน · AMAP",
    appSubtitleEn: "11 Must-Visit Heritage & Snow Peak Spots around Lijiang & Jade Dragon Mountain · AMAP",
    attractions: LIJIANG_ATTRACTIONS,
    categories: [
      { id: "all", icon: "🌟", labelTh: "ทั้งหมด (11)", labelEn: "All (11)" },
      { id: "transit_hub", icon: "🚅", labelTh: "สถานีรถไฟ (HSR Hub)", labelEn: "HSR Station" },
      { id: "ancient_town", icon: "🏯", labelTh: "เมืองโบราณ & ชนชาติน่าซี", labelEn: "Ancient Towns" },
      { id: "mountain_nature", icon: "🏔️", labelTh: "ภูเขาหิมะ & ธารน้ำแข็ง", labelEn: "Snow Mountain" },
      { id: "nature_lake", icon: "🌊", labelTh: "ทะเลสาบ & หุบเขาพระจันทร์", labelEn: "Lakes & Valleys" },
      { id: "culture_heritage", icon: "🪷", labelTh: "คฤหาสน์มู่ & การแสดงตงปา", labelEn: "Heritage & Culture" }
    ],
    scenicRoutes: [
      {
        nameTh: "🏮 เส้นทางมรดกโลก 3 เมืองโบราณ & คฤหาสน์มู่",
        nameEn: "🏮 Lijiang Heritage Old Towns Loop",
        spotIds: [0, 1, 7, 6, 2, 3],
        color: "#E11D48",
        dashArray: "8, 8"
      },
      {
        nameTh: "🏔️ เส้นทางอัญมณีภูเขาหิมะมังกรหยก & หุบเขาพระจันทร์สีน้ำเงิน",
        nameEn: "🏔️ Jade Dragon Snow Mountain & Blue Moon Valley Trail",
        spotIds: [1, 3, 10, 4, 5, 9],
        color: "#0284C7",
        dashArray: "6, 8"
      }
    ],
    guide: {
      titleTh: "การเดินทาง & เส้นทางแนะนำลี่เจียง (Lijiang Travel Quick Guide)",
      titleEn: "Travel Logistics & Recommended Routes (Lijiang)",
      chips: [
        { icon: "🚅", textTh: "<strong>รถไฟความเร็วสูง</strong> (ต้าหลี่ ➔ ลี่เจียง 1.5 ชม. / คุนหมิง ➔ ลี่เจียง 3.5 ชม.)", textEn: "<strong>Bullet Train</strong> (Dali ➔ Lijiang 1.5h)" },
        { icon: "🏔️", textTh: "<strong>ความสูง 2,400ม. (ยอดเขา 4,680ม.)</strong> (เตรียมกระป๋องออกซิเจน & เสื้อกันหนาว)", textEn: "<strong>Altitude 2,400m - 4,680m</strong> (Oxygen canister & warm coat)" },
        { icon: "🚌", textTh: "<strong>รถบัสอุทยานภูเขาหิมะ</strong> (สาย 101 ตรงจากเมืองเก่า 15 หยวน)", textEn: "<strong>Snow Mountain Bus No. 101</strong> (15 RMB)" },
        { icon: "🚕", textTh: "<strong>DiDi</strong> (เดินทางสะดวกมากระหว่างเมืองโบราณ 15-25 หยวน)", textEn: "<strong>DiDi Taxi</strong> (Easy between old towns 15-25 RMB)" }
      ],
      routes: [
        { num: "1", descTh: "<strong>เส้นทางไฮไลท์ภูเขาหิมะ & หุบเขาเทอร์ควอยซ์ (1 วัน 🏔️) :</strong> เมืองเก่าลี่เจียง ➔ กระเช้าใหญ่กลาเซียร์ปาร์ค (4,680ม.) ➔ หุบเขาพระจันทร์สีน้ำเงิน ➔ ชมโชว์ Impression Lijiang", descEn: "<strong>Snow Peak & Blue Moon Valley (1 Day 🏔️) :</strong> Lijiang ➔ Glacier Park (4,680m) ➔ Blue Moon Valley ➔ Impression Lijiang Show" },
        { num: "2", descTh: "<strong>เส้นทางสโลว์ไลฟ์ 3 เมืองโบราณ & ชุมชนหิน (2 วัน 🏮) :</strong> คฤหาสน์ตระกูลมู่ ➔ สระมังกรดำ ➔ ซู่เหอ ➔ ไป๋ซา (จิบกาแฟวิวเขาหิมะ) ➔ หมู่บ้านหินยวี่หู", descEn: "<strong>Slow-Life 3 Old Towns & Stone Village (2 Days 🏮) :</strong> Mu Palace ➔ Black Dragon Pool ➔ Shuhe ➔ Baisha ➔ Yuhu Stone Village" }
      ]
    }
  },
};

// ----------------------------------------------------------------------------------
// Media Showcase Data (Sample Photos Gallery & TikTok / Social Discovery Hub)
// ----------------------------------------------------------------------------------
const ATTRACTION_MEDIA_DATA = {
  // === DALI ATTRACTIONS (11 SPOTS) ===
  "dali_0": {
    tiktokQuery: "大理站高铁 Dali Railway Station",
    hashtags: "#DaliStation #DaliTravel #รถไฟความเร็วสูงต้าหลี่ #ต้าหลี่",
    views: "1.8M+ Views",
    douyinQuery: "大理站",
    redbookQuery: "大理高铁站攻略",
    cover: "assets/places/00_dali_railway_station.jpg",
    photos: [
      {
        url: "assets/places/00_dali_railway_station.jpg",
        titleTh: "โถงอาคารผู้โดยสารหน้าสถานี",
        titleEn: "Main Station Facade & Plaza",
        tagTh: "จุดเช็คอินแรก",
        tagEn: "Welcome Hub"
      },
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
        titleTh: "ชานชาลารถไฟความเร็วสูง",
        titleEn: "High-Speed Bullet Train Platform",
        tagTh: "รถไฟหัวกระสุน",
        tagEn: "Bullet Train"
      },
      {
        url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
        titleTh: "จุดขึ้นรถเมล์สาย 8 สู่เมืองโบราณ",
        titleEn: "Bus No. 8 Departure Bay to Old Town",
        tagTh: "จุดต่อรถเมล์",
        tagEn: "Bus Bay"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "ป้ายชื่อสถานีต้าหลี่และวิวเขาชางซาน",
        titleEn: "Dali Station Sign with Mountain View",
        tagTh: "แลนด์มาร์ก",
        tagEn: "Landmark"
      }
    ]
  },
  "dali_1": {
    tiktokQuery: "大理古城 Dali Ancient Town Yunnan",
    hashtags: "#DaliAncientTown #เมืองโบราณต้าหลี่ #DaliTravel #Yunnan",
    views: "6.4M+ Views",
    douyinQuery: "大理古城",
    redbookQuery: "大理古城拍照打卡",
    cover: "assets/places/01_dali_ancient_town.jpg",
    photos: [
      {
        url: "assets/places/01_dali_ancient_town.jpg",
        titleTh: "ประตูเมืองทิศใต้ตอนค่ำ",
        titleEn: "South Gate Night Illuminations",
        tagTh: "มุมมหาชน",
        tagEn: "Must-Snap"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "ถนนคนเดินและร้านน้ำชาโบราณ",
        titleEn: "Pedestrian Street & Tea Shops",
        tagTh: "สตรีทฟู้ด & คาเฟ่",
        tagEn: "Street & Cafe"
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
        titleTh: "หอประตูด้านบนมองเห็นวิวหลังคาเมืองเก่า",
        titleEn: "City Gate View Overlooking Rooftops",
        tagTh: "มุมสูงพาโนรามา",
        tagEn: "Panoramic"
      },
      {
        url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=600&q=80",
        titleTh: "ตรอกซอกซอยบ้านเรือนชาวไป๋โบราณ",
        titleEn: "Bai Traditional Alleyways",
        tagTh: "วิถีชีวิตชาวไป๋",
        tagEn: "Bai Culture"
      }
    ]
  },
  "dali_2": {
    tiktokQuery: "大理喜洲古镇 Xizhou Ancient Town",
    hashtags: "#Xizhou #เมืองโบราณซีโจว #ทุ่งข้าวบาร์เลย์ #ต้าหลี่",
    views: "4.9M+ Views",
    douyinQuery: "喜洲古镇",
    redbookQuery: "喜洲转角楼打卡",
    cover: "assets/places/02_xizhou_ancient_town.jpg",
    photos: [
      {
        url: "assets/places/02_xizhou_ancient_town.jpg",
        titleTh: "ตึกหัวมุมจ้วนเจี่ยวโหลว",
        titleEn: "Zhuanjiao Lou Corner Building",
        tagTh: "มุมไฮไลท์",
        tagEn: "Iconic Corner"
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทุ่งนาข้าวสาลีเขียวขจีริมเมือง",
        titleEn: "Lush Golden Wheat Fields",
        tagTh: "ทุ่งนาซีโจว",
        tagEn: "Wheat Fields"
      },
      {
        url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        titleTh: "โรตีซีโจวปาปาอบโอ่งโบราณ",
        titleEn: "Traditional Xizhou Baba Clay Oven",
        tagTh: "สตรีทฟู้ดต้นตำรับ",
        tagEn: "Xizhou Baba"
      },
      {
        url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
        titleTh: "คฤหาสน์ตระกูลเหยียน ศิลปะชาวไป๋",
        titleEn: "Yan Family Residence Bai Carvings",
        tagTh: "สถาปัตยกรรมไป๋",
        tagEn: "Architecture"
      }
    ]
  },
  "dali_3": {
    tiktokQuery: "沙溪古镇 Shaxi Ancient Town Yunnan",
    hashtags: "#Shaxi #ซาซี #เส้นทางสายม้าชา #SlowLifeDali",
    views: "3.8M+ Views",
    douyinQuery: "沙溪古镇",
    redbookQuery: "沙溪古镇慢生活",
    cover: "assets/places/03_shaxi_ancient_town.jpg",
    photos: [
      {
        url: "assets/places/03_shaxi_ancient_town.jpg",
        titleTh: "สะพานหินโบราณยวี่จินและแม่น้ำเฮยฮุ่ย",
        titleEn: "Yujin Stone Bridge & River",
        tagTh: "สะพานโบราณ",
        tagEn: "Historic Bridge"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        titleTh: "จัตุรัสซื่อเติงเจีย & โรงงิ้วโบราณ",
        titleEn: "Sideng Square & Ancient Stage",
        tagTh: "หัวใจเส้นทางชา-ม้า",
        tagEn: "Tea-Horse Square"
      },
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ร้านกาแฟชิลๆ ริมลำธารต้นหลิว",
        titleEn: "Riverside Cozy Cafe & Willow Trees",
        tagTh: "สโลว์ไลฟ์",
        tagEn: "Slow Life"
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        titleTh: "คาราวานม้าและบรรยากาศยามเช้า",
        titleEn: "Morning Horse Caravan & Mist",
        tagTh: "มนต์เสน่ห์ซาซี",
        tagEn: "Morning Mist"
      }
    ]
  },
  "dali_4": {
    tiktokQuery: "洱海S湾 磻溪村 Panxi S Bay Erhai",
    hashtags: "#ErhaiLake #PanxiSBay #โค้งตัวSปันซี #ทะเลสาบเอ๋อร์ไห่",
    views: "8.7M+ Views",
    douyinQuery: "洱海生态廊道S湾",
    redbookQuery: "洱海S湾拍照机位",
    cover: "assets/places/04_panxi_s_bay.jpg",
    photos: [
      {
        url: "assets/places/04_panxi_s_bay.jpg",
        titleTh: "ทางปั่นจักรยานโค้งตัว S เลียบทะเลสาบ",
        titleEn: "Iconic S-Curve Biking Path",
        tagTh: "จุดเช็คอินไวรัล",
        tagEn: "Viral Spot"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทิวทัศน์ผืนน้ำสะท้อนฟ้าและเทือกเขาชางซาน",
        titleEn: "Mirror Lake Reflection & Cangshan",
        tagTh: "วิวพาโนรามา",
        tagEn: "Panoramic"
      },
      {
        url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
        titleTh: "ปั่นจักรยานรับลมเย็นยามบ่าย",
        titleEn: "Seaside Cycling at Golden Hour",
        tagTh: "ปั่นจักรยานชิลๆ",
        tagEn: "Lake Cycling"
      },
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
        titleTh: "ต้นสนน้ำเรดวูดในทะเลสาบยามแสงเช้า",
        titleEn: "Dawn Mist & Redwood Trees in Water",
        tagTh: "แสงเช้าสีทอง",
        tagEn: "Dawn Glow"
      }
    ]
  },
  "dali_5": {
    tiktokQuery: "大理崇圣寺三塔 Three Pagodas Dali",
    hashtags: "#ThreePagodas #ChongshengTemple #เจดีย์สามองค์ #ต้าหลี่",
    views: "3.5M+ Views",
    douyinQuery: "崇圣寺三塔",
    redbookQuery: "崇圣寺三塔倒影池",
    cover: "assets/places/05_three_pagodas.jpg",
    photos: [
      {
        url: "assets/places/05_three_pagodas.jpg",
        titleTh: "เจดีย์สามองค์สะท้อนสระน้ำมังกร",
        titleEn: "Reflection Pool Iconic View",
        tagTh: "เงาสะท้อนน้ำ",
        tagEn: "Reflection Pool"
      },
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=600&q=80",
        titleTh: "เจดีย์ประธานเฉียนซวินสูงตระหง่าน",
        titleEn: "Qianxun Pagoda Grand Architecture",
        tagTh: "มรดกพันปี",
        tagEn: "Millennium Heritage"
      },
      {
        url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
        titleTh: "พระวิหารใหญ่ฉงเซิ่งฉากหลังเขาชางซาน",
        titleEn: "Grand Temple Hall Against Cangshan",
        tagTh: "วิหารใหญ่",
        tagEn: "Temple Hall"
      },
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
        titleTh: "มุมมองเจดีย์ยามพระอาทิตย์อัสดง",
        titleEn: "Sunset Silhouette of the Pagodas",
        tagTh: "แสงยามเย็น",
        tagEn: "Sunset Glow"
      }
    ]
  },
  "dali_6": {
    tiktokQuery: "大理理想邦 圣托里尼 Ideal State Santorini Dali",
    hashtags: "#DaliSantorini #IdealState #ซานโตรินีต้าหลี่ #รีวิวต้าหลี่",
    views: "7.2M+ Views",
    douyinQuery: "大理理想邦圣托里尼",
    redbookQuery: "大理理想邦拍照",
    cover: "assets/places/06_dali_santorini.jpg",
    photos: [
      {
        url: "assets/places/06_dali_santorini.jpg",
        titleTh: "อาคารสีขาวโค้งสไตล์เมดิเตอร์เรเนียน",
        titleEn: "White Cliffside Greek Terraces",
        tagTh: "มุมถ่ายรูปฮิต",
        tagEn: "Top Snap"
      },
      {
        url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
        titleTh: "สระว่ายน้ำอินฟินิตี้วิวทะเลสาบเอ๋อร์ไห่",
        titleEn: "Cliffside Infinity Pool & Erhai View",
        tagTh: "สระว่ายน้ำลอยฟ้า",
        tagEn: "Infinity Pool"
      },
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
        titleTh: "ซุ้มประตูโค้งและคาเฟ่วิวพาโนรามา",
        titleEn: "Archways & Sunset Terrace Cafe",
        tagTh: "คาเฟ่วิวหลักล้าน",
        tagEn: "Sunset Cafe"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "วิวพระอาทิตย์ตกดินข้ามทะเลสาบสู่เขาชางซาน",
        titleEn: "Spectacular Sunset over Cangshan",
        tagTh: "พระอาทิตย์ตก",
        tagEn: "Sunset View"
      }
    ]
  },
  "dali_7": {
    tiktokQuery: "大理双廊古镇 Shuanglang Ancient Town",
    hashtags: "#Shuanglang #ซวงหลาง #ริมทะเลสาบเอ๋อร์ไห่ #DaliVibes",
    views: "4.5M+ Views",
    douyinQuery: "双廊古镇",
    redbookQuery: "双廊海景民宿",
    cover: "assets/places/07_shuanglang_ancient_town.jpg",
    photos: [
      {
        url: "assets/places/07_shuanglang_ancient_town.jpg",
        titleTh: "ระเบียงคาเฟ่เหนือน้ำทะเลสาบเอ๋อร์ไห่",
        titleEn: "Waterfront Pier & Lake Terraces",
        tagTh: "ระเบียงริมน้ำ",
        tagEn: "Waterfront Terrace"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
        titleTh: "เกาะหนานเจ้าเฟิงฉิงเต่ากลางน้ำ",
        titleEn: "Nanzhao Island Floating Pavilion",
        tagTh: "เกาะกลางน้ำ",
        tagEn: "Island View"
      },
      {
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
        titleTh: "โต๊ะกระจกถ่ายรูปริมน้ำมุมมหาชน",
        titleEn: "Sky Mirror Waterfront Photo Spot",
        tagTh: "มุมกระจกสะท้อนฟ้า",
        tagEn: "Sky Mirror"
      },
      {
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
        titleTh: "เรือไม้โบราณและฝูงนกนางนวล",
        titleEn: "Wooden Fishing Boat & Seagulls",
        tagTh: "นกนางนวลไซบีเรีย",
        tagEn: "Seagulls"
      }
    ]
  },
  "dali_8": {
    tiktokQuery: "大理苍山索道 Cangshan Mountain Dali",
    hashtags: "#CangshanMountain #ภูเขาชางซาน #กระเช้าลอยฟ้า #DaliNature",
    views: "3.9M+ Views",
    douyinQuery: "大理苍山洗马潭",
    redbookQuery: "苍山索道攻略",
    cover: "assets/places/08_cangshan_mountain.jpg",
    photos: [
      {
        url: "assets/places/08_cangshan_mountain.jpg",
        titleTh: "กระเช้าลอยฟ้าลอยผ่านทะเลหมอก",
        titleEn: "Cable Car Soaring Over Cloud Sea",
        tagTh: "กระเช้าลอยฟ้า",
        tagEn: "Cable Car"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "สระน้ำล้างม้าสีครามบนยอดเขาสูง 3,966 ม.",
        titleEn: "Ximatan Alpine Lake (3,966m)",
        tagTh: "สระน้ำบนยอดเขา",
        tagEn: "Alpine Lake"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "เส้นทางเดินป่าบนหน้าผาหยกซีหม่าถาน",
        titleEn: "Jade Cloud Cloud-Level Cliff Path",
        tagTh: "ทางเดินเลียบหน้าผา",
        tagEn: "Cliff Walk"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "วิวมุมสูงมองเห็นทะเลสาบเอ๋อร์ไห่ทั้งผืน",
        titleEn: "Panoramic Aerial View of Erhai",
        tagTh: "วิวมุมสูง 360°",
        tagEn: "360 Panoramic"
      }
    ]
  },
  "dali_9": {
    tiktokQuery: "大理周城扎染 Zhoucheng Tie Dye Dali",
    hashtags: "#Zhoucheng #มัดย้อมคราม #ศิลปะชาวไป๋ #DaliCulture",
    views: "2.6M+ Views",
    douyinQuery: "周城扎染",
    redbookQuery: "周城扎染体验",
    cover: "assets/places/09_zhoucheng_tie_dye.jpg",
    photos: [
      {
        url: "assets/places/09_zhoucheng_tie_dye.jpg",
        titleTh: "ลานตากผ้ามัดย้อมสีครามใต้แสงแดด",
        titleEn: "Courtyard Filled with Indigo Fabrics",
        tagTh: "ลานตากผ้าคราม",
        tagEn: "Indigo Yard"
      },
      {
        url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80",
        titleTh: "คุณยายช่างฝีมือชาวไป๋กำลังเย็บลายผ้า",
        titleEn: "Master Artisan Hand-Stitching Cloth",
        tagTh: "หัตถกรรมมรดกโลก",
        tagEn: "Heritage Craft"
      },
      {
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
        titleTh: "อ่างย้อมครามจากพืชธรรมชาติ",
        titleEn: "Natural Woad Indigo Dyeing Vats",
        tagTh: "สีย้อมธรรมชาติ",
        tagEn: "Natural Dye"
      },
      {
        url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
        titleTh: "อุโมงค์ผ้ามัดย้อมปลิวไสวสำหรับถ่ายภาพ",
        titleEn: "Fabric Wind Tunnel Photo Spot",
        tagTh: "จุดถ่ายภาพยอดฮิต",
        tagEn: "Photo Tunnel"
      }
    ]
  },
  "dali_10": {
    tiktokQuery: "大理寂照庵 Jizhao Nunnery Most Beautiful Nunnery",
    hashtags: "#JizhaoNunnery #วัดแม่ชีจี้จาวอัน #ไม้อวบน้ำ #วัดต้าหลี่",
    views: "4.1M+ Views",
    douyinQuery: "大理寂照庵多肉",
    redbookQuery: "寂照庵吃斋饭",
    cover: "assets/places/10_jizhao_nunnery.jpg",
    photos: [
      {
        url: "assets/places/10_jizhao_nunnery.jpg",
        titleTh: "สวนไม้อวบน้ำอันดับหนึ่งของจีน",
        titleEn: "China's Prettiest Succulent Garden",
        tagTh: "สวนไม้อวบน้ำ",
        tagEn: "Succulents"
      },
      {
        url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
        titleTh: "ลานเรือนกระจกดอกไม้และกระถางดินเผา",
        titleEn: "Glasshouse Planters & Stone Pots",
        tagTh: "ลานเรือนกระจก",
        tagEn: "Glasshouse"
      },
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        titleTh: "อาหารเจชื่อดัง 20 หยวนแสนอร่อย",
        titleEn: "Renowned 20 RMB Vegetarian Buffet",
        tagTh: "อาหารเจเลื่องชื่อ",
        tagEn: "Veggie Feast"
      },
      {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
        titleTh: "มุมจิบชาเงียบสงบใต้ร่มเงาป่าสน",
        titleEn: "Zen Tea Pavilion in Pine Forest",
        tagTh: "มุมสงบเซน",
        tagEn: "Zen Tea"
      }
    ]
  },

  // === SHANGRI-LA ATTRACTIONS (9 SPOTS) ===
  "shangrila_0": {
    tiktokQuery: "香格里拉站 Shangri-La Railway Station",
    hashtags: "#ShangrilaStation #รถไฟแชงกรีล่า #TibetanHSR #高原高铁",
    views: "3.1M+ Views",
    douyinQuery: "香格里拉站",
    redbookQuery: "香格里拉站打卡",
    cover: "assets/places/shangrila_00_station.jpg",
    photos: [
      {
        url: "assets/places/shangrila_00_station.jpg",
        titleTh: "สถาปัตยกรรมสไตล์ทิเบตหน้าสถานี",
        titleEn: "Tibetan Architectural Station Facade",
        tagTh: "ประตูสู่แชงกรีล่า",
        tagEn: "Gateway"
      },
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
        titleTh: "ขบวนรถไฟหัวกระสุนสายลี่เจียง-แชงกรีล่า",
        titleEn: "Lijiang-Shangri-La High Speed Train",
        tagTh: "รถไฟบนที่ราบสูง",
        tagEn: "Highland HSR"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "ลานจัตุรัสและป้ายอักษรทิเบต",
        titleEn: "Tibetan Signage & Mountain Backdrop",
        tagTh: "ป้ายภาษาทิเบต",
        tagEn: "Tibetan Sign"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "วิวเทือกเขาหิมะจากชานชาลา",
        titleEn: "Snow Mountain View from Platform",
        tagTh: "วิวเขาสูง 3,200 ม.",
        tagEn: "High Altitude"
      }
    ]
  },
  "shangrila_1": {
    tiktokQuery: "松赞林寺 Songzanlin Monastery Shangri-La",
    hashtags: "#Songzanlin #วัดซงจ้านหลิน #โปตาลาแห่งยูนนาน #Shangrila",
    views: "7.8M+ Views",
    douyinQuery: "松赞林寺",
    redbookQuery: "松赞林寺旅拍",
    cover: "assets/places/shangrila_01_songzanlin.jpg",
    photos: [
      {
        url: "assets/places/shangrila_01_songzanlin.jpg",
        titleTh: "วิหารทองคำสะท้อนทะเลสาบลาหมู่หยางชั่ว",
        titleEn: "Golden Roofs Mirroring Lake",
        tagTh: "มุมมหาชนทะเลสาบ",
        tagEn: "Lake Mirror"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        titleTh: "บันไดยักษ์ 146 ขั้นสู่พระวิหารเอก",
        titleEn: "146 Steps to the Grand Sanctuary",
        tagTh: "บันไดสู่สวรรค์",
        tagEn: "Grand Steps"
      },
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=600&q=80",
        titleTh: "จิตรกรรมฝาผนังทังการ์โบราณและเสาทอง",
        titleEn: "Ancient Thangka Murals & Gold Pillars",
        tagTh: "จิตรกรรมทิเบต",
        tagEn: "Tibetan Art"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "แสงเย็นสีทองฉาบหลังคาวัดและนกพิราบ",
        titleEn: "Golden Hour Sunset over Gilded Roofs",
        tagTh: "แสงสีทองยามเย็น",
        tagEn: "Sunset Glow"
      }
    ]
  },
  "shangrila_2": {
    tiktokQuery: "独克宗古城 转经筒 Dukezong Ancient Town Shangri-La",
    hashtags: "#Dukezong #เมืองโบราณตู๋เค่อจง #กงล้อมนต์ยักษ์ #แชงกรีล่า",
    views: "6.5M+ Views",
    douyinQuery: "独克宗古城大转经筒",
    redbookQuery: "独克宗古城转经筒",
    cover: "assets/places/shangrila_02_dukezong.jpg",
    photos: [
      {
        url: "assets/places/shangrila_02_dukezong.jpg",
        titleTh: "กงล้อมนต์ทองคำยักษ์หนัก 60 ตัน",
        titleEn: "Giant 60-Ton Golden Prayer Wheel",
        tagTh: "กงล้อมนต์ยักษ์",
        tagEn: "Prayer Wheel"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        titleTh: "จัตุรัสแสงจันทร์ยามค่ำคืนและบ้านไม้ทิเบต",
        titleEn: "Moonlight Square & Tibetan Wooden Houses",
        tagTh: "จัตุรัสแสงจันทร์",
        tagEn: "Moonlight Square"
      },
      {
        url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=600&q=80",
        titleTh: "ตรอกหินโบราณเมืองแห่งแสงจันทร์",
        titleEn: "Moonlight White Stone Cobbled Alleys",
        tagTh: "ถนนหินโบราณพันปี",
        tagEn: "Cobbled Alleys"
      },
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
        titleTh: "มุมสูงวัดกุยซานมองเมืองเก่าทั้งเมือง",
        titleEn: "Guishan Hill Panorama Overlooking Dukezong",
        tagTh: "วิวมุมสูงยอดเขา",
        tagEn: "Hill Panorama"
      }
    ]
  },
  "shangrila_3": {
    tiktokQuery: "普达措国家公园 Potatso National Park Pudacuo",
    hashtags: "#Potatso #ผู่ต๋าชั่ว #ทะเลสาบสู่ตู #อุทยานแห่งชาติจีน",
    views: "5.3M+ Views",
    douyinQuery: "普达措国家公园",
    redbookQuery: "普达措属都湖徒步",
    cover: "assets/places/shangrila_03_potatso.jpg",
    photos: [
      {
        url: "assets/places/shangrila_03_potatso.jpg",
        titleTh: "สะพานไม้เลียบทะเลสาบสู่ตูไห่",
        titleEn: "Shudu Lake Boardwalk & Pristine Forest",
        tagTh: "ทางเดินเลียบทะเลสาบ",
        tagEn: "Lake Boardwalk"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ป่าสนโบราณและเคราฤๅษีตัววัดอากาศบริสุทธิ์",
        titleEn: "Virgin Conifer Forest & Tree Moss",
        tagTh: "ป่าโบราณออกซิเจนบริสุทธิ์",
        tagEn: "Pristine Forest"
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทุ่งหญ้าบิต้าไห่และฝูงจามรีเล็มหญ้า",
        titleEn: "Alpine Meadows with Grazing Yaks",
        tagTh: "ทุ่งหญ้าและจามรี",
        tagEn: "Grazing Yaks"
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        titleTh: "ไอหมอกลอยเหนือน้ำยามเช้า",
        titleEn: "Morning Mystical Vapor over Shudu Lake",
        tagTh: "ไอหมอกยามเช้า",
        tagEn: "Morning Mist"
      }
    ]
  },
  "shangrila_4": {
    tiktokQuery: "纳帕海 依拉草原 Napa Lake Shangri-La",
    hashtags: "#NapaLake #นาพาไห่ #ทุ่งหญ้าอีลา #ถนนสายน้ำ",
    views: "5.7M+ Views",
    douyinQuery: "纳帕海依拉草原",
    redbookQuery: "纳帕海水上公路",
    cover: "assets/places/shangrila_04_napa_lake.jpg",
    photos: [
      {
        url: "assets/places/shangrila_04_napa_lake.jpg",
        titleTh: "ถนนสายน้ำขับรถลุยผืนน้ำ",
        titleEn: "Iconic Water Highway Drive-Through",
        tagTh: "ถนนสายน้ำอันโด่งดัง",
        tagEn: "Water Highway"
      },
      {
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทุ่งหญ้าเขียวขจีและม้าวิ่งเล่นอิสระ",
        titleEn: "Endless Green Prairie & Wild Horses",
        tagTh: "ทุ่งหญ้าอีลา",
        tagEn: "Prairie Horses"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ฝูงนกกระเรียนคอดำอพยพ",
        titleEn: "Migratory Black-Necked Cranes",
        tagTh: "เขตอนุรักษ์นกน้ำ",
        tagEn: "Water Birds"
      },
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
        titleTh: "แสงเย็นสะท้อนทุ่งหญ้าชุ่มน้ำ",
        titleEn: "Golden Glow on Wetlands & Mountains",
        tagTh: "แสงเย็นโรแมนติก",
        tagEn: "Sunset Glow"
      }
    ]
  },
  "shangrila_5": {
    tiktokQuery: "石卡雪山 蓝月山谷 Shika Snow Mountain Blue Moon Valley",
    hashtags: "#ShikaSnowMountain #ภูเขาหิมะสือข่า #กระเช้าลอยฟ้า #ShangrilaSnow",
    views: "3.7M+ Views",
    douyinQuery: "石卡雪山索道",
    redbookQuery: "石卡雪山登顶",
    cover: "assets/places/shangrila_05_shika_snow_mountain.jpg",
    photos: [
      {
        url: "assets/places/shangrila_05_shika_snow_mountain.jpg",
        titleTh: "ยอดเขาหิมะสือข่าสูง 4,449 ม.",
        titleEn: "Shika Peak at 4,449m Elevation",
        tagTh: "ยอดเขาหิมะ 4,449 ม.",
        tagEn: "Snow Peak"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "กระเช้าลอยฟ้ายาวที่สุดในยูนนาน",
        titleEn: "Longest Cable Car Ride in Yunnan",
        tagTh: "กระเช้าลอยฟ้าสองช่วง",
        tagEn: "Cable Car"
      },
      {
        url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
        titleTh: "ธงมนต์ทิเบต 5 สีปลิวไสวบนยอดเขา",
        titleEn: "5-Color Tibetan Prayer Flags on Ridge",
        tagTh: "ธงมนต์ทิเบตบนยอดผา",
        tagEn: "Prayer Flags"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทิวทัศน์ 8 ยอดเขาหิมะศักดิ์สิทธิ์แบบ 360°",
        titleEn: "360 Panorama of 8 Sacred Snow Peaks",
        tagTh: "วิว 8 ยอดเขาศักดิ์สิทธิ์",
        tagEn: "360 Panorama"
      }
    ]
  },
  "shangrila_6": {
    tiktokQuery: "虎跳峡 Tiger Leaping Gorge Yunnan",
    hashtags: "#TigerLeapingGorge #หุบเขาเสือกระโจน #แม่น้ำจินซา #HikingChina",
    views: "9.4M+ Views",
    douyinQuery: "虎跳峡徒步",
    redbookQuery: "虎跳峡壮丽景色",
    cover: "assets/places/shangrila_06_tiger_leaping_gorge.jpg",
    photos: [
      {
        url: "assets/places/shangrila_06_tiger_leaping_gorge.jpg",
        titleTh: "โขดหินเสือกระโจนและกระแสน้ำเชี่ยวกราก",
        titleEn: "Tiger Leaping Rock & Raging Torrent",
        tagTh: "หินเสือกระโจนใจกลางน้ำ",
        tagEn: "Raging Rapids"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ช่องแคบผาสูงชันระหว่างสองเขาหิมะ",
        titleEn: "Sheer Cliffs between Jade Dragon & Haba",
        tagTh: "ช่องเขาที่ลึกที่สุดในโลก",
        tagEn: "Deepest Gorge"
      },
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทางเดินระเบียงไม้เลียบสายน้ำเชี่ยว",
        titleEn: "Boardwalk Along Roaring Rapids",
        tagTh: "ทางเดินเลียบหน้าผา",
        tagEn: "Cliff Boardwalk"
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        titleTh: "ละอองน้ำฟุ้งกระจายและสายรุ้งเหนือลำน้ำ",
        titleEn: "Mist Plumes & Sunlight Rainbow",
        tagTh: "สายรุ้งเหนือน้ำตก",
        tagEn: "Canyon Rainbow"
      }
    ]
  },
  "shangrila_7": {
    tiktokQuery: "白水台 Baishuitai White Water Terraces Shangri-La",
    hashtags: "#Baishuitai #ไป๋สุ่ยไถ #ปามุกคาเลแห่งเมืองจีน #Shangrila",
    views: "4.2M+ Views",
    douyinQuery: "香格里拉白水台",
    redbookQuery: "白水台棉花堡",
    cover: "assets/places/shangrila_07_baishuitai.jpg",
    photos: [
      {
        url: "assets/places/shangrila_07_baishuitai.jpg",
        titleTh: "ระเบียงหินปูนสีขาวดั่งหิมะและสระสีมรกต",
        titleEn: "Natural White Limestone Terraces & Turquoise Pools",
        tagTh: "ปามุกคาเลเมืองจีน",
        tagEn: "White Terraces"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        titleTh: "แอ่งน้ำแร่ขั้นบันไดไล่ระดับ",
        titleEn: "Cascading Tiered Mineral Basins",
        tagTh: "สระน้ำแร่ธรรมชาติ",
        tagEn: "Mineral Basins"
      },
      {
        url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
        titleTh: "ตาน้ำศักดิ์สิทธิ์ต้นกำเนิดวัฒนธรรมตงปา",
        titleEn: "Sacred Source of Dongba Culture",
        tagTh: "ตาน้ำศักดิ์สิทธิ์",
        tagEn: "Sacred Spring"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "วิวเทือกเขาและป่าเขียวขจีโอบล้อม",
        titleEn: "Pristine Forest & Mountain Panorama",
        tagTh: "วิวขุนเขาโอบล้อม",
        tagEn: "Mountain View"
      }
    ]
  },
  "shangrila_8": {
    tiktokQuery: "哈巴雪山 Haba Snow Mountain 5396m",
    hashtags: "#HabaSnowMountain #เขาหิมะฮาปา #ปีนเขาจีน #HabaPeak",
    views: "3.3M+ Views",
    douyinQuery: "哈巴雪山攀登",
    redbookQuery: "哈巴雪山登顶日记",
    cover: "assets/places/shangrila_08_haba_snow_mountain.jpg",
    photos: [
      {
        url: "assets/places/shangrila_08_haba_snow_mountain.jpg",
        titleTh: "ยอดเขาหิมะฮาปาสูงเสียดฟ้า 5,396 ม.",
        titleEn: "Majestic 5,396m Haba Glaciated Peak",
        tagTh: "ยอดเขาหิมะ 5,396 ม.",
        tagEn: "Haba 5396m"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ธารน้ำแข็งและทุ่งหิมะบนสันเขา",
        titleEn: "Glacial Moraines & Mountain Ridge Trail",
        tagTh: "ธารน้ำแข็งพันปี",
        tagEn: "Glacier Trail"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ป่าสนอัลไพน์และดงกุหลาบพันปี",
        titleEn: "Alpine Pine Forests & Rhododendrons",
        tagTh: "ดงกุหลาบพันปี",
        tagEn: "Alpine Forest"
      },
      {
        url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
        titleTh: "แสงทองส่องยอดเขาหิมะยามเช้าตรู่",
        titleEn: "Golden Sunrise Over the Snowy Summit",
        tagTh: "แสงอาทิตย์ทองส่องยอดเขา",
        tagEn: "Sunrise Peak"
      }
    ]
  }
,

  // === LIJIANG ATTRACTIONS (11 SPOTS) ===
  "lijiang_0": {
    tiktokQuery: "丽江站高铁 Lijiang Railway Station",
    hashtags: "#LijiangStation #สถานีรถไฟลี่เจียง #HighSpeedRail #丽江高铁",
    views: "2.5M+ Views",
    douyinQuery: "丽江站",
    redbookQuery: "丽江站出站攻略",
    cover: "assets/places/lijiang_00_station.jpg",
    photos: [
      {
        url: "assets/places/lijiang_00_station.jpg",
        titleTh: "สถาปัตยกรรมสถานีรถไฟลี่เจียงและวิวภูเขาหิมะ",
        titleEn: "Lijiang Station Modern Facade & Snow Mountain",
        tagTh: "สถานีรถไฟลี่เจียง",
        tagEn: "Station Gateway"
      },
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
        titleTh: "ขบวนรถไฟหัวกระสุนสายคุนหมิง-ต้าหลี่-ลี่เจียง",
        titleEn: "Kunming-Dali-Lijiang Bullet Train",
        tagTh: "รถไฟหัวกระสุน",
        tagEn: "Bullet Train"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "ลานหน้าสถานีและจุดต่อรถเข้าสู่เมืองโบราณ",
        titleEn: "Front Square & Transit Depots to Old Town",
        tagTh: "จุดต่อรถ",
        tagEn: "Bus Bay"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ยอดเขาหิมะมังกรหยกมองจากชานชาลา",
        titleEn: "Jade Dragon Snow Mountain Vista from Platform",
        tagTh: "วิวเขาหิมะ",
        tagEn: "Mountain View"
      }
    ]
  },
  "lijiang_1": {
    tiktokQuery: "丽江古城 Lijiang Ancient Town Dayan",
    hashtags: "#LijiangAncientTown #เมืองโบราณลี่เจียง #ต้าเหยียน #丽江古城",
    views: "18.5M+ Views",
    douyinQuery: "丽江古城",
    redbookQuery: "丽江古城拍照攻略",
    cover: "assets/places/lijiang_01_old_town.jpg",
    photos: [
      {
        url: "assets/places/lijiang_01_old_town.jpg",
        titleTh: "กังหันน้ำโบราณคู่และลำธารน้ำใส",
        titleEn: "Landmark Giant Waterwheels & Clear Canals",
        tagTh: "มุมมหาชนกังหันน้ำ",
        tagEn: "Waterwheels"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "สะพานหินต้าสือเฉียวและแสงโคมไฟสะท้อนน้ำ",
        titleEn: "Dashi Stone Bridge & Reflected Lanterns",
        tagTh: "สะพานต้าสือเฉียว",
        tagEn: "Stone Bridge"
      },
      {
        url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=600&q=80",
        titleTh: "ตรอกหินโบราณและแผ่นไม้ขอพรตงปา",
        titleEn: "Cobbled Alleys & Dongba Wishing Wooden Bells",
        tagTh: "กระดิ่งขอพรตงปา",
        tagEn: "Wishing Bells"
      },
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
        titleTh: "บรรยากาศแสงไฟโคมแดงยามค่ำคืนในเมืองโบราณ",
        titleEn: "Enchanting Night Illumination & Red Lanterns",
        tagTh: "มนต์เสน่ห์ราตรี",
        tagEn: "Night Lanterns"
      }
    ]
  },
  "lijiang_2": {
    tiktokQuery: "束河古镇 Shuhe Ancient Town Lijiang",
    hashtags: "#Shuhe #เมืองโบราณซู่เหอ #คาราวานชาม้า #束河古镇",
    views: "8.2M+ Views",
    douyinQuery: "束河古镇",
    redbookQuery: "束河古镇慢生活",
    cover: "assets/places/lijiang_02_shuhe.jpg",
    photos: [
      {
        url: "assets/places/lijiang_02_shuhe.jpg",
        titleTh: "สะพานชิงหลงเฉียวและร้านน้ำชาริมธารน้ำ",
        titleEn: "Historic Qinglong Bridge & Creekside Teahouses",
        tagTh: "สะพานชิงหลง",
        tagEn: "Qinglong Bridge"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "สระน้ำมังกรเก้าเศียร (จิ่วติ่งหลงถาน) น้ำใสราวมรกต",
        titleEn: "Jiuding Longtan Emerald Spring Waters",
        tagTh: "สระมังกรเก้าเศียร",
        tagEn: "Emerald Spring"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทิวต้นหลิวร่มรื่นริมลำธารโบราณ",
        titleEn: "Weeping Willows Shading Ancient Canals",
        tagTh: "ทิวต้นหลิว",
        tagEn: "Willows"
      },
      {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
        titleTh: "คาเฟ่สโลว์ไลฟ์และบรรยากาศจิบชายามบ่าย",
        titleEn: "Laid-Back Afternoon Tea & Coffee Lounge",
        tagTh: "คาเฟ่สโลว์ไลฟ์",
        tagEn: "Slow Teahouse"
      }
    ]
  },
  "lijiang_3": {
    tiktokQuery: "白沙古镇 Baisha Ancient Town Lijiang",
    hashtags: "#Baisha #เมืองโบราณไป๋ซา #จิตรกรรมฝาผนัง #白沙古镇",
    views: "9.6M+ Views",
    douyinQuery: "白沙古镇",
    redbookQuery: "白沙古镇咖啡馆打卡",
    cover: "assets/places/lijiang_03_baisha.jpg",
    photos: [
      {
        url: "assets/places/lijiang_03_baisha.jpg",
        titleTh: "คาเฟ่ดาดฟ้าชมวิวยอดเขาหิมะมังกรหยก",
        titleEn: "Rooftop Cafe Framing Jade Dragon Snow Mountain",
        tagTh: "คาเฟ่วิวเขาหิมะ",
        tagEn: "Rooftop Cafe"
      },
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=600&q=80",
        titleTh: "จิตรกรรมฝาผนังไป๋ซาโบราณยุคราชวงศ์หมิง",
        titleEn: "Ming Dynasty Ancient Baisha Religious Murals",
        tagTh: "ภาพจิตรกรรมฝาผนัง",
        tagEn: "Historic Murals"
      },
      {
        url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=600&q=80",
        titleTh: "วิถีชีวิตชาวน่าซีและการเย็บปักผ้าไหม",
        titleEn: "Traditional Naxi Village Life & Silk Embroidery",
        tagTh: "วิถีชนชาติน่าซี",
        tagEn: "Village Life"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ถนนดินหินกรวดและฉากหลังเทือกเขาหิมะ",
        titleEn: "Rustic Cobbled Streets with Mountain Backdrop",
        tagTh: "ถนนสายชนบท",
        tagEn: "Rustic Lane"
      }
    ]
  },
  "lijiang_4": {
    tiktokQuery: "玉龙雪山 4680 Jade Dragon Snow Mountain",
    hashtags: "#JadeDragonSnowMountain #ภูเขาหิมะมังกรหยก #4680米 #玉龙雪山",
    views: "22.3M+ Views",
    douyinQuery: "玉龙雪山",
    redbookQuery: "玉龙雪山冰川公园攻略",
    cover: "assets/places/lijiang_04_yulong_snow_mountain.jpg",
    photos: [
      {
        url: "assets/places/lijiang_04_yulong_snow_mountain.jpg",
        titleTh: "สะพานไม้แตะขอบฟ้าหลักหมุด 4,680 เมตร",
        titleEn: "Boardwalk Milestone Marker at 4,680m Summit",
        tagTh: "จุดสูงสุด 4,680 ม.",
        tagEn: "Summit 4680m"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "กระเช้าลอยฟ้าใหญ่ทะลุทะเลหมอกสู่ธารน้ำแข็ง",
        titleEn: "Grand Cableway Soaring through Cloud Sea",
        tagTh: "กระเช้าใหญ่ลอยฟ้า",
        tagEn: "Grand Cableway"
      },
      {
        url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
        titleTh: "ธารน้ำแข็งล้านปีสีขาวโพลนตัดกับขอบฟ้า",
        titleEn: "Million-Year Glacier Ice Clinging to Rock Crags",
        tagTh: "ธารน้ำแข็งล้านปี",
        tagEn: "Glacier Ice"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "แสงอาทิตย์ทองสาดส่องสันเขามังกรหยก",
        titleEn: "Golden Sunlight Illuminating the Silver Dragon Ridge",
        tagTh: "แสงทองส่องสันเขา",
        tagEn: "Golden Ridge"
      }
    ]
  },
  "lijiang_5": {
    tiktokQuery: "蓝月谷 Blue Moon Valley Lijiang",
    hashtags: "#BlueMoonValley #หุบเขาพระจันทร์สีน้ำเงิน #ไป๋สุ่ยเหอ #蓝月谷",
    views: "15.4M+ Views",
    douyinQuery: "蓝月谷",
    redbookQuery: "蓝月谷拍照穿搭",
    cover: "assets/places/lijiang_05_blue_moon_valley.jpg",
    photos: [
      {
        url: "assets/places/lijiang_05_blue_moon_valley.jpg",
        titleTh: "ธารน้ำแร่สีฟ้าเทอร์ควอยซ์และเงาสะท้อนเขาหิมะ",
        titleEn: "Turquoise Mineral Glacial Lake Reflecting Snow Peaks",
        tagTh: "บึงอวี้เย่ว์หู",
        tagEn: "Turquoise Lake"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "น้ำตกขั้นบันไดหินปูนสีขาวระยิบระยับ",
        titleEn: "Cascading Stepped White Travertine Terraces",
        tagTh: "น้ำตกขั้นบันไดหินปูน",
        tagEn: "Travertine Falls"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ป่าสนอัลไพน์และทางเดินไม้ริมธารน้ำ",
        titleEn: "Alpine Pine Forests & Lakeshore Wooden Skywalk",
        tagTh: "ทางเดินไม้ริมน้ำ",
        tagEn: "Lakeshore Walk"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        titleTh: "จามรีขาวสง่างามริมสายน้ำเทอร์ควอยซ์",
        titleEn: "Gentle White Yak Wading in Turquoise Shallows",
        tagTh: "จามรีขาว",
        tagEn: "White Yak"
      }
    ]
  },
  "lijiang_6": {
    tiktokQuery: "黑龙潭公园 Black Dragon Pool Lijiang",
    hashtags: "#BlackDragonPool #สระน้ำมังกรดำ #เฮยหลงถาน #黑龙潭",
    views: "6.8M+ Views",
    douyinQuery: "黑龙潭公园",
    redbookQuery: "黑龙潭日照金山机位",
    cover: "assets/places/lijiang_06_black_dragon_pool.jpg",
    photos: [
      {
        url: "assets/places/lijiang_06_black_dragon_pool.jpg",
        titleTh: "มุมโปสการ์ดคลาสสิก: สะพาน 5 ช่อง ศาลาเต๋อยั่วโหลว และเงาเขาหิมะ",
        titleEn: "Classic Postcard: Deyue Pavilion & Snow Reflection",
        tagTh: "มุมมหาชนโปสการ์ด",
        tagEn: "Classic Postcard"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "สะพานหินอ่อนซูฉุ่ยเฉียวทอดยาวข้ามสระน้ำมรกต",
        titleEn: "Suocui 5-Arch Marble Bridge Across Emerald Pool",
        tagTh: "สะพานซูฉุ่ยเฉียว",
        tagEn: "Marble Bridge"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ตาน้ำพุหยกใต้ผืนน้ำใสและฝูงปลาแหวกว่าย",
        titleEn: "Yuquan Spring Bubbling Waters & Vibrant Carp",
        tagTh: "ตาน้ำพุหยก",
        tagEn: "Spring Water"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "แสงสีทองยามเช้าส่องยอดเขาหิมะมังกรหยกสะท้อนผิวน้ำ",
        titleEn: "Sunrise Golden Peak Mirror Reflection",
        tagTh: "แสงทองส่องยอดเขา",
        tagEn: "Sunrise Reflection"
      }
    ]
  },
  "lijiang_7": {
    tiktokQuery: "木府 Mu Palace Lion Hill Lijiang",
    hashtags: "#MuPalace #คฤหาสน์ตระกูลมู่ #เขาสิงโต #ว่านกู่โหลว #木府",
    views: "5.5M+ Views",
    douyinQuery: "木府",
    redbookQuery: "狮子山俯瞰丽江全景",
    cover: "assets/places/lijiang_07_mu_palace.jpg",
    photos: [
      {
        url: "assets/places/lijiang_07_mu_palace.jpg",
        titleTh: "ซุ้มประตูหินจงอี้และท้องพระโรงคฤหาสน์มู่",
        titleEn: "Loyalty Stone Archway & Grand Mu Palace Court",
        tagTh: "คฤหาสน์ตระกูลมู่",
        tagEn: "Mu Palace Court"
      },
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=600&q=80",
        titleTh: "หอว่านกู่โหลว 5 ชั้นบนยอดเขาสิงโต",
        titleEn: "5-Tiered Wooden Wangu Tower on Lion Hill Summit",
        tagTh: "หอว่านกู่โหลว",
        tagEn: "Wangu Tower"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "วิวทะเลหลังคากระเบื้องสีเทาของเมืองเก่าลี่เจียง 360 องศา",
        titleEn: "360-Degree Panoramic Sea of Ancient Gray Rooftiles",
        tagTh: "วิวเมืองเก่า 360 องศา",
        tagEn: "Old Town Panorama"
      },
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
        titleTh: "คาเฟ่เขาสิงโตยามพระอาทิตย์ตกดิน",
        titleEn: "Lion Hill Viewpoint Sunset Coffee Terrace",
        tagTh: "คาเฟ่ชมวิวพระอาทิตย์ตก",
        tagEn: "Sunset Terrace"
      }
    ]
  },
  "lijiang_8": {
    tiktokQuery: "拉市海 Lashi Lake Lijiang",
    hashtags: "#LashiLake #ทะเลสาบลาชื่อไห่ #ขี่ม้าคาราวาน #拉市海",
    views: "4.9M+ Views",
    douyinQuery: "拉市海",
    redbookQuery: "拉市海骑马划船攻略",
    cover: "assets/places/lijiang_08_lashi_lake.jpg",
    photos: [
      {
        url: "assets/places/lijiang_08_lashi_lake.jpg",
        titleTh: "ขี่ม้าแคระตามรอยคาราวานชาม้าและวิวทะเลสาบ",
        titleEn: "Tea Horse Pony Trekking Beside Mirrored Lake",
        tagTh: "ขี่ม้าคาราวาน",
        tagEn: "Horse Trekking"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ล่องแพไม้ไผ่ชมความเงียบสงบของพื้นที่ชุ่มน้ำ",
        titleEn: "Peaceful Bamboo Rafting on Calm Wetland Waters",
        tagTh: "ล่องแพไม้ไผ่",
        tagEn: "Bamboo Rafting"
      },
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        titleTh: "ฝูงนกอพยพและทุ่งหญ้าชุ่มน้ำในฤดูหนาว",
        titleEn: "Winter Migratory Birds & Scenic Marshlands",
        tagTh: "ฝูงนกอพยพ",
        tagEn: "Migratory Birds"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "เส้นทางป่าสนเขาโบราณและเสียงกระดิ่งม้า",
        titleEn: "Pine Forest Mountain Path with Horse Chimes",
        tagTh: "เส้นทางป่าสน",
        tagEn: "Pine Trail"
      }
    ]
  },
  "lijiang_9": {
    tiktokQuery: "印象丽江 Impression Lijiang Live Show",
    hashtags: "#ImpressionLijiang #การแสดงความประทับใจลี่เจียง #จางอี้โหมว #印象丽江",
    views: "11.2M+ Views",
    douyinQuery: "印象丽江",
    redbookQuery: "印象丽江演出必看攻略",
    cover: "assets/places/lijiang_09_impression_lijiang.jpg",
    photos: [
      {
        url: "assets/places/lijiang_09_impression_lijiang.jpg",
        titleTh: "เวทีดินแดงกลางแจ้งและนักแสดงพื้นเมืองกว่า 500 คน",
        titleEn: "Red Amphitheater & 500 Indigenous Performers",
        tagTh: "เวทีกลางแจ้ง 3,100 ม.",
        tagEn: "Open-Air Stage"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ฉากหลังภูเขาหิมะมังกรหยกสูงตระหง่าน",
        titleEn: "Colossal Jade Dragon Snow Massif as Natural Backdrop",
        tagTh: "ฉากหลังธรรมชาติ",
        tagEn: "Natural Backdrop"
      },
      {
        url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=600&q=80",
        titleTh: "กองคาราวานม้าศึกและบทเพลงร้องประสานเสียงดังก้อง",
        titleEn: "Galloping Horses & Resounding Highland Folk Chorals",
        tagTh: "คาราวานม้าศึก",
        tagEn: "War Horses"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "พิธีอธิษฐานขอพรตงปาใต้ท้องฟ้าสีคราม",
        titleEn: "Sacred Dongba Blessing Ritual Beneath Azure Skies",
        tagTh: "พิธีขอพรตงปา",
        tagEn: "Dongba Blessing"
      }
    ]
  },
  "lijiang_10": {
    tiktokQuery: "玉湖村 Yuhu Village Lijiang Joseph Rock",
    hashtags: "#YuhuVillage #หมู่บ้านยวี่หู #โจเซฟร็อค #玉湖村 #洛克故居",
    views: "4.3M+ Views",
    douyinQuery: "玉湖村",
    redbookQuery: "玉湖村石头房子",
    cover: "assets/places/lijiang_10_yuhu_village.jpg",
    photos: [
      {
        url: "assets/places/lijiang_10_yuhu_village.jpg",
        titleTh: "หมู่บ้านหินภูเขาไฟโบราณใต้เงาภูเขาหิมะ",
        titleEn: "Volcanic Stone Village Beneath Snow Slopes",
        tagTh: "หมู่บ้านหินโบราณ",
        tagEn: "Stone Village"
      },
      {
        url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80",
        titleTh: "บ้านพักเดิมของ ดร. โจเซฟ ร็อค นักพฤกษศาสตร์ระดับโลก",
        titleEn: "Former Residence of Botanist Dr. Joseph Rock",
        tagTh: "บ้านพักโจเซฟร็อค",
        tagEn: "Rock Residence"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทะเลสาบหยกยวี่หู ผืนน้ำใสสะท้อนหน้าผาหิมะ",
        titleEn: "Yuhu Lake Glassy Waters Mirroring Giant Precipices",
        tagTh: "ทะเลสาบยวี่หู",
        tagEn: "Yuhu Lake"
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        titleTh: "ทุ่งหญ้าเลี้ยงม้าและบรรยากาศชนบทดั้งเดิม",
        titleEn: "Pastoral Horse Grazing Meadow & Timeless Peace",
        tagTh: "ทุ่งหญ้าเลี้ยงม้า",
        tagEn: "Grazing Meadow"
      }
    ]
  }

};

