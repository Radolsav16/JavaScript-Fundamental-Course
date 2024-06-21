function shootForWin(input) {
  const sequanceIntegers = input.shift().split(" ").map(Number);
  let i = 0;
  let indices = input[i];
  let counts = 0;

  while (indices !== "End") {
    let index = Number(indices);
    if (sequanceIntegers[index]) {
      let element = sequanceIntegers[index];
      sequanceIntegers[index] = -1;
      counts++;
      if (index === sequanceIntegers.length - 1) {
        for (let j = index; j >= 0; j--) {
          let nums = sequanceIntegers[j];
          if (nums !== -1) {
            if (nums > element) {
              sequanceIntegers[j] -= element;
            } else {
              sequanceIntegers[j] += element;
            }
          }
        }
      } else {
        for (let i = 0; i < sequanceIntegers.length; i++) {
          let nums = sequanceIntegers[i];
          if (nums !== -1) {
            if (nums > element) {
              sequanceIntegers[i] -= element;
            } else {
              sequanceIntegers[i] += element;
            }
          }
        }
      }
    }
    i++;
    indices = input[i];
  }
  console.log(`Shot targets: ${counts} -> ${sequanceIntegers.join(" ")}`);
}
shootForWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
// shootForWin(["30 30 12 60 54 66",
//     "5",
//     "2",
//     "4",
//     "0",
//     "End"]);
