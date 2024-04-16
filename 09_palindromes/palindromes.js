const palindromes = function (palindrome) {
    let cleanPal = palindrome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").join("").toLowerCase();
    let clean = cleanPal.split("");
    let rvrs = cleanPal.split("").reverse();

    for(let i = 0; i < clean.length ; i++){
        if (clean[i]!= rvrs[i]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
palindromes("A car, a man, a maraca.");