function formatGrade(grade){
    if(grade < 3.00){
        console.log(`Fail (2)`);
    }else if(grade >= 3.00 && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`)
    }else if(grade >= 3.50 && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    }else if(grade >= 4.50 && grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
    }else{
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
formatGrade(2);

function mathPower(num,power){
    let result = num **power;
    console.log(result);

}
mathPower(2,8);

function repeatedStrings(str,repatCount){
    let output = '';
    for(let i = 0;i<repatCount;i++){
        output += str;
    }

    console.log(output);
}

repeatedStrings('abc',3);

function orders(product,quntity){
    let price = 0;

    switch(product){
        case "coffee":price = 1.50;break;
        case "water":price = 1.00;break;
        case "coke":price = 1.40;break;
        case "snacks":price = 2.00;break;
    }

    let total = price * quntity;
    console.log(total.toFixed(2));
}


orders("coffee",4);


function calculator(num1,num2,operator){
    num1 = Number(num1);
    num2 = Number(num2);
    const multiply = (num1,num2)=>num1*num2;
    const divide = (num1,num2)=>num1/num2;
    const add = (num1,num2)=>num1 + num2;
    const subtract = (num1,num2)=>num1 - num2;

    switch(operator){
       case "multiply":console.log(multiply(num1,num2));break;
       case "divide":console.log(divide(num1,num2));break;
       case "add":console.log(add(num1,num2));break;
       case "subtract": console.log(subtract(num1,num2));break;
    }

}
console.log(calculator(5,

    5,
    
    'multiply'))

function signCheck(numOne,numTwo,numThree){
    let arr = [numOne,numTwo,numThree];
    let countNegative = 0;
    for(let i = 0;i<arr.length;i++){
        let num = arr[i];
        if(num < 0){
            countNegative++;
        }
        if(num === 0){
            console.log('Positive');
            return;
        }
    }

    if(countNegative === 0){
        console.log("Postive");
    }else if(countNegative === 1){
        console.log("Negative");
    }else if(countNegative === 2){
        console.log("Positive");
    }else if(countNegative === 3){
        console.log("Negative");
    }
    
}   
signCheck(); 