const menu = document.querySelector('.menu');
const cover = document.querySelector('.cover');
const playerContainer = document.querySelector('.controls-player-container');

function animateElements() {
    menu.classList.add('small-menu');
    cover.classList.add('small-cover');
    playerContainer.classList.add('small-controls-player-container');
}

const smallCover = document.querySelector('.remove');

function animateElements2() {
    menu.classList.remove('small-menu');
    cover.classList.remove('small-cover');
    playerContainer.classList.remove('small-controls-player-container');
}

menu.addEventListener('click', animateElements);
smallCover.addEventListener('click', animateElements2);