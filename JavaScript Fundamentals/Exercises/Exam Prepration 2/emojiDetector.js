function solve(input){
    let str = input.shift();
    const pattern = /([:|*]{2})(?<main>[A-Z][a-z]{2,})\1/g
    const digitPattern = /\d/g;
    let digits = str.match(digitPattern);
    let choleTresHold = 0;
    for(let nums of digits){
        nums = Number(nums);
        if(choleTresHold === 0){
            choleTresHold += nums
        }else{
            choleTresHold *= nums
        }
       
    }
    let matches =[...str.matchAll(pattern)];
    let validEmojis = matches.length;
    let emojis = {};
    console.log(`Cool threshold: ${choleTresHold}`);
    console.log(`${validEmojis} emojis found in the text. The cool ones are:`);
    for(let match of matches){
        let coolnes = 0;
        for(let char of match[0]){
            let numChar = Number(char);
            if(isNaN(numChar)){
            let asciNum = char.charCodeAt(0);
            coolnes += asciNum;
            }
        }

        if(coolnes > choleTresHold){
            console.log(`${match[0]}`);
        }
        
        
    }
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]
);