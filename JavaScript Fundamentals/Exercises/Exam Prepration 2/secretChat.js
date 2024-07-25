function solve(input) {
  let message = input.shift();
  let command = input.shift();

  while (command !== "Reveal") {
    if (command.includes("InsertSpace")) {
      let [instruction, index] = command.split(":|:");
      let messageArr = message.split("");
      messageArr.splice(index, 0, " ");
      messageArr = messageArr.join("");
      message = messageArr;
      console.log(message);
    } else if (command.includes("Reverse")) {
      let [instruction, substring] = command.split(":|:");
      if (message.includes(substring)) {
        let endIndex = substring.length;
        let startIndex = message.indexOf(substring);
        let part = message.slice(startIndex, startIndex + endIndex);
        message = message.replace(part, "");
        part = part.split("").reverse().join("");
        message += part;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command.includes("ChangeAll")) {
      let [instruction, substring, replacement] = command.split(":|:");
      while (message.includes(substring)) {
        message = message.replace(substring, replacement);
      }

      console.log(message);
    }

    command = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}
solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
