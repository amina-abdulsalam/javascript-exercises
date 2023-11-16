const reverseString = function(string) {
    let reversedString = "";

    for(i = string.length; i > 0; i--) {
        let piece = string.substring(i-1, i);
        reversedString = reversedString.concat(piece);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
