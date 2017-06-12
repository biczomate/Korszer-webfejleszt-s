const Warrior = require("../src/warrior");
const IllegalActionError = require("../src/illegalaction-error");
const Sword = require("../src/sword");
const Dagger = require("../src/dagger");
const Staff = require("../src/staff");
const expect = require('chai').expect;

describe('Warrior', () => {

    it('with 10 HP.', () => {
        let warrior = new Warrior(10);
        expect(warrior.getHP()).to.eql(10);
    });

    it('creating a warrior with more than 30 hp should cause RangeError', () => {
        expect(function () { new Warrior(31) }).to.throw(RangeError);
    });

    it('creating a warrior with less than 1 hp should cause RangeError', () => {
        expect(function () { new Warrior(0) }).to.throw(RangeError);
    });

    it('can attack other warriors', () => {
        let w1 = new Warrior(30);
        let w2 = new Warrior(30);

        w1.attack(w2);
    });

    it('can\'t attack himself', () => {
        let w1 = new Warrior(30);
        let w2 = new Warrior(30);

        expect(function () { w1.attack(w1) }).to.throw(IllegalActionError);
    });

    it('attack with hands should decrease opponent\'s HP by 1', () => {
        let w1 = new Warrior(30);
        let w2 = new Warrior(30);

        w1.attack(w2);
        expect(w2.getHP()).to.eql(29);
    });

    it('with Sword should cause 7 dmg.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Sword());
        let w2 = new Warrior(30);

        w1.attack(w2);
        expect(w2.getHP()).to.eql(23);
    });

    it('with Dagger should cause 5 dmg.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Dagger());
        let w2 = new Warrior(30);

        w1.attack(w2);
        expect(w2.getHP()).to.eql(25);
    });

    it('with Staff should cause 8 dmg.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Staff());
        let w2 = new Warrior(30);

        w1.attack(w2);
        expect(w2.getHP()).to.eql(22);
    });

    it('equipped with Sword should decrease enemy attack by 2.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Sword());
        let w2 = new Warrior(30);
        w2.addWeapon(new Staff());

        w2.attack(w1);
        expect(w1.getHP()).to.eql(24);
    });

    it('equipped with Dagger should decrease enemy attack by 4.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Dagger());
        let w2 = new Warrior(30);
        w2.addWeapon(new Staff());

        w2.attack(w1);
        expect(w1.getHP()).to.eql(26);
    });

    it('equipped with Staff should decrease enemy attack by 1.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Staff());
        let w2 = new Warrior(30);
        w2.addWeapon(new Staff());

        w2.attack(w1);
        expect(w1.getHP()).to.eql(23);
    });

    it('\'s defense points are greater than the attacker\'s damage points, then the attack should not cause any damage.', () => {
        let w1 = new Warrior(30);
        w1.addWeapon(new Dagger());
        let w2 = new Warrior(30);

        w2.attack(w1);
        expect(w1.getHP()).to.eql(30);
    });
});