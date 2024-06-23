function experienceGaining(input) {
  const amountOfExperiance = Number(input.shift());
  const battles = Number(input.shift());
  let totalGain = 0;
  let battleCount = 1;
  let isGather = false;

  for (let i = 0; i < input.length; i++) {
    let gainExperince = Number(input[i]);
    if (battleCount % 3 === 0) {
      gainExperince += gainExperince * 0.15;
    }

    if (battleCount % 5 === 0) {
      gainExperince -= gainExperince * 0.1;
    }

    totalGain += gainExperince;

    if (totalGain >= amountOfExperiance) {
      isGather = true;
      console.log(
        `Player successfully collected his needed experience for ${battleCount} battles.`
      );
      return;
    }
    battleCount++;
  }

  if (!isGather) {
    let neededExperience = amountOfExperiance - totalGain;
    console.log(
      `Player was not able to collect the needed experience, ${neededExperience.toFixed(
        2
      )} more needed.`
    );
  }
}
experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
// experienceGaining([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20])
