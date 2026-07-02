let slides = document.querySelectorAll(".slide");
let current = 0;
let currentLang = "kz";
/* TEXT */
const t = {
  kz:{
    M1:"Басты бет",
    M2:"Турлар жайлы",
    M21:"ЗАМАНАУИ ШЫМКЕНТ",
    M22:"ҚАЛАНЫҢ ӘІО",
    M23:"ТАНЫМДЫҚ ТУР",
    M24:"ТАРИХИ ҚАЛА",
    M25:"ДІНИ ТУРИЗМ",
    M26:"ЕСКЕ АЛУ ЖӘНЕ МӘДЕНИЕТ БАҒЫТЫ",
    M3:"Біз туралы",
    M4:"Байланыс",
    Poroda:"🌦️ Ауа райы",
    marshut:"📍 Маршрут",
    C1:"📍КАРТАДАН ҚАРАУ",
   s1_title:"ТАРИХИ ҚАЛА",
    s1_text:"№4 Тур",
    s2_title:"TEMIRZHOL VOKZALY",
    s2_text:"1916 жылы Шымкент теміржол вокзалы — қаланың маңызды көлік инфрақұрылымының бірі. Бүгінде заманауи талаптарға сай жаңартылған вокзал жолаушыларға жоғары деңгейдегі қызмет көрсетіп, қолайлы жағдайларымен және кеңейтілген өткізу мүмкіндігімен ерекшеленеді.",
    s3_title:"«QOSHQAR ATA» OZENI",
    s3_text:"«Қошқар ата» өзені — мөлдір бұлақ суымен танымал табиғи орындардың бірі. Өзен жағалауында серуендеуге арналған әсем аллеялар мен демалыс аймақтары орналасқан.",
    s4_title:"«ORDABASY» MESHITI",
    s4_text:"«Ордабасы» мешіті — қала орталығында орналасқан сәулетті әрі заманауи діни ғимарат. Мешіт өзінің әдемі архитектурасымен және рухани маңызымен ерекшеленеді.",
    s5_title:"«ZHER ANA» MONUMENTI",
    s5_text:"«Жер ана» монументі — тәуелсіздік пен бірлікті бейнелейтін сәулеттік ескерткіш. Оның биіктігі 34 метр. «Тәуелсіздік» саябағы мен «Алтын көпір» кешенімен байланысып, маңызды сәулеттік ансамбль құрайды.",
    s6_title:"«TAUELSIZDIK» SAYABAGY №1",
    s6_text:"«Тәуелсіздік» саябағы — 2011 жылы ашылған тарихи-мәдени демалыс орны. Саябақта Тәуелсіздік аркасы мен ел тарихын бейнелейтін монументтер орналасқан.",
    s7_title:"«TAUELSIZDIK» SAYABAGY №2",
    s7_text:"Тәуелсіздік саябағындағы Мемлекеттік Ту алаңы — Қазақстан Республикасының басты мемлекеттік рәміздерінің бірі саналатын Көк Туға арналған ерекше орын.",
    s8_title:"«ALTYN SHANYRAQ»",
    s8_text:"«Алтын шаңырақ» — халықтар достығы мен бірлігін бейнелейтін символдық ескерткіш. Бұл нысан татулық пен ынтымақтың белгісі болып саналады.",
    s9_title:"«SHYMQALA» ETNOAUYLY",
    s9_text:"«Shymqala» этноауылы — қазақ халқының көшпелі өмірі мен ұлттық дәстүрін таныстыратын мәдени кешен. Мұнда ұлттық қолөнер, салт-дәстүр және этнографиялық көріністер ұсынылады.",
    s10_title:"«SHYMQALA» TARIKHI-MADENI KESHENI",
    s10_text:"«Shymqala» кешені — ежелгі қаланың тарихи келбетін көрсететін ашық аспан астындағы музей. Кешен келушілерді көне тарихпен және мәдени мұрамен таныстырады.",
    s11_title:"FILARMONIA",
    s11_text:"Филармония — 1930 жылдан бері жұмыс істеп келе жатқан мәдениет және музыка орталығы. Мұнда концерттер, музыкалық кештер және түрлі шығармашылық шаралар өткізіледі.",
    s12_title:"«PUSHKIN» KITAPHANASY",
    s12_text:"«Пушкин» кітапханасы – 1899 жылы ашылған көне мәдени-ағарту мекемелерінің бірі. Кітапхана заманауи оқырмандарға қызмет көрсетіп, бай кітап қорымен ерекшеленеді.",
    s13_title:"«SHAMSHI ALEMI» SAYABAGY",
    s13_text:"«Шәмші әлемі» сквері — музыка мен мәдениетке арналған ерекше демалыс орны. Сквер қазақ музыкасының дамуына үлес қосқан сазгер Шәмші Қалдаяқовтың құрметіне аталған.",
    s14_title:"MUZYKALYQ SUBURQAQ",
    s14_text:"Музыкалық субұрқақ — жарық, су және лазерлік шоумен ерекшеленетін заманауи демалыс орны. Кешкі уақытта мұнда әсем көріністер ұйымдастырылады.",
    s15_title:"QYRGY BAZAR",
    s15_text:"Қырғы базар — қаладағы ең көне әрі ірі сауда орындарының бірі.",
    },
  ru:{
    M1:"Главная",
    M2:"О турах",
    M21:"СОВРЕМЕННЫЙ ШЫМКЕНТ",
    M22:"ГОРОДСКОЙ АДО",
    M23:"ПОЗНАВАТЕЛЬНЫЙ ТУР",
    M24:"ИСТОРИЧЕСКИЙ ГОРОД",
    M25:"РЕЛИГИОЗНЫЙ ТУРИЗМ",
    M26:"ПАМЯТЬ И КУЛЬТУРА",
    M3:"О нас",
    M4:"Контакты",
    Poroda:"🌦️Погода",
    marshut:"📍 Маршрут",
    C1:"📍СМОТРЕТЬ НА КАРТЕ",
    s1_title:"ИСТОРИЧЕСКИЙ ГОРОД",
    s1_text:"Тур №4",
    s2_title:"ЖЕЛЕЗНОДОРОЖНЫЙ ВОКЗАЛ ",
    s2_text:"Железнодорожный вокзал Шымкента, построенный в 1916 году, является одним из важнейших объектов транспортной инфраструктуры города. Сегодня обновлённый в соответствии с современными требованиями вокзал обеспечивает высокий уровень обслуживания пассажиров, отличаясь комфортными условиями и увеличенной пропускной способностью. ",
    s3_title:"РЕКА «КОШКАР АТА»",
    s3_text:"Река «Кошкар ата» — одно из природных мест города, известное своей чистой родниковой водой. Вдоль реки расположены благоустроенные аллеи и зоны отдыха для прогулок",
    s4_title:"МЕЧЕТЬ «ОРДАБАСЫ»",
    s4_text:"Мечеть «Ордабасы» — современное архитектурное религиозное сооружение, расположенное в центре города. Мечеть отличается красивой архитектурой и имеет важное духовное значение. ",
    s5_title:"МОНУМЕНТ «ЖЕР АНА» ",
    s5_text:"Монумент «Жер Ана» — архитектурный памятник, символизирующий независимость и единство. Его высота составляет 34 метра. Вместе с парком Независимости и комплексом «Алтын көпір» он образует важный архитектурный ансамбль. ",
    s6_title:"ПАРК «НЕЗАВИСИМОСТИ» №1",
    s6_text:"Парк «Независимости» — историко-культурная зона отдыха, открытая в 2011 году. На территории парка расположены Арка Независимости и монументы, отражающие историю страны. ",
    s7_title:"ПАРК «НЕЗАВИСИМОСТИ» №2",
    s7_text:"Площадь Государственного Флага в парке Независимости — особое место, посвящённое Государственному флагу Республики Казахстан, одному из главных государственных символов страны.",
    s8_title:" «АЛТЫН ШАНЫРАК»",
    s8_text:"«Алтын шанырак» — символический памятник, олицетворяющий дружбу народов и единство. Этот объект считается символом согласия и взаимопонимания. ",
    s9_title:"ЭТНОАУЛ «SHYMQALA» ",
    s9_text:"Этноаул «Shymqala» — культурный комплекс, знакомящий посетителей с кочевым образом жизни и национальными традициями казахского народа. Здесь представлены народные ремёсла, обычаи и этнографические экспозиции. ",
    s10_title:"ИСТОРИКО-КУЛЬТУРНЫЙ КОМПЛЕКС «SHYMQALA» ",
    s10_text:"Комплекс «Shymqala» представляет собой музей под открытым небом, отражающий исторический облик древнего города. Комплекс знакомит посетителей с древней историей и культурным наследием региона.",
    s11_title:"ФИЛАРМОНИЯ",
    s11_text:"Филармония — центр культуры и музыкального искусства, работающий с 1930 года. Здесь проводятся концерты, музыкальные вечера и различные творческие мероприятия. ",
    s12_title:"БИБЛИОТЕКА ИМЕНИ ПУШКИНА",
    s12_text:"Библиотека имени Пушкина — одно из старейших культурно-просветительских учреждений города, открытое в 1899 году. Библиотека отличается богатым книжным фондом и современным обслуживанием читателей. ",
    s13_title:"ПАРК «МИР ШАМШИ»",
    s13_text:" Парк «Мир Шамши» — особое место отдыха, посвящённое музыке и культуре. Парк назван в честь выдающегося казахского композитора Шамши Калдаякова, внёсшего значительный вклад в развитие национальной музыки. ",
    s14_title:"МУЗЫКАЛЬНЫЙ ФОНТАН",
    s14_text:"Музыкальный фонтан — современный объект отдыха, сочетающий световые, водные и лазерные шоу. В вечернее время здесь проводятся красочные представления",
    s15_title:"РЫНОК «КЫРГЫ БАЗАР»",
    s15_text:"«Кыргы базар» — один из старейших и крупнейших рынков города, пользующийся популярностью среди жителей и гостей Шымкента. "
  },
  en:{
    M1:"Home",
    M2:"About tours",
    M21:"MODERN SHYMKENT",
    M22:"CITY ADMINISTRATIVE CENTER",
    M23:"EDUCATIONAL TOUR",
    M24:"HISTORICAL CITY",
    M25:"RELIGIOUS TOURISM",
    M26:"MEMORY & CULTURE",
    M3:"About us",
    M4:"Contact",
    Poroda:"🌦️ Weather",
    marshut:"📍 Route",
    C1:"📍VIEW ON MAP",
    s1_title:"HISTORICAL CITY",
    s1_text:"Tour №4",
    s2_title:"RAILWAY STATION",
    s2_text:"Shymkent Railway Station, built in 1916, is one of the city’s most important transportation infrastructure facilities. Today, the station has been modernized to meet contemporary standards and provides a high level of passenger service, offering comfortable facilities and increased capacity.",
    s3_title:"«KOSHKAR ATA» RIVER",
    s3_text:"The Koshkar Ata River is one of the city's natural landmarks, renowned for its crystal-clear spring water. Landscaped promenades and recreational areas along the river provide excellent opportunities for walking and relaxation.",
    s4_title:"«ORDABASY» MOSQUE",
    s4_text:"Ordabasy Mosque is a modern religious and architectural landmark located in the city center. The mosque is distinguished by its elegant design and serves as an important spiritual center for residents and visitors.",
    s5_title:"«ZHER ANA» MONUMENT",
    s5_text:"The Zher Ana Monument is an architectural landmark symbolizing independence and national unity. Standing 34 meters tall, it forms an important architectural ensemble together with Independence Park and the Altyn Kopir complex.",
    s6_title:"«INDEPENDENCE» PARK №1",
    s6_text:"Independence Park is a historical and cultural recreational area that was opened in 2011. The park features the Independence Arch and several monuments reflecting the history and achievements of the Republic of Kazakhstan. ",
    s7_title:"«INDEPENDENCE» PARK №2",
    s7_text:"The State Flag Square, located within Independence Park, is a special site dedicated to the National Flag of the Republic of Kazakhstan, one of the country’s most important state symbols. ",
    s8_title:"«ALTYN SHANYRAQ»",
    s8_text:"Altyn Shanyraq is a symbolic monument representing friendship, unity, and harmony among the people of Kazakhstan. It is widely regarded as a symbol of peace, mutual understanding, and national solidarity.",
    s9_title:"«SHYMQALA» ETHNO-VILLAGE",
    s9_text:"The Shymqala Ethno-Village is a cultural complex that introduces visitors to the nomadic lifestyle and traditional customs of the Kazakh people. The site features traditional crafts, customs, and ethnographic exhibitions that showcase the rich cultural heritage of Kazakhstan.",
    s10_title:"«SHYMQALA» HISTORICAL AND CULTURAL COMPLEX",
    s10_text:"The Shymqala Historical and Cultural Complex is an open-air museum that recreates the historical appearance of the ancient city. Visitors can explore the region’s rich history and cultural heritage through authentic reconstructions and educational exhibits.",
    s11_title:"PHILHARMONIC HALL",
    s11_text:"The Philharmonic Hall is a center of culture and musical arts that has been operating since 1930. It hosts concerts, musical evenings, and a variety of creative and cultural events throughout the year.",
    s12_title:"«PUSHKIN» LIBRARY ",
    s12_text:"The Pushkin Library is one of the oldest cultural and educational institutions in the city, having been established in 1899. The library is known for its extensive collection of books and its modern services for readers and researchers.",
    s13_title:"«SHAMSHI ALEMI» PARK ",
    s13_text:"Shamshi Alemi Park is a unique recreational space dedicated to music and culture. The park is named after the outstanding Kazakh composer Shamshi Kaldayakov, who made a significant contribution to the development of national music. ",
    s14_title:"MUSICAL FOUNTAIN",
    s14_text:"The Musical Fountain is a modern recreational attraction that combines water, light, and laser effects into spectacular performances. In the evening, visitors can enjoy colorful shows and vibrant visual displays.",
    s15_title:"KYRGY BAZAR MARKET",
    s15_text:"Kyrgy Bazar is one of the oldest and largest markets in Shymkent. Popular among both residents and visitors, the market offers a wide variety of goods and provides a lively atmosphere that reflects the city’s vibrant commercial life."
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/TEMIRZHOL.mp3",ru:"audio/VOKZALRU.mp3",en:"audio/JDVOKZAL.mp3"},
  2:{kz:"audio/QOSHQAR.mp3",ru:"audio/KOSHKARATA.mp3",en:"audio/KOSHKAREN.mp3"},
  3:{kz:"audio/ORDABASY.mp3",ru:"audio/NECHETORDABASY.mp3",en:"audio/MECHETEN.mp3"},
  4:{kz:"audio/ZHER.mp3",ru:"audio/ALEAMATEREIRU.mp3",en:"audio/JERANA.mp3"},
  5:{kz:"audio/TAUELSIZDIK.mp3",ru:"audio/PARKNEZAVISIMOSTI.mp3",en:"audio/TAUELSIZDIKEN.mp3"},
  6:{kz:"audio/TAUELSIZDISAYABAGY.mp3",ru:"audio/NEZAVISIMOSTI2.mp3",en:"audio/TAUELSIZDIKEN2.mp3"},
  7:{kz:"audio/SHANYRAQ.mp3",ru:"audio/ALTYNSHANIRAK.mp3",en:"audio/SHANIRAK.mp3"},
  8:{kz:"audio/SHYMQALA.mp3",ru:"audio/ETNOAUIL.mp3",en:"audio/ETNOAUL.mp3"},
  9:{kz:"audio/SHYMQALKESHENI.mp3",ru:"audio/CITADEL.mp3",en:"audio/CITADELEN.mp3"},
  10:{kz:"audio/SHAMSHI.mp3",ru:"audio/FILARMONIA.mp3",en:"audio/FILARMONIAEN.mp3"},
  11:{kz:"audio/PUSHKIN.mp3",ru:"audio/PUSHKINBIBLIOTEKA.mp3",en:"audio/PUSHKINEN.mp3"},
  12:{kz:"audio/SHAMSHI2.mp3",ru:"audio/PARKSHAMSHI.mp3",en:"audio/PARKSHAMSHIEEN.mp3"},
  13:{kz:"audio/ZHANA.mp3",ru:"audio/",en:"audio/"},
  14:{kz:"audio/QYRGY.mp3",ru:"audio/VERHNYYPINOK.mp3",en:"audio/VERHNYBAZAR.mp3"},
};
function showSlide(i){
  slides.forEach(s=>s.classList.remove("active"));
  slides[i].classList.add("active");
  current=i;
  location.hash=slides[i].id;
  updateAudio();
}
function next(){showSlide((current+1)%slides.length);}
function prev(){showSlide((current-1+slides.length)%slides.length);}
/* AUDIO FIX */
function updateAudio(){
  let audio = slides[current].querySelector(".slide-audio");
  // егер аудио жоқ болса → тоқтату
  if(!audio) return;
  let src = audioData[current]?.[currentLang];
  if(!src){
    audio.pause();
    return;
  }
  audio.src = src;
  audio.load();
}
/* LANG */
function setLang(lang){
  currentLang=lang;
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText=t[lang][el.dataset.key];
  });
  updateAudio();
}
/* MAP */
function openMap(lat, lng){
  window.open(`https://2gis.kz/search/${lat},${lng}`);
}
/* HASH */
function openFromHash(){
  let h=location.hash.replace("#","");
  let i=[...slides].findIndex(s=>s.id===h);
  if(i>=0) showSlide(i); else showSlide(0);
}
/* START */
setLang("kz");
openFromHash();
window.addEventListener("hashchange",openFromHash);




