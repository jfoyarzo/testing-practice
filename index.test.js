const stringLength = require('./index');

test('Return 5 for the word hello', () => {
    expect(stringLength('hello')).toBe(5);
})

test('Throw error for an empty string', () => {
    expect(() => stringLength('')).toThrow('The string must have between 1 and 10 characters');
})

test('Throw error for an 12 character string', () => {
    expect(() => stringLength('shoppingList')).toThrow('The string must have between 1 and 10 characters')
})