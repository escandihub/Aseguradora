/*
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });  */
 $(document).ready(function() {

 $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: 'http://localhost:3000/personal/login',						
    success: function(data) {
        console.log('success');
        console.log(JSON.stringify(data));
    }
});
this.document.alert('hey bitch')
 }); 

 var jsonObject = JSON.parse(msg);
 