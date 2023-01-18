const cells = document.querySelectorAll(".cell");
const statustext = document.querySelector("#statustext");
const restartbtn = document.querySelector("#restartbtn");
const wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let option = ["", "", "", "", "", "", "", "", ""];
let currentplayer = "X";
let running = false;

initializegame();

function initializegame() {
    cells.forEach(cell => cell.addEventListener("click", cellclicked));
    restartbtn.addEventListener("click", restartgame);
    statustext.textContent = `${currentplayer}'s turn`;
    running = true;
}

function cellclicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (option[cellIndex] != "" || !running) {
        return;
    }
    updatecell(this, cellIndex);
    checkwinner();

}

function updatecell(cell, index) {
    option[index] = currentplayer;
    cell.textContent = currentplayer;
}

function changeplayer() {
    currentplayer = (currentplayer == "X") ? "O" : "X";
    statustext.textContent = `${currentplayer}'s turn`;
}

function checkwinner() {

    let roundwon = false;

    for (let i = 0; i < wincondition.length; i++) {
        const codition = wincondition[i];
        const cellA = option[codition[0]];
        const cellB = option[codition[1]];
        const cellC = option[codition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundwon = true;
            break;
        }

    }

    if (roundwon) {
        statustext.textContent = `${currentplayer} wins!`;
        running = false;
    } else if (!option.includes("")) {
        statustext.textContent = `DRAW!`;
        running = false;
    } else {
        changeplayer();
    }
}

function restartgame() {
    currentplayer = "X";
    option = ["", "", "", "", "", "", "", "", ""];
    statustext.textContent = `${currentplayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}