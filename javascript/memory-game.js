var random = 5;
document.addEventListener("keypress", function(event) {
    random = getRandomInt(4);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

if (random == 0) {
    var audio = new Audio("../assets/sounds/green.mp3");
    audio.play();
} else if (random == 1) {
    var audio = new Audio("../assets/sounds/red.mp3");
    audio.play();
} else if (random == 2) {
    var audio = new Audio("../assets/sounds/yellow.mp3");
    audio.play();
} else {
    var audio = new Audio("../assets/sounds/blue.mp3");
    audio.play();
}