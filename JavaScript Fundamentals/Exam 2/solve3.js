function solve(input) {
  let command = input.shift();
  let guestMeals = {};
  let unlikedMeals = 0;

  while (command !== "Stop") {
    let [mainCommand, guest, meal] = command.split("-");
    if (mainCommand === "Like") {
      if (guestMeals[guest]) {
        if (!guestMeals[guest].includes(meal)) {
          guestMeals[guest].push(meal);
        }
      } else {
        guestMeals[guest] = [meal];
      }
    } else {
      if (guestMeals[guest]) {
        if (guestMeals[guest].includes(meal)) {
          unlikedMeals++;
          let index = guestMeals[guest].indexOf(meal);
          guestMeals[guest].splice(index, 1);
          console.log(`${guest} doesn't like the ${meal}.`);
        } else {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        }
      } else {
        console.log(`${guest} is not at the party.`);
      }
    }

    command = input.shift();
  }

  for (let keys in guestMeals) {
    console.log(`${keys}: ${guestMeals[keys].join(", ")}`);
  }
  console.log(`Unliked meals: ${unlikedMeals}`);
}
solve(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);
