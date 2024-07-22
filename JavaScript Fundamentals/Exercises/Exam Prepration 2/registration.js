function solve(input) {
  let name = input.shift();
  let command = input.shift();

  while (command !== "Registration") {
    if (command.includes("Letters")) {
      let commandArr = command.split(" ");
      let letterCommand = commandArr.pop();
      if (letterCommand === "Lower") {
        name = name.toLowerCase();
      } else {
        name = name.toUpperCase();
      }
      console.log(name);
    } else if (command.includes("Reverse")) {
      let [commandLetter, inx1, indx2] = command.split(" ");
      indx2 = Number(indx2);
      inx1 = Number(inx1);
      if (
        indx2 > 0 &&
        indx2 <= name.length &&
        inx1 >= 0 &&
        inx1 < name.length
      ) {
        let slicedPart = name.slice(inx1, indx2 + 1);
        let newPart = slicedPart.split("").reverse().join("");
        console.log(newPart);
      }
    } else if (command.includes("Substring")) {
      let commandArr = command.split(" ");
      let substring = commandArr.pop();

      if (name.includes(substring)) {
        name = name.replace(substring,"");
        console.log(name);
      } else {
        console.log(`The username ${name} doesn't contain ${substring}.`);
      }
    } else if (command.includes("Replace")) {
      let commandArr = command.split(" ");
      let char = commandArr.pop();
      for(let chars of name){
        if(chars === char){
            name = name.replace(chars,"-");
        }
      }
      console.log(name);
    } else if (command.includes("IsValid")) {
      let commandArr = command.split(" ");
      let char = commandArr.pop();

      if (name.includes(char)) {
        console.log(`Valid username.`);
      } else {
        console.log(`${char} must be contained in your username.`);
      }
    }

    command = input.shift();
  }
}
solve([
  "ThisIsSoftUni",
  "Reverse 1 3",
  "Replace S",
  "Substring hi",
  "Registration",
]);
