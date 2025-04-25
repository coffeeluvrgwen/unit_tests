import { describe, it, expect } from 'vitest';
import convertToOld from '../lib/romanNumConverter';

describe('convertToOld for integer 1', () => {
    it('should return I for 1', () => {
        expect(convertToOld(1)).toBe('I');
    });
});

describe('convertToOld for integer 2', () => {
    it('should return II for 2', () => {
        expect(convertToOld(2)).toBe('II');
    });
});

describe('convertToOld for integer 3', () => {
    it('should return III for 3', () => {
        expect(convertToOld(3)).toBe('III');
    });
});

describe('convertToOld for integer 4', () => {
    it('should return IIII for 4', () => {
        expect(convertToOld(4)).toBe('IIII');
    });
});

describe('convertToOld for integer 5', () => {
    it('should return V for 5', () => {
        expect(convertToOld(5)).toBe('V');
    });
});

describe('convertToOld for integer 6', () => {
    it('should return VI for 6', () => {
        expect(convertToOld(6)).toBe('VI');
    });
});

describe('convertToOld for integer 7', () => {
    it('should return VII for 7', () => {
        expect(convertToOld(7)).toBe('VII');
    });
});

describe('convertToOld for integer 8', () => {
    it('should return VIII for 8', () => {
        expect(convertToOld(8)).toBe('VIII');
    });
});

describe('convertToOld for integer 9', () => {
    it('should return VIIII for 9', () => {
        expect(convertToOld(9)).toBe('VIIII');
    });
});

describe('convertToOld for integer 10', () => {
    it('should return X for 10', () => {
        expect(convertToOld(10)).toBe('X');
    });
});