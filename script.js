const WHATSAPP='5545991028010';
const openWhatsApp=(message)=>window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank','noopener');

document.querySelectorAll('.consult').forEach(btn=>btn.addEventListener('click',()=>{
  openWhatsApp(`Olá! Vi no site a referência “${btn.dataset.product}” e gostaria de consultar as opções disponíveis. Pode me passar mais informações?`);
}));

document.querySelector('#orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  const val=id=>document.querySelector(id).value.trim()||'não informado';
  const message=`Olá! Gostaria de consultar uma encomenda personalizada.\n\nOcasião: ${val('#occasion')}\nCores/estilo: ${val('#colors')}\nOrçamento desejado: ${val('#budget')}\nObservações: ${val('#notes')}\n\nPodem me informar as possibilidades e a disponibilidade?`;
  openWhatsApp(message);
});

const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));

const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
else{
  const reveals=[...document.querySelectorAll('.reveal')];
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  },{threshold:.06,rootMargin:'0px 0px -24px'});
  reveals.forEach(el=>obs.observe(el));
}
