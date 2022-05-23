window.addEventListener("load", first_generation, false);
var random = 5;
var level_counter = 0;
var answer = true;

function first_generation() {
    document.addEventListener("keypress", start_game);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function choose_div() {
    level_counter++;
    if (random == 0) {
        play_audio("green.mp3");
        var element = document.getElementById("0");
        element.style.backgroundColor = "black";
        flash_color("green");
    } else if (random == 1) {
        play_audio("red.mp3");
        var element = document.getElementById("1");
        flash_color("red");
    } else if (random == 2) {
        play_audio("yellow.mp3");
        var element = document.getElementById("2");
        flash_color("yellow");
    } else {
        play_audio("blue.mp3");
        var element = document.getElementById("3");
        flash_color("blue");
    }

    function flash_color(c) {
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = c;
        }, 250);
    }
}

function play_audio(a) {
    var audio = new Audio("../assets/sounds/" + a);
    audio.play();
}
var user_clicks_array = [];
var array_of_randoms = [];

function start_game() {
    random = getRandomInt(4);
    array_of_randoms.push(random);
    choose_div();
    document.removeEventListener("keypress", start_game);

    function save_user_clicks(e) {
        if (e.target.id == 0) play_audio("green.mp3");
        else if (e.target.id == 1) play_audio("red.mp3");
        else if (e.target.id == 2) play_audio("yellow.mp3");
        else play_audio("blue.mp3");
        user_clicks_array.push(e.target.id);
        console.log(e.target.id);

        if (check_answer() == false)
            document.getElementById("press").innerHTML("Game Over");
        else {
            user_clicks_array = [];
            start_game();
            //bede ontor luserclicks laysero add l array of randoms b3den b3mil choosediv jdede
            // if (user_clicks_array.length === array_of_randoms.length) choose_div();
        }
    }

    document.addEventListener("click", save_user_clicks, false);
}

function check_answer() {
    console.log(array_of_randoms);
    console.log(user_clicks_array);
    for (var i = 0; i < user_clicks_array.length; i++) {
        if (array_of_randoms[i] !== parseInt(user_clicks_array[i])) {
            answer = false;
        } else {
            answer = true;
        }
    }
    return answer;
}