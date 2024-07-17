userClickedPattern=[userchoosenColor]
var buttonColours=["red","blue","green","yellow"]
var gamePattern=[]
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4) 
    

randomChosenColour=buttonColours[randomNumber]
gamePattern.push(randomChosenColour)
console.log(randomChosenColour)
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
$("document").on("click",function(handler){
    var userchoosenColor=push
})




// $("#"+randomChosenColour).on("click",function(){
//     $("#"+randomChosenColour).fadeOut().fadeIn()
//     makeSound(randomChosenColour)
    
//})

}
nextSequence()
// function makeSound(randomChosenColour){
//     switch (randomChosenColour) {
//         case ("blue"):
//             var blue=new Audio("sounds/blue.mp3")
//             blue.play()
//             break;
//         case("green"):
//             var green= new Audio("sounds/green.mp3")
//                 green.play()
//             break;
//         case("red"):
//             var red =new Audio("sounds/red.mp3")
//             red.play();
//             break;
//         case("yellow"):
//            var yellow=new Audio("sounds/blue.mp3")
//               yellow.play()
//               break;
//         default:
//             var wrong=new Audio("sounds/wrong.mp3")
//               wrong.play()
//             break;
//     }
// }
// nextSequence()
