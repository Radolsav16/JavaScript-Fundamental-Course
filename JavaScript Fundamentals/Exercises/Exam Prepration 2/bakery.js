function bakery(input) {
  let lines = input.shift();
  const bakeryShop = {};
  let allGoods = 0;

  while (lines !== "Complete") {
    if (lines.includes("Receive")) {
      let [commnd, quantity, food] = lines.split(" ");
      quantity = Number(quantity);

      if (quantity >= 0) {
        if (food in bakeryShop) {
          bakeryShop[food] += quantity;
        } else {
          bakeryShop[food] = quantity;
        }
      }
    } else if (lines.includes("Sell")) {
      let [command, quantity, food] = lines.split(" ");
      quantity = Number(quantity);

      if (!bakeryShop.hasOwnProperty(food)) {
        console.log(`You do not have any ${food}.`);
      } else {
        if (quantity > bakeryShop[food]) {
          console.log(
            `There aren't enough ${food}. You sold the last ${bakeryShop[food]} of them.`
          );
          soldProducts.push(food);
          allGoods += quantity;
          delete bakeryShop[food];
        } else {
          bakeryShop[food] -= quantity;
          allGoods += quantity;
          console.log(`You sold ${quantity} ${food}.`);
          if (bakeryShop[food] <= 0) {
            delete bakeryShop[food];
          }
        }
      }
    }

    lines = input.shift();
  }

  for (let keys in bakeryShop) {
    console.log(`${keys}: ${bakeryShop[keys]}`);
  }

  console.log(`All sold: ${allGoods} goods`);
}
bakery([
  "Receive 105 cookies",
  "Receive 10 donuts",
  "Sell 10 donuts",
  "Sell 1 bread",
  "Complete",
]);
