const Warrior = require('../src/warrior');
const Priest = require('../src/priest');
const expect = require('chai').expect;

describe('Priest', () => {
    it('should heal himself by 1 before every attack.', () => {
        let warrior = new Warrior(10);
        let priest = new Priest(10);
        warrior.attack(priest);
        expect(priest.getHP()).to.eql(9);
        priest.attack(warrior);
        expect(priest.getHP()).to.eql(10);
    });

    it('should not be able to heal over himself beyond his base HP.', () => {
        let warrior = new Warrior(10);
        let priest = new Priest(10);
        priest.attack(warrior);
        expect(priest.getHP()).to.eql(10);
    });
});