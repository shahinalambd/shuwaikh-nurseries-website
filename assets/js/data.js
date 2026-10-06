/* Shuwaikh Almashatil Nurseries — site content & settings. Edit this file to change text, products, prices and contact details. */
/* ============ EDIT THESE FOR THE CLIENT ============ */
const SITE = {
  phone: "+000 0000 0000",          // replace
  email: "hello@example.com",       // replace
  address: { en: "Shuwaikh Industrial, Kuwait", ar: "الشويخ الصناعية، الكويت" },
  mapQuery: "Shuwaikh Almashatil Nurseries, Shuwaikh Industrial, Kuwait", // exact Google Maps place name
  mapLink: "https://maps.app.goo.gl/VFsXm9rzJK58i9eV8",                  // the client's Google Maps link
  hours: { 0:[8,21],1:[8,21],2:[8,21],3:[8,21],4:[8,21],5:[16,21],6:[8,21] } // 0 = Sunday, 24h clock, Kuwait time
};
/* =================================================== */


/* ---------- copy ---------- */
const T = {
  en:{
    nav:{home:"Home",plants:"Plants",landscaping:"Landscaping",irrigation:"Irrigation",gallery:"Gallery",about:"About",contact:"Contact"},
    langBtn:"عربي", enquiry:"Enquiry list", menu:"Menu",
    heroTitle:"Plants that thrive in Kuwait, and the water to keep them thriving.",
    heroSub:"Indoor plants, flowering shrubs, palms and complete irrigation systems — grown and fitted by one team from our nursery in Shuwaikh.",
    browse:"Browse plants", visit:"Book a site visit",
    fact1:"Delivery across Kuwait", fact2:"Heat-hardened stock", fact3:"Drip & sprinkler installation",
    capT:"Summer-ready stock", capS:"Acclimatised to 45°C+ before sale",
    catTitle:"Shop by what you're growing", catSub:"From desk plants to mature palms, everything is grown or hardened on site before it reaches you.",
    splitTitle:"A nursery and an irrigation team under one roof",
    splitLead:"Most plants in Kuwait fail from watering, not buying. That's why we design the irrigation with the planting, so both are right from day one.",
    t1:"Plants chosen for your light and heat", t1s:"We match every plant to its spot: full sun, shade courtyard or air-conditioned lobby.",
    t2:"Irrigation sized to the garden", t2s:"Drip for beds, bubblers for palms, pop-ups for lawns, all on a timer.",
    t3:"Care after planting", t3s:"Scheduled maintenance visits so the garden keeps looking the way it did on day one.",
    ourServices:"See our services",
    featTitle:"In the nursery this week", featSub:"A few favourites from the current stock. Prices are per plant unless noted.", allPlants:"All plants",
    stepsTitle:"How a garden project works",
    s1:"Site visit",s1d:"We measure the space, check sun, soil and water supply, and listen to how you want to use it.",
    s2:"Design & quote",s2d:"You get a planting plan, irrigation layout and a clear itemised quote.",
    s3:"Planting & install",s3d:"Our team plants, lays the irrigation and sets the controller schedule.",
    s4:"Ongoing care",s4d:"Monthly or seasonal visits for pruning, feeding and irrigation checks.",
    quotesTitle:"What customers say", sample:"Sample reviews shown for design preview",
    bandTitle:"Tell us about your space, we'll handle the rest", bandSub:"Send us a message and get plant suggestions the same day.",
    chatWa:"Contact us", contactUs:"Contact us",
    plantsTitle:"Plants", plantsSub:"Browse our nursery stock. Add plants to your enquiry list and send it to us for availability and delivery.",
    searchPh:"Search plants, e.g. palm, cactus", sortBy:"Sort", sortFeat:"Featured", sortLow:"Price: low to high", sortHigh:"Price: high to low", sortName:"Name",
    all:"All", results:(n)=>`${n} plant${n===1?"":"s"}`, add:"Add", added:"Added",
    emptyT:"No plants match that search", emptyS:"Try a different word or clear the category filter.", clear:"Clear filters",
    indoorL:"Indoor", sunL:"Full sun", partL:"Part shade", waterLow:"Low water", waterMed:"Moderate water", waterHigh:"Regular water",
    kd:"KD",
    landTitle:"Landscaping & plant services", landSub:"From a single balcony to a full villa garden or office floor, we plan, plant and look after green spaces across Kuwait.",
    irrTitle:"Irrigation systems", irrSub:"Water is the most expensive part of keeping a garden alive in Kuwait. We design systems that deliver the right amount to each plant, and nothing more.",
    sysTitle:"Systems we install",
    estTitle:"Estimate your garden's water needs", estSub:"Move the sliders to get a rough daily water figure and the system we'd usually recommend.",
    area:"Garden area", gtype:"Mostly", lawn:"Lawn", beds:"Flower beds", trees:"Trees & palms", mixed:"Mixed", season:"Season", summer:"Summer", winter:"Winter",
    perDay:"litres per day, approx.", recSys:"Recommended system", zones:"Irrigation zones", saving:"Water saved vs hose, per month",
    estNote:"Rough estimate only. Our team confirms exact figures after a site visit.", getQuote:"Get an irrigation quote",
    galTitle:"Gallery", galSub:"A look around the nursery: seasonal flowers, indoor collections, palms and display areas.",
    gAll:"All", gNursery:"Nursery", gIndoor:"Indoor", gFlowers:"Flowers", gOutdoor:"Palms & outdoor",
    aboutTitle:"Growing green spaces in Kuwait",
    aboutSub:"Shuwaikh Almashatil Nurseries supplies plants and irrigation to homes, villas, offices and landscaping contractors.",
    ab1:"We started as a nursery selling plants that could survive Kuwaiti summers. Over time customers kept asking the same question: how do I keep this alive? The answer was almost always water, so we added an irrigation team.",
    ab2:"Today we grow and harden plants on site, design gardens and install irrigation, and look after them afterwards. One team, one point of contact, from the first seedling to the monthly maintenance visit.",
    valuesTitle:"What we care about",
    v1:"Honest advice",v1d:"We'll tell you if a plant won't suit your spot, even if it means a smaller sale.",
    v2:"Water wisely",v2d:"Every system we fit is designed to use less water than hand watering.",
    v3:"Healthy stock",v3d:"Plants are checked for pests and root health before they leave the nursery.",
    faqTitle:"Common questions",
    faq:[
      ["Do you deliver across Kuwait?","Yes. We deliver to all governorates. Large plants and palms are delivered and placed by our team."],
      ["Can you plant what I buy?","Yes. We offer planting and potting for any order, plus pots and soil mixes to go with it."],
      ["Which plants survive the summer outdoors?","Bougainvillea, vinca, palms, cycads and many shrubs handle full sun well once established with regular drip irrigation."],
      ["Do you service irrigation systems you didn't install?","Yes. We inspect, repair and upgrade existing systems, including replacing old controllers with smart timers."]
    ],
    contactTitle:"Contact & visit", contactSub:"Visit the nursery, call us, or send a message. We usually reply within the hour during opening times.",
    phoneL:"Phone", waL:"Message", mailL:"Email", addrL:"Nursery address", hoursL:"Opening hours", openNow:"Open now", closedNow:"Closed now",
    days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    formTitle:"Send us a message", fName:"Your name", fPhone:"Phone number", fService:"What do you need?", fMsg:"Message",
    svcOpts:["Buy plants","Landscaping / garden design","Irrigation system","Garden maintenance","Plants for an office or project"],
    sendWa:"Send message", sendMail:"Send by email",
    errName:"Enter your name", errPhone:"Enter a phone number we can call back",
    mapTitle:"Shuwaikh Almashatil Nurseries", loadMap:"Show live map", openMaps:"Open in Google Maps", directions:"Get directions",
    dTitle:"Enquiry list", dEmpty:"Your list is empty. Add plants from the catalogue to ask about availability and delivery.",
    dTotal:"Estimated total", dName:"Your name (optional)", dSend:"Send enquiry list", dClear:"Clear list",
    toastAdd:"Added to enquiry list", toastRemove:"Removed from list",
    footBlurb:"Plants, landscaping and irrigation for homes, villas and businesses across Kuwait.",
    fPages:"Pages", fServices:"Services", fVisit:"Visit us", rights:"All rights reserved.", madeBy:"Designed by",
    waHello:"Hello Shuwaikh Almashatil Nurseries, ",
    quotes:[
      ["They replaced our dying lawn with drip-watered beds and palms. Our water bill dropped and the garden finally looks alive in August.","Villa owner","Salwa"],
      ["We ordered forty plants for our new office. Delivered, potted and placed in one morning, and they check on them every month.","Office manager","Kuwait City"],
      ["Good advice. They told me which plants would actually survive on my west-facing balcony instead of just selling me anything.","Apartment owner","Salmiya"]
    ]
  },
  ar:{
    nav:{home:"الرئيسية",plants:"النباتات",landscaping:"تنسيق الحدائق",irrigation:"الري",gallery:"معرض الصور",about:"من نحن",contact:"تواصل معنا"},
    langBtn:"EN", enquiry:"قائمة الطلب", menu:"القائمة",
    heroTitle:"نباتات تزدهر في الكويت، ومياه تحافظ على ازدهارها.",
    heroSub:"نباتات داخلية وشجيرات مزهرة ونخيل وأنظمة ري متكاملة — نزرعها ونركّبها بفريق واحد من مشتلنا في الشويخ.",
    browse:"تصفح النباتات", visit:"احجز زيارة ميدانية",
    fact1:"توصيل لجميع مناطق الكويت", fact2:"نباتات مؤقلمة على الحرارة", fact3:"تركيب ري بالتنقيط والرشاشات",
    capT:"نباتات جاهزة للصيف", capS:"نؤقلمها على حرارة ٤٥°م قبل البيع",
    catTitle:"تسوّق حسب ما تريد زراعته", catSub:"من نباتات المكتب إلى النخيل الكبير، كل نبتة تُزرع أو تُؤقلم في المشتل قبل أن تصلك.",
    splitTitle:"مشتل وفريق ري تحت سقف واحد",
    splitLead:"معظم النباتات في الكويت تموت بسبب الري وليس بسبب الشراء. لذلك نصمم الري مع الزراعة ليكون كلاهما صحيحاً من اليوم الأول.",
    t1:"نباتات تناسب الضوء والحرارة لديك", t1s:"نختار كل نبتة لمكانها: شمس كاملة أو فناء مظلل أو ردهة مكيفة.",
    t2:"ري مصمم حسب مساحة الحديقة", t2s:"تنقيط للأحواض، ونافورات للنخيل، ورشاشات منبثقة للعشب، وكلها بمؤقت.",
    t3:"عناية بعد الزراعة", t3s:"زيارات صيانة دورية لتبقى الحديقة كما كانت في يومها الأول.",
    ourServices:"اطّلع على خدماتنا",
    featTitle:"في المشتل هذا الأسبوع", featSub:"مختارات من المخزون الحالي. الأسعار للنبتة الواحدة ما لم يُذكر غير ذلك.", allPlants:"كل النباتات",
    stepsTitle:"كيف يسير مشروع الحديقة",
    s1:"زيارة الموقع",s1d:"نقيس المساحة ونفحص الشمس والتربة ومصدر المياه، ونستمع لطريقة استخدامك للمكان.",
    s2:"التصميم والعرض",s2d:"تستلم مخطط الزراعة وتوزيع الري وعرض سعر واضحاً ومفصلاً.",
    s3:"الزراعة والتركيب",s3d:"يزرع فريقنا النباتات ويمدّ شبكة الري ويضبط جدول المؤقت.",
    s4:"عناية مستمرة",s4d:"زيارات شهرية أو موسمية للتقليم والتسميد وفحص الري.",
    quotesTitle:"آراء العملاء", sample:"آراء نموذجية لغرض معاينة التصميم",
    bandTitle:"أخبرنا عن مساحتك، ونحن نتكفل بالباقي", bandSub:"أرسل لنا رسالة واحصل على اقتراحات النباتات في نفس اليوم.",
    chatWa:"تواصل معنا", contactUs:"تواصل معنا",
    plantsTitle:"النباتات", plantsSub:"تصفح مخزون المشتل. أضف النباتات إلى قائمة الطلب وأرسلها لنا لمعرفة التوفر والتوصيل.",
    searchPh:"ابحث عن نبتة، مثل نخيل أو صبار", sortBy:"ترتيب", sortFeat:"المميزة", sortLow:"السعر: من الأقل", sortHigh:"السعر: من الأعلى", sortName:"الاسم",
    all:"الكل", results:(n)=>`${n} نبتة`, add:"أضف", added:"مُضافة",
    emptyT:"لا توجد نباتات مطابقة", emptyS:"جرّب كلمة أخرى أو امسح فلتر الفئة.", clear:"مسح الفلاتر",
    indoorL:"داخلي", sunL:"شمس كاملة", partL:"ظل جزئي", waterLow:"ري قليل", waterMed:"ري معتدل", waterHigh:"ري منتظم",
    kd:"د.ك",
    landTitle:"تنسيق الحدائق وخدمات النباتات", landSub:"من شرفة صغيرة إلى حديقة فيلا كاملة أو طابق مكاتب، نخطط ونزرع ونعتني بالمساحات الخضراء في أنحاء الكويت.",
    irrTitle:"أنظمة الري", irrSub:"المياه هي الجزء الأغلى في الحفاظ على الحديقة في الكويت. نصمم أنظمة توصل الكمية المناسبة لكل نبتة، دون زيادة.",
    sysTitle:"الأنظمة التي نركّبها",
    estTitle:"احسب احتياج حديقتك من المياه", estSub:"حرّك المؤشرات لمعرفة كمية المياه اليومية التقريبية والنظام الذي نوصي به عادة.",
    area:"مساحة الحديقة", gtype:"غالباً", lawn:"عشب", beds:"أحواض زهور", trees:"أشجار ونخيل", mixed:"مختلط", season:"الموسم", summer:"الصيف", winter:"الشتاء",
    perDay:"لتر يومياً تقريباً", recSys:"النظام الموصى به", zones:"مناطق الري", saving:"توفير المياه مقارنة بالخرطوم شهرياً",
    estNote:"تقدير تقريبي فقط. يؤكد فريقنا الأرقام الدقيقة بعد زيارة الموقع.", getQuote:"اطلب عرض سعر للري",
    galTitle:"معرض الصور", galSub:"جولة في المشتل: زهور موسمية ومجموعات داخلية ونخيل ومناطق عرض.",
    gAll:"الكل", gNursery:"المشتل", gIndoor:"داخلي", gFlowers:"زهور", gOutdoor:"نخيل وخارجي",
    aboutTitle:"نزرع المساحات الخضراء في الكويت",
    aboutSub:"توفر مشاتل الشويخ النباتات وأنظمة الري للمنازل والفلل والمكاتب ومقاولي تنسيق الحدائق.",
    ab1:"بدأنا كمشتل يبيع نباتات قادرة على تحمّل صيف الكويت. ومع الوقت كان العملاء يسألون السؤال نفسه: كيف أحافظ عليها حية؟ وكانت الإجابة غالباً هي الماء، فأضفنا فريقاً للري.",
    ab2:"اليوم نزرع النباتات ونؤقلمها في الموقع، ونصمم الحدائق ونركّب الري، ونعتني بها بعد ذلك. فريق واحد ونقطة تواصل واحدة، من أول شتلة حتى زيارة الصيانة الشهرية.",
    valuesTitle:"ما نهتم به",
    v1:"نصيحة صادقة",v1d:"سنخبرك إن كانت النبتة لا تناسب مكانك، حتى لو كان البيع أقل.",
    v2:"ري بحكمة",v2d:"كل نظام نركّبه مصمم ليستهلك مياهاً أقل من الري اليدوي.",
    v3:"نباتات سليمة",v3d:"نفحص النباتات من الآفات وصحة الجذور قبل خروجها من المشتل.",
    faqTitle:"أسئلة شائعة",
    faq:[
      ["هل توصلون إلى جميع مناطق الكويت؟","نعم. نوصل إلى جميع المحافظات، ويقوم فريقنا بتوصيل النباتات الكبيرة والنخيل ووضعها في مكانها."],
      ["هل يمكنكم زراعة ما أشتريه؟","نعم. نقدم خدمة الزراعة والتأصيص لأي طلب، مع الأصص وخلطات التربة المناسبة."],
      ["ما النباتات التي تتحمل الصيف في الخارج؟","الجهنمية والفينكا والنخيل والسيكاس وكثير من الشجيرات تتحمل الشمس الكاملة بعد تثبيتها مع ري منتظم بالتنقيط."],
      ["هل تصلحون أنظمة ري لم تركّبوها؟","نعم. نفحص ونصلح ونطوّر الأنظمة القائمة، بما في ذلك استبدال المؤقتات القديمة بمؤقتات ذكية."]
    ],
    contactTitle:"تواصل وزيارة", contactSub:"زر المشتل أو اتصل بنا أو أرسل رسالة. نرد عادة خلال ساعة في أوقات الدوام.",
    phoneL:"الهاتف", waL:"رسالة", mailL:"البريد الإلكتروني", addrL:"عنوان المشتل", hoursL:"أوقات العمل", openNow:"مفتوح الآن", closedNow:"مغلق الآن",
    days:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
    formTitle:"أرسل لنا رسالة", fName:"الاسم", fPhone:"رقم الهاتف", fService:"ماذا تحتاج؟", fMsg:"الرسالة",
    svcOpts:["شراء نباتات","تنسيق حدائق / تصميم","نظام ري","صيانة حدائق","نباتات لمكتب أو مشروع"],
    sendWa:"أرسل الرسالة", sendMail:"أرسل بالبريد",
    errName:"أدخل اسمك", errPhone:"أدخل رقم هاتف للتواصل",
    mapTitle:"مشاتل الشويخ", loadMap:"عرض الخريطة المباشرة", openMaps:"افتح في خرائط Google", directions:"الاتجاهات",
    dTitle:"قائمة الطلب", dEmpty:"القائمة فارغة. أضف نباتات من الكتالوج للاستفسار عن التوفر والتوصيل.",
    dTotal:"الإجمالي التقديري", dName:"اسمك (اختياري)", dSend:"أرسل قائمة الطلب", dClear:"مسح القائمة",
    toastAdd:"أُضيفت إلى قائمة الطلب", toastRemove:"أُزيلت من القائمة",
    footBlurb:"نباتات وتنسيق حدائق وأنظمة ري للمنازل والفلل والشركات في أنحاء الكويت.",
    fPages:"الصفحات", fServices:"الخدمات", fVisit:"زورونا", rights:"جميع الحقوق محفوظة.", madeBy:"تصميم",
    waHello:"مرحباً مشاتل الشويخ، ",
    quotes:[
      ["استبدلوا العشب الميت بأحواض ونخيل تُروى بالتنقيط. انخفضت فاتورة المياه وأصبحت الحديقة حية حتى في أغسطس.","مالك فيلا","سلوى"],
      ["طلبنا أربعين نبتة لمكتبنا الجديد. وصلت وزُرعت ووُضعت في صباح واحد، ويتابعونها كل شهر.","مدير مكتب","مدينة الكويت"],
      ["نصيحة ممتازة. أخبروني بالنباتات التي ستعيش فعلاً في شرفتي الغربية بدلاً من بيع أي شيء.","مالك شقة","السالمية"]
    ]
  }
};

