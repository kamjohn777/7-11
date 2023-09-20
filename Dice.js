class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    roll() {
        const dice1 = Math.floor(Math.random() * this.sides) + 1;
        const dice2 = Math.floor(Math.random() * this.sides) + 1;
        return dice1 + dice2;
    }
}

const diceRoll = new Dice(6)
const outPut = diceRoll.roll()

// console.log(`You rolled a ${outPut}`);

module.exports = Dice;


// In this file this is where we are creating our dice using a class and setting up the rules and functions for adding up the two dice rolls and getting our number