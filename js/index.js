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
        const value = (link.offsetWidth) + (link.offsetWidth / 10);
        link.style.width = `${value.toFixed()}px`;
        link.style.fontWeight = "";
    });
}; setCountedWidthNavItem();

window.addEventListener(`resize`, () => {
    setCountedWidthNavItem();
});


//Activates the current nav based on scroll position
const activeLinkWhileScroll = () => {
    let mainNavLinks = document.querySelectorAll(".navigation__link");
    //by default start is active
    mainNavLinks[0].classList.add("navigation__link--active");

    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;
    
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
    
        if (section.offsetTop-2 <= fromTop && section.offsetTop + section.offsetHeight-2 > fromTop) {
          link.classList.add("navigation__link--active");
        } else {
          link.classList.remove("navigation__link--active");
        }
      });

    });
}; activeLinkWhileScroll();


