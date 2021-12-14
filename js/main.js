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
     return 'piedra';
  } else if (numRandom >= 6) {
    return 'papel';
  } else {
    return 'tijera';
  }
 

}

const piedra = 'piedra'
const papel='papel'
const tijera ='tijera'



// User game 
function userGame(){
    const optionSelected = options.value;
    const optionComputer = computerGame();
    let acc=0;

    if (optionSelected === "piedra" && optionComputer==="piedra" ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "piedra" && optionComputer === "papel") 
    { text.innerHTML='Has perdido!'
      computer.innerHTML=  `computer`+(acc+=1);
      
    }else if (optionSelected === "piedra" && optionComputer === tijera){
        text.innerHTML='Has ganado!'
        player.innerHTML = `numero de intentos:` +(acc+=1);
    } else if(optionSelected === "papel" && optionComputer === papel ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "papel" && optionComputer === tijera) 
    { text.innerHTML='Has perdido!'
     computer.innerHTML = `Computer` +(acc+=1);
      
    }else if (optionSelected === "papel" && optionComputer===piedra){
        text.innerHTML='Has ganado!'
        player.innerHTML = `Jugador` +(acc+=1);
    }else if (optionSelected === "tijera" && optionComputer === tijera ) {
      text.innerHTML='Empate!'
    } else if (optionSelected === "tijera" && optionComputer===piedra)
    { text.innerHTML='Has perdido!'
     computer.innerHTML = `computer` +(acc+=1);
      
    }else if (optionSelected === "tijera" && optionComputer=== papel ){
        text.innerHTML='Has ganado!'
        player.innerHTML = `Jugador` +(acc+=1);
    }
  }

  


function handleButtonClick(event) {
  event.preventDefault();
  
  userGame();




}

//Handlefunction

button.addEventListener("click", handleButtonClick);
