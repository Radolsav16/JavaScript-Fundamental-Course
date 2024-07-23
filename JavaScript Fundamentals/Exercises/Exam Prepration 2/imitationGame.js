function solve(input) {
  let message = input.shift();
  let command = input.shift();

  while (command !== "Decode") {
    if (command.includes("Move")) {
      let commandArr = command.split("|");
      let numberOfLetters = commandArr.pop();
      let slicedStr = message.slice(0, numberOfLetters);
      message = message.replace(slicedStr, "");
      message += slicedStr;
    } else if (command.includes("Insert")) {
      let commandArr = command.split("|");
      let value = commandArr.pop();
      let indx = Number(commandArr.pop());
      let messageNewArr = message.split("");
      messageNewArr.splice(indx, 0, value);
      let newMessage = messageNewArr.join("");
      message = newMessage;
    } else if (command.includes("ChangeAll")) {
      let commandArr = command.split("|");
      let replacement = commandArr.pop();
      let substring = commandArr.pop();

      for (const char of message) {
        if (char === substring) {
          message = message.replace(char, replacement);
        }
      }
    }

    command = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
// solve(['zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode']);
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
