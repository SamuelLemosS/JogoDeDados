const j1 = document.getElementById("j1");
const j2 = document.getElementById("j2");
const reinicia = document.getElementById("reinicia");
const h2=document.getElementById("h2");
var dado1=0;
var dado2=0;
var nd1=0,nd2=0,aleatorio=10,v1=0,v2=0;

const jogada1 = () => {
  if(nd1>=nd2){
    while(aleatorio>=6){
      aleatorio=aleatorio=((Math.random() * 10)+1);;
    }
    dado1=aleatorio.toFixed(0);
    nd1++;
    h2.innerHTML="Agora o Jogador numero 2 pode jogar"
  }else{
    h2.innerHTML="Agora o Jogador numero 2 pode jogar"
  }
}

const jogada2 = () => {
  if(nd1>nd2){
    aleatorio=((Math.random() * 10)+1);
    while(aleatorio>=6){
        aleatorio=((Math.random() * 10)+1);
    }
    dado2=aleatorio.toFixed(0);
    nd2++;
    if(dado1>dado2){
        h2.innerHTML=`O jogador numero 1 tirou ${dado1} e o jogador numero 2 tirou ${dado2} 
      O vencendor dessa rodada foi o jogador numero 1<br>`;
      v1++;
    }else if(dado1<dado2){
        h2.innerHTML=`O jogador numero 1 tirou ${dado1} e o jogador numero 2 tirou ${dado2} 
      O vencendor dessa rodada foi o jogador numero 2<br>`;
      v2++;
    }else if(dado1=dado2){
        h2.innerHTML=`O jogador numero 1 tirou ${dado1} e o jogador numero 2 tirou ${dado2}
      O jogo dessa rodada foi um empate<br>`;
    }
    if(nd2==10){
      if(v1>v2){
        h2.innerHTML+=`O jogador numero 1 ganhou ${v1} jogo e o jogador numero 2 ganhou ${v2} jogos 
      O vencendor desse jogo foi o jogador numero 1`;
      dado1=0;
      dado2=0;
      nd1=0;
      nd2=0;
      v1=0;
      v2=0;
      }else{
        h2.innerHTML+=`O jogador numero 1 ganhou ${v1} jogo e o jogador numero 2 ganhou ${v2} jogos 
      O vencendor desse jogo foi o jogador numero 2`;
      dado1=0;
      dado2=0;
      nd1=0;
      nd2=0;
      v1=0;
      v2=0;
      }
    }
  }else{
    h2.innerHTML="O jogador numero 1 deve jogar primeiro";
  }
}

const reiniciar = () => {
  dado1=0;
  dado2=0;
  nd1=0;
  nd2=0;
  v1=0;
  v2=0;
  h2.innerHTML="O jogo foi reiniciado";
}

j1.onclick = jogada1;
j2.onclick = jogada2;
reinicia.onclick = reiniciar;