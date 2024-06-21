function manOWar(inputArray) {
  // const [pirateShipStr,warShipStr,maximumHealthCapacity] = inputArray;

  const pirateShipArray = inputArray.shift().split(">").map(Number);
  const warShipArray = inputArray.shift().split(">").map(Number);
  const maxHealthCapacity = Number(inputArray.shift());

  for (let tokens of inputArray) {
    const tokenArr = tokens.split(" ");
    const command = tokenArr.shift();

    if (command === "Retire") {
      break;
    }

    if (command === "Fire") {
      const index = Number(tokenArr.shift());
      const damage = Number(tokenArr.shift());
      /// pirate ship attacks warship
      if (!warShipArray[index]) {
        continue;
      } else {
        // warShipArray[index] -= damage;
        // if (warShipArray[index] <= 0) {
        //   console.log(`You won! The enemy ship has sunken.`);
        //   return;
        // }
        if (warShipArray[index] - damage < 0) {
          warShipArray[index] = 0;
        } else {
          warShipArray[index] -= damage;
        }

        if (warShipArray.includes(0)) {
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
      }
    } else if (command === "Defend") {
      const startIndx = Number(tokenArr.shift());
      const endIndx = Number(tokenArr.shift());
      const damage = Number(tokenArr.shift());

      if (!pirateShipArray[endIndx]) {
        continue;
      } else {
        for (let i = startIndx; i <= endIndx; i++) {
          if (pirateShipArray[i] - damage < 0) {
            pirateShipArray[i] = 0;
          } else {
            pirateShipArray[i] -= damage;
          }

          if (pirateShipArray.includes(0)) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }

      /// warship attack pirates
    } else if (command === "Repair") {
      const index = Number(tokenArr.shift());
      const health = Number(tokenArr.shift());

      if (!pirateShipArray[index]) {
        continue;
      } else {
        let posssibleHealth = (pirateShipArray[index] += health);
        if (posssibleHealth > maxHealthCapacity) {
          pirateShipArray[index] = maxHealthCapacity;
        } else {
          pirateShipArray[index] = posssibleHealth;
        }
      }
    } else if (command === "Status") {
      const repairStatus = maxHealthCapacity * 0.2;
      let count = 0;
      pirateShipArray.forEach((element) => {
        if (element < repairStatus) {
          count++;
        }
      });
      console.log(`${count} sections need repair.`);
    }
  }

  let pirateShipSum = 0;
  let warshipSum = 0;
  pirateShipArray.forEach((el) => (pirateShipSum += el));
  warShipArray.forEach((el) => (warshipSum += el));

  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warshipSum}`);
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
manOWar([
  "2>3>4>5>2",

  "6>7>8>9>10>11",

  "20",

  "Status",

  "Fire 2 3",

  "Defend 0 4 11",

  "Repair 3 18",

  "Retire",
]);
