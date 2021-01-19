var level = 0;
var isStarted = false;
var idRecord = [];

$(document).on("keypress", function () {

    if (!isStarted) {
        console.log("started");

        updateLvl();

        idRecord.push(randomId());
        play(idRecord[idRecord.length-1]);

        isStarted = true;
    }
});

$(".btn").on("click", function (event) {
    var idBtn = event.target.id;
    console.log(idBtn);

    playSound(idBtn);

    idRecord.push(randomId());
    play(idRecord[idRecord.length-1]);

});

function updateLvl() {
    level++;
    $("#level-title").html("Level " + level);
}

function playSound(soundName) {
    var audio = new Audio("sounds/" + soundName + ".mp3");
    audio.play();
}

function randomId() {
    var randNumber = Math.floor(Math.random() * 4);

    console.log(idRecord);

    switch (randNumber) {
        case 0:
            {
                return "green";
                //break;
            }
        case 1:
            {
                return "red";
                //break;
            }
        case 2:
            {
                return "yellow";
                //break;
            }
        case 3:
            {
                return "blue";
                //break;
            }
    }
}

function fadeAnimation(idBtn){
    $("#"+idBtn).fadeOut().fadeIn();
}

function play(idBtn){
    playSound(idBtn);
    fadeAnimation(idBtn);

}