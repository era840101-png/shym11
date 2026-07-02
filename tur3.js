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
    s1_title:"ТАНЫМДЫҚ ТУР",
    s1_text:"№3 Тур",
    s2_title:"«ARBAT» ZHAYAU ZHURGINSHILER KOSHESI №1",
    s2_text:"Арбат жаяу жүргіншілер көшесі — қаланың орталығындағы заманауи серуен аймағы. Мұнда субұрқақтар, гүлзарлар, көше өнері, мәдени іс-шаралар және дәстүрлі әрі заманауи тағамдарды ұсынатын гастрономиялық аллея орналасқан.",
    s3_title:"«ARBAT» ZHAYAU ZHURGINSHILER KOSHESI №2",
    s3_text:"Арбат жаяу жүргіншілер көшесі — Шымкенттің мәдени және туристік өмірінің ажырамас бөлігі. Мұнда көше өнерінің элементтері, шығармашылық көрмелер мен түрлі мәдени бастамалар ұсынылады.",
    s4_title:"«CITY» PARK",
    s4_text:"«CITY» саябақ аумағы заманауи демалыс және ойын-сауық кеңістігіне айналған. Саябақта субұрқақтар, су айдындары, жағалау аймағы, спорт алаңдары, жүгіру жолақтары және отбасылық серуенге арналған орындар орналасқан.",
    s5_title:"«ORYS DRAMA» TEATR",
    s5_text:"Орыс драма театры — 1929 жылы ашылған мәдениет ошағы. Театр репертуарында балалар мен ересектерге арналған әртүрлі жанрдағы қойылымдар бар.",
    s6_title:"«SHYMKENT PLAZA» SAUDA OIYN-SAUYQ ORTALYGY",
    s6_text:"«Shymkent Plaza» — қаладағы ірі сауда-ойын-сауық орталықтарының бірі. Заманауи кешенде кинотеатр, фастфуд орындары, танымал бренд дүкендері және балаларға арналған ойын алаңдары орналасқан.",
    s7_title:"«SPUTNIK» ALLEIASY",
    s7_text:"«Спутник» аллеясы — жаңадан абаттандырылған заманауи қоғамдық демалыс орны. Аллеяда тұрғындар мен қонақтарға арналған жайлы демалыс аймақтары, әсем жарықтандыру жүйелері және заманауи субұрқақ орналасқан.",
    s8_title:"ORTALYQ AMBEBAP DUKENI (TSUM)",
    s8_text:"ОӘД — киім-кешек, аяқ киім және аксессуарлардың кең таңдауы ұсынылатын сауда орталығы.",
    s9_title:"«MEGA PLANET» SAUDA OIYN-SAUYQ ORTALYGY",
    s9_text:"«Mega Planet» — 2007 жылдан бері жұмыс істеп келе жатқан ірі сауда-ойын-сауық орталығы. Орталықта кинотеатр, ойын-сауық аймақтары, түрлі дүкендер және фуд-корт орналасқан.",
    s10_title:"«ORTALYQ» SAYABAQ №1",
    s10_text:"«Орталық» саябақ — Шымкент қаласындағы ең көне демалыс орындарының бірі. Саябақтың негізі 1925 жылы қаланған және ол ұзақ жылдар бойы қала тұрғындарының сүйікті демалыс орны ретінде қалыптасқан.",
    s11_title:"«ORTALYQ» SAYABAQ №2",
    s11_text:"Орталық саябақ — Шымкент қаласының мәдени және қоғамдық өміріндегі маңызды орындардың бірі. Мұнда тұрғындар мен қонақтар үшін қолайлы демалыс жағдайлары жасалған.", 
    s12_title:"«AZIL-SYQAQ JANE SATIRA» TEATRY",
    s12_text:"Шымкент қаласындағы Әзіл-сықақ және сатира театры — көркемсөз өнері мен сахналық комедия жанрын дамытуға бағытталған мәдени мекеме болып табылады.", 
    s13_title:"«ZHAPON» SAYABAGY",
    s13_text:"«Жапон» саябағы — отбасылық демалысқа арналған ерекше көрікті орындардың бірі. Саябақ аумағы жапон бағы стилінде табиғи үйлесімділікке басымдық бере отырып абаттандырылады. Мұнда су элементтері, тынығу аймақтары мен медитацияға арналған арнайы кеңістіктер қарастырылған.",   
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
    s1_title:"ПОЗНАВАТЕЛЬНЫЙ ТУР",
