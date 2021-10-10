import { test } from '@jest/globals';
import GameBoard from '../src/gameBoard';
import Ship from '../src/ship';

/* eslint-disable */
test('Check GameBoard Properties', () => {
    expect((GameBoard().hasOwnProperty('createGrid')) && (GameBoard().hasOwnProperty('receiveAttack'))).toBe(true);
});

test('Total cells in grid and cells array', () => {
    const grid = document.createElement('div');
    const cellsArray = [];

    GameBoard().createGrid(grid, cellsArray);
    
    expect((grid.children.length) && (cellsArray.length)).toBe(100);
})

test('Missed shot', () => {
    const grid = document.createElement('div');
    const cellsArray = [];

    GameBoard().createGrid(grid, cellsArray);

    expect(GameBoard().receiveAttack(cellsArray, 5, null)).toBe('Missed');
})

test('Succescful hits', () => {
    const grid = document.createElement('div');
    const cellsArray = [];
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);
    const shipsArray = [destroyer, submarine, cruiser, battleship, carrier]

    GameBoard().createGrid(grid, cellsArray);
    grid.children[11].classList.add('destroyer');
    grid.children[12].classList.add('submarine');
    grid.children[13].classList.add('cruiser');
    grid.children[14].classList.add('battleship');
    grid.children[15].classList.add('carrier');

    expect(GameBoard().receiveAttack(cellsArray, 11, shipsArray)).toBe('Succesful hit');
    expect(GameBoard().receiveAttack(cellsArray, 12, shipsArray)).toBe('Succesful hit');
    expect(GameBoard().receiveAttack(cellsArray, 13, shipsArray)).toBe('Succesful hit');
    expect(GameBoard().receiveAttack(cellsArray, 14, shipsArray)).toBe('Succesful hit');
    expect(GameBoard().receiveAttack(cellsArray, 15, shipsArray)).toBe('Succesful hit');
})