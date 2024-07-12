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

function pascalCaseSpliter(text) {
  const resultText = [];
  for (let i = 0; i < text.length; i++) {
    const chars = text[i];
    const changedChar = chars.toLowerCase();
    let word = "";
    if (chars !== changedChar) {
      word += chars;
      for (let k = i + 1; k < text.length; k++) {
        const charsAfter = text[k];
        const changedChar2 = charsAfter.toLowerCase();
        if (charsAfter === changedChar2) {
          word += charsAfter;
          if(k === text.length - 1){
            resultText.push(word);
          }
        } else {
          i = k - 1;
          resultText.push(word);
          break;
        }
      }
    }
  }
  console.log(resultText.join(", "));
}
pascalCaseSpliter("SplitMeIfYouCanHaHaYouCantOrYouCan");


function cutAndReverse(str){
    const halfIndex = Math.floor(str.length / 2);
    const firstHaldArr = str.substring(0,halfIndex).split("").reverse().join("");
    const secondHalfArr = str.substring(halfIndex).split("").reverse().join("");
    console.log(firstHaldArr)
    console.log(secondHalfArr);
}  
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');


function hardWork(array){
    let  text = array.shift();
    const arrayOfWord = array.shift();
   
    for(let word of arrayOfWord){
        let hole = '_'.repeat(word.length);
       
        
    }

    console.log(text);

   
}
hardWork(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so_______ things happened. My dad bought me a sled. Mom started a new job as a__________. My brother\'s ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

function password(array){
    const vowes = ['a','o','y','i','e'];

        

}
password([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])


function solve(){
    function solve2(){
        console.log('pfhdjhgj');
    }
}    