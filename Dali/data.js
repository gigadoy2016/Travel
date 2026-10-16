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
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=1200&q=80",
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
