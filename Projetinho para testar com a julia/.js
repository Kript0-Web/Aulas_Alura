function jogar(){
    rodada = 1;
    if (pergunta <= 0 || pergunta >= 3){
        alert("Você precisa escolher um número entre 1 e 3");}
    
    //precisa ter 3 pergutas
    while (rodada <= 3){
    pergunta = Math.floor(Math,ramdom() * 3)+1;
    console.log("Rodada:" + rodadda);
    
    pergunta = prompt("Quem seu pai ama mais? 1)- EU! 2)- Voce 3)- O erfan");
    if (pergunta == 1){
        alert("Você acertou!");
        rodada++;
    }else {
        alert("Você errou! A resposta certa é 4");
        break;
    }
    pergunta = prompt("Quanto o lucas ama a julia? 1)- muito 2)- pouco 3)- 8)- quase nada");
    if (pergunta == 1){
        alert("Você acertou!");
        rodada++;
    } 
     else {
            alert("Você errou! A resposta certa é muito");
            break;
        }
    pergunta = prompt("Qual o mes do nosso namoro: 1)- 10 2)- 07 3)- 12");
    if (pergunta == 1){
        alert("Você acertou!");
        rodada++;
    }
     else {
        alert("Você errou! A resposta certa é 10");
        break;
    }
    }
    
    if (rodada == 3){
        alert("Você ganhou!");}
}