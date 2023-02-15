let player1 = prompt(" Escolha um número de 1 a 10.");

let player2 = prompt(" Adivinhe o número que o 1°jogador escolheu.");
let text = "";
let tent = 1;
let msg = "";



while(player2 != player1){
    player2 = prompt("Você errou... Tente outra vez.");
    tent ++;
   }
if (player2 == player1){
        text = " O número escolhido foi " + player1 + ", você acertou o valor em apenas " + tent + " tentativas.";
        document.getElementById("text").innerHTML = text;
    }

