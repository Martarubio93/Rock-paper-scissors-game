"use strict";

//Elementos HTML

const button = document.querySelector(".play-js");
const text = document.querySelector(".letsplay-js");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const  options = document.querySelector('.option-js')

//Crear un n random



function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


//Computer game



function computerGame() {
    const numRandom = getRandomNumber(10);
  if (numRandom < 3) {
     return'piedra';
  } else if (numRandom >= 6) {
    return'papel';
  } else {
    return'tijera';
  }
 

}

const piedra = 'piedra'
const papel='papel'
const tijera ='tijera'




// User game PIEDRA
function userGamePiedra(){
    let acc =0;
    const optionSelected = options.value;
    if (optionSelected === "piedra" && piedra===piedra ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "piedra" && papel === papel) 
    { message.innerHTML='Has perdido!'
     computer.innerHTML += acc++
      
    }else if (optionSelected === "piedra" && tijera === tijera){
        text.innerHTML='Has ganado!'
        player.innerHTML += acc++
    }
  }
  userGamePiedra();
  
// User game Papel 
  function userGamePapel(){
    let acc =0;
    const optionSelected = options.value;
    if (optionSelected === "papel" && papel === papel ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "papel" && tijera === tijera) 
    { message.innerHTML='Has perdido!'
     computer.innerHTML += acc++
      
    }else if (optionSelected === "papel" && piedra===piedra){
        text.innerHTML='Has ganado!'
        player.innerHTML += acc++
    }
  }

  userGamePapel();

  //User game Tijera 

function userGameTijera(){
    let acc =0;
    const optionSelected = options.value;
    if (optionSelected === "tijera" && tijera === tijera ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "tijera" && piedra===piedra)
    { message.innerHTML='Has perdido!'
     computer.innerHTML += acc++
      
    }else if (optionSelected === "tijera" && papel === papel ){
        text.innerHTML='Has ganado!'
        player.innerHTML += acc++
    }
  }

  userGameTijera();

function handleButtonClick() {
computerGame();


}

//Handlefunction

button.addEventListener("click", handleButtonClick);
