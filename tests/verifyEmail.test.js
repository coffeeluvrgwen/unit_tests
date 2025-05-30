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

describe('verifyEmail returns false for invalid domain', () => {
    it('should return false for invalid domain', () => {
        expect(verifyEmail('example@com')).toBe(false);
    });
});

describe('verifyEmail return true for valid email', () => {
    it('should return true for valid email', () => {
        expect(verifyEmail('example@example.com')).toBe(true);
    });
});

describe('verifyEmail returns true for emails with hyphens and underscores', () => {
    it('should return true for emails with hyphens and underscores', () => {
        expect(verifyEmail('example_email@example-example.com')).toBe(true);
    });
});

describe('verifyEmail returns true for emails with numbers', () => {
    it('should return true for emails with numbers', () => {
        expect(verifyEmail('example112@example.com')).toBe(true);
    });
});

describe('verifyEmail returns true for emails with special characters', () => {
    it('should return true for emails with special characters', () => {
        expect(verifyEmail('example#$@example.com')).toBe(true);
    });
});