s1_text:"№3 тур",
s2_title:"ПЕШЕХОДНАЯ УЛИЦА «АРБАТ» №1",
s2_text:"Пешеходная улица «Арбат» — современная прогулочная зона в центре города. Здесь расположены фонтаны, цветочные аллеи, объекты уличного искусства, проходят культурные мероприятия, а также действует гастрономическая аллея с традиционной и современной кухней. ",
s3_title:"ПЕШЕХОДНАЯ УЛИЦА «АРБАТ» №2",
s3_text:"Пешеходная улица «Арбат» является неотъемлемой частью культурной и туристической жизни Шымкента. Здесь представлены элементы уличного искусства, творческие выставки и различные культурные инициативы. ",
s4_title:"«CITY» PARK",
s4_text:"Территория «CITY» парк представляет собой современное пространство для отдыха и развлечений. Здесь расположены фонтаны, водные зоны, набережная, спортивные площадки, беговые дорожки и места для семейных прогулок.  ",
s5_title:"«РУССКИЙ ДРАМАТИЧЕСКИЙ» ТЕАТР",
s5_text:"Русский драматический театр — культурный центр, открытый в 1929 году. В репертуаре театра представлены постановки различных жанров для детей и взрослых.  ",
s6_title:"ТОРГОВО-РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР «SHYMKENT PLAZA» ",
s6_text:"«Shymkent Plaza» — один из крупнейших торгово-развлекательных центров города. В современном комплексе расположены кинотеатр, заведения быстрого питания, магазины популярных брендов и детские игровые площадки.  ",
s7_title:"АЛЛЕЯ «СПУТНИК»",
s7_text:"Аллея «Спутник» — современное общественное пространство для отдыха, благоустроенное в новом формате. На аллее расположены комфортные зоны отдыха для жителей и гостей города, декоративное освещение и современный фонтан.",
s8_title:"ЦЕНТРАЛЬНЫЙ УНИВЕРМАГ (ЦУМ)",
s8_text:"ЦЕНТРАЛЬНЫЙ УНИВЕРМАГ (ЦУМ) — торговый центр, предлагающий широкий выбор одежды, обуви и аксессуаров.",
s9_title:"ТОРГОВО-РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР «MEGA PLANET» ",
s9_text:"«Mega Planet» — крупный торгово-развлекательный центр, работающий с 2007 года. В центре расположены кинотеатр, развлекательные зоны, различные магазины и фуд-корт.",
s10_title:"«ЦЕНТРАЛЬНЫЙ» ПАРК №1",
s10_text:"Центральный парк — историческое место отдыха, основанное в 1925 году. Парк создаёт комфортные условия для прогулок, отдыха, занятий спортом и семейного досуга.  ",
s11_title:"«ЦЕНТРАЛЬНЫЙ» ПАРК №2",
s11_text:"Центральный парк является одним из важных объектов культурной и общественной жизни Шымкента. Здесь созданы комфортные условия для отдыха жителей и гостей города. ",
s12_title:"ТЕАТР «ЮМОРА И САТИРЫ»",
s12_text:"Театр юмора и сатиры города Шымкент является культурным учреждением, направленным на развитие искусства художественного слова и сценической комедии. ",
s13_title:"«ЯПОНСКИЙ САД»",
s13_text:"Парк «Японский сад» — одно из живописных мест, предназначенных для семейного отдыха. Территория парка благоустроена в стиле японского сада с акцентом на природную гармонию. Здесь расположены водные элементы, зоны отдыха и специальные пространства для медитации.",
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
    s1_title:"EDUCATIONAL TOUR",
