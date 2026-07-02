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
    s1_title:"ҚАЛАНЫҢ ӘКІМШІЛІК ІСКЕРЛІК ОРТАЛЫҒЫ",
    s1_text:"№2 Тур",
    s2_title:"«NURSAT» ALLEIASY",
    s2_text:"«Нұрсат» аллеясы — Қаратау ауданында орналасқан заманауи демалыс аймағы. Бұл аллея тұрғындардың серуендеуіне арналған жасыл, таза әрі жайлы қоғамдық кеңістік болып табылады.",
    s3_title:"«ASTANA» ALANY",
    s3_text:"«Астана» алаңы — қаладағы ірі мерекелік іс-шаралар мен концерттер өтетін орталық алаң.",
    s4_title:"«AIO» SUBURQAGY",
    s4_text:"Қаланың әкімшілік-іскерлік орталығында орналасқан субұрқақ — Шымкенттің көрікті демалыс орындарының бірі. Субұрқақ әсем сәулеттік келбетімен, су ағындарының үйлесімді қозғалысымен және кешкі жарық композицияларымен ерекшеленеді.",
    s5_title:"«ZHUMAT SHANIN» ATYNDAGY QAZAQ DRAMA TEATRY",
    s5_text:"«Жұмат Шанин» атындағы қазақ драма театры — заманауи талаптарға сай жабдықталған мәдени өнер орталығы. Театрда түрлі қойылымдар мен мәдени іс-шаралар өткізіледі.",
    s6_title:"«AL-FARABI» KITAPHANASY",
    s6_text:"«Әл-Фараби» кітапханасы — бай кітап қорымен және заманауи технологияларымен ерекшеленетін ірі ғылыми-мәдени орталық.",
    s7_title:"«TURKISTAN» SARAIY",
    s7_text:"«Түркістан» сарайы — халықаралық және республикалық концерттер мен мәдени шаралар өтетін заманауи кешен.",
    s8_title:"«KORME» ORTALYGY",
    s8_text:"«Көрме» орталығы — түрлі бизнес-форумдар, көрмелер және жәрмеңкелер ұйымдастырылатын заманауи кешен.",
    s9_title:"OQUSHYLAR SARAIY",
    s9_text:"Оқушылар сарайы — балалардың шығармашылығы мен жан-жақты дамуына арналған заманауи білім және тәрбие орталығы.",
    s10_title:"«SEIITZHAN QARI» MESHITI",
    s10_text:"«Сейітжан қари» мешіті — Шымкент қаласындағы ең ірі мешіт. Бұл мешіт рухани әрі діни орталық ретінде қызмет етеді. Мұнда құлшылық етуге және діни білім алуға қолайлы жағдай жасалған.",
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
    s1_title:"АДМИНИСТРАТИВНО-ДЕЛОВОЙ ЦЕНТР ГОРОДА",
    s1_text:"№2 Тур",
    s2_title:"АЛЛЕЯ «НУРСАТ»",
    s2_text:"Аллея «Нурсат» — современная зона отдыха, расположенная в Каратауском районе. Аллея представляет собой зелёное, чистое и комфортное общественное пространство, предназначенное для прогулок жителей города.",
    s3_title:"ПЛОЩАДЬ «АСТАНА»",
    s3_text:"Площадь «Астана» — центральная площадь города, где проводятся крупные праздничные мероприятия и концерты.  ",
    s4_title:"ФОНТАН (АДЦ ГОРОДА ШЫМКЕНТ) ",
    s4_text:"Фонтан, расположенный в административно-деловом центре города, — одно из живописных мест отдыха Шымкента. Он отличается изящным архитектурным обликом, гармоничным движением водных потоков и эффектными вечерними световыми композициями. ",
    s5_title:"КАЗАХСКИЙ ДРАМАТИЧЕСКИЙ ТЕАТР ИМЕНИ ЖУМАТА ШАНИНА ",
    s5_text:"Казахский драматический театр имени Жумата Шанина — культурно-художественный центр, оснащённый в соответствии с современными требованиями. В театре проходят различные постановки и культурные мероприятия.  ",
    s6_title:"БИБЛИОТЕКА «АЛЬ-ФАРАБИ»",
    s6_text:"Библиотека «Аль-Фараби» — крупный научно-культурный центр, отличающийся богатым книжным фондом и современными технологиями.",
    s7_title:"ДВОРЕЦ «ТУРКЕСТАН»",
    s7_text:"Дворец «Туркестан» — современный комплекс, где проводятся международные и республиканские концерты, а также культурные мероприятия.",
    s8_title:"«ВЫСТАВОЧНЫЙ» ЦЕНТР",
    s8_text:"Выставочный центр — современный комплекс, предназначенный для проведения бизнес-форумов, выставок и ярмарок",
    s9_title:"ДВОРЕЦ ШКОЛЬНИКОВ",
    s9_text:"Дворец школьников — современный образовательный и воспитательный центр, предназначенный для творческого и всестороннего развития детей.",
    s10_title:"МЕЧЕТЬ «СЕЙИТЖАН КАРИ ЕСЖАНУЛЫ»",
    s10_text:"Мечеть «Сейитжан кари» — одна из крупнейших мечетей города Шымкент. Мечеть является духовным и религиозным центром, где созданы комфортные условия для богослужения и получения религиозных знаний.",
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
    s1_title:"THE CITY'S ADMINISTRATIVE AND BUSINESS CENTER",
    s1_text:"№2 Tour",
    s2_title:"«NURSAT» ALLEY",
    s2_text:"Nursat Alley is a modern recreational area located in the Karatau District of Shymkent. It is a green, clean, and comfortable public space designed for walking, relaxation, and leisure activities for city residents.",
    s3_title:"«ASTANA» SQUARE",
    s3_text:"Astana Square is the city's central square, serving as a venue for major celebrations, public events, concerts, and cultural programs throughout the year. ",
    s4_title:"FOUNTAIN (SHYMKENT ADMINISTRATIVE AND BUSINESS CENTER)",
    s4_text:"The fountain located in Shymkent's Administrative and Business Center is one of the city's most picturesque recreational attractions. It is distinguished by its elegant architectural design, harmonious water displays, and impressive evening light shows. ",
    s5_title:"ZHUMAT SHANIN «KAZAKH DRAMA» THEATRE",
    s5_text:"The Zhumat Shanin Kazakh Drama Theatre is a cultural and artistic center equipped according to modern standards. The theatre hosts a variety of performances, theatrical productions, and cultural events.",
    s6_title:"«AL-FARABI» LIBRARY",
    s6_text:"The Al-Farabi Library is a major scientific and cultural center known for its extensive book collection and modern technologies. It serves as an important hub for education, research, and intellectual development",
    s7_title:"«TURKISTAN» PALACE",
    s7_text:"Turkistan Palace is a modern cultural complex that hosts international and national concerts, festivals, official ceremonies, and various cultural events.",
    s8_title:"«EXHIBITION» CENTER",
    s8_text:"The Exhibition Center is a modern venue designed for business forums, exhibitions, trade fairs, and professional conferences. It plays an important role in the city's business and economic activities.",
    s9_title:"PALACE OF SCHOOLCHILDREN",
    s9_text:"The Palace of Schoolchildren is a modern educational and developmental center dedicated to the creative, intellectual, and personal growth of children. It offers a wide range of educational and extracurricular activities. ",
    s10_title:"«SEYITZHAN QARI ESZHANULY» MOSQUE",
    s10_text:"The Seyitzhan Qari Eszhanuly Mosque is one of the largest mosques in Shymkent. It serves as a spiritual and religious center, providing comfortable facilities for worship, religious education, and community activities.",
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/NURSAT.mp3",ru:"audio/ALEANYRSAT.mp3",en:"audio/NYRSATALEA.mp3"},
  2:{kz:"audio/ASTANA.mp3",ru:"audio/ASTANAALANI.mp3",en:"audio/ASTANAEN.mp3"},
  3:{kz:"audio/SUBURQAGY.mp3",ru:"audio/FONTAN.mp3",en:"audio/FONTANEN.mp3"},
  4:{kz:"audio/ZHUMAT.mp3",ru:"audio/TEATRSHANIN.mp3",en:"audio/SHANINTEATR.mp3"},
  5:{kz:"audio/ALFARABI.mp3",ru:"audio/KITAPHANARU.mp3",en:"audio/ALBIBLIOTEKA.mp3"},
  6:{kz:"audio/TURKISTAN.mp3",ru:"audio/DVORACTYRKESTAN.mp3",en:"audio/TYRKISTANSARAY.mp3"},
  7:{kz:"audio/KORME.mp3",ru:"audio/KORORTALIGI.mp3",en:"audio/KORMEN.mp3"},
  8:{kz:"audio/OQUSHYLARSARAIY.mp3",ru:"audio/SHKOLNIKOV.mp3",en:"audio/DVOREN.mp3"},
  9:{kz:"audio/SEIITZHAN.mp3",ru:"audio/MECHET.mp3",en:"audio/MECHETSEYTJAN.mp3"},
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
    center: [42.363028,69.621006],
    zoom: 15
});

