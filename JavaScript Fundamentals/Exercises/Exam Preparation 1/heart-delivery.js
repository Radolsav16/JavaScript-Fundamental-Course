function heartDelivery(input) {
  const evenInts = input.shift().split("@").map(Number);
  let i = 0;
  let command = input[i];
  let currIndex = 0;

  while (command !== "Love!") {
    let tokenArr = command.split(" ");
    let singleCommand = tokenArr.shift();
    let length = Number(tokenArr.shift());
    let indxWillArive = currIndex + length;
    if (indxWillArive > evenInts.length - 1) {
      indxWillArive = 0;
      if (evenInts[indxWillArive] === 0) {
        console.log(`Place ${indxWillArive} already had Valentine's day.`);
      } else {
        evenInts[indxWillArive] -= 2;
        if (evenInts[indxWillArive] <= 0) {
          evenInts[indxWillArive] = 0;
          console.log(`Place ${indxWillArive} has Valentine's day.`);
        }
      }
      currIndex = indxWillArive;
    } else {
      if (evenInts[indxWillArive] === 0) {
        console.log(`Place ${indxWillArive} already had Valentine's day.`);
      }
      evenInts[indxWillArive] -= 2;
      if (evenInts[indxWillArive] <= 0) {
        evenInts[indxWillArive] = 0;
        console.log(`Place ${indxWillArive} has Valentine's day.`);
      }
      currIndex = indxWillArive;
    }
    i++;
    command = input[i];
  }

  console.log(`Cupid's last position was ${currIndex}.`);
  let isSUccefullMission = true;
  let count = 0;
  for (let i = 0; i < evenInts.length; i++) {
    let nums = evenInts[i];
    if (nums !== 0) {
      isSUccefullMission = false;
      count++;
    }
  }

  if (isSUccefullMission) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${count} places.`);
  }
}

// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
