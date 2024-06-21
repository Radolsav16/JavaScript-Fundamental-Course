function counterStrike(input) {
  let energy = Number(input.shift());
  let i = 0;
  let command = input[i];
  let wins = 0;
  while (command !== "End of battle") {
    const distance = Number(command);
    if (wins % 3 === 0) {
      energy += wins;
    }
    if (energy < distance) {
      console.log(
        `Not enough energy! Game ends with ${wins} won battles and ${energy} energy`
      );
      return;
    } else {
      energy -= distance;
      wins++;
    }

    i++;
    command = input[i];
  }

  if (command === "End of battle") {
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
  }
}
// counterStrike(["100",
//     "10",
//     "10",
//     "10",
//     "1",
//     "2",
//     "3",
//     "73",
//     "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