const points = [
    {lat: 42.363055, lng: 69.621052, img: "images/tur2.1.jpg", text: "«NURSAT» ALLEIASY"},
    {lat: 42.359412, lng: 69.643501, img: "images/tur2.2.jpg", text: "«ASTANA» ALANY"},
    {lat: 42.357891, lng: 69.642674, img: "images/tur2.3.jpg", text: "«AIO» SUBURQAGY"},
    {lat: 42.358848, lng: 69.642351, img: "images/tur2.4.jpg", text: "«ZHUMAT SHANIN» ATYNDAGY QAZAQ DRAMA TEATRY"},
    {lat: 42.358087, lng: 69.640926, img: "images/tur2.5.jpg", text: "«AL-FARABI» KITAPHANASY"},
    {lat: 42.358388, lng: 69.643805, img: "images/tur2.6.jpg", text: "«TURKISTAN» SARAIY"},
    {lat: 42.356987, lng: 69.644199, img: "images/korme.jpg", text: " «KORME» ORTALYGY"},
    {lat: 42.353128, lng: 69.644742, img: "images/tur2.8.jpg", text: "OQUSHYLAR SARAIY"},
    {lat: 42.355543, lng: 69.649360, img: "images/tur2.9.jpg", text: "«SEIITZHAN QARI» MESHITI"},
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
