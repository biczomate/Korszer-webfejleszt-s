class Battle{
    constructor(warrior1, warrior2){
        this.warrior1 = warrior1;
        this.warrior2 = warrior2;
    }

    fight(){
        this.warrior1.restoreToFullHP();
        this.warrior2.restoreToFullHP();
        while(this.warrior1.getHP() > 0 && this.warrior2.getHP() > 0){
            this.warrior1.attack(this.warrior2);
            this.warrior2.attack(this.warrior1);
        }
        if(this.warrior1.getHP() > 0){
            this.winner = this.warrior1;
        } else {
            this.winner = this.warrior2;
        }
    }

    getWinner(){
        return this.winner;
    }
}

module.exports = Battle;