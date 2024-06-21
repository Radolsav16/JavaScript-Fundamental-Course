function shoppingList(input) {
  const initialList = input.shift().split("!");
  let i = 0;
  let command = input[i];

  while (command !== "Go Shopping!") {
    const tokenArr = command.split(" ");
    const singleCommand = tokenArr.shift();

    if (singleCommand === "Urgent") {
      const item = tokenArr.shift();
      if (!initialList.includes(item)) {
        initialList.unshift(item);
      }
    } else if (singleCommand === "Unnecessary") {
      const item = tokenArr.shift();
      if (initialList.includes(item)) {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1);
      }
    } else if (singleCommand === "Correct") {
      const oldItem = tokenArr.shift();
      const newItem = tokenArr.shift();
      if (initialList.includes(oldItem)) {
        let index = initialList.indexOf(oldItem);
        initialList.splice(index, 1, newItem);
      }
    } else if (singleCommand === "Rearrange") {
      const item = tokenArr.shift();
      if (initialList.includes(item)) {
        let index = initialList.indexOf(item);
        initialList.splice(index, 1);
        initialList.push(item);
      }
    }

    i++;
    command = input[i];
  }

  for (let i = 0; i < initialList.length; i++) {
    let item = initialList[i];
    for (let j = i + 1; j < initialList.length; j++) {
      let afterItem = initialList[j];
      if (item === afterItem) {
        let index = j;
        initialList.splice(index, 1);
      }
    }
  }

  console.log(initialList.join(", "));
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
