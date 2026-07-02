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
s1_title:"ЕСКЕ АЛУ ЖӘНЕ МӘДЕНИЕТ БАҒЫТЫ",
s1_text:"№6 Тур",
s2_title:"«ABAI» SAYABAGY №1",
s2_text:"«Абай» саябағы — қаланың мәдени әрі демалыс орталығы. Мұнда серуендеу жолдары, футбол алаңы, теннис корттары және заманауи демалыс аймақтары қарастырылған. Саябақ аумағында орналасқан «Даңқ» мемориалы Ұлы Отан соғысы батырларын еске алуға арналған маңызды тарихи ескерткіш болып табылады.",
s3_title:"«ABAI» SAYABAGY №2",
s3_text:"«Абай» саябағы — Шымкент қаласындағы ең танымал және тарихи демалыс орындарының бірі. Саябақ қала тұрғындары мен қонақтарының серуендеуіне, тынығуына және бос уақытын тиімді өткізуіне арналған маңызды қоғамдық кеңістік болып табылады.",
s4_title:"SHYMKENT CIRKI",
s4_text:"Шымкент циркі 2011 жылы ашылған мәдени-ойын-сауық орны. Мұнда акробаттар, клоундар және түрлі әртістер өнер көрсетеді",
s5_title:"DOSTYQ UII (QAZAQSTAN HALYQ ASSAMBLEIASY",
s5_text:"Достық үйі (Қазақстан халқы Ассамблеясы) — Қазақстан халқы Ассамблеясы жүйесіне кіретін, этносаралық келісім мен қоғамдық бірлікті нығайтуға бағытталған мәдени-қоғамдық орталық.",
s6_title:"«DANQ» MEMORIALY",
s6_text:"«Даңқ» мемориалы — Ұлы Отан соғысы батырларының ерлігіне арналған тарихи-мемориалдық кешен. Мемориал майдангерлерге құрмет көрсетіп, олардың ерлігі мен батылдығын мәңгі есте сақтауға арналған маңызды орын болып табылады.",
s7_title:"«SAIASI QUGYN-SURGIN» MURAJAIY",
s7_text:"Саяси қуғын-сүргін мұражайы 2001 жылы ашылған. Бұл музей Қазақстандағы саяси қуғын-сүргін құрбандарын еске алуға арналған. Экспонаттар мен тарихи деректер арқылы сол кезеңнің ауыр тарихы көрсетіледі.",
s8_title:"«KORKEM SURET» GALEREIASY",
s8_text:"«Көркем сурет» галереясы «Абай» саябағы аумағында орналасқан. Мұнда жергілікті суретшілердің туындылары көрмеге қойылады. Сондай-ақ түрлі көрмелер мен шеберлік сабақтары өткізіліп, өнер мен шығармашылықты дамытуға мүмкіндік береді.",
s9_title:"«QAZHYMUQAN MUNAITPASOV» ATYNDAGY ORTALYQ STADIONY",
s9_text:"Қажымұқан атындағы Орталық стадион — Шымкент қаласындағы ірі спорт нысандарының бірі. Стадионда футбол матчтары, спорттық жарыстар және түрлі бұқаралық іс-шаралар өткізіледі.",
s10_title:"«ANALAR» ALLEIASY",
s10_text:"«Аналар» аллеясы — 2024 жылы ашылған заманауи демалыс орны. Мұнда анаға арналған мүсін, көгалдандырылған серуен аймақтары және тыныш демалыс кеңістігі бар.",
s11_title:"«QYZGALDAQ» FONTANY",
s11_text:"«Қызғалдақ» фонтаны — қаланың символдық және көрікті нысандарының бірі. Ол қызыл қызғалдақ бейнесінде жасалған және биіктігі шамамен 10 метрге жетеді.",
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
s1_title:"МАРШРУТ ПАМЯТИ И КУЛЬТУРЫ",
s1_text:"№6 Тур .",
s2_title:"ПАРК «АБАЙ» №1",
s2_text:"Парк «Абай» — культурно-досуговый центр города. Здесь предусмотрены прогулочные аллеи, футбольное поле, теннисные корты и современные зоны отдыха. На территории парка расположен мемориал «Даңқ», являющийся важным историческим памятником, посвящённым героям Великой Отечественной войны. ",
s3_title:"ПАРК «АБАЙ» №2 ",
s3_text:"Парк «Абай» — одно из самых популярных и исторически значимых мест отдыха в городе Шымкент. Парк является важным общественным пространством, предназначенным для прогулок, отдыха и проведения досуга жителей и гостей города. ",
s4_title:"ШЫМКЕНТСКИЙ ЦИРК",
s4_text:"Шымкентский цирк — культурно-развлекательное учреждение, открытое в 2011 году. Здесь выступают акробаты, клоуны и артисты различных жанров.",
s5_title:"ДОМ ДРУЖБЫ (АССАМБЛЕЯ НАРОДА КАЗАХСТАНА)",
s5_text:"Дом дружбы — культурно-общественный центр, входящий в систему Ассамблеи народа Казахстана и направленный на укрепление межэтнического согласия и общественного единства.",
s6_title:"МЕМОРИАЛ «ДАҢҚ»",
s6_text:"Мемориал «Даңқ» — историко-мемориальный комплекс, посвящённый подвигу героев Великой Отечественной войны. Мемориал служит местом памяти и уважения к фронтовикам, увековечивая их мужество и героизм.",
s7_title:"МУЗЕЙ «ЖЕРТВ ПОЛИТИЧЕСКИХ РЕПРЕССИЙ» ",
s7_text:"Музей жертв политических репрессий был открыт в 2001 году. Он посвящён памяти жертв политических репрессий в Казахстане. Экспозиции и исторические материалы рассказывают о трагических страницах того периода. ",
s8_title:"«ХУДОЖЕСТВЕННАЯ» ГАЛЕРЕЯ ",
s8_text:"Художественная галерея расположена на территории парка «Абай». Здесь экспонируются работы местных художников, а также проводятся различные выставки и мастер-классы, способствующие развитию искусства и творчества",
s9_title:"ЦЕНТРАЛЬНЫЙ СТАДИОН ИМЕНИ КАЖЫМУКАНА МУНАЙТПАСОВА ",
s9_text:" Центральный стадион имени Кажымукана Мунайтпасова — один из крупнейших спортивных объектов города Шымкент. Здесь проводятся футбольные матчи, спортивные соревнования и различные массовые мероприятия. ",
s10_title:"АЛЛЕЯ «МАТЕРЕЙ» ",
s10_text:"Аллея матерей — современная зона отдыха, открытая в 2024 году. Здесь расположены скульптура, посвящённая матери, благоустроенные прогулочные зоны и пространство для спокойного отдыха.",
s11_title:"ФОНТАН «ТЮЛЬПАН»",
s11_text:"Фонтан «Қызғалдақ» — один из символичных и живописных объектов города. Он выполнен в форме красного тюльпана и достигает высоты около 10 метров.",
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
s1_title:"MEMORY AND CULTURE ROUTE",
s1_text:"№5 Tour",
s2_title:"«ABAI» PARK №1",
s2_text:"Abai Park is one of Shymkent’s major cultural and recreational centers. The park features walking alleys, a football field, tennis courts, and modern leisure areas. Located within the park is the Danq Memorial, an important historical monument dedicated to the heroes of the Great Patriotic War.",
s3_title:"«ABAI» PARK №2",
s3_text:"Abai Park is one of the most popular and historically significant recreational areas in Shymkent. It serves as an important public space where residents and visitors can enjoy walking, relaxation, and various leisure activities.",
s4_title:"SHYMKENT CIRCUS",
s4_text:"The Shymkent Circus is a cultural and entertainment venue that opened in 2011. Its performances feature acrobats, clowns, and artists representing a variety of circus genres, providing exciting entertainment for audiences of all ages.",
s5_title:"HOUSE OF FRIENDSHIP (ASSEMBLY OF THE PEOPLE OF KAZAKHSTAN)",
s5_text:"The House of Friendship is a cultural and public center operating within the framework of the Assembly of the People of Kazakhstan. Its mission is to promote interethnic harmony, social cohesion, and mutual understanding among the country's diverse communities.",
s6_title:"«DANQ» MEMORIAL",
s6_text:"The Danq Memorial is a historical and memorial complex dedicated to the heroism of the soldiers who fought in the Great Patriotic War. The memorial serves as a place of remembrance and respect, honoring their courage, sacrifice, and devotion.",
s7_title:"MUSEUM OF «VICTIMS OF POLITICAL REPRESSIONS»",
s7_text:"The Museum of Victims of Political Repressions was opened in 2001. It is dedicated to preserving the memory of those who suffered during the years of political repression in Kazakhstan. Its exhibitions and historical materials tell the stories of this tragic period in the nation's history. ",
s8_title:"«ART» GALLERY",
s8_text:"The Art Gallery is located within Abai Park. It showcases works by local artists and regularly hosts exhibitions, workshops, and cultural events that promote the development of art and creativity in the region.",
s9_title:"KAZHYMUKAN MUNAITPASOV «CENTRAL» STADIUM",
s9_text:"he Kazhymukan Munaitpasov Central Stadium is one of the largest sports venues in Shymkent. It hosts football matches, sporting competitions, and large public events, serving as an important center for sports and community activities.",
s10_title:"«MOTHERS'» ALLEY",
s10_text:"Mothers' Alley is a modern recreational area that opened in 2024. The site features a monument dedicated to motherhood, landscaped walking paths, and peaceful spaces designed for relaxation and family recreation.",
s11_title:"«TULIP» FOUNTAIN",
s11_text:"The Tulip Fountain (Qyzgaldaq Fountain) is one of the city's most recognizable and picturesque landmarks. Designed in the shape of a red tulip, the fountain rises to a height of approximately 10 meters and serves as a symbol of Shymkent's identity and beauty.",
}
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/ABAI1.mp3",ru:"audio/PARKABAI.mp3",en:"audio/ABAIPARK1.mp3"},
  2:{kz:"audio/ABAI2.mp3",ru:"audio/PARKABAI2.mp3",en:"audio/ABAIPARK2.mp3"},
  3:{kz:"audio/SHYMKENTCIRKI.mp3",ru:"audio/CIRK.mp3",en:"audio/CIRKEN.mp3"},
  4:{kz:"audio/DOSTYQUII.mp3",ru:"audio/ASSAMBLEA.mp3",en:"audio/ASSAMBLEAEN.mp3"},
  5:{kz:"audio/DANQMEMORIALY.mp3",ru:"audio/DANK.mp3",en:"audio/DANKEN.mp3"},
  6:{kz:"audio/SAIASI.mp3",ru:"audio/REPRESSIA.mp3",en:"audio/REPRESSIAEN.mp3"},
  7:{kz:"audio/KORKEMSURET.mp3",ru:"audio/GALEREA.mp3",en:"audio/GALEREAEN.mp3"},
  8:{kz:"audio/ҚАЖЫМҰҚА.mp3",ru:"audio/KAJIMUKANRU.mp3",en:"audio/KAJIMUKAN.mp3"},
  9:{kz:"audio/ANALAR.mp3",ru:"audio/ALEAMATEREI.mp3",en:"audio/ANALARAAA.mp3"},
  10:{kz:"audio/FONTANY.mp3",ru:"audio/FONTANTULPAN.mp3",en:"audio/FONTANTULPANEN.mp3"},
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
    center: [42.329242, 69.591579],
    zoom: 15
});

