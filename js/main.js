"use strict";

const button = document.querySelector(".play-js");
const options = document.querySelector(".option-js");
const text = document.querySelector(".letsplay-js");
const playerAcc = document.querySelector(".player");
const computerAcc = document.querySelector(".computer");
const restart = document.querySelector(".restart");
const totalRounds = document.querySelector(".rounds");

//Get a random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Computer with random number function
function computerGame() {
  const randomNumber = getRandomNumber(10);
  if (randomNumber < 3) {
    return "piedra";
  } else if (randomNumber >= 6) {
    return "papel";
  } else {
    return "tijera";
  }
}

// Computer vs user game

function userGame() {
  let optionSelected = options.value;
  let ComputerOption = computerGame();
  if (optionSelected === "tijera" && ComputerOption === "tijera") {
    text.innerHTML = "¡Empate!";
  } else if (optionSelected === "tijera" && ComputerOption === "papel") {
    userScore();
    text.innerHTML = "¡Has ganado!";
  } else if (optionSelected === "tijera" && ComputerOption === "piedra") {
    computerScore();
    text.innerHTML = "¡Has perdido!";
  } else if (optionSelected === "papel" && ComputerOption === "papel") {
    text.innerHTML = "¡Empate!";
  } else if (optionSelected === "papel" && ComputerOption === "piedra") {
    userScore();
    text.innerHTML = "¡Has ganado!";
  } else if (optionSelected === "papel" && ComputerOption === "tijera") {
    computerScore();
    text.innerHTML = "¡Has perdido!";
  } else if (optionSelected === "piedra" && ComputerOption === "piedra") {
    text.innerHTML = "¡Empate!";
  } else if (optionSelected === "piedra" && ComputerOption === "tijeras") {
    userScore();
    return (text.innerHTML = "¡Has ganado!");
  } else if (optionSelected === "piedra" && ComputerOption === "papel") {
    computerScore();
    text.innerHTML = "¡Has perdido!";
  }
  rounds();
}

let acc = 0;

//Computer acc
function computerScore() {
  computerAcc.innerHTML = `Ordenador: ${acc++}`;

  if (acc === 10) {
    collapsed();
    return (acc = 0);
  }
}

let ac = 0;

function rounds() {
  totalRounds.innerHTML = `Número de jugadas: ${ac++}`;
  if (ac == 10) {
    
    return (ac = 0);
  }
}

let counter = 0;
// User acc
function userScore() {
  playerAcc.innerHTML = `Jugador: ${counter++}`;
  if (counter === 10) {
    collapsed();
    return (counter = 0);
  }
}

function collapsed() {
  restart.classList.toggle("collapsed");
}

function playGame(event) {
  event.preventDefault();
  userGame();
}

function restartGame(event) {
  event.preventDefault();
  computerAcc.innerHTML = `Ordenador: ${(acc = 0)}`;
  playerAcc.innerHTML = `Jugador: ${(counter = 0)}`;
  totalRounds.innerHTML = `Número de jugadas: ${(ac = 0)}`;
  userScore();
  userGame();
  text.innerHTML = `¡Vamos a Jugar!`;
}

button.addEventListener("click", playGame);
restart.addEventListener("click", restartGame);
