function solve(str) {
  const pattern = /([/=])(?<country>[A-Z][A-Za-z]{2,})\1/g;
  const matchedLocations = str.matchAll(pattern);
  let travelPoints = 0;
  const destinations = [];
  for (const matches of matchedLocations) {
    let obj = matches.groups;
    let { country } = obj;
    if(!destinations.includes(country)){
        destinations.push(country);
        travelPoints += country.length;
    }
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
