var mainnav = document.querySelector('.mainnav__container');
var hambtn = document.querySelector('.hamburguerbtn');

var handleHamClick = function (event) {
    console.log(event);
    mainnav.classList.toggle('mainnav__container--mobile');
}
hambtn.addEventListener('click', handleHamClick);

function handleWindowResize (event) {
    if(window.innerWidth > 400){
        mainnav.classList.remove('mainnav__container--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);