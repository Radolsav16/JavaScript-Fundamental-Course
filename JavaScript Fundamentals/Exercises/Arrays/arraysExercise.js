function addAndSubtract(arr) {

    let sumFromOriginalArr = 0;
    let sumOfModifyArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        sumFromOriginalArr += num;
        if (num % 2 === 0) {
            arr[i] = (num + i);
            sumOfModifyArr += (num + i);
        } else {
            arr[i] = (num - i);
            sumOfModifyArr += (num - i);
        }
    }
    console.log(arr);
    console.log(sumFromOriginalArr);
    console.log(sumOfModifyArr);

}
addAndSubtract([5, 15, 23, 56, 35]);

function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

    ['Petar', 10, 'hey', 4, 'hello', '2']);

function mergeArrays(arr1, arr2) {
    let thirhArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(arr1[i]) + Number(arr2[i]);
            thirhArr.push(sum);
        } else {
            let concat = arr1[i] + arr2[i];
            thirhArr.push(concat);
        }
    }
    console.log(thirhArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11']);

function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);

function maxNumber(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        let isTopInt = true;

        if (i === arr.length - 1) {
            output += currentNum + " ";
            break;
        }

        for (let j = i + 1; j < arr.length; j++) {
            let afterNums = Number(arr[j]);

            if (currentNum <= afterNums) {
                isTopInt = false;
                break;
            }
        }

        if (isTopInt) {
            output += currentNum + " ";
        }



    }

    console.log(output);

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48]);

function equalSum(arr) {
    let sumOfFirstHalf = 0;
    let sumOfSecondHalf = 0;
    let specifiedIndex = 0;
    if (arr.length === 1) {
        console.log(0);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if (sumOfFirstHalf <= currentNum && i !== 0 && i !== 1) {
            specifiedIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                let num = Number(arr[j]);
                sumOfSecondHalf += num;
            }
            break;
        }
        sumOfFirstHalf += currentNum;
    }
    if (sumOfFirstHalf === sumOfSecondHalf) {
        console.log(specifiedIndex);
    } else {
        console.log("no");
    }


}

equalSum([1]);

function magicSum(arr, sum) {

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            let numAfter = Number(arr[j]);
            let currentSum = currentNum + numAfter;
            if (currentSum === sum) {
                console.log(`${currentNum} ${numAfter}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8],
    27)
magicSum([1, 2, 3, 4, 5, 6],

    6)


function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let game = arr[0];
    let rooms = game.split("|");
    let roomsPass = 0;
    let isMadeIt = true;

    for (let challanges of rooms) {
        let itemOrMonster = challanges.split(" ").shift();
        let number = Number(challanges.split(" ").pop());

        if (itemOrMonster === "potion") {
            let hp = 0;
            if (number + health > 100) {
                hp = 100 - health;
                health = 100;
            } else {
                hp = number;
                health += number;
            }

            console.log(`You healed for ${hp} hp.`);
            console.log(`Current health: ${health} hp.`);
            roomsPass++;


        } else if (itemOrMonster === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
            roomsPass++;
        } else {
            health -= number;

            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
                roomsPass++;
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                isMadeIt = false;
                roomsPass++;
                console.log(`Best room: ${roomsPass}`);
                break;
            }

        }



    }

    if (isMadeIt) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);



function solve(arr) {
    let isEqual = false;
    let specialIndex = 0;

    if (arr.length === 1) {
        console.log(0);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            let numsAfter = arr[j];
            rightSum += numsAfter;
        }

        for (let k = i - 1; k >= 0; k--) {
            let numsBefore = arr[k];
            leftSum += numsBefore;
        }

        if (leftSum === rightSum) {
            specialIndex = i;
            isEqual = true;
        }
    }

    if (isEqual) {
        console.log(specialIndex);
    } else {
        console.log('no');
    }
}
solve([10, 5, 5, 99,

    3, 4, 2, 5, 1,

    1, 4]);

function maxSequanceOfElements(arr) {


    let longestSequance = [];
    let currentSequance = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        let currEl = arr[i];

        if (currentSequance.includes(currEl)) {
            currentSequance.push(currEl);
        } else {
            currentSequance = [currEl];
        }

        if (currentSequance.length > longestSequance.length) {
            longestSequance = currentSequance;
        }
    }

    console.log(longestSequance.join(" "));


}
maxSequanceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

function ladyBug(input) {

    let fieldSize = Number(input[0]);
    let ladyBugindexes = input[1].split(" ").map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        if (ladyBugindexes.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < input.length; j++) {
        let tokensArr = input[j].split(" ");
        let ladyBugStartIndx = Number(tokensArr.shift());
        let command = tokensArr.shift();
        let moveLength = Number(tokensArr.pop());

        if (!field[ladyBugStartIndx]) {
            continue;
        }

        field[ladyBugStartIndx] = 0;

        if (command === 'right') {
            let newIndex = ladyBugStartIndx + moveLength;

            if (newIndex < field.length) {
                while (field[newIndex] === 1) {
                    newIndex += moveLength;
                }

                if (newIndex < field.length) {
                    field[newIndex] = 1;
                }
            }

        } else if (command === 'left') {
            let newIndx = ladyBugStartIndx - moveLength;

            if (newIndx >= 0) {
                while (field[newIndx] === 1) {
                    newIndx -= moveLength;
                }

                if (newIndx >= 0) {
                    field[newIndx] = 1;
                }
            }

        }

    }

    console.log(field.join(" "));

}

ladyBug([3, '0 1', '0 right 1', '2 right 1']);



