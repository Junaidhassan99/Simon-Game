var level = 0;
var isStarted = false;
var idRecord = [];
var clickCount = 0;

$(document).on("keypress", function () {

    if (!isStarted) {
        console.log("started");

        updateLvl();

        play();

        isStarted = true;
    }
});

$(".btn").on("click", function (event) {

    var idBtn = event.target.id;
    console.log(idBtn);

    if (clickCount < idRecord.length) {
        if (idBtn === idRecord[clickCount]) {
            console.log("Okay");
            clickCount++;
        } else {
            console.log("End");
            endGame();
        }
    }

    if (clickCount >= idRecord.length && isStarted) {
        updateLvl();
        play();
    }

});

function updateLvl() {
    level++;
    clickCount = 0;
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

function fadeAnimation(idBtn) {
    $("#" + idBtn).fadeOut().fadeIn();
}

function play() {

    idRecord.push(randomId());
    console.log(idRecord);

    var idBtn = idRecord[idRecord.length - 1];
    playSound(idBtn);
    fadeAnimation(idBtn);

}

function endGame() {
    level = 0;
    isStarted = false;
    idRecord = [];
    clickCount = 0;

    $("body").css("background-color", "red");
    playSound("wrong");
    $("#level-title").html("Game Over");

    setTimeout(function () {
        $("body").css("background-color", "#011F3F");
        $("#level-title").html("Press A Key to Start");
    }, 1000);


}