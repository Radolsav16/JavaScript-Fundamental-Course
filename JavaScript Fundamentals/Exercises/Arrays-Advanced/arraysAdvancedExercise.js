function train(mainArr) {
  let peopleArrinWag = mainArr.shift().split(" ").map(Number);
  let maxCapacity = Number(mainArr.shift());
  // find an existing wagon to fit all the passengers (starting from the first wagon)

  for (let i = 0; i < mainArr.length; i++) {
    let token = mainArr[i].split(" ");
    if (token.length === 2) {
      let command = token.shift();
      let passangers = Number(token.pop());
      if (command === "Add") {
        peopleArrinWag.push(passangers);
      }
    } else {
      let passangers = Number(token.pop());
      for (let j = 0; j < peopleArrinWag.length; j++) {
        let possibleCapcity = passangers + peopleArrinWag[j];
        if (possibleCapcity <= maxCapacity) {
          peopleArrinWag.splice(j, 1, possibleCapcity);
          break;
        }
      }
    }
  }
  console.log(peopleArrinWag.join(" "));
}
// train(['32 54 21 12 4 0 23',

//     '75',

//     'Add 10',

//     'Add 0',

//     '30',

//     '10',

//     '75']);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
function distinctArray(array) {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let el2 = array[j];
      if (el === el2) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  console.log(array.join(" "));
}
// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([
  4, 20, 8, 12, 13, 4,

  4, 8, 5, 4,
]);

/// another solve
function distinctArray2(array) {
  const uniquiNumbers = [];
  for (const num of array) {
    if (!uniquiNumbers.includes(num)) {
      uniquiNumbers.push(num);
    }
  }
  console.log(uniquiNumbers.join(" "));
}

distinctArray2([1, 2, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9]);

function houseParty(mainArr) {
  const partyMembers = [];
  for (const tokens of mainArr) {
    let arrOfToken = tokens.split(" ");
    let name = arrOfToken.shift();

    if (!partyMembers.includes(name) && !arrOfToken.includes("not")) {
      partyMembers.push(name);
    } else if (partyMembers.includes(name) && !arrOfToken.includes("not")) {
      console.log(`${name} is already in the list!`);
    } else if (partyMembers.includes(name) && arrOfToken.includes("not")) {
      let index = partyMembers.indexOf(name);
      partyMembers.splice(index, 1);
    } else if (!partyMembers.includes(name) && arrOfToken.includes("not")) {
      console.log(`${name} is not in the list!`);
    }
  }
  console.log(partyMembers.join("\n"));
}
houseParty([
  "Allie is going!",

  "George is going!",

  "John is not going!",

  "George is not going!",
]);
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);

function sort(array) {
  let sortedArray = array.sort((a, b) => b - a);
  const finalArray = [];
  while (sortedArray.length !== 0) {
    finalArray.push(sortedArray.shift());
    finalArray.push(sortedArray.pop());
  }

  console.log(finalArray.join(" "));
}
sort([1, 2, 3]);
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

function sortArrayByCriteria(array) {
  const sortedArray = array.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  console.log(sortedArray.join("\n"));
}
sortArrayByCriteria(["alpha", "beta", "gamma"]);
sortArrayByCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrayByCriteria(["test", "Deny", "omen", "Default"]);

function searchNums(arr1, arr2) {
  let numberTake = arr2.shift();
  let deleteCount = arr2.shift();
  let searchedNum = arr2.pop();

  let newArr = arr1.slice(0, numberTake);
  newArr.splice(0, deleteCount);
  let count = 0;

  if (newArr.includes(searchedNum)) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === searchedNum) {
        count++;
      }
    }
  }

  console.log(`Number ${searchedNum} occurs ${count} times.`);
}
searchNums([5, 2, 3, 4, 1, 6], [5, 2, 3]);
// searchNums([7, 1, 5, 8, 2, 7], [3, 1, 5]);

function arrayManipulator(mainArr, arrayOfCommands) {
  for (let tokens of arrayOfCommands) {
    let arrTokens = tokens.split(" ");
    let command = arrTokens.shift();
    if (command === "add") {
      let index = Number(arrTokens.shift());
      let element = Number(arrTokens.shift());
      mainArr.splice(index, 0, element);
    } else if (command === "addMany") {
      let index = Number(arrTokens.shift());
      for (let i = 0; i < arrTokens.length; i++) {
        const element = Number(arrTokens[i]);
        mainArr.splice(index + i, 0, element);
      }
    } else if (command === "contains") {
      let elemnt = Number(arrTokens.shift());
      let index = mainArr.indexOf(elemnt);
      console.log(index);
    } else if (command === "remove") {
      let index = Number(arrTokens.shift());
      mainArr.splice(index, 1);
    } else if (command === "shift") {
      let position = Number(arrTokens.shift());

      for (let i = 0; i < position; i++) {
        let firstEl = mainArr.shift();
        mainArr.push(firstEl);
      }
    } else if (command === "sumPairs") {
      let newArr = [];

      for (let i = 0; i < mainArr.length; i += 2) {
        let el1 = mainArr[i];
        let el2 = mainArr[i + 1];

        if (!el2) {
          newArr.push(el1);
        } else {
          newArr.push(el1 + el2);
        }
      }

      mainArr = newArr;
    } else if (command === "print") {
      console.log(`[ ${mainArr.join(", ")} ]`);
      break;
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);

function gladiator(array) {
  let inventory = array.shift().split(" ");
  for (let tokens of array) {
    let tokenArr = tokens.split(" ");
    let command = tokenArr.shift();

    if (command === "Buy") {
      let equipment = tokenArr.shift();
      if (!inventory.includes(equipment)) {
        inventory.push(equipment);
      }
    } else if (command === "Trash") {
      let equipment = tokenArr.shift();
      if (inventory.includes(equipment)) {
        let index = inventory.indexOf(equipment);
        inventory.splice(index, 1);
      }
    } else if (command === "Repair") {
      let equipment = tokenArr.shift();
      if (inventory.includes(equipment)) {
        let index = inventory.indexOf(equipment);
        inventory.splice(index, 1);
        inventory.push(equipment);
      }
    } else if (command === "Upgrade") {
      let equipmentArr = tokenArr[0].split("-");
      let equipment = equipmentArr.shift();
      let upgrade = equipmentArr.pop();
      if (inventory.includes(equipment)) {
        let index = inventory.indexOf(equipment);
        inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
      }
    }
  }

  console.log(inventory.join(" "));
}
gladiator([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiator([
  "SWORD Shield Spear",
  "Trash Bow",

  "Repair Shield",

  "Upgrade Helmet-V",
]);
// function buildWall(arr) {
//   let sectionHeights = arr.map(Number);

//   let concrete = [];
//   let pesos = 0;
//   let isFinished = false;

//   while (isFinished === false) {
//     let curConcrete = 0;

//     for (let index = 0; index < sectionHeights.length; index++) {
//       let sectionHeight = sectionHeights[index];

//       if (sectionHeight <= 30) {
//         sectionHeight++;
//         curConcrete += 195;
//       }
//     }

//     concrete.push(curConcrete);
//     pesos = curConcrete * 1900;

//     if (sectionHeights.every((s) => s === 30)) {
//       isFinished = true;
//     }
//   }

//   console.log(concrete.join(", "));
//   console.log(`${pesos} pesos`);
// }

// buildWall([21, 25, 28]);

function bombNumbers(numbers, inputArr) {
  const [specialNum, power] = inputArr;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num === specialNum) {
      numbers.splice(i - power, power * 2 + 1);
      break;
    }
  }
  let sum = 0;
  for (let j = 0; j < numbers.length; j++) {
    let num = numbers[j];
    sum += num;
  }

  console.log(sum);
}
