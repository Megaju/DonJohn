/**
 * Created by megaju on 05/06/17.
 */
// Don John
class DonJohn {

    constructor(lifeMax, atk, def, int, agi, nbrPotion) {
        this.life = lifeMax;
        this.lifeMax = lifeMax;
        this.atk = atk;
        this.def = def;
        this.int = int;
        this.agi = agi;
        this.nbrPotion = nbrPotion;
    }

    get getLife() {
        return this.life;
    }

    get getLifeMax() {
        return this.lifeMax;
    }

    get getAtk() {
        return this.atk;
    }

    get getDef() {
        return this.def;
    }

    get getInt() {
        return this.int;
    }

    get getAgi() {
        return this.agi;
    }

    get getPotion() {
        return this.nbrPotion;
    }

}