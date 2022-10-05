const { stringLength, reverseString } = require('./index');

// tests for the function 'stringLength'

test('Return 5 for the word hello', () => {
    expect(stringLength('hello')).toBe(5);
})

test('Throw error for an empty string', () => {
    expect(() => stringLength('')).toThrow('The string must have between 1 and 10 characters');
})

test('Throw error for a 12 character string', () => {
    expect(() => stringLength('shoppingList')).toThrow('The string must have between 1 and 10 characters')
})

// tests for the function 'reverseString'

test('Return "peels" for "sleep"', () => {
    expect(reverseString('sleep')).toBe('peels')
})

test('Return "tacocaT" for "Tacocat"', () => {
    expect(reverseString('Tacocat')).toBe('tacocaT');
})