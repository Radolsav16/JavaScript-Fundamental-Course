function robotsAdventure(input) {
  const itemsGrid = input.shift().split("|").map(Number);
  let i = 0;
  let command = input[i];
  let totalItems = 0;

  while (command !== "Adventure over") {
    let tokenArr = command.split("$");
    let singleCommand = "";
    if (tokenArr.length > 1) {
      singleCommand = tokenArr.shift();
    } else {
      singleCommand = tokenArr.join("").split(" ")[0];
    }

    if (singleCommand === "Step Backward") {
      let startIndex = Number(tokenArr.shift());
      let steps = Number(tokenArr.shift());
      if (startIndex >= 0 && startIndex < itemsGrid.length) {
        let index = (startIndex - steps) % itemsGrid.length;
        if (index < 0) index += itemsGrid.length;
        totalItems += itemsGrid[index];
        itemsGrid[index] = 0;
      }
    } else if (singleCommand === "Step Forward") {
      const startIndex = Number(tokenArr.shift());
      const steps = Number(tokenArr.shift());
      if (startIndex >= 0 && startIndex < itemsGrid.length) {
        let index = (startIndex + steps) % itemsGrid.length;
        totalItems += itemsGrid[index];
        itemsGrid[index] = 0;
      }
    } else if (singleCommand === "Double") {
      const index = Number(tokenArr.join("").split(" ")[1]);
      if (itemsGrid[index]) {
        itemsGrid[index] = itemsGrid[index] * 2;
      }
    } else if (singleCommand === "Switch") {
      itemsGrid.reverse();
    }
    i++;
    command = input[i];
  }

  if (command === "Adventure over") {
    console.log(itemsGrid.join(" - "));
    console.log(`Robo finished the adventure with ${totalItems} items!`);
  }
}
robotsAdventure([
  "20|30|40|50|60",
  "Step Backward$0$12",
  "Step Forward$4$15",
  "Step Backward$2$5",
  "Double 1",
  "Switch",
  "Adventure over",
]);
robotsAdventure([
  "10|5|7|10|3|6",
  "Step Backward$0$2",
  "Step Forward$3$5",
  "Step Forward$6$7",
  "Switch",
  "Double 1",
  "Adventure over",
]);

