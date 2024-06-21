function arrayModifyer(input) {
  let arrayOfIntegers = input.shift().split(" ").map(Number);
  for (const tokens of input) {
    if (tokens === "end") {
      break;
    } else if (tokens === "decrease") {
      const newArr = arrayOfIntegers.map((el) => el - 1);
      arrayOfIntegers = newArr;
    } else {
      const commandArray = tokens.split(" ");
      const command = commandArray.shift();
      const indexOne = Number(commandArray.shift());
      const indexTwo = Number(commandArray.shift());
      switch (command) {
        case "swap":
          const firstElement = arrayOfIntegers[indexOne];
          const index1 = arrayOfIntegers.indexOf(firstElement);
          const secondElement = arrayOfIntegers[indexTwo];
          const index2 = arrayOfIntegers.indexOf(secondElement);
          arrayOfIntegers.splice(index1, 1, secondElement);
          arrayOfIntegers.splice(index2, 1, firstElement);
          break;
        case "multiply":
          const firstElement1 = arrayOfIntegers[indexOne];
          const secondElement1 = arrayOfIntegers[indexTwo];
          const product = firstElement1 * secondElement1;
          arrayOfIntegers.splice(indexOne, 1, product);
          break;
      }
    }
  }
  console.log(arrayOfIntegers.join(", "));
}
 arrayModifyer([
"1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end"
 ]);
