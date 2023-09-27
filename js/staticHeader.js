window.onpageshow = function(e){
    const menuToggle = $('input#menu-toggle')

    if (menuToggle.is(':checked')) {
        menuToggle.prop('checked', false);
    }

    $('.menu-item-toggle').prop('checked', false);
}

$(document).ready(function(){
    function close2ndLevel() {
        $('.menu-item-toggle').prop('checked', false);
    }

    // close navigation when clicking outside the menu
    $('.menu-bg').click(function () {
        // close main Menu
        const menuToggle = $('input#menu-toggle')
        if (menuToggle.is(':checked')) {
            menuToggle.prop('checked', false);
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
            setTimeout(() => {
                $('#language-switch-toggle').prop('checked', false);
            }, 600); // close language switch after menu closing transition is done
        }
    });
});