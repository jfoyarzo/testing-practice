const stringLength = require('./index')

test('Return 5 for the word hello', () => {
    expect(stringLength('hello')).toBe(5)
})