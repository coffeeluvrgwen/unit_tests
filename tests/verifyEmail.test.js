import { describe, it, expect } from 'vitest';
import verifyEmail from '../lib/verifyEmail.js';

describe('verifyEmail', () => {
    it('should return false for invalid email addresses', () => {
        expect(verifyEmail('exampleexample.com')).toBe(false);
    });
});