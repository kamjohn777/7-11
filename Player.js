const Dice = require("./Dice");

class Player {
    constructor(name,score,id) {
        this.name = name;
        this.score = 0;
        this.id = null;
        this.reset();
    }

    reset() {
        // this.score = 0;
        this.firstRoll = null;
        this.secondRoll = null;
    }

    rollDice(dice) {
        const rollResult = dice.roll(); 
        console.log(`This is the result:${rollResult}`);
      

          if (this.firstRoll === null) {
            this.firstRoll = rollResult;
           
        
        // else if (this.firstRoll === rollResult) {
             if (this.firstRoll === 7 || this.firstRoll === 11) {
                this.score += 1
                this.reset();
                return `${this.name} rolled a ${this.firstRoll} ${this.name} Wins!`
        }   else if (this.firstRoll === 12 || this.firstRoll === 3 || this.firstRoll === 2) {
            this.score -= 1
            this.reset()
            return `${this.name} rolled ${this.firstRoll} ${this.name} loss!`
        }

        return `First roll: ${rollResult}`;
    } else {
        if (this.firstRoll === rollResult) {
            this.score = 1;
            this.reset();
            return `${this.name} rolled ${this.firstRoll} again (win)`
        }

        else if (rollResult === 7) {
            this.score = -1;
            this.reset();
            return `${this.name} rolled a 7 (loss)`;
        } else {
            this.secondRoll = rollResult;
            return `Second roll: ${rollResult}`;
        }
    }
}
}

let players = [
    new Player("austin", 0, 1),
    new Player("kam", 0, 2)
];

console.log(players);
// Example usage:
const twoSixSidedDice = new Dice(6);


module.exports.players = players;
