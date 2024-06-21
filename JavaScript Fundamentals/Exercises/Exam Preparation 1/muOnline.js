function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let roomTaken = 1;

  const arrayOffRoom = input.split("|");
  for (let rooms of arrayOffRoom) {
    const tokenArr = rooms.split(" ");
    const command = tokenArr.shift();
    const number = Number(tokenArr.shift());

    if (command === "potion") {
      health += number;
      let healedHp = number;
      if (health > 100) {
        healedHp = Math.abs(100 - (health - number));
        health = 100;
      }
      roomTaken++;
      console.log(`You healed for ${healedHp} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      bitcoins += number;
      roomTaken++;
      console.log(`You found ${number} bitcoins.`);
    } else {
      let monsterName = command;
      let attack = number;

      health -= attack;

      if (health > 0) {
        roomTaken++;
        console.log(`You slayed ${monsterName}.`);
      } else {
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${roomTaken}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
