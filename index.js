const nomeHeroi = "Fofão";
let xpHeroi = 15000;

switch (true) {
  case xpHeroi <= 1000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Ferro`);
    break;
  case xpHeroi <= 2000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Bronze`);
    break;
  case xpHeroi <= 5000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Prata`);
    break;
  case xpHeroi <= 6000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Ouro`);
    break;
  case xpHeroi <= 7000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Platina`);
    break;
  case xpHeroi <= 8000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Ascendente`);
    break;
  case xpHeroi <= 9000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Imortal`);
    break;
  case xpHeroi <= 10000:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Radiante`);
    break;
  default:
    console.log(`O heroi de nome ${nomeHeroi} está no nível de Radiante`);
}
