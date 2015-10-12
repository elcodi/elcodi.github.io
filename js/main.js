$(document).ready(function() {

    /*
     * Calculate target position from link id
     * params {string} id : link id
     */
    function getTarget(id) {

        return (id === '#home') ? 0 : $(id).offset().top;
    }

    /*
     * Go to a position with and smooth movement effect
     * params {integer} target : position to go
     */
    function smoothScroll(target) {

        return $('html, body').animate({ scrollTop: target - 72 }, 500);
    }

    /*
     * Reduce header height and all its elements
     */
    function collapseHeader() {

        return $('.header').removeClass('collapse');
    }

    /*
     * Restore header height and all its elements
     */
    function restoreHeader() {

        return $('.header').addClass('collapse');
    }

    /*
     * Actions from click event on link navigator dom element
     */
    function clickLink() {

        var $link = $('.toSection');

        $link.on('click', function (e) {
            e.preventDefault();

            var linkId = $(this).attr('href'),
                target = getTarget(linkId);

            smoothScroll(target);
        });
    }

    /*
     * Actions from scroll page event
     */
    function scrollPage() {

        var collapse = false,
            headerHeight = $('.header').height();

        $(window).on('scroll', function () {

            $(window).scrollTop() < headerHeight ? collapseHeader() : restoreHeader();
        });
    }

    /*
     * Initialize carousel library
     * https://github.com/kenwheeler/slick/
     */
    function initCarousel() {

        return $('.carousel').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }

    /*
     * List of methods to initialize web app
     */
    function initWebsite() {

        if ($(window).width() > 600) { scrollPage(); }
        clickLink();
        initCarousel();
    }

    initWebsite();
});