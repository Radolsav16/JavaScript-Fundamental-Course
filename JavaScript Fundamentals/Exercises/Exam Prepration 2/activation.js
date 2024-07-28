function solve(input) {
   let key = input.shift();
   const pattern = /\w+/g; 
   if(pattern.test(key)){
    let command = input.shift();
    while(command !== 'Generate'){
        if(command.includes("Contains")){
            let [commandInf,substring] = command.split(">>>");
            if(key.includes(substring)){
                console.log(`${key} contains ${substring}`)
            }else{
                console.log(`Substring not found!`);
            }

        }else if(command.includes("Flip")){
            let [commandInfo,upperOrLower,startIndex,endIndex] = command.split(">>>");
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let slicedPart = key.slice(startIndex,endIndex)
            let newPart = '';
            if(upperOrLower === 'Upper'){
                newPart = slicedPart.toUpperCase();
            }else{
                newPart = slicedPart.toLowerCase();
            }   
            key = key.replace(slicedPart,newPart);
            console.log(key);
        }else if(command.includes("Slice")){
            let [commandInfo,startIndex,endIndex] = command.split(">>>");
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let slicedPart = key.slice(startIndex,endIndex);
            key = key.replace(slicedPart,"");
            console.log(key);
        }

        command = input.shift();
    }
   }

   console.log(`Your activation key is: ${key}`);
   
}
solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);


