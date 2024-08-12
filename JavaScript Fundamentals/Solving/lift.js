function solve(input){
    let people = Number(input.shift());
    let currLift = input.shift();
    let liftArray = currLift.split(" ").map(Number);
    
    for(let i = 0; i < liftArray.length;i++){
        let wagon = liftArray[i];
        let isPeople = true;
        
        while(wagon !== 4){
            wagon++;
            liftArray[i] = wagon;
            people--;
            if(people <= 0){ 
                   isPeople = false;
                   break; 
            }
        }
        if(!isPeople){
            break;
        }
        
    }
    console.log(liftArray);
    
    
    
}
solve([
    "15",
    "0 0 0 0 0"
   ]);