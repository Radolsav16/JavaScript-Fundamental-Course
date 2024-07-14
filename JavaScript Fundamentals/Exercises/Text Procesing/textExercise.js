function revealWords(word, text) {
  let wordsArr = word.split(", ");

  for (let word of wordsArr) {
    let wordLenthStar = "*".repeat(word.length);
    if (text.includes(wordLenthStar)) {
      text = text.replace(wordLenthStar, word);
    }
  }

  console.log(text);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

function modernTimeHastag(string) {
  const arr = string.split(" ");

  for (let str of arr) {
    if (String(str).startsWith("#")) {
      let isCorrct = true;
      if (str.length > 1) {
        let slicedStr = str.substring(1);
        for (let chars of slicedStr) {
          chars = Number(chars);
          if (!isNaN(chars)) {
            isCorrct = false;
            break;
          }
        }

        if (isCorrct) {
          console.log(slicedStr);
        }
      }
    }
  }
}
modernTimeHastag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);

function extractFile(filePath) {
  const fileInfo = filePath.split("\\").pop();
  const arrOfInfo = fileInfo.split(".");
  const extencion = arrOfInfo.pop();
  let fileName = undefined;
  if (arrOfInfo.length > 1) {
    fileName = arrOfInfo.join(".");
  } else {
    fileName = arrOfInfo.shift();
  }

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extencion}`);
}
extractFile("C:\\Internal\\training-internal\\Template.com.bg.fg.pptx");

function stringSubstring(word, text) {
  text = text.toLowerCase();
  let isFound = false;
  text = text.split(" ");
  for (const words of text) {
    if (words === word) {
      console.log(word);
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    console.log(`${word} not found!`);
  }
}
stringSubstring(
  "javascript",

  "JavaScript is the best programming language"
);

function replaceRepeatingChars(string) {
  let resultStr = "";
  let previusCHar = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char !== previusCHar) {
      resultStr += char;
      previusCHar = char;
    } else {
      previusCHar = char;
    }
  }

  console.log(resultStr);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");

function cutAndReverse(str) {
  const halfIndex = Math.floor(str.length / 2);
  const firstHaldArr = str.substring(0, halfIndex).split("").reverse().join("");
  const secondHalfArr = str.substring(halfIndex).split("").reverse().join("");
  console.log(firstHaldArr);
  console.log(secondHalfArr);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");

function pascalCaseSplitter(text) {
  const pattern = /[A-Z][a-z]*/g;
  const matchWords = text.matchAll(pattern);
  const resukt = [];

  for (let arraysObj of matchWords) {
    resukt.push(arraysObj[0]);
  }

  console.log(resukt.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

function hardWork(arr) {
  let text = arr[0];
  const arrOfWords = arr[1];
  const arrOfText = text.split(/[.?:,!]? /);

  const holesArr = arrOfText.filter((word) => word.includes("_"));

  for (const hole of holesArr) {
    let word = arrOfWords.find((word) => word.length === hole.length);
    text = text.replace(hole, word);
  }

  console.log(text);
}
hardWork([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",

  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);

function passwordGenerator(arr) {
  let [str1, str2, specailWord] = arr;
  let password = str1 + str2;
  const vowels = ["a", "e", "o", "u", "i"];

  let indexOfSpecialWord = 0;

  for (let chars of password) {
    if (vowels.includes(chars)) {
      let replaceWord = specailWord[indexOfSpecialWord];
      password = password.replace(chars, replaceWord.toUpperCase());
      indexOfSpecialWord++;
    }

    if (indexOfSpecialWord === specailWord.length) {
      indexOfSpecialWord = 0;
    }
  }

  password = password.split("").reverse().join("");
  console.log(`Your generated password is ${password}`);
}
passwordGenerator(["ilovepizza", "ihatevegatbles", "orange"]);

function letterChange(str) {
  const array = str.split(" ");
  let sum = 0;
  let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  let alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let totalSums = 0;
  for (let str of array) {
    let fisrtChar = str[0];
    let lastChar = str[str.length - 1];
    let num = "";
    for (let i = 1; i <= str.length - 2; i++) {
      let nums = str[i];
      num += nums;
    }
    num = Number(num);
    const isUpper = /[A-Z]/;
    if (isUpper.test(fisrtChar)) {
      let position = alphabetUpperCase.indexOf(fisrtChar) + 1;
      num /= position;
    } else {
      let position = alphabetLowerCase.indexOf(fisrtChar) + 1;
      num *= position;
    }
    if (isUpper.test(lastChar)) {
      let position = alphabetUpperCase.indexOf(lastChar) + 1;
      num -= position;
    } else {
      let position = alphabetLowerCase.indexOf(lastChar) + 1;
      num += position;
    }
    totalSums += num;
  }
  console.log(totalSums.toFixed(2));
}
// letterChange("A12b s17G");
letterChange("P34562Z q2576f H456z");
