const qsa = s => Array.from(document.querySelectorAll(s)) 

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});

qsa('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href')
    if(!href || !href.startsWith('#')) return // Ignora links externos
    const target = document.querySelector(href)
    if(target){
      e.preventDefault() // Evita salto instantâneo
      target.scrollIntoView({behavior:'smooth', block:'start'}) // Rolagem suave
      // Fecha menu mobile se estiver aberto
      if(!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden')
    }
  })
})


const numwhats = "5541998436600";
const mensagemwhats = "Olá! Vim pelo portfólio e me interessei.";
const url = `https://wa.me/${numwhats}?text=${encodeURIComponent(mensagemwhats)}`;

document.getElementById("whatsapp-link").addEventListener("click", (e) => {
  e.preventDefault(); // impede comportamento padrão do link
  window.open(url, "_blank");
});