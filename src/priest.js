const Warrior = require("./warrior");

class Priest extends Warrior {

    attack(target) {
        if (this == target) {
            throw new IllegalActionError("Warrior can't attack himself.");
        }
        this.heal(1);
        let damage = this._weapon.getDMG() - target._weapon.getDefense();
        if (damage < 0) {
            damage = 0;
        }
        target.decreaseHP(damage);
    }

    toJSON(){
        return {"type": "priest", "hp": this._baseHitPoint, "weapon": this._weapon.toString()};
    }
}

module.exports = Priest;