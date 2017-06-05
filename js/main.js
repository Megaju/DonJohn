// menu generator don john
document.querySelector("#start").addEventListener("click", openGenerator);

function openGenerator() {
    document.querySelector(".hero-generator").style.right = '0';
}

document.querySelector("#generate-hero").addEventListener("click", generateHero);

function generateHero() {
    var hero = new DonJohn(
        150 + (Math.floor(Math.random() * (1 - 100)) + 101),
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (40 - 60)) + 61,
        Math.floor(Math.random() * (1 - 3)) + 4);

    document.querySelector(".life-value").innerHTML = hero.getLifeMax;
    document.querySelector(".atk-value").innerHTML = hero.getAtk;
    document.querySelector(".def-value").innerHTML = hero.getDef;
    document.querySelector(".int-value").innerHTML = hero.getInt;
    document.querySelector(".agi-value").innerHTML = hero.getAgi;
    document.querySelector(".potion-value").innerHTML = hero.getPotion;
}
