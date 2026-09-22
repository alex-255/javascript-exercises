const repeatString = function (string, number) {
  if (number < 0) {
    return "ERROR";
  }
  let newString = "";
  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
