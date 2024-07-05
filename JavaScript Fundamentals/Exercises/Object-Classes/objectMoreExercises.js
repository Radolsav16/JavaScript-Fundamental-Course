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

function schoolRegister(array) {
  const students = [];
  for (const schoolInfo of array) {
    const arrayInfo = schoolInfo.split(",");
    const studentNameStr = arrayInfo.shift();
    const studentGradeStr = arrayInfo.shift();
    const studentScoreStr = arrayInfo.shift();
    const name = studentNameStr.split(": ").pop();
    const grade = Number(studentGradeStr.split(": ").pop());
    const score = Number(studentScoreStr.split(": ").pop());

    students.push({ name, grade, score });
  }
  // delete students with lower grade
  students.forEach((student, index) => {
    if (student.score < 3) {
      students.splice(index, 1);
    }
  });

  students.forEach((student,index) => {
    const listOfEqualGrade = [];
    console.log(`${student.grade++} Grade`);
    for(let i = index+1; i < students.length;i++){
      if(students[i].grade === student.grade){
        listOfEqualGrade.push(students[i].name);
      }
  }
    console.log(`List of students: ${listOfEqualGrade.join(",")}`);
    console.log(`Average annual score from last year: ${student.score.toFixed(2)}`);
    
  });
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
