import { test } from '@jest/globals';
import Ship from '../src/ship';

/* eslint-disable */
test('Carrier: Test length', () => {
    let userCarrier = Ship(5);

    expect(userCarrier.shipLength).toBe(5);
});

test('Carrier: Test not sunk', () => {
    let userCarrier = Ship(5);
    
    for (let i = 0; i < 4; i++) {
        userCarrier.hit(i);
    }

    expect(userCarrier.isSunk(userCarrier.hit())).toBe(false);
});

test('Carrier: Test sunk', () => {
    let userCarrier = Ship(5);
    
    for (let i = 0; i < 5; i++) {
        userCarrier.hit(i);
    }

    /* eslint-disable */
    expect(userCarrier.isSunk(userCarrier.hit())).toBe(true);
});

test('Battleship: Test length', () => {
    let userBattleShip = Ship(4);

    /* eslint-disable */
    expect(userBattleShip.shipLength).toBe(4);
});

test('Battleship: Test not sunk)', () => {
    let userBattleShip = Ship(4);
    
    for (let i = 0; i < 3; i++) {
        userBattleShip.hit(i);
    }

    /* eslint-disable */
    expect(userBattleShip.isSunk(userBattleShip.hit())).toBe(false);
});

test('Battleship: Test sunk', () => {
    let userBattleShip = Ship(4);
    
    for (let i = 0; i < 4; i++) {
        userBattleShip.hit(i);
    }

    /* eslint-disable */
    expect(userBattleShip.isSunk(userBattleShip.hit())).toBe(true);
});

test('Cruiser: Test length', () => {
    let userCruiser = Ship(3);

    /* eslint-disable */
    expect(userCruiser.shipLength).toBe(3);
});

test('Cruiser: Test not sunk', () => {
    let userCruiser = Ship(3);
    
    for (let i = 0; i < 2; i++) {
        userCruiser.hit(i);
    }

    /* eslint-disable */
    expect(userCruiser.isSunk(userCruiser.hit())).toBe(false);
});

test('Cruiser: Test sunk', () => {
    let userCruiser = Ship(3);
    
    for (let i = 0; i < 3; i++) {
        userCruiser.hit(i);
    }

    /* eslint-disable */
    expect(userCruiser.isSunk(userCruiser.hit())).toBe(true);
});

test('Submarine: Test length', () => {
    let userSubmarine = Ship(3);

    /* eslint-disable */
    expect(userSubmarine.shipLength).toBe(3);
});

test('Submarine: Test not sunk', () => {
    let userSubmarine = Ship(3);
    
    for (let i = 0; i < 2; i++) {
        userSubmarine.hit(i);
    }

    /* eslint-disable */
    expect(userSubmarine.isSunk(userSubmarine.hit())).toBe(false);
});

test('Submarine: Test sunk', () => {
    let userSubmarine = Ship(3);
    
    for (let i = 0; i < 3; i++) {
        userSubmarine.hit(i);
    }

    /* eslint-disable */
    expect(userSubmarine.isSunk(userSubmarine.hit())).toBe(true);
});

test('Destroyer: Test length', () => {
    let userBattleShip = Ship(2);

    /* eslint-disable */
    expect(userBattleShip.shipLength).toBe(2);
});

test('Destroyer: Test not sunk', () => {
    let userDestroyer = Ship(2);
    
    userDestroyer.hit(1);

    /* eslint-disable */
    expect(userDestroyer.isSunk(userDestroyer.hit())).toBe(false);
});

test('Destroyer: Test destroyer', () => {
    let userDestroyer = Ship(2);
    userDestroyer.hit(1);
    userDestroyer.hit(2);
    /* eslint-disable */
    expect(userDestroyer.isSunk(userDestroyer.hit())).toBe(true);
});