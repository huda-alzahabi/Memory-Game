window.addEventListener("load", firstGeneration, false);
var random = 5; //initializing global variable random that'll be used later, generated randomly
var level_counter = 0; //counter to know which level the user is in
in_game = false; // to check if the game started or not
let user_clicks_array = []; //to save user clicks
let array_of_randoms = []; //to save the id of the generated div (save the pattern)

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
    level_counter++; //generating a new div means the user made it to the next level, so we increment the level
    user_clicks_array = []; //empty the user clicks since a new level started
    document.getElementById("press").innerHTML = "Level " + level_counter; //print current level
    random = getRandomInt(4); //generate a new random number then flash a div accordingly
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
    chooseDiv();

    //save user clicks in an array and play audios for each color according to its id and change the style of the pressed div
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
        //check if the user clicks are the same as the generated ones in the game and call the function that generates the div again, meaning the user has passed to the next level
        if (array_of_randoms.length == user_clicks_array.length)
            setTimeout(chooseDiv, 500);
    } else {
        //if the user didn't click correctly as the generated pattern, he loses, the game is over, and everything is reset
        document.getElementById("press").innerHTML =
            "Game Over! Press Any Key to Restart ";
        playAudio("wrong.mp3");
        document.body.style.backgroundColor = "red";
        setTimeout(function() {
            document.body.style.backgroundColor = "navy";
        }, 1000);
        level_counter = 0;
        in_game = false;
        array_of_randoms = [];
        user_clicks_array = [];
    }
}