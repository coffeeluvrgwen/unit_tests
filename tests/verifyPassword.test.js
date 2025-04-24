import { describe, it, expect } from 'vitest';
import verifyPassword from '../lib/verifyPassword.js';

describe('verifyPassword returns false for too-short password length', () => {
    it('should return false for shorter than 8 characters', () => {
        const result = verifyPassword('short');
        expect(result.pass).toBe(false);
        expect(result.length).toBe(false);
    });
});

describe('verifyPassword returns false for missing lowercase letter', () => {
    it('should return false for missing lowercase letter', () => {
        const result = verifyPassword('NOLOWERCASE1!');
        expect(result.pass).toBe(false);
        expect(result.lowercase).toBe(false);
    });
});

describe('verifyPassword returns false for missing uppercase letter', () => {
    it('should return false for missing uppercase letter', () => {
        const result = verifyPassword('nouppercase1!');
        expect(result.pass).toBe(false);
        expect(result.uppercase).toBe(false);
    });
});

describe('verifyPassword returns false for missing digit', () => {
    it('should return false for missing digit', () => {
        const result = verifyPassword('NoDigit!');
        expect(result.pass).toBe(false);
        expect(result.digit).toBe(false);
    });
});

describe('verifyPassword returns false for missing symbol', () => {
    it('should return false for missing symbol', () => {
        const result = verifyPassword('NoSymbol1');
        expect(result.pass).toBe(false);
        expect(result.symbol).toBe(false);
    });
}); 

describe('verifyPassword returns false for invalid characters', () => {
    it('should return false for invalid characters', () => {
        const result = verifyPassword('Invalid Char+');
        expect(result.pass).toBe(false);
        expect(result.noInvalid).toBe(false);
    });
});

describe('verifyPassword returns true for valid password', () => {
    it('should return true for valid password', () => {
        const result = verifyPassword('Abcdefg#1');
        expect(result.pass).toBe(true);
        expect(result.length).toBe(true);
        expect(result.lowercase).toBe(true);
        expect(result.uppercase).toBe(true);
        expect(result.digit).toBe(true);
        expect(result.symbol).toBe(true);
        expect(result.noInvalid).toBe(true);
    });
});

