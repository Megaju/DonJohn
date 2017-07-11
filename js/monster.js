/**
 * Created by j on 28/06/17.
 */
class Monster {
    constructor(name, image, life, atk, def, int, agi, nbrPotion) {
        this._lifeMax = life;
        this._life = life;
        this._atk = atk;
        this._def = def;
        this._int = int;
        this._agi = agi;
        this._nbrPotion = nbrPotion;
        this._name = name;
        this._image = image;
    }

    get name() {
        return this._name;
    }

    get image() {
        return this._image;
    }

    get lifeMax() {
        return this._lifeMax;
    }

    set lifeMax(value) {
        this._lifeMax = value;
    }

    get life() {
        return this._life;
    }

    set life(value) {
        this._life = value;
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