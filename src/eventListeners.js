import battleShip from './battleShip.js';
import renderPage from './renderPage.js';

function handleEvents(userCells) {
    const replayButton = document.querySelector('#replay');
    const shipDisplay = document.querySelector('.ship-display');
    const ships = document.querySelectorAll('.ship');
    const buttonDiv = document.querySelector('.buttons');
    let shipNameAndIndex;
    let draggedShip;
    let draggedShipLength;

    // move around user ship
    replayButton.addEventListener('click', resetGame);
    ships.forEach(ship => ship.addEventListener('dragstart', dragStart));
    ships.forEach(ship => ship.addEventListener('click', rotateShip));
    ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
        shipNameAndIndex = e.target.id;
    }));
    userCells.forEach(cell => cell.addEventListener('dragstart', dragStart));
    userCells.forEach(cell => cell.addEventListener('dragover', dragOver));
    userCells.forEach(cell => cell.addEventListener('dragenter', dragEnter));
    userCells.forEach(cell => cell.addEventListener('drop', dragDrop));

    function rotateShip(e) {
        const currentContainer = e.target.parentNode.classList[1];
        document.querySelector(`.${currentContainer}`).classList.toggle(`${currentContainer}-vertical`);
    }

    function dragStart(e) {
        draggedShip = e.target;
        draggedShipLength = draggedShip.children.length;
    }
    
    function dragOver(e) {
        e.preventDefault();
    }
    
    function dragEnter(e) {
        e.preventDefault();
    }
    
    function dragDrop() {
        let shipNameLastId = draggedShip.children[draggedShipLength - 1].id;
        let shipClass = shipNameLastId.slice(0, -2);
        let lastShipIndex = parseInt(shipNameLastId.substr(-1));
        let shipLastId = lastShipIndex + parseInt(this.dataset.id);

        let selectedShipIndex = parseInt(shipNameAndIndex.substr(-1));
        shipLastId = shipLastId - selectedShipIndex;

        const notAllowedHorizontal = [
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 11, 21, 31, 41, 51, 61, 71, 81, 91,
            2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 3, 13, 23, 33, 43, 53, 63, 73, 83, 93,
        ];

        const notAllowedVertical = [
            99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
            79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60
        ];

        let newNotAllowedHorizontal =  notAllowedHorizontal.splice(0, 10 * lastShipIndex);
        let newnotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex);

        let toPopulate = [];
        
        for (let i = 0; i < draggedShipLength; i++) {
            if (!draggedShip.classList.contains(`${shipClass}-container-vertical`)) {
                toPopulate.push(userCells[parseInt(this.dataset.id) - selectedShipIndex + i]); 
            } else if (draggedShip.classList.contains(`${shipClass}-container-vertical`)) {
                toPopulate.push(userCells[parseInt(this.dataset.id) - selectedShipIndex + i * 10 + 1]); 
            }    
        }
        
        if (!draggedShip.classList.contains(`${shipClass}-container-vertical`) && !newNotAllowedHorizontal.includes(shipLastId)) {
            if (!toPopulate.some(cell => cell.classList.contains('occupied'))) {
                for (let i = 0; i < draggedShipLength; i ++) {
                    userCells[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('occupied', shipClass);
                }
                shipDisplay.removeChild(draggedShip);
            }
        } else if (draggedShip.classList.contains(`${shipClass}-container-vertical`) && !newnotAllowedVertical.includes(shipLastId)) {
            if (!toPopulate.some(cell => cell.classList.contains('occupied'))) {
                for (let i = 0; i < draggedShipLength; i ++) {
                    userCells[parseInt(this.dataset.id) - selectedShipIndex + (i * 10) + 1].classList.add('occupied', shipClass);
                }
                shipDisplay.removeChild(draggedShip);
            }
        } else {
            return;
        }

        hideRevealElements();
    }

    function hideRevealElements() {
        if (shipDisplay.children.length <= 1) {
            shipDisplay.classList.add('hide');
            buttonDiv.classList.remove('hide');
        }
    }

    function resetGame() {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        renderPage();
        battleShip();
    }
}

export default handleEvents;