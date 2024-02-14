/*$(document).ready(function() {
    // Add a class to 'Not Available' cells to prevent them from being selected
    $('td').filter(function() {
        return $(this).text() === 'Not Available';
    }).addClass('not-available');

    // Add click event to all table cells except for the first column and 'Not Available' cells
    $('tbody tr td:not(:first-child)').not('.not-available').click(function() {
        $(this).toggleClass('highlight');
        updateDisplay();
    });

    // Function to update the display box
    function updateDisplay() {
        var selectedActivities = [];
        // Get all highlighted activities and push them to the array
        $('.highlight').each(function() {
            selectedActivities.push($(this).text());
        });
        // Check if we have selected activities to display
        if (selectedActivities.length > 0) {
            $('#result').empty().append('<h4>My selected activities to enquire:</h4>');
            $.each(selectedActivities, function(i, activity) {
                $('#result').append($('<div>').text(activity));
            });
            $('#displaySelected').css('visibility', 'visible');
        } else {
            $('#displaySelected').css('visibility', 'hidden');
        }
    }
});*/

$(document).ready(function() {
    // Function to update the display box
    function updateDisplay() {
        var selectedActivities = [];
        // Get all highlighted activities and push them to the array with their respective cliff site
        $('.highlight').each(function() {
            var columnIndex = $(this).index(); // Subtract 1 to account for the first 'Activity' column
            var cliffSite = $('th').eq(columnIndex).text(); // Get the cliff site name based on column index
            var activityName = $(this).text();
            selectedActivities.push(activityName + " at " + cliffSite);
        });
        // Check if we have selected activities to display
        if (selectedActivities.length > 0) {
            $('#result').empty().append('<h4>My selected activities to enquire:</h4>');
            $.each(selectedActivities, function(i, activity) {
                $('#result').append($('<div>').text(activity));
            });
            $('#displaySelected').css('visibility', 'visible');
        } else {
            $('#displaySelected').css('visibility', 'hidden');
        }
    }

    // Add click event to all table cells except for the first column and 'Not Available' cells
    $('tbody tr td:not(:first-child)').not('.not-available').click(function() {
        if (!$(this).hasClass('not-available')) {
            $(this).toggleClass('highlight');
            updateDisplay();
        }
    });
});