const CATS = [
  {id:"indoor",img:"indoor_shelves",en:["Indoor plants","For homes and offices"],ar:["نباتات داخلية","للمنازل والمكاتب"]},
  {id:"flowering",img:"bougain_colors",en:["Flowering shrubs","Bougainvillea, azalea & more"],ar:["شجيرات مزهرة","جهنمية وأزاليا وغيرها"]},
  {id:"seasonal",img:"marigold",en:["Seasonal flowers","Vinca, petunia, bedding"],ar:["زهور موسمية","فينكا وبيتونيا وأحواض"]},
  {id:"palms",img:"cycas",en:["Palms & cycads","Washingtonia, coconut, zamia"],ar:["نخيل وسيكاس","واشنطونيا وجوز الهند وزاميا"]},
  {id:"succulents",img:"succulents",en:["Cacti & succulents","Low water, big character"],ar:["صبار وعصاريات","ري قليل وشكل مميز"]},
  {id:"trees",img:"topiary",en:["Trees & shrubs","Topiary, fruit & hedging"],ar:["أشجار وشجيرات","تشكيل وفواكه وأسوار"]}
];

// light: i=indoor, s=sun, p=part shade | water: 1 low, 2 med, 3 high  (sample prices)
const PRODUCTS = [
  {id:"p1",cat:"indoor",img:"indoor_large",price:18.5,light:"i",water:2,feat:1,tag:"",en:"Fiddle leaf fig",ar:"فيكس لايراتا (تين الكمان)",sci:"Ficus lyrata",size:{en:"150–180 cm",ar:"١٥٠–١٨٠ سم"}},
  {id:"p2",cat:"indoor",img:"indoor_large",price:45,light:"i",water:1,feat:0,tag:"",en:"Dracaena marginata, multi-stem",ar:"دراسينا مارجيناتا متعددة السيقان",sci:"Dracaena marginata",size:{en:"200 cm, in planter",ar:"٢٠٠ سم مع الأصيص"}},
  {id:"p3",cat:"indoor",img:"indoor_shelves",price:4.5,light:"i",water:2,feat:1,tag:"",en:"Umbrella plant",ar:"شيفليرا",sci:"Schefflera arboricola",size:{en:"40–50 cm",ar:"٤٠–٥٠ سم"}},
  {id:"p4",cat:"indoor",img:"sansevieria",price:3.5,light:"i",water:1,feat:0,tag:"sale",en:"Snake plant",ar:"سانسفيريا (نبات الثعبان)",sci:"Sansevieria trifasciata",size:{en:"30–40 cm",ar:"٣٠–٤٠ سم"}},
  {id:"p5",cat:"indoor",img:"fittonia",price:1.25,light:"i",water:3,feat:0,tag:"",en:"Nerve plant",ar:"فيتونيا",sci:"Fittonia albivenis",size:{en:"12 cm pot",ar:"أصيص ١٢ سم"}},
  {id:"p6",cat:"indoor",img:"nertera",price:2,light:"i",water:2,feat:0,tag:"new",en:"Coral bead plant",ar:"نيرتيرا (نبات الخرز)",sci:"Nertera granadensis",size:{en:"12 cm pot",ar:"أصيص ١٢ سم"}},
  {id:"p7",cat:"indoor",img:"indoor_palm",price:22,light:"i",water:2,feat:0,tag:"",en:"Rubber plant",ar:"فيكس مطاطي",sci:"Ficus elastica",size:{en:"120 cm",ar:"١٢٠ سم"}},
  {id:"p8",cat:"succulents",img:"succulents",price:1,light:"s",water:1,feat:1,tag:"",en:"Cactus & succulent, assorted",ar:"صبار وعصاريات متنوعة",sci:"Mixed species",size:{en:"8 cm pot",ar:"أصيص ٨ سم"}},
  {id:"p9",cat:"succulents",img:"cactus_display",price:2.5,light:"p",water:1,feat:0,tag:"",en:"Sweetheart hoya",ar:"هويا القلب",sci:"Hoya kerrii",size:{en:"Ceramic pot",ar:"أصيص سيراميك"}},
  {id:"p10",cat:"flowering",img:"bougain_pole",price:6,light:"s",water:2,feat:1,tag:"",en:"Bougainvillea on pole",ar:"جهنمية على دعامة",sci:"Bougainvillea glabra",size:{en:"160 cm",ar:"١٦٠ سم"}},
  {id:"p11",cat:"flowering",img:"bougain_colors",price:3,light:"s",water:2,feat:0,tag:"",en:"Bougainvillea bush, mixed colours",ar:"جهنمية شجيرة بألوان متعددة",sci:"Bougainvillea spp.",size:{en:"60–80 cm",ar:"٦٠–٨٠ سم"}},
  {id:"p12",cat:"flowering",img:"azalea",price:4,light:"p",water:3,feat:0,tag:"",en:"Azalea",ar:"أزاليا",sci:"Rhododendron simsii",size:{en:"14 cm pot",ar:"أصيص ١٤ سم"}},
  {id:"p13",cat:"seasonal",img:"vinca",price:0.75,light:"s",water:2,feat:0,tag:"",en:"Vinca",ar:"فينكا",sci:"Catharanthus roseus",size:{en:"Single pot",ar:"أصيص فردي"}},
  {id:"p14",cat:"seasonal",img:"vinca_crates",price:7.5,light:"s",water:2,feat:0,tag:"",en:"Vinca tray, 12 plants",ar:"صندوق فينكا ١٢ نبتة",sci:"Catharanthus roseus",size:{en:"Tray of 12",ar:"صندوق ١٢"}},
  {id:"p15",cat:"seasonal",img:"petunia",price:0.5,light:"s",water:3,feat:0,tag:"new",en:"Petunia",ar:"بيتونيا",sci:"Petunia × hybrida",size:{en:"Single pot",ar:"أصيص فردي"}},
  {id:"p16",cat:"trees",img:"topiary",price:12,light:"s",water:2,feat:0,tag:"",en:"Topiary ball shrub",ar:"شجيرة كروية مشكّلة",sci:"Clipped evergreen",size:{en:"70–90 cm",ar:"٧٠–٩٠ سم"}},
  {id:"p17",cat:"trees",img:"banana",price:6.5,light:"s",water:3,feat:0,tag:"",en:"Banana plant",ar:"شجرة الموز",sci:"Musa acuminata",size:{en:"150 cm",ar:"١٥٠ سم"}},
  {id:"p18",cat:"palms",img:"zamia",price:15,light:"p",water:1,feat:0,tag:"",en:"Cardboard palm",ar:"زاميا (نخيل الكرتون)",sci:"Zamia furfuracea",size:{en:"Mature, 80 cm",ar:"ناضجة ٨٠ سم"}},
  {id:"p19",cat:"palms",img:"palms",price:120,light:"s",water:2,feat:0,tag:"",en:"Washingtonia palm, mature",ar:"نخيل واشنطونيا ناضج",sci:"Washingtonia robusta",size:{en:"3–4 m trunk",ar:"جذع ٣–٤ م"}},
  {id:"p20",cat:"palms",img:"coconut",price:8,light:"s",water:2,feat:0,tag:"",en:"Young coconut palm",ar:"نخيل جوز الهند صغير",sci:"Cocos nucifera",size:{en:"100 cm",ar:"١٠٠ سم"}}
];

