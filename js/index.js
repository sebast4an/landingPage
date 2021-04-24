const navButton = document.querySelector('.navbutton');
const panel = document.querySelector('.navigation__list');

navButton.addEventListener(`click`, () => {
    navButton.classList.toggle('navbutton--active');
    panel.classList.toggle('navigation__list--active');
});