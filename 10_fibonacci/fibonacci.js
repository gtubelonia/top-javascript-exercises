const fibonacci = function(num) {
    let previousNum1 = 1, sum = 0, previousNum2 = 1;

    if (num < 0){
        return "OOPS";
    }
    if(num == 0){
        return 0;
    } 
    if(num == 1 || num == 2){
        return 1;
    }

    for(let i = 2; i < num; i++){
        sum = previousNum1 + previousNum2;
        previousNum2 = previousNum1;
        previousNum1 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
