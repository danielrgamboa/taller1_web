//Convertir el menu normal en un menu hamburguesa

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

//Galeria de productos ecommerce

var main = document.querySelector('.galery__main');
var thumbs = document.querySelectorAll('.galery__thumb');
function handleImageClick (elem) {
    // leer atributo src de la imagen pequeña
    var src = elem.getAttribute('data-src');
    // setear atributo src a la imagen grande
    main.setAttribute('src', src);
    thumbs.forEach(function(innerElem){
        innerElem.classList.remove('galery__thumb--active');
    });
    // agregar clase active
    elem.classList.add('galery__thumb--active');
}
function iterateThumbs (elem, index) {
    elem.addEventListener('click', function () {
        handleImageClick(elem);
    });
}
thumbs.forEach(iterateThumbs);
handleImageClick(thumbs[0]);


