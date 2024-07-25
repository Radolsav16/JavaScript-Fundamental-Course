function solve(input) {
  let str = input.shift();
  let command = input.shift();

  while (command !== "Done") {
    if (command.includes("TakeOdd")) {
      let arrOfStr = str.split("");
      let newStr = "";
      for (let i = 0; i < arrOfStr.length; i++) {
        if (i % 2 !== 0) {
          newStr += arrOfStr[i];
        }
      }
      str = newStr;
      console.log(str);
    } else if (command.includes("Cut")) {
      let commandArr = command.split(" ");
      let length = Number(commandArr.pop());
      let index = Number(commandArr.pop());
      let slicedPart = str.slice(index, index + length);
      str = str.replace(slicedPart, "");
      console.log(str);
    } else if (command.includes("Substitute")) {
      let commandArr = command.split(" ");
      let replacement = commandArr.pop();
      let substring = commandArr.pop();
      if (str.includes(substring)) {
        while (str.includes(substring)) {
          str = str.replace(substring, replacement);
        }
        console.log(str);
      } else {
        console.log(`Nothing to replace!`);
      }
    }

    command = input.shift();
  }
  console.log(`Your password is: ${str}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
