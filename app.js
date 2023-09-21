const Dice = require('./Dice');
const Player = require('./Player');



const players = Player.players;

// there is a player variable in the Player.js file close to the bottom
    let playerValue = Player.players;

    let currentRoller = 0;
    let currentRollResults = [];

    const diceRoller = new Dice(6);
    // let rollResult = diceRoller.roll();
    // let rollResult = outPut;

    function diceRoll() {
      rollResult = diceRoller.roll();
    //   return rollResult
    //   const dice1 = Math.floor(Math.random() * this.sides) + 1;
    //   const dice2 = Math.floor(Math.random() * this.sides) + 1;
    //   return dice1 + dice2;
        currentRollResults.push(rollResult);
        // resultArray.push(rollResult);
        // currentRollResults.push(dice1 + dice2);
        // console.log(`You rolled a ${rollResult}`);
        checkDice();
    }

    function checkDice() {
        if(currentRollResults[0] === "") {
            if(rollResult=== 7 || 11) {
                // this.socre += 1;
                players[currentRoller].score += 1;
                // currentRollResults = 0;
                currentRoller = 0;
                console.log(`${players} won this round they rolled a ${rollResult}`);
            } else if(rollResult === 2 || 3|| 12) {
                players[currentRoller].score -= 1;
                currentRoller = 1;
                console.log(`${players} loss this round they rolled a ${rollResult}`);
                changeTurns();
            } else {
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        } else {
            if(rollResult === currentRollResults[0]) {
                players[currentRoller].score =+ 1;
                changeTurns();
            } else {
                currentRollResults.push(rollResult);
                currentRoller = (currentRoller + 1) % players.length;
            }
        }
        function changeTurns() {
            if(players.length < currentRoller-1) {
                currentRoller += 1;
            } else {
                currentRoller = 0;
            }
        }
    }


  

    diceRoll(currentRollResults);
    checkDice()

//  We can just use regualr funcitons and we dont need to use a main app component

// Test for game
let currentPlayerIndex = 0; // Initialize the current player index

// Create a dice
const dice = new Dice(6);

function playTurn() {
  const currentPlayer = players[currentPlayerIndex];

  // Roll the dice and display the result
//   const rollResult = currentPlayer.rollDice(dice);
  console.log(rollResult);

  // Check if the game is over or switch to the next player
  if (currentPlayer.score >= 10) {
    console.log(`${currentPlayer.name} wins the game!`);
    return; // End the game
  }

  // Switch to the next player
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  // Continue the game loop
  setTimeout(playTurn, 3000); // Adjust the delay as needed
}

// Start the game loop
playTurn();