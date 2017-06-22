window.scroll(0, 1000);

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
        Math.floor(Math.random() * (1 - 3)) + 4);

    // display the values
    document.querySelector(".life-value").innerHTML = hero.getLifeMax;
    document.querySelector(".atk-value").innerHTML = hero.getAtk;
    document.querySelector(".def-value").innerHTML = hero.getDef;
    document.querySelector(".int-value").innerHTML = hero.getInt;
    document.querySelector(".agi-value").innerHTML = hero.getAgi;
    document.querySelector(".potion-value").innerHTML = hero.getPotion;

    // modify button
    document.querySelector('#generate').style.textDecoration = "line-through";
    document.querySelector('#generate').style.color = "#212121";
    document.querySelector('#generate').style.borderColor = "#212121";
    document.querySelector('#generate').style.backgroundColor = "#616161";

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
