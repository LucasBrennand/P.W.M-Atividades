const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    const diceRoll1 = rollDice();
    const diceRoll2 = rollDice();

    console.log("Input a number from 1 to 6");

    rl.question('', (input) => {
        const userInput = parseInt(input);

        if (userInput === diceRoll1 || userInput === diceRoll2) {
            console.log("You win!");
        } else if (userInput >= 1 && userInput <= 6) {
            console.log("You lose!");
        } else {
            console.log("Invalid number");
        }

        console.log("Dice roll 1: " + diceRoll1);
        console.log("Dice roll 2: " + diceRoll2);

        playGame(); // Play again
    });
}

playGame(); // Start the game
