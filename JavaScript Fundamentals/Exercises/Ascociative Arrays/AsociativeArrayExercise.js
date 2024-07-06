function minerTask(array) {
  const obj = {};
  for (let i = 0; i < array.length; i += 2) {
    let commodies = array[i];
    let quantity = Number(array[i + 1]);

    obj.hasOwnProperty(commodies)
      ? (obj[commodies] += quantity)
      : (obj[commodies] = quantity);
  }

  Object.entries(obj).forEach((arr) => console.log(`${arr[0]} -> ${arr[1]}`));
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);

function wordTracker(array) {
  const specialWords = array.shift().split(" ");
  const obj = {};
  for (let words of specialWords) {
    obj[words] = 0;
  }

  for (let words of array) {
    if (words in obj) {
      obj[words] += 1;
    }
  }

  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .forEach((arr) => console.log(`${arr[0]} - ${arr[1]}`));
}
wordTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);

function companyUsers(array) {
  const obj = {};
  for (const info of array) {
    const [company, emplpeye] = info.split(" -> ");

    if (obj.hasOwnProperty(company)) {
      if (!obj[company].includes(emplpeye)) {
        obj[company].push(emplpeye);
      }
    } else {
      obj[company] = [emplpeye];
    }
  }
  Object.entries(obj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((arr) => {
      console.log(`${arr[0]}`);
      for (let employee of arr[1]) {
        console.log(`-- ${employee}`);
      }
    });
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

function picollo(array) {
  const parking = [];
  for (const info of array) {
    const [direction, carId] = info.split(", ");
    if (!parking.includes(carId) && direction === "IN") {
      parking.push(carId);
    }

    if (direction === "OUT" && parking.includes(carId)) {
      let index = parking.indexOf(carId);
      parking.splice(index, 1);
    }
  }

  if (parking.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    parking.sort((a, b) => a.localeCompare(b)).forEach((id) => console.log(id));
  }
}
picollo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);

function partyTime(array) {
  const guests = [];
  const guestVip = [];

  let i = 0;
  let command = array[i];
  const obj = {};

  while (command !== "PARTY") {
    let partcipant = command;
    let letterOrNum = Number(command[0]);
    if (typeof letterOrNum === "number" && !isNaN(letterOrNum)) {
      obj[partcipant] = "vip";
    } else {
      obj[partcipant] = "normal";
    }
    i++;
    command = array[i];
  }
  let guestThatNotGo = {};
  let keys = Object.keys(obj);
  for (let k = i + 1; k < array.length; k++) {
    let guestComing = array[k];
    if (keys.includes(guestComing)) {
      let index = keys.indexOf(guestComing);
      keys.splice(index, 1);
    }
  }
  for (let guest of keys) {
    let letterOrNum = Number(guest[0]);
    if (typeof letterOrNum === "number" && !isNaN(letterOrNum)) {
      guestThatNotGo[guest] = "vip";
    } else {
      guestThatNotGo[guest] = "normal";
    }
  }

  const numbers = Object.keys(guestThatNotGo).length;
  console.log(numbers);

  for (const keys in guestThatNotGo) {
    if (guestThatNotGo[keys] === "vip") {
      console.log(keys);
    }
  }

  for (const keys in guestThatNotGo) {
    if (guestThatNotGo[keys] === "normal") {
      console.log(keys);
    }
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

function cardGame(array) {
  for (const token of array) {
    const [name, cards] = token.split(": ");
    const cardsArray = cards.split(", ");
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",

  "Tomas: 3H, 10S, JC, KD, 5S, 10S",

  "Andrea: QH, QC, QS, QD",

  "Tomas: 6H, 7S, KC, KD, 5S, 10C",

  "Andrea: QH, QC, JS, JD, JC",

  "Peter: JD, JD, JD, JD, JD, JD",
]);

function oddOcccuernce(str) {
  const occurrences = new Map();
  const words = str.split(" ").map((el) => el.toLowerCase());

  for (const word of words) {
    if (occurrences.has(word)) {
      const newValue = occurrences.get(word) + 1;
      occurrences.set(word, newValue);
    } else {
      occurrences.set(word, 1);
    }
  }

  const entries = occurrences.entries();
  const oddOcccuernceArr = [];

  for (let [name, count] of entries) {
    if (count % 2 !== 0) {
      oddOcccuernceArr.push(name);
    }
  }

  console.log(oddOcccuernceArr.join(" "));
}
oddOcccuernce("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

function legendaryFarming(str) {
  const legenadaries = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };
  const keyMaterials = { shards: 0, fragments: 0, motes: 0 };
  const junkMaterials = {};

  const infoArray = str.split(" ");

  for (let i = 0; i < infoArray.length; i += 2) {
    let quantity = Number(infoArray[i]);
    let material = infoArray[i + 1].toLowerCase();

    if (keyMaterials.hasOwnProperty(material)) {
      keyMaterials[material] += quantity;
      if (keyMaterials[material] >= 250) {
        keyMaterials[material] -= 250;
        const legendary = legenadaries[material];
        console.log(`${legendary} obtained!`);
        break;
      }
    } else if (junkMaterials.hasOwnProperty(material)) {
      junkMaterials[material] += quantity;
    } else {
      junkMaterials[material] = quantity;
    }
  }

  const keyMaterialEntries = Object.entries(keyMaterials);
  keyMaterialEntries
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach((arr) => console.log(`${arr[0]}: ${arr[1]}`));

  const junkMaterialsArr = Object.entries(junkMaterials);
  junkMaterialsArr
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((arr) => console.log(`${arr[0]}: ${arr[1]}`));
}
legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");

function arenaTier(array) {
  let i = 0;
  let command = array[i];

  const gladiators = {};

  while (command !== "Ave Cesar") {
    if (command.includes("->")) {
      let [name, techique, skill] = array[i].split(" -> ");
      skill = Number(skill);
      if (!gladiators.hasOwnProperty(name)) {
        gladiators[name] = { totalSkill: skill, techique: [[techique, skill]] };
      } else if (gladiators.hasOwnProperty(name)) {
        if (skill >= gladiators[name].techique[0][1]) {
          gladiators[name].totalSkill += skill;
          gladiators[name].techique.unshift([techique, skill]);
        }
      }
    } else if (command.includes("vs")) {
      let [gladiator1, gladiator2] = command.split(" vs ");
      let allTechqnicesGladiator1 = [];
      let allTechqnicesGladiator2 = [];

      if (gladiators[gladiator1] && gladiators[gladiator2]) {
        for (let tech of gladiators[gladiator1].techique) {
          allTechqnicesGladiator1.push(tech[0]);
        }

        for (let tech of gladiators[gladiator2].techique) {
          allTechqnicesGladiator2.push(tech[0]);
        }

        let isBattleCanHappen = false;

        for (let i = 0; i < allTechqnicesGladiator1.length; i++) {
          const el1 = allTechqnicesGladiator1[i];
          for (let k = 0; k < allTechqnicesGladiator2.length; k++) {
            let el2 = allTechqnicesGladiator2[k];
            if (el1 === el2) {
              isBattleCanHappen = true;
              break;
            }
          }
          if (isBattleCanHappen === true) {
            break;
          }
        }
        if (isBattleCanHappen) {
          let winner = undefined;
          if (
            gladiators[gladiator1].totalSkill >
            gladiators[gladiator2].totalSkill
          ) {
            winner = gladiators[gladiator1];
            delete gladiators[gladiator2];
          } else if (
            gladiators[gladiator2].totalSkill >
            gladiators[gladiator1].totalSkill
          ) {
            winner = gladiators[gladiator2];
            delete gladiators[gladiator1];
          }
        }
      }
    }
    i++;
    command = array[i];
  }

  if (command === "Ave Cesar") {
    Object.entries(gladiators)
      .sort(
        (a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0])
      )
      .forEach((arr) => {
        console.log(`${arr[0]}: ${arr[1].totalSkill} skill`);
        for (let tech of arr[1].techique) {
          console.log(`- ${tech[0]} <!> ${tech[1]}`);
        }
      });
  }
}
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);

function travelTime(array) {
  const travelAgency = {};
  for (const info of array) {
    let [countryName, city, travelCost] = info.split(" > ");
    travelCost = Number(travelCost);

    if (travelAgency.hasOwnProperty(countryName)) {
      if (travelAgency[countryName].hasOwnProperty(city)) {
        if (travelCost < travelAgency[countryName][city]) {
          travelAgency[countryName][city] = travelCost;
        }
      } else {
        travelAgency[countryName][city] = travelCost;
      }
    } else {
      travelAgency[countryName] = { [city]: travelCost };
    }
  }

  let entries = Object.entries(travelAgency).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [country, town] of entries) {
    const townEntries = Object.entries(town);
    townEntries.sort((a, b) => a[1] - b[1]);

    let result = `${country} -> `;

    for (let towns of townEntries) {
      result += `${towns[0]} -> ${towns[1]} `;
    }

    console.log(result);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",

  "Bulgaria > Sopot > 800",

  "France > Paris > 2000",

  "Albania > Tirana > 1000",

  "Bulgaria > Sofia > 200",
]);