//menu select
window.addEventListener("scroll", function(){
  let header = document.getElementById("header");
  if(!header) return; // 🔥 осыны қос
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// MENU OPEN
function openMenu(){
  document.getElementById("menu").classList.add("active");
}
// MENU CLOSE
function closeMenu(){
  document.getElementById("menu").classList.remove("active");
}
// SUBMENU TOGGLE
function toggle(el){
  el.classList.toggle("open");
}
let interval;
function openW(){
  document.getElementById("sheet").classList.add("active");
  document.getElementById("bg").classList.add("active");
  loadWeather();
  clearInterval(interval);
  interval = setInterval(loadWeather,600000);
}
function closeW(){
  document.getElementById("sheet").classList.remove("active");
  document.getElementById("bg").classList.remove("active");
}
function getHour(){
  return new Date().getHours();
}
async function loadWeather(){
  const url="https://api.open-meteo.com/v1/forecast?latitude=42.32&longitude=69.59&hourly=temperature_2m&current_weather=true&forecast_days=1";
  const res=await fetch(url);
  const data=await res.json();
  const temps=data.hourly.temperature_2m.slice(0,24);
  const current=data.current_weather.temperature;
  const code=data.current_weather.weathercode;
  let icon="🌤️",text="Ауа райы";
  if(code===0){icon="☀️";text="Ашық";}
  else if(code<=3){icon="☁️";text="Бұлтты";}
  else if(code<=67){icon="🌧️";text="Жаңбыр";}
  document.getElementById("now").innerText=
  icon+" Қазір: "+current+"°C • "+text;
  const box=document.getElementById("hours");
  box.innerHTML="";
  let now=getHour();
  temps.forEach((t,i)=>{
    box.innerHTML+=`
      <div class="hour ${i===now?'active':''}">
        <div>${i}:00</div>
        <div>🌡️</div>
        <div>${Math.round(t)}°</div>
      </div>
    `;
  });
}
//sagat obnova
function updateClock() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock) clock.innerText = `${h}:${m}:${s}`;

    if (date) {
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  date.innerText = `${day}.${month}.${year}`;
}
}

  setInterval(updateClock, 1000);
  updateClock();


