/**
 * Created by megaju on 05/06/17.
 */
class DonJohn {
    constructor(name, lifeMax, atk, def, int, agi, nbrPotion) {
        this._life = lifeMax;
        this._name = name;
        this._lifeMax = lifeMax;
        this._atk = atk;
        this._def = def;
        this._int = int;
        this._agi = agi;
        this._nbrPotion = nbrPotion;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get life() {
        return this._life;
    }

    set life(value) {
        this._life = value;
    }

    get lifeMax() {
        return this._lifeMax;
    }

    set lifeMax(value) {
        this._lifeMax = value;
    }

    get atk() {
        return this._atk;
    }

    set atk(value) {
        this._atk = value;
    }

    get def() {
        return this._def;
    }

    set def(value) {
        this._def = value;
    }

    get int() {
        return this._int;
    }

    set int(value) {
        this._int = value;
    }

    get agi() {
        return this._agi;
    }

    set agi(value) {
        this._agi = value;
    }

    get nbrPotion() {
        return this._nbrPotion;
    }

    set nbrPotion(value) {
        this._nbrPotion = value;
    }
}

// generate values
let hero = new DonJohn(
    "Don John",
    1000 + (Math.floor(Math.random() * (1 - 750)) + 751), //life
    Math.floor(Math.random() * (40 - 60)) + 61, //atk
    Math.floor(Math.random() * (10 - 20)) + 21, //def
    Math.floor(Math.random() * (40 - 60)) + 61, //int
    Math.floor(Math.random() * (40 - 60)) + 61, //agi
    Math.floor(Math.random() * (0 - 3)) + 4); //potion
