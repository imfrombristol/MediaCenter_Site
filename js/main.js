$(window).ready(function () {
    $(".collapse ul li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        // $('.content').toggleClass('hidden');
        jQuery("html:not(:animated),body:not(:animated)").animate(
            {scrollTop: destination},
            1300
        );
        /* Act on the event */
    });
});

$(window).ready(function () {
    $(".navbar-brand").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        // $('.content').toggleClass('hidden');
        jQuery("html:not(:animated),body:not(:animated)").animate(
            {scrollTop: destination},
            300
        );
        /* Act on the event */
    });
});


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.inner_wrapper_n').addClass('case_hero_s');
        }
        else {
            $('.inner_wrapper_n').toggleClass('case_hero_s');
        }
    })
});


$(document).ready(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 330) {
            $('.case_nav').slideDown();
        }
        else {
            $('.case_nav').slideUp();
        }
    })
});


$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    })
});

$(document).ready(function () {
    $('#submit').click(function () {
        // собираем данные с формы
        var user_name = $('#user_name').val();
        var user_email = $('#user_email').val();
        var text_comment = $('#message').val();
        // отправляем данные
        $.ajax({
            url: "action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name": user_name,
                "user_email": user_email,
                "text_comment": text_comment
            },
            // после получения ответа сервера
            success: function (data) {
                $('.messages').html(data.result); // выводим ответ сервера
            }
        });
    });
});
