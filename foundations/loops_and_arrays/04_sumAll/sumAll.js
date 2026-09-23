const sumAll = function (firstNum, lastNum) {
  if (
    !Number.isInteger(firstNum) ||
    !Number.isInteger(lastNum) ||
    firstNum < 0 ||
    lastNum < 0
  ) {
    return "ERROR";
  }

  if (firstNum > lastNum) {
    const temp = lastNum;
    lastNum = firstNum;
    firstNum = temp;
  }

  let sum = 0;
  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
