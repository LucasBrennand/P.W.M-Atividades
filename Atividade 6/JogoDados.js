document.addEventListener("DOMContentLoaded", function (){
    const rodar = document.getElementById('rodar');
    const resultadoElemento = document.getElementById('resultado');
    const giroElemento = document.getElementById('giro');
    const inputElemento = document.getElementById('input');

    function girarDado(){
        return Math.floor(Math.random() * 5) + 1;
    }
function playGame() {
    const diceRoll1 = girarDado();
    const diceRoll2 = girarDado();

    const input = inputElemento.value;
    const userNumber = parseInt(input);

    if (input === null) {
        // User canceled input
        return;
    }

    if (userNumber === diceRoll1 || userNumber === diceRoll2) {
        resultadoElemento.textContent = "You win!";
    } else if (userNumber >= 1 && userNumber <= 6) {
        resultadoElemento.textContent = "You lose!";
    } else {
        resultadoElemento.textContent = "Invalid number";
    }

    giroElemento.textContent = `Dice roll 1: ${diceRoll1}, Dice roll 2: ${diceRoll2}`;
}

rodar.addEventListener("click", playGame);
});