const GALLERY = [
  {img:"palms",t:"outdoor",en:"Washingtonia palms and bougainvillea",ar:"نخيل واشنطونيا وجهنمية"},
  {img:"indoor_shelves",t:"indoor",en:"Indoor plant hall",ar:"قاعة النباتات الداخلية"},
  {img:"vinca_crates",t:"flowers",en:"Vinca, fresh stock",ar:"فينكا، مخزون جديد"},
  {img:"cactus_display",t:"nursery",en:"Cactus display table",ar:"طاولة عرض الصبار"},
  {img:"azalea",t:"flowers",en:"Azaleas and begonias",ar:"أزاليا وبيغونيا"},
  {img:"indoor_large",t:"indoor",en:"Statement plants for lobbies",ar:"نباتات كبيرة للردهات"},
  {img:"bougain_pole",t:"flowers",en:"Trained bougainvillea",ar:"جهنمية مدرّبة على دعامة"},
  {img:"zamia",t:"outdoor",en:"Cardboard palm in the display garden",ar:"زاميا في حديقة العرض"},
  {img:"nertera",t:"indoor",en:"Coral bead plants",ar:"نباتات الخرز"},
  {img:"topiary",t:"outdoor",en:"Topiary shrubs",ar:"شجيرات مشكّلة"},
  {img:"banana",t:"nursery",en:"Inside the greenhouse",ar:"داخل البيت المحمي"},
  {img:"fittonia",t:"indoor",en:"Fittonia collection",ar:"مجموعة الفيتونيا"},
  {img:"bougain_colors",t:"flowers",en:"Bougainvillea colours",ar:"ألوان الجهنمية"},
  {img:"indoor_palm",t:"indoor",en:"Palms, ficus and planters",ar:"نخيل وفيكس وأصص"},
  {img:"succulents",t:"nursery",en:"Succulent shelf",ar:"رف العصاريات"},
  {img:"petunia",t:"flowers",en:"Petunias",ar:"بيتونيا"},
  {img:"coconut",t:"indoor",en:"Young coconut palms",ar:"نخيل جوز هند صغير"},
  {img:"sansevieria",t:"indoor",en:"Snake plants",ar:"سانسفيريا"},
  {img:"vinca",t:"flowers",en:"Vinca bench",ar:"طاولة الفينكا"}
];


