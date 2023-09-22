document.addEventListener("DOMContentLoaded", function (){
    const rodar = document.getElementById('rodar');
    const resultadoElemento = document.getElementById('resultado');
    const giroElemento = document.getElementById('giro');
    const inputElemento = document.getElementById('input');
    const dado1 = document.getElementById('diceBox1');
    const dado2 = document.getElementById('diceBox2');

    function girarDado(){
        return Math.floor(Math.random() * 6) + 1;
    }
function playGame() {
    const diceRoll1 = girarDado();
    const diceRoll2 = girarDado();

    const input = inputElemento.value;
    const userNumber = parseInt(input);

    if (input === null) {
        return;
    }
    if (userNumber === diceRoll1 || userNumber === diceRoll2) {
        resultadoElemento.textContent = "Você ganhou!!";
    } else if (userNumber >= 1 && userNumber <= 6) {
        resultadoElemento.textContent = "Você perdeu!";
    } else {
        resultadoElemento.textContent = "Número inválido, digite novamente";
    }
    dado1.textContent= "Dado 1: " +"\n " + diceRoll1;
    dado2.textContent= "Dado 2: " +"\n "+ diceRoll2;
}

rodar.addEventListener("click", playGame);
});