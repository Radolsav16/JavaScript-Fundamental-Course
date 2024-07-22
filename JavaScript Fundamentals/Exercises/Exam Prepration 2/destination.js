function solve(arr) {
  let str = arr.shift();  
  const pattern = /([=|/])[A-Z][A-Za-z]{3,}\1/g;
  let travelPoint = 0;
  const countryies = [];

  const matchedCountry = str.matchAll(pattern);
  for (const mathces of matchedCountry) {
    let country = mathces[0].slice(1, mathces[0].length - 1);
    countryies.push(country);
    travelPoint += country.length;
  }

  console.log(`Destinations: ${countryies.join(", ")}`);
  console.log(`Travel Points: ${travelPoint}`);
}
solve(["=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="]);
