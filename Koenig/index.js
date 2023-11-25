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
