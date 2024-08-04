function solve(input) {
  let str = input.shift();
  let command = input.shift();

  while (command !== "End") {
    let commandArr = command.split(" ");
    let mainCommand = commandArr.shift();
    if (mainCommand === "Translate") {
      let char = commandArr.shift();
      let replacement = commandArr.shift();
      while (str.includes(char)) {
        str = str.replace(char, replacement);
      }
      console.log(str);
    } else if (mainCommand === "Includes") {
      let substring = commandArr.shift();
      if (str.includes(substring)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (mainCommand === "Start") {
      let substring = commandArr.shift();
      if (str.startsWith(substring)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (mainCommand === "Lowercase") {
      str = str.toLowerCase();
      console.log(str);
    } else if (mainCommand === "Remove") {
      let startIndex = Number(commandArr.shift());
      let count = Number(commandArr.shift());
      str = str.split("");
      str.splice(startIndex, count);
      str = str.join("");
      console.log(str);
    } else if (mainCommand === "FindIndex") {
      let char = commandArr.shift();
      let index = str.lastIndexOf(char);
      console.log(index);
    }

    command = input.shift();
  }
}
solve([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
