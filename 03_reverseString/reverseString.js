const reverseString = function(word) {
    let reverse = "";
    for(let i = 0; i < word.length; i++){
        reverse += word[word.length-i-1];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
