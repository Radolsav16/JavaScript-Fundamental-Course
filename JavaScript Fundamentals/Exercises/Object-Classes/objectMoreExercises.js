class Laptop {
  constructor(info, quality) {
    this.info = info;
    this.isOn = false;
    this.quality = quality;
    this.price = 800 - this.info.age * 2 + this.quality * 0.5;
  }

  turnOn() {
    this.isOn = true;
    this.quality -= 1;
    this.price = 800 - this.info.age * 2 + this.quality * 0.5;
  }
  turnOff() {
    this.isOn = false;
    this.quality -= 1;
    this.price = 800 - this.info.age * 2 + this.quality * 0.5;
  }

  showInfo() {
    return JSON.stringify(this.info);
  }
}

let info = { producer: "Lenovo", age: 1, brand: "Legion" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.isOn);

function fightShedule(array) {
  const flightsSheduleWithId = [];
  const sectorArray = array.shift();
  const newChangesArray = array.shift();
  let flightStatus = array.shift().join("");
  const flightsShedule = [];
  for (const flights of sectorArray) {
    const flightsArray = flights.split(" ");
    const id = flightsArray.shift();
    let destination = "";
    if (flightsArray.length > 1) {
      destination = flightsArray.join(" ");
    } else {
      destination = flightsArray.join("");
    }

    flightsSheduleWithId.push({ destination, id, status: "Ready to fly" });
  }

  for (const flights of newChangesArray) {
    const idToDelete = flights.split(" ").shift();
    flightsSheduleWithId.forEach((obj) => {
      if (obj.id === idToDelete) {
        obj.status = "Cancelled";
      }
    });
  }

  if (flightStatus === "Ready to fly") {
    flightsSheduleWithId.forEach((obj) => {
      if (obj.status === "Ready to fly") {
        delete obj.id;
        console.log(
          `{ Destination: '${obj.destination}', Status: '${obj.status}' }`
        );
      }
    });
    flightStatus = "Ready to fly";
  } else {
    flightsSheduleWithId.forEach((obj) => {
      if (obj.status === "Cancelled") {
        delete obj.id;
        console.log(
          `{ Destination: '${obj.destination}', Status: '${obj.status}' }`
        );
      }
    });
    flightStatus = "Cancelled";
  }
}
fightShedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);

fightShedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);

/*

    Grade:[{name:Mark,avrageScore:50},{nameGosho}]

*/

function schoolRegister(array) {
  const grades = {};
  for (const info of array) {
    const infoArr = info.split(", ");
    const studentNameStr = infoArr[0];
    const gradeStr = infoArr[1];
    const avarageScoreStr = infoArr[2];

    const studentName = studentNameStr.split(": ").pop();
    let grade = Number(gradeStr.split(": ").pop());
    const avarageScore = Number(avarageScoreStr.split(": ").pop());
    grade++;
    if (avarageScore >= 3 && !grades.hasOwnProperty(grade)) {
      grades[grade] = [{ name: studentName, grade, score: avarageScore }];
    } else if (avarageScore >= 3 && grades.hasOwnProperty(grade)) {
      grades[grade].push({ name: studentName, grade, score: avarageScore });
    }
  }

  const entries = Object.entries(grades);
  entries.sort((a, b) => a[0] - b[0]);

  for (let arrays of entries) {
    const grade = arrays[0];
    console.log(`${grade} Grade`);
    const arr = arrays[1];
    let allStudent = [];
    let avarageScore = 0;
    let people = 0;
    for (let obj of arr) {
      allStudent.push(obj.name);
      avarageScore += obj.score;
      people++;
    }

    avarageScore = avarageScore / people;
    allStudent = allStudent.join(", ");

    console.log(`List of students: ${allStudent}`);
    console.log(
      `Average annual score from last year: ${avarageScore.toFixed(2)}`
    );
    console.log(" ");
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

function browserHistory(obj, stringArray) {
  for (let commandStr of stringArray) {
    const [command, site] = commandStr.split(" ");
    if (command === "Open") {
      obj["Open Tabs"].push(site);
      obj["Browser Logs"].push(commandStr);
    } else if (command === "Close") {
      if (obj["Open Tabs"].includes(site)) {
        let index = obj["Open Tabs"].indexOf(site);
        obj["Open Tabs"].splice(index, 1);
        obj["Recently Closed"].push(site);
        obj["Browser Logs"].push(commandStr);
      }
    } else if (commandStr === "Clear History and Cache") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
    }
  }

  console.log(`${obj["Browser Name"]}`);
  console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`);
}
// browserHistory(
//   {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": [
//       "Open YouTube",
//       "Open Yahoo",
//       "Open Google Translate",
//       "Close Yahoo",
//       "Open Gmail",
//       "Close Gmail",
//       "Open Facebook",
//     ],
//   },
//   ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);

function sequanceLL(input) {
    input = input
        .map(JSON.parse)
        .map(el => el.sort((a, b) => b - a))
        .map(JSON.stringify);
    [...new Set(input)]
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(el => console.log(`[${el.join(', ')}]`));

}

sequanceLL(["[7.14, 7.180, 7.339, 80.099]",

  "[7.339, 80.0990, 7.140000, 7.18]",
  
  "[7.339, 7.180, 7.14, 80.099]"])


