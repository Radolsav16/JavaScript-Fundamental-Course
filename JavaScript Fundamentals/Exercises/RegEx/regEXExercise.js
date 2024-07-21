function furniture(input) {
  let i = 0;
  let command = input[i];
  const pattern = />>([A-Z][a-zA-Z]*)<<(\d+(\.\d+)?)!(\d+)/;
  let totalMoneySpend = 0;
  const items = [];
  while (command !== "Purchase") {
    // ">>{furniture name}<<{price}!{quantity}"
    if (pattern.test(command)) {
      let index = command.indexOf("<");
      let index2 = command.lastIndexOf("<");
      let index3 = command.indexOf("!");
      let name = command.slice(2, index);
      let price = Number(command.slice(index2 + 1, index3));
      let quantity = Number(command.slice(index3 + 1));
      items.push(name);
      totalMoneySpend += price * quantity;
    }

    i++;
    command = input[i];
  }
  if (items.length === 0) {
    console.log(`Bought furniture:`);
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
  } else {
    console.log(`Bought furniture:`);
    for (let furnitures of items) {
      console.log(furnitures);
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
  }
}
// furniture(['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5','Purchase']);
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
  const participatersList = input.shift().split(", ");
  let i = 0;
  let command = input[i];
  let fisrtPattern = /[A-Z]/;
  let thirthPattern = /[a-z]/;
  let secondPattern = /\d/;

  const raceInfo = {};

  for (const participaters of participatersList) {
    raceInfo[participaters] = 0;
  }

  while (command !== "end of race") {
    let info = command;
    let name = "";
    let distance = 0;
    for (let char of info) {
      let newChar = Number(char);
      if (isNaN(newChar)) {
        if (fisrtPattern.test(char) || thirthPattern.test(char)) {
          name += char;
        }
      } else if (typeof newChar === "number") {
        if (secondPattern.test(newChar)) {
          distance += newChar;
        }
      }
    }
    if (name in raceInfo) {
      raceInfo[name] += distance;
    }

    i++;
    command = input[i];
  }

  let entrise = Object.entries(raceInfo);
  entrise.sort((a, b) => b[1] - a[1]);
  let array = [];
  for (const [name, distance] of entrise) {
    array.push(name);
  }
  for (let i = 0; i <= 2; i++) {
    let name = array[i];
    if (i === 0) {
      console.log(`1st place: ${name}`);
    } else if (i === 1) {
      console.log(`2nd place: ${name}`);
    } else {
      console.log(`3rd place: ${name}`);
    }
  }
}
// race(['George, Peter, Bill, Tom','G4e@55or%6g6!68e!!@ ','R1@!3a$y4456@','B5@i@#123ll','G@e54o$r6ge#','7P%et^#e5346r','T$o553m&6','end of race'])
race([
  "Ronald, Bill, Tom, Timmy,Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);

function softuniBarIncome(input) {
  let i = 0;
  let command = input[i];
  const pattern =
    /%([A-Z][a-z]*)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*(\d+(\.\d+)?)\$/;
  let totalPrice = 0;

  while (command !== "end of shift") {
    if (pattern.test(command)) {
      let name = "";
      for (let i = 1; i <= command.length; i++) {
        let char = command[i];
        if (char === "%") {
          break;
        } else {
          name += char;
        }
      }
      let index1 = command.indexOf("<");
      let product = "";
      for (let k = index1 + 1; k <= command.length; k++) {
        let char = command[k];
        if (char === ">") {
          break;
        } else {
          product += char;
        }
      }

      let quantity = "";
      let index2 = command.indexOf("|");
      for (let j = index2 + 1; j <= command.length; j++) {
        let char = command[j];
        if (char === "|") {
          break;
        } else {
          quantity += char;
        }
      }
      quantity = Number(quantity);
      let index4 = command.lastIndexOf("|");
      let price = Number(command.slice(index4 + 1, command.length - 1));
      let currentTax = price * quantity;
      totalPrice += currentTax;

      console.log(`${name}: ${product} - ${currentTax.toFixed(2)}`);
    }
    i++;
    command = input[i];
  }
  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softuniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

function starEnigma(input) {
  const n = Number(input.shift());
  const fisrtPattern = /[s, t, a, r]/gi;
  const attackedPlanets = [];
  const destroyedPlanets = [];

  for (let i = 0; i < n; i++) {
    let message = input[i];
    let count = 0;
    let newMessage = "";
    let matchedChar = message.match(fisrtPattern);
    let key = matchedChar.length;
    for (const char of message) {
      let currcharCode = char.charCodeAt(0);
      let newChar = String.fromCharCode(currcharCode - key);
      newMessage += newChar;
    }
    let indexOfclomba = newMessage.indexOf("@");
    let indexOfTwoPoints = newMessage.indexOf(":");
    let indx1 = newMessage.indexOf("!");
    let indx2 = newMessage.lastIndexOf("!");
    let indx3 = newMessage.indexOf(">");
    if (
      indx3 === -1 ||
      indx2 === -1 ||
      indx3 === -1 ||
      indexOfclomba === -1 ||
      indexOfTwoPoints === -1
    ) {
      continue;
    }
    const patternForName = /[A-Za-z]/;
    let name = "";
    // construct name
    for (let k = indexOfclomba + 1; k < newMessage.length; k++) {
      let char = newMessage[k];
      if (patternForName.test(char)) {
        name += char;
      } else {
        break;
      }
    }
    const populationPattern = /[0-9]/;
    let population = "";
    // construct population integer
    for (let j = indexOfTwoPoints + 1; j < newMessage.length; j++) {
      const char = newMessage[j];
      if (populationPattern.test(char)) {
        population += char;
      } else {
        break;
      }
    }
    population = Number(population);
    let attack = "";
    //construct attack type
    for (let l = indx1 + 1; l < indx2; l++) {
      const char = newMessage[l];
      attack = char;
    }
    let soldiercount = "";
    // construct soldeir count
    for (let p = indx3 + 1; p < newMessage.length; p++) {
      const char = newMessage[p];
      if (populationPattern.test(char)) {
        soldiercount += char;
      } else {
        break;
      }
    }
    soldiercount = Number(soldiercount);

    let isInvalid = isNaN(soldiercount) || isNaN(population);

    if (!isInvalid) {
      if (attack === "A") {
        attackedPlanets.push(name);
      } else if (attack === "D") {
        destroyedPlanets.push(name);
      }
    }
  }

  let sortedPlanetsAttacked = attackedPlanets.sort((a, b) =>
    a.localeCompare(b)
  );
  let sortedPlanetsDestroyed = destroyedPlanets.sort((a, b) =>
    a.localeCompare(b)
  );
  console.log(`Attacked planets: ${sortedPlanetsAttacked.length}`);
  for (const el of sortedPlanetsAttacked) {
    console.log(`-> ${el}`);
  }

  console.log(`Destroyed planets: ${sortedPlanetsDestroyed.length}`);
  for (const el of sortedPlanetsDestroyed) {
    console.log(`-> ${el}`);
  }
}
starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
