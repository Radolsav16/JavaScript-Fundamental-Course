function inventory(input) {
  const collectItems = input.shift().split(", ");
  let i = 0;
  let command = input[i];

  while (command !== "Craft!") {
    const tokenArr = command.split(" - ");
    const singleCommand = tokenArr.shift();

    if (singleCommand === "Collect") {
      const item = tokenArr.shift();
      if (!collectItems.includes(item)) {
        collectItems.push(item);
      }
    } else if (singleCommand === "Drop") {
      const item = tokenArr.shift();
      if (collectItems.includes(item)) {
        let index = collectItems.indexOf(item);
        collectItems.splice(index, 1);
      }
    } else if (singleCommand === "Combine Items") {
      const itemsArr = tokenArr.shift().split(":");
      const oldItem = itemsArr.shift();
      const newItem = itemsArr.shift();
      if (collectItems.includes(oldItem)) {
        let index = collectItems.indexOf(oldItem);
        collectItems.splice(index + 1, 0, newItem);
      }
    } else if (singleCommand === "Renew") {
      const item = tokenArr.shift();
      if (collectItems.includes(item)) {
        let index = collectItems.indexOf(item);
        collectItems.splice(index, 1);
        collectItems.push(item);
      }
    }

    i++;
    command = input[i];
  }
  console.log(collectItems.join(", "));
}
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
//   ])
