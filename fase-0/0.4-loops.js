
// Sei exatamente quantas vezes o loop vai rodar
// for (let i = 0; i < 3; i++) {
//     console.log("Número atual: ", i)
// }

// Quando não sei quantas vezes o loop vai rodar
// let contador = 0;
// while (contador < 3) {
//     console.log("While contando: ", contador)
//     contador++;
// }

// Parecido com while mas sempre roda pelo menos uma vez
// let tentativas = 0;

// do {
//     console.log("Tentativa de conexão n: ", tentativas + 1);
//     tentativas++;
// } while (tentativas < 2);

// Pegar o valor de cada item em uma lista

// const habilidades = ["JavaScript", "Node.js", "Docker"];

// for (const skill of habilidades) {
//     console.log("Estudando: ", skill)
// }

//Percorrer chaves de Objetos

// const usuario = { nome: "Pablo", cargo: "Dev"};

// for (const propriedade in usuario) {
//     console.log(propriedade, ":", usuario[propriedade])
// }


for( let ataque = 1; ataque <= 3; ataque++) {
    console.log("Turno", ataque, "iniciado.");
}

const pocoes = ["Poção de Vida", "Poção de Mana", "Elixir Raro"];

for ( let pocao of pocoes) {
    console.log("O jogador encontrou: ", pocao)
}

let vidaAtual = 10;
let vidaMaxima = 30;

while (vidaAtual < vidaMaxima) {
    vidaAtual += 5;
    console.log("Curando... Vida Atual: ", vidaAtual);
}