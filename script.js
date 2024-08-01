function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed('#autotyped', {
    strings: ['Une marque Algerienne qui fabrique des produits qui changent la vie.', 'Des produits 97% naturelle est efficace!'],
    typeSpeed: 55,
    backSpeed: 40,
    backDelay: 5000,
    loop: true,
});