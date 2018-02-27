$(document).ready(function() {


number=7;
var intervalId;

var rightAnswers = 0;
var wrongAnswers = 0;

function countDown() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
    clearInterval(intervalId);
    alert("Time's up!")
    }
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
  }

if($('#correct1').is(':checked')) { 
    rightAnswers = rightAnswers + 1; }

run();



$('#submit').click(function() {
   clearInterval(intervalId);
   $("#wins").html(rightAnswers);

    })

})


   
