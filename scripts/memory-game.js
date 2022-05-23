window.addEventListener("load", firstGeneration, false);
var random = 5; //initializing global variable random that'll be used later, generated randomly
var level_counter = 0;
in_game = false;
let user_clicks_array = [];
let array_of_randoms = [];
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
    user_clicks_array = [];
    document.getElementById("press").innerHTML = "Level " + level_counter;
    random = getRandomInt(4);
    array_of_randoms.push(random);
    if (random == 0) {
        playAudio("green.mp3");
        var element = document.getElementById("0");
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

function startGame() {
    document.getElementById("press").innerHTML = "Level " + level_counter;
    in_game = true;
    //generate a random number to flash a div and save its value in the array that we'll use to compare later
    chooseDiv(); //flash div based on random number generated
    document.removeEventListener("keypress", startGame);

    //save user clicks in an array and play audios for each color according to its id
    document.addEventListener(
        "click",
        function(e) {
            if (e.target.id == 0) {
                playAudio("green.mp3");
                e.target.style.backgroundColor = "grey";
                setTimeout(function() {
                    e.target.style.backgroundColor = "green";
                }, 250);
            } else if (e.target.id == 1) {
                playAudio("red.mp3");
                e.target.style.backgroundColor = "grey";
                setTimeout(function() {
                    e.target.style.backgroundColor = "red";
                }, 250);
            } else if (e.target.id == 2) {
                playAudio("yellow.mp3");
                e.target.style.backgroundColor = "grey";
                setTimeout(function() {
                    e.target.style.backgroundColor = "yellow";
                }, 250);
            } else {
                playAudio("blue.mp3");
                e.target.style.backgroundColor = "grey";
                setTimeout(function() {
                    e.target.style.backgroundColor = "blue";
                }, 250);
            }
            user_clicks_array.push(e.target.id);
            checkAnswer(user_clicks_array.length - 1);
        },
        false
    );
}

function checkAnswer(i) {
    if (array_of_randoms[i] == user_clicks_array[i]) {
        if (array_of_randoms.length == user_clicks_array.length)
            setTimeout(chooseDiv, 500);
    } else {
        document.getElementById("press").innerHTML = "Game Over";
        playAudio("wrong.mp3");
        setTimeout(function() {
            document.body.style.backgroundColor = "red";
        }, 1000);
        level_counter = 0;
        in_game = false;
        array_of_randoms = [];
        user_clicks_array = [];
    }
}