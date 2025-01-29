const palindromes = function (phrase) {
  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[^a-z0-9]/g, "");
  const phraseLength = phrase.length;

  if (phraseLength % 2 === 0) {
    let firstPartStr = phrase.substring(0, phraseLength / 2);

    let secondPartStr = phrase
      .substring(phraseLength / 2)
      .split("")
      .reverse()
      .join("");

    return firstPartStr === secondPartStr;
  } else {
    let firstPartStr = phrase.substring(0, Math.floor(phraseLength / 2));

    let secondPartStr = phrase
      .substring(Math.ceil(phraseLength / 2))
      .split("")
      .reverse()
      .join("");

    return firstPartStr === secondPartStr;
  }
};

// Do not edit below this line
module.exports = palindromes;
