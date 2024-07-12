function convertDecimalToBinary(decimaNum,binaryNum){
    
    let arr = [];
    while(decimaNum > 0 ) {
        arr.push(String(Math.floor(decimaNum % 2)));
        decimaNum = Math.floor(decimaNum / 2);
    }


   let count = 0;
   
   arr.map(Number).forEach((el)=>{
    if(el === binaryNum){
        count++;
    }
   })

   console.log(count);
}
convertDecimalToBinary(20,0);