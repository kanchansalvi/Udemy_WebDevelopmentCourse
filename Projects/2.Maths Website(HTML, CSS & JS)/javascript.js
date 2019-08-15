var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

// When clicked on the start/Reset
document.getElementById("startreset").onclick = function(){
// If we are playing 
    if(playing == true){
        
        location.reload(); // Reload the page
    }
    // We are not playing
    else {
        // Set the playing mode to true
        playing = true;
        
        // Set the score to 0
        score = 0;
    /* Update the score value in the <span id="scorevalue">  element */  document.getElementById("scorevalue").innerHTML = score;
        
    /* Display the timer <div id="timeremaining"> . In styling, we set this as display: none. */
        document.getElementById("timeremaining").style.display = "block";
        
        // Set the timeremaining value to the start time
        timeremaining=10;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        // Hide gameover box
        hide("gameover");
        
    /* Change Button to reset game */
        document.getElementById("startreset").innerHTML = "Reset Game";
        
    // Start coutdown timer
        startCountdown();
        
        // Generate new Q&A
        generateQA();
        
    }
}

for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //Check if we are playing
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            // Increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML =  score;
            
            //Hide the wrong Box
            hide("wrong");
            show("correct");
            
            setTimeout(function(){
                hide("correct");
            }, 1000);
            
            // Generate new Q
            generateQA();
            
        } else {
            
            hide("correct");
            show("wrong");
            
            setTimeout(function(){
                hide("wrong");
            }, 1000);
            
        }
    }
}
}
    
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        // When the counter reaches to 0
        if(timeremaining == 0){
            stopCountdown();
            
            // Display the game over
            show("gameover");
            
            // Display the score
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " +score + ".</p>";
            
            // The game is over so hide the timer
           hide("timeremaining");
           hide("correct");
           hide("wrong");
           playing=false;
            
            document.getElementById("startreset").innerHTML = "Start Game";           
        }
}, 1000);
}

function stopCountdown(){
   clearInterval(action); 
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate Q and A
function generateQA(){
    
    // Create variables for the multiplication of the numbers. Assign random value to them from 1 - 10.
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    
    // Create a variable for the correct answer
    correctAnswer = x*y;
    
    /* Display the question in the Question Box */ 
    document.getElementById("question").innerHTML=x + "*" + y ;
    
    // Generate a random Box for the correct answer to be displayed.
    var correctPosition = Math.round(3*Math.random());
    
    document.getElementById("box" + correctPosition).innerHTML=correctAnswer;
    
    var answers = [correctAnswer];
    
    // Fill other boxes with the wrong answers generated randomly
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
             wrongAnswer = (1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random()));
            } while (answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
}