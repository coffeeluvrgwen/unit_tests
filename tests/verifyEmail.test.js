import { describe, it, expect } from 'vitest';
import verifyEmail from '../lib/verifyEmail.js';

describe('verifyEmail returns false for missing @', () => {
    it('should return false for invalid email addresses', () => {
        expect(verifyEmail('exampleexample.com')).toBe(false);
    });
});

describe('verifyEmail returns false for empty string', () => {
    it('should return false for empty string', () => {
        expect(verifyEmail('')).toBe(false);
    });
});