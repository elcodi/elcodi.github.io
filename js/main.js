$(document).ready(function() {

    /*
     * Basic config, default classes
     */
    var config = { header : '.header', carousel : '.carousel', collapse : 'collapse' }

    /*
     * Extract link according to this link is inside of carousel or not
     * params {jobject} $link : current encore
     */
    function getLinkId($link) {

        return $link.closest(config.carousel).length > 0 ? '#get_started' : $link.attr('href');
    }

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

        return $(config.header).removeClass(config.collapse);
    }

    /*
     * Restore header height and all its elements
     */
    function restoreHeader() {

        return $(config.header).addClass(config.collapse);
    }

    /*
     * Actions from click event of toSection links
     */
    function clickLink() {

        var $link = $('.toSection');

        $link.on('click', function (e) {
            e.preventDefault();

            var linkId = getLinkId($(this)),
                target = getTarget(linkId);

            smoothScroll(target);
        });
    }

    /*
     * Actions from scroll page event
     */
    function scrollPage() {

        var collapse = false,
            headerHeight = $(config.header).height();

        $(window).on('scroll', function () {

            $(window).scrollTop() < headerHeight ? collapseHeader() : restoreHeader();
        });
    }

    /*
     * Initialize carousel library
     * https://github.com/kenwheeler/slick/
     */
    function initCarousel() {

        return $(config.carousel).slick({
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