const navButton = document.querySelector('.navbutton');

navButton.addEventListener(`click`, () => {
    navButton.classList.toggle('navbutton--active');
});