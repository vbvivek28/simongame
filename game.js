var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var randomChosenColour;
var userClickedPattern=[];
var level;
var start=false;
 let userLevel;
//===============================================================

$(document).keypress(gameCheck);

function gameCheck(){
    if(!start){
        start=true;
        level=0;
        nextSequence();
        $(".btn").click(handler);  
        $(".btn").touch(handler);
    }
   
}

//=================================================================
 
function nextSequence(){
   userLevel=0;
    var randomNumber=Math.floor(Math.random()*4);
    
    randomChosenColour=buttonColours[randomNumber];

gamePattern.push(randomChosenColour);
console.log(level);
level=level+1;
$("h1").text("Level ".concat(level));
animatePress(randomChosenColour);
playSound(randomChosenColour);



}
//===================================================================

function handler(){
    var userChosenColor=this.id;
   
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer(level); 
}

//===========================================================================


function checkAnswer(level){
  var flag=0;
 if(userLevel<=(level-1))
 {

      if(gamePattern[userLevel]===userClickedPattern[userLevel])
      {
    userLevel+=1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  } 
      else{      
      gameover();
      flag=1;
     }
    
} 

 if(flag==0 && userLevel==level){
    userClickedPattern=[];
   setTimeout( nextSequence,1000);
   }

}
//============================================================================
function gameover(){
     var gameOverAudio=new Audio("sounds/wrong.mp3");
     gameOverAudio.play();
      $("body").addClass('game-over');
      setTimeout(function(){
        $("body").removeClass('game-over');  
      },200);
      $("h1").text("Game Over");
      $("div.btn").off("click").hide();
      $("h1").after("<button onclick='location.reload()'> Reload </button>");  
      $("button").addClass('rel');
}


//=============================================================================

function animatePress(name){
 $('#'.concat(name)).addClass('pressed');

setTimeout(function () { 
    $('#'.concat(name)).removeClass('pressed');
}, 100);
}

//========================================================================

function playSound(name){
switch(name){

    case 'red':var red=new Audio("sounds/red.mp3");
               red.play();
               break;
    case 'yellow':var yellow=new Audio("sounds/yellow.mp3");
               yellow.play();
               break;
     case 'green':var green=new Audio("sounds/green.mp3");
               green.play();
               break;
     case 'blue':var blue=new Audio("sounds/blue.mp3");
               blue.play();
               break;                            
} 
animatePress(name);
}


