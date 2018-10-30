$(document).ready(function() {
  $(".needpad").css("opacity", "0");
  $("#maincontent").hide().show('slow', function() {
    $(".needpad").fadeTo("slow", 1.0);
  });
  console.log("Hi Simon");
});
