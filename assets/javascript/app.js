

// when click "start", to the new screen and 
//the timer start count from 30s
// screen show the question and answer choise
// when click the choice button OR the time out, show the  timer stop
//if answer is correct, show on on the screen "correct" and  play the vido for 30s
//if wrong show "Nope!!" "the correct answer is xxx" and play the vido for 30s
//then go to next question(loop 6)

//when to the end, show the Timer Remainging; All done, her how you did
// correct Answer  
//Incorrect answer
//Unanswerd 
//restart 
var intervalId;
var time = 5;
var correctNum = 0;
var incorrectNum = 0;
var unanwerNum = 0;
var i;
var checkAnswer;
var windowTimeout;
var clockRuning = false;


var myquestions = [
    {
        title: "What was the first full length CGI movie?",
        choices: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
        answer: "2",
        image: "assets/images/q1.gif"
    },

    {
        title: "Who is the king of Arendelle in movie Frozeen",
        choices: ["Elsa", "Anna", "Kristoff", "Olaf"],
        answer: "0",
        image: "assets/images/q2.gif"
    },

    {
        title: "which is the only Disney Princess that has a child?",
        choices: ["Elsa", "Ariel", "Snowwhite", "Anna"],
        answer: "1",
        image: "assets/images/q3.gif"
    },

    {
        title: "Hamburgers get the name from which county?",
        choices: ["Germany", "France", "American", "Russia"],
        answer: "0",
        image: "assets/images/q4.gif"
    },

    {
        title: "Which bird has eyes that are larger than its brain?",
        choices: ["Sparrow", "Eagl", "Parrot", "Ostrich"],
        answer: "3",
        image: "assets/images/q5.gif"
    },

    {
        title: "What is the only mammal born with horns?",
        choices: ["Bear", "Giraffee", "Tiger", "Lion"],
        answer: "1",
        image: "assets/images/q6.gif"
    }]

// page one shows
$(".pageTwo").hide();
$(".pageThree").hide();
$(".pageFour").hide();

$(".startButton").on("click", function () {
    i = 0;
    page2();
});


function page2() {
    time = 30;
    intervalId = setInterval(count, 1000);
    // console.log(intervalId + " set");

    $("#start").hide();
    $("#timer").show();
    $(".pageTwo").show();
    $(".pageThree").hide();
    $(".pageFour").hide();
    $("#question").text(myquestions[i].title);
    $("#one").text(myquestions[i].choices[0]);
    $("#two").text(myquestions[i].choices[1]);
    $("#three").text(myquestions[i].choices[2]);
    $("#four").text(myquestions[i].choices[3]);
    $("#timer").text("Time Remaining: " + time + " Seconds");
}
function count() {
    time--;
    $("#timer").text("Time Remaining: " + time + " Seconds");
    if (time === 0) {
        stop();
    }
};

function stop() {
    clearInterval(intervalId);
    // console.log(intervalId + " clear");
    // clockRunning = false;
    page3();
}

$(".chosedAnswer").on("click", function () {
    checkAnswer = $(this).val();
    console.log("116 selected: " + checkAnswer)
    stop();
    //page3();
});
//show page3 hide page2
//show text"correct" OR "Nope"+ the correct answer is 
// display the img for 5s
//check i, if i ,5,then load page 2, else load page 4
function page3() {
    $("#start").hide();
    $(".pageTwo").hide();
    $(".pageFour").hide();
    $(".pageThree").show();
    console.log("i: "+ myquestions[i].choices[parseInt(myquestions[i].answer)]);
    if (checkAnswer === myquestions[i].answer) {
        correctNum++;
        $("#result").text("Correct!")
    } else if (time === 0) {
        unanwerNum++;
        $("#result").text("Time is up!");
    } else {
        incorrectNum++;
        $("#result").text("Nope!")
    }

    $("#correctIs").text("The correct answer is: " + myquestions[i].choices[parseInt(myquestions[i].answer)]);
    $(".image").attr("src", myquestions[i].image);

    console.log("140 answer: " + parseInt(myquestions[i].answer))
    if (i < 5) {
        i++;
        windowTimeout = setTimeout(page2, 5000);
    }
    else {
        windowTimeout = setTimeout(page4, 5000);
    }
}

function page4() {
    $("#start").hide();
    $(".pageTwo").hide();
    $(".pageThree").hide();
    $(".pageFour").show();
    $("#summary").text("All done, here how you did!");
    $("#sum1").text("Correct Answers: " + correctNum);
    $("#sum2").text("InCorrect Answers: " + incorrectNum);
    $("#sum3").text("UnAnswered: " + unanwerNum);
}