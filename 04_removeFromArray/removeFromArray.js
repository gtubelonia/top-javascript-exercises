const removeFromArray = function(ary, ...valuesToRemove) {
    const newArray = ary.filter(item => !valuesToRemove.includes(item));
    return newArray;
};

function checkRemovableValue(values){

}

// Do not edit below this line
module.exports = removeFromArray;
