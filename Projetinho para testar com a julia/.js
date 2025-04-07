//programa precisa comecar na casa 1
function jogar(){
    rodada = 1;
    
    //precisa ter 3 pergutas
    while (rodada <= 3){
    console.log("Rodada: " + rodada);
    
    escolha_jogador = prompt("Quem seu pai ama mais? 1 EU! 2 Voce 3 O erfan");
    if (escolha_jogador == 1){
        alert("Você acertou!");
        rodada++;
    }else {
        alert("Você errou! A resposta certa é 1");
        break;
    }
    escolha_jogador = prompt("Quanto o lucas ama a julia? 1)- muito 2)- pouco 3)- 8)- quase nada");
    if (escolha_jogador == 1){
        alert("Você acertou!");
        rodada++;} 
     else {
            alert("Você errou! A resposta certa é muito");
            break;}

    escolha_jogador = prompt("Qual o mes do nosso namoro: 1)- 10 2)- 07 3)- 12");
    if (escolha_jogador == 1){
        alert("Você acertou!");
        rodada++;
    }
     else {
        alert("Você errou! A resposta certa é 10");
        break;
    } 
        // Add functionality for the jogar function here if needed
    }
    if (rodada > 3) {
        alert("Parabéns! Você completou todas as rodadas.");
    } else {
        alert("Fim do jogo. Você saiu na rodada " + rodada);
    }
}
