const { stringLength, reverseString, Calculator } = require('./index');

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

// tests for the Calculator class

describe('Calculator class tests', () => {
    describe('add method tests', () => {
        test('2 + 3 = 5', () => {
            expect(Calculator.add(2, 3)).toBe(5);
        });
        test('15 + 20 = 35', () => {
            expect(Calculator.add(15, 20)).toBe(35);
        });
        test('1002 + 1547 = 2549', () => {
            expect(Calculator.add(1002, 1547)).toBe(2549);
        });
    });
    describe('substract method tests', () => {
        test('5 - 2 = 3', () => {
            expect(Calculator.substract(5, 2)).toBe(3);
        });
        test('450 - 20 = 430', () => {
            expect(Calculator.substract(450, 20)).toBe(430);
        });
        test('5548 - 2446 = 3102', () => {
            expect(Calculator.substract(5548, 2446)).toBe(3102);
        });
    });
    describe('multiply method tests', () => {
        test('5 * 4 = 20', () => {
            expect(Calculator.multiply(5, 4)).toBe(20);
        })
        test('25 * 10 = 250', () => {
            expect(Calculator.multiply(25, 10)).toBe(250);
        })
        test('745 * 1830 = 1363350', () => {
            expect(Calculator.multiply(745, 1830)).toBe(1363350);
        });
    });
    describe('divide method tests', () => {
        test('8 / 2 = 4', () => {
            expect(Calculator.divide(8, 2)).toBe(4);
        });
        test('600 / 3 = 200', () => {
            expect(Calculator.divide(600, 3)).toBe(200);
        });
        test('5 / 2 = 2.5', () => {
            expect(Calculator.divide(5, 2)).toBeCloseTo(2.5);
        });
    })
});