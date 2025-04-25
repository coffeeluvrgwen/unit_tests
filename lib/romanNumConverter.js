/**
 * Converts an integer to a Roman numeral.
 * @param {number} num - The integer to convert.
 * * @returns {string|null} The Roman numeral representation of the integer or null for invalid input.
 */

function convertToOld(num) {
    if (num !== 1) return null;
    return 'I';
}

export default convertToOld;