
$(document).ready(function(){
    $(".outlet_wrap").slice(1).hide();
    $('.port_nav li').eq(0).addClass("active");
    $('.port_nav li a').click(function(e){
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

$(window).ready(function() {
  $(".port_nav li a").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $('.port_nav').offset().top;

    // $('.content').toggleClass('hidden');
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 500);
    /* Act on the event */
  });
});

$(window).ready(function() {
  $("#menu ul li a").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;

    // $('.content').toggleClass('hidden');
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      1300
    );
    /* Act on the event */
  });
});

$(document).ready(function () {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.inner_wrapper_n').addClass('case_hero_s');
        }
        else {
            $('.inner_wrapper_n').toggleClass('case_hero_s');
        }
    })
    });


$(document).ready(function () {

    $(window).scroll(function() {

        if ($(this).scrollTop() > 330) {
            $('.case_nav').slideDown();
        }
        else {
            $('.case_nav').slideUp();
        }
    })
});

jQuery(document).ready(function( $ ) {
    $("#menu").mmenu({

    });
});

var $menu = $("#menu").mmenu({
    "extensions": [
        "fx-listitems-slide",
        "theme-dark",
        "pagedim-black",
        "position-right"
    ],
    offCanvas: {
        pageSelector: "#my_menu"

    },
    onClick : {
        close          : true,
        preventDefault : false
    },
    scrollBugFix : {
        fix            : true
    }
});
var $icon = $("#menu_ico");
var API = $menu.data( "mmenu" );
$icon.on( "click", function() {
    API.open();
});
API.bind( "open:finish", function() {
    setTimeout(function() {
        $icon.addClass( "is-active" );
    }, 100);
});
API.bind( "close:finish", function() {
    setTimeout(function() {
        $icon.removeClass( "is-active" );
    }, 100);
});