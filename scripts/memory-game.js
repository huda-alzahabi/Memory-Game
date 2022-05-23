window.addEventListener("load", firstGeneration, false);
var random = 5; //initializing global variable random that'll be used later, generated randomly
var level_counter = 0;
var answer = true;
in_game = false;

//first level starts on any keypress
function firstGeneration() {
    document.addEventListener("keypress", startGame);
}

//function to generate random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//choose a div to flash based on the random number generated
function chooseDiv() {
    level_counter++;
    if (random == 0) {
        playAudio("green.mp3");
        var element = document.getElementById("0");
        element.style.backgroundColor = "black";
        flashColor("green");
    } else if (random == 1) {
        playAudio("red.mp3");
        var element = document.getElementById("1");
        flashColor("red");
    } else if (random == 2) {
        playAudio("yellow.mp3");
        var element = document.getElementById("2");
        flashColor("yellow");
    } else {
        playAudio("blue.mp3");
        var element = document.getElementById("3");
        flashColor("blue");
    }

    function flashColor(c) {
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = c;
        }, 250);
    }
}

function playAudio(a) {
    var audio = new Audio("../assets/sounds/" + a);
    audio.play();
}

//initializing empty arrays to compare the user clicks with the sequence of patterns that the game generated
var user_clicks_array = [];
var array_of_randoms = [];

function startGame() {
    in_game = true;
    random = getRandomInt(4);
    array_of_randoms.push(random); //generate a random number to flash a div and save its value in the array that we'll use to compare later
    chooseDiv(); //flash div based on random number generated
    document.removeEventListener("keypress", startGame);

    //save user clicks in an array and play audios for each color according to its id
    document.addEventListener(
        "click",
        function(e) {
            if (e.currentTarget.id == 0) playAudio("green.mp3");
            else if (e.currentTarget.id == 1) playAudio("red.mp3");
            else if (e.currentTarget.id == 2) playAudio("yellow.mp3");
            else playAudio("blue.mp3");
            user_clicks_array.push(e.currentTarget.id);

            //check the user's answer, if it's false end the game, if it's true go to the next level
            if (checkAnswer() == false) {
                document.getElementById("press").innerHTML = "Game Over";
            } else {
                user_clicks_array = [];
                startGame();
                //bede ontor luserclicks laysero add l array of randoms b3den b3mil choosediv jdede
                // if (user_clicks_array.length === array_of_randoms.length) choose_div();
            }
        },
        false
    );
}

function checkAnswer() {
    for (var i = 0; i < user_clicks_array.length; i++) {
        if (array_of_randoms[i] !== parseInt(user_clicks_array[i])) {
            answer = false;
        } else {
            answer = true;
        }
    }
    return answer;
}