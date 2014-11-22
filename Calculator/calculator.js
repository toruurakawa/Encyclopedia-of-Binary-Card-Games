
$(document).ready( function () {


	$(".card").click(function () {
		if ($(this).hasClass("white")) {
			$(this).removeClass("white");
			$(this).addClass("black");
		} else {
			$(this).removeClass("black");
			$(this).addClass("white");
		}
		calculate();
	});

	function calculate () {
		var counter = 0;
		
		for (var i = 0; i < $(".card").length; i++){
			if ($($(".card")[i]).hasClass("black")) {
				counter += Math.pow(2, $($(".card")[i]).attr("data-slot"));
			}
		}

		$("#total").html(counter);
	}

	$("#total").click(function () {
		$(".card").removeClass("black");
		$(".card").addClass("white");
		$("#total").html(0);	
	});

});