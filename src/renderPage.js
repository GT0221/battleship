function renderPage() {
    const div = document.createElement('div');
    div.classList.add('container');

    renderProjectTitle(div);
    renderGridDivs(div);
    renderButtonsDiv(div);
    renderInfoDiv(div);

    document.body.appendChild(div);
}

function renderProjectTitle(container) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');

    div.classList.add('project-title');
    h1.innerText = 'BattleShip!';

    div.appendChild(h1);
    container.appendChild(div);
}

function renderGridDivs(container) {
    const gameBoardDiv = document.createElement('div');
    const userGridDiv = document.createElement('div');
    const cpuGridDiv = document.createElement('div');

    gameBoardDiv.classList.add('game-board');
    userGridDiv.classList.add('grid');
    userGridDiv.classList.add('grid-user');
    cpuGridDiv.classList.add('div');
    cpuGridDiv.classList.add('grid-cpu');
    cpuGridDiv.classList.add('hide');

    gameBoardDiv.appendChild(userGridDiv);
    gameBoardDiv.appendChild(cpuGridDiv);
    renderShipDisplay(gameBoardDiv);
    container.appendChild(gameBoardDiv);
}

function renderShipDisplay(gameBoard) {
    const instructionDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const shipDisplayDiv = document.createElement('div');

    instructionDiv.classList.add('instructions');
    shipDisplayDiv.classList.add('ship-display');

    h3.innerText = 'Click on ships to rotate horizontal/vertical then drag over grid.';
    h3.style.color = 'white';
    h3.style.margin = '10px 10px';

    instructionDiv.appendChild(h3);
    shipDisplayDiv.appendChild(instructionDiv);
    const shipObj = {
        'carrier': 5, 
        'battleship': 4,
        'cruiser': 3,
        'submarine': 3,
        'destroyer': 2
    };
    
    for (const ship in shipObj) {
        const shipContainerDiv = document.createElement('div');
        shipContainerDiv.classList.add('ship');
        shipContainerDiv.classList.add(`${ship}-container`);
        shipContainerDiv.setAttribute('draggable', true);

        for (let i = 0; i < shipObj[ship]; i++) {
            const div = document.createElement('div');
            div.id = `${ship}-${i}`;
            shipContainerDiv.appendChild(div);
        }
        shipDisplayDiv.appendChild(shipContainerDiv);
    }
    gameBoard.appendChild(shipDisplayDiv);
}

function renderButtonsDiv(container) {
    const buttonsDiv = document.createElement('div');
    const startButton = document.createElement('button');
    const replayButton = document.createElement('button');

    buttonsDiv.classList.add('buttons');
    buttonsDiv.classList.add('hide');
    replayButton.classList.add('hide');
    startButton.id = 'start';
    replayButton.id = 'replay';

    startButton.innerText = 'Start';
    replayButton.innerText = 'Play Again';

    buttonsDiv.appendChild(startButton);
    buttonsDiv.appendChild(replayButton);
    container.appendChild(buttonsDiv);
}

function renderInfoDiv(container) {
    const div = document.createElement('div');
    const h3Turn = document.createElement('h3');
    const h3GameStatus = document.createElement('h3');

    div.classList.add('info');
    h3Turn.id = 'turn';
    h3GameStatus.id = 'game-status';
    div.appendChild(h3Turn);
    div.appendChild(h3GameStatus);
    container.appendChild(div);
}

export default renderPage;