const findTheOldest = function (arr) {
  const arrNameAndAge = arr.map((person) => {
    if (person.yearOfDeath === undefined) {
      return {
        name: person.name,
        age: new Date().getFullYear() - person.yearOfBirth,
      };
    }

    return {
      name: person.name,
      age: person.yearOfDeath - person.yearOfBirth,
    };
  });

  const arrAge = arrNameAndAge.map((person) => {
    return person.age;
  });

  const max = Math.max(...arrAge);

  let resultIndex = arrAge.indexOf(max);

  return arrNameAndAge[resultIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
