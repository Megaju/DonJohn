// HERO MENU GENERATOR

// hidden the button to enter the dungeon
document.querySelector(".view-start").style.display = 'none';

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
        console.log('5');
    }, 1200);
    setTimeout(function(){
        console.log('4');
    }, 2400);
    setTimeout(function(){
        console.log('3');
    }, 3600);
    setTimeout(function(){
        console.log('2');
    }, 4800);
    setTimeout(function(){
        console.log('1');
    }, 6000);
    setTimeout(function(){
        console.log('GO !');
    }, 7200);
}
