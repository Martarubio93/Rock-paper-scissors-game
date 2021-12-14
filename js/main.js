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



// User game 
function userGame(piedra,papel,tijera){
    const optionSelected = options.value;
    if (optionSelected === "piedra" && piedra===piedra ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "piedra" && papel === papel) 
    { text.innerHTML='Has perdido!'
     computer.innerHTML += acc++
      
    }else if (optionSelected === "piedra" && tijera === tijera){
        text.innerHTML='Has ganado!'
        player.innerHTML += acc++
    } else if(optionSelected === "papel" && papel === papel ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "papel" && tijera === tijera) 
    { text.innerHTML='Has perdido!'
     computer.innerHTML += acc++
      
    }else if (optionSelected === "papel" && piedra===piedra){
        text.innerHTML='Has ganado!'
        player.innerHTML += acc++
    }else if (optionSelected === "tijera" && tijera === tijera ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "tijera" && piedra===piedra)
    { text.innerHTML='Has perdido!'
     computer.innerHTML += acc++
      
    }else if (optionSelected === "tijera" && papel === papel ){
        text.innerHTML='Has ganado!'
        player.innerHTML += acc++
    }
  }

  


function handleButtonClick(event) {
  event.preventDefault();
  computerGame();
  userGame();




}

//Handlefunction

button.addEventListener("click", handleButtonClick);
