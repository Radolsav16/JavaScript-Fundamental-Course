function solve(input) {
  let n = Number(input.shift());
  const info = {};
  for (let i = 0; i < n; i++) {
    let lines = input.shift();
    let [plant, rarity] = lines.split("<->");
    if (plant in info) {
      info[plant] = { rarity, rating: 0, countRating: 0 };
    } else {
      info[plant] = { rarity, rating: 0, countRating: 0 };
    }
  }

  let command = input.shift();

  while (command !== "Exhibition") {
    if (command.includes("Rate")) {
      let commandArr = command.split("Rate: ");
      let needStr = commandArr.pop();
      let [plant, rating] = needStr.split(" - ");
      if (!info.hasOwnProperty(plant)) {
        console.log(`error`);
      } else {
        rating = Number(rating);
        info[plant].rating += rating;
        info[plant].countRating++;
      }
    } else if (command.includes("Update")) {
      let commandArr = command.split("Update: ");
      let needStr = commandArr.pop();
      let [plant, rarity] = needStr.split(" - ");
      if (info.hasOwnProperty(plant)) {
        info[plant].rarity = rarity;
      } else {
        console.log("error");
      }
    } else if (command.includes("Reset")) {
      let commandArr = command.split("Reset: ");
      let plant = commandArr.pop();
      if (plant in info) {
        info[plant].rating = 0;
        info[plant].countRating = 0;
      } else {
        console.log("error");
      }
    }

    command = input.shift();
  }

  console.log(`Plants for the exhibition:`);

  for (let keys in info) {
    let rating = Number(info[keys].rating);
    let count = Number(info[keys].countRating);
    let avarage = rating / count;
    if (isNaN(avarage)) {
      avarage = 0;
    }
    
    console.log(`- ${keys}; Rarity: ${info[keys].rarity}; Rating: ${avarage.toFixed(2)}`);
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
