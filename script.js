
const animations = [
  {name:"Fade Up", anim:"fadeUp"},
  {name:"Fade Down", anim:"fadeDown"},
  {name:"Zoom In", anim:"zoomIn"},
  {name:"Zoom Out", anim:"zoomOut"},
  {name:"Rotate In", anim:"rotateIn"},
  {name:"Bounce", anim:"bounce"},
  {name:"Slide Left", anim:"slideLeft"},
  {name:"Slide Right", anim:"slideRight"}
];

const container = document.getElementById("animations");

animations.forEach(a=>{
  const box = document.createElement("div");
  box.className = "box";
  box.innerHTML = `
    <div class="demo animate" style="animation-name:${a.anim}"></div>
    <div class="name">${a.name}</div>
  `;

  // Replay animation on touch or click
  box.addEventListener("click", ()=>{
    const el = box.querySelector(".demo");
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    el.style.animationName = a.anim;
    el.style.animationDuration = "1s";
  });

  container.appendChild(box);
});
