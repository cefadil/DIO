const nome = 'Viper';
const ponto = 9000;

let pontos = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
let xp = ['ferro', 'bronze', 'prata',  'ouro', 'platina diamante', 'Ascendente', 'Imortal', 'Radiante'];
let nivel = 'Radiante';

for (let i = 0; i < pontos.length; i++) {
        if (ponto-1 < pontos[i]) {
            nivel = xp[i];
            break;
        }
}
console.log(`O herói de nome ${nome} está no nível de ${nivel}`);