function findSmallest(int1, int2, int3) {
    const smallestNum = (x, y, z) => {
        let min = Number.MAX_SAFE_INTEGER;
        let arrayOfNums = [x, y, z];
        for (let num of arrayOfNums) {
            if (num < min) {
                min = num;
            }
        }

        return min;
    }

    console.log(smallestNum(int1, int2, int3));
}
findSmallest(2,

    5,

    3);

function calculation(int1, int2, int3) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    let result = subtract(sum(int1, int2), int3);
    console.log(result);
}
calculation(23,

    6,

    10);
function characterInRange(char1, char2) {
    let charIndex = char1.charCodeAt();
    let charIndex2 = char2.charCodeAt();
    let output = "";

    if (charIndex < charIndex2) {

        for (let i = charIndex + 1; i < charIndex2; i++) {
            output += String.fromCharCode(i) + " ";
        }

    } else {
        for (let i = charIndex2 + 1; i < charIndex; i++) {
            output += String.fromCharCode(i) + " ";
        }
    }

    console.log(output);
}
characterInRange('C',

    '#');
function oddAndEvenSum(num) {
    let strOfNum = num.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let char of strOfNum) {
        let num = Number(char);
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}
oddAndEvenSum(1000435);

function palindromeInts(arr) {

    const iterateThroughArrAndString = arrOfNums => {
        const print = (msg) => console.log(msg);

        const iterateToMiddle = (nums, middleIndex) => {
            let firstHalfChars = "";
            for (let j = 0; j < middleIndex; j++) {
                let char = nums[j];
                firstHalfChars += char;
            }
            return firstHalfChars;
        }

        const iterateFromMiddle = (nums, middleIndex) => {
            let secondHalfChars = "";

            if (nums.length % 2 === 0) {
                for (let k = nums.length - 1; k >= middleIndex; k--) {
                    let char = nums[k];
                    secondHalfChars += char;
                }

                return secondHalfChars;
            } else {
                for (let k = nums.length - 1; k > middleIndex; k--) {
                    let char = nums[k];
                    secondHalfChars += char;
                }

                return secondHalfChars;
            }
        }



        for (let i = 0; i < arrOfNums.length; i++) {
            let nums = String(arrOfNums[i]);
            let length = nums.length;
            let middleIndex = Math.floor(length / 2);
            let firstHalfChars = "";
            let secondHalfChars = "";
            let isPalindrome = false;

            if (iterateToMiddle(nums, middleIndex) === iterateFromMiddle(nums, middleIndex)) {
                isPalindrome = true;
            }

            print(isPalindrome);
        }
    }

    iterateThroughArrAndString(arr);

}
palindromeInts([123, 323, 421, 121]);
palindromeInts([32, 2, 232, 1001]);

function passwordValidator(password) {
    const passwordValid = () => {
        console.log("Password is valid");
    }

    const passwordLength = () => {
        console.log("Password must be between 6 and 10 characters");
    }

    const passwordChars = () => {
        console.log("Password must consist only of letters and digits");
    }

    const passwordDjigit = () => {
        console.log("Password must have at least 2 digits");
    }

    const isValidPass = password => {
        let passArray = password.split("");
        let valid = true;


        if (passArray.length < 6 || passArray.length > 10) {
            valid = false;
            passwordLength()
        }


        let intCount = 0;
        const regex = /^[a-zA-Z0-9]+$/;
        for (let i = 0; i < passArray.length; i++) {
            let char = passArray[i];
            if (!regex.test(char)) {
                valid = false;
                passwordChars();
                break;
            }

            if (!isNaN(Number(char))) {
                intCount++;
            }


        }

        if (intCount < 2) {
            valid = false;
            passwordDjigit();
        }

        return valid;
    }


    if (isValidPass(password)) {
        passwordValid();
    }
}
// passwordValidator('logIn');
passwordValidator('MyPass123')
passwordValidator('Pa$s$s');


function nxN(n) {
    const print = (n) => console.log(`${n} `.repeat(n));
    for (let i = 0; i < n; i++) {
        print(n);
    }
}
nxN(3);

function perfectNumber(int) {

    const arrOfdivors = [];


    for (let i = 1; i <= int; i++) {
        if (int % i === 0) {
            arrOfdivors.push(i);
        }
    }


    if (arrOfdivors.includes(int)) {
        let indexOfInt = arrOfdivors.indexOf(int);
        arrOfdivors.splice(indexOfInt, 1);
    }

    let sum = arrOfdivors.reduce((acc, curr) => acc + curr);

    if (sum === int) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }


}
perfectNumber(28);

// function loadingBar(int){
//     let n = int / 10;
    
//     const hundredPercent = ()=> {
//         console.log(`[%%%%%%%%%%]`);
//     }

//     const percent = ()=>{
//         console.log(`${int}%` `${``}`);
//     }
    
// }
// loadingBar(30);