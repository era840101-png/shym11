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
    s1_title:"ҚАЗІРГІ ШЫМКЕНТ",
    s1_text:"№1 Тур",
    s2_title:"«SHYM CITY» SAYABAGY №1",
    s2_text:"«Shym City» саябағы — Шымкент қаласындағы 45 гектардан асатын заманауи демалыс саябағы. Бұл жер серуендеуге, спортпен айналысуға және отбасылық демалысқа қолайлы көрікті орындардың бірі.",
    s3_title:"«SHYM CITY» SAYABAGY №2",
    s3_text:"«Shym City» саябағы бүгінде тұрғындар мен туристердің сүйікті демалыс орындарының біріне айналған. Саябақ аумағында түрлі мәдени және қоғамдық іс-шаралар өткізіліп, отбасылық демалысқа қолайлы орта қалыптасқан.",
    s4_title:"«QYZGALDAQ» SARAIY",
    s4_text:"«Qyzgaldaq» сарайы — Шымкент қаласындағы заманауи көпфункцияналды концерттік кешен. Мұнда халықаралық кездесулер, фестивальдер және түрлі мәдени іс-шаралар өткізіледі.",
    s5_title:"«BAIDIBEK BI» ESKERTKISHI",
    s5_text:"«Бәйдібек би» ескерткіші — қаланың ең биік тарихи нысандарының бірі. Ескерткіш Шымкенттің солтүстік бөлігіндегі биік төбеде орналасқан және ұлттық тарихтың маңызды символы болып саналады.",
    s6_title:"«QAZYNA» ETNO-TARIHI KESHENI",
    s6_text:"«Қазын» этно-тарихи кешені — 75 гектар аумақты қамтитын мәдени-танымдық кешен. Бұл орын тарих пен заманауи демалысты үйлестіретін көрікті аймақтардың бірі.",
    s7_title:"«QAZAQ KHANDYGYNA 550 JYL» MONUMENTI",
    s7_text:"«Қазақ хандығына 550 жыл» монументі — 2015 жылы ашылған тарихи ескерткіш. Монумент ұлттық ою-өрнектермен безендірілген қос қақпа тұрып, қазақ халқының тарихи сабақтастығын бейнелейді.",
    s8_title:"«TARIKHI-OLKETANU» MURAJAIY",
    s8_text:"Шымкент «тарихи-өлкетану» мұражайы — 1920 жылы құрылған қаланың маңызды мәдени орындарының бірі. Мұражай келушілерді өңірдің тарихы, табиғаты және мәдениетімен таныстырады.",
    s9_title:"«ADET-GURYP JANE SALT-DASTUR» ORTALYGY",
    s9_text:"«Әдет-ғұрып және салт-дәстүр» орталығы — 2014 жылы ашылған ерекше мәдени орталық. Мұнда қазақ халқының салт-дәстүрлері мен ұлттық құндылықтары насихатталады.",
    s10_title:"«NAURYZ» ALANY",
    s10_text:"«Наурыз» алаңы — Шымкент қаласындағы заманауи әрі көрікті қоғамдық демалыс орындарының бірі. Бұл алаң түрлі мерекелік іс-шаралар, концерттер мен мәдени бағдарламаларды өткізуге арналған.",
    s11_title:"«ZHAILAU KOL» DEMALYS AIMAGY",
    s11_text:"«Жайлау көл» демалыс аймағында орналасқан Shymkent Altyn Eye — биіктігі 50 метрлік заманауи айналмалы аттракцион. Ол қала көрінісін тамашалауға мүмкіндік беретін танымал демалыс орындарының бірі.",
    s12_title:"SHYMKENT «HAIUANATTAR BAGY» №1",
    s12_text:"Шымкент «хайуанаттар» бағы — сирек және экзотикалық жануарларды көруге болатын ерекше табиғи-танымдық орын.",
    s13_title:"SHYMKENT «HAIUANATTAR BAGY» №2",
    s13_text:"Шымкент хайуанаттар бағы — Қазақстандағы ірі зоологиялық саябақтардың бірі. Мұнда әлемнің әртүрлі елдері мен табиғи аймақтарынан әкелінген жануарлардың көптеген түрлері мекендейді.",
    s14_title:"«ASANBAI ASKAROV ATYNDAGY DENDROLOGIALYQ» SAYABAQ №1",
    s14_text:"«Асанбай Асқаров атындағы дендрологиялық» саябақ — қаланың ең ірі жасыл аймақтарының бірі. 117 гектар аумақты қамтитын саябақ табиғат аясында демалуға қолайлы көрікті орын болып саналады.",
    s15_title:"«ASANBAI ASKAROV ATYNDAGY DENDROLOGIALYQ» SAYABAQ №2",
    s15_text:"Дендрологиялық саябақ — өсімдіктердің алуан түрін сақтауға және зерттеуге арналған ерекше табиғи кешен. Саябақ аумағында жүздеген ағаш, бұта және сәндік өсімдік түрлері өсіріледі. Олардың қатарында қылқан жапырақты, жапырақты және сирек кездесетін өсімдіктер бар.",
    s16_title:"«QASIRET» MEMORIALDY KESHENI",
    s16_text:"«Қасірет» мемориалды кешені — саяси қуғын-сүргін құрбандарына арналған тарихи ескерткіш кешен. Бұл орын өткен тарихты еске алып, тағзым ету мақсатында салынған.",
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
    s1_title:"СОВРЕМЕННЫЙ ШЫМКЕНТ",
    s1_text:"№1 Тур",
    s2_title:" ПАРК «SHYM CITY» №1",
    s2_text:"Парк «Shym City» — современный парк отдыха в городе Шымкент площадью более 45 гектаров. Это одно из живописных мест, идеально подходящих для прогулок, занятий спортом и семейного отдыха. ",
    s3_title:" ПАРК «SHYM CITY» №2",
    s3_text:"Сегодня парк «Shym City» является одним из любимых мест отдыха жителей и гостей города. На территории парка регулярно проводятся культурные и общественные мероприятия, создающие благоприятную атмосферу для семейного досуга. ",
    s4_title:"ДВОРЕЦ «QYZGALDAQ»",
    s4_text:"Дворец «Qyzgaldaq» — современный многофункциональный концертный комплекс города Шымкент. Здесь проводятся международные встречи, фестивали и различные культурные мероприятия. ",
    s5_title:"ПАМЯТНИК «БАЙДИБЕК БИ»",
    s5_text:"Памятник «Байдибек би» — один из самых высоких исторических монументов города. Он расположен на возвышенности в северной части Шымкента и является важным символом национальной истории. ",
    s6_title:"ЭТНО-ИСТОРИЧЕСКИЙ КОМПЛЕКС «КАЗЫНА» ",
    s6_text:"Этно-исторический комплекс «Казына» — культурно-познавательный комплекс площадью 75 гектаров. Это одно из живописных мест, где гармонично сочетаются история и современный отдых. ",
    s7_title:"МОНУМЕНТ «550-ЛЕТИЕ КАЗАХСКОГО ХАНСТВА»",
    s7_text:"Монумент «550-летие Казахского ханства» — исторический памятник, открытый в 2015 году. Монумент представляет собой двое ворот, украшенных национальными орнаментами, символизирующих историческую преемственность казахского народа. ",
    s8_title:"«ИСТОРИКО-КРАЕВЕДЧЕСКИЙ» МУЗЕЙ",
    s8_text:"Шымкентский историко-краеведческий музей — один из важнейших культурных объектов города, основанный в 1920 году. Музей знакомит посетителей с историей, природой и культурой региона. ",
    s9_title:"ЦЕНТР «ОБЫЧАЕВ И ТРАДИЦИЙ»",
    s9_text:"Центр обычаев и традиций — уникальный культурный центр, открытый в 2014 году. Здесь популяризируются традиции, обычаи и национальные ценности казахского народа. ",
    s10_title:"ПЛОЩАДЬ «НАУРЫЗ»",
    s10_text:"Площадь «Наурыз» — одно из современных и благоустроенных общественных пространств Шымкента. Площадь предназначена для проведения праздничных мероприятий, концертов и культурных программ.",
    s11_title:"ЗОНА ОТДЫХА «ЖАЙЛАУ КОЛЬ» ",
    s11_text:"Расположенный в зоне отдыха «Жайлау коль» аттракцион Shymkent Altyn Eye представляет собой современное колесо обозрения высотой  50 метров. Это одно из популярных мест отдыха, позволяющее насладиться панорамным видом на город. ",
    s12_title:"ШЫМКЕНТСКИЙ «ЗООЛОГИЧЕСКИЙ» ПАРК №1 ",
    s12_text:"Шымкентский зоопарк — уникальный природно-познавательный объект, где можно увидеть редких и экзотических животных. ",
    s13_title:"ШЫМКЕНТСКИЙ «ЗООЛОГИЧЕСКИЙ» ПАРК №2 ",
    s13_text:" Шымкентский зоопарк — один из крупнейших зоологических парков Казахстана. Здесь обитают многочисленные виды животных, привезённые из разных стран мира и природных зон. ",
    s14_title:"«ДЕНДРОЛОГИЧЕСКИЙ» ПАРК ИМЕНИ АСАНБАЯ АСКАРОВА №1 ",
    s14_text:"Дендрологический парк имени Асанбая Аскарова — одна из крупнейших зелёных зон города. Парк площадью 117 гектаров является живописным местом, идеально подходящим для отдыха на природе. ",
    s15_title:"«ДЕНДРОЛОГИЧЕСКИЙ» ПАРК ИМЕНИ АСАНБАЯ АСКАРОВА №2 ",
    s15_text:"Дендрологический парк — уникальный природный комплекс, предназначенный для сохранения и изучения разнообразных видов растений. На его территории произрастают сотни видов деревьев, кустарников и декоративных растений, включая хвойные, лиственные и редкие виды. ",
    s16_title:"МЕМОРИАЛЬНЫЙ КОМПЛЕКС «КАСИРЕТ» ",
    s16_text:"Мемориальный комплекс «Касирет» — исторический мемориал, посвящённый жертвам политических репрессий. Это место создано для сохранения исторической памяти и почтения памяти жертв трагических событий прошлого.",
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
    s1_title:"MODERN SHYMKENT",
    s1_text:"№1 tour",
    s2_title:"«SHYM CITY» PARK №1",
    s2_text:"Shym City Park is a modern recreational park in Shymkent covering more than 45 hectares. It is one of the city's most picturesque destinations, ideal for walking, sports activities, and family recreation. ",
    s3_title:"«SHYM CITY» PARK №2",
    s3_text:"Today, Shym City Park is one of the favorite leisure destinations for both residents and visitors of the city. Various cultural and public events are regularly held here, creating a welcoming atmosphere for family recreation. ",
    s4_title:"«QYZGALDAQ» PALACE",
    s4_text:"Qyzgaldaq Palace is a modern multifunctional concert and event complex in Shymkent. It hosts international meetings, festivals, and a variety of cultural events.",
    s5_title:"BAIDIBEK BI MONUMENT",
    s5_text:"The «Baidibek Bi» Monument is one of the tallest historical monuments in the city. Located on an elevated hill in the northern part of Shymkent, it serves as an important symbol of national history.",
    s6_title:" «QAZYNA» ETHNO-HISTORICAL COMPLEX",
    s6_text:"The Qazyna Ethno-Historical Complex is a cultural and educational site covering 75 hectares. It is one of the city's scenic attractions where history and modern recreation are harmoniously combined.",
    s7_title:"MONUMENT TO THE «550TH ANNIVERSARY OF THE KAZAKH KHANATE»",
    s7_text:"The Monument to the 550th Anniversary of the Kazakh Khanate is a historical landmark inaugurated in 2015. The monument consists of two monumental gates decorated with traditional Kazakh ornaments, symbolizing the historical continuity of the Kazakh people. ",
    s8_title:"SHYMKENT MUSEUM OF «HISTORY AND LOCAL LORE»",
    s8_text:"The Shymkent Museum of History and Local Lore is one of the city's most important cultural institutions. Founded in 1920, the museum introduces visitors to the history, nature, and culture of the region. ",
    s9_title:"CENTER OF «CUSTOMS AND TRADITIONS»",
    s9_text:"The Center of Customs and Traditions is a unique cultural institution opened in 2014. It promotes the traditions, customs, and national values of the Kazakh people.",
    s10_title:"«NAURYZ» SQUARE",
    s10_text:"Nauryz Square is one of Shymkent's modern and well-maintained public spaces. It serves as a venue for festive celebrations, concerts, and cultural programs.",
    s11_title:"«ZHAILAU KOL» RECREATION AREA",
    s11_text:"Located within the Zhailau Kol Recreation Area, the Shymkent Altyn Eye attraction is a modern 50-meter Ferris wheel. It is one of the city's popular leisure destinations, offering panoramic views of Shymkent. ",
    s12_title:"SHYMKENT «ZOO» №1",
    s12_text:"Shymkent Zoo is a unique educational and recreational destination where visitors can observe rare and exotic animals. ",
    s13_title:"SHYMKENT «ZOO» №2",
    s13_text:"Shymkent Zoo is one of the largest zoological parks in Kazakhstan. It is home to numerous animal species brought from various countries and natural habitats around the world.",
    s14_title:"ASANBAY ASKAROV «DENDROLOGICAL» PARK №1",
    s14_text:"The Asanbay Askarov Dendrological Park is one of the largest green spaces in the city. Covering an area of 117 hectares, it is a picturesque location ideally suited for outdoor recreation and relaxation.",
    s15_title:"ASANBAY ASKAROV «DENDROLOGICAL» PARK №2",
    s15_text:"The Dendrological Park is a unique natural complex dedicated to the conservation and study of diverse plant species. Its territory is home to hundreds of species of trees, shrubs, and ornamental plants, including coniferous, deciduous, and rare varieties.",
    s16_title:"«KASIRET» MEMORIAL COMPLEX",
    s16_text:"The Kasiret Memorial Complex is a historical memorial dedicated to the victims of political repression. It was established to preserve historical memory and honor those who suffered during the tragic events of the past.",
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/SHYMCITY1.mp3",ru:"audio/PARKSHYSITY.mp3",en:"audio/SHYSITYEN.mp3"},
  2:{kz:"audio/SHYM2.mp3",ru:"audio/PARKSHYMSITY2.mp3",en:"audio/SHYSITYEB2.mp3"},
  3:{kz:"audio/QYZGALDAQ.mp3",ru:"audio/KIZGALDAKRU.mp3",en:"audio/KIZGALDAK.mp3"},
  4:{kz:"audio/BAIDIBEKBI.mp3",ru:"audio/BAYDIBEKBI.mp3",en:"audio/BAIDIBEKEN.mp3"},
  5:{kz:"audio/QAZYNA.mp3",ru:"audio/KAZYNARU.mp3",en:"audio/KAZINA.mp3"},
  6:{kz:"audio/QAZAQ.mp3",ru:"audio/550MONUMENT.mp3",en:"audio/550.mp3"},
  7:{kz:"audio/TARIKHI.mp3",ru:"audio/OLKETANU.mp3",en:"audio/OLKETANUEN.mp3"},
  8:{kz:"audio/ADET.mp3",ru:"audio/CENTROBICHYY.mp3",en:"audio/CENNTREN.mp3"},
  9:{kz:"audio/NAURYZALANY.mp3",ru:"audio/NAURIZRU.mp3",en:"audio/NAURIZALANI.mp3"},
  10:{kz:"audio/ZHAILAKOL.mp3",ru:"audio/JAILAUKOLRU.mp3",en:"audio/JAILAUKOLEN.mp3"},
  11:{kz:"audio/HAIUANATTAR.mp3",ru:"audio/ZOOPARK1.mp3",en:"audio/ZOOPARKEN.mp3"},
  12:{kz:"audio/HAIUANATTAR2.mp3",ru:"audio/ZOOPARK2.mp3",en:"audio/ZOOPARKEN2.mp3"},
  13:{kz:"audio/ASANBA№1.mp3",ru:"audio/DENDROPARK2.mp3",en:"audio/GENDROPARK.mp3"},
  14:{kz:"audio/ASANBAI2.mp3",ru:"audio/DENDROPARK2.mp3",en:"audio/GENDROPARK2.mp3"},
  15:{kz:"audio/QASIRET.mp3",ru:"audio/KASIRETRU.mp3",en:"audio/KASIRET.mp3"},
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
    center: [42.399506, 69.621184],
    zoom: 15
});

