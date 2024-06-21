function theLift(mainArr) {
  //ery wagon should have a maximum of 4 people on it.
  //If a wagon is full, you should direct the people to the next one with space available.
  const people = Number(mainArr.shift());
  const liftStr = mainArr.shift();
  const lift = liftStr.split(" ").map(Number);
  let sum = 0;
  const potentialCapacityOfPeople = lift.length * 4;
  const fullnessLIft = [];
  let peopleInVagons = 0;

  let isFreeSpacesAvailble = false;

  for (let i = 0; i < lift.length; i++) {
    if (potentialCapacityOfPeople < people) {
      for (let k = 0; k < lift.length; k++) {
        let item = lift[k];
        if (item !== 0) {
          peopleInVagons += item;
        }
      }
      console.log(
        `There isn't enough space! ${
          people - potentialCapacityOfPeople + peopleInVagons
        } people in a queue!`
      );

      ///print
      for (let i = 0; i < lift.length; i++) {
        fullnessLIft.push(4);
      }
      console.log(`${fullnessLIft.join(" ")}`);
      return;
    }
    while (lift[i] < 4 && sum < people) {
      lift[i]++;
      sum++;
    }
  }

  for (let j = 0; j < lift.length; j++) {
    let items = lift[j];
    if (items !== 4) {
      isFreeSpacesAvailble = true;
    }
  }

  if (isFreeSpacesAvailble) {
    console.log(`The lift has empty spots!`);
    console.log(lift.join(" "));
  }
}
theLift(["15", "0 0 0 0 0"]);
