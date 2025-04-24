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