const points = [
    {lat: 42.397876, lng: 69.623877, img: "images/mesto1.jpg", text: "SHYM CITY"},
    {lat: 42.398897, lng: 69.619127, img: "images/mesto1.jpg", text: "SHYM CITY"},
    {lat: 42.394690, lng: 69.623442, img: "images/mesto2.png", text: "Qyzgaldaq saraiy"},
    {lat: 42.387501, lng: 69.627769, img: "images/mecto3.png", text: "Baidibek Bi"},
    {lat: 42.384836, lng: 69.626479, img: "images/mesto4.png", text: "«QAZYNA» ETNO-TARIHI KESHENI"},
    {lat: 42.384890, lng: 69.627966, img: "images/mesto5.jpg", text: "«QAZAQ KHANDYGYNA 550 JYL» MONUMENTI"},
    {lat: 42.382783, lng: 69.626951, img: "images/mesto6.png", text: "«TARIKHI-OLKETANU» MURAJAIY"},
    {lat: 42.382827, lng: 69.628025, img: "images/adet.jpg", text: "«ADET-GURYP JANE SALT-DASTUR» ORTALYGY"},
    {lat: 42.382319, lng: 69.628590, img: "images/mesto8.png", text: "«NAURYZ» ALANY"},
    {lat: 42.381693, lng: 69.628203, img: "images/mesto9.jpg", text: "«ZHAILAU KOL» DEMALYS AIMAGY"},
    {lat: 42.376953, lng: 69.628102, img: "images/mesto10.png", text: "SHYMKENT «HAIUANATTAR BAGY» №1"},
    {lat: 42.377234, lng: 69.626997, img: "images/mesto10.png", text: "SHYMKENT «HAIUANATTAR BAGY» №2"},
    {lat: 42.36957,  lng: 69.618136, img: "images/mesto11.jpg", text: "«ASANBAI ASKAROV ATYNDAGY DENDROLOGIALYQ» SAYABAQ №1"},
    {lat: 42.367255, lng: 69.622733, img: "images/mesto11.jpg", text: "«ASANBAI ASKAROV ATYNDAGY DENDROLOGIALYQ» SAYABAQ №2"},
    {lat: 42.366951, lng: 69.623459, img: "images/mesto12.jpg", text: "«QASIRET» MEMORIALDY KESHENI"},
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
