
var swiper = new Swiper(".products-slider", {
    loop: true,
    grabCursor : false, //qualquer cena é so colocar true
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  setInterval(function(){
    document.getElementById("slider" + i).checked = true
    i++
    if(i>3){
        i = 1
    }
}, 6000)
