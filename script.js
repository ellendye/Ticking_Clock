//VARIABLES NEEDED TO MOVE HANDS
var secondsHand = document.querySelector("#seconds");
var minutesHand = document.querySelector("#minutes");
var hourHand = document.querySelector("#hour");

//CURRENT TIME
function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

//INTERVAL FUNCTION
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    rotateHands()
}, 1000);

//FUNCTION TO ROTATE HANDS
function rotateHands(){
    secondsHand.style.transform = "rotate(" + (360/60 * (new Date().getSeconds()) + 180) + "deg)";
    minutesHand.style.transform = "rotate(" + (360/60 * (new Date().getMinutes()) + 180) + "deg)";
    hourHand.style.transform = "rotate(" + (360/12 * (new Date().getHours()) + 180) + "deg)";
}

