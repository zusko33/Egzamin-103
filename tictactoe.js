// game.js 

class Renderer {
    cells = [...Array(9).keys()].map((el) => this.createCell(el));
    board = document.createElement('div');
    setOnClick(onClick){
        this.onClick = onClick; 
    }
    
    prepareGameboard(){
        this.cells.forEach((e) => board.appendChild(e));
        document.getElementById('board').appendChild(this.board);
    }

    createCell(){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        console.log(this.onClick);
        cell.addEventListener("click", this.onClick)

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
        renderer.setOnClick(this.getMove());
    }
    start(){
        this.renderer.prepareGameboard();
    }
    getMove(){
        return () => this.move();
    }
    move(){
        console.log('elo');
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

app();