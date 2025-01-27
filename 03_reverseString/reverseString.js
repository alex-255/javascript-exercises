const reverseString = function (str) {
  const arr = str.split("");
  arr.reverse();
  const newString = arr.join("");
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
