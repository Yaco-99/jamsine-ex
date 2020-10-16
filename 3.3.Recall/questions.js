let selectElementsStartingWithA = (array) => {
  return array.filter((el) => el[0] == "a");
};

let selectElementsStartingWithVowel = (array) => {
  return array.filter((el) => /^[aeiou]/i.test(el));
};

let removeNullElements = (array) => {
  return array.filter((el) => el != null);
};

let removeNullAndFalseElements = (array) => {
  return array.filter((el) => !!el || el === 0);
};

let reverseWordsInArray = (array) => {
  return array.map((el) => el.split("").reverse().join(""));
};

let everyPossiblePair = (array) => {
  return array.flatMap((v, i) => array.slice(i + 1).map((w) => [v, w]));
};

let allElementsExceptFirstThree = (array) => {
  return array.splice(3);
};

let addElementToBeginning = (array, element) => {
  return [element].concat(array);
};

let sortByLastLetter = (array) => {
  return array.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

let getFirstHalf = (string) => {
  return [...string].splice(0, Math.round(string.length / 2)).join("");
};

let makeNegative = (number) => {
  return -Math.abs(number);
};

let numberOfPalindromes = (array) => {
  return array.reduce(
    (a, el) => (el === [...el].reverse().join("") ? a + 1 : a),
    0
  );
};

let shortestWord = (array) => {
  return array.reduce(
    (a, el) => (el.length < a.length ? (a = el) : a),
    array[0]
  );
};

let longestWord = (array) => {
  return array.reduce(
    (a, el) => (el.length > a.length ? (a = el) : a),
    array[0]
  );
};

let sumNumbers = (array) => {
  return array.reduce((a, el) => a + el, 0);
};

let repeatElements = (array) => {
  return array.concat(array);
};

let stringToNumber = (string) => {
  return parseInt(string);
};

let calculateAverage = (array) => {
  return array.reduce((a, el) => a + el, 0) / array.length;
};

let getElementsUntilGreaterThanFive = (array) => {
  return array.filter((el) => el <= 5).splice(0, 6);
};

let convertArrayToObject = (array) => {
  return Object.fromEntries(
    array.reduce((result, value, index, array) => {
      index % 2 == 0 ? result.push(array.slice(index, index + 2)) : "no";
      return result;
    }, [])
  );
};

let getAllLetters = (array) => {
  return [...new Set(array.flatMap((el) => el.split("")).sort())];
};

let swapKeysAndValues = (object) => {
  return Object.keys(object).reduce((el, key) => {
    el[object[key]] = key;
    return el;
  }, {});
};

let sumKeysAndValues = (object) => {
  return Object.keys(object).reduce((el, key) => {
    return (el = el + parseInt(object[key]) + parseInt(key));
  }, 0);
};

let removeCapitals = (string) => {
  return [...string].filter((el) => /[a-z\s]/.test(el)).join("");
};

let roundUp = (number) => {
  return Math.ceil(number);
};

let formatDateNicely = (date) => {
  return `0${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`;
};

let getDomainName = (string) => {
  return string
    .split(".")
    .slice(0, string.split(".").length - 1)
    .join(".")
    .split("@")
    .pop();
};

let titleize = (string) => {
  return string
    .split(/the\s|and\s/g)
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join("the ")
    .replace("the the", "and the")
    .split(". ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(". ");
};

let checkForSpecialCharacters = (string) => {
  return /[^a-zA-z0-9]/g.test(string);
};

let squareRoot = (number) => {
  return Math.sqrt(number);
};

let factorial = (number) => {
  return fact(number);
  function fact(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * fact(num - 1);
    }
  }
};

let findAnagrams = (string) => {
  return anagram(string);

  function anagram(str) {
    if (str.length === 1) return str;
    let anagrams = [];
    [...str].map((el) => {
      [...anagram(str.slice(1, str.length))].map((w) => anagrams.push(el + w));
      str = str.substr(1, str.length - 1) + el;
    });
    return anagrams;
  }
};

let convertToCelsius = (number) => {
  return Math.round((number - 32) * (5 / 9));
};
let letterPosition = (array) => {
  return array.map((el) => el.toUpperCase().charCodeAt(0) - 64);
};