/* ---------- additions: data ---------- */

PRODUCTS.push(
  {id:"p21",cat:"flowering",img:"jasmine",price:2.5,light:"s",water:2,feat:0,tag:"new",en:"Arabian jasmine",ar:"فل (ياسمين عربي)",sci:"Jasminum sambac",size:{en:"50–60 cm",ar:"٥٠–٦٠ سم"}},
  {id:"p22",cat:"indoor",img:"peace_lily",price:3.5,light:"i",water:3,feat:0,tag:"",en:"Peace lily",ar:"سباتيفيلوم (زنبق السلام)",sci:"Spathiphyllum wallisii",size:{en:"40–60 cm",ar:"٤٠–٦٠ سم"}},
  {id:"p23",cat:"flowering",img:"tecoma",price:5,light:"s",water:2,feat:0,tag:"",en:"Yellow bells",ar:"تيكوما (الأجراس الصفراء)",sci:"Tecoma stans",size:{en:"100 cm",ar:"١٠٠ سم"}},
  {id:"p24",cat:"palms",img:"cycas",price:85,light:"s",water:1,feat:0,tag:"",en:"Sago palm, mature",ar:"سيكاس ناضج",sci:"Cycas revoluta",size:{en:"Trunk 80–100 cm",ar:"جذع ٨٠–١٠٠ سم"}},
  {id:"p25",cat:"palms",img:"fan_palms",price:50,light:"s",water:1,feat:0,tag:"",en:"Mediterranean fan palm",ar:"نخيل المروحة المتوسطي",sci:"Chamaerops humilis",size:{en:"Multi-stem, 90 cm",ar:"متعدد السيقان ٩٠ سم"}},
  {id:"p26",cat:"seasonal",img:"marigold",price:0.5,light:"s",water:2,feat:0,tag:"new",en:"Marigold",ar:"قطيفة",sci:"Tagetes erecta",size:{en:"Single pot",ar:"أصيص فردي"}},
  {id:"p27",cat:"seasonal",img:"flower_market",price:3,light:"s",water:2,feat:0,tag:"",en:"Winter flower pot, large",ar:"أصيص زهور شتوية كبير",sci:"Dianthus, zinnia & more",size:{en:"25 cm pot",ar:"أصيص ٢٥ سم"}},
  {id:"p28",cat:"indoor",img:"sansevieria_z",price:5,light:"i",water:1,feat:0,tag:"",en:"Zeylanica snake plant",ar:"سانسفيريا زيلانيكا",sci:"Sansevieria zeylanica",size:{en:"40–50 cm",ar:"٤٠–٥٠ سم"}},
  {id:"p29",cat:"seasonal",img:"vinca_bowl",price:3.5,light:"s",water:2,feat:0,tag:"",en:"Vinca bowl",ar:"زبدية فينكا",sci:"Catharanthus roseus",size:{en:"30 cm bowl",ar:"زبدية ٣٠ سم"}},
  {id:"p30",cat:"seasonal",img:"vinca_pots",price:3,light:"s",water:1,feat:0,tag:"",en:"Gazania",ar:"جازانيا",sci:"Gazania rigens",size:{en:"20 cm pot",ar:"أصيص ٢٠ سم"}},
  {id:"p31",cat:"trees",img:"ornamental_tree",price:18,light:"s",water:2,feat:0,tag:"",en:"Standard ornamental tree",ar:"شجرة زينة بجذع",sci:"Standard-trained",size:{en:"180 cm",ar:"١٨٠ سم"}}
);
PRODUCTS.find(p=>p.id==="p8").feat=0;
["p21","p24","p26","p22","p18"].forEach(id=>PRODUCTS.find(p=>p.id===id).feat=1);

