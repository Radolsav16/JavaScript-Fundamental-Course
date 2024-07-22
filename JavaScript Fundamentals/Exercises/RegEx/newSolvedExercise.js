function furniture(input) {
  let command = input.shift();
  const pattern =
    />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
  let totalCost = 0;
  let names = [];

  while (command !== "Purchase") {
    const match = command.match(pattern);

    if (match) {
      let { name, price, quantity } = match.groups;
      let currentPrice = Number(price) * Number(quantity);
      totalCost += currentPrice;
      names.push(name);
    }

    command = input.shift();
  }
  console.log(`Bought furniture:`);
  names.forEach((el) => console.log(el));
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
// furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);

function race(input) {
  const namesList = input.shift().split(", ");
  let command = input.shift();
  const digitPattern = /\d/g;
  const wordPattern = /[A-Za-z]/g;
  const infoes = {};

  namesList.forEach((name) => (infoes[name] = 0));

  while (command !== "end of race") {
    let matchedLetters = command.match(wordPattern);
    let name = matchedLetters.join("");
    let km = command
      .match(digitPattern)
      .map(Number)
      .reduce((acc, val) => acc + val);

    if (name in infoes) {
      infoes[name] += km;
    }

    command = input.shift();
  }
  const infoesEntriesSorted = Object.entries(infoes).sort(
    (a, b) => b[1] - a[1]
  );

  console.log(`1st place: ${infoesEntriesSorted[0][0]}`);
  console.log(`2nd place: ${infoesEntriesSorted[1][0]}`);
  console.log(`3rd place: ${infoesEntriesSorted[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

function softUniBar(input) {
  let command = input.shift();
  const pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;
  let totalCost = 0;
  while (command !== "end of shift") {
    let match = command.match(pattern);
    if (match) {
      let { customer, product, count, price } = match.groups;
      count = Number(count);
      price = Number(price);
      let currPrice = count * price;
      totalCost += currPrice;
      console.log(`${customer}: ${product} - ${currPrice.toFixed(2)}`);
    }

    command = input.shift();
  }
  console.log(`Total income: ${totalCost.toFixed(2)}`);
}
softUniBar([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

function starEnigma(input) {
  let n = Number(input.shift());
  let keyLetters = /[s,t,a,r]/gi;

  let planets = {
    attacked: [],
    destroyed: [],
  };

  for (let i = 0; i < n; i++) {
    let command = input[i];
    let matchedCharsNumber = command.match(keyLetters).length;

    let newMsg = "";
    for (const char of command) {
      let newEl = String.fromCharCode(char.charCodeAt(0) - matchedCharsNumber);
      newMsg += newEl;
    }

    const pattern =
      /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*\!(?<attack>[AD])\![^@\-!:>]*->(?<count>\d+)/g;

    let match = [...newMsg.matchAll(pattern)];

    for (let arr of match) {
      let obj = arr.groups;
      let { name, population, attack, count } = obj;
      count = Number(count);
      population = Number(population);

      if (attack === "A") {
        planets.attacked.push(name);
      } else if (attack === "D") {
        planets.destroyed.push(name);
      }
    }
  }
  console.log(`Attacked planets: ${planets.attacked.length}`);
  planets.attacked
    .sort((a, b) => a.localeCompare(b))
    .forEach((el) => console.log(`-> ${el}`));
  console.log(`Destroyed planets: ${planets.destroyed.length}`);
  planets.destroyed
    .sort((a, b) => a.localeCompare(b))
    .forEach((el) => console.log(`-> ${el}`));
}
// starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);

function netherRealms(inputStr) {
  const input = inputStr.split(", ");
  const battleDemonBook = [];
  const excluddingCharacters = /[^\d\+\-\*/.]/g;
  const numberPattern = /[\-\+]*\d+\.\d+|\d/g;

  for (let demons of input) {
    let demonHealth = 0;
    let matchesForHealth = demons.matchAll(excluddingCharacters);
    for (let arr of matchesForHealth) {
      let char = arr[0];
      let asciCode = char.charCodeAt(0);
      demonHealth += asciCode;
    }
    let baseDamage = 0;

    let matchedNums = demons.matchAll(numberPattern);
    for (let matches of matchedNums) {
      let nums = Number(matches[0]);
      baseDamage += nums;
    }

    for (let chars of demons) {
      if (chars === "*") {
        baseDamage *= 2;
      } else if (chars === "/") {
        baseDamage /= 2;
      }
    }

    battleDemonBook.push({ name: demons, baseDamage, demonHealth });
  }

  let sortedArr = battleDemonBook.sort((a, b) => a.name.localeCompare(b.name));

  for (const obj of sortedArr) {
    console.log(
      `${obj.name} - ${obj.demonHealth} health, ${obj.baseDamage.toFixed(
        2
      )} damage`
    );
  }
}

// netherRealms('M3ph-0.5s-0.5t0.0**');
// netherRealms('M3ph1st0**, Azazel');
netherRealms("Gos/ho");
