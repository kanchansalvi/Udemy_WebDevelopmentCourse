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
$(function)(){
	
		$("#startReset").click(function(){
			//	Is game ongoing?
			 if(playing == true){
//				Yes -> Continue the game
  					location.reload();
//				} 
//			No -> Start the Game
//								Change button text to Reset
//								Set Score to 0
			else {
						playing = true;
						score = 0;
						$("#scorevalue").html("09");
//				Show trials left
				$("#attemptsLeft").show();
				var	attemptsLeft = 3;
				addHearts();
				}
		});
}

function addHearts(){
	for(i=0; i<trialsLeft; i++){
		$("#trialsLeft").append(" X ");
	}
	
}