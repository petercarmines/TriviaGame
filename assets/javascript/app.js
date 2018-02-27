var number=10;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;

var questions = ["What is my name?", "What is my age?", "How much do I love programming?"]
var choices = ["Pete", "Jeff", "Matt", "28", "25", "27", "a little","it's okay", "i love it!!"]
var correctAnswer = ["a", "b", "c"]

function write() {
    number=10;
    $("#timer").html("Question Timer: " + number);
    $("#question").html(questions[0]);
    $("#a").text(choices[0]);
    $("#b").text(choices[1]);
    $("#c").text(choices[2]);
    $("#message, #right, #wrong").empty();
    if (questions.length >= 1) {
    runq();
    } else {
    results();
    }
}

function results () {
    $("#right").html("Correct Answers: " + rightAnswers);
    $("#message").html("That's all for now! Here's how you did:");
    $("#wrong").html("Incorrect Answers: " + wrongAnswers);
    $("#timer").empty();
}

function checker () {            
    $("#a, #b, #c").on('click', function(){
        value = $(this).attr('name');
            if (value === correctAnswer[0]) {
                rightAnswers = rightAnswers + 1;
                resetQ(); 
                $("#message").html("That's right!");
            } else {
                wrongAnswers = wrongAnswers + 1;
                resetQ(); 
                $("#message").html("Sorry! That is Incorrect!");
            }              
    })
}
      
function resetQ () {
    $("#a, #b, #c, #question, #timer, #right, #wrong").empty();
    clearInterval(intervalId);
    questions.shift(0);
    choices.splice(0, 3);
    correctAnswer.shift(0);
    setTimeout(write, 3000);
} 
            
function countDownq() {
    number--;
    $("#timer").html("Question Timer: " + number);
        if (number === 0) {
            clearInterval(intervalId);
            wrongAnswers = wrongAnswers + 1;
            alert("Outta time!")
            resetQ();
        }
}
                
function runq() {
    clearInterval(intervalId);
    intervalId = setInterval(countDownq, 1000);
}
                   
$(document).ready(function () {
    $("#start").on("click", function(){
        $("#start").remove();
        write ();
        checker ();
    });          
});
         


