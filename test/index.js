$(document).ready(function() {
	$.getJSON('test.json', function(data) {         
		for (var i = 0; i < data.length; i++) { 
		    	console.log(data[i]);
		}
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

