function phoneBook(array) {
  const obj = {};
  for (const info of array) {
    const [name, number] = info.split(" ");
    obj[name] = number;
  }

  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
function meetings(array) {
  const obj = {};
  for (const info of array) {
    const [day, name] = info.split(" ");
    if (obj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      obj[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

function addressBook(array) {
  const obj = {};
  for (let token of array) {
    const [name, adress] = token.split(":");
    obj[name] = adress;
  }

  const entries = Object.entries(obj);

  entries
    .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
    .forEach((arr) => console.log(`${arr[0]} -> ${arr[1]}`));
}
addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);

function storage(arr) {
  const obj = {};
  for (const token of arr) {
    let [product, quantity] = token.split(" ");
    quantity = Number(quantity);
    if (obj.hasOwnProperty(product)) {
      obj[product] += quantity;
    } else {
      obj[product] = quantity;
    }
  }

  for (const keys in obj) {
    console.log(`${keys} -> ${obj[keys]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);

function schoolGrade(array) {
  const obj = {};
  for (const info of array) {
    const tempArr = info.split(" ");
    const name = tempArr.shift();
    let sum = 0;
    let allGradesNumber = tempArr.length;
    for (let grades of tempArr) {
      grades = Number(grades);
      sum += grades;
    }

    let avarageScore = sum / allGradesNumber;
    if (obj.hasOwnProperty(name)) {
      const currentScore = obj[name];
      const newScore = (avarageScore + currentScore) / 2;
      obj[name] = newScore;
    } else {
      obj[name] = avarageScore;
    }
  }

  const entries = Object.entries(obj);
  entries
    .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
    .forEach((arr) => console.log(`${arr[0]}: ${arr[1].toFixed(2)}`));
}
schoolGrade(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);

function wordOccurency(array) {
  const obj = {};
  for (let words of array) {
    if (obj.hasOwnProperty(words)) {
      const newCount = obj[words] + 1;
      obj[words] = newCount;
    } else {
      obj[words] = 1;
    }
  }

  Object.entries(obj)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    .forEach((arr) => console.log(`${arr[0]} -> ${arr[1]} times`));
}
wordOccurency([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
