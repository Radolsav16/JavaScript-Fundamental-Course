function treasureHunt(mainArr){
    const initailLootArr = mainArr.shift().split("|");
    let i = 0;
    let commands = mainArr[i];
    

    while(commands !== 'Yohoho!'){
        
        let commandArr = commands.split(" ");
        let command = commandArr.shift();

        if(command === "Loot"){
            for(let items of commandArr){
                if(!initailLootArr.includes(items)){
                    initailLootArr.unshift(items);
                }
            }

        }else if(command === "Drop"){
            const index = Number(commandArr.shift());
            if(initailLootArr[index]){
                let el = initailLootArr.splice(index,1).join("");
                initailLootArr.push(el);    
            }
        }else if(command === "Steal"){
            const count = Number(commandArr.shift());
            const stealItems = initailLootArr.slice(-count);
            for(let items of stealItems){
                let index = initailLootArr.indexOf(items);
                initailLootArr.splice(index,1);
            }
            console.log(stealItems.join(", "));
        }

        i++;
        commands = mainArr[i];
    }

    if(initailLootArr.length === 0){
        console.log(`Failed treasure hunt.`);
    }else{
        findAvarageTreasureGain(initailLootArr);
    }

    

   


    function findAvarageTreasureGain(initailLootArr){
        let allLenght = 0;

        for(let j = 0; j < initailLootArr.length;j++){
            let item = initailLootArr[j];
            let lengthOfItem = item.length;
            allLenght += lengthOfItem
        }
        const avarageTreasureGain = allLenght / initailLootArr.length;

        console.log(`Average treasure gain: ${avarageTreasureGain.toFixed(2)} pirate credits.`);
    }

    
}
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

//     "Loot Wood Gold Coins",
    
//     "Loot Silver Pistol",
    
//     "Drop 3",
    
//     "Steal 3",
    
//     "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);