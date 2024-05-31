function sumFirstAndLast(arr){
    let firstEl = Number(arr[0]);
    let lastEl = Number(arr[arr.length - 1]);
    let sum = firstEl + lastEl;
    console.log(sum);
}
sumFirstAndLast([20, 30, 40]);

function dayOftheWeek(day){
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if(day>=1 && day <= 7){
        console.log(days[day]);
    }else{
        console.log("Invalid!");
    }

}
dayOftheWeek();

function reverseArray(n,arr){
    let newArr = [];
    for(let i = 0; i < n ;i++){
        newArr.push(arr[i]);
    }
    console.log(newArr.reverse().join(" "));

}
reverseArray(3, [10, 20, 30, 40, 50]);

function reverseInPlace(arr){

    for(let i = 0; i < Math.floor(arr.length / 2);i++){
        let firstEl = arr[i];
        let lastEl = arr[arr.length - 1 - i];
        arr[i] = lastEl;
        arr[arr.length - 1 - i] = firstEl;

    }

    console.log(arr.join(""));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);


function sumEvenNumsInArr(arr){
    let sum = 0;

    arr = arr
    .map(Number)
    .filter((nums)=>nums % 2 === 0)
    .forEach((nums)=>sum+=nums);

    console.log(sum);
}
sumEvenNumsInArr(['1','2','3','4','5','6']);

function evenAndOddSubtraction(arr){
    let sumOfOdds = 0;
    let sumOfEven = 0;

    for (const nums of arr) {
        if(nums % 2 === 0){
            sumOfEven+=nums;
        }else{
            sumOfOdds+=nums;
        }
    }
}
evenAndOddSubtraction([1,2,3,4,5,6]);

function areIndentical(arr1,arr2){
    let sum = 0;
    for(let i = 0; i < arr1.length ;i++){
        if(arr1[i] !== arr2[i]){
            console.log("Not identical at",i);
            return;
        }
        sum+=Number(arr1[i]);
    }
    console.log(sum);
}
areIndentical(['1','2','3','4','5'],

['1','2','4','4','5'])

function solve(arr){

    if(arr.length === 1){
        console.log(arr[0]);
        return;
    }

    while (arr.length > 1){
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
           
            newArr[i] = arr[i] + arr[i + 1];
            
        }
        arr = newArr;
    }

    console.log(arr[0]);


}


solve([2,10,3]);

const numsToZero = (number) => {
    if(number === 0){
        console.log("Reached base");
    }else{
        console.log(number);
        numsToZero(number - 1);
    }


}
numsToZero(10)