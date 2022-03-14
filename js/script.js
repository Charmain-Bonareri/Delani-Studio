$(document).ready(function() {


  $("form#mc-embedded-subscribe-form").submit(function(event) {
  event.preventDefault();
    let name = $("input#mce-FNAME").val();
    let email = $("input#mce-EMAIL").val();
    let message = $("textarea").val();


   
  
  