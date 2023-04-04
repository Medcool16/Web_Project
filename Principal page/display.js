let cl=document.getElementById('CLUBS');  //block clubs
let clu=document.getElementById('club');

cl.addEventListener('click',()=>{
 clu.style.display = "block";
});

let gl=document.getElementById('GALERY');   //block gallery 
 let glr=document.getElementById('gal');

gl.addEventListener('click',()=>{
 glr.style.display = "block";
});

let hm=document.getElementById('HOME');    //block home 

hm.addEventListener('click',()=>{
  clu.style.display = "none";
  glr.style.display = "none";
});