import { test } from '@jest/globals';
import Ship from '../src/ship';

test('Ship test', () => {
    expect(Ship()).toBe('hit'); //eslint-disable-line
});