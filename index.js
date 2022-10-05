const stringLength = string => {
    if (string.length >= 1 && string.length <= 10) {
        return string.length;
    } else {
        throw new Error('The string must have between 1 and 10 characters');
    }
}

module.exports = stringLength;