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

        return $('html, body').animate({ scrollTop: target }, 500);
    }

    /*
     * Actions from click event on link navigator dom element
     */
    function clickLink() {

        var $headerLinks = $('.list_navigator').find('a');

        $headerLinks.on('click', function (e) {
            e.preventDefault();

            var linkId = $(this).attr('href'),
                target = getTarget(linkId);

            smoothScroll(target);
        });
    }

    /*
     * List of methods to initialize web app
     */
    function initWebsite() {

        clickLink();
    }

    initWebsite();
});