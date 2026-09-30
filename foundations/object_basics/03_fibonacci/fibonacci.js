const fibonacci = function (place) {
  if (
    Number.isNaN(place) ||
    typeof place === "string" ||
    Array.isArray(place) ||
    typeof place === "object" ||
    place < 0
  ) {
    return "OOPS";
  } else if (place === 0) {
    return 0;
  } else if (place === 1 || place === 2) {
    // let number = 1;
    return 1;
  } else {
    // number = number of place -1 + number of place - 2
    return fibonacci(place - 1) + fibonacci(place - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
