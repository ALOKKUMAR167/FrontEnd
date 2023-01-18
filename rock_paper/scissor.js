const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choicebtns = document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerturn();
    playertext.textContent = `player: ${player}`;
    computertext.textContent = `computer: ${computer}`;
    resulttext.textContent = checkwinner();
}));

function computerturn() {
    const randnum = Math.floor(Math.random() * 3) + 1;

    switch (randnum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkwinner() {

    if (player == computer) {
        return "DRAW!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
    }
}