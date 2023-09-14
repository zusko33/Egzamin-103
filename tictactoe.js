// game.js 

class Renderer {
    prepareGameboard(onClick){
        const board = document.createElement('div');
        board.classList.add('container');
        const cells = [...Array(9).keys()].map((el) => this.createCell(el, onClick));
        
        cells.forEach((e) => board.appendChild(e));
        document.getElementById('container').appendChild(board);
    }

    createCell(id, onClick){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute('data-index', id);
        cell.addEventListener("click", onClick)

        return cell;
    }
}

class TicTacToeEngine {
    winningVariants = [
        [0, 1, 2],
        [3, 4, 5],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        [6, 7, 8],
    ];
    gameState = [];
}

class Game {
    constructor(engine, renderer){
        this.engine = engine;
        this.renderer = renderer;
    }
    start(){
        this.renderer.prepareGameboard(this.move);
    }
    move(){
        console.log('move w klasie GAME');
        // uzytkownik
        // wykonaj ruch uzytkownika
        // engine.move(player);
        // wyswietl ruch
        // renderer.move(player)
        // this.endRound()


        // jak nie mamy zwyciestcy to ruch kompa // kontynuujemyt gre gdy !gameResult
        // sleep dla lepszego ui ? w rendererze
        // komputer
        // engine.move(computer);
        // wyswietl ruch
        // renderer.move(computer)
        // this.endRound()
    }
    endRound(){
        // sprawdz stan gry (Czy ktos wygral)
        this.gameResult = 'A';
        // na potem -> blokada ruchu po zakonczeonej grze?
        // renderer.blockUi
    }
    gameResult = null;
    player = 'X';
    computer = 'O'
};

function app(){
    const renderer = new Renderer();
    const engine = new TicTacToeEngine();
    const game = new Game(engine,renderer);
    game.start();
}

window.addEventListener('load', function () {
    app();
  })