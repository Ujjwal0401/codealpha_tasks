// script.js - interactive bits

// Smooth reveal on scroll
function revealOnScroll(){
  document.querySelectorAll('.reveal').forEach(el =>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 40){
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () =>{ revealOnScroll(); history.replaceState && history.replaceState({}, ''); });

// Calculator
(function(){
  const display = document.getElementById('calc-display');
  const buttons = document.querySelectorAll('.calc-buttons button[data-value]');
  const eq = document.getElementById('calc-equals');
  const clr = document.getElementById('calc-clear');
  let expr = '';

  buttons.forEach(b => b.addEventListener('click', ()=>{
    expr += b.getAttribute('data-value');
    display.value = expr;
  }));

  eq.addEventListener('click', ()=>{
    try{
      // basic safety: allow only numbers and operators
      if(/^[0-9.+\-*/() ]+$/.test(expr)){
        // eslint-disable-next-line no-eval
        const v = eval(expr);
        display.value = v;
        expr = String(v);
      } else {
        display.value = 'Error'; expr='';
      }
    }catch(e){display.value='Error';expr='';}
  });

  clr.addEventListener('click', ()=>{expr='';display.value='';});
})();

// Image gallery lightbox
(function(){
  const imgs = document.querySelectorAll('#gallery-demo .gallery img');
  const lb = document.getElementById('lightbox');
  const lbImage = document.getElementById('lb-image');
  const lbClose = document.getElementById('lb-close');

  imgs.forEach(img => img.addEventListener('click', ()=>{
    lbImage.src = img.src.replace('/300/200','/1200/800');
    lb.setAttribute('aria-hidden','false');
  }));

  lbClose.addEventListener('click', ()=> lb.setAttribute('aria-hidden','true'));
  lb.addEventListener('click', e => { if(e.target === lb) lb.setAttribute('aria-hidden','true'); });
})();

// Smooth scroll for nav
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