let map;
let isLoaded = false;
function openRoute(){
document.getElementById("mapModal").style.display = "flex";
DG.then(function(){
if(!map){
    map = DG.map('map', {
    center: [42.315808,69.587509],
    zoom: 15
});

const points = [
    {lat: 42.29897,  lng: 69.609862, img: "images/tur4.1.jpg", text: "TEMIRZHOL VOKZALY"},
    {lat: 42.309022, lng: 69.600477, img: "images/tur4.2.png", text: "«QOSHQAR ATA» OZENI"},
    {lat: 42.309142, lng: 69.601094, img: "images/tur4..3.jpg", text: "«ORDABASY» MESHITI"},
    {lat: 42.308992, lng: 69.600054, img: "images/tur4.4.jpg", text:"««ZHER ANA» MONUMENTI"},
    {lat: 42.308992, lng: 69.600054, img: "images/tur4.4.jpg", text:"«TAUELSIZDIK» SAYABAGY №1"},
    {lat: 42.306936, lng: 69.599197, img: "images/tur4.5.jpg", text:"«TAUELSIZDIK» SAYABAGY №2"},
    {lat: 42.305642, lng: 69.596248, img: "images/tur4.6.jpg", text: "«ALTYN SHANYRAQ»"},
    {lat: 42.305579, lng: 69.595583, img: "images/tur4.7.jpg", text: "«SHYMQALA» ETNOAUYLY"},
    {lat: 42.311041, lng: 69.557178, img: "images/tur4.8.jpg", text: "«SHYMQALA» TARIKHI-MADENI KESHENI"},
    {lat: 42.313331, lng: 69.601392 , img: "images/tur4.11.jpg", text: "FILARMONIA"},
    {lat: 42.313271, lng: 69.605217, img: "images/tur4.12.jpg", text: "«PUSHKIN» KITAPHANASY"},
    {lat: 42.312631, lng: 69.607501, img: "images/tur4.13.jpg", text: "«SHAMSHI ALEMI» SAYABAGY"},
    {lat: 42.309826, lng: 69.603993, img: "images/tur4.14.jpg", text: "MUZYKALYQ SUBURQAQ"},
    {lat: 42.309826, lng: 69.603993, img: "images/tur4.14.jpg", text: "QYRGY BAZAR"},
    ];
    let markers = [];
    let markersList = [];
      points.forEach(p => {
        const icon = DG.divIcon({
          html: `
            <div class="marker-wrapper">
              <div class="circle-marker" style="cursor:pointer;">
                <img src="${p.img}">
              </div>
            </div>
          `,
          className: '',
          iconSize: [60, 60]
        });
        const marker = DG.marker([p.lat, p.lng], { icon }).addTo(map);
        // 🔥 CLICK → POPUP
        marker.on('click', function () {
          marker.bindPopup(`
            <div style="text-align:center; max-width:200px;">
              <img src="${p.img}" style="width:200px;height:140px;object-fit:cover;border-radius:10px;">
              <b>${p.text}</b>
            </div>
          `).openPopup();
        });
        markers.push([p.lat, p.lng]);
        markersList.push({ marker, img: p.img });
      });
      // 🔵 ROUTE LINE (1 рет қана)
      const polyline = DG.polyline(markers, {
        color: '#1e90ff',
        weight: 6
      }).addTo(map);
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
// 📍 TEXT LABEL ҚОСУ
for (let i = 0; i < markers.length - 1; i++) {
  const [lat1, lng1] = markers[i];
  const [lat2, lng2] = markers[i + 1];
  let dist = getDistance(lat1, lng1, lat2, lng2);
  // 📌 midpoint
  let midLat = (lat1 + lat2) / 2;
  let midLng = (lng1 + lng2) / 2;
  // 🔥 TEXT ICON (метка емес, текст)
  const textIcon = DG.divIcon({
    html: `
      <div style="
        background:#070f25;
        color:#22c55e;
        padding:4px 4px;
        border-radius:8px;
        font-size:10px;
        font-weight:600;
        box-shadow:0 0 10px rgba(0,0,0,0.5);
      ">
        ${dist.toFixed(2)} км
      </div>
    `,
    className: '',
    iconSize: [80, 20]
  });
  DG.marker([midLat, midLng], { icon: textIcon }).addTo(map);
}
      // 🚶 ICON
      const personIcon = DG.divIcon({
        html: `
          <div id="person" style="
            width:30px;height:30px;
            background:#2563eb;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
          ">🚶</div>
        `,
        className: '',
        iconSize: [30, 30]
      });
    let person = DG.marker(markers[0], { 
  icon: personIcon,
  zIndexOffset: 10000   // 🔥 ең үстіне шығарады
}).addTo(map);
function getAngle(lat1, lng1, lat2, lng2) {
    const toRad = x => x * Math.PI / 180;
    const toDeg = x => x * 180 / Math.PI;

    const dLng = toRad(lng2 - lng1);
    const y = Math.sin(dLng) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLng);
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}
    let i = 0;
    let step = 0;
    let speed = 0.004;
function animate() {
  let [lat1, lng1] = markers[i];
  let [lat2, lng2] = markers[i + 1];
  step += speed;
  if (step >= 1) {
    step = 0;
    i++;
    // 🔥 END → қайта бастау
    if (i >= markers.length - 1) {
      i = 0;   // қайта 1-нүкте
      step = 0;
    }
    requestAnimationFrame(animate);
    return;
}
  let lat = lat1 + (lat2 - lat1) * step;
  let lng = lng1 + (lng2 - lng1) * step;
  person.setLatLng([lat, lng]);
  let angle = getAngle(lat1, lng1, lat2, lng2);
  document.getElementById("person").style.transform =
    `rotate(${angle + 180}deg)`;
  requestAnimationFrame(animate);
}
    animate();
    isLoaded = true;
    } else {
      setTimeout(()=>map.invalidateSize(),100);
    }
  });
}
function closeMap(){
  document.getElementById("mapModal").style.display = "none";
}
