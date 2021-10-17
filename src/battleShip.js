import GameBoard from './gameBoard.js';
import Ship from './ship.js';
import handleEvents from './eventListeners.js';

function battleShip() {
    const userGrid = document.querySelector('.grid-user');
    const cpuGrid = document.querySelector('.grid-cpu');
    const startButton = document.querySelector('#start');
    const replayButton = document.querySelector('#replay');
    let turnDisplay = document.querySelector('#turn');
    const gameStatus = document.querySelector('#game-status');
    const userDestroyer = Ship(2);
    const userSubmarine = Ship(3);
    const userCruiser = Ship(3);
    const userBattleship = Ship(4);
    const userCarrier = Ship(5);
    const cpuDestroyer = Ship(2);
    const cpuSubmarine = Ship(3);
    const cpuCruiser = Ship(3);
    const cpuBattleship = Ship(4);
    const cpuCarrier = Ship(5);
    let userCells = [];
    let cpuCells = [];
    let cpuPickedCells = [];
    let isGameOver = false;
    let currentPlayer = 'user';
    const shipArray = [
        {
            name: 'carrier',
            directions: [
                [0, 1, 2, 3, 4],
                [0, 10, 20, 30, 40],
            ]
        },
        {
            name: 'battleship',
            directions: [
                [0, 1, 2, 3],
                [0, 10, 20, 30]
            ]
        },
        {
            name: 'submarine',
            directions: [
                [0, 1, 2],
                [0, 10, 20]
            ]
        },
        {
            name: 'cruiser',
            directions: [
                [0, 1, 2],
                [0, 10, 20]
            ]
        },
        {
            name: 'destroyer',
            directions: [
                [0, 1],
                [0, 10]
            ]
        }
    ];

    GameBoard().createGrid(userGrid, userCells);
    GameBoard().createGrid(cpuGrid, cpuCells);
    handleEvents(userCells);

    startButton.addEventListener('click', () => {
        startButton.classList.add('hide');
        cpuGrid.classList.remove('hide');
        gameStatus.innerText = 'Red = Hit \nBlue = Missed';
        startGame();
    });
    
    function generateCpuShips(ship) {
        let randomDirection = Math.floor(Math.random() * ship.directions.length);
        let current = ship.directions[randomDirection];

        const direction = (randomDirection === 0) ? 1: 10;
        let randomStart = Math.abs(Math.floor(Math.random() * cpuCells.length - (ship.directions[0].length * direction)));

        const isTaken = current.some(index => cpuCells[randomStart + index].classList.contains('occupied'));
        const isAtRightEdge = current.some(index => (randomStart + index) % 10 === 10 - 1);
        const isAtLeftEdge = current.some(index => (randomStart + index) % 10 === 0);

        if (!isTaken && !isAtRightEdge && !isAtLeftEdge) {
            current.forEach(index => cpuCells[randomStart + index].classList.add('occupied', ship.name));
        }
        else {
            generateCpuShips(ship);
        }
    }

    shipArray.forEach(ship => generateCpuShips(ship));

    function startGame() {
        if (isGameOver === true) {
            return;
        } else if (currentPlayer === 'user') {
            turnDisplay.innerText = 'Your turn';
            cpuCells.forEach(cell => cell.addEventListener('click', playerGo));
        } else {
            turnDisplay.innerText = 'Computer\'s turn';
            setTimeout(computerGo, 1000);
        }
    }

    function playerGo(e) {
        const cpuShipsArr = [cpuDestroyer, cpuSubmarine, cpuCruiser, cpuBattleship, cpuCarrier];
        const clickedCellId = e.target.dataset.id;
        cpuCells[clickedCellId].removeEventListener('click', playerGo);
        GameBoard().receiveAttack(cpuCells, clickedCellId, cpuShipsArr);
        checkWin();
        currentPlayer = 'computer';
        startGame();
    }

    function computerGo() {
        let userShipsArr = [userDestroyer, userSubmarine, userCruiser, userBattleship, userCarrier];
        let randomCell = Math.floor(Math.random() * userCells.length);
    
        if (cpuPickedCells.includes(randomCell)) {
            computerGo();
        } else {
            GameBoard().receiveAttack(userCells, randomCell, userShipsArr);
            cpuPickedCells.push(randomCell);
        }
        turnDisplay.innerText = 'Your turn';
    }

    function checkWin() {
        if (
            userDestroyer.isSunk() &&
            userSubmarine.isSunk() &&
            userCruiser.isSunk() &&
            userBattleship.isSunk() &&
            userCarrier.isSunk()
        ) {
            gameStatus.innerText = 'You lost!';
            gameOver();
        } else if (
            cpuDestroyer.isSunk() &&
            cpuSubmarine.isSunk() &&
            cpuCruiser.isSunk() &&
            cpuBattleship.isSunk() &&
            cpuCarrier.isSunk()
        ) {
            gameStatus.innerText = 'You win!';
            gameOver();
        }
    }

    function gameOver() {
        isGameOver = true;
        turnDisplay.classList.add('hide');
        cpuCells.forEach(cell => cell.removeEventListener('click', playerGo));
        replayButton.classList.remove('hide');
    }
}

export default battleShip;