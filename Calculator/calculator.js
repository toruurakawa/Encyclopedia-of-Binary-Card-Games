
$(document).ready( function () {
	$(".card").click(function () {
		if ($(this).css("background-color") === "rgb(0, 0, 0)") {
			$(this).css("background-color", "white")
			console.log("DAFUQ")
		} else {
			$(this).css("background-color", "black");
		}
		calculate();
	});

	function calculate () {
		var counter = 0;
		
		for (var i = 0; i < $(".card").length; i++){
			if ($($(".card")[i]).css("background-color") === "rgb(0, 0, 0)") counter++;
		}

		$("#total").html("Total: " + counter + "(but not really)");
	}

});