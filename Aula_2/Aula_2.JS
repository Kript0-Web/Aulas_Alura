// This function simulates a rock-paper-scissors game where the user competes against the computer.
// It first checks if the user is old enough to play and then proceeds with the game if eligible.
function conversor(){
    let idade = prompt("Quantos anos voce tem?");
if (idade < 18) {
    alert("Voce NAO pode jogar o jogo");
} 

if (idade >= 18) {
    escolha_do_jogador = prompt("Escolha 1 para PEDRA, 2 para PAPEL ou 3 para TESOURA");
    escolha_do_computador = Math.floor(Math.random() * 3) + 1;
    if (escolha_do_jogador == escolha_do_computador) {
        alert("perdeu!");
    }else (escolha_do_jogador != escolha_do_computador);
    alert ("Voce ganhou!");
    alert("Escolha do computador: " + escolha_do_computador);
}

}
alert("Fim de jogo!");
