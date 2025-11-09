
const animations=[
 'fadeIn','fadeInUp','fadeInDown','fadeInLeft','fadeInRight',
 'zoomIn','zoomOut','bounce','pulse','shake','flip','rotateIn'
];

const container=document.getElementById('container');

animations.forEach(anim=>{
 let card=document.createElement('div');
 card.className='card';
 card.innerHTML=`
   <div class="box ${anim}">${anim}</div>
   <button onclick="replay(this,'${anim}')">Replay</button>
   <button onclick="copyCode('${anim}')">Copy Code</button>
 `;
 container.appendChild(card);
});

function replay(btn,anim){
 let box=btn.parentElement.querySelector('.box');
 box.classList.remove(anim);
 void box.offsetWidth;
 box.classList.add(anim);
}

function copyCode(anim){
 navigator.clipboard.writeText(anim);
 alert("Copied: "+anim);
}

window.onload=()=>{
 document.querySelectorAll('.box').forEach(b=>{
   let anim=[...b.classList].find(c=>animations.includes(c));
   b.classList.add(anim);
 });
};
