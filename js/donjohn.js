/**
 * Created by megaju on 05/06/17.
 */
// Don John
function DonJohn(lifeMax, lifeMax, atk, def, int, agi, nbrPotion) {

    this.lifeMax = lifeMax;
    this.life = lifeMax;

    this.atk = atk;
    this.def = def;
    this.int = int;
    this.agi = agi;

    this.nbrPotion = nbrPotion;

    console.log(`
        Don John est un aventurier parcourant les donjons !
        Il a ${this.life} de vie sur ${this.lifeMax}, ${this.atk} d'attaque, 
        ${this.def} de défense, ${this.int} d'intelligence, 
        ${this.agi} d'agilité, ainsi que ${this.nbrPotion} potions de vie !`);
}
