const Weapon = require("./weapon");

class Sword extends Weapon{
    constructor(){
        super(7, 2);
    }

    toString(){
        return "Sword";
    }
}

module.exports = Sword;