const removeFromArray = function (array, ...args) {
  for (const el of args) {
    let index = array.indexOf(el);
    while (index !== -1) {
      array.splice(index, 1);
      index = array.indexOf(el);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
