class Weapon{
    constructor(damage, defense){
        this._damage = damage;
        this._defense = defense;
    }

    getDMG(){
        return this._damage;
    }

    getDefense(){
        return this._defense;
    }
}

module.exports = Weapon;