GALLERY.unshift(
  {img:"flower_hall",t:"nursery",en:"Covered flower hall",ar:"قاعة الزهور المظللة"},
  {img:"nursery_view",t:"nursery",en:"Seedling benches and flower beds",ar:"طاولات الشتلات وأحواض الزهور"},
  {img:"flower_market",t:"flowers",en:"Winter flower display",ar:"معرض الزهور الشتوية"},
  {img:"cycas",t:"outdoor",en:"Mature sago palm",ar:"سيكاس ناضج"},
  {img:"marigold",t:"flowers",en:"Marigold trays",ar:"صواني القطيفة"},
  {img:"peace_lily",t:"indoor",en:"Peace lilies",ar:"زنبق السلام"},
  {img:"fan_palms",t:"outdoor",en:"Fan palms and frangipani",ar:"نخيل المروحة والفتنة"},
  {img:"flower_mix",t:"flowers",en:"Spring bedding plants",ar:"نباتات أحواض الربيع"},
  {img:"jasmine",t:"outdoor",en:"Arabian jasmine",ar:"الفل"},
  {img:"marigold_petunia",t:"flowers",en:"Marigolds and petunias",ar:"قطيفة وبيتونيا"},
  {img:"ornamental_tree",t:"outdoor",en:"Standard trees and hedging",ar:"أشجار بجذع وأسوار نباتية"},
  {img:"vinca_pots",t:"flowers",en:"Vinca and gazania pots",ar:"أصص فينكا وجازانيا"},
  {img:"tecoma",t:"outdoor",en:"Yellow bells",ar:"التيكوما"},
  {img:"sansevieria_z",t:"indoor",en:"Zeylanica snake plants",ar:"سانسفيريا زيلانيكا"},
  {img:"vinca_rows",t:"flowers",en:"Vinca benches",ar:"طاولات الفينكا"},
  {img:"shrub_bowl",t:"outdoor",en:"Flowering shrub in a bowl planter",ar:"شجيرة مزهرة في أصيص"},
  {img:"vinca_bowl",t:"flowers",en:"Vinca bowl",ar:"زبدية فينكا"}
);

