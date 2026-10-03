//1

const ataqueBase = 25;
const buffMagico = 12;
const danoTotal = ataqueBase + buffMagico;

const ehPar = danoTotal % 2 === 0;

//2
const pontosdeVida = 40;
const nivel = 3;

const podeLutar = pontosdeVida > 0 && nivel >= 2;

//3
const mensagemBatalha = podeLutar ? "Entrar na masmorra" : "Recuar pra curar";

console.log("Dano Total:", danoTotal);
console.log("O dano é par?", ehPar);
console.log("Status de Combate:", mensagemBatalha);
