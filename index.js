var level = 0;
var isStarted = false;
var idRecord = [];

$(document).on("keypress", function () {

    if (!isStarted) {
        console.log("started");

        updateLvl();

        idRecord.push(randomId());

        isStarted = true;
    }
});

$(".btn").on("click", function (event) {
    var idBtn = event.target.id;
    console.log(idBtn);

    playSound(idBtn);

    idRecord.push(randomId());
    console.log(idRecord);

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