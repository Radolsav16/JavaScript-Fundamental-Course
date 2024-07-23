function solve(input) {
  let str = input.shift();
  const pattern =/(#|\|)(?<item>[A-Za-z\s]+)\1(?<expiredDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let totalCalories = 0;
  let items = [];

  let matchedItems = str.matchAll(pattern);
  for (const matches of matchedItems) {
    const mainObj = matches.groups;
    items.push(mainObj);
    let { item, date, calories } = mainObj;
    totalCalories += Number(calories);
  }

  let days = 0;

  //Work 

//   while (totalCalories >= 2000) {
//     days++;
//     totalCalories -= 2000;
//   }
days = Math.floor(totalCalories / 2000) 

  console.log(`You have food to last you for: ${days} days!`);

  for (let obj of items) {
    console.log(
      `Item: ${obj.item}, Best before: ${obj.expiredDate}, Nutrition: ${obj.calories}`
    );
  }
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
