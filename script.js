
const animations = [
  {name:'fadeIn',type:'entrance'},
  {name:'fadeInUp',type:'entrance'},
  {name:'fadeInLeft',type:'entrance'},
  {name:'pop',type:'attention'},
  {name:'pulse',type:'attention'},
  {name:'zoomIn',type:'entrance'},
  {name:'bounce',type:'attention'},
  {name:'slideUp',type:'entrance'}
];

function render(filter='all'){
  const wrap=document.getElementById('cards');
  wrap.innerHTML='';
  animations.filter(a=>filter==='all'||a.type===filter).forEach(a=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<div class="square" id="${a.name}">${a.name}</div>`;
    wrap.appendChild(card);
    play(a.name);
  });
}

function play(name){
  const el=document.getElementById(name);
  if(!el) return;
  el.style.opacity=0;
  el.classList.remove('anim');
  void el.offsetWidth;
  el.classList.add('anim');
  el.style.animation = `${name} 1s ease forwards`;
}

document.querySelectorAll('.tab').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  };
});

render();
