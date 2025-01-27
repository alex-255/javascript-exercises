const sumAll = function (startNum, endNum) {
  if (startNum > endNum) {
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }

  if (
    startNum < 0 ||
    endNum < 0 ||
    typeof startNum != "number" ||
    typeof endNum != "number" ||
    startNum % 1 != 0 ||
    endNum % 1 != 0
  ) {
    return "ERROR";
  }

  let sum = 0;
  for (; startNum <= endNum; startNum++) {
    sum += startNum;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
