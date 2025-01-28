const convertToCelsius = function (farenheitTemp) {
  const celsTemp = ((farenheitTemp - 32) * 5) / 9;
  return Math.round(celsTemp * 10) / 10;
};

const convertToFahrenheit = function (celsTemp) {
  const farenheitTemp = (celsTemp * 9) / 5 + 32;
  return Math.round(farenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
