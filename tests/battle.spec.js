const Warrior = require("../warrior");
const Battle = require("../battle");
const expect = require('chai').expect;

describe('Battle', () => {
    it('w2 should win the battle.', () => {
        let w1 = new Warrior(1);
        let w2 = new Warrior(10);
        let battle = new Battle(w1, w2);
        battle.fight();
        expect(battle.getWinner()).to.eql(w2);
    });

    it('getWinner should return undefined without any fight in the battle', () => {
        let w1 = new Warrior(1);
        let w2 = new Warrior(10);
        let battle = new Battle(w1, w2);
        expect(battle.getWinner()).to.undefined;
    }
    );
});