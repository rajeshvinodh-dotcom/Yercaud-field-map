const map=L.map('map').setView([11.77,78.20],12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const icons={village:'🏘️',health:'🏥',school:'🏫',anganwadi:'👶',oht:'💧',fogging:'🦟'};
let data=[],markers=L.layerGroup().addTo(map),current=[];
function popup(p){return `<div><b>${icons[p.category]||'📍'} ${p.name}</b><br><small>${p.name_ta||''}</small><br><b>Type:</b> ${p.category_label||p.category}<br>${p.description||''}</div>`}
function draw(arr){markers.clearLayers();arr.forEach(f=>{if(f.geometry?.type!=='Point')return;let [x,y]=f.geometry.coordinates;L.marker([y,x]).bindPopup(popup(f.properties)).addTo(markers)});current=arr}
function list(arr){let box=document.getElementById('list');box.innerHTML='';arr.filter(x=>x.properties.category==='village').forEach(f=>{let p=f.properties;let d=document.createElement('div');d.className='card';d.innerHTML=`<b>${p.name}</b><span class="tag">${p.category_label}</span><br><button>Locate</button>`;d.querySelector('button').onclick=()=>{let [x,y]=f.geometry.coordinates;map.setView([y,x],15);L.popup().setLatLng([y,x]).setContent(popup(p)).openOn(map)};box.appendChild(d)})}
function refresh(){let q=document.getElementById('search').value.toLowerCase(),c=document.getElementById('layer').value;let a=data.filter(f=>{let p=f.properties||{};let text=JSON.stringify(p).toLowerCase();return (!q||text.includes(q))&&(c==='all'||p.category===c)});draw(a);list(a)}
fetch('data/locations.geojson').then(r=>r.json()).then(g=>{data=g.features||[];document.getElementById('stats').innerHTML=`<div class="stat"><span>🏘️ 9 Panchayats</span><span>🏫 7 key schools</span><span>🏥 3 health entries</span></div>`;refresh()});
document.getElementById('search').oninput=refresh;document.getElementById('layer').onchange=refresh;
document.getElementById('fit').onclick=()=>map.setView([11.774,78.203],12);
document.getElementById('locate').onclick=()=>navigator.geolocation?.getCurrentPosition(p=>{map.setView([p.coords.latitude,p.coords.longitude],16);L.marker([p.coords.latitude,p.coords.longitude]).addTo(map).bindPopup('Your location').openPopup()});
