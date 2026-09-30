const palindromes = function (string) {
  string = string.replace(/[^0-9a-z]/gi, "");
  string = string.toLowerCase();
  return string === string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
