// button to generate our Don John
document.querySelector("#generate").addEventListener("click", generateHero);

function generateHero() {
    document.querySelector("#generate").removeEventListener("click", generateHero);

    // generate values
    var hero = new DonJohn(
        150 + (Math.floor(Math.random() * (1 - 100)) + 101),
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (0 - 3)) + 4);

    // display the values
    document.querySelector(".life-value").innerHTML = hero.getLifeMax;
    if (hero.getLifeMax < 176) {
        // bad stat
        document.querySelector(".life-value").style.color = "red";
    } else if (hero.getLifeMax > 175 && hero.getLifeMax < 225) {
        // medium stat
        document.querySelector(".life-value").style.color = "yellow";
    } else {
        // good stat
        document.querySelector(".life-value").style.color = "green";
    }

    setTimeout(function(){
        document.querySelector(".atk-value").innerHTML = hero.getAtk;
        if (hero.getAtk < 46) {
            // bad stat
            document.querySelector(".atk-value").style.color = "red";
        } else if (hero.getAtk > 45 && hero.getAtk < 55) {
            // medium stat
            document.querySelector(".atk-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".atk-value").style.color = "green";
        }
    }, 1200);

    setTimeout(function(){
        document.querySelector(".def-value").innerHTML = hero.getDef;
        if (hero.getDef < 46) {
            // bad stat
            document.querySelector(".def-value").style.color = "red";
        } else if (hero.getDef > 45 && hero.getDef < 55) {
            // medium stat
            document.querySelector(".def-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".def-value").style.color = "green";
        }
    }, 2400);

    setTimeout(function(){
        document.querySelector(".int-value").innerHTML = hero.getInt;
        if (hero.getInt < 46) {
            // bad stat
            document.querySelector(".int-value").style.color = "red";
        } else if (hero.getInt > 45 && hero.getInt < 55) {
            // medium stat
            document.querySelector(".int-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".int-value").style.color = "green";
        }
    }, 3600);

    setTimeout(function(){
        document.querySelector(".agi-value").innerHTML = hero.getAgi;
        if (hero.getAgi < 46) {
            // bad stat
            document.querySelector(".agi-value").style.color = "red";
        } else if (hero.getAgi > 45 && hero.getAgi < 55) {
            // medium stat
            document.querySelector(".agi-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".agi-value").style.color = "green";
        }
    }, 4800);

    setTimeout(function(){
        document.querySelector(".potion-value").innerHTML = hero.getPotion;
        if (hero.getPotion === 1) {
            // bad stat
            document.querySelector(".potion-value").style.color = "red";
        } else if (hero.getPotion === 2) {
            // medium stat
            document.querySelector(".potion-value").style.color = "yellow";
        } else {
            // good stat
            document.querySelector(".potion-value").style.color = "green";
        }

        counter();
    }, 6000);

    // modify button
    document.querySelector('#generate').style.textDecoration = "line-through";
    document.querySelector('#generate').style.color = "#212121";
    document.querySelector('#generate').style.borderColor = "#212121";
    document.querySelector('#generate').style.backgroundColor = "#616161";
}

function counter() {
    // counter
    setTimeout(function(){
        document.querySelector('.counter').style.opacity = ".9";
        document.querySelector(".counter-number").innerHTML = '5';
        console.log('5');
    }, 1200);
    setTimeout(function(){
        document.querySelector(".counter-number").innerHTML = '4';
        console.log('4');
    }, 2400);
    setTimeout(function(){
        document.querySelector(".counter-number").innerHTML = '3';
        console.log('3');
    }, 3600);
    setTimeout(function(){
        document.querySelector(".counter-number").innerHTML = '2';
        console.log('2');
    }, 4800);
    setTimeout(function(){
        document.querySelector(".counter-number").innerHTML = '1';
        console.log('1');
    }, 6000);
    setTimeout(function(){
        document.querySelector(".counter-number").innerHTML = 'GO!';
        console.log('GO !');
    }, 7200);
    setTimeout(function(){
        startExploration();
    }, 8400);
}

// exploration start in easy mode
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
    document.querySelector(".view-left").style.right = "0";
    document.querySelector(".view-top").style.bottom = "100vh";
    document.querySelector(".view-right").style.left = "100vw";
}
function topChoice() {
    document.querySelector(".view-top").style.bottom = "0";
    document.querySelector(".view-left").style.right = "100vw";
    document.querySelector(".view-right").style.left = "100vw";
}
function rightChoice() {
    document.querySelector(".view-right").style.left = "0";
    document.querySelector(".view-top").style.bottom = "100vh";
    document.querySelector(".view-left").style.right = "100vw";
}
