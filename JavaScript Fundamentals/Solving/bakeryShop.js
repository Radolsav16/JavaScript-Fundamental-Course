function bakeryShop(input) {
  let commands = input.shift();
  const shop = {};
  let soleFoodQuantitu = 0;

  while (commands !== "Complete") {
    let [cmd, quantity, food] = commands.split(" ");
    quantity = Number(quantity);
    if (cmd === "Receive") {
      if (quantity <= 0) {
        continue;
      }

      if (shop[food]) {
        shop[food] += quantity;
      } else {
        shop[food] = quantity;
      }
    } else {
      if (shop[food]) {
        if (shop[food] < quantity) {
          delete shop[food];
          console.log(
            `There aren't enough ${food}. You sold the last ${quantity} of them.`
          );
          soleFoodQuantitu += quantity;
        } else {
          shop[food] -= quantity;
          console.log(`You sold ${quantity} ${food}.`);

          if (shop[food] === 0) {
            delete shop[food];
            soleFoodQuantitu += quantity;
          }
        }
      } else {
        console.log(`You do not have any ${food}.`);
      }
    }

    commands = input.shift();
  }

  for (let foods in shop) {
    console.log(`${foods}: ${shop[foods]}`);
  }
  console.log(`All sold: ${soleFoodQuantitu} goods`);

  console.log("Erorr1");
  
}
bakeryShop([
  "Receive 105 cookies",
  "Receive 10 donuts",
  "Sell 10 donuts",
  "Sell 1 bread",
  "Complete",
]);
