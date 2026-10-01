const findTheOldest = function (people) {
  const peopleSorted = people.sort((personA, personB) => {
    if (personA.yearOfDeath === undefined) {
      const now = new Date();
      personA.yearOfDeath = now.getFullYear();
    }
    if (personB.yearOfDeath === undefined) {
      const now = new Date();
      personB.yearOfDeath = now.getFullYear();
    }

    return (
      personA.yearOfDeath -
      personA.yearOfBirth -
      (personB.yearOfDeath - personB.yearOfBirth)
    );
  });
  return peopleSorted[peopleSorted.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
