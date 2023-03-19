const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  charArray = word.split("");
  const index = charArray.findIndex((char) => vowels.includes(char));
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const consonants = word.substring(0, index);
    const afterConsonants = word.substring(index);
    return afterConsonants + consonants + "ay";
  }
};

module.exports = { translate };
