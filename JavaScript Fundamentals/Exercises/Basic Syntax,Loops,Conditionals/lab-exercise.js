function solve(age) {

    if (age < 0) {
        console.log('out of bounds');
    } else if (age <= 2) {
        console.log('baby');
    } else if (age <= 13) {
        console.log('child');
    } else if (age <= 19) {
        console.log('teenager');
    } else if (age <= 65) {
        console.log('adult');
    } else {
        console.log('elder');
    }

}

solve();

let a = 15 + 15;
console.log(a);

// Add somethhink 
function rounding(num, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let result = parseFloat(Number(num.toFixed(precision)));



    console.log(result);




}
rounding(3.1415926535897932384626433832795, 2);

function division(num) {

    let lastDivisibleNum = 0;

    if (num % 2 === 0) {
        lastDivisibleNum = 2;
    }

    if (num % 3 === 0) {
        lastDivisibleNum = 3;
    }

    if (num % 6 === 0) {
        lastDivisibleNum = 6;
    }

    if (num % 7 === 0) {
        lastDivisibleNum = 7;
    }

    if (num % 10 === 0) {
        lastDivisibleNum = 10;
    }

    if (lastDivisibleNum) {

        console.log(`The number is divisible by ${lastDivisibleNum}`);
    } else {
        console.log("Not divisible");
    }



}
division(1643);


function vacation(group, type, dayOfTheWeek) {

    let price = 0;

    if (dayOfTheWeek === 'Friday') {
        if (type === 'Students') {
            price = 8.45;

        } else if (type === 'Business') {
            price = 10.90;

        } else if (type === 'Regular') {

            price = 15;

        }

    } else if (dayOfTheWeek === 'Saturday') {
        if (type === 'Students') {
            price = 9.80;

        } else if (type === 'Business') {
            price = 15.60;

        } else if (type === 'Regular') {

            price = 20;

        }

    } else if (dayOfTheWeek === 'Sunday') {
        if (type === 'Students') {
            price = 10.46;

        } else if (type === 'Business') {
            price = 16;

        } else if (type === 'Regular') {

            price = 22.50;

        }



    }



    if (type === 'Students' && group >= 30) {
        price *= (1 - 0.15);
    } else if (type === 'Business' && group >= 100) {
        group -= 10;

    } else if (type === 'Regular' && (group >= 10 && group <= 20)) {
        price *= (1 - 0.05);
    }


    let total = price * group;

    console.log(`Total price: ${total.toFixed(2)}`);


}
vacation(40,

    "Regular",

    "Saturday");

function leapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }

}
leapYear();

function printAndAddSum(start, end) {

    let print = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        print += `${i} `;
        sum += i;

    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}
printAndAddSum(0, 26);


function triangleOfNums(n) {

    for (let i = 1; i <= n; i++) {

        console.log(`${i} `.repeat(i));

    }


}
triangleOfNums(5);

function multiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
        let product = i * num;

        console.log(`${num} X ${i} = ${product}`);
    }

}
multiplicationTable(5);


function login(arr) {

    let username = arr.shift();
    let correctUsername = username.split("").reverse().join("");
    let countTries = 1;

    for (let i = 0; i <= arr.length; i++) {
        let passwordTry = arr[i];

        if (passwordTry === correctUsername) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (countTries >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
                countTries++;
            }
        }
    }


}
// login(['sunny','rainy','cloudy','sunny','not sunny']);
login(['Acer', 'login', 'go', 'let me in', 'recA'])


// // thePyrymidOfKingDjoser(23,0.5);


// function bitcoin(arr){

//     let day = 1;
//     let oneBitCoin = 11949.16;
//     let bitcoins = 0;

//     let dayOfTheFirstBitcoin = 0;
//     let leftMoney = 0;
//     let money = 0;

//     for(let i = 0;i<arr.length;i++){
//         let gold = Number(arr[i]);

//         if(day === 3){
//             gold*=(1-0.30);
//         }

//         let goldToMoney = gold * 67.51;

//         money+=goldToMoney;




//         if(money >= oneBitCoin){

//             if(bitcoins === 0){
//             dayOfTheFirstBitcoin = day;
//             bitcoins++;
//             money-=oneBitCoin
//             }else{
//                 bitcoins++;
//                 money-=oneBitCoin
//             }



//         }

//         day++;
//     }

//     while(money >= oneBitCoin ){
//         money-=oneBitCoin;
//         bitcoins++;
//     }


//     console.log(`Bought bitcoins: ${bitcoins}`);
//     if(bitcoins){
//          console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstBitcoin}`);
//     }

//     console.log(`Left money: ${money.toFixed(2)} lv.`);
// }
// bitcoin([3124.15, 504.212, 2511.124])


function threeNums(num1, num2, num3) {

    let numbers = [num1, num2, num3];

    let numbers1 = numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers1.length; i++) {
        console.log(numbers1[i]);
    }

}
threeNums(3, 2, 4);


function englishName(num) {
    num = String(num);
    num = num.split("");
    let lastChar = Number(num.pop());

    switch (lastChar) {
        case 1:
            console.log('one');

            break;

        case 2:
            console.log('two');

            break;

        case 3:
            console.log('three');

            break;
        case 4:
            console.log('four');

            break;

        case 5:
            console.log('five');

            break;
        case 6:
            console.log('six');

            break;

        case 7:
            console.log('seven');

            break;

        case 8:
            console.log('eight');

            break;
        case 9:
            console.log('nine');
            
            break;
        case 0:
            console.log('zero');
            break;
    }

}

englishName(154);