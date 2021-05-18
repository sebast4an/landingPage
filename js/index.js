const toggleNavigationClass = () => {
    const navButton = document.querySelector('.navbutton');
    const navList = document.querySelector('.navigation__list');

    navButton.addEventListener(`click`, () => {
        navButton.classList.toggle('navbutton--active');
        navList.classList.toggle('navigation__list--active');
    });
}; toggleNavigationClass();


const setCountedWidthNavItem = () => {
    const mainNavigation = document.querySelectorAll('.navigation__item');
    mainNavigation.forEach(link => {
        link.style.width = ""; //resetting the static width before counting
        link.style.fontWeight = "600";
        const value = (link.offsetWidth)+(link.offsetWidth/10);
        link.style.width = `${value.toFixed()}px`;
        link.style.fontWeight = "";
    });
}; setCountedWidthNavItem();

window.addEventListener(`resize`, () => {
    setCountedWidthNavItem();
});


//activation of the navigation link while scrolling
const activeLinkWhileScroll = () => {
    const navLinks = document.querySelectorAll(".navigation__link");

    window.addEventListener("scroll", event => {
        const fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("navigation__link--active");
            } else {
                link.classList.remove("navigation__link--active");
            }
        });
    });
}; activeLinkWhileScroll();


