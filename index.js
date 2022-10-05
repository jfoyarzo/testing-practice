const stringLength = string => {
    if (string.length >= 1 && string.length <= 10) {
        return string.length;
    } else {
        throw new Error('The string must have between 1 and 10 characters');
    }
}

const reverseString = string => {
    const splitted = string.split('');
    const reversed = splitted.reverse().join('');
    return reversed
}

class Calculator {
    static add = (num1, num2) => num1 + num2;
    static substract = (num1, num2) => num1 - num2;
    static multiply = (num1, num2) => num1 * num2;
    static divide = (num1, num2) => num1 / num2;
}

module.exports = { stringLength, reverseString, Calculator };