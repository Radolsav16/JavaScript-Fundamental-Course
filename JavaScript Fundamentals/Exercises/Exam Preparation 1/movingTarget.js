function movingTarget(input) {
  const sequanceOfTargets = input.shift().split(" ").map(Number);
  let i = 0;
  let command = input[i];

  while (command !== "End") {
    let tokens = command;
    const tokenArr = tokens.split(" ");
    const singleCommand = tokenArr.shift();

    if (singleCommand === "Shoot") {
      const index = Number(tokenArr.shift());
      const power = Number(tokenArr.shift());
      if (sequanceOfTargets[index]) {
        sequanceOfTargets[index] -= power;
        if (sequanceOfTargets[index] <= 0) {
          sequanceOfTargets.splice(index, 1);
        }
      }
    } else if (singleCommand === "Add") {
      const index = Number(tokenArr.shift());
      const value = Number(tokenArr.shift());
      if (sequanceOfTargets[index]) {
        sequanceOfTargets.splice(index, 0, value);
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (singleCommand === "Strike") {
      const index = Number(tokenArr.shift());
      const radius = Number(tokenArr.shift());
      let maxRange = index + radius;
      let minRange = index - radius;
      if (sequanceOfTargets[maxRange] && sequanceOfTargets[minRange]) {
        sequanceOfTargets.splice(minRange, maxRange);
      } else {
        console.log(`Strike missed!`);
      }
    }

    i++;
    command = input[i];
  }

  if (command === "End") {
    console.log(sequanceOfTargets.join("|"));
    return;
  }
}
// movingTarget(["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
