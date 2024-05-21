
function multiply(num){

    let result = num * 2;

    console.log(result);

}

multiply();

function student(name,age,grade){

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);

}

student();

function excellentGrade(grade){
    if(grade >= 5.50){
        console.log('Excellent');
    }else{
        console.log("Not excellent");
    }
}
excellentGrade();


function foreighLanguage(countryName){

    if(countryName === 'USA' || countryName === 'England'){
        console.log('English');
    }else if(countryName === 'Spain' || countryName === 'Argentina' || countryName === 'Mexico'){
        console.log('Spanish');
    }else{
        console.log('unknown');
    }
}
foreighLanguage();

function monthPrinter(int){

    if(int === 1){
        console.log("January");
    }else if(int === 2){
        console.log("February");
    }else if(int === 3){
        console.log("March");
    }else if(int === 4){
        console.log("April");
    }else if(int === 5){
        console.log("May");
    }else if(int === 6){
        console.log("June");
    }else if(int === 7){
        console.log("July");
    }else if(int === 8){
        console.log("August");
    }else if(int === 9){
        console.log("September");
    }else if(int === 10){
        console.log("October");
    }else if(int === 11){
        console.log("November");
    }else if(int === 12){
        console.log("December");
    }else{
        console.log("Error!");
    }

}
monthPrinter();


function theatre(day,age){

    let priceOfTicket = 0;
    let flag = true;

    if(day === 'Weekday'){
        
        if( age >= 0 && age <= 18){
            priceOfTicket = 12;
        }else if(age > 18 && age <= 64){
            priceOfTicket = 18;
        }else if(age > 64 && age <= 122){
            priceOfTicket = 12;
        }else{
            flag = false;
        }

    }else if(day === 'Weekend'){

        if( age >= 0 && age <= 18){
            priceOfTicket = 15;
        }else if(age > 18 && age <= 64){
            priceOfTicket = 20;
        }else if(age > 64 && age <= 122){
            priceOfTicket = 15;
        }else{
            flag = false;
        }

    }else if(day === 'Holiday'){

        if( age >= 0 && age <= 18){
            priceOfTicket = 5;
        }else if(age > 18 && age <= 64){
            priceOfTicket = 12;
        }else if(age > 64 && age <= 122){
            priceOfTicket = 10;
        }else{
            flag = false;
        }

    }

    if(flag){
        console.log(`${priceOfTicket}$`);
    }else{
        console.log("Error!");
    }
}
theatre();



function solve(n){
   let count = 0;
   let sum = 0;
   for(let i = 1;i<=100;i++){
        if(count === n){
            break;
        }else{
            if(i % 2 !== 0){
                count++;
                sum+=i;
                console.log(i);
            }
        }
   }
    
   console.log(`Sum: ${sum}`);

}
solve(5);

function solve(m,n){
    for(let i = m;i>=n;i--){
        console.log(i);
    }
}


let createCounter = function(n) {
    
    return function() {
        return n++;
    };
   
};

const counter = createCounter(10);

console.log(counter());
counter();
counter();
console.log(counter());


const  expect = function(val) {
    let obj = {
       toBe(val1){
            if(val === val1){
                return true;
            }else{
                return "Not Equal";
            }
        },
        notToBe(val1){
            if(val1 !== val){
                return true;
            }else{
                return "Equal"
            }
        }
    };

    

    return obj;
};

console.log(expect(12).notToBe());