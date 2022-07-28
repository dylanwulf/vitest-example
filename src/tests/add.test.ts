import { test, expect } from 'vitest';
import add from '../add';

test('adds two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
});

test('adds two negative numbers', () => {
    expect(add(-4, -7)).toBe(-12);
});
