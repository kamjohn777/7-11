const Dice = require('./Dice');
const Player = require('./Player');



const players = Player.players;

// there is a player variable in the Player.js file close to the bottom
    let playerValue = Player.players;

    let currentRoller = 0;
    let currentRollResults = [];

    const diceRoller = new Dice(6);
    let rollResult = diceRoller.roll();


    function diceRoll(resultArray) {
      rollResult = diceRoller.roll();
        // currentRollResults.push(rollResult);
        resultArray.push(rollResult);
        console.log(`You rolled a ${rollResult}`);
    }

    function checkDice() {
        if(currentRollResults[0] === "") {
            if(rollResult === 7 || 11) {
                // this.socre += 1;
                players[currentRoller].score += 1;
                // currentRollResults = 0;
                currentRoller = 0;
            } else if(rollResult === 2 || 3|| 12) {
                players[currentRoller].score -= 1;
                currentRoller = 1;
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


    // for (let i = 0; i < 10; i++) {
    //     diceRoll(currentRollResults);
    //     checkDice();
    // }

    diceRoll(currentRollResults);
    checkDice()
    

    // console.log("This is the roll result: " + rollResult);
    // console.log(currentRollResults);
    // let playersArr = [0,1];
    // let winningRolls = [7,11];
    // let losingRolls = [2,3,12];

    // if (Player.id === winningRolls) {
    //     console.log(`${Player.id} rolled a ${winningRolls}`);
    // }


    


//  We can just use regualr funcitons and we dont need to use a main app component

let currentPlayerIndex = 0; // Initialize the current player index

// Create a dice
const dice = new Dice(6);

function playTurn() {
  const currentPlayer = players[currentPlayerIndex];

  // Roll the dice and display the result
  const rollResult = currentPlayer.rollDice(dice);
  console.log(rollResult);

  // Check if the game is over or switch to the next player
  if (currentPlayer.score >= 10) {
    console.log(`${currentPlayer.name} wins the game!`);
    return; // End the game
  }

  // Switch to the next player
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

  // Continue the game loop
  setTimeout(playTurn, 1000); // Adjust the delay as needed
}

// Start the game loop
playTurn();