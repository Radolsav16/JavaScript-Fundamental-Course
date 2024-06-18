function sum(arr) {
    let newArr = arr.map(Number);
    let firstEl = newArr.shift();
    let lastEl = newArr.pop();
    let sum = firstEl + lastEl;

    console.log(sum);
}
sum(['20', '30', '40']);


function negativeOrPositive(arr) {
    arr = arr.map(Number);
    const newArr = [];
    for (const num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }


    newArr.forEach((num) => console.log(num));

}
negativeOrPositive(['7', '-2', '8', '9']);

function firstAndLastK(arr) {
    const numberK = arr.shift();
    const firstKElArr = arr.slice(0, numberK);
    const lastElArr = arr.slice(arr.length - numberK);
    console.log(firstKElArr.join(" "));
    console.log(lastElArr.join(" "));
}
firstAndLastK([3,

    6, 7, 8, 9]);

function lastKNumbers(n, k) {
    const array = [1];

    for (let i = 1; i < n; i++) {
        let arrayOfElemnts = array.slice(-k);
        let sum = 0;
        for (let nums of arrayOfElemnts) {
            sum += nums;

        }
        array.push(sum);
    }

    console.log(array.join(" "));

}
lastKNumbers(6, 3);


function processOddNums(array) {
    let result = array
        .filter((el, index) => index % 2 !== 0)
        .map((el) => el * 2)
        .reverse()
        .join(" ");
    console.log(result);
}
processOddNums([10, 15, 20, 25]);

function smallestNums(array) {

    let result = array.sort((a, b) => b - a).slice(-2).reverse().join(" ");

    console.log(result);

}
smallestNums([30, 15, 50, 5]);


function listOfProduct(product) {
    product.sort((a, b) => a.localeCompare(b));
    let newArr = product.map((el, index) => `${index + 1}.` + el);
    console.log(newArr.join("\n"));
}
listOfProduct(['Potatoes', 'Tomatoes', 'Onions',
    'Apples']);

// Add {number}: add a number to the end of the array

// · Remove {number}: remove all occurrences of a particular number from the array

// · RemoveAt {index}: removes number at a given index

// · Insert {number} {index}: inserts a number at a given index

function arrayManipulation(mainArray) {
    let array = mainArray.shift().split(" ").map(Number);

    for (let i = 0; i < mainArray.length; i++) {
        let tokenArr = mainArray[i].split(" ");
        let command = tokenArr.shift();
        if (tokenArr.length === 2) {
            let number = Number(tokenArr.shift());
            let index = Number(tokenArr.pop());
            array.splice(index, 0, number);
        } else {
            let number = Number(tokenArr.join(""));
            if (command === "Add") {
                array.push(number);
            } else if (command === "Remove") {
                array = array.filter(el => el !== number);
            } else {
                array.splice(number, 1);
            }
        }
    }

    console.log(array.join(" "));
}
arrayManipulation(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3']);

arrayManipulation(['6 12 2 65 6 42',

    'Add 8',

    'Remove 12',

    'RemoveAt 3',

    'Insert 6 2'])    
