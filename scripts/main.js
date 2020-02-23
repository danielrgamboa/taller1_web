var mainnav = document.querySelector('.container mainnav__container');
var hambtn = document.querySelector('.search__button');

var handleHamClick = function (event) {
    console.log(event);
    mainnav.classList.toggle('mainnav--mobile');
}
search__button.addEventListener('click', search__buttonClick);

function handleWindowResize (event) {
    if(window.innerWidth > 400){
        container mainnav__container.classList.remove('container mainnav__container--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);