const FLOWERS = [
  {en:"Marigold",ar:"قطيفة",m:[10,11,12,1,2,3,4],c:"#EF8E12"},
  {en:"Petunia",ar:"بيتونيا",m:[11,12,1,2,3],c:"#C2205F"},
  {en:"Dianthus",ar:"قرنفل",m:[11,12,1,2,3,4],c:"#D23B3B"},
  {en:"Snapdragon",ar:"أنف العجل",m:[12,1,2,3],c:"#E0668E"},
  {en:"Pansy",ar:"بانسيه",m:[12,1,2],c:"#7A4FB5"},
  {en:"Gazania",ar:"جازانيا",m:[10,11,12,1,2,3,4,5],c:"#D9A800"},
  {en:"Zinnia",ar:"زينيا",m:[3,4,5,6,9,10,11],c:"#E0452C"},
  {en:"Vinca",ar:"فينكا",m:[3,4,5,6,7,8,9,10],c:"#B81C66"},
  {en:"Gomphrena",ar:"جمفرينا",m:[4,5,6,7,8,9,10],c:"#8E2A86"},
  {en:"Portulaca",ar:"بورتولاكا",m:[4,5,6,7,8,9],c:"#F06A3C"}
];
const MONTHS = {
  en:["January","February","March","April","May","June","July","August","September","October","November","December"],
  ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
  enS:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  arS:["ينا","فبر","مار","أبر","ماي","يون","يول","أغس","سبت","أكت","نوف","ديس"]
};
const kwMonth = () => +new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kuwait",month:"numeric"}).format(new Date());

const GUIDES = [
  {slug:"summer-garden",img:"cycas",min:4,
   en:{t:"Keeping a garden alive through a Kuwaiti summer",x:"Watering times, mulch and shade: the few habits that decide whether plants make it to October.",
       s:[["Water early, not often","Water before 7 am so roots drink before the heat peaks. Deep watering every day or two beats a light sprinkle twice a day, which evaporates before it reaches the roots."],
          ["Cover the soil","A 5 cm layer of bark or gravel mulch keeps the soil cooler and noticeably cuts evaporation. Keep it a few centimetres away from stems."],
          ["Give young plants shade","New plantings and pots on west-facing walls benefit from 50% shade cloth in their first summer. Established palms and bougainvillea can take full sun."]],
       tip:"Switch irrigation timers to the summer schedule in April, and back again in October."},
   ar:{t:"كيف تحافظ على حديقتك في صيف الكويت",x:"مواعيد الري والتغطية والظل: عادات بسيطة تحدد إن كانت النباتات ستصمد حتى أكتوبر.",
       s:[["اسقِ مبكراً وليس كثيراً","اسقِ قبل السابعة صباحاً لتشرب الجذور قبل ذروة الحر. الري العميق كل يوم أو يومين أفضل من رش خفيف مرتين يومياً يتبخر قبل أن يصل إلى الجذور."],
          ["غطِّ التربة","طبقة من اللحاء أو الحصى بسماكة ٥ سم تبرّد التربة وتقلل التبخر بشكل واضح. أبعدها بضعة سنتيمترات عن السيقان."],
          ["ظلّل النباتات الصغيرة","النباتات المزروعة حديثاً والأصص على الجدران الغربية تستفيد من قماش تظليل ٥٠٪ في صيفها الأول. أما النخيل والجهنمية بعد تثبيتها فتتحمل الشمس الكاملة."]],
       tip:"حوّل مؤقت الري إلى جدول الصيف في أبريل، ثم أعده في أكتوبر."}},
  {slug:"indoor-ac",img:"peace_lily",min:3,
   en:{t:"Indoor plants and air conditioning",x:"AC dries the air and chills leaves. Where to place plants, and how often to water them indoors.",
       s:[["Keep them out of the draft","Place plants at least a metre from AC vents. Cold, dry air blowing directly on leaves causes brown tips and leaf drop."],
          ["Most indoor plants die from too much water","Check the soil with your finger. If the top 2–3 cm is dry, water until it drains from the bottom, then empty the saucer."],
          ["Pick the right plant for the room","Snake plants cope with low light. Peace lilies and fiddle leaf figs want bright, indirect light near a window."]],
       tip:"Group plants together. They raise the humidity around each other."},
   ar:{t:"النباتات الداخلية والتكييف",x:"التكييف يجفف الهواء ويبرد الأوراق. أين تضع النباتات وكم مرة تسقيها في الداخل.",
       s:[["أبعدها عن تيار الهواء","ضع النباتات على بعد متر على الأقل من فتحات التكييف. الهواء البارد والجاف المباشر يسبب جفاف الأطراف وتساقط الأوراق."],
          ["معظم النباتات الداخلية تموت من كثرة الماء","افحص التربة بإصبعك. إذا كانت الطبقة العليا جافة بعمق ٢–٣ سم، اسقِ حتى يخرج الماء من الأسفل ثم أفرغ الصحن."],
          ["اختر النبتة المناسبة للغرفة","السانسفيريا تتحمل الإضاءة الضعيفة. أما زنبق السلام والفيكس لايراتا فتحتاج ضوءاً ساطعاً غير مباشر قرب النافذة."]],
       tip:"اجمع النباتات معاً، فهي ترفع الرطوبة حول بعضها."}},
  {slug:"bougainvillea",img:"bougain_pole",min:3,
   en:{t:"Getting bougainvillea to flower",x:"Lots of leaves and no colour usually means too much water or too much fertiliser.",
       s:[["Full sun, at least six hours","Bougainvillea flowers on sunny growth. In shade it grows leaves instead."],
          ["Let it dry out a little","Slight dryness between waterings triggers blooming. Constantly wet soil keeps the plant growing leaves."],
          ["Prune after each flush","Trim back once a round of flowers finishes. The new growth brings the next round of colour within weeks."]],
       tip:"Use a fertiliser low in nitrogen and higher in potassium."},
   ar:{t:"كيف تجعل الجهنمية تزهر",x:"كثرة الأوراق وقلة الألوان تعني غالباً ماءً زائداً أو سماداً زائداً.",
       s:[["شمس كاملة ست ساعات على الأقل","تزهر الجهنمية على النموات المعرضة للشمس، وفي الظل تنتج أوراقاً بدلاً من الأزهار."],
          ["اتركها تجف قليلاً","الجفاف الخفيف بين الريّات يحفّز الإزهار، بينما التربة الرطبة دائماً تبقي النبتة في طور نمو الأوراق."],
          ["قلّم بعد كل موجة إزهار","قص الأطراف بعد انتهاء موجة الأزهار، فالنموات الجديدة تجلب الموجة التالية خلال أسابيع."]],
       tip:"استخدم سماداً قليل النيتروجين وغنياً بالبوتاسيوم."}},
  {slug:"winter-flowers",img:"marigold_petunia",min:4,
   en:{t:"Planting winter flowers: when and what",x:"October to December is the window for marigolds, petunias and dianthus that flower until spring.",
       s:[["Start when nights cool down","Plant once night temperatures stay below about 25°C, usually from mid-October."],
          ["Prepare the bed","Mix in compost and loosen the soil 20 cm deep. Sandy soil drains fast and holds few nutrients on its own."],
          ["Plant in blocks of one colour","Blocks of a single colour read better from a distance than mixed dots, especially along paths and entrances."]],
       tip:"Remove spent flowers every week to keep plants blooming longer."},
   ar:{t:"زراعة الزهور الشتوية: متى وماذا",x:"من أكتوبر إلى ديسمبر هو الوقت المناسب لزراعة القطيفة والبيتونيا والقرنفل التي تزهر حتى الربيع.",
       s:[["ابدأ عندما تبرد الليالي","ازرع عندما تبقى درجات الحرارة ليلاً دون ٢٥°م تقريباً، عادة من منتصف أكتوبر."],
          ["جهّز الحوض","اخلط السماد العضوي وقلّب التربة بعمق ٢٠ سم، فالتربة الرملية تصرّف الماء بسرعة وفقيرة بالعناصر الغذائية."],
          ["ازرع كتلاً بلون واحد","الكتل ذات اللون الواحد تبدو أجمل من بعيد مقارنة بالألوان المتفرقة، خاصة على الممرات والمداخل."]],
       tip:"أزل الأزهار الذابلة أسبوعياً لتستمر النباتات في الإزهار لفترة أطول."}}
];