s1_text:"Tour №3",
s2_title:"ARBAT PEDESTRIAN STREET №1",
s2_text:"Arbat Pedestrian Street is a modern promenade located in the heart of the city. The area features fountains, flower-lined walkways, street art installations, cultural events, and a gastronomic zone offering both traditional and contemporary cuisine.",
s3_title:"ARBAT PEDESTRIAN STREET №2",
s3_text:"Arbat Pedestrian Street is an integral part of Shymkent’s cultural and tourist life. It showcases street art, creative exhibitions, and various cultural initiatives, making it a vibrant public space for residents and visitors alike.",
s4_title:"«CITY» PARK",
s4_text:"The «CITY» PARK is a modern recreational and entertainment area. The park features fountains, water attractions, a waterfront promenade, sports facilities, jogging paths, and designated areas for family walks and leisure activities.",
s5_title:"«RUSSIAN DRAMA» THEATRE ",
s5_text:"The Russian Drama Theatre is a cultural institution established in 1929. Its repertoire includes performances of various genres for both children and adults, contributing significantly to the city's cultural life.",
s6_title:"«SHYMKENT PLAZA» SHOPPING AND ENTERTAINMENT CENTER ",
s6_text:"Shymkent Plaza is one of the largest shopping and entertainment centers in the city. The modern complex features a cinema, fast-food restaurants, stores of popular international and local brands, and children's play areas.",
s7_title:"«SPUTNIK» ALLEY",
s7_text:"Sputnik Alley is a modern public recreation space developed in a contemporary urban style. The alley offers comfortable leisure areas for residents and visitors, decorative lighting, and a modern fountain, creating a pleasant atmosphere for relaxation. ",
s8_title:"CENTRAL DEPARTMENT STORE (TSUM)",
s8_text:"The Central Department Store (TSUM) is a shopping center offering a wide selection of clothing, footwear, accessories, and various consumer goods, making it a popular shopping destination in the city.",
s9_title:"«MEGA PLANET» SHOPPING AND ENTERTAINMENT CENTER",
s9_text:"Mega Planet is a large shopping and entertainment complex that has been operating since 2007. The center includes a cinema, entertainment zones, a variety of retail stores, and a food court, providing a comprehensive leisure experience for visitors.",
s10_title:"«CENTRAL» PARK №1 ",
s10_text:"Central Park is a historic recreational area established in 1925. The park provides comfortable conditions for walking, relaxation, sports activities, and family leisure, making it one of the city's favorite destinations. ",
s11_title:"«CENTRAL» PARK №2 ",
s11_text:"Central Park is one of the key cultural and public landmarks of Shymkent. The park offers comfortable facilities for recreation and relaxation for both residents and visitors, serving as an important community gathering place. ",
s12_title:"«HUMOR AND SATIRE» THEATRE ",
s12_text:"The Shymkent Humor and Satire Theatre is a cultural institution dedicated to the development of literary performance art and stage comedy. Its productions combine entertainment with social commentary and artistic expression.",
s13_title:"«JAPANESE» GARDEN",
s13_text:"The Japanese Garden is one of the city's most picturesque destinations for family recreation. Designed in the traditional Japanese garden style, it emphasizes harmony with nature and features water elements, relaxation areas, and specially designated spaces for meditation and quiet reflection.",
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/ARBAT1.mp3",ru:"audio/ARBATR1.mp3",en:"audio/ARBAT12.mp3"},
  2:{kz:"audio/ARBAT2.mp3",ru:"audio/ARBATEN.mp3",en:"audio/ARBAT22"},
  3:{kz:"audio/QIYALALEMI.mp3",ru:"audio/",en:"audio/"},
  4:{kz:"audio/ORYSDRAMA.mp3",ru:"audio/RUSSKIITEATR.mp3",en:"audio/RUSSTEATR.mp3"},
  5:{kz:"audio/SHYMKENTPLAZA.mp3",ru:"audio/SHYMPLAZA.mp3",en:"audio/SHYMPLAZAEN.mp3"},
  6:{kz:"audio/SPUTNIK.mp3",ru:"audio/ALEASPUTNIK.mp3",en:"audio/SPUTNIKALEA.mp3"},
  7:{kz:"audio/ORTALYQ.mp3",ru:"audio/CUM.mp3",en:"audio/CUMEN.mp3"},
  8:{kz:"audio/MEGA.mp3",ru:"audio/PLANET.mp3",en:"audio/MEGAEN.mp3"},
  9:{kz:"audio/ORTALYQ1.mp3",ru:"audio/CENTRALPARK.mp3",en:"audio/CENTRPARK1.mp3"},
  10:{kz:"audio/ORTALYQ2.mp3",ru:"audio/CENTRALPAR2.mp3",en:"audio/CENTRPARK2.mp3"},
  11:{kz:"audio/AZIL.mp3",ru:"audio/SATIRATEATR.mp3",en:"audio/SATIRAEN.mp3"},
  12:{kz:"audio/ZHAPON.mp3",ru:"audio/",en:"audio/JAPANPARK.mp3"},
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
    {lat: 42.319236, lng: 69.584081, img: "images/tur3.0.jpg", text: "«ARBAT» ZHAYAU ZHURGINSHILER KOSHESI №1"},
    {lat: 42.315808, lng: 69.587509, img: "images/tur3.1.jpeg", text: "«ARBAT» ZHAYAU ZHURGINSHILER KOSHESI №2"},
    {lat: 42.318185, lng: 69.582647, img: "images/CITY.jpg", text: "«CITY» PARK"},
    {lat: 42.315659, lng: 69.586688, img: "images/tur3.2.jpg", text: "«ORYS DRAMA» TEATR"},
    {lat: 42.318169, lng: 69.595899, img: "images/tur3.3.jpg", text: "«SHYMKENT PLAZA» SAUDA OIYN-SAUYQ ORTALYGY"},
    {lat: 42.319062, lng:  69.596634, img: "images/tur3.4.webp", text: "«SPUTNIK» ALLEIASY"},
    {lat: 42.31744,  lng: 69.600664, img: "images/tur3.5.jpg", text: "ORTALYQ AMBEBAP DUKENI (TSUM)"},
    {lat: 42.315226, lng: 69.598332, img: "images/tur3.6.png", text: "«MEGA PLANET» SAUDA OIYN-SAUYQ ORTALYGY"},
    {lat: 42.316861, lng: 69.60453, img: "images/tur3.7.jpg", text: "«ORTALYQ» SAYABAQ №1"},
    {lat: 42.316861, lng: 69.60453, img: "images/tur3.7.jpg", text: "«ORTALYQ» SAYABAQ №2"},
    {lat: 42.316861, lng: 69.60453, img: "images/AZIL.jpg", text: "«AZIL-SYQAQ JANE SATIRA» TEATRY"},
    {lat: 42.316861, lng: 69.60453, img: "images/JAPON.jpg", text: "«ZHAPON» SAYABAGY"},
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
