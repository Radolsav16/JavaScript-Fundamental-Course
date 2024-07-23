function solve(input) {
  let stops = input.shift();

  let lines = input.shift();

  while (lines !== "Travel") {
    if (lines.includes("Add Stop")) {
      let [command, index, city] = lines.split(":");
      index = Number(index);
      if (stops[index]) {
        let stopsArr = stops.split("");
        stopsArr.splice(index, 0, city);
        let newStops = stopsArr.join("");
        stops = newStops;
        console.log(stops);
      }
    } else if (lines.includes("Remove Stop")) {
      let [command, startIndex, endIndex] = lines.split(":");
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      if (stops[startIndex] && stops[endIndex]) {
        let slicedPart = stops.slice(startIndex, endIndex + 1);
        stops = stops.replace(slicedPart, "");
        console.log(stops);
      }
    } else if (lines.includes("Switch")) {
      let [command, oldStr, newStr] = lines.split(":");

      while (stops.includes(oldStr)) {
        stops = stops.replace(oldStr, newStr);
      }
      
      console.log(stops);
    }

    lines = input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
