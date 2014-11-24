$(function(){
	
	var _o_arr = new Array();
	
	var _y_arr = new Array();

	var selCnt = 0;
	var yourPoint;
	var oppPoint;
	var oScore = 0;
	var yScore = 0;
	var setNum = 0;
	init();
	function init(){	
		setScore();
		setOpponentCards();
		setYourCards();
		$("#setbt").click(function(){
			removeYours();
			//setYours();
			selOpps();
			var txt = "";
			if(oppPoint == yourPoint){
				txt = "===DRAW===";
			}
			if(oppPoint > yourPoint){
				if(oppPoint == 7 && yourPoint == 0){
					txt = "You WIN!!!!";
					yScore += 1;
				}else{
					txt = "You LOSE....";
					oScore += 1;
				}
			}
			if(oppPoint < yourPoint){
				if(oppPoint == 0 && yourPoint == 7){
					txt = "You LOSE....";
					oScore += 1;
				}else{
					txt = "You WIN!!!!";
					yScore += 1;
				}
			}
			alert("Opponent : " +oppPoint+"\n"+"You : " +yourPoint+"\n"+txt);
			$("#opponent").html("");
			$("#you").html("");
			setScore();
		});
	}
	function setScore(){
		
		$("#oPoint").text(oScore);
		$("#yPoint").text(yScore);
		setNum += 1;
		if(setNum == 6){
			if(oScore == yScore){
				alert("DRAWN GAME");
			}
			
			if(oScore > yScore){
				alert("YOU LOSE THE GAME....");
			}
			
			if(oScore < yScore){
				alert("YOU WIN THE GAME!!!!!!!");
			}
		}
	}
	function selOpps(){
		
		var _r_arr = new Array();
		for(var i=0; i<3; i++){
			var _ind = Math.floor(Math.random()*(_o_arr.length-0.01));
			_r_arr.push(_o_arr[_ind].col);
			_o_arr[_ind].card.css({
				"display":"none"
			});
			_o_arr.splice(_ind,1);
		}
		
		for(var i=0; i<3; i++){
			var card = $("<div>", {class: "ocards",id:"ocdf"+i});
			var col;
			if(_r_arr[i] == 1){
				col = "#000000";
			}else{
				col = "#FFFFFF";
			}
			card.css({
				"left": (40+10)*i+330,
				"background-color": col
			});
			$("#opponent").append(card);
		}
		oppPoint = 0;
		oppPoint += _r_arr[0]*4;
		oppPoint += _r_arr[1]*2;
		oppPoint += _r_arr[2]*1;
		//console.log(oppPoint);
	}
	function setYours(_arr){
		for(var i=0; i<3; i++){
			var card = $("<div>", {class: "ycards",id:"ycdf"+i});
			var col;
			if(_arr[i] == 1){
				col = "#000000";
			}else{
				col = "#FFFFFF";
			}
			card.css({
				"left": (40+10)*i+330,
				"background-color": col
			});
			$("#you").append(card);
		}
		yourPoint = 0;
		yourPoint += _arr[0]*4;
		yourPoint += _arr[1]*2;
		yourPoint += _arr[2]*1;
		//console.log(yourPoint);
	}
	function removeYours(){
		var _arr = new Array();
		for(var i=0; i<15; i++){
			if(_y_arr[i].sel == 1){
				_y_arr[i].card.css({
					"display": "none"
				});
				_y_arr[i].sel = 2;
				_arr.push(_y_arr[i].col);
			}
		}
		_arr = shuffle(_arr);
		console.log(_arr);
		selCnt = 0;
		setButton();
		setYours(_arr);
	}

	function shuffle(_arr){
		var _t_arr = new Array();
		for(var i=0; i<_arr.length; i++){
			_t_arr.push(_arr[i]);
		}
		var _r_arr = new Array();
		for(var i=0; i<_arr.length; i++){
			var _ind = Math.floor(Math.random()*(_t_arr.length-0.01));
			_r_arr.push(_t_arr[_ind]);
			_t_arr.splice(_ind,1);
		}
		return _r_arr;
	}
	function setOpponentCards(){
		for(var i=0; i<15; i++){
			var obj = new Object();
			var card = $("<div>", {class: "ocards",id:"ocd"+i});
			if(i<8){
				card.css({
					"left": (40+10)*i+30,
					"background-color": "#FFFFFF"
				});
				obj.col = 0;
			}else{
				card.css({
					"left": (40+10)*i+30,
					"background-color": "#000000"
				});
				obj.col = 1;
			}
			obj.card = card;
			$("#opponent_cards").append(card);
			_o_arr.push(obj);
		}
	}
	function setYourCards(){
		for(var i=0; i<15; i++){
			var obj = new Object();
			var card = $("<div>", {class: "ycards",id:"ycd"+i});
			if(i<8){
				card.css({
					"left": (40+10)*i+30,
					"background-color": "#FFFFFF"
				});
				obj.col = 0;
			}else{
				card.css({
					"left": (40+10)*i+30,
					"background-color": "#000000"
				});
				obj.col = 1;
			}
			card.click(function() {
				setCard($( this ));
			});
			obj.sel = 0;
			obj.card = card;
			$("#cards").append(card);
			_y_arr.push(obj);
		}
	}
	function setCard(elm){
		var num = Number(elm.attr("id").split("ycd")[1]);
		if(_y_arr[num].sel == 0 && selCnt<3){
			elm.css({
				"border-style": "solid",
				"border-width": 2,
				"border-color": "#0000FF"
			});
			_y_arr[num].sel = 1;
			selCnt += 1;
		}else{
			elm.css({
				"border-style": "solid",
				"border-width": 0,
				"border-color": "#0000FF"
			});
			_y_arr[num].sel = 0;
			selCnt -= 1;
		}
		setButton();
	}
	function setButton(){
		if(selCnt == 3){
			$("#setbt").css({
				"display": "block"
			});
		}else{
			$("#setbt").css({
				"display": "none"
			});
		}
	}
	$( window ).resize(function() {
		layoutInit();
	});
	function layoutInit(){
		var w = window.innerWidth;
		var h = window.innerHeight;

	}
	layoutInit();
});