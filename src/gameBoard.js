function GameBoard() {
    function createGrid(grid, cells) {
        for (let i = 0; i < 10 * 10; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.id = i;
            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    function receiveAttack(cells, cellNumber, ship) {
        let attackStatus;
        if (
            !cells[cellNumber].classList.contains('hit') &&
            !cells[cellNumber].classList.contains('miss')
        ) {
            if (cells[cellNumber].classList.contains('destroyer')) {
                cells[cellNumber].classList.add('hit');
                ship[0].hit(cellNumber);
                attackStatus = 'Succesful hit on destroyer!';
            } else if (cells[cellNumber].classList.contains('submarine')) {
                cells[cellNumber].classList.add('hit');
                ship[1].hit(cellNumber);
                attackStatus = 'Succesful hit on submarine!';
            } else if (cells[cellNumber].classList.contains('cruiser')) {
                cells[cellNumber].classList.add('hit');
                ship[2].hit(cellNumber);
                attackStatus = 'Succesful hit on cruiser!';
            } else if (cells[cellNumber].classList.contains('battleship')) {
                cells[cellNumber].classList.add('hit');
                ship[3].hit(cellNumber);
                attackStatus = 'Succesful hit on battleship!';
            } else if (cells[cellNumber].classList.contains('carrier')) {
                cells[cellNumber].classList.add('hit');
                ship[4].hit(cellNumber);
                attackStatus = 'Succesful hit on carrier!';
            } else if (!cells[cellNumber].classList.contains('occupied')) {
                cells[cellNumber].classList.add('miss');
                attackStatus = 'Missed!';
            }
        }

        return attackStatus;
    }

    return {
        createGrid,
        receiveAttack,
    };
}

export default GameBoard;