/**
 * Created by rodrigomv.dev@gmail.com on 21/06/16.
 */

//funcao back to top
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });

    $('.to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
});

