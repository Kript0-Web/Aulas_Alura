function jogar(){rodada = 1;

while (rodada <= 3) {
    console.log("Rodada " + rodada);

    escolha_jogador = prompt("Nivel: " +rodada, "Escolha um número: 1, 2 ou 3");
    escolha_computador = Math.floor(Math.random()*3) + 1;
    
    if (escolha_jogador <1 && escolha_jogador >3) {
        alert("Númemro invalido, escolha um numero entre 1 a 3");
        escolha_jogador = prompt("Nivel: " +rodada, "Escolha um número: 1, 2 ou 3");
        escolha_computador = Math.floor(Math.randim()*3) + 1;
    }

    if (escolha_jogador == escolha_computador) {
        alert("piso quebrou, voce perdeu!");
        rodada = 4;
    }
    else {
        alert("piso não quebrou");
    }

    rodada++;
    


}

if (rodada == 4) {
    alert("Você venceu!");
}
}
