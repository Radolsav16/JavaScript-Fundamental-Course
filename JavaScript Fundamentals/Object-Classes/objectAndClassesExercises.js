function employess(array) {
  for (const names of array) {
    const obj = { name: names, number: names.length };
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
  }
}
employess([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
function towns(array) {
  for (const town of array) {
    const townArr = town.split(" | ");
    let [city, latitude, longtitude] = townArr;
    latitude = Number(latitude).toFixed(2).toString();
    longtitude = Number(longtitude).toFixed(2).toString();
    const obj = { town: city, latitude: latitude, longitude: longtitude };
    console.log(obj);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

function storeProvision(currStock, productDelivery) {
  for (let i = 0; i < currStock.length; i += 2) {
    const product = currStock[i];
    currStock[i + 1] = Number(currStock[i + 1]);
    const quantity = currStock[i + 1];
  }
  for (let i = 0; i < productDelivery.length; i += 2) {
    const product = productDelivery[i];
    productDelivery[i + 1] = Number(productDelivery[i + 1]);
    const quantity = productDelivery[i + 1];
    if (currStock.includes(product)) {
      let index = currStock.indexOf(product);
      currStock[index + 1] += quantity;
    } else {
      currStock.push(product, quantity);
    }
  }

  for (let i = 0; i < currStock.length; i += 2) {
    const product = currStock[i];
    const quantity = currStock[i + 1];
    const obj = { name: product, quantity };
    console.log(`${obj.name} -> ${obj.quantity}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

function movies(input) {
  const moviesArr = [];
  for (const items of input) {
    const itemsArr = items.split(" ");
    if (itemsArr.includes("addMovie")) {
      const name = itemsArr.join(" ").split("addMovie ").pop();
      const obj = {};
      obj.name = name;
      moviesArr.push(obj);
    } else if (itemsArr.includes("directedBy")) {
      const arr = itemsArr.join(" ").split(" directedBy ");
      const name = arr.shift();
      const director = arr.pop();
      moviesArr.forEach((movie) => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    } else if (itemsArr.includes("onDate")) {
      const arr = itemsArr.join(" ").split(" onDate ");
      const name = arr.shift();
      const date = arr.pop();
      moviesArr.forEach((movie) => {
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  }

  moviesArr.forEach((movies) => {
    if (movies.name && movies.date && movies.director) {
      const moviesJSON = JSON.stringify(movies);
      console.log(moviesJSON);
    }
  });
}
movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception dire/ctedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);

function inventory(arrays) {
  const heroes = [];
  for (const items of arrays) {
    const itemsArr = items.split(" / ");
    const heroName = itemsArr.shift();
    const heroLevel = Number(itemsArr.shift());
    const itemsString = itemsArr.join("");
    const obj = { hero: heroName, level: heroLevel, items: itemsString };
    heroes.push(obj);
  }

  const sortedHeroesArr = heroes.sort((a, b) => a.level - b.level);

  sortedHeroesArr.forEach((hero) => {
    console.log(`Hero: ${hero.hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);

function makeDictionary(arrayWithJSONs) {
  let terms = [];
  for (const obj of arrayWithJSONs) {
    const normalObj = JSON.parse(obj);
    const keys = Object.keys(normalObj);
    const values = Object.values(normalObj);
    const term = keys.pop();
    const definition = values.pop();
    const newObj = { term, definition };
    terms.push(newObj);
  }

  const sortedByTerms = terms.sort((a, b) => a.term.localeCompare(b.term));

  sortedByTerms.forEach((obj) => {
    console.log(`Term: ${obj.term} => Definition: ${obj.definition}`);
  });
}
makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',

  '{"Bus":"lalallalaal"}',
]);

function vehiclefunc() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = fuel;
      this.quality = parts.engine * parts.power;
      this.parts.quality = this.quality;
    }

    drive(fuelloss) {
      this.fuel -= fuelloss;
    }
  }

  let parts = { engine: 9, power: 500 };

  let vehicle = new Vehicle("l", "k", parts, 840);

  vehicle.drive(20);

  console.log(vehicle.fuel);
}
vehiclefunc();

class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = undefined;
    this.totalCost = undefined;
    this.products = [];
  }

  addProduct(product) {
    this.storage = product;
    this.products.push(this.storage);
    this.capacity -= product.quantity;
  }

  getProducts() {
    this.products.forEach((obj) => obj);
  }

  sumTotalCost() {
    let sum = 0;
    this.products.forEach((obj) => (sum += obj.price * obj.quantity));
    this.totalCost = sum;
  }
}

let productOne = {
  name: "Cucamber",

  price: 1.5,
  quantity: 15,
};

let productTwo = {
  name: "Tomato",

  price: 0.9,
  quantity: 25,
};

let productThree = {
  name: "Bread",

  price: 1.1,
  quantity: 8,
};

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);

// console.log(storage.totalCost);

function catalogue(input) {
  const list = [];
  for (let products of input) {
    const productArr = products.split(" : ");
    const name = productArr.shift();
    const price = Number(productArr.pop());
    const obj = { name, price };
    list.push(obj);
  }

  const sortedList = list.sort((a, b) => a.name.localeCompare(b.name));
  let currLetter = "";
  sortedList.forEach((obj) => {
    let firstLetter = obj.name[0];

    if (currLetter !== firstLetter) {
      currLetter = firstLetter;
      console.log(currLetter);
    }
    console.log(`  ${obj.name}: ${obj.price}`);
  });
}
catalogue([
  "Appricot : 20.4",

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  "Anti-Bug Spray : 15",

  "T-Shirt : 10",
]);
