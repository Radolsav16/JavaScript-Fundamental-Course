function valueOfString(array) {
  let str = array.shift();
  let lowerOrUpper = array.pop();
  let sum = 0;
  if (lowerOrUpper === "UPPERCASE") {
    const regex = /[A-Z]/;
    for (const char of str) {
      let newStr = char.toLowerCase();
      if (regex.test(char) && char !== newStr) {
        let asciicode = char.charCodeAt(0);
        sum += asciicode;
      }
    }
  } else if (lowerOrUpper === "LOWERCASE") {
    const regex = /[a-z]/;
    for (let char of str) {
      let newChar = char.toUpperCase();
      if (regex.test(char) && newChar !== char) {
        let asciicode = char.charCodeAt(0);
        sum += asciicode;
      }
    }
  }

  console.log(`The total sum is: ${sum}`);
}
valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);

function seralizeStr(array) {
  let str = array.shift();
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in chars) {
      chars[char].push(i);
    } else {
      chars[char] = [i];
    }
  }

  const entries = Object.entries(chars);

  for (let arrays of entries) {
    const key = arrays[0];
    const arrayWithIndexis = arrays[1];
    console.log(`${key}:${arrayWithIndexis.join("/")}`);
  }
}
seralizeStr(["abababa"]);

function deseraliseStr(array) {
  let i = 0;
  let command = array[i];
  let result = [];

  while (command !== "end") {
    let strObj = command;
    let [key, value] = strObj.split(":");
    const valuesArr = value.split("/");
    for (let indx of valuesArr) {
      result[indx] = key;
    }

    i++;
    command = array[i];
  }
  console.log(result.join(""));
}
deseraliseStr(["a:0/2/4/6", "b:1/3/5", "end"]);

function ascciSumator(array) {
  const firstCharacter = array[0];
  const secondCharacter = array[1];
  const str = array[2];

  const fisrtCharAscii = firstCharacter.charCodeAt(0);
  const secondCharAscii = secondCharacter.charCodeAt(0);

  let sum = 0;
  const elemntsBetweenChars = [];

  if (fisrtCharAscii > secondCharAscii) {
    for (let i = secondCharAscii + 1; i < fisrtCharAscii; i++) {
      let char = String.fromCharCode(i);
      elemntsBetweenChars.push(char);
    }
  } else {
    for (let i = fisrtCharAscii + 1; i < secondCharAscii; i++) {
      let char = String.fromCharCode(i);
      elemntsBetweenChars.push(char);
    }
  }

  for (let el of str) {
    if (elemntsBetweenChars.includes(el)) {
      let asciicode = el.charCodeAt(0);
      sum += asciicode;
    }
  }

  console.log(sum);
}
ascciSumator([".", "@", "dsg12gr5653feee5"]);

function treaserFinder(input) {
  const keys = input.shift().split(" ");
  let i = 0;
  let command = input[i];

  while (command !== "find") {
    const str = command;
    let newStr = "";
    let indx = 0;
    for (let k = 0; k < str.length; k++) {
      const char = str[k];
      if (indx >= keys.length) {
        indx = 0;
        let key = Number(keys[indx]);
        let asciiCode = char.charCodeAt(0) - key;
        let newChar = String.fromCharCode(asciiCode);
        newStr += newChar;
        indx++;
      } else {
        let key = Number(keys[indx]);
        let asciiCode = char.charCodeAt(0) - key;
        let newChar = String.fromCharCode(asciiCode);
        newStr += newChar;
        indx++;
      }
    }

    const indx1 = newStr.indexOf("&");
    const indx2 = newStr.lastIndexOf("&");
    let treasure = newStr.slice(indx1 + 1, indx2);

    const indx3 = newStr.indexOf("<");
    const indx4 = newStr.indexOf(">");
    const coordinates = newStr.slice(indx3 + 1, indx4);

    console.log(`Found ${treasure} at ${coordinates}`);

    i++;
    command = input[i];
  }
}
treaserFinder([
  "1 2 1 3",

  "ikegfp'jpne)bv=41P83X@",

  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",

  "find",
]);

function melrahShake(input){
    let randomStr = input.shift();
    let pattern = input.shift();
    let patternArr = pattern.split('');
    let string = '';
    let count = 0;
   
    for(let i = 0; i< randomStr.length;i++){
        let char = randomStr[i];
        if(patternArr.includes(char) && patternArr.includes(randomStr[i + 1]) && patternArr.includes(randomStr[i - 1])){
            let str  = randomStr[i - 1] + char + randomStr[i + 1];
            randomStr = randomStr.replace(str,"");
            i--;
        } else if(patternArr.includes(char) && patternArr.includes(randomStr[i + 1]) && patternArr.includes(randomStr[i + 2])){
                 let str  =  char + randomStr[i + 1] + randomStr[i + 2];
                 randomStr = randomStr.replace(str,"");
        }else if (patternArr.includes(char) && (patternArr.includes(randomStr[i + 1]) || patternArr.includes(randomStr[i - 1]))){
            randomStr = randomStr.replace(char,"");
            i--;
        }

        
    }

    console.log(randomStr);
}









melrahShake(['astalavista baby',

    'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm'])