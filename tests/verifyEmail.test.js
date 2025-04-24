import { describe, it, expect } from 'vitest';
import verifyEmail from '../lib/verifyEmail.js';

describe('verifyEmail returns false for missing @', () => {
    it('should return false for missing @', () => {
        expect(verifyEmail('exampleexample.com')).toBe(false);
    });
});

describe('verifyEmail returns false for empty string', () => {
    it('should return false for empty string', () => {
        expect(verifyEmail('')).toBe(false);
    });
});

describe('verifyEmail returns false for non string input', () => {
    it('should return false for non string input', () => {
        expect(verifyEmail(123)).toBe(false);
    });
});

describe('verifyEmail returns false for incorrect syntax', () => {
    it('should return false for incorrect syntax', () => {
        expect(verifyEmail('example@.com')).toBe(false);
    });
});