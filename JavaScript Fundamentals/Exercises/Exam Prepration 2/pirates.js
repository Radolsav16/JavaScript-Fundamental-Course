function solve(input){
let command = input.shift();
const cities = {};

while(command !== 'Sail'){
    let [city,population,gold] = command.split("||");
    population = Number(population);
    gold = Number(gold);
    if(cities[city]){
        cities[city].population += population;
        cities[city].gold += gold;
    }else{
        cities[city] = {population,gold};
    }
    command = input.shift();
}

while(command !== 'End'){
    if(command.includes("Plunder")){
        let [info,town,people,gold] = command.split("=>");
        people = Number(people);
        gold = Number(gold);
        cities[town].population -= people;
        cities[town].gold -= gold;
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        if(cities[town].population === 0 || cities[town].gold === 0){
            delete cities[town];
            console.log(`${town} has been wiped off the map!`);
        }

    }else if(command.includes("Prosper")){
        let [info,town,gold] = command.split("=>");
        gold = Number(gold);
        if(gold < 0){
            console.log(`Gold added cannot be a negative number!`);
        }else{
        cities[town].gold += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
        }
    }

    command = input.shift();
}
let towns = Object.keys(cities).length;

if(towns === 0){
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
}else{
    console.log(`Ahoy, Captain! There are ${towns} wealthy settlements to go to:`);
for(let towns in cities){
    console.log(`${towns} -> Population: ${cities[towns].population} citizens, Gold: ${cities[towns].gold} kg`);
}

}

}
solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);