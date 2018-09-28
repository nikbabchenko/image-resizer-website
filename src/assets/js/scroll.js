import $ from 'jquery';

export function scrollToSection() {
    $('.action__btn[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var section = $target.offset().top;
        $('html, body').stop().animate({
            'scrollTop': section
        }, 500, 'swing', function () {});
    });
}

