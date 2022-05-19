var random = 5;
document.addEventListener("keypress", function(event) {
    random = getRandomInt(4);
    startgame();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function startgame() {
    if (random == 0) {
        play_audio("green.mp3");

        var element = document.getElementById("0");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "green";
        }, 250);
    } else if (random == 1) {
        play_audio("red.mp3");

        var element = document.getElementById("1");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "red";
        }, 250);
    } else if (random == 2) {
        play_audio("yellow.mp3");

        var element = document.getElementById("2");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "yellow";
        }, 250);
    } else {
        play_audio("blue.mp3");

        var element = document.getElementById("3");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "blue";
        }, 250);
    }

    function play_audio(a) {
        var audio = new Audio("../assets/sounds/" + a);
        audio.play();
    }
}