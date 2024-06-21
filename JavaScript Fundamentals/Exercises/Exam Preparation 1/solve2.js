function solve(array) {
  array = array.map(Number).map((el) => el * 1000);
  let [food, hay, cover, weight] = array;
  const dailyConsumation = 300;
  const coverFood = weight / 3;

  for (let i = 1; i <= 30; i++) {
    food -= dailyConsumation;
    if (i % 2 === 0) {
      hay -= food * 0.05;
    }

    if (i % 3 === 0) {
      cover -= coverFood;
    }

    if (food < 0 || hay < 0 || cover < 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
  );
}
solve(["10", "5", "5.2", "1"]);
