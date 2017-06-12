const Weapon = require("./weapon");

class Hand extends Weapon{
    constructor(){
        super(1, 0);
    }

    toString(){
        return "Hand";
    }
}

module.exports = Hand;