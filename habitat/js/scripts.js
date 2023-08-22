
if (window.matchMedia("(min-width: 768px)").matches) {
    $('#layerslider').layerSlider({
        thumbnailNavigation: false, skinsPath: './css/', navPrevNext: false, navButtons: true, responsive: true, responsiveUnder: 1400, sublayerContainer : 1100, skin: 'fullwidth', autoPauseSlideshow: true, showCircleTimer: true, globalBGColor: 'transparent', hoverPrevNext: false, navStartStop: false
    });
} else {
    $('#layerslider').layerSlider({
        thumbnailNavigation: false, skinsPath: './css/', navPrevNext: false, responsive: true, navButtons: true, responsiveUnder: 600, skin: 'fullwidth', autoPauseSlideshow: true, showCircleTimer: true, globalBGColor: 'transparent', hoverPrevNext: false, navStartStop: false
    });

}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

$(document).ready(function() {

    $('.header').scrollToFixed({offsets : true});

    // $('.menu').on('mouseenter mouseleave', '.dropdown', function (e) {
    //     var _d = $(e.target).closest('.dropdown');
    //     _d.addClass('show');
    //     setTimeout(function () {
    //         _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    //         $('[data-toggle="dropdown"]', _d).attr('aria-expanded', _d.is(':hover'));
    //     }, 0);
    // });

    $('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });


    jQuery(function ($) {
        "use strict";

        const counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

        const $counters = $(".counter-value");

        /* Start counting, do this on DOM ready or with Waypoints. */
        $counters.each(function (ignore, counter) {
            const waypoint = new Waypoint( {
                element: $(this),
                handler: function() {
                    counterUp(counter, {
                        duration: 1000,
                        delay: 16
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view'
            } );
        });

    });

    $('.btn-contraste').click(function() {
        $('body').toggleClass('contraste');
    });

    // Scroll Top
    // =============================
    $('.btn-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInQuad');
        return false;
    });


    $('.btn-search, .btn-fechar').click(function () {
        $(".overlay").slideToggle();
    });

    $('#responsive-menu-button').sidr({
        source: '#navigation',
        displace : false,
        side: 'right',
        onOpen: function () {
            $('.dark-overlay').addClass('d-block');
        },
        onClose: function () {
            $('.dark-overlay').removeClass('d-block');
        }
    });

    $('.sidr-button-close').click(function () {
        $.sidr('close', 'sidr');
    });

    // Fix input element click problem
    $('.dropdown input').click(function(e) {
        e.stopPropagation()
    });

    $(window).bind(
        'touchmove',
        function (e) {
            e.preventDefault();
        }
    );

       var $carousel = $('.flickity-agenda').flickity({
        contain: true,
        prevNextButtons: false,
        draggable: false,
        pageDots: false
    });

    $('.button-previous').on( 'click', function() {
        $carousel.flickity('previous');
    });
// next
    $('.button-next').on( 'click', function() {
        $carousel.flickity('next');
    });

    $('.carousel').carousel({
        pause: true,
        interval: false
    });


    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });

    $('[data-toggle="popover"]').popover({
        html: true
    });



});


