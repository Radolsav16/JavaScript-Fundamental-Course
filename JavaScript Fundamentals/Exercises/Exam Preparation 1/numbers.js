function numbers(str) {
  // Write a program to read a sequence of integers and find and print
  // the top 5 numbers greater than the average value in the sequence, sorted in descending order.
  const arrayOfNums = str.split(" ").map(Number);

  const sum = arrayOfNums.reduce((acc, curr) => acc + curr);
  const avarage = sum / arrayOfNums.length;
  let  finalArray = arrayOfNums
    .filter((el) => el > avarage)
    .sort((a, b) => b - a);

  if(finalArray.length === 0){
    console.log('No');
    return;
  }else if(finalArray.length > 5){
    finalArray = finalArray.slice(0,5);
  }

  console.log(finalArray.join(" "));
}
numbers('-1 -2 -3 -4 -5 -6');
