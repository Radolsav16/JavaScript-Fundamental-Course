function solve(input){
    let people = Number(input.shift());
    let currLift = input.shift();
    let liftArray = currLift.split(" ").map(Number);


    function findFreeSpace(array){
        let istrue = array.find((a)=> a < 4 );
        return istrue;
    }
    
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
            if(i === liftArray.length - 1 && people > 0){
                console.log(liftArray.split(" "));
            }else if(liftArray[i] ===  4 && people > 0){
                console.log(`There isn't enough space! ${people} people in a queue!`);
                
            }else if(findFreeSpace(liftArray) === true){
                console.log(`The lift has empty spots!`);
                
            }
        }
        if(!isPeople){
            break;
        }
        
    }
    
    
    
    
}
solve([
    "15",
    "0 0 0 0 0"
   ]);