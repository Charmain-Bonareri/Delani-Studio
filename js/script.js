$(document).ready(function() {


  $("form#mc-embedded-subscribe-form").submit(function(event) {
  event.preventDefault();
    let name = $("input#mce-FNAME").val();
    let email = $("input#mce-EMAIL").val();
    let message = $("textarea").val();


   
    if ( name && email && message){
      alert (`Hi ${name} we have received your message. Thank you for reaching out to us.`);
  }
else {
  alert("Please enter your name and email!");
    }
});
  
let cardTotalNumber =(
  $(".card").toArray().length
);


