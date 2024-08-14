function solve(input){
    let people = Number(input.shift());
    let currLift = input.shift();
    let liftArray = currLift.split(" ").map(Number);


    function lisftCheck(array){
        let filterArray = array.filter((a)=> a < 4);

        if(filterArray.length > 0){
            return true;
        }else{
            return false;
        }
    }


    
    
    for(let i = 0; i < liftArray.length;i++){
        let wagon = liftArray[i];
        let isPeople = true;
        
        while(wagon !== 4){
            wagon++;
            liftArray[i] = wagon;
            people--;


            if(people <= 0 && lisftCheck(liftArray)){
                console.log(`The lift has empty spots!`);
                console.log(liftArray.join(" "));
                isPeople = false;
                break;
            }else if(people > 0 && !lisftCheck(liftArray)){
                console.log(`There isn't enough space! ${people} people in a queue!`);
                console.log(liftArray.join(" "));
                
            }else if(!lisftCheck(liftArray) && people <= 0){
                isPeople = false;
                console.log(liftArray.split(" "));
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