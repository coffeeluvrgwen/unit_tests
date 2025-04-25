import { describe, it, expect } from 'vitest';
import convertToOld from '../lib/romanNumConverter';

describe('convertToOld for integer 1', () => {
    it('should return I for 1', () => {
        expect(convertToOld(1)).toBe('I');
    });
});