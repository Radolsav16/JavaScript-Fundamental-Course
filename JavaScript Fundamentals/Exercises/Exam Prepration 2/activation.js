function solve(input) {
  let activationKey = input.shift();
  let command = input.shift();
  while (command !== "Generate") {
    if (command.includes("Contains")) {
      let [commandInfo, substring] = command.split(">>>");
      if (activationKey.includes(substring)) {
        console.log(`${activationKey} contains ${substring}.`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command.includes("Flip")) {
      let [commandInfo, upperOrLower, startIndex, endIndex] =
        command.split(">>>");
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      let slicePart = activationKey.slice(startIndex, endIndex);
      let newPart = "";
      if (upperOrLower === "Upper") {
        newPart = slicePart.toUpperCase();
      } else if (upperOrLower === "Lower") {
        newPart = slicePart.toLowerCase();
      }
      activationKey = activationKey.replace(slicePart, newPart);
      console.log(activationKey);
    } else if (command.includes("Slice")) {
      let [commandInfo, startIndex, endIndex] = command.split(">>>");
      let slicedPart = activationKey.slice(startIndex, endIndex);
      activationKey = activationKey.replace(slicedPart, "");
      console.log(activationKey);
    }

    command = input.shift();
  }
  console.log(`Your activation key is: ${activationKey}`);
}
solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
