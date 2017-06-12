const Weapon = require("./weapon");

class Dagger extends Weapon{
    constructor(){
        super(5, 4);
    }

    toString(){
        return "Dagger";
    }
}

module.exports = Dagger;