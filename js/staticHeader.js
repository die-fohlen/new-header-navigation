$(document).ready(function(){
    function close2ndLevel() {
        $('.menu-item-toggle').prop('checked', false);
    }

    // close navigation when clicking outside of the menu
    $('.menu-bg').click(function () {
        // close main Menu
        if ($('input#menu-toggle').is(':checked')) {
            $('input#menu-toggle').prop('checked', false);
        }

        // Close Submenus
        if ($('.menu-item-toggle').is(':checked')) {
            close2ndLevel();
        }
    });

    // close 2nd level, when opening 1st level navigation
    $('.menu-item').click(function () {
        if($(this).closest('.primary-menu-item').find('.menu-item-toggle').prop('checked') === false) {
            $('.menu-item-toggle').prop('checked', false);
        }
    });

    $('.menu-btn').click(function () {
        if($('.menu-toggle').prop('checked') === true) {
            close2ndLevel();
        }
    });
})