Object.assign(T.en.nav,{seasonal:"Seasonal flowers",wholesale:"Wholesale & projects",care:"Care guides",faq:"FAQ",plant:"Plant",guide:"Guide"});
Object.assign(T.ar.nav,{seasonal:"الزهور الموسمية",wholesale:"الجملة والمشاريع",care:"أدلة العناية",faq:"الأسئلة الشائعة",plant:"نبتة",guide:"دليل"});
Object.assign(T.en,{
  grpPlants:"Plants", grpServices:"Services",
  subDesc:{plants:"Full catalogue with prices",seasonal:"What's blooming this month",landscaping:"Design, planting & maintenance",irrigation:"Drip, sprinklers & smart timers",wholesale:"Bulk supply for contractors & projects"},
  backPlants:"All plants", qty:"Quantity", addList:"Add to enquiry list", updList:"Update enquiry list", askWa:"Ask about this plant",
  specLight:"Light", specWater:"Watering", specSize:"Size", specCat:"Category", careT:"Care basics", related:"More from this category",
  pdNote:"Delivery across Kuwait. Free potting when you buy a planter.",
  lightTxt:{i:"Bright, indirect light. Keep at least a metre from AC vents.",s:"Full sun. Best with drip irrigation through the summer.",p:"Morning sun or bright shade. Protect from afternoon sun in summer."},
  waterTxt:["Let the soil dry out between waterings.","Water when the top 2–3 cm of soil feels dry.","Keep the soil evenly moist, especially in hot weather."],
  hardTxt:"Checked for pests and hardened in our nursery before sale.",
  waAsk:"I'd like to ask about: ",
  seTitle:"Seasonal flowers", seSub:"Kuwait has two flower seasons. Here's what we usually stock, and when.",
  bloomNow:m=>`In bloom this ${m}`, seeCal:"See the flower calendar", calTitle:"Flower calendar", calNote:"Typical availability. It shifts by a few weeks from year to year.",
  winterT:"Winter season, October to April", winterD:"Marigolds, petunias, dianthus and snapdragons flower through the cool months and give the strongest colour of the year.",
  summerT:"Summer season, April to October", summerD:"Vinca, portulaca and gomphrena handle 45°C sun with drip irrigation and keep beds colourful through the heat.",
  seShop:"Seasonal plants in stock", bookPlanting:"Book seasonal bed planting",
  whTitle:"Wholesale & project supply", whSub:"Plants in volume for landscaping contractors, developers, hotels and events, grown and hardened in our Shuwaikh nursery.",
  whoTitle:"Who we supply",
  who:[["Developers & facilities","Planting for residential compounds, towers and commercial buildings."],["Landscaping contractors","Trade pricing and reserved stock around your project schedule."],["Hotels, offices & malls","Indoor and outdoor plants with regular replacement and care."],["Events & exhibitions","Seasonal flowers and statement plants, delivered and collected."]],
  whyTitle:"Why trade customers work with us",
  why:[["Stock grown for local conditions","Plants are hardened on site, so there are fewer losses after planting."],["One order for plants and irrigation","We supply the planting and the drip system together, from one team."],["Scheduled deliveries","We deliver in phases to match your site programme."]],
  whStepsT:"How a trade order works",
  whSteps:[["Send your plant list","Share the BOQ or a list with sizes and quantities."],["Stock & price confirmed","We confirm availability and send a quote, usually within one working day."],["Delivery scheduled","Deliveries are booked around your site programme."],["Placed on site","Our team offloads and places plants where you need them."]],
  wfTitle:"Request a trade quote", wfCompany:"Company", wfType:"Project type", wfTypes:["Residential","Commercial","Hotel / hospitality","Event","Other"], wfDate:"Needed by", wfList:"Plant list (names, sizes, quantities)", wfSend:"Send request",
  careTitle:"Plant care guides", careSub:"Practical advice for growing plants in Kuwait's climate, from our nursery team.",
  minRead:n=>`${n} min read`, moreGuides:"More guides", tipL:"Nursery tip", needHelp:"Still unsure? Send us a photo of the plant and we'll take a look.",
  faqSub:"Answers about orders, delivery, plant care and our services.", faqMore:"Didn't find your answer?",
  faqGroups:[
    ["Orders & delivery",[["Do you deliver across Kuwait?","Yes. We deliver to all governorates. Large plants and palms are delivered and placed by our team."],["Can I reserve plants before visiting?","Yes. Send us your list and we'll hold the plants for you for a short time."],["Do you offer trade prices?","Yes, for landscaping contractors and project orders. See the wholesale page or send us your plant list."]]],
    ["Plants & care",[["Can you plant what I buy?","Yes. We offer planting and potting for any order, plus pots and soil mixes to go with it."],["Which plants survive the summer outdoors?","Bougainvillea, vinca, palms, cycads and many shrubs handle full sun well once established with regular drip irrigation."],["Can you help me choose plants for my home?","Send a photo of the space and tell us which direction it faces. We'll suggest plants that suit the light."]]],
    ["Irrigation & services",[["Do you service irrigation systems you didn't install?","Yes. We inspect, repair and upgrade existing systems, including replacing old controllers with smart timers."],["How long does an irrigation installation take?","Most villa gardens take one to three days, depending on size and the number of zones."],["Do you offer maintenance contracts?","Yes. Weekly, fortnightly or monthly visits for pruning, feeding, seasonal flowers and irrigation checks."]]]
  ],
  visitTitle:"Visit the nursery", visitSub:"Walk the benches, see the stock in person, and talk to our team about your garden.", today:"Today"
});
Object.assign(T.ar,{
  grpPlants:"النباتات", grpServices:"الخدمات",
  subDesc:{plants:"الكتالوج الكامل مع الأسعار",seasonal:"ما يزهر هذا الشهر",landscaping:"تصميم وزراعة وصيانة",irrigation:"تنقيط ورشاشات ومؤقتات ذكية",wholesale:"توريد بالجملة للمقاولين والمشاريع"},
  backPlants:"كل النباتات", qty:"الكمية", addList:"أضف إلى قائمة الطلب", updList:"تحديث قائمة الطلب", askWa:"اسأل عن هذه النبتة",
  specLight:"الإضاءة", specWater:"الري", specSize:"المقاس", specCat:"الفئة", careT:"أساسيات العناية", related:"المزيد من نفس الفئة",
  pdNote:"توصيل لجميع مناطق الكويت. تأصيص مجاني عند شراء أصيص.",
  lightTxt:{i:"ضوء ساطع غير مباشر، وأبعدها متراً على الأقل عن فتحات التكييف.",s:"شمس كاملة، ويفضل الري بالتنقيط خلال الصيف.",p:"شمس الصباح أو ظل ساطع، واحمها من شمس العصر صيفاً."},
  waterTxt:["اترك التربة تجف بين الريّات.","اسقِ عندما تجف الطبقة العليا من التربة بعمق ٢–٣ سم.","حافظ على رطوبة التربة بانتظام، خاصة في الحر."],
  hardTxt:"مفحوصة من الآفات ومؤقلمة في مشتلنا قبل البيع.",
  waAsk:"أود الاستفسار عن: ",
  seTitle:"الزهور الموسمية", seSub:"في الكويت موسمان للزهور. إليك ما نوفره عادة ومتى.",
  bloomNow:m=>`مزهرة في ${m}`, seeCal:"اطّلع على تقويم الزهور", calTitle:"تقويم الزهور", calNote:"التوفر المعتاد، وقد يتغير بضعة أسابيع من عام لآخر.",
  winterT:"الموسم الشتوي، من أكتوبر إلى أبريل", winterD:"القطيفة والبيتونيا والقرنفل وأنف العجل تزهر خلال الأشهر الباردة وتمنح أقوى ألوان السنة.",
  summerT:"الموسم الصيفي، من أبريل إلى أكتوبر", summerD:"الفينكا والبورتولاكا والجمفرينا تتحمل شمس ٤٥°م مع الري بالتنقيط وتبقي الأحواض ملونة طوال الحر.",
  seShop:"نباتات موسمية متوفرة", bookPlanting:"احجز زراعة الأحواض الموسمية",
  whTitle:"توريد بالجملة وللمشاريع", whSub:"نباتات بكميات كبيرة لمقاولي تنسيق الحدائق والمطورين والفنادق والفعاليات، مزروعة ومؤقلمة في مشتلنا بالشويخ.",
  whoTitle:"لمن نورّد",
  who:[["مطورون وإدارة مرافق","زراعة للمجمعات السكنية والأبراج والمباني التجارية."],["مقاولو تنسيق الحدائق","أسعار خاصة ومخزون محجوز حسب جدول مشروعك."],["فنادق ومكاتب ومجمعات","نباتات داخلية وخارجية مع استبدال وعناية منتظمة."],["فعاليات ومعارض","زهور موسمية ونباتات مميزة مع التوصيل والاستلام."]],
  whyTitle:"لماذا يتعامل معنا عملاء المشاريع",
  why:[["مخزون مزروع للظروف المحلية","النباتات مؤقلمة في الموقع، فتقل الخسائر بعد الزراعة."],["طلب واحد للنباتات والري","نوفر النباتات وشبكة التنقيط معاً من فريق واحد."],["توصيل مجدول","نوصل على مراحل بما يتوافق مع برنامج موقعك."]],
  whStepsT:"كيف يتم طلب المشاريع",
  whSteps:[["أرسل قائمة النباتات","شارك جدول الكميات أو قائمة بالمقاسات والكميات."],["تأكيد المخزون والسعر","نؤكد التوفر ونرسل عرض السعر، عادة خلال يوم عمل."],["جدولة التوصيل","نحجز مواعيد التوصيل حسب برنامج موقعك."],["الوضع في الموقع","يقوم فريقنا بالتنزيل ووضع النباتات حيث تحتاجها."]],
  wfTitle:"اطلب عرض سعر للمشاريع", wfCompany:"الشركة", wfType:"نوع المشروع", wfTypes:["سكني","تجاري","فندقي / ضيافة","فعالية","أخرى"], wfDate:"مطلوب بتاريخ", wfList:"قائمة النباتات (الأسماء والمقاسات والكميات)", wfSend:"أرسل الطلب",
  careTitle:"أدلة العناية بالنباتات", careSub:"نصائح عملية لزراعة النباتات في مناخ الكويت من فريق مشتلنا.",
  minRead:n=>`${n} دقائق قراءة`, moreGuides:"أدلة أخرى", tipL:"نصيحة المشتل", needHelp:"ما زلت محتاراً؟ أرسل لنا صورة النبتة وسنساعدك.",
  faqSub:"إجابات عن الطلبات والتوصيل والعناية بالنباتات وخدماتنا.", faqMore:"لم تجد إجابتك؟",
  faqGroups:[
    ["الطلبات والتوصيل",[["هل توصلون إلى جميع مناطق الكويت؟","نعم. نوصل إلى جميع المحافظات، ويقوم فريقنا بتوصيل النباتات الكبيرة والنخيل ووضعها في مكانها."],["هل يمكنني حجز النباتات قبل الزيارة؟","نعم. أرسل لنا قائمتك وسنحجز النباتات لك لفترة قصيرة."],["هل لديكم أسعار للمشاريع؟","نعم، لمقاولي تنسيق الحدائق وطلبات المشاريع. اطّلع على صفحة الجملة أو أرسل لنا قائمة النباتات."]]],
    ["النباتات والعناية",[["هل يمكنكم زراعة ما أشتريه؟","نعم. نقدم خدمة الزراعة والتأصيص لأي طلب، مع الأصص وخلطات التربة المناسبة."],["ما النباتات التي تتحمل الصيف في الخارج؟","الجهنمية والفينكا والنخيل والسيكاس وكثير من الشجيرات تتحمل الشمس الكاملة بعد تثبيتها مع ري منتظم بالتنقيط."],["هل تساعدونني في اختيار نباتات لمنزلي؟","أرسل صورة للمكان وأخبرنا باتجاهه، وسنقترح نباتات تناسب الإضاءة."]]],
    ["الري والخدمات",[["هل تصلحون أنظمة ري لم تركّبوها؟","نعم. نفحص ونصلح ونطوّر الأنظمة القائمة، بما في ذلك استبدال المؤقتات القديمة بمؤقتات ذكية."],["كم يستغرق تركيب نظام الري؟","معظم حدائق الفلل تستغرق من يوم إلى ثلاثة أيام حسب المساحة وعدد المناطق."],["هل لديكم عقود صيانة؟","نعم. زيارات أسبوعية أو نصف شهرية أو شهرية للتقليم والتسميد والزهور الموسمية وفحص الري."]]]
  ],
  visitTitle:"زر المشتل", visitSub:"تجوّل بين طاولات العرض وشاهد النباتات بنفسك وتحدث مع فريقنا عن حديقتك.", today:"اليوم"
});


