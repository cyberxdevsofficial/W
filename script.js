function play(name){
  const el=document.getElementById(name+'Square');
  el.classList.remove('animate-'+name);
  void el.offsetWidth;
  el.classList.add('animate-'+name);
}
function copyClass(name){
  navigator.clipboard.writeText('animate-'+name);
  alert('Copied: animate-'+name);
}
