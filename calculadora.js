function calculaRanking(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas;
    console.log(saldoVitorias);
         if(saldoVitorias < 11){liga = "Ferro";} 
    else if(saldoVitorias < 21){liga = "Bronze";} 
    else if(saldoVitorias < 51){liga = "Prata";}
    else if(saldoVitorias < 81){liga = "Ouro";}
    else if(saldoVitorias < 91){liga = "Diamante";}
    else if(saldoVitorias < 101){liga = "Lendário";}
    else {liga = "Imortal";}
    return liga;
}

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

classificacao = calculaRanking(100, 25);
console.log(classificacao);