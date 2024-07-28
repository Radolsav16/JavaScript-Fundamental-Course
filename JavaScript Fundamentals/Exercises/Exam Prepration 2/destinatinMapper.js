function solve(input) {
  let str = input.shift();
  let locationPattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
  let travelPoint = 0;
  let iterator = str.matchAll(locationPattern);
  const destinationsArr = [];
  for(let destinations of iterator){
    let location = destinations.groups.location;
    destinationsArr.push(location);
    let length = location.length;
    travelPoint += length;
  }
  console.log(`Destinations: ${destinationsArr.join(", ")}`);
  console.log(`Travel Points: ${travelPoint}`);
  
}
solve(["=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="]);
