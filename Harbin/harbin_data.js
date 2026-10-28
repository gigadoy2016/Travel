// Harbin Top 20 Attractions Data (Bilingual: Thai / English / Chinese)
// Calibrated for AMAP / OpenStreetMap with pinpoint accuracy in Harbin, Heilongjiang.

const HARBIN_ATTRACTIONS = [
  {
    id: 0,
    nameTh: "สถานีรถไฟความเร็วสูงฮาร์บิน",
    nameZh: "哈尔滨站 (高铁站)",
    pinyin: "Hā'ěrbīn Zhàn",
    nameEn: "Harbin Railway Station (HSR Hub)",
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
    ratingDescTh: "สถานีรถไฟสถาปัตยกรรมอาร์ตนูโวยุโรปสุดคลาสสิก ดั่งสถานีรถไฟในปารีส สะอาด เชื่อมต่อรถไฟใต้ดิน Line 2",
    ratingDescEn: "Stunning European Art Nouveau architecture, modern HSR hub directly linked to Metro Line 2",
    coords: [45.7570, 126.6268],
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
    tags: ["รถไฟความเร็วสูง", "สถานีฮาร์บิน", "จุดต่อรถ", "Art Nouveau", "Harbin Station"],
    shortBulletsTh: [
      "ศูนย์กลางรถไฟหัวกระสุนเชื่อมปักกิ่ง ฉางชุน เสิ่นหยาง และย่าปู้ลี่",
      "ตัวอาคารสร้างด้วยสถาปัตยกรรมยุโรปอาร์ตนูโวคลาสสิกงดงามที่สุดแห่งหนึ่งในจีน",
      "เชื่อมต่อรถไฟใต้ดิน Metro สาย 2 และจุดเรียก DiDi ใจกลางเมือง"
    ],
    shortBulletsEn: [
      "Primary HSR hub connecting Beijing, Changchun, Shenyang, and Yabuli Ski Resort",
      "Masterpiece European Art Nouveau railway architecture with magnificent domes",
      "Direct underground interchange with Harbin Metro Line 2 & taxi dispatch"
    ],
    openingHoursTh: "เปิดบริการตลอด 24 ชั่วโมง (ตามตารางเดินรถไฟ)",
    openingHoursEn: "Open 24 hours daily (follows train schedules)",
    bestTimeTh: "ช่วงเช้าและหัวค่ำเมื่อเปิดไฟประดับอาคารยุโรปสีทองอร่าม",
    bestTimeEn: "Early morning or dusk when exterior facade illuminates in warm gold",
    ticketPriceTh: "เข้าสู่สถานีฟรี (ค่าตั๋วรถไฟตามระยะทาง เช่น ไปย่าปู้ลี่ ~75 หยวน)",
    ticketPriceEn: "Free station access (train fares vary, e.g. Yabuli HSR ~75 RMB)",
    transportTh: {
      fromStation: "ตั้งอยู่ใจกลางเมือง เขตเต้าหลี่ (Daoli District)",
      fromAirport: "นั่ง Airport Shuttle Bus สาย 1 (20 หยวน) หรือ DiDi ประมาณ 45 นาที (100-120 หยวน)",
      inside: "มีฮีตเตอร์อุ่นสบาย ลิฟต์ บันไดเลื่อน และศูนย์บริการนักท่องเที่ยวภาษาอังกฤษ"
    },
    transportEn: {
      fromStation: "Downtown Daoli District terminal hub",
      fromAirport: "Airport Shuttle Bus Line 1 (20 RMB) or DiDi ~45 mins (100-120 RMB)",
      inside: "Fully heated interiors, luggage storage, escalators, and English signage"
    },
    highlightsTh: [
      "สถาปัตยกรรมจำลองสถานีรถไฟฮาร์บินยุค 1903 ผสมผสานศิลปะฝรั่งเศสและรัสเซีย",
      "จุดเริ่มต้นการเดินทางด้วยรถไฟความเร็วสูงสู่ลานสกีระดับโลกย่าปู้ลี่ (เพียง 1 ชม. 15 นาที)",
      "มีพิพิธภัณฑ์ประวัติศาสตร์อันจุงกึน (Ahn Jung-geun Memorial Hall) อยู่ภายในบริเวณสถานี",
      "เดินทางสู่ถนนคนเดินจงหยางและโบสถ์เซนต์โซเฟียด้วยแท็กซี่เพียง 5-8 นาที"
    ],
    highlightsEn: [
      "Faithful 1903 original reconstruction blending French and Russian architectural aesthetics",
      "Fast bullet train access to world-class Yabuli Ski Resort (just 1h 15m)",
      "Hosts the historical Ahn Jung-geun Memorial Hall inside the northern square",
      "Only 5-8 minutes taxi ride to Saint Sophia Cathedral and Zhongyang Street"
    ],
    descriptionTh: "สถานีรถไฟฮาร์บินไม่เพียงเป็นชุมทางคมนาคมความเร็วสูงหลักของมณฑลเฮยหลงเจียง แต่ยังเป็นผลงานสถาปัตยกรรมระดับมาสเตอร์พีซที่สะท้อนประวัติศาสตร์เส้นทางรถไฟสายตะวันออกของจีน (Chinese Eastern Railway) ตัวอาคารโอ่อ่าด้วยลวดลายปูนปั้นสไตล์ยุโรป หลังคาทรงโดม และโคมไฟวินเทจ ให้ความรู้สึกเหมือนกำลังก้าวเข้าสู่สถานีรถไฟในยุโรปยุคคลาสสิก",
    descriptionEn: "Harbin Railway Station is both the primary modern high-speed railway hub of Heilongjiang and a dazzling architectural tribute to the Chinese Eastern Railway history. Designed in quintessential European Art Nouveau style, its arched vaults and vintage chandeliers offer an unforgettable grand arrival."
  },

  {
    id: 1,
    nameTh: "มหาวิหารเซนต์โซเฟีย",
    nameZh: "圣·索菲亚大教堂",
    pinyin: "Shèng Suǒfēiyà Dàjiàotáng",
    nameEn: "Saint Sophia Cathedral",
    category: "russian_heritage",
    categoryLabelTh: "สถาปัตยกรรมรัสเซีย & โบสถ์",
    categoryLabelEn: "Russian Heritage & Church",
    categoryColor: "#b45309",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#92400e",
    doodleIcon: "⛪",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "แลนด์มาร์กอันดับ 1 ของฮาร์บิน โดมหัวหอมสีเขียวมรกต ฝูงนกพิราบบินตัดหิมะ คาเฟ่วินเทจสุดโรแมนติก",
    ratingDescEn: "Harbin's iconic #1 landmark: magnificent Byzantine green onion dome, flying white doves, and winter wonderland romance",
    coords: [45.7686, 126.6278],
    image: "https://images.unsplash.com/photo-1548625361-12503722f42a?auto=format&fit=crop&w=600&q=80",
    tags: ["โบสถ์เซนต์โซเฟีย", "สถาปัตยกรรมรัสเซีย", "แลนด์มาร์กฮาร์บิน", "Byzantine", "Saint Sophia"],
    shortBulletsTh: [
      "โบสถ์ออร์โธดอกซ์รัสเซียที่ใหญ่และสมบูรณ์ที่สุดในเอเชียตะวันออก",
      "จุดถ่ายภาพยอดฮิต: ฝูงนกพิราบบินผ่านโดมหัวหอมสีเขียวเข้มและอิฐแดง",
      "จิบกาแฟรัสเซียในคาเฟ่วินเทจชมวิวโบสถ์ยามค่ำคืนใต้แสงไฟสีทอง"
    ],
    shortBulletsEn: [
      "Largest Eastern Orthodox cathedral in the Far East, built in 1907",
      "Signature winter scene: flock of white doves circling the emerald onion dome",
      "Cozy Russian coffee houses opposite the square with panoramic church vistas"
    ],
    openingHoursTh: "จัตุรัสเปิดตลอด 24 ชม. (ภายในหอศิลป์เปิด 08:30 - 17:00 น.)",
    openingHoursEn: "Square open 24/7 (Internal art gallery 08:30 - 17:00)",
    bestTimeTh: "15:30 - 17:30 น. (ชมแสงทไวไลท์และไฟประดับสีทองตัดกับหิมะ)",
    bestTimeEn: "15:30 - 17:30 (Golden hour into dusk when floodlights turn on)",
    ticketPriceTh: "จัตุรัสภายนอกเข้าฟรี (เข้าชมภายในโบสถ์ 20 หยวน ~100 บาท)",
    ticketPriceEn: "Public square Free (Internal gallery 20 RMB ~100 THB)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟฮาร์บินเพียง 1.5 กม. นั่ง DiDi 8 หยวน หรือเดิน 20 นาที",
      fromAirport: "นั่งรถตู้จากสนามบินประมาณ 45 นาที (100-120 หยวน)",
      inside: "ลานจัตุรัสเป็นพื้นหินแกรนิตกว้างขวาง มีจุดให้อาหารนกพิราบและร้านขายของที่ระลึก"
    },
    transportEn: {
      fromStation: "1.5 km from Harbin Station (DiDi 8 RMB or 20 min walk)",
      fromAirport: "Taxi / private van ~45 min (100-120 RMB)",
      inside: "Spacious plaza with dove feeding spots, heated souvenir boutiques and cafes"
    },
    highlightsTh: [
      "สร้างขึ้นในปี 1907 ด้วยอิฐสีแดงสดผสมผสานศิลปะไบแซนไทน์และรัสเซียดั้งเดิม",
      "ยอดโดมหัวหอมสีเขียวเข้มสูง 53.3 เมตร ถือเป็นสัญลักษณ์เชิงสถาปัตยกรรมของเมือง",
      "ภายในจัดแสดงภาพถ่ายประวัติศาสตร์นครฮาร์บินและโมเดลจำลองเมืองโบราณ",
      "ช่วงฤดูหนาวพื้นจัตุรัสจะปกคลุมด้วยหิมะขาวบริสุทธิ์ ให้บรรยากาศดั่งจัตุรัสแดงในมอสโก"
    ],
    highlightsEn: [
      "Erected in 1907 using vibrant red brick, blending Byzantine and Neo-Russian revival styles",
      "53.3-meter soaring emerald main dome surrounded by four classic tent roofs",
      "Houses the Harbin Architectural Art Gallery displaying rare historic black-and-white photos",
      "Winter snow creates a mesmerizing Red Square Moscow aesthetic with illuminated night lights"
    ],
    descriptionTh: "มหาวิหารเซนต์โซเฟียคือจิตวิญญาณแห่งประวัติศาสตร์และสัญลักษณ์อันโดดเด่นที่สุดของนครฮาร์บิน ก่อสร้างขึ้นเพื่อเป็นโบสถ์ทหารประจำกองทัพรัสเซียในอดีต โครงสร้างอิฐแดงเข้มยอดโดมสีเขียวเข้มสูงตระหง่านตัดกับหิมะขาวโพลนในฤดูหนาว ยามเย็นเมื่อเปิดไฟประดับสีส้มทองอบอุ่น โบสถ์แห่งนี้จะสะกดสายตาทุกคู่ดั่งภาพวาดในเทพนิยายยุโรปโบราณ",
    descriptionEn: "Saint Sophia Cathedral stands as the spiritual and architectural icon of Harbin. Originally constructed in 1907 as an army church for Russian troops, its imposing Neo-Byzantine silhouette, red masonry, and central onion dome create an otherworldly fairy-tale vision amidst white winter snowfall."
  },

  {
    id: 2,
    nameTh: "ถนนคนเดินหินร้อยปีจงหยาง",
    nameZh: "中央大街步行街",
    pinyin: "Zhōngyāng Dàjiē",
    nameEn: "Zhongyang Pedestrian Street",
    category: "historic_street",
    categoryLabelTh: "ถนนคนเดิน & ประวัติศาสตร์",
    categoryLabelEn: "Historic Street & Walkway",
    categoryColor: "#ea580c",
    pastelBg: "#ffedd5",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🏮",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ถนนหินแกรนิตรัสเซียอายุกว่า 120 ปี สถาปัตยกรรมบาโรก ไอศกรีมหม่าเตี๋ยเอ่อร์ และร้านอาหารรัสเซียคลาสสิก",
    ratingDescEn: "120-year-old Russian cobblestone pedestrian avenue lined with baroque architecture, Modern ice popsicles, and borsch",
    coords: [45.7725, 126.6208],
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
    tags: ["ถนนจงหยาง", "ไอศกรีมหม่าเตี๋ยเอ่อร์", "สถาปัตยกรรมยุโรป", "Zhongyang Street", "Cobblestones"],
    shortBulletsTh: [
      "ถนนคนเดินปูด้วยหินก้อนสี่เหลี่ยมสไตล์รัสเซียความยาว 1.4 กิโลเมตร",
      "ชิมไอศกรีมแท่งหม่าเตี๋ยเอ่อร์ (Modern Popsicle) กลางอุณหภูมิติดลบ -15°C",
      "ศูนย์รวมอาคารมรดกสไตล์บาโรก เรอเนสซองส์ และอาร์ตนูโวกว่า 70 หลัง"
    ],
    shortBulletsEn: [
      "1.4-kilometer iconic granite cobblestone boulevard paved in 1924",
      "Must-try: Modern (Madieer) vanilla ice cream stick in sub-zero -15°C winter chill",
      "Living museum of 71 preserved Baroque, Renaissance, and Eclectic buildings"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง (ร้านค้าเปิด 09:30 - 22:00 น.)",
    openingHoursEn: "Open 24/7 (Shops operate 09:30 - 22:00)",
    bestTimeTh: "16:00 - 20:30 น. (เดินชมไฟกลางคืน บรรยากาศโรแมนติกที่สุด)",
    bestTimeEn: "16:00 - 20:30 (Evening illumination creates magical fairy-tale vibes)",
    ticketPriceTh: "เข้าชมฟรีตลอดเส้นทาง",
    ticketPriceEn: "Free public access",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟฮาร์บิน 2 กม. รถไฟใต้ดิน Line 2 ลงสถานี Zhongyangdajie",
      fromAirport: "Airport Bus สาย 3 หรือ DiDi 100 หยวน",
      inside: "ถนนคนเดินปลอดรถยนต์ 100% มีม้านั่งและประติมากรรมน้ำแข็งริมทาง"
    },
    transportEn: {
      fromStation: "2 km from Harbin Station; Metro Line 2 to Zhongyangdajie Station",
      fromAirport: "Airport Shuttle Bus Line 3 or DiDi taxi 100 RMB",
      inside: "100% pedestrianized promenade featuring outdoor ice sculptures and warm rest kiosks"
    },
    highlightsTh: [
      "ปูด้วยหินแกรนิตสี่เหลี่ยมลูกเต๋าที่ในอดีตมีมูลค่าเทียบเท่าก้อนเงินก้อนทอง",
      "ชิมไส้กรอกแดงฮาร์บินรมควันไม้ผลร้อนๆ กลิ่นหอมฟุ้งริมทางเดิน",
      "โรงแรม Modern Hotel (马迭尔宾馆) สร้างขึ้นปี 1906 บรรยากาศวินเทจยุโรปแท้",
      "ทอดยาวจากใจกลางเมืองไปสิ้นสุดที่อนุสาวรีย์สตาลินริมแม่น้ำซงฮัว"
    ],
    highlightsEn: [
      "Paved with durable Russian square granite blocks said to have cost one silver dollar each",
      "Savor authentic piping hot wood-smoked Harbin Red Sausages while strolling in the snow",
      "Visit the iconic Modern Hotel (founded 1906), a historic center of European culture",
      "Connects seamlessly to Flood Control Monument and the frozen Songhua River"
    ],
    descriptionTh: "ถนนคนเดินจงหยาง หรือ 'ถนนสายกลาง' คือเส้นเลือดใหญ่ทางประวัติศาสตร์และการท่องเที่ยวของฮาร์บิน สร้างขึ้นตั้งแต่ปี 1898 เพื่อรองรับชุมชนชาวรัสเซีย ตลอดสองข้างทางเต็มไปด้วยอาคารสถาปัตยกรรมตะวันตกหลากหลายยุคสมัย พื้นถนนปูด้วยหินแกรนิตขัดมันที่ทนทานนับศตวรรษ ในฤดูหนาวจะมีประติมากรรมน้ำแข็งประดับสองข้างทาง พร้อมกลิ่นหอมของขนมปังอบและกาแฟกรุ่น",
    descriptionEn: "Known as 'Eastern Broadway', Zhongyang Pedestrian Street was laid out in 1898. Stretching 1,450 meters, this premier pedestrian avenue showcases a magnificent open-air museum of European architecture. Enjoy the timeless local ritual of biting into a freezing Madieer vanilla popsicle while wrapped in heavy down coats."
  },

  {
    id: 3,
    nameTh: "คฤหาสน์รัสเซียวอลกา",
    nameZh: "伏尔加庄园",
    pinyin: "Fú'ěrjiā Zhuāngyuán",
    nameEn: "Volga Manor",
    category: "russian_heritage",
    categoryLabelTh: "สถาปัตยกรรมรัสเซีย & ปราสาท",
    categoryLabelEn: "Russian Heritage & Castle",
    categoryColor: "#7c3aed",
    pastelBg: "#f5f3ff",
    badgeColor: "#ddd6fe",
    doodleBorderColor: "#6d28d9",
    doodleIcon: "🏰",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "อาณาจักรปราสาทและโบสถ์ไม้รัสเซียท่ามกลางป่าสนขาว จิบวอดก้าในแก้วน้ำแข็งแท้ และสไลเดอร์หิมะจากยอดปราสาท",
    ratingDescEn: "Russian fairy-tale manor with wooden churches, snow tubing from castle towers, and ice-glass vodka tasting",
    coords: [45.6415, 126.9175],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    tags: ["วอลกามาเนอร์", "ปราสาทรัสเซีย", "วอดก้าแก้วน้ำแข็ง", "Snow Tubing", "Volga Manor"],
    shortBulletsTh: [
      "อาณาจักรวัฒนธรรมรัสเซียขนาด 600,000 ตร.ม. ริมแม่น้ำอาซีเค่อกลายเป็นน้ำแข็ง",
      "ลิ้มลองวอดก้ารัสเซียในแก้วที่แกะจากก้อนน้ำแข็งแท้ ณ ปราสาทไวน์วอดก้า",
      "สนุกกับสไลเดอร์หิมะ (Snow Tubing) ทิ้งตัวลงจากหอคอยปราสาทสีทอง"
    ],
    shortBulletsEn: [
      "600,000 sqm Russian cultural realm along the frozen Ashikhe River",
      "Sip chilled Russian vodka served in hand-carved ice chalices inside the Vodka Castle",
      "Thrilling snow tubing ride spiraling down from an authentic European fairy-tale tower"
    ],
    openingHoursTh: "ทุกวัน 08:30 - 17:00 น. (ฤดูหนาว)",
    openingHoursEn: "Daily 08:30 - 17:00 (Winter season)",
    bestTimeTh: "10:00 - 15:00 น. (แดดอบอุ่น แสงสะท้อนหิมะถ่ายภาพสวยที่สุด)",
    bestTimeEn: "10:00 - 15:00 (Bright winter sunshine illuminating snowy birch forests)",
    ticketPriceTh: "ค่าเข้าชมฤดูหนาวประมาณ 150-165 หยวน (~750-820 บาท รวมกิจกรรมหิมะ)",
    ticketPriceEn: "Winter entry ~150-165 RMB (~750-820 THB including snow activities)",
    transportTh: {
      fromStation: "ห่างจากตัวเมืองไปทางตะวันออกเฉียงใต้ 30 กม. แนะนำเหมารถตู้ VIP หรือ DiDi 80-100 หยวน",
      fromAirport: "นั่งรถตู้ส่วนตัวประมาณ 1 ชม.",
      inside: "มีรถรางชมวิว เรือลากเลื่อนหิมะ และร้านอาหารรัสเซียระดับพรีเมียม"
    },
    transportEn: {
      fromStation: "30 km southeast of city center; Private van or DiDi ~80-100 RMB",
      fromAirport: "Private vehicle ~1 hour",
      inside: "Scenic snow shuttles, horse-drawn sleighs, and fine Russian castle dining"
    },
    highlightsTh: [
      "โบสถ์ไม้เซนต์นิโคลัส (St. Nicholas Church) สร้างจำลองด้วยเทคนิคเข้าเดือยไม้ไร้ตะปู 1:1",
      "ปราสาทปาฟลอฟ (Pavlov Castle) ริมทะเลสาบน้ำแข็งสุดอลังการ",
      "การแสดงระบำพื้นเมืองรัสเซียแท้โดยศิลปินชาวยุโรป",
      "บรรยากาศเงียบสงบ ไร้ฝูงชนแออัด ดุจหลุดเข้าไปในชนบทชนชั้นสูงของรัสเซีย"
    ],
    highlightsEn: [
      "St. Nicholas Church accurately reconstructed 1:1 without a single metallic nail",
      "Pavlov Castle standing regally over frozen waterways and silver birch groves",
      "Live authentic Russian folk dance and vocal performances by European artists",
      "Uncrowded pastoral serenity evoking imperial Russian estate aristocracy"
    ],
    descriptionTh: "คฤหาสน์วอลกา (Volga Manor) ตั้งอยู่ชานเมืองฮาร์บินริมแม่น้ำอาซีเค่อ เป็นสถานที่รวบรวมสถาปัตยกรรมรัสเซียคลาสสิกที่เคยสาบสูญไปในอดีตกว่า 30 หลัง ท่ามกลางทุ่งหิมะสีขาวและป่าต้นเบิร์ชสีเงิน ไฮไลท์ห้ามพลาดคือการเข้าชมปราสาทไวน์วอดก้า ชิมเครื่องดื่มในแก้วน้ำแข็ง และขึ้นไปเล่นสไลเดอร์หิมะลงมาจากยอดปราสาทสูง",
    descriptionEn: "Volga Manor is a vast Russian-themed pastoral estate situated along the Ashikhe River. Recreating over 30 historic Russian masterpieces that once graced Harbin, the estate transforms into a breathtaking winter dreamscape featuring ice bars, church spires, and peaceful birch woodlands."
  },

  {
    id: 4,
    nameTh: "สวนเสือไซบีเรีย",
    nameZh: "东北虎林园",
    pinyin: "Dōngběi Hǔ Lín Yuán",
    nameEn: "Siberian Tiger Park",
    category: "wildlife_nature",
    categoryLabelTh: "สัตว์ป่า & ธรรมชาติหิมะ",
    categoryLabelEn: "Wildlife & Nature",
    categoryColor: "#059669",
    pastelBg: "#d1fae5",
    badgeColor: "#a7f3d0",
    doodleBorderColor: "#047857",
    doodleIcon: "🐅",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "สวนเพาะพันธุ์เสือไซบีเรียที่ใหญ่ที่สุดในโลก นั่งรถบัสกรงนิรภัยให้อาหารพญาเสือตัวโตขนฟูกลางทุ่งหิมะ",
    ratingDescEn: "World's largest Siberian tiger conservation park: ride protected safari buses across snowy plains",
    coords: [45.8152, 126.6358],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    tags: ["สวนเสือไซบีเรีย", "เสือตงเป่ย", "ให้อาหารเสือ", "Siberian Tiger", "Wildlife"],
    shortBulletsTh: [
      "ศูนย์อนุรักษ์เสือไซบีเรียสายพันธุ์แท้กว่า 1,000 ตัวกลางหิมะธรรมชาติ",
      "นั่งรถบัสติดตะแกรงนิรภัยพิเศษลุยลานหิมะ สัมผัสเสือยักษ์อย่างปลอดภัย",
      "สัมผัสความยิ่งใหญ่ของราชาแห่งผืนป่าฤดูหนาวขนหนานุ่มฟู"
    ],
    shortBulletsEn: [
      "World's premier breeding base safeguarding over 1,000 purebred Siberian tigers",
      "Caged safari jeep adventure penetrating deep into natural snow enclosures",
      "Witness majestic apex predators thriving with thick, luscious winter coats"
    ],
    openingHoursTh: "ทุกวัน 08:30 - 16:30 น. (รอบสุดท้าย 16:00 น.)",
    openingHoursEn: "Daily 08:30 - 16:30 (Last entry 16:00)",
    bestTimeTh: "09:30 - 11:30 น. (ช่วงเวลาเสือตื่นตัวและกินอาหารเช้า)",
    bestTimeEn: "09:30 - 11:30 (Peak tiger activity and feeding sessions)",
    ticketPriceTh: "บัตรเข้าชมรวมรถบัสนิรภัย 110-130 หยวน (~550-650 บาท)",
    ticketPriceEn: "Admission with safety safari vehicle ~110-130 RMB (~550-650 THB)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 12 กม. นั่ง DiDi ข้ามสะพานแม่น้ำซงฮัว 25-35 หยวน",
      fromAirport: "นั่งรถตู้ประมาณ 50 นาที",
      inside: "มีทางเดินสะพานไม้ยกสูงมีรั้วกั้น และรถซาฟารีกระจกนิรภัย"
    },
    transportEn: {
      fromStation: "12 km from city center across Songhua River; DiDi ~25-35 RMB",
      fromAirport: "Taxi / private van ~50 mins",
      inside: "Elevated covered wooden catwalks and reinforced safari transport"
    },
    highlightsTh: [
      "เสือไซบีเรียเป็นเสือสายพันธุ์ใหญ่ที่สุดในโลก ปรับตัวเข้ากับความหนาว -30°C ได้อย่างสมบูรณ์แบบ",
      "สามารถซื้อเนื้อสดป้อนให้อาหารเสือผ่านช่องคีบนิรภัยจากในรถ",
      "ชมลูกเสือแรกเกิดน่ารักในอาคารอนุบาลสัตว์ป่า",
      "ทิวทัศน์เสือวิ่งไล่ล่ากลางป่าสนขาวหิมะโพลน เป็นภาพที่หาดูได้เฉพาะที่นี่"
    ],
    highlightsEn: [
      "Largest wild cat species on Earth, naturally adapted to extreme sub-zero Siberian cold",
      "Optional interactive meat-feeding experience using safety feeding tongs aboard the vehicle",
      "Adorable nursery building showcasing young tiger cubs and lynx",
      "Dramatic sight of massive big cats leaping effortlessly through fresh powdery snow"
    ],
    descriptionTh: "สวนเสือไซบีเรีย (Harbin Siberian Tiger Park) ตั้งอยู่ริมฝั่งเหนือของแม่น้ำซงฮัว ก่อตั้งขึ้นเพื่ออนุรักษ์และเพาะพันธุ์พญาเสือไซบีเรีย (เสือตงเป่ย) ที่ใกล้สูญพันธุ์ นักท่องเที่ยวจะได้นั่งรถบัสตาข่ายเหล็กนิรภัยเข้าไปในทุ่งหิมะกว้างใหญ่ ชมฝูงเสือไซบีเรียตัวมหึมาวิ่งเล่น นอนเกลือกกลิ้งบนหิมะ และกระโดดล่าอาหารอย่างใกล้ชิด",
    descriptionEn: "Situated north of the Songhua River, the Siberian Tiger Park spans over 1.4 million square meters dedicated to preserving the endangered Manchurian tiger. Visitors board specially fortified safari vehicles to traverse expansive snow fields where hundreds of majestic predators roam freely."
  },

  {
    id: 5,
    nameTh: "สวนเกาะพระอาทิตย์",
    nameZh: "太阳岛风景区",
    pinyin: "Tàiyáng Dǎo Fēngjǐngqū",
    nameEn: "Sun Island Scenic Area",
    category: "ice_snow",
    categoryLabelTh: "เทศกาลน้ำแข็ง & หิมะ",
    categoryLabelEn: "Ice & Snow Expo",
    categoryColor: "#0284c7",
    pastelBg: "#e0f2fe",
    badgeColor: "#bae6fd",
    doodleBorderColor: "#0369a1",
    doodleIcon: "⛄",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ศูนย์กลางงานประติมากรรมแกะสลักหิมะระดับนานาชาติ ประติมากรรมหิมะขนาดยักษ์สูงหลายสิบเมตร ละเอียดประณีต",
    ratingDescEn: "Epicenter of Harbin's International Snow Sculpture Art Expo featuring colossal master-carved snow giants",
    coords: [45.7905, 126.5935],
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=600&q=80",
    tags: ["เกาะพระอาทิตย์", "แกะสลักหิมะ", "Sun Island", "Snow Sculpture", "Taiyangdao"],
    shortBulletsTh: [
      "แหล่งจัดแสดงงานศิลปะแกะสลักหิมะระดับนานาชาติที่ใหญ่ที่สุดในโลก",
      "ชมประติมากรรมหิมะขนาดยักษ์ความยาวกว่า 100 เมตร สูงเทียมตึก",
      "นั่งกระเช้าลอยฟ้าข้ามแม่น้ำซงฮัวจากฝั่งเมืองเก่ามาลงที่เกาะได้โดยตรง"
    ],
    shortBulletsEn: [
      "World's largest venue for international competitive snow sculpting artistry",
      "Gargantuan pure-white snow monoliths spanning over 100 meters in length",
      "Direct connection via the panoramic Songhua River Cableway from Stalin Park"
    ],
    openingHoursTh: "ทุกวัน 08:30 - 17:00 น. (ช่วงนิทรรศการหิมะ)",
    openingHoursEn: "Daily 08:30 - 17:00 (During Snow Expo)",
    bestTimeTh: "10:30 - 14:30 น. (แดดส่ององค์หิมะสว่างจ้า ถ่ายภาพเห็นรายละเอียดชัดเจน)",
    bestTimeEn: "10:30 - 14:30 (High noon sunlight accentuates delicate snow chiseled details)",
    ticketPriceTh: "ค่าเข้าชมนิทรรศการแกะสลักหิมะฤดูหนาว ~198-220 หยวน (~990-1,100 บาท)",
    ticketPriceEn: "Winter Snow Sculpture Expo ~198-220 RMB (~990-1,100 THB)",
    transportTh: {
      fromStation: "นั่ง Metro Line 2 ข้ามแม่น้ำลงสถานี Taiyangdao หรือนั่งกระเช้าลอยฟ้า",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "มีรถรางพลังงานไฟฟ้าชมวิวรอบเกาะ และจุดจิบชากาแฟอุ่นๆ"
    },
    transportEn: {
      fromStation: "Harbin Metro Line 2 direct to Taiyangdao Station or River Cableway",
      fromAirport: "Private van ~45 mins",
      inside: "Heated sightseeing electric shuttles and indoor resting pavilions"
    },
    highlightsTh: [
      "ประติมากรรมแกะสลักหิมะจากศิลปินชั้นนำทั่วโลก ละเอียดอ่อนช้อยดั่งหินอ่อน",
      "บรรยากาศขาวบริสุทธิ์ 360 องศา ไร้แสงไฟสังเคราะห์ เน้นความงามตามธรรมชาติ",
      "มีหมู่บ้านรัสเซียจำลองโบราณ (Russian Style Town) ซ่อนอยู่บนเกาะ",
      "เป็นส่วนสำคัญของเทศกาลน้ำแข็งฮาร์บินควบคู่กับ Ice and Snow World"
    ],
    highlightsEn: [
      "Exquisite snow statues crafted by renowned international artists from 30+ nations",
      "100% pure snow-white aesthetics celebrating natural daylight sculpting nuances",
      "Features a charming historic Russian Village enclave with wooden dachas",
      "Essential twin pillar of Harbin's winter festivals alongside Ice and Snow World"
    ],
    descriptionTh: "เกาะพระอาทิตย์ (Taiyangdao) คือเกาะขนาดใหญ่กลางแม่น้ำซงฮัว ในช่วงฤดูหนาวจะถูกเนรมิตให้เป็น 'โลกแห่งประติมากรรมหิมะขาวบริสุทธิ์' ศิลปินจากทั่วทุกมุมโลกจะมาร่วมแข่งขันสร้างสรรค์ผลงานแกะสลักหิมะขนาดยักษ์ ทั้งรูปเทพนิยาย บุคคลสำคัญ และสถาปัตยกรรมระดับโลก ถือเป็นจุดเช็คอินที่ห้ามพลาดสำหรับผู้ที่รักงานศิลปะและการถ่ายภาพ",
    descriptionEn: "Sun Island is an expansive island oasis nestled in the Songhua River. In winter, it transforms into an awe-inspiring open-air gallery of massive snow sculptures during the International Snow Sculpture Art Expo, celebrating pristine natural snow without artificial colored lighting."
  },

  {
    id: 6,
    nameTh: "สะพานรถไฟประวัติศาสตร์ปินโจวแม่น้ำซงฮัว",
    nameZh: "中东铁路第一桥 (滨州铁路桥)",
    pinyin: "Zhōngdōng Tiělù Dìyī Qiáo",
    nameEn: "Binzhou Railway Bridge (Songhua River Historic Bridge)",
    category: "historic_street",
    categoryLabelTh: "สะพานประวัติศาสตร์ & วิวแม่น้ำ",
    categoryLabelEn: "Historic Bridge & Scenic View",
    categoryColor: "#ea580c",
    pastelBg: "#ffedd5",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🌉",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "สะพานเหล็กทางรถไฟ 120 ปี ปรับเป็นทางเดินชมวิว มีพื้นกระจกใสชมธารน้ำแข็งและพระอาทิตย์ตกดินสีส้มทอง",
    ratingDescEn: "120-year-old railway truss bridge converted into a walking skyway with glass floors overlooking frozen river sunsets",
    coords: [45.7795, 126.6350],
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    tags: ["สะพานปินโจว", "แม่น้ำซงฮัว", "พื้นกระจก", "พระอาทิตย์ตก", "Binzhou Bridge"],
    shortBulletsTh: [
      "สะพานเหล็กข้ามแม่น้ำซงฮัวแห่งแรก สร้างขึ้นตั้งแต่ปี 1900 โดยวิศวกรรัสเซีย",
      "ปัจจุบันปรับเป็นทางเดินชมวิวคนเดิน มีจุดพื้นกระจกมองเห็นธารน้ำแข็งด้านล่าง",
      "จุดชมพระอาทิตย์ตกดิน (Sunset) ที่โรแมนติกและสวยที่สุดในตัวเมืองฮาร์บิน"
    ],
    shortBulletsEn: [
      "First steel railway bridge spanning Songhua River, engineered by Russia in 1900",
      "Pedestrianized heritage parkway featuring tempered glass viewing panels",
      "Unrivaled vantage point to watch the crimson winter sun melt into the frozen horizon"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง (ไฟประดับสะพานเปิด 16:30 - 22:00 น.)",
    openingHoursEn: "Open 24/7 (Bridge architectural lighting 16:30 - 22:00)",
    bestTimeTh: "15:30 - 17:00 น. (ชมแสงพระอาทิตย์ตกดินสะท้อนผืนน้ำแข็ง)",
    bestTimeEn: "15:30 - 17:00 (Sunset golden hour over the ice)",
    ticketPriceTh: "เข้าชมและเดินข้ามฟรี 100%",
    ticketPriceEn: "100% Free public access",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 3 กม. เดินต่อมาจากสวนสตาลินได้เลย",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "มีทางลาดคนพิการและพื้นยางกันลื่นตลอดความยาวสะพาน 1,050 เมตร"
    },
    transportEn: {
      fromStation: "3 km from Harbin Station; easily walked from Stalin Park / Zhongyang St.",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Gentle access ramps, anti-slip rubber floor runners spanning all 1,050 meters"
    },
    highlightsTh: [
      "สถาปัตยกรรมโครงสร้างเหล็กถักสีเขียวมะกอกวินเทจ ความยาวกว่า 1 กิโลเมตร",
      "รางรถไฟประวัติศาสตร์สายตะวันออกของจีนที่จักรพรรดิและผู้นำระดับโลกเคยเดินทางผ่าน",
      "ช่วงกลางสะพานมีช่องกระจกใสบานใหญ่ มองเห็นแผ่นน้ำแข็งและกระแสน้ำเย็นเฉียบ",
      "มองเห็นกระเช้าลอยฟ้าและเส้นขอบฟ้าเมืองฮาร์บินแบบพาโนรามา 360 องศา"
    ],
    highlightsEn: [
      "Vintage olive-green steel truss engineering spanning 1,050 meters across the river",
      "Historic tracks of the Chinese Eastern Railway that carried world leaders and emperors",
      "Several reinforced glass observation pits revealing the jagged frozen river ice beneath",
      "Spectacular 360-degree panorama of modern Harbin skylines and river ropeway cabins"
    ],
    descriptionTh: "สะพานรถไฟปินโจว หรือที่ชาวบ้านเรียกว่า 'สะพานเหล็กเก่า' (Old Glass Bridge) สร้างขึ้นตั้งแต่ปี 1900 เป็นสะพานข้ามแม่น้ำซงฮัวแห่งแรก หลังจากปลดประจำการจากการเดินรถไฟ ได้ถูกปรับปรุงให้เป็นสวนสาธารณะลอยฟ้าสำหรับคนเดิน ถือเป็นจุดชมวิวแม่น้ำซงฮัวที่งดงามที่สุด โดยเฉพาะยามเย็นที่ดวงอาทิตย์สีส้มทอแสงตัดกับโครงเหล็กและผืนน้ำแข็ง",
    descriptionEn: "Constructed between 1898 and 1901 by the Russian Empire, the Binzhou Railway Bridge was the very first bridge across the mighty Songhua River. Now retired and transformed into a pedestrian promenade with glass walkways, it offers the city's most breathtaking winter sunset views."
  },

  {
    id: 7,
    nameTh: "ลานกิจกรรมน้ำแข็งและหิมะแม่น้ำซงฮัว",
    nameZh: "松花江冰雪嘉年华",
    pinyin: "Sōnghuā Jiāng Bīngxuě Jiāniánhuá",
    nameEn: "Songhua River Ice & Snow Carnival",
    category: "ice_snow",
    categoryLabelTh: "เทศกาลน้ำแข็ง & กิจกรรมหิมะ",
    categoryLabelEn: "Ice Carnival & Snow Fun",
    categoryColor: "#0284c7",
    pastelBg: "#e0f2fe",
    badgeColor: "#bae6fd",
    doodleBorderColor: "#0369a1",
    doodleIcon: "⛸️",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "แม่น้ำทั้งสายกลายเป็นลานน้ำแข็งหนา 1 เมตร แคร่เลื่อนหิมะ ปั่นจักรยานน้ำแข็ง ชมชาวบ้านตัดก้อนน้ำแข็งยักษ์",
    ratingDescEn: "Entire frozen river becomes a giant winter playground: ice bumper cars, sleds, and traditional ice harvesting",
    coords: [45.7790, 126.6185],
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
    tags: ["แม่น้ำซงฮัว", "ลานน้ำแข็ง", "เลื่อนหิมะ", "ตัดน้ำแข็ง", "Songhua Carnival"],
    shortBulletsTh: [
      "แม่น้ำซงฮัวกลายเป็นผืนน้ำแข็งยักษ์กว้างขวาง เดินเท้าลงไปบนแม่น้ำได้ 100%",
      "สนุกกับกิจกรรมฤดูหนาว: จักรยานน้ำแข็ง, รถบัมพ์น้ำแข็ง, บานาน่าโบ๊ทลากบนหิมะ",
      "ชมพิธีและวิถีชีวิตการตัดก้อนน้ำแข็งยักษ์ (Ice Harvesting) สดๆ จากแม่น้ำ"
    ],
    shortBulletsEn: [
      "Massive natural frozen riverbed thick enough to support thousands of visitors safely",
      "Thrilling ice activities: ice bicycles, drift carts, snow banana boats, and traditional sleds",
      "Witness authentic historical Songhua River ice harvesting operations in early winter"
    ],
    openingHoursTh: "ทุกวัน 09:00 - 21:00 น. (ช่วงแม่น้ำเป็นน้ำแข็ง ธ.ค. - ก.พ.)",
    openingHoursEn: "Daily 09:00 - 21:00 (During frozen river season Dec - Feb)",
    bestTimeTh: "14:00 - 18:00 น. (เล่นกิจกรรมยามบ่ายต่อเนื่องถึงชมไฟประดับยามค่ำ)",
    bestTimeEn: "14:00 - 18:00 (Afternoon snow sports shifting into dazzling night lights)",
    ticketPriceTh: "ลงเดินเล่นบนลานน้ำแข็งฟรี (เครื่องเล่นคิดแยกชิ้นละ 20-50 หยวน)",
    ticketPriceEn: "Free access to walk on frozen river (Rides cost 20-50 RMB each)",
    transportTh: {
      fromStation: "เดินจากปลายถนนคนเดินจงหยาง ทะลุสวนสตาลินลงสู่แม่น้ำได้ทันที",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "มีบันไดทางลงแม่น้ำพร้อมแผ่นยางกันลื่น และจุดเช่าอุปกรณ์กันหนาว"
    },
    transportEn: {
      fromStation: "Directly accessible by walking to the northern end of Zhongyang Street",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Ramped stairs with non-slip carpets, hot drink igloos, and equipment rentals"
    },
    highlightsTh: [
      "สัมผัสประสบการณ์เดินบนแม่น้ำน้ำแข็งสายประวัติศาสตร์ที่มีน้ำไหลอยู่ใต้แผ่นน้ำแข็งหนา",
      "กิจกรรมแคร่เลื่อนโบราณตงเป่ย (Ice Sled) ใช้ไม้สองอันไถลไปข้างหน้าอย่างเพลิดเพลิน",
      "ลานสเก็ตน้ำแข็งธรรมชาติกลางแจ้งขนาดใหญ่ที่สุดในฮาร์บิน",
      "มีเต็นท์อุ่นและร้านขายอาหารสตรีทฟู้ดร้อนๆ อาทิ มันเผา ข้าวโพดต้ม และชาร้อน"
    ],
    highlightsEn: [
      "Thrilling feeling of walking directly atop a historic river frozen 1-meter solid",
      "Authentic Dongbei wooden hand-spiked ice sleds for nostalgic family entertainment",
      "Massive open-air natural ice skating rinks with skate rentals",
      "Warming igloo tents serving piping roasted sweet potatoes and hot herbal tea"
    ],
    descriptionTh: "ในฤดูหนาว แม่น้ำซงฮัวที่กว้างใหญ่จะกลายสภาพเป็นแผ่นน้ำแข็งหนาทึบและกลายเป็น 'ลานหิมะและน้ำแข็งกลางแจ้ง' ขนาดยักษ์ของชาวฮาร์บิน นักท่องเที่ยวสามารถเดินลงไปบนแม่น้ำ สัมผัสความมหัศจรรย์ของธรรมชาติ เพลิดเพลินกับกิจกรรมกีฬาฤดูหนาวพื้นบ้าน และชมวิถีชีวิตการตัดน้ำแข็งก้อนยักษ์ที่นำไปใช้สร้างปราสาทน้ำแข็ง",
    descriptionEn: "When deep winter arrives, the Songhua River freezes into a solid sheets of turquoise and crystalline ice. The river surface transforms into the Songhua River Ice and Snow Carnival, an enormous civic playground filled with laughter, ice-skating, sled races, and traditional Dongbei winter revelry."
  },

  {
    id: 8,
    nameTh: "ชุมชนวัฒนธรรมบาโรกจีนโบราณ เหล่าเต้าว่าย",
    nameZh: "中华巴洛克历史文化区 (老道外)",
    pinyin: "Zhōnghuá Bāluòkè (Lǎo Dàowài)",
    nameEn: "Chinese Baroque Historic Block (Lao Daowai)",
    category: "historic_street",
    categoryLabelTh: "สถาปัตยกรรมบาโรก & ย่านอาหารเก่าแก่",
    categoryLabelEn: "Baroque Heritage & Heritage Food",
    categoryColor: "#ea580c",
    pastelBg: "#ffedd5",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🏯",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "สถาปัตยกรรมบาโรกตะวันตกผสมผสานเรือนสี่ประสานจีนดั้งเดิม แหล่งกำเนิดร้านกัวเปาโร่ว 100 ปี Laochushi",
    ratingDescEn: "World's largest Chinese Baroque complex: western facade with traditional Chinese courtyards & 100-year food legends",
    coords: [45.7875, 126.6635],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    tags: ["บาโรกจีน", "เหล่าเต้าว่าย", "กัวเปาโร่ว", "Laochushi", "Chinese Baroque"],
    shortBulletsTh: [
      "กลุ่มอาคารสไตล์ Chinese Baroque ที่ใหญ่และสมบูรณ์ที่สุดในโลก",
      "หน้าตึกเป็นปูนปั้นบาโรกยุโรป แต่ด้านในเป็นเรือนสี่ประสาน (ซื่อเหอย่วน) จีนโบราณ",
      "แหล่งรวมร้านอาหารระดับตำนาน 100 ปี โดยเฉพาะร้านต้นกำเนิดหมูเปรี้ยวหวาน 'กัวเปาโร่ว'"
    ],
    shortBulletsEn: [
      "World's largest and most intact cluster of Chinese Baroque architecture",
      "Western Baroque facade concealing traditional multi-generational Chinese courtyard homes",
      "Epicenter of century-old culinary legends, including original Guobaorou restaurant Laochushi"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง (ร้านอาหารเปิด 10:30 - 21:00 น.)",
    openingHoursEn: "Open 24/7 (Restaurants operate 10:30 - 21:00)",
    bestTimeTh: "11:00 - 14:00 น. (ทานมื้อกลางวันร้านตำนาน) หรือ 17:00 น. (ชมโคมไฟยามเย็น)",
    bestTimeEn: "11:00 - 14:00 (Lunch at culinary institutions) or 17:00 (Lantern lighting)",
    ticketPriceTh: "เข้าชมฟรีตลอดทั้งย่าน",
    ticketPriceEn: "Free public access",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 4 กม. รถไฟใต้ดิน Line 3 ลงสถานี Zhonghuabaluoke",
      fromAirport: "นั่งรถตู้ 50 นาที",
      inside: "ตรอกซอยคนเดินโบราณ ปูด้วยหินก้อน มีโรงน้ำชาและพิพิธภัณฑ์พื้นบ้าน"
    },
    transportEn: {
      fromStation: "4 km from station; Harbin Metro Line 3 to Zhonghuabaluoke Station",
      fromAirport: "Taxi / private van ~50 mins",
      inside: "Cobblestone alleys, heritage teahouses, and restored courtyard galleries"
    },
    highlightsTh: [
      "สถาปัตยกรรมสุดมหัศจรรย์: ปูนปั้นลวดลายค้างคาว ลูกทับทิม และดอกบัวบนเสากรีก-โรมัน",
      "ร้านอาหาร Laochushi (老厨家) ผู้คิดค้นเมนูกัวเปาโร่วถวายขุนนางในสมัยราชวงศ์ชิง",
      "ชมร้านขายยาสมุนไพรโบราณและโรงน้ำชาที่ยังคงรักษาวิถีชีวิตดั้งเดิม",
      "มุมถ่ายภาพสตรีทอาร์ตและสะพานไม้เชื่อมเรือนโบราณที่เปี่ยมเสน่ห์คลาสสิก"
    ],
    highlightsEn: [
      "Remarkable fusion: auspicious Chinese pomegranate and bat motifs adorning Roman columns",
      "Laochushi Restaurant, legendary birthplace of Guobaorou created for Qing dynasty VIPs",
      "Century-old traditional apothecaries, teahouses, and traditional puppet theaters",
      "Picturesque wooden balconies and overhead catwalk bridges inside quiet snow-dusted courtyards"
    ],
    descriptionTh: "ย่านประวัติศาสตร์วัฒนธรรมบาโรกจีน (Chinese Baroque Block) ในเขตเหล่าเต้าว่าย เป็นตัวแทนของภูมิปัญญาชาวพ่อค้าจีนยุคแรกในฮาร์บิน ที่จ้างช่างฝีมือสร้างอาคารด้านหน้าเลียนแบบสไตล์ยุโรปอันหรูหรา แต่สลักลวดลายมงคลจีน และสร้างด้านหลังเป็นเรือนพักอาศัยแบบจีนสี่ประสาน ย่านนี้ยังเป็นสวรรค์ของนักชิมอาหารตงเปื่อระดับตำนาน",
    descriptionEn: "Located in the Lao Daowai district, the Chinese Baroque area represents a uniquely fascinating chapter of architectural history. Built by affluent Chinese merchants in the early 20th century, Western Baroque ornamentation outside married traditional Chinese Siheyuan courtyards within."
  },

  {
    id: 9,
    nameTh: "โรงอุปรากรฮาร์บิน",
    nameZh: "哈尔滨大剧院",
    pinyin: "Hā'ěrbīn Dàjùyuàn",
    nameEn: "Harbin Grand Opera House",
    category: "modern_architecture",
    categoryLabelTh: "สถาปัตยกรรมระดับโลก & ศิลปะ",
    categoryLabelEn: "World Architecture & Performing Arts",
    categoryColor: "#0891b2",
    pastelBg: "#cffafe",
    badgeColor: "#a5f3fc",
    doodleBorderColor: "#0e7490",
    doodleIcon: "🎭",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "สถาปัตยกรรมระดับโลกทรงคลื่นหิมะสีขาว ออกแบบโดย MAD Architects สวยสง่าดั่งประติมากรรมธรรมชาติกลางหิมะ",
    ratingDescEn: "World Architecture Award winner: futuristic curvilinear snow-white opera house designed by MAD Architects",
    coords: [45.8115, 126.5680],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    tags: ["โรงอุปรากรฮาร์บิน", "MAD Architects", "สถาปัตยกรรมระดับโลก", "Opera House", "Modern Landmark"],
    shortBulletsTh: [
      "ได้รับรางวัลอาคารวัฒนธรรมยอดเยี่ยมระดับโลก (ArchDaily Building of the Year)",
      "ตัวอาคารโค้งมนสีขาวกลมกลืนกับภูมิประเทศหิมะและพื้นที่ชุ่มน้ำแม่น้ำซงฮัว",
      "มีบันไดวนภายนอกให้เดินขึ้นสู่จุดชมวิวบนหลังคาชมทัศนียภาพหิมะแบบ 360 องศา"
    ],
    shortBulletsEn: [
      "ArchDaily Building of the Year winner designed by visionary architect Ma Yansong (MAD)",
      "Sculpted futuristic white aluminium skin blending organically with the frozen wetland topography",
      "Public spiraling exterior rooftop ramps offering breathtaking 360-degree snow panoramas"
    ],
    openingHoursTh: "ภายนอกชมได้ตลอด 24 ชม. (ภายในเปิดตามรอบการแสดงและการนำชม 09:00 - 16:30 น.)",
    openingHoursEn: "Exterior open 24/7 (Interior tours & performances 09:00 - 16:30)",
    bestTimeTh: "15:00 - 17:00 น. (ช่วงแสงอาทิตย์อัสดงสะท้อนแผ่นอะลูมิเนียมสีขาวและหิมะ)",
    bestTimeEn: "15:00 - 17:00 (Sunset glow illuminating the organic aerodynamic curves)",
    ticketPriceTh: "เดินชมภายนอกและขึ้นดาดฟ้าฟรี (ค่าทัวร์ชมภายในประมาณ 30-50 หยวน)",
    ticketPriceEn: "Free exterior and rooftop access (Interior architecture tour ~30-50 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 10 กม. นั่ง DiDi ข้ามสะพาน 25-30 หยวน",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "มีฮอลล์ใหญ่ตกแต่งด้วยไม้แมนจูเรียนแอชดัดโค้ง และคาเฟ่วิวพาโนรามา"
    },
    transportEn: {
      fromStation: "10 km north of station; DiDi ~25-30 RMB across Songhua River",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Grand theater carved from warm local Manchurian ash wood & panoramic observation cafe"
    },
    highlightsTh: [
      "การออกแบบของ Ma Yansong ที่ตั้งใจให้ตัวอาคารเหมือน 'ก้อนหิมะและธารน้ำแข็งที่ลมพัดขึ้นรูป'",
      "ภายในแกรนด์เธียเตอร์ใช้วัสดุไม้ธรรมชาติสร้างเสียงสะท้อนอะคูสติกระดับโลก",
      "บันไดลอยฟ้าภายนอกอาคารเปิดให้สาธารณชนเดินขึ้นไปชมวิวพื้นที่ชุ่มน้ำที่กลายเป็นทุ่งหิมะสีขาว",
      "ได้รับคัดเลือกให้เป็นหนึ่งในโรงละครโอเปร่าที่สวยที่สุดในโลกโดยนิตยสารสถาปัตยกรรมสากล"
    ],
    highlightsEn: [
      "Masterpiece by MAD Architects conceived as natural landform carved by wild winter winds",
      "Grand theater sculpted inside with sculpted warm Manchurian ash for acoustical perfection",
      "Interactive exterior staircase winding to rooftop viewing platforms overlooking frozen wetlands",
      "Consistently ranked among the most beautiful performing arts centers ever constructed worldwide"
    ],
    descriptionTh: "โรงอุปรากรฮาร์บิน (Harbin Grand Opera House) คือความภาคภูมิใจในฐานะเมืองแห่งดนตรีของยูเนสโก อาคารสีขาวรูปทรงโค้งมนล้ำสมัยตั้งตระหง่านอยู่กลางพื้นที่ชุ่มน้ำทางตอนเหนือของแม่น้ำซงฮัว ในฤดูหนาวอาคารจะกลมกลืนไปกับผืนหิมะรอบข้างอย่างน่าอัศจรรย์ ผู้มาเยือนสามารถเดินขึ้นบันไดวนภายนอกสู่ดาดฟ้าเพื่อชมทิวทัศน์อันกว้างไกลสุดสายตา",
    descriptionEn: "Embedded within Harbin's northern wetlands, the Harbin Grand Opera House is a futuristic architectural triumph designed by MAD Architects. Celebrating Harbin's UNESCO 'City of Music' title, its sinuous white aluminium curves mimic windswept snowbanks, offering an extraordinary cultural icon."
  },

  {
    id: 10,
    nameTh: "อนุสาวรีย์ควบคุมอุทกภัย & สวนสตาลิน",
    nameZh: "防洪纪念塔与斯大林公园",
    pinyin: "Fánghóng Jìniàntǎ & Sīdàlín Gōngyuán",
    nameEn: "Flood Control Monument & Stalin Park",
    category: "historic_street",
    categoryLabelTh: "อนุสรณ์สถาน & สวนริมแม่น้ำ",
    categoryLabelEn: "Monument & Riverside Park",
    categoryColor: "#ea580c",
    pastelBg: "#ffedd5",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🏛️",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "แลนด์มาร์กสำคัญปลายถนนคนเดินจงหยาง สวนสาธารณะสไตล์รัสเซียทิวสนหิมะและทางเดินริมแม่น้ำซงฮัว",
    ratingDescEn: "Historic monument at the terminus of Zhongyang Street, framed by Stalin Park's snow-laden Russian pines",
    coords: [45.7798, 126.6178],
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
    tags: ["อนุสาวรีย์น้ำท่วม", "สวนสตาลิน", "แม่น้ำซงฮัว", "Stalin Park", "Monument"],
    shortBulletsTh: [
      "อนุสาวรีย์หินสูง 22.5 เมตร สร้างขึ้นในปี 1958 รำลึกชัยชนะเหนือน้ำท่วมใหญ่แม่น้ำซงฮัว",
      "สวนสาธารณะริมแม่น้ำสไตล์รัสเซีย ทอดยาวกว่า 1.7 กิโลเมตร เต็มไปด้วยต้นสนหิมะ",
      "จุดเชื่อมต่อสำคัญระหว่างถนนคนเดินจงหยางกับลานกิจกรรมน้ำแข็งบนแม่น้ำ"
    ],
    shortBulletsEn: [
      "22.5-meter commemorative monument erected in 1958 celebrating victory over catastrophic floods",
      "1.7-kilometer Russian-style embankment park lush with snow-draped pine and birch trees",
      "Crucial scenic nexus linking Zhongyang Street to the frozen Songhua River"
    ],
    openingHoursTh: "เปิดตลอด 24 ชั่วโมง",
    openingHoursEn: "Open 24/7",
    bestTimeTh: "16:00 - 19:00 น. (ช่วงพลบค่ำเมื่อเปิดไฟประดับอนุสาวรีย์ริมแม่น้ำ)",
    bestTimeEn: "16:00 - 19:00 (Twilight lighting illuminating the monument columns)",
    ticketPriceTh: "เข้าชมฟรี 100%",
    ticketPriceEn: "100% Free access",
    transportTh: {
      fromStation: "เดินตรงจากถนนคนเดินจงหยางจนสุดทางทิศเหนือ",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ทางเดินเลียบแม่น้ำกว้างขวาง มีประติมากรรมน้ำแข็งและม้านั่งพักผ่อน"
    },
    transportEn: {
      fromStation: "Located directly at the northern terminus of Zhongyang Pedestrian Street",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Wide riverside boardwalk, seasonal ice sculptures, and warming kiosks"
    },
    highlightsTh: [
      "สถาปัตยกรรมเสาโรมันกึ่งวงกลมรอบอนุสาวรีย์ สะท้อนความเข้มแข็งของประชาชน",
      "เส้นรอบวงฐานอนุสาวรีย์สลักระดับน้ำท่วมประวัติศาสตร์ปี 1932 และ 1957",
      "ทิวทัศน์ริมฝั่งแม่น้ำซงฮัวที่กว้างไกล มองเห็นเกาะพระอาทิตย์อยู่ฝั่งตรงข้าม",
      "จุดขึ้นกระเช้าลอยฟ้าข้ามแม่น้ำซงฮัวอยู่ใกล้เคียงในบริเวณสวนสตาลิน"
    ],
    highlightsEn: [
      "Semicircular classical Roman peristyle colonnade symbolizing unbreakable unity",
      "Engraved marker bands documenting historic flood crest water levels of 1932 and 1957",
      "Unobstructed panoramic vistas across the frozen river toward Sun Island",
      "Immediate proximity to the boarding station for the Songhua River Cableway"
    ],
    descriptionTh: "อนุสาวรีย์ควบคุมอุทกภัยแม่น้ำซงฮัว (Harbin Flood Control Monument) ตั้งอยู่อย่างสง่างามที่ปลายสุดของถนนคนเดินจงหยาง โอบล้อมด้วยสวนสาธารณะสตาลิน (Stalin Park) ที่ร่มรื่นด้วยทิวสนรัสเซีย ในฤดูหนาวกิ่งสนจะปกคลุมด้วยหิมะขาวโพลน บริเวณนี้เป็นจุดนัดพบยอดนิยมของชาวเมืองและนักท่องเที่ยวในการชมทัศนียภาพของแม่น้ำซงฮัว",
    descriptionEn: "Erected in 1958, the Flood Control Monument commemorates the heroic struggle of Harbin citizens conquering massive river floods. Anchoring the northern end of Zhongyang Street and Stalin Park, this Soviet-influenced landmark is framed by snow-covered Russian pines overlooking the vast frozen river."
  },

  {
    id: 11,
    nameTh: "ท่าอากาศยานนานาชาติฮาร์บินไท่ผิง T2",
    nameZh: "哈尔滨太平国际机场 T2",
    pinyin: "Hā'ěrbīn Tàipíng Jīchǎng",
    nameEn: "Harbin Taiping International Airport T2",
    category: "transit_hub",
    categoryLabelTh: "สนามบินนานาชาติ & เกตเวย์",
    categoryLabelEn: "International Airport & Hub",
    categoryColor: "#dc2626",
    pastelBg: "#fef2f2",
    badgeColor: "#fecaca",
    doodleBorderColor: "#b91c1c",
    doodleIcon: "✈️",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ประตูบานใหญ่สู่นครหิมะ จุดที่เที่ยวบินของ China Eastern / Shanghai Airlines ลงจอด สะดวก ทันสมัย มีฮีตเตอร์อุ่น",
    ratingDescEn: "Primary flight gateway to Harbin: modern Terminal 2 handling China Eastern & Shanghai Airlines flights",
    coords: [45.6234, 126.2503],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    tags: ["สนามบินฮาร์บิน", "ไท่ผิง T2", "China Eastern", "Airport", "HRB"],
    shortBulletsTh: [
      "ท่าอากาศยานนานาชาติหลักแห่งเดียวของฮาร์บิน (รหัสสนามบิน: HRB)",
      "อาคารผู้โดยสาร T2 ทันสมัย รองรับเที่ยวบินภายในประเทศจีนทั้งหมด",
      "มีจุดบริการรถรับส่ง Airport Shuttle Bus และจุดเรียกแท็กซี่ / DiDi เป็นระเบียบ"
    ],
    shortBulletsEn: [
      "Primary international airport serving Heilongjiang province (IATA: HRB)",
      "Spacious modern Terminal 2 dedicated to domestic routes and connections",
      "Official Airport Shuttle Express buses and well-organized taxi / DiDi dispatch"
    ],
    openingHoursTh: "เปิดบริการตลอด 24 ชั่วโมง",
    openingHoursEn: "Open 24 hours daily",
    bestTimeTh: "ตามตารางบิน (เที่ยวบินที่เราจองถึง 17:00 น. และขากลับออก 15:10 น.)",
    bestTimeEn: "Follows flight schedules (Confirmed arrival 17:00 / departure 15:10)",
    ticketPriceTh: "เข้าสู่สนามบินฟรี (Airport Bus เข้าเมือง 20 หยวน / แท็กซี่ 100-120 หยวน)",
    ticketPriceEn: "Free airport entry (Shuttle Bus 20 RMB / DiDi ~100-120 RMB to city)",
    transportTh: {
      fromStation: "ห่างจากสถานีรถไฟฮาร์บินและถนนจงหยาง 38 กม. นั่งรถตู้ VIP ประมาณ 45-50 นาที",
      fromAirport: "จุดเริ่มต้นการเดินทางในทริปนี้",
      inside: "มีฮีตเตอร์พื้น ห้องเปลี่ยนชุดกันหนาว ร้านอาหารตงเป่ย และร้านจำหน่ายของฝาก"
    },
    transportEn: {
      fromStation: "38 km southwest of Daoli District; 45-50 mins via express highway",
      fromAirport: "Starting / end point of travel",
      inside: "Generously heated terminals, dedicated thermal dressing rooms, luggage services"
    },
    highlightsTh: [
      "อาคาร T2 มีห้องเปลี่ยนเครื่องแต่งกายกันหนาว (Changing Rooms) บริเวณสายพานรับกระเป๋า",
      "เที่ยวบินต่อเครื่องจากเซี่ยงไฮ้ (PVG) จะลงจอดที่อาคาร T2 นี้โดยตรง",
      "มีเคาน์เตอร์แจกแผนที่ท่องเที่ยวและซิมการ์ดบริการแก่นักท่องเที่ยวต่างชาติ",
      "ทางด่วนเชื่อมต่อตรงสู่ใจกลางเมืองฮาร์บินอย่างรวดเร็วและปลอดภัย"
    ],
    highlightsEn: [
      "T2 arrivals area equipped with heated thermal changing cubicles for switching into winter coats",
      "Direct domestic arrival gate for Shanghai (PVG) connecting flights",
      "Tourist information kiosks providing English transit maps and taxi guidance",
      "Direct tollway expressway access to central Harbin in under 50 minutes"
    ],
    descriptionTh: "สนามบินนานาชาติฮาร์บินไท่ผิง (Harbin Taiping International Airport - HRB) คือประตูหน้าด่านแรกที่ต้อนรับผู้มาเยือนจากทั่วโลกสู่นครน้ำแข็ง อาคารผู้โดยสาร Terminal 2 มีระบบทำความร้อนที่อบอุ่นและสิ่งอำนวยความสะดวกครบครัน โดยเฉพาะห้องเปลี่ยนเสื้อผ้ากันหนาวเพื่อให้ผู้โดยสารสามารถสวมชุดลองจอนและเสื้อโค้ทหนาก่อนก้าวออกจากอาคาร",
    descriptionEn: "Harbin Taiping International Airport (HRB) serves as the primary northern aviation gateway. Terminal 2 features modern heated facilities including dedicated clothing changing rooms right by the baggage carousels, allowing travelers from warmer climates to gear up for sub-zero weather immediately."
  },

  {
    id: 12,
    nameTh: "สวนสนุกน้ำแข็งและหิมะฮาร์บิน",
    nameZh: "哈尔滨冰雪大世界",
    pinyin: "Hā'ěrbīn Bīngxuě Dàshìjiè",
    nameEn: "Harbin Ice and Snow World",
    category: "ice_snow",
    categoryLabelTh: "เทศกาลน้ำแข็ง & สวนสนุกระดับโลก",
    categoryLabelEn: "Ice & Snow World Park",
    categoryColor: "#0284c7",
    pastelBg: "#e0f2fe",
    badgeColor: "#bae6fd",
    doodleBorderColor: "#0369a1",
    doodleIcon: "🏰",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "อาณาจักรปราสาทและเมืองน้ำแข็งแกะสลักที่ใหญ่ที่สุดในโลก สไลเดอร์น้ำแข็งยาว 500 เมตร ประดับไฟ LED สีสันตระการตา",
    ratingDescEn: "World's largest frozen theme park: colossal crystal ice castles, 500-meter ice slides, and vibrant LED illuminations",
    coords: [45.7845, 126.5615],
    image: "https://images.unsplash.com/photo-1548625361-12503722f42a?auto=format&fit=crop&w=600&q=80",
    tags: ["ไอซ์แอนด์สโนว์เวิลด์", "ปราสาทน้ำแข็ง", "สไลเดอร์น้ำแข็ง", "Ice and Snow World", "Harbin Festival"],
    shortBulletsTh: [
      "นิทรรศการน้ำแข็งแกะสลักกลางแจ้งที่ใหญ่ที่สุดในโลก ใช้ก้อนน้ำแข็งกว่า 250,000 ลบ.ม.",
      "ไฮไลท์ระดับตำนาน: สไลเดอร์น้ำแข็งยักษ์ (Super Ice Slide) ความยาวทะลุ 500 เมตร",
      "ยามค่ำคืนปราสาทน้ำแข็งจะส่องสว่างด้วยไฟ LED หลากสีสันราวกับดินแดนแห่งเวทมนตร์"
    ],
    shortBulletsEn: [
      "World's largest open-air ice theme park sculpted from 250,000+ cubic meters of crystal river ice",
      "Legendary 500-meter-long Super Ice Slide propelling riders down glittering ice chutes",
      "Breathtaking neon and computer-controlled LED illumination turning ice castles into fantasies"
    ],
    openingHoursTh: "11:00 - 22:00 น. (เปิดไฟประดับ 16:00 น. / ช่วงเปิดทดลองระบบปลาย ธ.ค. - ก.พ.)",
    openingHoursEn: "11:00 - 22:00 (Lights switch on at 16:00; Soft opening late Dec - Feb)",
    bestTimeTh: "15:30 - 19:30 น. (เข้าชมช่วงรอยต่อระหว่างกลางวันและแสงไฟกลางคืน)",
    bestTimeEn: "15:30 - 19:30 (Witness transparent crystal ice transform under night lights)",
    ticketPriceTh: "บัตรเข้าชมประมาณ 328-398 หยวน (~1,640-1,990 บาท)",
    ticketPriceEn: "Standard winter admission ~328-398 RMB (~1,640-1,990 THB)",
    transportTh: {
      fromStation: "นั่งรถไฟใต้ดิน Metro Line 2 ตรงลงสถานี Bingxuedashijie Station (ทางออก 3)",
      fromAirport: "นั่งรถตู้ประมาณ 40 นาที",
      inside: "มีโถงพักอุ่นขนาดใหญ่ ร้านฟาสต์ฟู้ด คาเฟ่ และจุดบริการให้เช่าแผ่นแปะร้อน"
    },
    transportEn: {
      fromStation: "Direct via Harbin Metro Line 2 to Bingxuedashijie Station (Exit 3)",
      fromAirport: "Taxi / private van ~40 mins",
      inside: "Heated service lounges, KFC, Starbucks, and hand-warmer kiosks"
    },
    highlightsTh: [
      "ปราสาทน้ำแข็งหลักสูงกว่า 40 เมตร สร้างจากก้อนน้ำแข็งธรรมชาติจากแม่น้ำซงฮัว",
      "ชิงช้าสวรรค์ยักษ์ Snowflake Ferris Wheel ชมวิวเมืองน้ำแข็งจากความสูง 120 เมตร",
      "การแสดงระบำน้ำแข็งระดับนานาชาติ Harbin Ice Show โดยนักสเก็ตมืออาชีพ",
      "*หมายเหตุ: ต้นเดือน ธ.ค. เป็นช่วงเร่งก่อสร้างและตัดน้ำแข็ง หากเปิด Soft Opening สามารถเข้าชมได้ทันที*"
    ],
    highlightsEn: [
      "Soaring 40-meter central ice crystal pagodas carved from pure natural river ice blocks",
      "120-meter giant Snowflake Ferris Wheel offering sweeping aerial vistas of the illuminated park",
      "World-class professional European figure skating performances at the heated indoor arena",
      "*Note: Early December is peak construction & ice harvest; opens for soft launch mid/late Dec*"
    ],
    descriptionTh: "ฮาร์บิน ไอซ์ แอนด์ สโนว์ เวิลด์ (Harbin Ice and Snow World) คือสุดยอดไฮไลท์ระดับโลกที่สร้างชื่อเสียงให้แก่นครฮาร์บิน จัดขึ้นเป็นประจำทุกปีตั้งแต่ปี 1999 บนพื้นที่กว่า 800,000 ตารางเมตร ช่างฝีมือนับหมื่นคนจะตัดก้อนน้ำแข็งยักษ์จากแม่น้ำซงฮัวมาประกอบเป็นปราสาท พระราชวัง และสไลเดอร์น้ำแข็ง ประดับด้วยเทคโนโลยีแสงสีเสียงตระการตา",
    descriptionEn: "Founded in 1999, Harbin Ice and Snow World is the undisputed crown jewel of winter tourism worldwide. Encompassing over 800,000 square meters, thousands of artisans carve hundreds of thousands of cubic meters of natural river ice into an ethereal metropolis of transparent castles and illuminated crystal monuments."
  },

  {
    id: 13,
    nameTh: "ถนนกัวโกรี่ & โบสถ์เซนต์อเล็กเซเยฟ",
    nameZh: "果戈里大街与圣阿列克谢耶夫教堂",
    pinyin: "Guǒgēlǐ Dàjiē & Shèng Ālièkèxièyéfū",
    nameEn: "Gogol Street & Saint Alekseyev Church",
    category: "russian_heritage",
    categoryLabelTh: "สถาปัตยกรรมรัสเซีย & โบสถ์บาโรก",
    categoryLabelEn: "Russian Heritage & Baroque Church",
    categoryColor: "#b45309",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#92400e",
    doodleIcon: "⛪",
    rating: 4.7,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "ถนนการค้าเก่าแก่สไตล์รัสเซีย โบสถ์คาทอลิกสไตล์บาโรกสีแดงสด ร้านหนังสือรัสเซียที่มีชื่อเสียงที่สุดในฮาร์บิน",
    ratingDescEn: "Historic century-old Russian commercial boulevard featuring the crimson baroque Alekseyev Church and bookstore",
    coords: [45.7485, 126.6480],
    image: "https://images.unsplash.com/photo-1548625361-12503722f42a?auto=format&fit=crop&w=600&q=80",
    tags: ["ถนนกัวโกรี่", "โบสถ์เซนต์อเล็กเซเยฟ", "ร้านหนังสือรัสเซีย", "Gogol Street", "Alekseyev"],
    shortBulletsTh: [
      "ถนนเก่าแก่ตั้งแต่ปี 1901 ตั้งชื่อเพื่อเป็นเกียรติแก่นักประพันธ์ชื่อดังชาวรัสเซีย 'นิโคไล กัวโกรี่'",
      "โบสถ์เซนต์อเล็กเซเยฟ สถาปัตยกรรมบาโรก-รัสเซียสีแดงชาด ยอดโดมเต็นท์สวยงาม",
      "แวะร้านหนังสือ Gogol Bookstore ร้านหนังสือสไตล์ยุโรปคลาสสิกที่สวยติดอันดับต้นๆ ของจีน"
    ],
    shortBulletsEn: [
      "Established in 1901, named in honor of famed Russian literary master Nikolai Gogol",
      "Saint Alekseyev Church: vivid crimson Russian Baroque masterpiece with intricate cornices",
      "Visit the iconic Gogol Bookstore, often voted among China's most enchanting European bookstores"
    ],
    openingHoursTh: "ถนนและจัตุรัสเปิด 24 ชม. (โบสถ์และร้านหนังสือเปิด 09:00 - 20:30 น.)",
    openingHoursEn: "Street open 24/7 (Church & bookstores 09:00 - 20:30)",
    bestTimeTh: "14:30 - 18:00 น. (เดินชมสถาปัตยกรรม แวะจิบกาแฟในร้านหนังสือ)",
    bestTimeEn: "14:30 - 18:00 (Afternoon coffee and book browsing under warm chandeliers)",
    ticketPriceTh: "เข้าชมฟรี",
    ticketPriceEn: "Free access",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 2.5 กม. รถไฟใต้ดิน Line 1 ลงสถานี Yidaeryuan หรือ DiDi 10 หยวน",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "มีร้านกาแฟ ร้านขนมปังรัสเซีย และร้านขายของโบราณสองข้างทาง"
    },
    transportEn: {
      fromStation: "2.5 km from station; Metro Line 1 to Yidaeryuan Station or DiDi 10 RMB",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Charming European street with bakeries, vintage cafes, and Russian antique shops"
    },
    highlightsTh: [
      "โบสถ์เซนต์อเล็กเซเยฟ (革新街教堂) สีแดงชาดสดใส เป็นโบสถ์ที่ยังคงเปิดประกอบพิธีกรรมทางศาสนา",
      "ร้านหนังสือ Gogol Bookstore ตกแต่งด้วยโคมไฟแชนเดอเลียร์ไม้คลาสสิกและเปียโนโบราณ",
      "ชิมขนมปังรัสเซีย 'ชิวหลินต้าเลี่ยปา' (Qiulin Lieba) ร้านต้นตำรับเก่าแก่กว่า 100 ปี",
      "สัมผัสวิถีชีวิตผู้คนท้องถิ่นในย่านที่พักอาศัยสไตล์รัสเซียที่ยังคงรักษากลิ่นอายเดิมไว้อย่างดี"
    ],
    highlightsEn: [
      "Vibrant red brick facade of Saint Alekseyev Church, an active and tranquil sanctuary",
      "Gogol Bookstore featuring dark oak book galleries, stained glass, and vintage grand pianos",
      "Century-old Qiulin Lieba bakery selling traditional Russian sourdough sourdough bread",
      "Intimate neighborhood charm reflecting everyday Harbin life infused with Russian customs"
    ],
    descriptionTh: "ถนนกัวโกรี่ (Gogol Street) เป็นถนนประวัติศาสตร์ที่สะท้อนอิทธิพลของวัฒนธรรมและวรรณกรรมรัสเซียในฮาร์บินอย่างลึกซึ้ง ไฮไลท์เด่นคือโบสถ์เซนต์อเล็กเซเยฟ โบสถ์สีแดงชาดที่มีสถาปัตยกรรมบาโรกอันวิจิตรงดงาม และร้านหนังสือ Gogol Bookstore ที่บรรยากาศอบอุ่น เหมาะแก่การแวะพักจิบชากาแฟท่ามกลางลมหนาว",
    descriptionEn: "Named after Russian writer Nikolai Gogol in 1901, Gogol Street retains authentic Russian residential and mercantile architecture. Its crown jewel is Saint Alekseyev Church, a striking scarlet Baroque sanctuary surrounded by cozy vintage cafes and the acclaimed Gogol Bookstore."
  },

  {
    id: 14,
    nameTh: "กระเช้าลอยฟ้าข้ามแม่น้ำซงฮัว",
    nameZh: "松花江观光索道",
    pinyin: "Sōnghuā Jiāng Guānguāng Suǒdào",
    nameEn: "Songhua River Sightseeing Ropeway",
    category: "scenic_landmark",
    categoryLabelTh: "กระเช้าลอยฟ้า & วิวมุมสูง",
    categoryLabelEn: "Cable Car & River Vista",
    categoryColor: "#0891b2",
    pastelBg: "#cffafe",
    badgeColor: "#a5f3fc",
    doodleBorderColor: "#0e7490",
    doodleIcon: "🚡",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "กระเช้าลอยฟ้าทรงลูกแก้วลอยข้ามแม่น้ำซงฮัว ชมวิวพาโนรามา 360 องศาธารน้ำแข็งยักษ์ เชื่อมฝั่งเมืองกับเกาะพระอาทิตย์",
    ratingDescEn: "Gliding cable cars soaring over the frozen Songhua River connecting Daoli district to Sun Island with 360 views",
    coords: [45.7820, 126.6080],
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    tags: ["กระเช้าลอยฟ้า", "แม่น้ำซงฮัว", "วิวมุมสูง", "Sun Island Cableway", "Songhua Ropeway"],
    shortBulletsTh: [
      "กระเช้าลอยฟ้านำเข้าจากออสเตรียความยาว 1,156 เมตร ข้ามผืนน้ำแข็งแม่น้ำซงฮัว",
      "ชมวิวมุมสูงแบบพาโนรามา 360 องศา เห็นสะพานรถไฟโบราณและเกาะพระอาทิตย์",
      "ตัวสถานีออกแบบเป็นปราสาทสไตล์ยุโรปสุดคลาสสิกริมสวนสตาลิน"
    ],
    shortBulletsEn: [
      "1,156-meter advanced Austrian Doppelmayr ropeway spanning high above frozen river ice",
      "360-degree panoramic vantage point admiring Binzhou Bridge and Sun Island winter forest",
      "Terminal stations whimsical designed as fairy-tale European stone castles"
    ],
    openingHoursTh: "ทุกวัน 08:30 - 18:00 น. (ฤดูหนาว)",
    openingHoursEn: "Daily 08:30 - 18:00 (Winter hours)",
    bestTimeTh: "15:30 - 17:00 น. (ชมแสงพระอาทิตย์ตกสะท้อนผืนน้ำแข็งจากกลางอากาศ)",
    bestTimeEn: "15:30 - 17:00 (Sunset golden hour viewing from the cabin)",
    ticketPriceTh: "เที่ยวเดียว 50 หยวน / ไป-กลับ 80 หยวน (~250-400 บาท)",
    ticketPriceEn: "One-way 50 RMB / Round-trip 80 RMB (~250-400 THB)",
    transportTh: {
      fromStation: "สถานีฝั่งใต้ตั้งอยู่ในสวนสตาลิน เดินจากถนนจงหยางเพียง 5 นาที",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "กระเช้ากอนโดล่าแบบปิดมิดชิด กันลมหนาว มีหน้าต่างกระจกใสบานใหญ่"
    },
    transportEn: {
      fromStation: "South terminal inside Stalin Park, 5 mins walk from Zhongyang St.",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Fully enclosed windproof cabins with large panoramic acrylic windows"
    },
    highlightsTh: [
      "สัมผัสความรู้สึกตื่นเต้นเหมือนล่องลอยอยู่เหนืออาณาจักรน้ำแข็งสีขาวสุดลูกหูลูกตา",
      "มองเห็นผู้คนที่เดินเล่นและกิจกรรมบนแม่น้ำซงฮัวกลายเป็นจุดเล็กๆ ด้านล่าง",
      "เป็นเส้นทางสัญจรที่สะดวกสบายในการข้ามไปเที่ยวชมงานแกะสลักหิมะเกาะพระอาทิตย์",
      "ห้องโดยสารกระเช้ามีระบบกันสะเทือน นั่งนุ่มนวลและปลอดภัย 100%"
    ],
    highlightsEn: [
      "Mesmerizing sensation of gliding smoothly over a vast expanse of frozen river ice",
      "Aerial perspective of ice skaters and winter carnival revelers on the river below",
      "Most scenic and relaxing transit method connecting directly into Sun Island Snow Expo",
      "Safe, whisper-quiet Doppelmayr cable system engineered for extreme sub-zero weather"
    ],
    descriptionTh: "กระเช้าลอยฟ้าแม่น้ำซงฮัว (Songhua River Ropeway) เชื่อมโยงระหว่างสวนสตาลินฝั่งใต้กับเกาะพระอาทิตย์ฝั่งเหนือ ตัวสถานีทั้งสองฝั่งสร้างขึ้นเป็นปราสาทหินสไตล์ยุโรป การนั่งกระเช้าข้ามแม่น้ำในฤดูหนาวจะเปิดมุมมองที่น่าทึ่งของแม่น้ำซงฮัวที่กลายเป็นผืนน้ำแข็งและผังเมืองฮาร์บินในมุมสูง",
    descriptionEn: "The Songhua River Sightseeing Ropeway transports passengers effortlessly between Stalin Park and Sun Island. Housed in European castle-like terminals, the aerial cable cars offer dramatic bird's-eye views of the sprawling ice formations, historic bridges, and riverbanks."
  },

  {
    id: 15,
    nameTh: "ตลาดเช้าหงจวน",
    nameZh: "红专街早市",
    pinyin: "Hóngzhuān Jiē Zǎoshì",
    nameEn: "Hongzhuan Morning Market",
    category: "historic_street",
    categoryLabelTh: "ตลาดเช้า & สตรีทฟู้ดตงเป่ย",
    categoryLabelEn: "Morning Market & Street Food",
    categoryColor: "#ea580c",
    pastelBg: "#ffedd5",
    badgeColor: "#fed7aa",
    doodleBorderColor: "#c2410c",
    doodleIcon: "🥟",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ตลาดเช้าสตรีทฟู้ดอันดับ 1 ของฮาร์บิน สัมผัสไอควันสีขาวพวยพุ่งในอุณหภูมิติดลบ ชิมเกี๊ยวทอด ซาลาเปาร้อนๆ ขนมกล้วยทอด",
    ratingDescEn: "Harbin's liveliest morning food market: steam billowing in freezing morning air with freshly fried pancakes and buns",
    coords: [45.7710, 126.6190],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    tags: ["ตลาดเช้าหงจวน", "สตรีทฟู้ดฮาร์บิน", "เกี๊ยวซ่า", "Hongzhuan Market", "Breakfast"],
    shortBulletsTh: [
      "ตลาดเช้าพื้นเมืองแท้ๆ อายุกว่าหลายทศวรรษ ตั้งอยู่ใจกลางเมืองใกล้ถนนจงหยาง",
      "สัมผัสภาพชีวิตจริงสุดคึกคัก: ไอควันจากเตานึ่งพวยพุ่งปะทะอากาศติดลบ -15°C",
      "ชิมเมนูเด็ด: ซาลาเปาทอด (Shuijianbao), ขนมไข่เบอร์เกอร์ (Danbaorou), เกี๊ยวตงเป่ย"
    ],
    shortBulletsEn: [
      "Bustling decades-old local morning street market just 2 blocks from Zhongyang Street",
      "Unforgettable winter scene: thick clouds of cooking steam rising in crisp sub-zero dawn",
      "Must-eats: pan-fried soup dumplings, egg-meat burgers, steaming soy milk, and millet porridge"
    ],
    openingHoursTh: "ทุกวัน 05:30 - 09:00 น. (ตลาดวายประมาณ 09:00 น.)",
    openingHoursEn: "Daily 05:30 - 09:00 (Wraps up strictly around 09:00)",
    bestTimeTh: "06:30 - 08:00 น. (ช่วงของสดใหม่ ควันพวยพุ่ง บรรยากาศคึกคักที่สุด)",
    bestTimeEn: "06:30 - 08:00 (Peak steaming energy and fresh morning breakfast rush)",
    ticketPriceTh: "เข้าชมฟรี (อาหารชิ้นละ 2 - 10 หยวน อิ่มอร่อยราคาประหยัดมาก)",
    ticketPriceEn: "Free access (Street food snacks cost 2 - 10 RMB each)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 1.5 กม. เดินจากโรงแรมย่านถนนจงหยางเพียง 5-10 นาที",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ถนนคนเดินแคบๆ อัดแน่นด้วยแผงลอยสองข้างทาง สวมรองเท้ากันลื่น"
    },
    transportEn: {
      fromStation: "1.5 km from station; 5-10 mins walk from Zhongyang Street hotels",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Narrow bustling pedestrian alley lined with food stalls; snow boots recommended"
    },
    highlightsTh: [
      "ขนมปังอบกรอบ 'โหยวเถียว' จิ้มน้ำเต้าหู้ร้อนๆ สูตรถั่วเหลืองตงเป่ยแท้",
      "ผลไม้เคลือบน้ำตาลแช่แข็งตามธรรมชาติ (ถังหูลู่ - Tanghulu) เย็นกรอบหวานฉ่ำ",
      "ปลาแช่แข็งธรรมชาติวางเรียงรายขายบนแผงโดยไม่ต้องใช้ตู้เย็น",
      "สัมผัสความอบอุ่นและอัธยาศัยไมตรีของชาวตงเป่ยอย่างแท้จริง"
    ],
    highlightsEn: [
      "Freshly fried giant dough fritters (Youtiao) paired with boiling hot soybean milk",
      "Naturally deep-frozen candied hawthorn sticks (Tanghulu) crisp as fruit popsicles",
      "Wild river fish displayed like frozen popsicles directly outdoors without freezers",
      "Heartwarming warmth and jovial hospitality of authentic northeastern locals"
    ],
    descriptionTh: "ตลาดเช้าหงจวน (Hongzhuan Morning Market) คือสถานที่สัมผัสจิตวิญญาณแห่งชีวิตยามเช้าของชาวฮาร์บินอย่างแท้จริง ในขณะที่อากาศภายนอกหนาวเหน็บติดลบ ไอควันสีขาวจากหม้อนึ่งซาลาเปา กระทะทอดเกี๊ยว และหม้อต้มซุปเนื้อวัวจะพวยพุ่งขึ้นสู่อากาศสร้างบรรยากาศที่มีเสน่ห์ อาหารทุกอย่างทำสดใหม่ ร้อนกรุ่น และราคาสบายกระเป๋า",
    descriptionEn: "Hongzhuan Morning Market offers the most authentic taste of daily life in Harbin. Even in freezing -15°C dawns, the street comes alive with billows of white steam from steaming baozi, sizzling griddles, and hot soy milk vats, where friendly vendors greet marketgoers with generous portions."
  },

  {
    id: 16,
    nameTh: "พิพิธภัณฑ์มณฑลเฮยหลงเจียง",
    nameZh: "黑龙江省博物馆",
    pinyin: "Hēilóngjiāng Shěng Bówùguǎn",
    nameEn: "Heilongjiang Provincial Museum",
    category: "culture_heritage",
    categoryLabelTh: "พิพิธภัณฑ์ & ประวัติศาสตร์",
    categoryLabelEn: "Museum & Provincial History",
    categoryColor: "#b45309",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#92400e",
    doodleIcon: "🏛️",
    rating: 4.7,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "ตึกสถาปัตยกรรมบาโรกยุโรปสีเหลืองมัสตาร์ด จัดแสดงฟอสซิลช้างแมมมอธไซบีเรียสมบูรณ์แบบและโบราณวัตถุราชวงศ์จิน",
    ratingDescEn: "Ochre-yellow European baroque landmark housing complete woolly mammoth fossils and Jurchen dynasty treasures",
    coords: [45.7565, 126.6385],
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=600&q=80",
    tags: ["พิพิธภัณฑ์เฮยหลงเจียง", "แมมมอธ", "ประวัติศาสตร์", "Museum", "Heilongjiang"],
    shortBulletsTh: [
      "อาคารเก่าแก่สไตล์บาโรกสีเหลืองมัสตาร์ด สร้างขึ้นตั้งแต่ปี 1904 ในอดีตคือห้างค้ามอสโก",
      "ไฮไลท์ระดับโลก: ฟอสซิลโครงกระดูก 'ช้างแมมมอธไซบีเรีย' ที่สมบูรณ์ที่สุดในเอเชีย",
      "จัดแสดงประวัติศาสตร์ชนเผ่าเร่ร่อนทางเหนือและอารยธรรมราชวงศ์จินโบราณ"
    ],
    shortBulletsEn: [
      "Built in 1904 as a Russian Moscow shopping mall; striking ochre baroque design",
      "World-class centerpiece: fully assembled, pristine Siberian woolly mammoth skeleton",
      "Extensive exhibits tracing Jurchen nomadic dynasties and Northeast China archeology"
    ],
    openingHoursTh: "อังคาร - อาทิตย์ 09:00 - 16:30 น. (ปิดวันจันทร์)",
    openingHoursEn: "Tuesday - Sunday 09:00 - 16:30 (Closed Mondays)",
    bestTimeTh: "10:00 - 12:00 น. หรือ 13:30 - 15:30 น.",
    bestTimeEn: "10:00 - 12:00 or 13:30 - 15:30 (Quiet indoor exploration)",
    ticketPriceTh: "เข้าชมฟรี (แสดงหนังสือเดินทาง Passport ที่เคาน์เตอร์)",
    ticketPriceEn: "Free admission with passport verification",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บินเพียง 800 เมตร รถไฟใต้ดิน Line 1 ลงสถานี Bowuguan Station",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "มีระบบฮีตเตอร์อุ่นสบาย ตู้ฝากสัมภาระ และคำบรรยายภาษาอังกฤษ"
    },
    transportEn: {
      fromStation: "800m from station; Harbin Metro Line 1 & 2 interchange at Bowuguan Station",
      fromAirport: "Taxi / private van ~45 mins",
      inside: "Comfortably heated, free luggage lockers, and English audio guide rentals"
    },
    highlightsTh: [
      "โครงกระดูกช้างแมมมอธยักษ์ความสูงกว่า 4.5 เมตร ขุดพบในพื้นที่ทุ่งน้ำแข็งเฮยหลงเจียง",
      "ฟอสซิลกวางยักษ์ดึกดำบรรพ์ (Megaloceros) ยุคน้ำแข็ง",
      "มังกรทองคำสัมฤทธิ์โบราณ (Gold Plated Dragon) มรดกทางวัฒนธรรมชั้นเอกของราชวงศ์จิน",
      "สถาปัตยกรรมภายนอกอาคารสีเหลืองตัดกับหิมะขาว เป็นจุดถ่ายภาพที่สวยคลาสสิกมาก"
    ],
    highlightsEn: [
      "Over 4.5-meter-tall Siberian woolly mammoth skeleton unearthed in Heilongjiang",
      "Rare prehistoric giant Irish elk (Megaloceros) ice-age fossils",
      "National grade-A golden sitting dragon relic from the ancient Jurchen Jin Dynasty",
      "Distinctive Russian ochre-yellow facade contrasting brilliantly against white winter snow"
    ],
    descriptionTh: "พิพิธภัณฑ์มณฑลเฮยหลงเจียง (Heilongjiang Provincial Museum) ตั้งอยู่ ณ จัตุรัสพิพิธภัณฑ์ใจกลางเมือง ตัวอาคารเป็นสถาปัตยกรรมบาโรกของรัสเซียที่มีเอกลักษณ์ ภายในจัดแสดงโบราณวัตถุและฟอสซิลสิ่งมีชีวิตยุคน้ำแข็ง โดยเฉพาะโครงกระดูกช้างแมมมอธที่สร้างความตื่นตาตื่นใจแก่ผู้เข้าชม เป็นสถานที่หลบหนาวและเรียนรู้ประวัติศาสตร์ที่ยอดเยี่ยม",
    descriptionEn: "Founded in 1904 inside a former Russian retail galleria, the Heilongjiang Provincial Museum is a treasure trove of paleontology and regional antiquity. The star attraction is an astonishingly intact complete woolly mammoth fossil that roamed the icy tundras millennia ago."
  },

  {
    id: 17,
    nameTh: "หอคอยมังกรหลงถ่า",
    nameZh: "龙塔 (黑龙江省广播电视塔)",
    pinyin: "Lóng Tǎ (Dragon Tower)",
    nameEn: "Dragon Tower (Long Ta)",
    category: "modern_architecture",
    categoryLabelTh: "หอคอยชมเมือง & วิวมุมสูง",
    categoryLabelEn: "Observation Tower & City View",
    categoryColor: "#0891b2",
    pastelBg: "#cffafe",
    badgeColor: "#a5f3fc",
    doodleBorderColor: "#0e7490",
    doodleIcon: "🗼",
    rating: 4.7,
    ratingStars: "⭐⭐⭐⭐☆",
    ratingDescTh: "หอส่งสัญญาณโทรทัศน์โครงสร้างเหล็กสูง 336 เมตร มีทางเดินพื้นกระจกลอยฟ้ารอบหอคอยชมเมืองหิมะ 360 องศา",
    ratingDescEn: "336-meter landmark steel observation tower featuring a 360-degree outdoor glass skywalk over Harbin",
    coords: [45.7480, 126.6780],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    tags: ["หอคอยมังกร", "หลงถ่า", "Dragon Tower", "วิวมุมสูง", "Skywalk"],
    shortBulletsTh: [
      "หอคอยส่งสัญญาณโทรทัศน์โครงสร้างเหล็กอิสระที่สูงเป็นอันดับ 2 ของโลก (336 เมตร)",
      "ทางเดินพื้นกระจกใสลอยฟ้ากลางแจ้ง (Glass Skywalk) ท้าทายความกล้าที่ระดับความสูง 181 เมตร",
      "จุดชมวิวมุมสูงมองเห็นผังเมืองฮาร์บินที่ปกคลุมด้วยหิมะขาวกว้างไกลสุดสายตา"
    ],
    shortBulletsEn: [
      "World's 2nd tallest freestanding steel lattice transmission tower soaring 336 meters",
      "Thrilling outdoor glass-bottom skywalk encircling the tower at 181 meters altitude",
      "Breathtaking 360-degree aerial panorama over snow-dusted Harbin cityscape"
    ],
    openingHoursTh: "ทุกวัน 09:00 - 18:00 น. (รอบสุดท้าย 17:00 น.)",
    openingHoursEn: "Daily 09:00 - 18:00 (Last ticket 17:00)",
    bestTimeTh: "15:00 - 17:00 น. (ชมวิวพระอาทิตย์ตกดินและแสงไฟเมืองยามค่ำ)",
    bestTimeEn: "15:00 - 17:00 (Sunset transitioning into sparkling nighttime city lights)",
    ticketPriceTh: "ค่าขึ้นชมหอคอยประมาณ 120-150 หยวน (~600-750 บาท)",
    ticketPriceEn: "Observation deck admission ~120-150 RMB (~600-750 THB)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 5 กม. นั่ง DiDi ประมาณ 15 หยวน",
      fromAirport: "นั่งรถตู้ 50 นาที",
      inside: "มีลิฟต์ความเร็วสูง ภัตตาคารหมุน และนิทรรศการมังกรจีน"
    },
    transportEn: {
      fromStation: "5 km east of station; DiDi taxi ~15 RMB",
      fromAirport: "Taxi / private van ~50 mins",
      inside: "High-speed observation elevators, revolving buffet restaurant, and dinosaur exhibits"
    },
    highlightsTh: [
      "ทางเดินกระจกใสกลางแจ้งระยะทาง 181 เมตร ให้ความรู้สึกเหมือนกำลังเดินอยู่บนท้องฟ้า",
      "ภัตตาคารหมุนลอยฟ้า (Revolving Restaurant) หมุนรอบตัวเมือง 360 องศาใน 1 ชั่วโมง",
      "กล้องส่องทางไกลกำลังขยายสูงมองเห็นแม่น้ำซงฮัวและโบสถ์เซนต์โซเฟีย",
      "มีนิทรรศการวัฒนธรรมมังกรจีนโบราณและงานศิลปะพื้นบ้านภายในหอคอย"
    ],
    highlightsEn: [
      "181-meter ring-shaped circular glass floor walk allowing thrilling vistas directly downward",
      "Revolving panoramic dining restaurant completing a gentle 360-degree rotation every hour",
      "High-power optical telescopes pinpointing the frozen Songhua River and church domes",
      "Fascinating cultural exhibits highlighting northeastern folklore and traditional crafts"
    ],
    descriptionTh: "หอคอยมังกร หรือ 'หลงถ่า' (Dragon Tower) เป็นแลนด์มาร์กสมัยใหม่ที่สำคัญของฮาร์บิน ด้วยความสูงถึง 336 เมตร ทำให้เป็นจุดชมวิวมุมสูงที่ดีที่สุดของเมือง นักท่องเที่ยวสามารถขึ้นลิฟต์ความเร็วสูงสู่ชั้นชมวิว ท้าความกล้าบนทางเดินพื้นกระจกใส และรับประทานอาหารในภัตตาคารหมุนชมแสงไฟเมืองหิมะระยิบระยับ",
    descriptionEn: "Reaching 336 meters into the northern sky, the Dragon Tower (Long Ta) is Heilongjiang's primary telecommunications and observation beacon. Brave travelers step out onto its circular glass-floored skywalk 181 meters above ground for an exhilarating bird's-eye view of Harbin."
  },

  {
    id: 18,
    nameTh: "พิพิธภัณฑ์เบียร์ฮาร์บิน",
    nameZh: "哈尔滨啤酒博物馆",
    pinyin: "Hā'ěrbīn Píjiǔ Bówùguǎn",
    nameEn: "Harbin Beer Museum",
    category: "culture_heritage",
    categoryLabelTh: "วัฒนธรรม & ตำนานเบียร์ร้อยปี",
    categoryLabelEn: "Brewery Heritage & Culture",
    categoryColor: "#b45309",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#92400e",
    doodleIcon: "🍺",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ต้นกำเนิดเบียร์แบรนด์แรกของประเทศจีนตั้งแต่ปี 1900 โดยชาวรัสเซีย ชมประวัติศาสตร์และชิมเบียร์สดกลั่นใหม่รสเลิศ",
    ratingDescEn: "China's first and oldest beer brand (established 1900): interactive beer museum with fresh craft tastings",
    coords: [45.5890, 126.7020],
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=600&q=80",
    tags: ["เบียร์ฮาร์บิน", "พิพิธภัณฑ์เบียร์", "โรงเบียร์1900", "Harbin Beer", "Brewery"],
    shortBulletsTh: [
      "แหล่งกำเนิด 'เบียร์ฮาร์บิน' แบรนด์เบียร์ที่เก่าแก่ที่สุดในประวัติศาสตร์จีน (ก่อตั้งปี 1900)",
      "พิพิธภัณฑ์เบียร์ขนาดใหญ่ที่สุดในจีน จัดแสดงสายการผลิตโบราณและเทคโนโลยีทันสมัย",
      "รวมสิทธิ์ชิมเบียร์สดต้นตำรับกลั่นใหม่ฟรี (Fresh Draft Beer Tasting)"
    ],
    shortBulletsEn: [
      "Birthplace of Harbin Beer, China's very first commercial beer brand founded in 1900",
      "China's largest brewery museum spanning interactive holographic and vintage exhibits",
      "Complimentary tasting of freshly brewed, unfiltered draft beer straight from production"
    ],
    openingHoursTh: "อังคาร - อาทิตย์ 09:00 - 17:00 น. (ปิดวันจันทร์)",
    openingHoursEn: "Tuesday - Sunday 09:00 - 17:00 (Closed Mondays)",
    bestTimeTh: "13:30 - 16:00 น. (ช่วงบ่าย ชิมเบียร์สดคู่กับของว่างอุ่นๆ)",
    bestTimeEn: "13:30 - 16:00 (Leisurely afternoon visit with fresh beer sampling)",
    ticketPriceTh: "บัตรเข้าชมรวมชิมเบียร์สด 50 หยวน (~250 บาท)",
    ticketPriceEn: "Admission including fresh beer tasting 50 RMB (~250 THB)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 18 กม. นั่งรถตู้ VIP หรือ DiDi 40-50 หยวน",
      fromAirport: "นั่งรถตู้ 35 นาที",
      inside: "อาคารติดแอร์/ฮีตเตอร์ทันสมัย มีบาร์เบียร์สด และโรงภาพยนตร์ 4D"
    },
    transportEn: {
      fromStation: "18 km south; DiDi taxi ~40-50 RMB",
      fromAirport: "Taxi / private van ~35 mins",
      inside: "Fully heated modern museum complex, craft beer tavern, and 4D cinema"
    },
    highlightsTh: [
      "ก่อตั้งขึ้นโดยนายวาเบลฟสกี (Jan Wróblewski) พ่อค้าชาวโปแลนด์-รัสเซียเพื่อรองรับคนงานรถไฟ",
      "ชมรถไฟโบราณจำลองยุค 1900 บาร์รัสเซียโบราณ และถังหมักเบียร์ทองแดงขนาดยักษ์",
      "มีโรงภาพยนตร์ 4D เสมือนจริงพานักท่องเที่ยวจำลองการเดินทางไปกับฟองเบียร์",
      "ชิมเบียร์สดที่ยังไม่ผ่านการกรอง (Unfiltered White Beer) รสชาตินุ่มละมุน หอมกลิ่นมอลต์"
    ],
    highlightsEn: [
      "Founded by Polish-Russian merchant Jan Wróblewski in 1900 to supply railway workers",
      "Authentic vintage 1900 train cars, copper fermentation tanks, and retro Russian taverns",
      "Immersive 4D dynamic theater taking guests on a sensory journey through brewing ingredients",
      "Sample fresh, unpasteurized wheat and draft craft beers with rich, aromatic malt finishes"
    ],
    descriptionTh: "พิพิธภัณฑ์เบียร์ฮาร์บิน (Harbin Beer Museum) บอกเล่าเรื่องราวความผูกพันระหว่างเมืองฮาร์บินกับวัฒนธรรมเบียร์ที่มีมายาวนานกว่า 120 ปี ที่นี่เป็นจุดกำเนิดของเบียร์ขวดแรกในประเทศจีน ภายในจัดแสดงนิทรรศการมัลติมีเดียอันทันสมัย ควบคู่กับประวัติศาสตร์ยุคบุกเบิก และปิดท้ายด้วยการชิมเบียร์สดแสนอร่อย",
    descriptionEn: "Harbin Beer Museum celebrates China's oldest brewing legacy, established in 1900. Spanning over 4,000 square meters, the museum blends European brewing antiquities with interactive exhibits and ends at a convivial German-style beer hall with complimentary draft tastings."
  },

  {
    id: 19,
    nameTh: "สวนดนตรีฮาร์บิน & โบสถ์ยิวโบราณ",
    nameZh: "音乐公园与哈尔滨犹太总会堂",
    pinyin: "Yīnyuè Gōngyuán & Yóutài Zǒnghuìtáng",
    nameEn: "Harbin Music Park & Jewish New Synagogue",
    category: "culture_heritage",
    categoryLabelTh: "เมืองแห่งดนตรี & ประวัติศาสตร์ชาวยิว",
    categoryLabelEn: "City of Music & Jewish Heritage",
    categoryColor: "#b45309",
    pastelBg: "#fef3c7",
    badgeColor: "#fde68a",
    doodleBorderColor: "#92400e",
    doodleIcon: "🎻",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "แลนด์มาร์กริมแม่น้ำซงฮัว เมืองแห่งดนตรีของ UNESCO ประติมากรรมตุ๊กตาหิมะยักษ์ริมแม่น้ำ และโบสถ์ยิวโบราณที่ใหญ่ที่สุดในจีน",
    ratingDescEn: "Riverside park honoring Harbin's UNESCO City of Music title, featuring the giant snowman and Far East's largest synagogue",
    coords: [45.7610, 126.5780],
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
    tags: ["สวนดนตรี", "ตุ๊กตาหิมะยักษ์", "โบสถ์ยิว", "City of Music", "Giant Snowman"],
    shortBulletsTh: [
      "ประติมากรรมตุ๊กตาหิมะยักษ์ (Giant Snowman) สูง 18 เมตร แลนด์มาร์กถ่ายรูปไวรัลประจำฤดูหนาว",
      "สวนสาธารณะริมแม่น้ำซงฮัวที่ออกแบบตามธีมดนตรีคลาสสิก ฉลองเมืองแห่งดนตรียูเนสโก",
      "โบสถ์ยิวฮาร์บิน (New Synagogue) อาคารประวัติศาสตร์ของชุมชนชาวยิวกว่า 20,000 คนในอดีต"
    ],
    shortBulletsEn: [
      "Home to Harbin's famous viral 18-meter-tall Giant Snowman wearing red scarf and hat",
      "Riverside promenade designed with musical sculptures celebrating Harbin's UNESCO Music City status",
      "Largest historic synagogue in the Far East chronicling Harbin's vibrant 20,000 Jewish community"
    ],
    openingHoursTh: "สวนสาธารณะเปิด 24 ชม. (พิพิธภัณฑ์ประวัติศาสตร์ชาวยิวเปิด 09:00 - 17:00 น.)",
    openingHoursEn: "Music Park open 24/7 (Jewish History Museum 09:00 - 17:00)",
    bestTimeTh: "14:00 - 16:30 น. (ถ่ายรูปคู่ตุ๊กตาหิมะยักษ์ แสงแดดสะท้อนหิมะอบอุ่น)",
    bestTimeEn: "14:00 - 16:30 (Best lighting for taking photos with the giant snowman)",
    ticketPriceTh: "สวนดนตรีและถ่ายรูปตุ๊กตาหิมะฟรี (พิพิธภัณฑ์ประวัติศาสตร์ชาวยิว 25 หยวน)",
    ticketPriceEn: "Music Park & Giant Snowman Free (Jewish Museum ~25 RMB)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 4.5 กม. นั่ง DiDi 12-15 หยวน",
      fromAirport: "นั่งรถตู้ 40 นาที",
      inside: "ทางเดินเลียบแม่น้ำกว้างขวาง ลานประติมากรรมหิมะ และม้านั่งพักผ่อน"
    },
    transportEn: {
      fromStation: "4.5 km west of station; DiDi ~12-15 RMB",
      fromAirport: "Taxi / private van ~40 mins",
      inside: "Wide riverside boardwalk, snow photography plazas, and warm rest kiosks"
    },
    highlightsTh: [
      "ตุ๊กตาหิมะยักษ์ตัวอ้วนกลมสวมหมวกและผ้าพันคอสีแดง เป็นสัญลักษณ์ต้อนรับฤดูหนาวที่ทุกคนต้องแวะถ่ายรูป",
      "ทางเดินประดับด้วยประติมากรรมเครื่องดนตรีคลาสสิก อาทิ ไวโอลิน ฮาร์ป และโน้ตดนตรี",
      "โบสถ์ยิวฮาร์บิน (Harbin Jewish New Synagogue) จัดแสดงเรื่องราวของชาวยิวในฮาร์บินที่มีบทบาททางดนตรี",
      "มองเห็นพระอาทิตย์ตกดินเหนือแม่น้ำซงฮัวในบรรยากาศเงียบสงบและโรแมนติก"
    ],
    highlightsEn: [
      "Adorable chubby 18m Giant Snowman with ruby red beanie and knitted scarf, a global photo sensation",
      "Musical monuments and marble sculptures depicting violins, cellos, and sheet music along the river",
      "Jewish New Synagogue preserving historical archives of prominent Jewish musicians who shaped Harbin",
      "Tranquil uncrowded riverside benches to soak in golden winter sunsets over the frozen waters"
    ],
    descriptionTh: "สวนดนตรีฮาร์บิน (Harbin Music Park) ตั้งอยู่ริมฝั่งใต้ของแม่น้ำซงฮัว เพื่อเฉลิมฉลองการได้รับการยกย่องจาก UNESCO ให้เป็น 'เมืองแห่งดนตรี' (City of Music) ในช่วงฤดูหนาว ที่นี่จะกลายเป็นบ้านของ 'ตุ๊กตาหิมะยักษ์' ที่มีชื่อเสียงโด่งดังไปทั่วโลก พร้อมทั้งเชื่อมโยงกับโบสถ์ยิวโบราณที่สะท้อนประวัติศาสตร์อันหลากหลายทางวัฒนธรรมของฮาร์บิน",
    descriptionEn: "Harbin Music Park stretches along the southern shore of the Songhua River celebrating Harbin's distinguished status as a UNESCO City of Music. In winter, it draws worldwide acclaim as the home of Harbin's viral Giant Snowman, accompanied by the nearby Jewish Synagogue museum."
  },

  {
    id: 20,
    nameTh: "หมู่บ้านหิมะจีน เสวี่ยเซียง",
    nameZh: "中国雪乡 (双峰林场)",
    pinyin: "Zhōngguó Xuěxiāng",
    nameEn: "China Snow Town (Xuexiang)",
    category: "ice_snow",
    activityType: "visit",
    defaultDuration: 180,
    categoryLabelTh: "อาณาจักรเห็ดหิมะ & เทพนิยาย",
    categoryLabelEn: "Snow Mushroom Fairytale Village",
    categoryColor: "#0284c7",
    pastelBg: "#e0f2fe",
    badgeColor: "#bae6fd",
    doodleBorderColor: "#0369a1",
    doodleIcon: "🍄",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "หมู่บ้านเห็ดหิมะธรรมชาติหนา 2 เมตร โคมไฟสีแดงสว่างไสวยามค่ำคืนบนถนนเสวี่ยยวิ่น และจุดชมวิวมุมสูง",
    ratingDescEn: "Famous fairytale wooden village blanketed in 2-meter-thick natural 'snow mushrooms' and glowing red lanterns",
    coords: [44.3936, 128.2588],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    tags: ["หมู่บ้านหิมะ", "เสวี่ยเซียง", "เห็ดหิมะ", "Snow Town", "Xuexiang"],
    shortBulletsTh: [
      "ปรากฏการณ์เห็ดหิมะธรรมชาติ (Snow Mushrooms) หนานุ่มปกคลุมหลังคาบ้านไม้",
      "เดินเล่นถนนเสวี่ยยวิ่น (Xueyun Street) ชมโคมแดงและขบวนพาเหรดยามค่ำคืน",
      "ทางเดินไม้ชมวิวเขาปั้งฉุย (Bangchui Boardwalk) มองเห็นหมู่บ้านหิมะมุมสูง"
    ],
    shortBulletsEn: [
      "Iconic natural 'Snow Mushrooms' formed by 7 months of abundant mountain snowfall",
      "Stroll Xueyun Street lined with glowing red lanterns and evening folk parades",
      "3.2km Bangchui Mountain wooden boardwalk offering aerial fairytale village views"
    ],
    openingHoursTh: "เปิดบริการ 24 ชั่วโมง (พ.ย. - มี.ค.)",
    openingHoursEn: "Open 24 hours daily (Nov - Mar)",
    bestTimeTh: "16:00 - 20:00 น. (ช่วงเปิดโคมไฟสีแดงตัดกับหิมะสีน้ำเงินเข้มยามพลบค่ำ)",
    bestTimeEn: "16:00 - 20:00 (Blue hour when red lanterns illuminate snowy rooftops)",
    ticketPriceTh: "บัตรเข้าชม 120 หยวน (รวมรถชัทเทิลบัสอุทยาน 48 ชม.)",
    ticketPriceEn: "120 RMB admission (includes park shuttle bus valid for 48h)",
    transportTh: {
      fromStation: "นั่งรถไฟความเร็วสูงไปลงสถานี Yabuli West (1.2 ชม.) แล้วต่อรถบัสทางหลวงหิมะอีก 1.5 ชม.",
      fromAirport: "รถตู้ VIP ส่วนตัวประมาณ 4.5 ชม.",
      inside: "ทางเดินเท้าและรถชัทเทิลบัสไฟฟ้าภายในหมู่บ้าน"
    },
    transportEn: {
      fromStation: "HSR to Yabuli West (1h 15m) + scenic highway shuttle (1.5h)",
      fromAirport: "Private van ~4.5 hours",
      inside: "100% pedestrianized snow streets & park electric shuttles"
    },
    highlightsTh: [
      "บ้านในฝัน (Dream Home) จุดถ่ายภาพเห็ดหิมะที่สมบูรณ์ที่สุด",
      "ถนนคนเดินเสวี่ยยวิ่นและลานกองไฟเต้นระบำพื้นเมือง",
      "ทางเดินไม้ชมวิวมุมสูงยาว 3.2 กิโลเมตร"
    ],
    highlightsEn: [
      "Dream Home courtyard featuring world-famous snow mushroom cottages",
      "Xueyun Pedestrian Street bonfire party and Yangge folk dance",
      "Bangchui Mountain panoramic elevated wooden walkway"
    ],
    descriptionTh: "หมู่บ้านหิมะจีน (China Snow Town - เสวี่ยเซียง) คือดินแดนหิมะอันดับ 1 ของประเทศจีน ด้วยหิมะที่ตกยาวนานถึง 7 เดือนและมีความหนานุ่มเกาะตัวเป็นรูปเห็ดหิมะบนหลังคาบ้านไม้ ยามค่ำคืนโคมไฟสีแดงจะส่องสว่างสร้างบรรยากาศดั่งเทพนิยาย",
    descriptionEn: "China Snow Town (Xuexiang) is celebrated for China's deepest and most picturesque snowfall, where sticky snow clings to wooden eaves forming whimsical 'snow mushrooms' illuminated by crimson lanterns at night."
  },

  {
    id: 21,
    nameTh: "หุบเขาหิมะจีน เสวี่ยกู่",
    nameZh: "中国雪谷 (东升林场)",
    pinyin: "Zhōngguó Xuěgǔ",
    nameEn: "China Snow Valley (Xuegu)",
    category: "ice_snow",
    activityType: "walk",
    defaultDuration: 240,
    categoryLabelTh: "ชนบทดั้งเดิม & เดินป่าหิมะข้ามเขา",
    categoryLabelEn: "Rustic Snow Village & Alpine Trek",
    categoryColor: "#059669",
    pastelBg: "#d1fae5",
    badgeColor: "#a7f3d0",
    doodleBorderColor: "#047857",
    doodleIcon: "🌲",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "หมู่บ้านชนบทตงเป่ยแท้ไร้แสงสีพาณิชย์ จุดเริ่มต้นเดินป่าหิมะข้ามเขาหยางเฉ่าซาน 15 กม. สู่ Snow Town",
    ratingDescEn: "Authentic rustic forestry village & starting point of the legendary 15km Mount Yangcao snow trek to Snow Town",
    coords: [44.4530, 128.1650],
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80",
    tags: ["หุบเขาหิมะ", "เสวี่ยกู่", "เดินป่าหิมะ", "Snow Valley", "Xuegu"],
    shortBulletsTh: [
      "หมู่บ้านป่าไม้ดั้งเดิม เงียบสงบ อบอุ่นด้วยวิถีชีวิตชาวตงเป่ยแท้ๆ",
      "จุดเริ่มต้นเส้นทางเดินป่าหิมะข้ามเขาหยางเฉ่าซาน (Yangcaoshan Trek 15 กม.)",
      "สนุกกับกิจกรรมสาดน้ำร้อนกลายเป็นน้ำแข็ง (泼水成冰) ยามเช้า"
    ],
    shortBulletsEn: [
      "Uncommercialized traditional Dongbei forestry village on the north slope of Mt. Yangcao",
      "Trailhead for the iconic 15km alpine snow forest traverse to China Snow Town",
      "Experience freezing boiling water into instant ice crystals in -30°C morning air"
    ],
    openingHoursTh: "เปิดบริการ 24 ชั่วโมง (พ.ย. - มี.ค.)",
    openingHoursEn: "Open 24 hours daily (Nov - Mar)",
    bestTimeTh: "07:30 - 14:00 น. (ช่วงเวลาเดินป่าหิมะข้ามเขาชมป่าสนน้ำค้างแข็ง)",
    bestTimeEn: "07:30 - 14:00 (Best window for the scenic alpine snow forest hike)",
    ticketPriceTh: "เข้าหมู่บ้านฟรี (ตั๋วผ่านเส้นทางเดินเขาหยางเฉ่าซาน ~40 หยวน)",
    ticketPriceEn: "Free village access (Mt. Yangcao trail ticket ~40 RMB)",
    transportTh: {
      fromStation: "นั่งรถตู้จากฮาร์บินประมาณ 4 - 4.5 ชั่วโมง",
      fromAirport: "รถตู้ส่วนตัวประมาณ 4.5 ชั่วโมง",
      inside: "เดินเท้าและเลื่อนม้าลากพื้นบ้าน"
    },
    transportEn: {
      fromStation: "Private van or tourist shuttle from Harbin ~4 - 4.5 hours",
      fromAirport: "Private van ~4.5 hours",
      inside: "Walking trails, horse-drawn sleds, and snowmobiles"
    },
    highlightsTh: [
      "เส้นทางเดินป่าหิมะข้ามเขาหยางเฉ่าซาน (ความสูง 1,235 เมตร)",
      "นอนเตียงคั่งอุ่นแบบโบราณ (Traditional Heated Kang Bed)",
      "สาดน้ำร้อนกลายเป็นเกล็ดน้ำแข็งกลางแจ้ง"
    ],
    highlightsEn: [
      "15km Mount Yangcao snow forest trek (summit 1,235m)",
      "Authentic heated brick Kang beds & iron-pot stews",
      "Splash-water-into-ice winter photography experience"
    ],
    descriptionTh: "หุบเขาหิมะจีน (China Snow Valley - เสวี่ยกู่) ตั้งอยู่ฝั่งทิศเหนือของเขาหยางเฉ่าซาน เป็นหมู่บ้านชนบทที่ยังคงความบริสุทธิ์ดั้งเดิม และเป็นจุดเริ่มต้นของการเดินป่าหิมะข้ามเขาสู่หมู่บ้านหิมะ Snow Town",
    descriptionEn: "China Snow Valley (Xuegu) offers a serene, authentic Dongbei rural winter experience and serves as the basecamp for the famous 15km overland snow trek across Mount Yangcao into Snow Town."
  },

  {
    id: 22,
    nameTh: "ภัตตาคารอาหารรัสเซีย หัวเหมย (1925)",
    nameZh: "华梅西餐厅 (中央大街店)",
    pinyin: "Huáméi Xīcāntīng",
    nameEn: "Huamei Western Restaurant (Russian Cuisine)",
    category: "food_dining",
    activityType: "eat",
    defaultDuration: 75,
    categoryLabelTh: "อาหารรัสเซียคลาสสิก (การกิน)",
    categoryLabelEn: "Historic Russian Dining",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🍲",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ภัตตาคารอาหารรัสเซียเก่าแก่ตั้งแต่ปี 1925 บนถนนจงหยาง ซุปบอร์ชต์เนื้อตุ๋น สตูว์เนื้ออบโถขนมปัง และขนมปังต้าเลี่ยปา",
    ratingDescEn: "Legendary 1925 Russian restaurant on Zhongyang St. famous for Borsch soup, pot-baked beef, and Dalieba bread",
    coords: [45.7718, 126.6202],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    tags: ["อาหารรัสเซีย", "ร้านหัวเหมย", "ซุปบอร์ชต์", "Huamei", "Russian Food"],
    shortBulletsTh: [
      "ภัตตาคารอาหารตะวันตกสไตล์รัสเซียที่เก่าแก่ที่สุดในฮาร์บิน ก่อตั้งปี 1925",
      "เมนูซิกเนเจอร์: ซุปบีทรัตรัสเซีย (Borsch), เนื้อตุ๋นอบในโถขนมปัง, กุ้งทอดซอสครีม",
      "ด้านหน้ามีเคาน์เตอร์ขายขนมปังรัสเซียอบสดใหม่คิวยาวทุกวัน"
    ],
    shortBulletsEn: [
      "Harbin's oldest and most iconic Russian restaurant founded in 1925 on Zhongyang Street",
      "Signature dishes: Russian Borsch soup, braised beef in bread pot, and Olivier salad",
      "Features a famous street-level Russian bakery selling warm sourdough bread"
    ],
    openingHoursTh: "ทุกวัน 11:00 - 21:00 น. (ร้านขนมปังด้านหน้าเปิด 09:00 น.)",
    openingHoursEn: "Daily 11:00 - 21:00 (Bakery counter opens 09:00)",
    bestTimeTh: "11:30 - 13:30 น. (มื้อกลางวัน) หรือ 17:30 - 19:30 น. (มื้อค่ำ)",
    bestTimeEn: "11:30 - 13:30 (Lunch) or 17:30 - 19:30 (Dinner)",
    ticketPriceTh: "ค่าอาหารเฉลี่ย 100-160 หยวน/ท่าน (~500-800 บาท)",
    ticketPriceEn: "Average meal ~100-160 RMB per person",
    transportTh: {
      fromStation: "ตั้งอยู่ใจกลางถนนคนเดินจงหยาง เลขที่ 112",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ห้องอาหาร 3 ชั้น ตกแต่งสไตล์พระราชวังรัสเซียคลาสสิก"
    },
    transportEn: {
      fromStation: "Located at No. 112 Zhongyang Pedestrian Street",
      fromAirport: "Taxi ~45 mins",
      inside: "3-story dining halls decorated in classic Imperial Russian style"
    },
    highlightsTh: [
      "ซุปบอร์ชต์ (红菜汤) รสชาติเข้มข้นกลมกล่อม เสิร์ฟร้อนๆ คลายหนาว",
      "เนื้อวัวตุ๋นเครื่องเทศรัสเซียในหม้อดินปิดหน้าด้วยแป้งขนมปังอบกรอบ",
      "สถาปัตยกรรมภายในแบบรัสเซียดั้งเดิม"
    ],
    highlightsEn: [
      "Authentic rich Russian Borsch soup served piping hot",
      "Casserole beef stew sealed under a golden baked pastry dome",
      "Historic Kremlin-inspired interior design"
    ],
    descriptionTh: "ภัตตาคารหัวเหมย (Huamei Western Restaurant) เปิดให้บริการมาตั้งแต่ปี 1925 บนถนนคนเดินจงหยาง เป็นสัญลักษณ์แห่งวัฒนธรรมอาหารรัสเซียในฮาร์บิน",
    descriptionEn: "Established in 1925, Huamei Western Restaurant is an culinary institution on Zhongyang Street serving classic Russian fare in opulent heritage dining rooms."
  },

  {
    id: 23,
    nameTh: "ร้านเหล่าฉูเจีย ต้นกำเนิดกัวเปาโร่ว 100 ปี",
    nameZh: "老厨家 (道台食府 - 锅包肉创始店)",
    pinyin: "Lǎochújiā (Guōbāoròu)",
    nameEn: "Laochushi Restaurant (Birthplace of Guobaorou)",
    category: "food_dining",
    activityType: "eat",
    defaultDuration: 75,
    categoryLabelTh: "อาหารตงเป่ยระดับตำนาน (การกิน)",
    categoryLabelEn: "100-Year Dongbei Culinary Legend",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🍖",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ร้านผู้คิดค้นเมนู 'กัวเปาโร่ว' (หมูทอดกรอบซอสเปรี้ยวหวานตงเป่ย) แห่งแรกของโลกตั้งแต่สมัยราชวงศ์ชิง",
    ratingDescEn: "Original creator of Harbin's famous Guobaorou (crispy sweet & sour pork) dating back over 100 years",
    coords: [45.7872, 126.6628],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    tags: ["กัวเปาโร่ว", "เหล่าฉูเจีย", "อาหารตงเป่ย", "Guobaorou", "Laochushi"],
    shortBulletsTh: [
      "ต้นกำเนิดเมนูประจำเมืองฮาร์บิน 'กัวเปาโร่ว' (หมูทอดซอสเปรี้ยวหวานกรอบนอกนุ่มใน)",
      "สืบทอดสูตรลับพ่อครัวประจำจวนข้าหลวงสมัยราชวงศ์ชิงมากว่า 4 รุ่น",
      "มีพิพิธภัณฑ์อาหารฮาร์บินขนาดย่อมจัดแสดงอยู่ภายในร้าน"
    ],
    shortBulletsEn: [
      "Historical birthplace of Guobaorou (Harbin crispy sweet-and-sour pork tenderloin)",
      "4th-generation Qing dynasty official chef heritage recipe",
      "Located right inside the Chinese Baroque Historic Block & Zhongyang Street"
    ],
    openingHoursTh: "ทุกวัน 10:30 - 21:00 น.",
    openingHoursEn: "Daily 10:30 - 21:00",
    bestTimeTh: "11:30 - 13:00 น. หรือ 17:30 - 19:30 น.",
    bestTimeEn: "11:30 - 13:00 or 17:30 - 19:30",
    ticketPriceTh: "ค่าอาหารเฉลี่ย 70-110 หยวน/ท่าน (~350-550 บาท)",
    ticketPriceEn: "Average meal ~70-110 RMB per person",
    transportTh: {
      fromStation: "สาขา Chinese Baroque (Lao Daowai) หรือสาขาถนนคนเดินจงหยาง",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "บรรยากาศโรงเตี๊ยมย้อนยุค มีฮีตเตอร์อุ่นสบาย"
    },
    transportEn: {
      fromStation: "Located in Chinese Baroque Block (and branch on Zhongyang St.)",
      fromAirport: "Taxi ~45 mins",
      inside: "Retro Republican-era dining hall with culinary museum exhibits"
    },
    highlightsTh: [
      "กัวเปาโร่วสูตรต้นตำรับ แป้งบางกรอบ ซอสเปรี้ยวหวานหอมกลิ่นขิงซอย",
      "ของหวานเมฆหิมะทอดไส้ถั่วแดง (เสวี่ยเมี่ยนโต้วซา - 雪绵豆沙) นุ่มฟูเหมือนปุยหิมะ"
    ],
    highlightsEn: [
      "Signature crispy Guobaorou with amber sweet-vinegar glaze",
      "Snow-Cotton Red Bean Puff (Xuemiandousha), a cloud-like winter dessert"
    ],
    descriptionTh: "ร้านเหล่าฉูเจีย (Laochushi) คือร้านอาหารประวัติศาสตร์ที่คิดค้นเมนูกัวเปาโร่วเป็นแห่งแรกเมื่อกว่า 100 ปีก่อน เพื่อรับรองแขกชาวรัสเซียและขุนนางในฮาร์บิน",
    descriptionEn: "Laochushi is the celebrated birthplace of Guobaorou, invented in the late Qing Dynasty by Chef Zheng Xingwen by adapting Beijing salty stir-fry into a sweet-and-sour crispy delicacy for Russian guests."
  },

  {
    id: 24,
    nameTh: "ไอศกรีมหม่าเตี๋ยเอ่อร์ & โรงแรมโมเดิร์น (1906)",
    nameZh: "马迭尔冷饮厅 (马迭尔冰棍)",
    pinyin: "Mǎdié'ěr Bīnggùn",
    nameEn: "Madieer Ice Popsicle & Modern Hotel (1906)",
    category: "food_dining",
    activityType: "eat",
    defaultDuration: 30,
    categoryLabelTh: "ของหวาน & สตรีทฟู้ดห้ามพลาด",
    categoryLabelEn: "Iconic Winter Street Treat",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🍦",
    rating: 4.9,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ธรรมเนียมปฏิบัติอันดับ 1 ของฮาร์บิน: กินไอศกรีมแท่งนมสดวานิลลาสูตรปี 1906 เดินท้าความหนาว -15°C บนถนนจงหยาง",
    ratingDescEn: "Harbin's #1 winter ritual: eating a rich 1906 recipe Madieer vanilla milk popsicle outdoors in -15°C snow",
    coords: [45.7712, 126.6205],
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80",
    tags: ["ไอศกรีมหม่าเตี๋ยเอ่อร์", "ถนนจงหยาง", "ของกินฮาร์บิน", "Madieer", "Popsicle"],
    shortBulletsTh: [
      "ไอศกรีมแท่งรสนมวานิลลาเข้มข้นสูตรดั้งเดิมตั้งแต่ปี 1906 ไม่ใส่บรรจุภัณฑ์",
      "วางขายในลังเปิดโล่งริมถนนจงหยาง เพราะอากาศข้างนอกเย็นกว่าช่องฟรีซ!",
      "แวะชิมคู่กับไส้กรอกแดงฮาร์บินย่างร้อนๆ และโยเกิร์ตหม่าเตี๋ยเอ่อร์"
    ],
    shortBulletsEn: [
      "Unwrapped creamy vanilla milk popsicle crafted since 1906 at the historic Modern Hotel",
      "Sold from open-air tubs on Zhongyang Street since winter air is colder than a freezer",
      "Pair with hot grilled Harbin red sausages and freshly baked Russian pastries"
    ],
    openingHoursTh: "ทุกวัน 09:00 - 22:30 น.",
    openingHoursEn: "Daily 09:00 - 22:30",
    bestTimeTh: "ตลอดทั้งวันและช่วงค่ำขณะเดินเล่นถนนคนเดินจงหยาง",
    bestTimeEn: "Anytime while strolling Zhongyang Pedestrian Street",
    ticketPriceTh: "แท่งละ 5 หยวน (~25 บาท)",
    ticketPriceEn: "5 RMB per popsicle (~25 THB)",
    transportTh: {
      fromStation: "ตั้งอยู่กลางถนนคนเดินจงหยาง หน้าโรงแรม Modern Hotel",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ซุ้มจำหน่ายริมถนนคนเดิน ซื้อแล้วเดินทานชมไฟประดับได้ทันที"
    },
    transportEn: {
      fromStation: "Mid-section of Zhongyang Pedestrian Street outside Modern Hotel",
      fromAirport: "Taxi ~45 mins",
      inside: "Walk-up street kiosk window along the cobblestone boulevard"
    },
    highlightsTh: [
      "ไอศกรีมแท่งรสนมสดแท้ หอมหวานละมุนละไม",
      "ตึกโรงแรม Modern Hotel สถาปัตยกรรมอาร์ตนูโวปี 1906"
    ],
    highlightsEn: [
      "Original 1906 creamy milk popsicle recipe",
      "Historic 1906 Art Nouveau Modern Hotel backdrop"
    ],
    descriptionTh: "มาถึงฮาร์บินแล้วไม่ได้กินไอศกรีมหม่าเตี๋ยเอ่อร์ (Madieer Popsicle) ท่ามกลางหิมะ ถือว่ายังมาไม่ถึง! ความพิเศษคือการกินไอศกรีมหอมมันขณะสวมเสื้อขนเป็ดท่ามกลางอากาศติดลบ",
    descriptionEn: "No trip to Harbin is complete without biting into a famous Madieer vanilla popsicle while strolling the snowy cobblestones of Zhongyang Street in sub-zero weather."
  },

  {
    id: 25,
    nameTh: "หม้อไฟทองเหลืองตงเป่ย & เนื้อแกะสไลซ์",
    nameZh: "东北老北京铜锅涮肉 / 老昌春饼",
    pinyin: "Tóngguō Shuànròu",
    nameEn: "Dongbei Copper Pot Hot Pot & Spring Pancakes",
    category: "food_dining",
    activityType: "eat",
    defaultDuration: 90,
    categoryLabelTh: "หม้อไฟคลายหนาว (การกิน)",
    categoryLabelEn: "Winter Warming Hot Pot",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🥘",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "หม้อไฟทองเหลืองถ่านไม้ร้อนกรุ่น เนื้อแกะและเนื้อวัวสไลซ์ลวกในซุปกระดูกผักกาดดอง ทานคู่ซอสงาเข้มข้นคลายหนาว -20°C",
    ratingDescEn: "Charcoal-heated traditional copper pot hot pot with tender lamb, pickled cabbage broth, and sesame dip",
    coords: [45.7695, 126.6225],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    tags: ["หม้อไฟตงเป่ย", "หม้อไฟทองเหลือง", "ผักกาดดอง", "Hot Pot", "Dongbei Food"],
    shortBulletsTh: [
      "หม้อไฟทองเหลืองโบราณใส่ถ่านไม้ตรงกลาง น้ำซุปเดือดปุดๆ ให้ความอบอุ่นสูงสุด",
      "ไฮไลท์คือน้ำซุปผักกาดดองตงเป่ย (Suan Cai) รสกลมกล่อมตัดเลี่ยน",
      "เนื้อแกะมองโกเลียในและเนื้อวัวสไลซ์บางเฉียบ จิ้มซอสงาสูตรพิเศษ"
    ],
    shortBulletsEn: [
      "Traditional charcoal-fired brass chimney hot pot ideal for -20°C evenings",
      "Signature Dongbei fermented pickled cabbage (Suan Cai) & bone marrow broth",
      "Hand-sliced Inner Mongolian lamb and beef with rich sesame-peanut sauce"
    ],
    openingHoursTh: "ทุกวัน 11:00 - 22:30 น.",
    openingHoursEn: "Daily 11:00 - 22:30",
    bestTimeTh: "18:00 - 20:30 น. (มื้อค่ำเติมความอบอุ่นหลังเดินเล่นหิมะ)",
    bestTimeEn: "18:00 - 20:30 (Cozy dinner after outdoor winter sightseeing)",
    ticketPriceTh: "เฉลี่ย 80-120 หยวน/ท่าน (~400-600 บาท)",
    ticketPriceEn: "Average ~80-120 RMB per person",
    transportTh: {
      fromStation: "ตั้งอยู่ใกล้ถนนคนเดินจงหยางและโบสถ์เซนต์โซเฟีย เดินเพียง 5 นาที",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ห้องอาหารติดฮีตเตอร์อุ่นสบาย บริการประทับใจ"
    },
    transportEn: {
      fromStation: "5 mins walk from Zhongyang Street & St. Sophia Cathedral",
      fromAirport: "Taxi ~45 mins",
      inside: "Warm indoor dining rooms with private booths"
    },
    highlightsTh: [
      "หม้อไฟทองเหลืองซุปใสและซุปผักกาดดอง",
      "แป้งปิ่งบางนุ่มห่อหมูผัดซอสและถั่วงอก (Laochang Spring Pancakes)"
    ],
    highlightsEn: [
      "Brass chimney hot pot with pickled cabbage & clear bone broth",
      "Paper-thin spring pancakes wrapped with Peking-style shredded pork"
    ],
    descriptionTh: "มื้อค่ำในฤดูหนาวของฮาร์บินไม่มีอะไรฟินไปกว่าการล้อมวงทานหม้อไฟทองเหลืองร้อนๆ น้ำซุปต้มกระดูกใส่ผักกาดดองเปรี้ยวกำลังดี ลวกเนื้อแกะนุ่มๆ คลายความหนาวได้ทันที",
    descriptionEn: "Nothing beats Harbin's sub-zero evening chill like gathering around a steaming charcoal copper hot pot brimming with pickled cabbage broth and tender lamb slices."
  },

  {
    id: 26,
    nameTh: "ปลาแม่น้ำซงฮัวตุ๋นหม้อไฟกระทะเหล็ก (เที่ยกัวตุน)",
    nameZh: "江北老院子铁锅炖江鱼",
    pinyin: "Tiěguō Dùn Jiāngyú",
    nameEn: "Tieguo Dun (Songhua River Iron Cauldron Fish Stew)",
    category: "food_dining",
    activityType: "eat",
    defaultDuration: 80,
    categoryLabelTh: "หม้อไฟกระทะเหล็กโบราณ (การกิน)",
    categoryLabelEn: "Traditional Iron Cauldron Stew",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🐟",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "อาหารพื้นบ้านตงเป่ยขนานแท้ กระทะเหล็กใบยักษ์ฝังในโต๊ะ ตุ๋นปลาแม่น้ำซงฮัวสดๆ แปะแผ่นแป้งข้าวโพดรอบขอบกระทะ",
    ratingDescEn: "Authentic Dongbei wood-fired giant iron cauldron built into the table, braising fresh Songhua River fish & cornbread",
    coords: [45.8020, 126.6150],
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    tags: ["เที่ยกัวตุน", "ปลากระทะเหล็ก", "อาหารตงเป่ย", "Tieguo Dun", "Iron Pot Stew"],
    shortBulletsTh: [
      "กระทะเหล็กใบใหญ่ฝังอยู่กลางโต๊ะอาหาร ตุ๋นด้วยความร้อนสม่ำเสมอ",
      "ปลาแม่น้ำซงฮัวเนื้อแน่นหวาน ตุ๋นกับเต้าหู้ วุ้นเส้นมันเทศ และเห็ดป่า",
      "แปะแผ่นแป้งข้าวโพด (Tiebingzi) รอบขอบกระทะ ด้านล่างกรอบ ด้านบนนุ่มหอม"
    ],
    shortBulletsEn: [
      "Giant cast-iron cauldron embedded directly inside the dining table",
      "Fresh Songhua River fish slow-braised with frozen tofu, wide vermicelli, and wild mushrooms",
      "Sweet golden cornbread patties (Tiebingzi) baked right onto the hot iron rim"
    ],
    openingHoursTh: "ทุกวัน 10:30 - 21:30 น.",
    openingHoursEn: "Daily 10:30 - 21:30",
    bestTimeTh: "12:00 - 14:00 น. (แวะทานมื้อเที่ยงระหว่างเที่ยวสวนเสือไซบีเรียและเกาะพระอาทิตย์)",
    bestTimeEn: "12:00 - 14:00 (Ideal lunch stop between Siberian Tiger Park & Sun Island)",
    ticketPriceTh: "เฉลี่ย 70-100 หยวน/ท่าน (~350-500 บาท)",
    ticketPriceEn: "Average ~70-100 RMB per person",
    transportTh: {
      fromStation: "ตั้งอยู่ฝั่งเหนือแม่น้ำซงฮัว ระหว่างทางไปสวนเสือไซบีเรียและเกาะพระอาทิตย์",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ตกแต่งสไตล์บ้านชนบทตงเป่ยอบอุ่น โต๊ะกว้างขวาง"
    },
    transportEn: {
      fromStation: "North bank of Songhua River between Sun Island and Siberian Tiger Park",
      fromAirport: "Taxi ~45 mins",
      inside: "Cozy rustic Dongbei courtyard decor with heated dining rooms"
    },
    highlightsTh: [
      "ปลาแม่น้ำซงฮัวตุ๋นซอสเต้าเจี้ยวสูตรตงเป่ย",
      "แผ่นแป้งข้าวโพดอบขอบกระทะจิ้มน้ำซุปปลาเข้มข้น"
    ],
    highlightsEn: [
      "Slow-simmered Songhua River fish in savory soybean sauce",
      "Crispy-bottomed cornbread cakes baked on the cauldron wall"
    ],
    descriptionTh: "เที่ยกัวตุน (Tieguo Dun) คือวัฒนธรรมอาหารตงเป่ยที่อบอุ่นและสนุกสนานที่สุด โดยใช้กระทะเหล็กขนาดใหญ่ตุ๋นปลาแม่น้ำซงฮัวหรือไก่บ้านเห็ดป่ากลางโต๊ะอาหาร",
    descriptionEn: "Tieguo Dun (Iron Pot Stew) is the ultimate hearty Northeast Chinese comfort meal, cooked tableside in a massive cast-iron pot rimmed with golden cornbread."
  },

  {
    id: 27,
    nameTh: "ห้างชิวหลิน 1900 & ขนมปังรัสเซียต้าเลี่ยปา",
    nameZh: "秋林公司 (秋林里道斯红肠 & 大列巴)",
    pinyin: "Qiūlín Gōngsī (Dàlièbā)",
    nameEn: "Churin (Qiulin) 1900 Bakery & Harbin Red Sausage",
    category: "food_dining",
    activityType: "eat",
    defaultDuration: 60,
    categoryLabelTh: "ช้อปของฝาก & เบเกอรี่รัสเซีย",
    categoryLabelEn: "Russian Bakery & Souvenirs",
    categoryColor: "#e11d48",
    pastelBg: "#ffe4e6",
    badgeColor: "#fecdd3",
    doodleBorderColor: "#be123c",
    doodleIcon: "🥖",
    rating: 4.8,
    ratingStars: "⭐⭐⭐⭐⭐",
    ratingDescTh: "ห้างสรรพสินค้าเก่าแก่ที่ก่อตั้งโดยพ่อค้ารัสเซียปี 1900 แหล่งซื้อของฝากอันดับ 1 ไส้กรอกแดงชิวหลิน และขนมปังต้าเลี่ยปาลูกยักษ์",
    ratingDescEn: "Historic 1900 Russian department store famous for giant Dalieba sourdough loaves, Kvass, and smoked Red Sausages",
    coords: [45.7582, 126.6410],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    tags: ["ชิวหลิน", "ไส้กรอกแดง", "ต้าเลี่ยปา", "ของฝากฮาร์บิน", "Qiulin", "Dalieba"],
    shortBulletsTh: [
      "ห้างสรรพสินค้าแห่งแรกในฮาร์บิน ก่อตั้งโดยชาวรัสเซีย Ivan Churin ในปี 1900",
      "ต้นตำรับขนมปังรัสเซียก้อนยักษ์ 'ต้าเลี่ยปา' (Dalieba) หนักถึง 2 กิโลกรัม อบด้วยฟืนไม้เบิร์ช",
      "ไส้กรอกแดงฮาร์บิน (Qiulin Lidaosi Red Sausage) แพ็กสุญญากาศพร้อมซื้อเป็นของฝาก"
    ],
    shortBulletsEn: [
      "Harbin's oldest department store founded in 1900 by Russian entrepreneur Ivan Churin",
      "Home of the famous 2kg round Russian Dalieba sourdough bread baked in birch-wood ovens",
      " #1 spot to buy vacuum-packed Qiulin Lidaosi smoked Harbin Red Sausages & Russian chocolate"
    ],
    openingHoursTh: "ทุกวัน 09:00 - 20:30 น.",
    openingHoursEn: "Daily 09:00 - 20:30",
    bestTimeTh: "09:30 - 11:30 น. (แวะซื้อของฝากสดใหม่ก่อนเดินทางไปสนามบิน)",
    bestTimeEn: "09:30 - 11:30 (Morning shopping for fresh bakery items and gifts)",
    ticketPriceTh: "เข้าชมฟรี (ไส้กรอกแดงและขนมปังราคาตามน้ำหนัก)",
    ticketPriceEn: "Free entry (Bakery and delicacies priced per item)",
    transportTh: {
      fromStation: "ห่างจากสถานีฮาร์บิน 1.2 กม. ติดกับพิพิธภัณฑ์มณฑลเฮยหลงเจียง (Metro Line 1/2)",
      fromAirport: "นั่งรถตู้ 45 นาที",
      inside: "ชั้นใต้ดินเป็นโซนอาหารและเบเกอรี่รัสเซียหอมกรุ่นทั้งชั้น"
    },
    transportEn: {
      fromStation: "1.2 km from Harbin Station next to Provincial Museum (Metro Line 1 & 2)",
      fromAirport: "Taxi ~45 mins",
      inside: "Famous basement food hall filled with Russian bakeries and smokehouse counters"
    },
    highlightsTh: [
      "ขนมปังรัสเซียต้าเลี่ยปาขนาดเส้นผ่านศูนย์กลาง 25 ซม.",
      "ไส้กรอกแดงรมควันสูตรลิทัวเนีย-รัสเซียกว่า 120 ปี",
      "เครื่องดื่มมอลต์ขนมปังรัสเซีย 'ควาส' (Kvass / 格瓦斯)"
    ],
    highlightsEn: [
      "Giant 25cm-wide traditional Dalieba sourdough bread loaves",
      "120-year-old Lithuanian-Russian recipe smoked Red Sausages",
      "Authentic Russian fermented bread beverage 'Kvass'"
    ],
    descriptionTh: "ห้างชิวหลิน (Qiulin Company) ก่อตั้งตั้งแต่ปี 1900 เป็นสวรรค์ของคนรักขนมปังรัสเซียและของฝากประจำเมืองฮาร์บิน โดยเฉพาะขนมปังก้อนโตต้าเลี่ยปาและไส้กรอกแดงรมควัน",
    descriptionEn: "Founded in 1900 as Churin & Co., this historic department store is Harbin's premier culinary souvenir destination for giant Dalieba bread and wood-smoked red sausages."
  }
];

