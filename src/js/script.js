$(document).ready(function () {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false,
    });

    document.querySelector('.prev').addEventListener('click', () => slider.goTo('prev'));
    document.querySelector('.next').addEventListener('click', () => slider.goTo('next'));

    (function ($) {
        $(function () {

            $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
                $(this)
                    .addClass('catalog__tab_active')
                    .siblings()
                    .removeClass('catalog__tab_active')
                    .closest('div.container')
                    .find('div.catalog__content')
                    .removeClass('catalog__content_active')
                    .eq($(this).index()).addClass('catalog__content_active');
            });

        });
    })(jQuery)

    // $(".catalog-item__link").each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    // $(".catalog-item__back").each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    // function toggleSlide(name) {
    //     $(name).each(function (i) {
    //         $(this).on('click', function (e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         })
    //     })
    // }

    // toggleSlide(".catalog-item__link");
    // toggleSlide(".catalog-item__back");


    function toggleContentList(selectors) {
        selectors.forEach((selector) => {
            $(selector).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
            });
        });
    }

    toggleContentList([".catalog-item__link", ".catalog-item__back"]);

    //modal
    $('[data-modal=consultation]').on('click', () => $('.overlay, #consultation').fadeIn("slow"));
    $('.modal__close').on('click', () => $('.overlay, #consultation, #order').fadeOut("slow"));
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $("#order .modal__descr").text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn("slow");
        })
    });

});

