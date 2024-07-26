function solve(input) {
  let numberOfHerose = Number(input.shift());
  const heroes = {};

  for (let i = 0; i < numberOfHerose; i++) {
    let heroStrInfo = input.shift();
    let [name, hp, mp] = heroStrInfo.split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[name] = { hp, mp };
  }

  let command = input.shift();

  while (command !== "End") {
    if (command.includes("CastSpell")) {
      let [commandInfo, heroName, mpNeed, spellName] = command.split(" - ");
      mpNeed = Number(mpNeed);
      if (heroes[heroName].mp >= mpNeed) {
        heroes[heroName].mp -= mpNeed;
        console.log(
          `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`
        );
      } else {
        console.log(
          `${heroName} does not have enough MP to cast ${spellName}!`
        );
      }
    } else if (command.includes("TakeDamage")) {
      let [commandInfo, heroName, damage, attacker] = command.split(" - ");
      damage = Number(damage);
      heroes[heroName].hp -= damage;
      if (heroes[heroName].hp > 0) {
        console.log(
          `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`
        );
      } else {
        delete heroes[heroName];
        console.log(`${heroName} has been killed by ${attacker}!`);
      }
    } else if (command.includes("Recharge")) {
      let [commandInfo, heroName, amount] = command.split(" - ");
      amount = Number(amount);
      let currMp = heroes[heroName].mp;
      heroes[heroName].mp += amount;

      if (heroes[heroName].mp > 200) {
        heroes[heroName].mp = 200;
        console.log(`${heroName} recharged for ${200 - currMp} MP!`);
      } else {
        console.log(`${heroName} recharged for ${amount} MP!`);
      }
    } else if (command.includes("Heal")) {
      let [commandInfo, heroName, amount] = command.split(" - ");
      amount = Number(amount);
      let currHealth = heroes[heroName].hp;
      heroes[heroName].hp += amount;

      if (heroes[heroName].hp > 100) {
        heroes[heroName].hp = 100;
        console.log(`${heroName} healed for ${100 - currHealth} HP!`);
      } else {
        console.log(`${heroName} healed for ${amount} HP!`);
      }
    }
    command = input.shift();
  }

  for (let heroName in heroes) {
    console.log(`${heroName}`);
    console.log(` HP: ${heroes[heroName].hp}`);
    console.log(` MP: ${heroes[heroName].mp}`);
  }
}
solve([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
