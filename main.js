const typed = new Typed('#element', {
  strings: ['Une marque 100% Algérienne qui fabrique des produits qui change les modes de vie.',
     'Des produits +98% naturels et 100% efficaces !',
    'La qualité et l\'efficacité sont garanties par nous.'],
  typeSpeed: 60,
  backDelay: 5000,
  backSpeed: 25,
  loop: true,
  cursorChar: "|",
  loopCount: Infinity,
  smartBackspace: true,
  autoInsertCss: true,
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}