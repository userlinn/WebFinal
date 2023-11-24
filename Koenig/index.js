const search = document.querySelector('.search-box');
const menu = document.querySelector('.navbar');

var isOff = true;
const icons = document.getElementById('search-icon')

icons.addEventListener('click', () => {
    if (isOff) {
        search.classList.add('active');
        isOff = false;
    }
    else {
        search.classList.remove('active');
        isOff = true;
    }
})

const iconm = document.getElementById('menu-icon')

iconm.addEventListener('click', () => {
    if (isOff) {
        menu.classList.add('active');
        isOff = false;
    }
    else {
        menu.classList.remove('active');
        isOff = true;
    }
})

document.addEventListener("DOMContentLoaded", function () {
    var pulsatingElement = document.getElementById('pulsateMe');

    pulsatingElement.addEventListener('mouseover', function () {
        pulsatingElement.classList.add('hovered');
    });

    pulsatingElement.addEventListener('mouseout', function () {
        pulsatingElement.classList.remove('hovered');
    });
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}