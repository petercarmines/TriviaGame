$(document).ready(function () {


    $("#start").one("click", function(){
        gameoptions.q1.writeq1 ()
        gameoptions.q1.question1 ();;
    });

var number=7;
var intervalId;
var rightAnswers = 0;
var wrongAnswers = 0;

function countDownq() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        clearInterval(intervalId);
    alert("Time's up!")
    }
}

function runq() {
    clearInterval(intervalId);
    intervalId = setInterval(countDownq, 1000);
  }

function countDownr () {
    number--;
    if (number === 0) {
        clearInterval(intervalId);
    }
}

function resetRight () {
    $("#a, #b, #c, #question, #timer").empty();
    rightAnswers = rightAnswers + 1;
    $("#right").html(rightAnswers);
    clearInterval(intervalId);

}


function runr() {
    clearInterval(intervalId);
    intervalId = setInterval(countDownr, 1000);
}


// question 2 function not running because of scope.


var gameoptions = {
    q1: {
        question: "What is my name?",
        choices: ["Pete", "Jeff", "Matt"],
        correctAnswer: "a",
        writeq1: function () {
            $("#question").text(gameoptions.q1.question);
            $("#a").text(gameoptions.q1.choices[0]);
            $("#b").text(gameoptions.q1.choices[1]);
            $("#c").text(gameoptions.q1.choices[2]);
            runq();
            },
        question1: function () {            
            $("#a").one('click', function(){
                    alert("RIGHT");
                    setTimeout(gameoptions.q2.writeq2, 3000);
                    gameoptions.q2.question2 ();
                    resetRight();   
                }, 
                $("#b, #c").one('click', function() {
                    alert("WRONG");
                    wrongAnswers = wrongAnswers + 1;
                }
            
                }
            },
    q2: {
        question: "What is my age?",
        choices: ["26", "23", "28"],
        correctAnswer: "b",
        writeq2: function () {
            $("#question").text(gameoptions.q2.question);
            $("#a").text(gameoptions.q2.choices[0]);
            $("#b").text(gameoptions.q2.choices[1]);
            $("#c").text(gameoptions.q2.choices[2]);
            runq();
            },
        question2: function () {
             $("#a, #b, #c").on('click', function(){
                value = $(this).attr('name');
                if (value === "b") {
                    alert("RIGHT");
                    setTimeout(gameoptions.q3.writeq3, 3000);
                    resetRight();
                } else if (value != gameoptions.q2.correctAnswer){
                    alert("WRONG");
                    wrongAnswers = wrongAnswers + 1;
                    }; 
            })

            }
        },

        q3: {
            question: "How much do I love programming?",
            choices: ["not at all", "it's okay", "I love it!!"],
            correctAnswer: "c",
            writeq3: function () {
                $("#question").text(gameoptions.q3.question);
                $("#a").text(gameoptions.q3.choices[0]);
                $("#b").text(gameoptions.q3.choices[1]);
                $("#c").text(gameoptions.q3.choices[2]);
                },
            question3: function () {            
                 $("#a, #b, #c").on('click', function(){
                    value = $(this).attr('name');
                    if (value === gameoptions.q3.correctAnswer) {
                        alert("RIGHT");
                        setTimeout(gameoptions.q3.writeq3, 3000);
                        resetRight();
                    } else if (value != gameoptions.q3.correctAnswer){
                        alert("WRONG");
                        wrongAnswers = wrongAnswers + 1;
                        }; 
                })
    
                }
            }
    }


    
      













})
