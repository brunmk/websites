
if (window.matchMedia("(min-width: 768px)").matches) {
    $('#layerslider').layerSlider({
        thumbnailNavigation: false, skinsPath: './css/', navPrevNext: true, navButtons: false, responsive: true, responsiveUnder: 1400, sublayerContainer : 1100, skin: 'fullwidth', autoPauseSlideshow: true, showCircleTimer: true, globalBGColor: 'transparent', hoverPrevNext: false, navStartStop: false
    });
    $('.menu-map .collapse').addClass('show');
    //Menu Adaptação
    $('.menu li.dropdown').on('mouseover', function () {
        $('.menu li .dropdown-menu').addClass('d-block');
    });
    $('.menu li').on('mouseout', function () {
        $('.menu li .dropdown-menu').removeClass('d-block');
    });
} else {
    $('#layerslider').layerSlider({
        thumbnailNavigation: false, skinsPath: './css/', navPrevNext: false, responsive: true, navButtons: false, responsiveUnder: 600, skin: 'fullwidth', autoPauseSlideshow: true, showCircleTimer: true, globalBGColor: 'transparent', hoverPrevNext: false, navStartStop: false
    });

}



$(document).ready(function() {

    $('.btn-contraste').click(function() {
        $('body').toggleClass('contraste');
        $('.btn-secondary').toggleClass('btn-white');
        $('.btn-outline-primary').toggleClass('btn-outline-white');
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

    $(' .header').scrollToFixed();

    $(' .barra-cotacao').scrollToFixed({
        bottom: 0
    });




    $('.carousel-central').flickity({
        contain: true,
        pageDots: false,
        draggable: false,
        adaptiveHeight: true,
        prevNextButtons: false,
        lazyLoad: true

    });

    $('.carousel-central-nav').flickity({
        asNavFor: '.carousel-central',
        contain: true,
        pageDots: false,
        prevNextButtons: false
    });

    var $carousel = $('.flickity-agenda').flickity({
        contain: true,
        prevNextButtons: false,
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


