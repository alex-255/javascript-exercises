const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  const sumCallback = (total, element) => {
    return total + element;
  };
  return arr.reduce(sumCallback, 0);
};

const multiply = function (arr) {
  const multiplyCallback = (total, element) => {
    return total * element;
  };
  return arr.reduce(multiplyCallback, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
