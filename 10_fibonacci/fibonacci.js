const fibonacci = function (Nth) {
  Nth = parseInt(Nth);
  console.log(Nth);
  const createFibonacci = (amountOfNumbers) => {
    let first = 1;
    let second = 1;
    let sumOfTwoPrevious = first + second;
    const arrF = [first, second, sumOfTwoPrevious];
    // starting from 3 because 0, 1 and 2 already in array
    for (let index = 3; index < amountOfNumbers; index++) {
      first = second;
      second = sumOfTwoPrevious;
      sumOfTwoPrevious = first + second;
      arrF.push(sumOfTwoPrevious);
    }
    return arrF;
  };

  if (Nth === 0) return 0;
  if (Nth < 0) return "OOPS";

  const fibonaccciInArray = createFibonacci(Nth);

  // because 0th and 1th elements already in array and cannot be accessed by last index
  if (Nth === 1) return 1;
  if (Nth === 2) return 1;

  return fibonaccciInArray[fibonaccciInArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