// Default 6-Day Harbin Slow-Life Timeline Itinerary (Walk, Eat, Visit, Transit)
// Includes Confirmed Flight Schedule from 1/S__27820034.jpg (Booking: 1622932337344364)
const DEFAULT_HARBIN_TIMELINE = {
  day1: {
    labelTh: "Day 1 (4 ธ.ค.)",
    labelEn: "Day 1 (Dec 4)",
    titleTh: "Bangkok (BKK) ➔ เซี่ยงไฮ้ (PVG) ➔ ฮาร์บิน (HRB) • ถนนจงหยาง",
    titleEn: "Bangkok (BKK) ➔ Shanghai (PVG) ➔ Harbin (HRB) • Zhongyang St.",
    items: [
      {
        uid: "d1-bkk",
        spotId: null,
        customNameTh: "Bangkok - BKK (ท่าอากาศยานสุวรรณภูมิ)",
        customNameEn: "Bangkok - BKK (Suvarnabhumi Airport)",
        time: "05:05",
        timeLabel: "05:05 น.",
        duration: 255,
        actType: "transit",
        isFlightStep: true,
        flightBadge: "✈️ MU8654 (FM848) · บิน 4 ชม. 15 นาที",
        noteTh: "ออกเดินทางจาก BKK สู่เซี่ยงไฮ้ (China Eastern MU8654 ดำเนินการโดย Shanghai Airlines FM848 | บริการอาหาร)",
        noteEn: "Depart Bangkok BKK to Shanghai PVG T1 (MU8654 / FM848 · 4h 15m · Meal included)"
      },
      {
        uid: "d1-pvg",
        spotId: null,
        customNameTh: "เซี่ยงไฮ้ - PVG T1 (ท่าอากาศยานซ่างไห่ผู่ตง T1)",
        customNameEn: "Shanghai - PVG T1 (Transit 3h 35m · Check-Through)",
        time: "10:20",
        timeLabel: "10:20 - 13:55 น.",
        duration: 215,
        actType: "transit",
        isFlightStep: true,
        flightBadge: "🔄 ต่อเครื่อง 3 ชม. 35 นาที · MU330 (FM9063)",
        noteTh: "ถึงเซี่ยงไฮ้ 10:20 น. (✓ ไม่ต้องรับสัมภาระและโหลดใหม่) · ออกเดินทางต่อ 13:55 น. ด้วยเที่ยวบิน MU330 / FM9063 (บิน 3 ชม. 5 นาที)",
        noteEn: "Arrive PVG T1 10:20 (Baggage check-through) · Depart 13:55 on MU330 / FM9063 to Harbin (3h 05m)"
      },
      {
        uid: "d1-hrb",
        spotId: 11,
        customNameTh: "ฮาร์บิน - HRB T2 (ท่าอากาศยานนานาชาติไท่ผิง T2)",
        customNameEn: "Harbin - HRB T2 (Taiping Intl Airport Arrival)",
        time: "17:00",
        timeLabel: "17:00 น.",
        duration: 60,
        actType: "transit",
        isFlightStep: true,
        flightBadge: "🛬 ถึงฮาร์บิน 17:00 น. (รวม 10 ชม. 55 นาที)",
        noteTh: "เดินทางถึงสนามบินฮาร์บินไท่ผิง T2 เวลา 17:00 น. รับสัมภาระ เปลี่ยนชุดกันหนาว และนั่งรถตู้เข้าเมือง",
        noteEn: "Touch down at Harbin Taiping Airport T2 at 17:00, collect baggage & transfer to downtown hotel"
      },
      {
        uid: "d1-2",
        spotId: 2,
        customNameTh: "ถนนคนเดินหินร้อยปีจงหยาง",
        customNameEn: "Zhongyang Pedestrian Street",
        time: "19:00",
        timeLabel: "19:00 - 20:00 น.",
        duration: 60,
        actType: "walk",
        noteTh: "เดินเล่นรับลมหนาวชมตึกยุโรปไฟสีทองบนถนนหินร้อยปีจงหยาง",
        noteEn: "Evening winter stroll along illuminated cobblestone Zhongyang Street"
      },
      {
        uid: "d1-3",
        spotId: 24,
        customNameTh: "ไอศกรีมหม่าเตี๋ยเอ่อร์ (ถนนจงหยาง)",
        customNameEn: "Madieer Ice Popsicle (1906)",
        time: "20:00",
        timeLabel: "20:00 - 20:30 น.",
        duration: 30,
        actType: "eat",
        noteTh: "ชิมไอศกรีมแท่งหม่าเตี๋ยเอ่อร์ท้าความหนาว -15°C และไส้กรอกแดงร้อนๆ",
        noteEn: "Taste iconic 1906 Madieer vanilla popsicle in -15°C snow"
      },
      {
        uid: "d1-4",
        spotId: 25,
        customNameTh: "หม้อไฟทองเหลืองตงเป่ย & เนื้อแกะสไลซ์",
        customNameEn: "Dongbei Copper Pot Hot Pot",
        time: "20:30",
        timeLabel: "20:30 - 21:45 น.",
        duration: 75,
        actType: "eat",
        noteTh: "มื้อค่ำหม้อไฟทองเหลืองตงเป่ย เนื้อแกะสไลซ์และซุปผักกาดดองคลายหนาว",
        noteEn: "Warming Dongbei charcoal copper pot lamb hot pot dinner"
      }
    ]
  },
  day2: {
    labelTh: "Day 2 (5 ธ.ค.)",
    labelEn: "Day 2 (Dec 5)",
    titleTh: "ตลาดเช้า • โบสถ์เซนต์โซเฟีย • อาหารรัสเซีย • สะพานรถไฟ",
    titleEn: "Morning Market • St. Sophia • Russian Lunch • Railway Bridge",
    items: [
      { uid: "d2-1", spotId: 15, time: "07:30", timeLabel: "07:30 - 08:30 น.", duration: 60, actType: "eat", noteTh: "เดินตลาดเช้าหงจวน ชมไอควันยามเช้า ชิมซาลาเปาทอดและน้ำเต้าหู้ร้อน", noteEn: "Walk & eat through steaming Hongzhuan Morning Street Food Market" },
      { uid: "d2-2", spotId: 1, time: "09:30", timeLabel: "09:30 - 11:00 น.", duration: 90, actType: "visit", noteTh: "ถ่ายรูปมหาวิหารเซนต์โซเฟีย ฝูงนกพิราบสีขาว และจิบกาแฟคาเฟ่วินเทจ", noteEn: "Visit Saint Sophia Cathedral, feed white doves & sip vintage coffee" },
      { uid: "d2-3", spotId: 22, time: "12:00", timeLabel: "12:00 - 13:30 น.", duration: 90, actType: "eat", noteTh: "มื้อกลางวันอาหารรัสเซียคลาสสิก ร้านหัวเหมย (ซุปบอร์ชต์ & เนื้ออบโถขนมปัง)", noteEn: "Classic 1925 Russian lunch at Huamei Restaurant (Borsch & beef pot)" },
      { uid: "d2-4", spotId: 10, time: "14:30", timeLabel: "14:30 - 15:30 น.", duration: 60, actType: "walk", noteTh: "เดินทอดน่องสวนสตาลินและอนุสาวรีย์ควบคุมอุทกภัยริมแม่น้ำซงฮัว", noteEn: "Scenic riverside walk through Stalin Park & Flood Control Monument" },
      { uid: "d2-5", spotId: 6, time: "15:30", timeLabel: "15:30 - 16:45 น.", duration: 75, actType: "walk", noteTh: "เดินข้ามสะพานรถไฟโบราณปินโจว ชมพื้นกระจกและพระอาทิตย์ตกเหนือธารน้ำแข็ง", noteEn: "Walk across 1900 Binzhou Railway Bridge for golden sunset over frozen river" }
    ]
  },
  day3: {
    labelTh: "Day 3 (6 ธ.ค.)",
    labelEn: "Day 3 (Dec 6)",
    titleTh: "ปราสาทรัสเซีย คฤหาสน์วอลกา • ถนนกัวโกรี่ • หอคอยมังกร",
    titleEn: "Volga Manor Russian Fairytale • Gogol Street • Dragon Tower",
    items: [
      { uid: "d3-1", spotId: 3, time: "09:30", timeLabel: "09:30 - 13:30 น.", duration: 240, actType: "visit", noteTh: "เที่ยวคฤหาสน์รัสเซียวอลกา ชมโบสถ์เซนต์นิโคลัส สไลเดอร์หิมะ และวอดก้าแก้วน้ำแข็ง", noteEn: "Explore Volga Manor Russian castles, snow tubing & ice-glass vodka" },
      { uid: "d3-2", spotId: 13, time: "15:30", timeLabel: "15:30 - 17:00 น.", duration: 90, actType: "walk", noteTh: "เดินเล่นถนนกัวโกรี่ ชมโบสถ์เซนต์อเล็กเซเยฟสีแดง และร้านหนังสือยุโรป", noteEn: "Stroll Gogol Street, Saint Alekseyev Church & vintage bookstore" },
      { uid: "d3-3", spotId: 17, time: "17:30", timeLabel: "17:30 - 18:45 น.", duration: 75, actType: "visit", noteTh: "ขึ้นหอคอยมังกรหลงถ่า เดินพื้นกระจกลอยฟ้าและชมไฟเมืองฮาร์บิน 360 องศา", noteEn: "Ascend Dragon Tower (Long Ta) glass skywalk for night views" }
    ]
  },
  day4: {
    labelTh: "Day 4 (7 ธ.ค.)",
    labelEn: "Day 4 (Dec 7)",
    titleTh: "สวนเสือไซบีเรีย • ปลากระทะเหล็ก • เกาะพระอาทิตย์ & แม่น้ำน้ำแข็ง",
    titleEn: "Siberian Tigers • Iron Pot Fish • Sun Island & Ice River",
    items: [
      { uid: "d4-1", spotId: 4, time: "09:30", timeLabel: "09:30 - 11:30 น.", duration: 120, actType: "visit", noteTh: "นั่งรถบัสกรงนิรภัยชมและป้อนอาหารพญาเสือไซบีเรียกลางทุ่งหิมะ", noteEn: "Ride safari bus through snowy enclosures at Siberian Tiger Park" },
      { uid: "d4-2", spotId: 26, time: "12:00", timeLabel: "12:00 - 13:20 น.", duration: 80, actType: "eat", noteTh: "มื้อเที่ยงปลาแม่น้ำซงฮัวตุ๋นหม้อไฟกระทะเหล็ก (เที่ยกัวตุน) แปะขนมปังข้าวโพด", noteEn: "Hearty Songhua River fish braised in giant iron cauldron (Tieguo Dun)" },
      { uid: "d4-3", spotId: 5, time: "13:45", timeLabel: "13:45 - 15:30 น.", duration: 105, actType: "visit", noteTh: "ชมงานประติมากรรมแกะสลักหิมะขาวบริสุทธิ์ขนาดยักษ์ ณ สวนเกาะพระอาทิตย์", noteEn: "Admire colossal snow sculptures at Sun Island Scenic Area" },
      { uid: "d4-4", spotId: 14, time: "15:45", timeLabel: "15:45 - 16:30 น.", duration: 45, actType: "transit", noteTh: "นั่งกระเช้าลอยฟ้าข้ามแม่น้ำซงฮัวชมวิวมุมสูงธารน้ำแข็ง", noteEn: "Ride Songhua River Sightseeing Ropeway across the frozen river" },
      { uid: "d4-5", spotId: 7, time: "16:30", timeLabel: "16:30 - 17:45 น.", duration: 75, actType: "walk", noteTh: "ลงเดินบนแม่น้ำซงฮัวที่เป็นน้ำแข็ง เล่นแคร่เลื่อนหิมะ และชม Ice and Snow World", noteEn: "Walk on frozen Songhua River Ice Carnival & play snow sleds" }
    ]
  },
  day5: {
    labelTh: "Day 5 (8 ธ.ค.)",
    labelEn: "Day 5 (Dec 8)",
    titleTh: "ย่านบาโรกจีน • กัวเปาโร่ว 100 ปี • โรงอุปรากร & ตุ๊กตาหิมะยักษ์",
    titleEn: "Chinese Baroque • 100-Yr Guobaorou • Opera House & Snowman",
    items: [
      { uid: "d5-1", spotId: 8, time: "09:30", timeLabel: "09:30 - 11:30 น.", duration: 120, actType: "walk", noteTh: "เดินชมและถ่ายภาพตึกโบราณย่านวัฒนธรรมบาโรกจีน (เหล่าเต้าว่าย)", noteEn: "Architectural walk through Chinese Baroque Historic Block courtyards" },
      { uid: "d5-2", spotId: 23, time: "11:45", timeLabel: "11:45 - 13:00 น.", duration: 75, actType: "eat", noteTh: "ทานมื้อเที่ยงร้านเหล่าฉูเจีย ชิมหมูทอดเปรี้ยวหวาน 'กัวเปาโร่ว' ต้นกำเนิด 100 ปี", noteEn: "Lunch at Laochushi, birthplace of crispy sweet & sour Guobaorou" },
      { uid: "d5-3", spotId: 9, time: "14:00", timeLabel: "14:00 - 15:30 น.", duration: 90, actType: "visit", noteTh: "ชมสถาปัตยกรรมระดับโลก โรงอุปรากรฮาร์บิน เดินขึ้นดาดฟ้าชมวิวทุ่งหิมะ", noteEn: "Visit futuristic Harbin Grand Opera House rooftop snow walk" },
      { uid: "d5-4", spotId: 19, time: "16:00", timeLabel: "16:00 - 17:00 น.", duration: 60, actType: "walk", noteTh: "แวะถ่ายรูปคู่กับตุ๊กตาหิมะยักษ์สูง 18 เมตร ที่สวนดนตรีริมแม่น้ำซงฮัว", noteEn: "Take photos with the famous 18m Giant Snowman at Harbin Music Park" }
    ]
  },
  day6: {
    labelTh: "Day 6 (9 ธ.ค.)",
    labelEn: "Day 6 (Dec 9)",
    titleTh: "ของฝากฮาร์บิน • ฮาร์บิน (HRB) ➔ เซี่ยงไฮ้ (PVG) ➔ Bangkok (BKK)",
    titleEn: "Souvenirs • Harbin (HRB) ➔ Shanghai (PVG) ➔ Bangkok (BKK)",
    items: [
      { uid: "d6-1", spotId: 16, time: "09:15", timeLabel: "09:15 - 10:15 น.", duration: 60, actType: "visit", noteTh: "ชมโครงกระดูกช้างแมมมอธไซบีเรีย ณ พิพิธภัณฑ์มณฑลเฮยหลงเจียง", noteEn: "See woolly mammoth fossils at Heilongjiang Provincial Museum" },
      { uid: "d6-2", spotId: 27, time: "10:30", timeLabel: "10:30 - 11:45 น.", duration: 75, actType: "eat", noteTh: "แวะห้างชิวหลิน 1900 ซื้อขนมปังรัสเซียต้าเลี่ยปา ไส้กรอกแดง และช็อกโกแลต", noteEn: "Shop for giant Dalieba bread & Red Sausages at Churin 1900 Bakery" },
      {
        uid: "d6-hrb",
        spotId: 11,
        customNameTh: "ฮาร์บิน - HRB T2 (ท่าอากาศยานนานาชาติไท่ผิง T2)",
        customNameEn: "Harbin - HRB T2 (Departure 15:10)",
        time: "15:10",
        timeLabel: "15:10 น.",
        duration: 195,
        actType: "transit",
        isFlightStep: true,
        flightBadge: "🛫 ขากลับ 15:10 น. (HRB T2 ➔ PVG)",
        noteTh: "ถึงสนามบิน 12:45 น. เช็คอินโหลดกระเป๋าตรงถึงไทย · ออกเดินทางจากฮาร์บินเวลา 15:10 น.",
        noteEn: "Depart Harbin Taiping Airport T2 at 15:10 (Baggage checked through to BKK)"
      },
      {
        uid: "d6-pvg",
        spotId: null,
        customNameTh: "เซี่ยงไฮ้ - PVG (แวะเปลี่ยนเครื่องขากลับ)",
        customNameEn: "Shanghai - PVG (Transit · Check-Through)",
        time: "18:30",
        timeLabel: "ต่อเครื่องเซี่ยงไฮ้",
        duration: 150,
        actType: "transit",
        isFlightStep: true,
        flightBadge: "🔄 เปลี่ยนเครื่องเซี่ยงไฮ้ (ไม่ต้องโหลดกระเป๋าใหม่)",
        noteTh: "เปลี่ยนเครื่องที่เซี่ยงไฮ้: ✓ ไม่ต้องรับสัมภาระและโหลดใหม่ เดินไปรอขึ้นเครื่องกลับกรุงเทพฯ ได้เลย",
        noteEn: "Transit in Shanghai PVG: No need to re-claim or re-check baggage"
      },
      {
        uid: "d6-bkk",
        spotId: null,
        customNameTh: "Bangkok - BKK (ท่าอากาศยานสุวรรณภูมิ)",
        customNameEn: "Bangkok - BKK (Arrive 00:55 +1)",
        time: "00:55",
        timeLabel: "00:55 (+1) น.",
        duration: 30,
        actType: "transit",
        isFlightStep: true,
        flightBadge: "🛬 ถึงสุวรรณภูมิ 00:55 (+1) น.",
        noteTh: "เดินทางถึงท่าอากาศยานสุวรรณภูมิ (BKK) เวลา 00:55 (+1) น. โดยสวัสดิภาพ",
        noteEn: "Arrive safely at Bangkok Suvarnabhumi Airport (BKK) at 00:55 (+1)"
      }
    ]
  }
};


