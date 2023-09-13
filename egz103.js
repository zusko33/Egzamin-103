const cells = document.querySelectorAll(".cell");
const cellsArray = Array.from(cells);
const winningVariants = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let options = ["", "", "", "", "", "", "", "", ""];
let player = "X";
startGame();
 
function startGame(){
    cellsArray.forEach(cell => cell.addEventListener("click", cellClick));
}

function cellClick(){
    const cellIndex = this.getAttribute("data-index");

    if(options[cellIndex] !== ""){
        return;
    }
    newCell(this,cellIndex);
    checkWinner();
    computerMove();
    checkWinner();
    switchPlayers();
}

function newCell(cell, index){
    options[index] = player;
    cell.innerText = player;
}

function computerMove(){
    var emptyCells = [];
    
    cells.forEach(function(cell){
        if (cell.innerText == "") {
            emptyCells.push(cell);
        }
    });
    var randomCell = Math.floor(Math.random()* emptyCells.length);
    emptyCells[randomCell].innerText = player; 
    checkWinner();
}

function switchPlayers() {
    player = player === "X" ? "O" : "X";
    }

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winningVariants.length; i++){
        const [A, B, C] = winningVariants[i];
        const cell1 = options[A];
        const cell2 = options[B];
        const cell3 = options[C];

        if (cell1 === "" || cell2 === "" || cell3 === ""){
            continue;
        }
        if (cell1 === cell2 && cell2 === cell3){
            roundWon = true;
            break;
        }
    }
    
    if (roundWon){
        const won = document.createElement("h3");
        won.id = "wonMessage";
        const wonText = document.createTextNode("We have a winner!");
        won.appendChild(wonText);
        document.getElementById("board").appendChild(won);
        creatButton();
    } else if (!options.includes("")) { 
        if (!roundWon){
        const rem = document.createElement("h3");
        rem.id = "remMessage";
        const remText = document.createTextNode("REMIS!");
        rem.appendChild(remText);
        document.getElementById("board").appendChild(rem);
        creatButton();
        }
    } else {
            switchPlayers();
    }
}

function creatButton(){
        const button = document.createElement("button");
        button.innerText = "RESTART";
        button.id = "reButton";
        document.getElementById("board").appendChild(button);
        button.addEventListener("click", restartGame);
}

function restartGame() {
    cells.forEach((cell) => cell.innerText = "");
    const wonMessage = document.getElementById("wonMessage");
    if (wonMessage) {
        wonMessage.remove();
    }
    const remMessage = document.getElementById("remMessage");
    if (remMessage) {
        remMessage.remove();
    }
    document.getElementById("reButton").remove();
    player = "X";
    options = ["", "", "", "", "", "", "", "", ""];
}
