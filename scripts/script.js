const body = document.querySelector('body');
const hamMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
const links = document.querySelectorAll('.mobile-menu > a');
const logo = document.querySelector('.logo');
const hamBars = document.querySelectorAll('.ham-bar')

const rootElement = document.documentElement;

hamMenu.addEventListener('click', () => {
    toggleNav();
});

links.forEach(link => {
    link.addEventListener('click', () => {
        toggleNav();
    })
});

function toggleNav() {
    hamMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('noscroll');
    logo.classList.toggle('notvisible');
    header.classList.toggle('inMenu');
    hamBars.forEach(bar =>{
        bar.classList.toggle('ham-bar-menu');
    });
};


