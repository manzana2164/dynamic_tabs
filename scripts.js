// scripts.js
jQuery(document).ready(function($) {
    // Toggle view
    $('.view-toggle').on('click', function() {
        var view = $(this).data('view');
        $('.view-toggle').removeClass('active');
        $(this).addClass('active');
        $('.portfolio-posts').removeClass('grid-view list-view').addClass(view + '-view');
    });

    // Filter posts
    $('#category-filter, #year-filter, #place-filter').on('change', function() {
        filterPosts();
    });

    // Sort posts A-Z
    $('#sort-az').on('click', function() {
        sortPostsAZ();
    });

    function filterPosts() {
        var category = $('#category-filter').val();
        var year = $('#year-filter').val();
        var place = $('#place-filter').val();

        console.log('Filtering posts with:', { category, year, place });

        $('.post').each(function() {
            var postCategory = $(this).data('category');
            var postYear = $(this).data('year');
            var postPlace = $(this).data('place');

            console.log('Post data:', { postCategory, postYear, postPlace });

            if ((category === '' || category === postCategory) &&
                (year === '' || year == postYear) && // Ensure year comparison is correct
                (place === '' || place === postPlace)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    function sortPostsAZ() {
        var posts = $('.post').get();
        posts.sort(function(a, b) {
            var titleA = $(a).find('.post-title').text().toUpperCase();
            var titleB = $(b).find('.post-title').text().toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });
        $.each(posts, function(idx, post) {
            $('.portfolio-posts').append(post);
        });
    }

    // Pagination
    var itemsPerPage = 8; // Update to 8 items per page
    var currentPage = 1;

    function showPage(page) {
        var start = (page - 1) * itemsPerPage;
        var end = start + itemsPerPage;

        $('.post').hide().slice(start, end).show();
        $('#page-number').text(page);
    }

    $('#prev-page').on('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    $('#next-page').on('click', function() {
        if (currentPage * itemsPerPage < $('.post').length) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initial display
    showPage(currentPage);
});