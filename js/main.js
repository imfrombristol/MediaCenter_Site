$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
        items: 1,
        // autoHeight: true,
        animateIn: 'fadeInRightBig',
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: true,
  });
});

let leftHeight = $(".outlet_left").innerHeight();
let rightHeight = $(".outlet_right").innerHeight();


$(".outlet_right").height(function(i, value) {
    return value+leftHeight
})