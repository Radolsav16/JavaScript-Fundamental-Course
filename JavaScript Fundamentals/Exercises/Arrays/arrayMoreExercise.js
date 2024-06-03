function printNElements(arr) {
    let step = Number(arr.pop());
    let uniqueEl = [];

    for (let i = 0; i < arr.length; i += step) {
        let el = arr[i];
        uniqueEl.push(el);
    }

    console.log(uniqueEl.join(" "));
}
printNElements(['5', '20', '31', '4', '20', '2']);

function addAndRemove(arr) {

    let initalNum = 0;
    let resultArr = [];

    for (const command of arr) {
        initalNum++;
        if (command === 'add') {
            resultArr.push(initalNum);
        } else {
            resultArr.pop();
        }
    }

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArr.join(" "));
    }

}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove'])

function rotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 1; i <= rotations; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }

    console.log(arr.join(" "));

}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

function nonDecreasingSubset(arr) {

    let curBiggest = 0;
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let curNums = arr[i];
        if (curNums >= curBiggest) {
            curBiggest = curNums;
            resultArr.push();
        }
    }

    console.log(resultArr.join(" "));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);


function teamAccount(arr) {
    let peterAccountGames = [];
    let games = arr[0].split(" ").
        forEach(element => peterAccountGames.push(element));
    for (let i = 1; i < arr.length; i++) {
        let stringRepresent = arr[i];


        if (stringRepresent !== "Play!") {
            let tokens = stringRepresent.split(" ");
            let command = tokens.shift();
            let game = tokens.pop();

            if (command === 'Install') {
                if (!peterAccountGames.includes(game)) {
                    peterAccountGames.push(game);
                }
            } else if (command === 'Uninstall') {
                if (peterAccountGames.includes(game)) {
                    let index = peterAccountGames.indexOf(game);
                    peterAccountGames.splice(index, 1);
                }
            } else if (command === "Update") {
                if (peterAccountGames.includes(game)) {
                    let index = peterAccountGames.indexOf(game);
                    peterAccountGames.splice(index, 1);
                    peterAccountGames.push(game);
                }
            } else {
                let gameNameArr = game.split("-");
                let gameName = gameNameArr.shift();
                let expansion = gameNameArr.pop();

                if (peterAccountGames.includes(gameName)) {
                    let index = peterAccountGames.indexOf(gameName);
                    peterAccountGames.splice(index + 1, 0, `${gameName}:${expansion}`);
                }
            }
        } else {
            console.log(peterAccountGames.join(" "));
            return;
        }


    }
}
teamAccount(['CS WoW Diablo',

    'Install LoL',

    'Uninstall WoW',

    'Update Diablo',

    'Expansion CS-Go',

    'Play!']);
teamAccount(['CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!'])

function magicMatrices(arr) {
    let sumFirstColumn = 0;
    let sumSecondColumn = 0;
    let sumThirthColumn = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === 0) {
                sumFirstColumn += arr[i][j];
            } else if (j === 1) {
                sumSecondColumn += arr[i][j];
            } else {
                sumThirthColumn += arr[i][j];
            }
        }
    }
    let isTrue = sumFirstColumn === sumSecondColumn && sumFirstColumn === sumThirthColumn &&
        sumSecondColumn === sumThirthColumn;
    if (isTrue) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])




function spiralMatric(n1, n2) {

    let value = 1;
    let top = 0;
    let bottom = n1 - 1;
    let right = n1 - 1;
    let left = 0;
    let matrix = Array.from({ length: n1 }, () => Array(n1).fill(0));


    while(value <= n1 * n2){
        for(let i = left; i <= right ;i++){
            matrix[top][i] = value++;
        }
        top++;

        for(let j = top ; j <= bottom;j++){
            matrix[j][right] = value++;

        }
        right--;

        for(let k = right; k >= left ; k--){
            matrix[bottom][k] = value++;
        }
        bottom--;

        for(let s = bottom ; s >= top; s-- ){
            matrix[s][left] = value++;
        }
        left++;

       

    }

    console.log(matrix[0].join(" "));
    console.log(matrix[1].join(" "));
    console.log(matrix[2].join(" "));
    console.log(matrix[3].join(" "));
    console.log(matrix[4].join(" "));

    

    

}
spiralMatric(5,5);