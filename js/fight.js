/**
 * Created by j on 28/06/17.
 */
// create monster
function generateMonster(mode) {
    if (mode === 1) {
        log("Création dun monstre facile.");
        var eMonster = new Monster(
            "Easy Monster",
            "Description de test. Mais on va dire que ce monstre est pas beau.",
            100 + (Math.floor(Math.random() * (1 - 50)) + 51), //life
            Math.floor(Math.random() * (20 - 40)) + 41, //atk
            Math.floor(Math.random() * (1 - 4)) + 5, //def
            Math.floor(Math.random() * (20 - 40)) + 41, //int
            Math.floor(Math.random() * (20 - 40)) + 41, //agi
            0); //potion
        startFight(eMonster);

    } else if (mode === 2) {
        // normal mode
        var nMonster = new Monster(
            "Normal Monster",
            "Description de test. Mais on va dire que ce monstre est pas beau.",
            150 + (Math.floor(Math.random() * (1 - 100)) + 101), //life
            Math.floor(Math.random() * (30 - 50)) + 51, //atk
            Math.floor(Math.random() * (2 - 6)) + 7, //def
            Math.floor(Math.random() * (30 - 50)) + 51, //int
            Math.floor(Math.random() * (30 - 50)) + 51, //agi
            Math.floor(Math.random() * (0 - 1)) + 2); //potion
        startFight(nMonster);
    } else if (mode === 3) {
        // hard mode
        var hMonster = new Monster(
            "Hard Monster",
            "Description de test. Mais on va dire que ce monstre est pas beau.",
            200 + (Math.floor(Math.random() * (1 - 200)) + 201), //life
            Math.floor(Math.random() * (60 - 100)) + 101, //atk
            Math.floor(Math.random() * (4 - 12)) + 13, //def
            Math.floor(Math.random() * (60 - 100)) + 101, //int
            Math.floor(Math.random() * (60 - 100)) + 101, //agi
            Math.floor(Math.random() * (0 - 3)) + 4); //potion
        startFight(hMonster);
    } // monster generated
}

// fight
function startFight(monster) {
    if (hero.agi >= monster.agi) {
        log(`STATS MONSTRE => life : ${monster.life} atk : ${monster.atk} def : ${monster.def} agi : ${monster.agi}`)
        gameConsole(`> ${hero.name} commence le combat avec ${hero.agi} AGI contre ${monster.agi}.`);
        agiTest(monster, hero);
    } else {
        gameConsole(`> Le monstre commence le combat avec ${monster.agi} AGI contre ${hero.agi}.`);
        agiTest(hero, monster);
    }
}

function agiTest(target, attacker) {
    gameConsole(`> ${attacker.name} attaque ${target.name} !`);

    let dice = Math.floor(Math.random() * (0 - 100)) + 101;

    if (dice <= target.agi) {
        gameConsole(`> ${target.name} esquive l'attaque et va attaquer !`);
        calcDmg(target, attacker);
    } else {
        gameConsole(`> ${target.name} tente une esquive mais rate...`);
        calcDmg(attacker, target);
    }
}

function calcDmg(attacker, target) {
    let dmg = attacker.atk - target.def;

    gameConsole(`${attacker.name} cause ${dmg} de dégats à ${target.name} !`)
    dmg = target.life - dmg;
    target._life = dmg;

    if (target.life <= 0) {
        target._life = 0;
        gameConsole(`>Il reste ${target.life}/${target.lifeMax} PV à ${target.name}`);
        return gameConsole(`${attacker.name} gagne le combat !`);
    } else {
        gameConsole(`>Il reste ${target.life}/${target.lifeMax} PV à ${target.name}`);
        agiTest(attacker, target);
    }
}