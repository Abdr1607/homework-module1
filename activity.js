$(document).ready(function() {
    // Add a class to 'Not Available' cells to prevent them from being selected
    $('td:contains("Not Available")').addClass('not-available');

    // Add a hand pointer cursor to all selectable cells
    $('td:not(:first-child)').each(function() {
        if (!$(this).hasClass('not-available')) {
            $(this).css('cursor', 'pointer');
        }
    });

    // Toggle highlight class on click, ignoring the first column and 'Not Available' cells
    $('tbody tr td:not(:first-child)').click(function() {
        if (!$(this).hasClass('not-available')) {
            $(this).toggleClass('highlight');
        }
    });
});
