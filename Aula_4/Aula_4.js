function conversor(){let Herois = ["", "", ""];
let Viloes = ["", "", ""];

let Forca_herois = 0;
let forca_viloes = 0;

alert("Você precisa escolher 3 personagens de street fighter.");

for (let i = 0; i < 3; i++) {
  let escolha_herois = prompt("Digite o nome do personagem " + (i + 1) + ":");
  Herois[i] = escolha_herois;
  Forca_herois += Math.floor(Math.random() * 10) + 1; // Soma a força ao total
}

console.log("Agora o array herois contém: " + Herois);
console.log("Início vilões: " + Viloes);

for (let i = 0; i < 3; i++) {
  let aleatorio = Math.floor(Math.random() * 6);
  let escolha_viloes = ["Rugal", "Akuma", "Sagat", "Vega", "Seth", "Bison"];
  Viloes[i] = escolha_viloes[aleatorio];
  forca_viloes += Math.floor(Math.random() * 10) + 1; // Soma a força ao total
}

console.log("Final vilões: " + Viloes);

if (Forca_herois > forca_viloes) {
  alert("Parabéns, você ganhou! Sua força foi de: " + Forca_herois);
} else if (Forca_herois < forca_viloes) {
  alert("Você perdeu essa batalha. A força dos inimigos era: " + forca_viloes);
} else {
  alert("Algo inesperado aconteceu, vocês empataram.");
}
}