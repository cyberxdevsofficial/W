const animations = [
  {name:'fadeIn',cat:'entrance'},
  {name:'slideInLeft',cat:'entrance'},
  {name:'slideInRight',cat:'entrance'},
  {name:'slideInUp',cat:'entrance'},
  {name:'slideInDown',cat:'entrance'},
  {name:'zoomIn',cat:'entrance'},
  {name:'flipInX',cat:'entrance'},
  {name:'bounce',cat:'attention'},
  {name:'shake',cat:'attention'},
  {name:'pulse',cat:'attention'},
  {name:'tada',cat:'attention'},
  {name:'rubberBand',cat:'attention'},
  {name:'wobble',cat:'attention'},
  {name:'heartBeat',cat:'attention'},
  {name:'fadeOut',cat:'exit'},
  {name:'slideOutLeft',cat:'exit'},
  {name:'slideOutRight',cat:'exit'},
  {name:'slideOutUp',cat:'exit'},
  {name:'slideOutDown',cat:'exit'},
  {name:'zoomOut',cat:'exit'},
  {name:'flipOutX',cat:'exit'},
  {name:'spin',cat:'special'},
  {name:'rotate',cat:'special'},
  {name:'float',cat:'special'},
  {name:'jump',cat:'special'},
  {name:'glow',cat:'special'},
  {name:'scale',cat:'special'},
  {name:'stretch',cat:'special'},
  {name:'pop',cat:'special'}
];

function render(){
  const list=document.getElementById('animation-list');
  list.innerHTML='';
  let q=document.getElementById('search').value.toLowerCase();
  let cat=document.querySelector('.cat-btn.active').dataset.cat;

  animations.filter(a=> 
    (cat==='all'||a.cat===cat)&&a.name.toLowerCase().includes(q)
  ).forEach(a=>{
    let div=document.createElement('div');
    div.className='card';
    div.innerHTML=`
      <h3>${a.name}</h3>
      <div class="preview" id="prev-${a.name}">Play</div>
      <div class="buttons">
        <button class="btn" onclick="replay('${a.name}')">Replay</button>
        <button class="btn" onclick="copyCode('${a.name}')">Copy Code</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function replay(anim){
  let el=document.getElementById('prev-'+anim);
  el.style.animation='none';
  void el.offsetHeight;
  el.style.animation=anim+' 1s ease';
}

function copyCode(anim){
  navigator.clipboard.writeText(`animation: ${anim} 1s ease;`);
  alert('Code Copied!');
}

document.querySelectorAll('.cat-btn').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.cat-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    render();
  };
});

document.getElementById('search').oninput=render;

render();
