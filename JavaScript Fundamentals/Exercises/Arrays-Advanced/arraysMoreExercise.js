function equalNeigbors(arr) {
  for (let i = 0; i < arr.length; i++) {
    let array = arr[i];
  }
}
equalNeigbors([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);

function bunnyKill(mainArr) {
  let cordinates = mainArr.pop();
  console.log(cordinates);
}
bunnyKill([
  "5 10 15 20",

  "10 10 10 10",

  "10 15 10 10",

  "10 10 10 10",

  "2,2 0,1",
]);

function airPollution(mapCordinates, array) {
  for (let tokens of array) {
    let tokenArr = tokens.split(" ");
    let [force, index] = tokenArr;

    if (force === "breeze") {
      let cordinatesArr = mapCordinates[index].split(" ").map(Number);
      let newCordinates = cordinatesArr
        .map((el) => el - 15)
        .map(String)
        .join(" ");
      mapCordinates[Number(index)] = newCordinates;
    } else if (force === "gale") {
      let arrays = [];
      for (let i = 0; i < mapCordinates.length; i++) {
        let arrays = mapCordinates[i].split(" ").map(Number);
        for (let j = 0; j < arrays.length; j++) {
          if (j === Number(index)) {
            arrays[j] = arrays[j] - 20;
            break;
          }
        }
        mapCordinates[i] = arrays.map(String).join(" ");
      }
    } else if (force === "smog") {
      for (let i = 0; i < mapCordinates.length; i++) {
        let arrays = mapCordinates[i].split(" ").map(Number);
        for (let j = 0; j < arrays.length; j++) {
          let element = arrays[j];
          arrays[j] = element + 25;
        }
        arrays = arrays.map(String).join(" ");
        mapCordinates[i] = arrays;
      }
    }
  }

  const findPollutedAreas = (arr) => {
    for (let str of arr) {
      let numberedArr = str.split(" ").map(Number);
      for (let i = 0; i < numberedArr.length; i++) {
        
      }
    }
  };
}
airPollution(
  [
    "5 7 72 14 4",

    "41 35 37 27 33",

    "23 16 27 42 12",

    "2 20 28 39 14",

    "16 34 31 10 24",
  ],

  ["smog 25"]
);
