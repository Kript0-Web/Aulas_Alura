function jogar(){idade = prompt("Quantos anos voce tem?");
if (idade < 18) {
    alert("Voce NAO pode jogar o jogo");
} 

if (idade >= 18) {
    escolha_do_jogador = prompt("Escolha 1 para PEDRA, 2 para PAPEL ou 3 para TESOURA");
    escolha_do_computador = Math.floor(Math.random() * 3) + 1;
    if (escolha_do_jogador == escolha_do_computador) {
        alert("empate!");
    } else if (escolha_do_jogador == 1 && escolha_do_computador == 2) {
        alert("voce perdeu!");
    } else if (escolha_do_jogador == 1 && escolha_do_computador == 3) {
        alert("voce ganhou!");
    } else if (escolha_do_jogador == 2 && escolha_do_computador == 1) {
        alert("voce ganhou!");
    } else if (escolha_do_jogador == 2 && escolha_do_computador == 3) {
        alert("voce perdeu!");
    } else if (escolha_do_jogador == 3 && escolha_do_computador == 1) {
        alert("voce perdeu!");
    } else if (escolha_do_jogador == 3 && escolha_do_computador == 2) {
        alert("voce ganhou!");
    }
}
alert("Fim de jogo!");
}