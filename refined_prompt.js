/**
 * Converts a string with various separators into camelCase format.
 * 
 * The function takes a string containing words separated by spaces, hyphens, or underscores,
 * and converts it to camelCase where the first word is lowercase and subsequent words have
 * their first letter capitalized.
 * 
 * @param {string} input - The input string to convert. Must be a non-null string.
 * @returns {string} The converted camelCase string.
 * @throws {Error} If input is not a string, is null, or is undefined.
 * 
 * @example
 * convertCamelCase('moosa-hAssan'); // Returns: 'moosaHassan'
 * convertCamelCase('hello_world_foo'); // Returns: 'helloWorldFoo'
 * convertCamelCase('the quick brown'); // Returns: 'theQuickBrown'
 */

/**
 * Converts a string with various separators into dot notation format.
 * 
 * The function takes a string containing words separated by spaces, underscores, or hyphens,
 * and converts it to lowercase dot notation where words are joined with periods.
 * 
 * @param {string} input - The input string to convert. Must be a non-null string.
 * @returns {string} The converted dot notation string in lowercase.
 * @throws {Error} If input is not a string, is null, or is undefined.
 * 
 * @example
 * convertDotNotation('moosa-hAssan'); // Returns: 'moosa.hassan'
 * convertDotNotation('hello_world_foo'); // Returns: 'hello.world.foo'
 * convertDotNotation('The Quick Brown'); // Returns: 'the.quick.brown'
 */
function convertCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Invalid input: Please provide a non-null string.');
    }

    return input
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter
        })
        .join(''); // Join the words back together
}

function convertDotNotation(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Invalid input: Please provide a non-null string.');
    }

    return input
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .join('.') // Join with dots
        .toLowerCase(); // Convert to lowercase
}

// Example usage:
try {
    console.log(convertCamelCase('moosa-hAssan')); // Output: 'moosaHassan'
    console.log(convertCamelCase(0)); // Throws error
} catch (error) {
    console.error(error.message);
}
