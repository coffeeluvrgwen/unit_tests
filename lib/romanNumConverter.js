/**
 * Converts an integer to a Roman numeral.
 * @param {number} num - The integer to convert.
 * @returns {string|null} The Roman numeral representation of the integer or null for invalid input.
 */

function convertToOld(num) {
    if (typeof num !== 'number' || num <= 0 || num > 3999) {
        return null; // Return null for invalid input
    }

    const romanIndex = [
        [1000, 'M'],
        [500, 'D'],
        [100, 'C'],
        [50, 'L'],
        [10, 'X'],
        [5, 'V'],
        [1, 'I']
    ];

    let result = '';
    let remaining = num;

    for (const [value, symbol] of romanIndex) {
        const count = Math.floor(remaining / value);
        result += symbol.repeat(count);
        remaining -= count * value;
    }
    return result;
}

export default convertToOld;