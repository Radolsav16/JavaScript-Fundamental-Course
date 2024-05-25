function digitWords(strNum) {
    let print = 0;
    switch (strNum) {
        case 'zero': print = 0; break;
        case 'one': print = 1; break;
        case 'two': print = 2; break;
        case 'three': print = 3; break;
        case 'four': print = 4; break;
        case 'five': print = 5; break;
        case 'six': print = 6; break;
        case 'seven': print = 7; break;
        case 'eight': print = 8; break;
        case 'nine': print = 9; break;
        case 'ten': print = 10; break;
    }

    console.log(print);

}
digitWords(9);


function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helemtBreakCount = 0;
    let swordCount = 0;
    let shiledBreaks = 0;
    let countTimesInShield = 0;
    let countArmorToRepair = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            helemtBreakCount++;
            swordCount++;
            shiledBreaks++;
            countTimesInShield++;
            if (countTimesInShield === 2) {
                countArmorToRepair++;
                countTimesInShield = 0;
            }
        } else if (i % 2 === 0) {
            helemtBreakCount++;
        } else if (i % 3 === 0) {
            swordCount++;
        }

    }

    let priceForArmor = armorPrice * countArmorToRepair;
    let priceForSword = swordCount * swordPrice;
    let priceForHelmet = helmetPrice * helemtBreakCount;
    let priceForShield = shieldPrice * shiledBreaks;

    let expenses = priceForArmor + priceForHelmet + priceForShield + priceForSword;


    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}
gladiatorExpences(23,

    12.50,

    21.50,

    40,

    200);

function spiceMustFlow(startYeald) {

    let consumed = 0;
    let left = 0;
    let totalAmount = 0;
    let days = 0;

    while (startYeald >= 100) {
        left = startYeald - 26;
        startYeald -= 10;
        totalAmount += left;
        days++;
    }


    if (totalAmount > 26) {
        totalAmount -= 26;
    }







    console.log(days);
    console.log(totalAmount);
}
spiceMustFlow(111);

function calculator(num, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+': result = num + num2; break;
        case '-': result = num - num2; break;
        case '*': result = num * num2; break;
        case '/': result = num / num2; break;


    }

    console.log(result.toFixed(2));

}
calculator(5,

    '+',

    10);
function lowerOrUpper(char){

   char === char.toLowerCase() ?
   console.log("lower-case"):
   console.log("upper-case");


    
}   
lowerOrUpper('l'); 

function reversedChar(charA,charB,charC){
    console.log(`${charC} ${charB} ${charA}`);
}
reversedChar();

function convertsMetrs(m){
    let kl = m / 1000;
    console.log(kl.toFixed(2));
}
convertsMetrs(80);
function townInfo(town,population,area){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}
townInfo();

function charToStr(char1,char2,char3){
    let str = `${char1}${char2}${char3}`;
    console.log(str);
}

charToStr();

function sumOfDigits(num){
    let numAsStr = String(num);
    let sum = 0;
    for(let i = 0;i<numAsStr.length;i++){
        let singleNum = Number(numAsStr[i]);
        sum+=singleNum;
    }

    console.log(sum);
}
sumOfDigits();

function primeChecker(num){
    let f = 2;
    let a = [];
    while(num>1){
        if(num % f === 0){
            a.push(f);
            num /= f;
        }else{
            f+=1;
        }

    }
    if(a.length > 1){
        console.log('false');
    }else{
        console.log('true');
    }
}
console.log(primeChecker());

 // let isPrime = true;
    // for(let i = 1;i<=10;i++){
    //     if(num % i === 0){
    //         isPrime = false;
    //         break;
    //     }
    // }
    // if(isPrime){
    //     console.log('true');
    // }else{
    //     console.log('false');
    // }

  function cone(radius,height){
    const pi = Math.PI;
    const volume = pi*Math.pow(radius,2)*height/3;
    const surfaceArea = pi * radius*(radius + Math.sqrt((radius * radius) + (height * height)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);

  } 
  cone(3,5); 

  function biggestOfThree(num1,num2,num3){
    let max = Number.MIN_SAFE_INTEGER;
    let arrayOFNums = [num1,num2,num3];
    for (let index = 0; index < arrayOFNums.length; index++) {
        const num  = Number(arrayOFNums[index]);
        if(num > max){
            max = num;
        }
    }
    console.log(max);
   
  }
  biggestOfThree(-2,

    7,
    
    3);

    function binnaryToDecemical(binnaryNum){
        let binnaryString = String(binnaryNum);
        let decimicalNum = binnaryString.toString(2);
    }
    binnaryToDecemical()

    if(true){
        let y = 10;

    }
    console.log(y);