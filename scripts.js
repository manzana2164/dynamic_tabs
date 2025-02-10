// scripts.js
jQuery(document).ready(function($) {
    $('.tab-link').on('click', function() {
        var tab = $(this).data('tab');

        // Remove active classes
        $('.tab-link').removeClass('active');
        $('.tab-content').removeClass('active');
        $('body').removeClass('bg-arquitectura bg-ingenieria bg-construccion');

        // Activate the selected tab
        $(this).addClass('active');
        $('#' + tab).addClass('active');

        // Change background based on the tab
        if (tab === 'tab1') {
            $('body').addClass('bg-arquitectura');
        } else if (tab === 'tab2') {
            $('body').addClass('bg-ingenieria');
        } else if (tab === 'tab3') {
            $('body').addClass('bg-construccion');
        }
    });
});