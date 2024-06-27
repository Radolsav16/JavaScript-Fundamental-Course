function personInfo(firstName, lastName, age) {
  const person = {
    firstName,
    lastName,
    age,
  };

  return person;
}
personInfo(
  "Peter",

  "Pan",

  "20"
);

function city(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
city({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});
function convertToObject(string) {
  const obj = JSON.parse(string);
  const keys = Object.keys(obj);

  for (const key of keys) {
    console.log(`${key}: ${obj[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

function convertJSON(firstName, lastName, hairColor) {
  const obj = { name: firstName, lastName, hairColor };
  console.log(JSON.stringify(obj));
}
convertJSON(
  "George",
  "Jones",

  "Brown"
);

function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow = () => {
      return `${this.name}, age ${this.age} says Meow`;
    };
  }

  for (const items of array) {
    const arrayOfItems = items.split(" ");
    const [name, age] = arrayOfItems;
    const object = new Cat(name, age);
    console.log(object.meow());
  }
}
cats(["Mellow 2", "Tom 5"]);

function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  const num = Number(array.shift());
  const typeListAll = array.pop();
  const songs = [];
  for (let i = 0; i < num; i++) {
    const songData = array[i];
    const songDataArray = songData.split("_");
    const [typeList, name, time] = songDataArray;
    const song = new Song(typeList, name, time);
    songs.push(song);
  }
  if (typeListAll === "all") {
    songs.forEach((el) => console.log(el.name));
  } else {
    const filteredArr = songs
      .filter((el) => el.typeList === typeListAll)
      .forEach((el) => console.log(el.name));
  }
}
songs([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);





