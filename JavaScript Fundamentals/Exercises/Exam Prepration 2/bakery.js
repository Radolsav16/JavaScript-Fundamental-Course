function bakery(input) {
  let command = input.shift();
  const foods = {};
  let soldFoodQuantity = 0;
  while (command !== "Complete") {
    if (command.includes("Receive")) {
      let [info, quantity, food] = command.split(" ");
      quantity = Number(quantity);
      if (quantity > 0) {
        if (food in foods) {
          foods[food] += quantity;
        } else {
          foods[food] = quantity;
        }
      }
    } else if (command.includes("Sell")) {
      let [info, quantity, food] = command.split(" ");
      quantity = Number(quantity);
      if (food in foods) {
        if (foods[food] < quantity) {
          delete foods[food];
          soldFoodQuantity += quantity;
          console.log(
            `There aren't enough ${food}. You sold the last ${foods[food]} of them.`
          );
        } else {
          foods[food] -= quantity;
          if (foods[food] <= 0) {
            delete foods[food];
          }
          soldFoodQuantity += quantity;
          console.log(`You sold ${quantity} ${food}.`);
        }
      } else {
        console.log(`You do not have any ${food}.`);
      }
    }
    command = input.shift();
  }

  for (let food in foods) {
    console.log(`${food}: ${foods[food]}`);
  }
  console.log(`All sold: ${soldFoodQuantity} goods`);
}
bakery([
  "Receive 10 muffins",
  "Receive 23 bagels",
  "Sell 5 muffins",
  "Sell 10 bagels",
  "Complete",
]);
