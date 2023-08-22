
if (window.matchMedia("(min-width: 769px)").matches) {
    $('#layerslider').layerSlider({
        thumbnailNavigation: false, skinsPath: './css/', navPrevNext: true, responsive: false, responsiveUnder: 1400, sublayerContainer : 1100, skin: 'fullwidth', autoPauseSlideshow: true, showCircleTimer: true, globalBGColor: 'transparent', hoverPrevNext: false, navStartStop: false, cbInit: function (element) { }, cbStart: function (data) { }, cbStop: function (data) { }, cbPause: function (data) { }, cbAnimStart: function (data) { }, cbAnimStop: function (data) { }, cbPrev: function (data) { }, cbNext: function (data) { }
    });
    //Menu Adaptação
    $('.menu').on('mouseover', function () {
        $('.menu').addClass('in');
    });
    $('.menu').on('mouseout', function () {
        $('.menu').removeClass('in');
    });
} else {
    $('#layerslider').layerSlider({
        thumbnailNavigation: false, skinsPath: './css/', navPrevNext: true, responsive: false, responsiveUnder: 600, skin: 'fullwidth', autoPauseSlideshow: true, showCircleTimer: true, globalBGColor: 'transparent', hoverPrevNext: false, navStartStop: false, cbInit: function (element) { }, cbStart: function (data) { }, cbStop: function (data) { }, cbPause: function (data) { }, cbAnimStart: function (data) { }, cbAnimStop: function (data) { }, cbPrev: function (data) { }, cbNext: function (data) { }
    });

    $('.responsive-menu-button').sidr({
        source: '#navigation',
        side: 'right'
    });

    $('.sidr-button-close').click(function () {
        $.sidr('close', 'sidr');
    });


}


$(document).ready(function() {

    $('.header').scrollToFixed();



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

    // Scroll Top
    // =============================
    $('.btn-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInQuad');
        return false;
    });


    $('.btn-cotraste').click(function() {
        $('body').toggleClass('contraste');
    });

    // 1st carousel, main
    const $carouselHistorico = $('.carousel-conteudo').flickity({
        contain: true,
        pageDots: false,
        draggable: false,
        adaptiveHeight: true,
        prevNextButtons: false
    });

    $('.historico-previous').on( 'click', function() {
        $carouselHistorico.flickity('previous');
    });
    $('.historico-next').on( 'click', function() {
        $carouselHistorico.flickity('next');
    });
    // 2nd carousel, navigation
    $('.carousel-anos').flickity({
        asNavFor: '.carousel-conteudo',
        contain: true,
        pageDots: false,
        prevNextButtons: false
    });


    const $carouselCentral = $('.carousel-central').flickity({
        contain: true,
        pageDots: false,
        draggable: false,
        prevNextButtons: false,
        adaptiveHeight: true

    });

    $('.central-previous').on( 'click', function() {
        $carouselCentral.flickity('previous');
    });
    $('.central-next').on( 'click', function() {
        $carouselCentral.flickity('next');
    });


    $('.carousel').carousel({
        pause: true,
        interval: false
    });


    $('[data-toggle="tooltip"]').tooltip({
        html: true,
        container: 'body'
    });

    $('[data-toggle="popover"]').popover({
        html: true
    });




});
