/**
 * Created by rodrigomv.dev@gmail.com on 21/06/16.
 */

//funcao back to top
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
});

