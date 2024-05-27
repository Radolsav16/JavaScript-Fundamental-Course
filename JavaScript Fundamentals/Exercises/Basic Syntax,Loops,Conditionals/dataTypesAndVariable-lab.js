

function echoPrint(data) {

    let typeOfData = typeof (data);

    if (typeOfData === "number" || typeOfData === "string") {
        console.log(typeOfData);
        console.log(data);
    } else {
        console.log(typeOfData);
        console.log('Parameter is not suitable for printing');
    }

}
echoPrint(null);

function concatnatingNames(firstName, lastName, joinSign) {

    let arrayName = [firstName, lastName];
    let result = arrayName.join(joinSign);

    console.log(result);
}

concatnatingNames('John',

    'Smith'

    ,

    '->')

function rigthPlace(string, char, string2) {

    let result = string.replace("_", char);
    if (result === string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

function intOrFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let print = "";
    let isInt = sum % 1 === 0 ? print = "Integer" : print = "Float";

    console.log(`${sum} - ${print}`)
}
intOrFloat(1, 2, 3);

function amazingNumbers(number) {
    let strOfNumber = String(number);
    let sum = 0;



    for (let i = 0; i < strOfNumber.length; i++) {
        let singleNum = Number(strOfNumber[i]);
        sum += singleNum;

    }

    let sumToStr = String(sum);

    let isAmazing = sumToStr.includes("9") ?
        console.log(`${number} Amazing? True`) :
        console.log(`${number} Amazing? False`);



}
amazingNumbers();

const stringFunctionalitesRepo = {
    mySplit: (str) => {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            arr.push(char);
        }

        return arr;
    },
    reverse: (arr) => {
        let reverseArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            let char = arr[i];
            reverseArr.push(char)
        }
        return reverseArr;
    },
    join: (arr) => {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            let char = arr[i];
            str += char;
        }
        return str;
    }
}

let string = "Bulgaria";
let stringToArr = stringFunctionalitesRepo.mySplit(string);
let reverseArr = stringFunctionalitesRepo.reverse(stringToArr);
let reverseString = stringFunctionalitesRepo.join(reverseArr);



console.log(reverseString);

let result = 55 / 0;

console.log(result);


function gramohone(name, albumName, song) {


    let albumNameLenght = albumName.length;
    let bandNameLenght = name.length;
    let songNameLenght = song.length;

    let fullTime = (albumNameLenght * bandNameLenght) * (songNameLenght / 2);
    let rangeOfrotations = 2.5;
    let rotations = Math.ceil(fullTime / rangeOfrotations);


    console.log(`The plate was rotated ${rotations} times.`);
}
gramohone('Black Sabbath', 'Paranoid',

    'War Pigs');

function requiredReading(currentBookPage, pagesReadInHour, days) {

    const totalTime = currentBookPage / pagesReadInHour;
    const requiredPageDaily = totalTime / days;
    console.log(requiredPageDaily);

}
requiredReading(212,

    20,

    2);
function centuriesToMinutes(centaries) {
    const years = centaries * 100;
    const days = Math.trunc(years * (365.2422));
    const hours = days * 24;
    const minutes = hours * 60;

    //output
    console.log(`${centaries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1)

function specialNumber(n) {

    for (let index = 1; index <= n; index++) {

        if (index < 10) {
            if (index === 5 || index === 7) {
                console.log(`${index} -> True`);
            } else {
                console.log(`${index} -> False`);
            }
        } else {
            let numToString = String(index);
            let sum = 0;
            for (let j = 0; j < numToString.length; j++) {
                sum += Number(numToString[j]);
            }
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${index} -> True`);
            } else {
                console.log(`${index} -> False`);
            }
        }



    }

}
specialNumber(15)

function triplesLatinLetters(n) {

    n = Number(n);

    for (let index = 0; index < n; index++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n ; k++) {
                let firstletter = String.fromCharCode(97+index);
                let secondLetter = String.fromCharCode(97+j);
                let thirthLetter = String.fromCharCode(97+k);

                console.log(`${firstletter}${secondLetter}${thirthLetter}`);
            }
        }

    }
}
triplesLatinLetters(4);



