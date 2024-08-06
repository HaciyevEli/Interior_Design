"use strict";
$(document).ready(function(){
  $(".header-silder").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 600,
    margin: 5,
  });

  $('.silder-next').click(function() {
    $(".header-silder").trigger('next.owl.carousel');
  });
  
  $('.silder-prev').click(function() {
    $(".header-silder").trigger('next.owl.carousel');
  });

  /****   FANCYBOX ****/ 

  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
});



