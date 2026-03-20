const qsa = s => Array.from(document.querySelectorAll(s)) ;
const qs = s => document.querySelector(s);
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
const mensagemwhats = "Olá! Vim pelo portfólio.";
const url = `https://wa.me/${numwhats}?text=${encodeURIComponent(mensagemwhats)}`;

document.getElementById("whatsapp-link").addEventListener("click", (e) => {
  e.preventDefault(); // impede comportamento padrão do link
  window.open(url, "_blank");
});

function restartAnimation() {
  // Seleciona o onde que tem as animações
  const container = document.querySelector('.tela-terminal-mac');
  
  // Clona o elemento para resetar completamente o estado do DOM
  const clone = container.cloneNode(true);
  
  // Substitui o antigo pelo novo
  container.parentNode.replaceChild(clone, container);
}

/* Menu celuluar - abrir e fechar */
const iconeCelular = qs('#navCelular');
const itensMenu = qs('#menuCelular');

iconeCelular?.addEventListener('click', () => {
  const espandir = iconeCelular.getAttribute('aria-expanded') === 'true';//valida se esta aberto o menu
  iconeCelular.setAttribute('aria-expanded', String(!espandir)); // altera atributo
  //alternar visibilidade do menu
  if(itensMenu.classList.contains('hidden')) itensMenu.classList.remove('hidden');
  else itensMenu.classList.add('hidden');
})

//destaca iten ativo do menu
const navLinks = qsa('.nav-link');
const section = navLinks
  .map(link => {
    const id = link.getAttribute('href')?.replace('#', "");
    return document.getElementById(id)
  })
  .filter(Boolean);

const HEADER_OFFSET = 120;

function onScrollSpy() {
  let currentSection = null;
  let minDistance= Infinity;

  section.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top - HEADER_OFFSET);

    if(rect.top <= HEADER_OFFSET + 50 && distance< minDistance){
      minDistance = distance;
      currentSection = section;
    }
  });
  
  navLinks.forEach(link => link.classList.remove('active'));

  if( currentSection ){
    const activeLink = document.querySelector(
     `.nav-link[href="#${currentSection.id}"]`
    );
    activeLink?.classList.add('active');
  }
}

window.addEventListener('scroll', onScrollSpy, {passive: true});
window.addEventListener('resize', onScrollSpy);
onScrollSpy();
