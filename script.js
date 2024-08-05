function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed('#autotyped', {
    strings: ['Une marque Algerienne qui fabrique des produits qui changent la vie.', 'Des produits cosmetiques 97% naturelle et 100% efficace!', 'La qualité et l\'efficacité sont notre objectif principal.'],
    typeSpeed: 55,
    backSpeed: 40,
    backDelay: 5000,
    loop: true,
});