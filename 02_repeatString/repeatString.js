const repeatString = function(word, value) {
    let stringRepeat = "";

    if(value < 0){
        return "ERROR";
    }
    for(let i = 0; i < value; i++){
        stringRepeat += word;
    }

    return stringRepeat;
};

// Do not edit below this line
module.exports = repeatString;
