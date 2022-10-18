$("td").click(function(){
    $("td.selected").removeClass("selected");
    $(this).addClass("selected");
});