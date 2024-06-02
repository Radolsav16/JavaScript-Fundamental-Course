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