/**
 * Converts a given text to Kebab Case (lowercase with hyphens).
 * Removes spaces and hyphens, then converts to lowercase.
 * 
 * @param {string} text - The input text to convert to kebab case
 * @returns {string} The text converted to kebab case
 * @throws {TypeError} If input is not a string
 * @throws {Error} If input is an empty string
 * 
 * @example
 * toKebabCase("Moosa HASSan") // returns "moosa-hassan"
 * toKebabCase("Alice-Bord") // returns "alice-bord"
 * toKebabCase("Jon") // returns "jon"
 */
function toKebabCase(text) {
    // Type checking
    if (typeof text !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof text}`);
    }

    // Empty string checking
    if (text.trim().length === 0) {
        throw new Error('Input string cannot be empty or contain only whitespace');
    }

    // Convert to kebab case: remove extra spaces, replace spaces with hyphens, convert to lowercase
    return text
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .toLowerCase();
}

// Test cases
console.log('=== Test Cases ===');
try {
    console.log(`toKebabCase("Moosa HASSan"): ${toKebabCase("Moosa HASSan")}`); // moosa-hassan
    console.log(`toKebabCase("Alice-Bord"): ${toKebabCase("Alice-Bord")}`); // alice-bord
    console.log(`toKebabCase("Jon"): ${toKebabCase("Jon")}`); // jon
    console.log(`toKebabCase("Hello World Test"): ${toKebabCase("Hello World Test")}`); // hello-world-test
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Error handling test cases
console.log('\n=== Error Handling Tests ===');
try {
    toKebabCase(123);
} catch (error) {
    console.error(`Error: ${error.message}`); // Expected a string, but received number
}

try {
    toKebabCase("");
} catch (error) {
    console.error(`Error: ${error.message}`); // Input string cannot be empty or contain only whitespace
}

try {
    console.log(`toKebabCase("Moosa HASSan"): ${toKebabCase("Moosa HASSan")}`); // MoosaHassan
    console.log(`toKebabCase("Hello World Test"): ${toKebabCase("Hello World Test")}`); // HelloWorldTest
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Error handling test cases
console.log('\n=== Error Handling Tests ===');
try {
    toKebabCase(123);
} catch (error) {
    console.error(`Error: ${error.message}`); // Expected a string, but received number
}

try {
    toKebabCase("");
} catch (error) {
    console.error(`Error: ${error.message}`); // Input string cannot be empty or contain only whitespace
}

try {
    toKebabCase(null);
} catch (error) {
    console.error(`Error: ${error.message}`); // Expected a string, but received object
}