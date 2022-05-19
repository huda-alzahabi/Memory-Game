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
        var audio = new Audio("../assets/sounds/green.mp3");
        audio.play();

        var element = document.getElementById("0");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "green";
        }, 250);
    } else if (random == 1) {
        var audio = new Audio("../assets/sounds/red.mp3");
        audio.play();

        var element = document.getElementById("1");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "red";
        }, 250);
    } else if (random == 2) {
        var audio = new Audio("../assets/sounds/yellow.mp3");
        audio.play();

        var element = document.getElementById("2");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "yellow";
        }, 250);
    } else {
        var audio = new Audio("../assets/sounds/blue.mp3");
        audio.play();

        var element = document.getElementById("3");
        element.style.backgroundColor = "black";
        setTimeout(function() {
            element.style.backgroundColor = "blue";
        }, 250);
    }
}