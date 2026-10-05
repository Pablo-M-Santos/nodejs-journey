const hpAtual = 45;
const hpMaximo = 100;
const porcentagemVida = (hpAtual / hpMaximo) * 100;

if (porcentagemVida <= 0) {
    console.log("Personagem derrotado.")
} else if ( porcentagemVida <= 25) {
    console.log("Alerta crítico! Vida baixa.")
} else if ( porcentagemVida <= 75) {
    console.log("Vida em estado intermediário.")
} else {
    console.log("Vida cheia / Saudável")
}