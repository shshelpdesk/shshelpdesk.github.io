$(document).ready(function() {
	$.getJSON('test\test.json', function(data) {         
		console.log(data+"please no");
	});
  $(".needpad").css("opacity", "0");
  $("#maincontent").hide().show('slow', function() {
    $(".needpad").fadeTo("slow", 1.0);
  });
});

function showSolutions() {
	$(".needpad").fadeTo("slow", 0.0, function() {
		$("#maincontent").hide("slow");
	});
}

function showMain() {
	$(".needpad").fadeTo("slow", 0.0, function() {
		$("#maincontent").hide("slow");
	});
}