// Media and Social Gallery for Harbin Attractions
const HARBIN_MEDIA = {
  "harbin_0": {
    tiktokQuery: "哈尔滨站 Harbin Railway Station",
    hashtags: "#HarbinStation #สถานีรถไฟฮาร์บิน #ArtNouveau #哈尔滨站 #高铁",
    views: "18.5M+ Views",
    douyinQuery: "哈尔滨站",
    redbookQuery: "哈尔滨火车站拍照",
    cover: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
    photos: [
      { url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80", titleTh: "สถาปัตยกรรมอาร์ตนูโวคลาสสิกดั่งยุโรป", titleEn: "Art Nouveau European Architecture", tagTh: "สถาปัตยกรรม", tagEn: "Architecture" }
    ]
  },
  "harbin_1": {
    tiktokQuery: "圣索菲亚大教堂 Saint Sophia Cathedral Harbin",
    hashtags: "#SaintSophia #โบสถ์เซนต์โซเฟีย #Harbin #圣索菲亚大教堂 #哈尔滨",
    views: "85.2M+ Views",
    douyinQuery: "圣索菲亚大教堂",
    redbookQuery: "圣索菲亚大教堂机位",
    cover: "https://images.unsplash.com/photo-1548625361-12503722f42a?auto=format&fit=crop&w=600&q=80",
    photos: [
      { url: "https://images.unsplash.com/photo-1548625361-12503722f42a?auto=format&fit=crop&w=600&q=80", titleTh: "มหาวิหารเซนต์โซเฟียยามค่ำคืนใต้แสงไฟสีทอง", titleEn: "Saint Sophia Cathedral Illuminated at Dusk", tagTh: "แลนด์มาร์กอันดับ 1", tagEn: "Must Visit" }
    ]
  },
  "harbin_2": {
    tiktokQuery: "哈尔滨中央大街 Zhongyang Street Harbin",
    hashtags: "#ZhongyangStreet #ถนนคนเดินจงหยาง #马迭尔冰棍 #中央大街",
    views: "120M+ Views",
    douyinQuery: "哈尔滨中央大街",
    redbookQuery: "中央大街美食攻略",
    cover: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
    photos: [
      { url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80", titleTh: "ถนนหินร้อยปีใต้แสงไฟสีทองและหิมะขาว", titleEn: "Cobblestone Street Under Warm Night Lights", tagTh: "ถนนคนเดินร้อยปี", tagEn: "Heritage Street" }
    ]
  },
  "harbin_3": {
    tiktokQuery: "伏尔加庄园 Volga Manor Harbin",
    hashtags: "#VolgaManor #คฤหาสน์วอลกา #ปราสาทรัสเซีย #伏尔加庄园",
    views: "34.8M+ Views",
    douyinQuery: "伏尔加庄园",
    redbookQuery: "伏尔加庄园城堡",
    cover: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    photos: [
      { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80", titleTh: "ปราสาทรัสเซียท่ามกลางป่าสนหิมะ", titleEn: "Russian Castle in Winter Snow", tagTh: "เทพนิยายรัสเซีย", tagEn: "Russian Fairytale" }
    ]
  },
  "harbin_4": {
    tiktokQuery: "东北虎林园 Siberian Tiger Park Harbin",
    hashtags: "#SiberianTiger #สวนเสือไซบีเรีย #เสือตงเป่ย #东北虎林园",
    views: "42.1M+ Views",
    douyinQuery: "东北虎林园",
    redbookQuery: "东北虎林园投喂",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    photos: [
      { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80", titleTh: "พญาเสือไซบีเรียสง่างามกลางหิมะขาว", titleEn: "Majestic Siberian Tiger in Deep Snow", tagTh: "สัตว์ป่าตงเป่ย", tagEn: "Siberian Tiger" }
    ]
  }
};

// Register Harbin in Global CITIES Registry
if (typeof CITIES !== "undefined") {
  CITIES.harbin = {
    id: "harbin",
    nameTh: "ฮาร์บิน (Harbin)",
    nameZh: "哈尔滨",
    pinyin: "Hā'ěrbīn",
    nameEn: "Harbin",
    icon: "❄️",
    descTh: "นครน้ำแข็ง & สถาปัตยกรรมรัสเซีย (20 จุดเช็คอิน)",
    descEn: "Ice City & Russian Heritage (20 Spots)",
    center: [45.7725, 126.6250],
    defaultZoom: 12,
    appTitleTh: "แผนที่ท่องเที่ยวนครน้ำแข็งฮาร์บิน (Harbin Winter Ice Map)",
    appTitleEn: "Harbin Winter Romance & Ice City Map",
    appSubtitleTh: "20 จุดเช็คอิน · โบสถ์เซนต์โซเฟีย · คฤหาสน์วอลกา · สวนเสือไซบีเรีย · AMAP",
    appSubtitleEn: "20 Must-Visit Winter Spots & Russian Heritage along Songhua River · AMAP",
    attractions: HARBIN_ATTRACTIONS,
    categories: [
      { id: "all", icon: "🌟", labelTh: "ทั้งหมด (20)", labelEn: "All (20)" },
      { id: "transit_hub", icon: "🚅", labelTh: "สถานีรถไฟ & สนามบิน", labelEn: "HSR & Airport" },
      { id: "russian_heritage", icon: "🏰", labelTh: "สถาปัตยกรรมรัสเซีย", labelEn: "Russian Castles" },
      { id: "historic_street", icon: "🏮", labelTh: "ถนนคนเดิน & ย่านโบราณ", labelEn: "Historic Streets" },
      { id: "ice_snow", icon: "❄️", labelTh: "เทศกาลน้ำแข็ง & ลานหิมะ", labelEn: "Ice & Snow Festivals" },
      { id: "wildlife_nature", icon: "🐅", labelTh: "สวนเสือไซบีเรีย", labelEn: "Siberian Tigers" },
      { id: "culture_heritage", icon: "🪷", labelTh: "พิพิธภัณฑ์ & วัฒนธรรม", labelEn: "Culture & Museum" },
      { id: "modern_architecture", icon: "🎭", labelTh: "สถาปัตยกรรมระดับโลก", labelEn: "Modern Architecture" }
    ],
    scenicRoutes: [
      {
        nameTh: "❄️ เส้นทางโรแมนติกใจกลางเมือง & สายน้ำซงฮัว",
        nameEn: "❄️ Downtown Russian Romance & Songhua River Trail",
        spotIds: [0, 1, 15, 2, 10, 7, 6],
        color: "#0284c7",
        dashArray: "8, 8"
      },
      {
        nameTh: "🐅 เส้นทางเกาะเหนือ สวนเสือ & คฤหาสน์รัสเซียวอลกา",
        nameEn: "🐅 North Island, Tiger Safari & Volga Manor Loop",
        spotIds: [14, 5, 4, 9, 3],
        color: "#7c3aed",
        dashArray: "6, 8"
      }
    ],
    guide: {
      titleTh: "การเดินทาง & เส้นทางแนะนำนครฮาร์บิน (Harbin Travel Quick Guide)",
      titleEn: "Travel Logistics & Recommended Routes (Harbin)",
      chips: [
        { icon: "✈️", textTh: "<strong>เที่ยวบินตรง/ต่อเครื่อง</strong> (HRB T2 สู่ใจกลางเมือง 45 นาที)", textEn: "<strong>Flight Gateway</strong> (HRB T2 to downtown 45m)" },
        { icon: "🚇", textTh: "<strong>รถไฟใต้ดิน Metro</strong> (สาย 1, 2, 3 ครอบคลุมจุดสำคัญ)", textEn: "<strong>Metro Lines 1, 2, 3</strong> (Covers all major spots)" },
        { icon: "🧤", textTh: "<strong>ความหนาว -20°C</strong> (แต่งตัว 3 ชั้น & แปะแผ่นร้อนที่มือถือ)", textEn: "<strong>Cold -20°C</strong> (3-layer gear & heat packs on phones)" },
        { icon: "🚕", textTh: "<strong>DiDi / แท็กซี่</strong> (ราคาไม่แพง สะดวกมาก)", textEn: "<strong>DiDi Taxi</strong> (Affordable & warm)" }
      ],
      routes: [
        { num: "1", descTh: "<strong>เส้นทางหัวใจฮาร์บิน (วันที่ 1-2 ❄️) :</strong> สถานีฮาร์บิน ➔ โบสถ์เซนต์โซเฟีย ➔ ถนนคนเดินจงหยาง ➔ สะพานรถไฟปินโจว ➔ ลานน้ำแข็งซงฮัว", descEn: "<strong>Heart of Harbin Loop (Days 1-2 ❄️) :</strong> Harbin Station ➔ St. Sophia ➔ Zhongyang St. ➔ Binzhou Bridge ➔ Frozen River Carnival" },
        { num: "2", descTh: "<strong>เส้นทางเทพนิยาย & สัตว์ป่า (วันที่ 3-4 🏰) :</strong> คฤหาสน์วอลกา ➔ สวนเสือไซบีเรีย ➔ เกาะพระอาทิตย์ ➔ โรงอุปรากรฮาร์บิน", descEn: "<strong>Fairytale & Safari Loop (Days 3-4 🏰) :</strong> Volga Manor ➔ Siberian Tiger Park ➔ Sun Island ➔ Harbin Grand Opera House" }
      ]
    }
  };
}

if (typeof ATTRACTION_MEDIA !== "undefined") {
  Object.assign(ATTRACTION_MEDIA, HARBIN_MEDIA);
}
