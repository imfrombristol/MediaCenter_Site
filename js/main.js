$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
        items: 1,
        // autoHeight: true,
        // animateIn: 'fadeInRightBig',
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: true,
  });
});

$(document).ready(function(){
    $(".outlet_wrap").slice(1).hide();
    $('.videoproduction li').eq(0).addClass("active");
    $('.videoproduction li a').click(function(e){
        e.preventDefault();
        let aim = $(this).attr("href");
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
          $(aim).show();
          $(aim)
            .siblings(".outlet_wrap")
            .hide();
    })
})