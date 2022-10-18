$(document).ready(function() {
    $("td").click(function() {
        var content = $(this).text();
        if(content != "Not Available") {
            if($(this).hasClass(tdhighlight)) {
                $('displaySelected').css("visibility", "visible");
                $('displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + content + "</p>");

            }
         else {
            $('#result p:contains('+content + ')').remove();
            if($("#result").has('p').length == false) {
                $('#displaySelected').css('visibility', 'hidden');
                $('displaySelected').css("margin-top", "0");
            }
            }
        }
    })
})