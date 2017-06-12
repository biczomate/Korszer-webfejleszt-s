const Weapon = require("./weapon");

class Staff extends Weapon{
    constructor(){
        super(8, 1);
    }

    toString(){
        return "Staff";
    }
}

module.exports = Staff;