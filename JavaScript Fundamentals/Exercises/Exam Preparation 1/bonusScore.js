function bonusScore(input) {
  const students = Number(input.shift());
  const lectures = Number(input.shift());
  const bonus = Number(input.shift());

  let studentAtendes = 0;
  let maxBonus = 0;
  let highestBonus = 0;
  let highestAttend = 0;

  for (let attends of input) {
    attends = Number(attends);
    maxBonus = (attends / lectures) * (5 + bonus);

    if (maxBonus > highestBonus) {
      highestBonus = maxBonus;
    }

    if (attends > highestAttend) {
      highestAttend = attends;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);
  console.log(`The student has attended ${highestAttend} lectures.`);
}
bonusScore(["5", "25", "30", "12", "19", "24", "16", "20"]);
