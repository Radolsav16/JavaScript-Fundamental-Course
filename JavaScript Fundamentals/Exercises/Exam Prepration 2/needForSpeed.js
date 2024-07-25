function solve(input) {
  let numberOFcars = Number(input.shift());
  const cars = {};

  for (let i = 0; i < numberOFcars; i++) {
    let carStr = input.shift();
    let [car, milaege, fuel] = carStr.split("|");
    milaege = Number(milaege);
    fuel = Number(fuel);

    cars[car] = { milaege, fuel };
  }

  let command = input.shift();

  while (command !== "Stop") {
    if (command.includes("Drive")) {
      let commandArr = command.split(" : ");
      let fuel = Number(commandArr.pop());
      let distance = Number(commandArr.pop());
      let car = commandArr.pop();

      if (cars[car].fuel < fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        cars[car].milaege += distance;
        cars[car].fuel -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }

      if (cars[car].milaege >= 100000) {
        delete cars[car];
        console.log(`Time to sell the ${car}!`);
      }
    } else if (command.includes("Refuel")) {
      let commandArr = command.split(" : ");
      let fuelToFuel = Number(commandArr.pop());
      let car = commandArr.pop();
      let currFuel = cars[car].fuel;
      let fuel = fuelToFuel + currFuel;
      if (fuel > 75) {
        cars[car].fuel = 75;
        fuelToFuel = 75 - currFuel;
        console.log(`${car} refueled with ${fuelToFuel} liters`);
      } else {
        cars[car].fuel = fuel;
        console.log(`${car} refueled with ${fuelToFuel} liters`);
      }
    } else if (command.includes("Revert")) {
      let commandArr = command.split(" : ");
      let kilometers = Number(commandArr.pop());
      let car = commandArr.pop();
      cars[car].milaege -= kilometers;
      console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      if (cars[car].milaege <= 10000) {
        cars[car].milaege = 10000;
      }
    }

    command = input.shift();
  }

  for (let keys in cars) {
    console.log(
      `${keys} -> Mileage: ${cars[keys].milaege} kms, Fuel in the tank: ${cars[keys].fuel} lt.`
    );
  }
}
solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
