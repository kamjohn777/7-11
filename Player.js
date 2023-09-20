// import Dice from "./Dice";
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
        // const rollResult = outPut;

          if (this.firstRoll === null) {
            this.firstRoll = rollResult;
            // return `First roll: ${rollResult}`;
        
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

    class Player1 extends Player {
        constructor(name,score) {
            super(name,score,amtOfRolls);
            // this.amtOfRolls = [];
        }
    }

    class player2 extends Player {
        constructor(name,score) {
            super(name,score,amtOfRolls);
            // this.amtOfRolls = [];
        }
    }


    //     if (this.secondRoll === null) {
    //         this.secondRoll = rollResult;
    //         return `Second roll: ${rollResult}`;
    //     }

    //     const totalResult = this.firstRoll + this.secondRoll + rollResult;
    //     this.score += totalResult;
    //     this.reset();
    //     return `${this.name} Total Score:${this.score}`;
    // }
}
}

// const players = new Player([{"name": "austin", "score":0, "id":1}, {"name": "kam", "score":0, "id":2}])
// const player1 = new Player("austin", 0, 1);
// const player2 = new Player("kam", 0, 2);
let players = [
    new Player("austin", 0, 1),
    new Player("kam", 0, 2)
];

console.log(players);
// Example usage:
const twoSixSidedDice = new Dice(6);
// const player1 = new Player('Alice');
// const player2 = new Player(`Jack`);

// const players = [new Player(`${this.name}`), new Player(`${this.name}`)]

// const players = [new Player('Alice'), new Player('Bob')]
// let currentPlayerIndex = 0;

// while (true) {
//     const currentPlayer = players[currentPlayerIndex];
//     const result = currentPlayer.rollDice(twoSixSidedDice);
//     console.log(result);

//     if (currentPlayer.score === 1 || currentPlayer.score === -1) {
//         currentPlayerIndex = (currentPlayer + 1) % players.length;
//     } 
// }

// console.log(player1.rollDice(twoSixSidedDice)); // First roll
// console.log(player1.rollDice(twoSixSidedDice)); // Second roll
// console.log(player1.rollDice(twoSixSidedDice)); // Calculates score and resets for the next turn

// still need to work on the functionality of all this in a little some bugs are still in this code
module.exports.players = players;
