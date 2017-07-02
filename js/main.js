function log(a){console.log(a)}

// button to generate our Don John
document.querySelector("#generate").addEventListener("click", generateHero);

function generateHero() {
    document.querySelector("#generate").removeEventListener("click", generateHero);

    // display the values
    document.querySelector(".life-value").innerHTML = hero.lifeMax;
    if (hero.lifeMax < 1185) {
        // bad stat
        document.querySelector(".life-value").style.color = "red";
    } else if (hero.lifeMax > 1185 && hero.lifeMax < 1560) {
        // medium stat
        document.querySelector(".life-value").style.color = "yellow";
    } else {
        // good stat
        document.querySelector(".life-value").style.color = "green";
    }

    setTimeout(function(){
        document.querySelector(".atk-value").innerHTML = hero.atk;
        if (hero.atk < 46) {
            // bad stat
            document.querySelector(".atk-value").style.color = "red";
        } else if (hero.atk > 45 && hero.atk < 55) {
            // medium stat
            document.querySelector(".atk-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".atk-value").style.color = "green";
        }
    }, 1200);

    setTimeout(function(){
        document.querySelector(".def-value").innerHTML = hero.def;
        if (hero.def < 46) {
            // bad stat
            document.querySelector(".def-value").style.color = "red";
        } else if (hero.def > 45 && hero.def < 55) {
            // medium stat
            document.querySelector(".def-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".def-value").style.color = "green";
        }
    }, 2400);

    setTimeout(function(){
        document.querySelector(".int-value").innerHTML = hero.int;
        if (hero.int < 46) {
            // bad stat
            document.querySelector(".int-value").style.color = "red";
        } else if (hero.int > 45 && hero.int < 55) {
            // medium stat
            document.querySelector(".int-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".int-value").style.color = "green";
        }
    }, 3600);

    setTimeout(function(){
        document.querySelector(".agi-value").innerHTML = hero.agi;
        if (hero.agi < 46) {
            // bad stat
            document.querySelector(".agi-value").style.color = "red";
        } else if (hero.agi > 45 && hero.agi < 55) {
            // medium stat
            document.querySelector(".agi-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".agi-value").style.color = "green";
        }
    }, 4800);

    setTimeout(function(){
        document.querySelector(".potion-value").innerHTML = hero.nbrPotion;
        if (hero.nbrPotion === 1) {
            // bad stat
            document.querySelector(".potion-value").style.color = "red";
        } else if (hero.nbrPotion === 2) {
            // medium stat
            document.querySelector(".potion-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".potion-value").style.color = "green";
        }
    }, 6000);

    setTimeout(function(){
        startExploration();
    }, 7200);

    // modify button
    document.querySelector('#generate').style.textDecoration = "line-through";
    document.querySelector('#generate').style.color = "#212121";
    document.querySelector('#generate').style.borderColor = "#212121";
    document.querySelector('#generate').style.backgroundColor = "#616161";

}

// exploration start in easy mode
var mode = 1;

function startExploration() {
    document.querySelector('.view-create').style.opacity = "0";
    document.querySelector('.game').style.backgroundColor = "#000";
    document.querySelector('.view-top').style.bottom = "0";
}
// events to navigate in the dungeon
document.querySelector("#left-to-top").addEventListener("click", topChoice);
document.querySelector("#left-to-right").addEventListener("click", rightChoice);

document.querySelector("#top-to-left").addEventListener("click", leftChoice);
document.querySelector("#top-to-right").addEventListener("click", rightChoice);

document.querySelector("#right-to-left").addEventListener("click", leftChoice);
document.querySelector("#right-to-top").addEventListener("click", topChoice);

function leftChoice() {
    mode = 2;
    document.querySelector(".view-left").style.right = "0";
    document.querySelector(".view-top").style.bottom = "100vh";
    document.querySelector(".view-right").style.left = "100vw";
}
function topChoice() {
    mode = 1;
    document.querySelector(".view-top").style.bottom = "0";
    document.querySelector(".view-left").style.right = "100vw";
    document.querySelector(".view-right").style.left = "100vw";
}
function rightChoice() {
    mode = 3;
    document.querySelector(".view-right").style.left = "0";
    document.querySelector(".view-top").style.bottom = "100vh";
    document.querySelector(".view-left").style.right = "100vw";
}

function openDoor(mode) {
    document.querySelector(".game-view").style.display = "block";
    generateMonster(mode);
}

// tap on the door
document.querySelector(".view-top").addEventListener("click", function(){
    openDoor(mode);
});
document.querySelector(".view-left").addEventListener("click", function(){
    openDoor(mode);
});
document.querySelector(".view-right").addEventListener("click", function(){
    openDoor(mode);
});
