const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num) {
  let sum = num.reduce((number, val) =>
    number + val, 0);
  return parseInt(sum);
};

const multiply = function (numArray) {
  let product = numArray.reduce((prod, currentValue) => prod * currentValue, 1);
  return parseInt(product);
};

const power = function (base, power) {
  return parseInt(base ** power);
};

const factorial = function (num) {
  let prod = 1;
  
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    for (let i = num; i > 1; i--) {
      prod *= i;
    }
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
