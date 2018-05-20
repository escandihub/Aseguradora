/*
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });  */

window.onload = function(){
    var http = XMLHttpRequest();

    $.ajax({
        type: "GET",
        url: 'http://localhost:8080//personal/login'
    })
}