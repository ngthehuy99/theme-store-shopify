

  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:15,
      nav:true,
      navText:["<i class='btn-nav fas fa-angle-left'></i>","<i class='btn-nav fas fa-angle-right'></i>"],
      dots:false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });
