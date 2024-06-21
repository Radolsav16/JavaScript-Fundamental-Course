function memoryGame(inputArray) {
  const sequanceOfElementsArr = inputArray.shift().split(" ");
  let i = 0;
  let command = inputArray[i];
  let moves = 0;
  let matchingCount = 0;
  while (command !== "end") {
    if (sequanceOfElementsArr.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      return;
    }
    const indexes = command;
    const indxArray = indexes.split(" ").map(Number);
    const indexOne = indxArray.shift();
    const indexTwo = indxArray.shift();
    moves++;
    if (
      indexOne === indexTwo ||
      !sequanceOfElementsArr[indexOne] ||
      !sequanceOfElementsArr[indexTwo]
    ) {
      const middleOfArray = Math.floor(sequanceOfElementsArr.length / 2);
      sequanceOfElementsArr.splice(middleOfArray, 0, `-${moves}a`, `${moves}a`);
      console.log(`Invalid input! Adding additional elements to the board`);
      i++;
      command = inputArray[i];
      continue;
    }

    if (sequanceOfElementsArr[indexOne] === sequanceOfElementsArr[indexTwo]) {
      let indexOfFirstEl = sequanceOfElementsArr.indexOf(
        sequanceOfElementsArr[indexOne]
      );
      const element = sequanceOfElementsArr[indexOne];
      sequanceOfElementsArr.splice(indexOfFirstEl, 1);
      let indexOfSecondEl = sequanceOfElementsArr.indexOf(element);
      sequanceOfElementsArr.splice(indexOfSecondEl, 1);
      matchingCount++;
      console.log(`Congrats! You have found matching elements - ${element}!`);
    } else if (
      sequanceOfElementsArr[indexOne] !== sequanceOfElementsArr[indexTwo]
    ) {
      console.log("Try again!");
    }

    i++;
    command = inputArray[i];
  }

  if (command === "end") {
    console.log(`Sorry you lose :(`);
    console.log(`${sequanceOfElementsArr.join(" ")}`);
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
