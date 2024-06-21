function blackFlag(input) {
  const days = Number(input.shift());
  const piratePlunder = Number(input.shift());
  const expectedPlinder = Number(input.shift());
  let allPlunder = 0;

  for (let i = 1; i <= days; i++) {
    allPlunder += piratePlunder;
    if (i % 3 === 0) {
      allPlunder += piratePlunder * 0.5;
    }
    if (i % 5 === 0) {
      allPlunder -= allPlunder * 0.3;
    }
  }

  if (allPlunder >= expectedPlinder) {
    console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (allPlunder / expectedPlinder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["10", "20", "380"]);
