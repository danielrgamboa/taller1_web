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

//producto ecommerce

(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });
