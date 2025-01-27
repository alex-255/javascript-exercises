const removeFromArray = function (arr, ...toBeRemoved) {
  for (const num of toBeRemoved) {
    let index = arr.indexOf(num);
    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(num);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
