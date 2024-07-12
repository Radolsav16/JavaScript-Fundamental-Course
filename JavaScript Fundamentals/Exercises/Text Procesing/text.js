function printWord(word){
    for(let char of word){
        console.log(char);
    }
}

printWord('Asqeu')


function subtract(str,startIndex,count){
    str = str.substring(startIndex,startIndex + count);
    console.log(str);
}
subtract('ASentence', 1, 8);

function censoredWords(text,specialWord){
    const specialReplace = '*'.repeat(specialWord.length);
    
    while(text.includes(specialWord)){
        text = text.replace(specialWord,specialReplace);
    }

    console.log(text);
}
censoredWords('A small sentence with some words',

'small');

function countingStringOccurence(text,word){
    let count = 0;
    const textArr = text.split(" ");
    for(let words of textArr){
        if( words === word){
             count++ 
        }
    }
    console.log(count);
}
countingStringOccurence('This is a word and it also is a sentence',

'is');