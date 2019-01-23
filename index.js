


var entHeight = 332
var entryNum=0;
var ip2=0;
var canSwitch = true;
var skeleton = `
<div id="PLCHOLDID" class="jumbotron jumbotron-fluid entryP">
	<div class="textin">
		<h1 class="display-4">PLCHOLDTITLE</h1>
		<p>PLCHOLDBODY</p>
	</div>
</div>
`;
var newStr;




$(document).ready(function() {
	$("#mainpicture").height(Math.round(entHeight*0.55));
  	$(".needpad").css("opacity", "0");
  	$(".textin").css("opacity", "0");
  	$("#maincontent").hide().show('slow', function() {
  	$(".needpad").fadeTo("slow", 1.0);
 	});
	$.getJSON('entries.json', function(data) {
		for(var i in data) {
			newStr = skeleton;
			newStr = newStr.replace("PLCHOLDTITLE", (data[i]["title"]));
			newStr = newStr.replace("PLCHOLDBODY", (data[i]["body"]));
			newStr = newStr.replace("PLCHOLDID", ("newsEnt"+entryNum.toString()));
			entryNum += 1;
			$("#allcontain").append(newStr);
		}
	});


});




function showSolutions() {
	$(".textin").css("opacity", "0");
	$(".needpad").fadeTo("slow", 0.0, function() {
		$("#maincontent").hide("slow", function() {
			$("#allcontain").slideDown("slow", function() {
				$(".textin").fadeTo("slow", 1.0);
			});
		});
	});
}

function showMain() {
	$(".needpad").css("opacity", "0");
	$(".textin").fadeTo("slow", 0.0, function() {
		$("#allcontain").slideUp("slow", function(){
			$("#maincontent").show("slow", function() {
				$(".needpad").fadeTo("slow", 1.0);
			});
		});
	});
}