const points = [
    {lat: 42.332621, lng: 69.591369, img: "images/tur6.1.jpg", text: "«ABAI» SAYABAGY №1"},
    {lat: 42.332621, lng: 69.591369, img: "images/tur6.1.jpg", text: "«ABAI» SAYABAGY №2"},
    {lat: 42.332451, lng: 69.591923, img: "images/tur6.4.jpg", text: "SHYMKENT CIRKI"},
    {lat: 42.328088, lng: 69.584673, img: "images/DOSTYK.jpg", text:"DOSTYQ UII (QAZAQSTAN HALYQ ASSAMBLEIASY"},
    {lat: 42.329242, lng: 69.591579, img: "images/DANQ.png", text: "«DANQ» MEMORIALY"},
    {lat: 42.329077, lng: 69.592316, img: "images/SAIASI.jpg", text: "«SAIASI QUGYN-SURGIN» MURAJAIY"},
    {lat: 42.323988, lng: 69.582031, img: "images/tur6.2.png", text:"KORKEM SURET» GALEREIASY"},
    {lat: 42.320637, lng: 69.588432, img: "images/STADION.png", text: "«QAZHYMUQAN MUNAITPASOV» ATYNDAGY ORTALYQ STADIONY"},
    {lat: 42.30955,  lng: 69.600235, img: "images/tur6.5.png", text: " «ANALAR» ALLEIASY"},
    {lat: 42.31045,  lng: 69.629784, img: "images/tur6.6.jpg", text: "«QYZGALDAQ» FONTANY"},
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
