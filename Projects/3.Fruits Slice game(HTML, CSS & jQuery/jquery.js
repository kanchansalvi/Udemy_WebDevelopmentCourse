//Click StartReset button:
//	Is game ongoing?
//		Yes -> Continue the game
//		No -> Start the Game
//								Change button text to Reset
//								Set Score to 0
//        Show trials left

//Starting the Game
//		1) Generate the random Fruit
//		2) Move Fruit one step down at a time
//  3) Check if fruit is too low
//						Yes -> Check the hearts left
//											Yes -> Decrement heart by 1
//											No -> Show game over
//							No -> Continue from 2


//Fruit Sliced?
//	Yes -> Increment the score by 1
//								Play Music
//								Explode Fruit
// No -> Delete one heart
		

var playing = false;
var score = 0;
var	attemptsLeft = 3;
var fruits = ['apple', 'orange', 'banana', 'cherry', 'grape', 'mango', 'pear'];
$(function(){
	
	$("#startReset").click(function(){
			//	Is game ongoing?
			 if(playing == true){
//				Yes -> Continue the game
  					location.reload();
				} 
//			No -> Start the Game
//								Change button text to Reset
//								Set Score to 0
			else {
						playing = true;
						score = 0;
						$("#scorevalue").html("09");
//				Show trials left
				  $("#attemptsLeft").show();
						addHearts();
				  startAction();
				}
		});
});

$("#fruit").mouseover(function(){
				score++;
				$("#scorevalue").html(score);
//	
//	 //stop fruit     
	clearInterval(action); 
//	
	   $("#fruit").hide() ;
				setTimeout(startAction(), 500);
//	
});


function addHearts(){
	for(i=0; i<attemptsLeft; i++){
		$("#attemptsLeft").append('<img src="images/heart.png">  ');
	}
	
}

function startAction(){
//	$("#fruit").show();
	generateFruit();
	moveFruit();

}

function generateFruit(){
	// Get a random fruit
	$("#fruit").attr('src', 'images/' + fruits[Math.round(7*Math.random())] + '.png');
	
		// Show the fruit at random position
		$("#fruit").css({'left': Math.round(900*Math.random()), 'top': -60});
	$("#fruit").show();
	
	// Get random step for fruit to move down
	step = 1 + Math.round(5*Math.random());
}

function moveFruit(){
	// Move fruit down every 10 ms
	action = setInterval(function(){
	
	// Move fruit by 1 step
	$("#fruit").css({'top': $("#fruit").position().top+step});
		
		if($("#fruit").position().top > $("#fruitContainer").height()){
			
					if(attemptsLeft > 1){
						$("#fruit").show();
						generateFruit();
					}
		}
},10);
}