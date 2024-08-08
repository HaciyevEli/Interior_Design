"use strict";
$(document).ready(function () {
  const owlConfig = {
    items: 1,
    loop: true,
    smartSpeed: 600,
    margin: 15,
    stagePadding: 40,
    responsive:{
      480:{
        items: 2,
        stagePadding: 30,
      },
      575: {
        items: 3,
        stagePadding: 0,
      }
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      $(".porfolio-content").trigger("destroy.owl.carousel");
      $(".porfolio-content").classList.remove("owl-carousel");
    } else {
      $(".porfolio-content").owlCarousel(owlConfig);
      $(".porfolio-content").classList.add("owl-carousel");
    }
  });

  $(".header-silder").owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 600,
    margin: 5,
  });

  $(".silder-next").click(function () {
    $(".header-silder").trigger("next.owl.carousel");
  });

  $(".silder-prev").click(function () {
    $(".header-silder").trigger("next.owl.carousel");
  });

  // $(".porfolio-content-slider").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   smartSpeed: 600,
  //   stagePadding: 40,
  //   margin: 15,
  // });

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
