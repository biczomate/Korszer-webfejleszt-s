const IllegalActionError = require("./illegalaction-error");
const Hand = require("./hand");

class Warrior {
    constructor(hitPoint) {
        if (hitPoint > 30 || hitPoint < 1) {
            throw new RangeError('hitPoint must be between 1-30');
        }
        this._baseHitPoint = hitPoint;
        this._hitPoint = hitPoint;
        this._weapon = new Hand();
    }

    getHP() {
        return this._hitPoint;
    }

    decreaseHP(damage) {
        this._hitPoint -= damage;
    }

    attack(target) {
        if (this == target) {
            throw new IllegalActionError("Warrior can't attack himself.");
        }
        let damage = this._weapon.getDMG() - target._weapon.getDefense();
        if (damage < 0) {
            damage = 0;
        }
        target.decreaseHP(damage);
    }

    addWeapon(weapon) {
        this._weapon = weapon;
    }

    heal(amount) {
        this._hitPoint += amount;
        if (this._hitPoint > this._baseHitPoint) {
            this._hitPoint = this._baseHitPoint;
        }
    }

    toJSON(){
        return {"type": "warrior", "hp": this._baseHitPoint, "weapon": this._weapon.toString()};
    }

    restoreToFullHP(){
        this._hitPoint = this._baseHitPoint;
    }
}

module.exports = Warrior;