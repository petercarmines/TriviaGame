/* main javascript object that contains functions and data for game to execute */

/* numerical variables that hold right/wrong answers & data for timer */
var game = { 
    variables: {
        number: 15,
        intervalId: 0,
        rightAnswers: 0,
        wrongAnswers: 0,
    }, 
    /* variables to hold questions, choices, and correct answers */
    qData: { 
        questions: [
            "Which U.S. president, born in 1917, founded the Peace Corp through executive order?", 
            "Nelson Rockefeller served as the vice-president under which U.S. president?", 
            "Thomas Jefferson was elected president as a member of which political party?",
            "What state was U.S. president Harry S. Truman born in?",
            "Which quote is famously attributed to Franklin D. Roosevelt?",
            "Which U.S. president was the oldest to take office on their first inaguration date?",
            "What city was U.S. president William McKinley assasinated in?",
            "Which first lady would go on to serve as a U.S. delegate to the U.N. General Assembly?",
            "During what years was Martin Van Buren a U.S. president?",
            "Who was the first U.S. president to visit Laos while in office?"],
            choices:
            ["Richard Nixon", "John F. Kennedy", "Jimmy Carter", "Lyndon B. Johnson",
            "Gerald Ford", "Lyndon B. Johnson", "Harry S. Truman", "Dwight D. Eisenhower", 
            "Whig", "Democratic-Republican", "Federalist", "Republican",
            "Texas", "Ohio", "Missouri", "Iowa",
            '"I walk slowly, but I never walk backward."',
            '"The only thing we have to fear is fear itself."', '"Read my lips. No new taxes."', 
            '"Speak softly and carry a big stick."', "Ronald Reagan", "Dwight D. Eisenhower", "George H.W. Bush", "Donald J. Trump",
            "Washington D.C.", "Cleveland, OH", "New York City", "Buffalo, NY", "Eleanor Roosevelt", "Hillary Clinton", "Nancy Reagan", 
            "Barbara Bush", "1837-1841", "1841-1845", "1833-1837", "1845-1849", "Bill Clinton", "George W. Bush", "Barack Obama", 
            "George H.W. Bush",
             ],
            correctAnswers: ["1", "0", "1", "2", "1", "3", "3", "0", "0", "2"]
    },
    /* functions that make the countdown feature work */
    qTime: { 
        countDownq: function() {
            game.variables.number--;
            $("#timer").html("Question Timer: " + game.variables.number);
            var answer = parseInt(game.qData.correctAnswers[0]);
                if (game.variables.number === 0) {
                    clearInterval(game.variables.intervalId);
                    game.variables.wrongAnswers =  game.variables.wrongAnswers + 1;
                    $("#message").html("Time's up!");
                    $("#correct").html("The correct answer was: " + "<br>" +  game.qData.choices[answer]);
                    game.qWork.reset();
                }
            },
        runq: function () {
            clearInterval(game.variables.intervalId);
            game.variables.intervalId = setInterval(game.qTime.countDownq, 1000);
                },
        },
    /* functions that: write questions, check answers, reset the question once answered, and show end of game results*/
    qWork: { 
        write: function() {
            game.variables.number=15;
            $("#timer").html("Question Timer: " + game.variables.number);
            $("#question").html(game.qData.questions[0]);
            $("#a").text(game.qData.choices[0]);
            $("#b").text(game.qData.choices[1]);
            $("#c").text(game.qData.choices[2]);
            $("#d").text(game.qData.choices[3]);
            $("#message, #right, #correct, #wrong").empty();
            if (game.qData.questions.length >= 1) {
            game.qTime.runq();
            } else {
            game.qWork.results();
            }
        },
        checker: function () {            
            $("#a, #b, #c, #d").on('click', function(){
                var answer = parseInt(game.qData.correctAnswers[0]);
                var value = $(this).attr('name');
                    if (value === game.qData.correctAnswers[0]) {
                        game.variables.rightAnswers = game.variables.rightAnswers + 1;
                        game.qWork.reset(); 
                        $("#message").html("That's right!");
                    } else {
                        game.variables.wrongAnswers = game.variables.wrongAnswers + 1;
                        $("#message").html("Sorry! That is Incorrect!");
                        $("#correct").html("The correct answer was: " + "<br>" + game.qData.choices[answer]);
                        game.qWork.reset(); 
                    }              
            });
        },
        reset: function () {
            $("#a, #b, #c, #d, #question, #timer, #right, #wrong").empty();
            clearInterval(game.variables.intervalId);
            game.qData.questions.shift(0);
            game.qData.correctAnswers.shift(0);
            game.qData.choices.splice(0, 4);
            setTimeout(game.qWork.write, 3000);
        }, 
        results: function () {
            $("#right").html("Correct Answers: " + game.variables.rightAnswers);
            $("#message").html("That's all for now! Here's how you did:");
            $("#wrong").html("Incorrect Answers: " + game.variables.wrongAnswers);
            $("#timer, #correct").empty();
        }
    }

};

/* Starts game when user clicks the start button & runs predefined functions that make the game work */
$(document).ready(function () {
    $("#start").on("click", function(){
        $("#start").remove();
        game.qWork.write ();
        game.qWork.checker ();
    });      
});
         