function close2ndLevel() {
    $('.menu-item-toggle').prop('checked', false);
}

function setOverflowY(overflow) {
    $('body').css('overflow-y', overflow);
}

window.onpageshow = function(e){
    const menuToggle = $('input#menu-toggle')

    if (menuToggle.is(':checked')) {
        menuToggle.prop('checked', false);
    }

    close2ndLevel();
}

$(document).ready(function(){

    // close navigation when clicking outside the menu
    $('.menu-bg').click(function () {
        // close main Menu
        const menuToggle = $('input#menu-toggle')
        if (menuToggle.is(':checked')) {
            menuToggle.prop('checked', false);
            setOverflowY('auto');
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
        const menuToggleChecked = $('.menu-toggle').prop('checked')
        if(menuToggleChecked) {
            close2ndLevel();
            setTimeout(() => {
                $('#language-switch-toggle').prop('checked', false);
            }, 600); // close language switch after menu closing transition is done
        }
        if ($(window).width() < 767 && !menuToggleChecked) {
            setOverflowY('hidden');
        } else {
            setOverflowY('auto');
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.homepage-addition').css('margin-top', '-60px');
    } else {
        $('.homepage-addition').css('margin-top', '0');
    }
});