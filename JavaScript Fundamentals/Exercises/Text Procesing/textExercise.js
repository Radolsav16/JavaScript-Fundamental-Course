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
