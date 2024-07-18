function matchFullName(text) {
  const pattern = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/gm;
  const matchedNames = text.match(pattern);
  const result = [];
  for (const names of matchedNames) {
    result.push(names);
  }
  console.log(result.join(" "));
}
matchFullName(
  "ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov,Ivan Ivanov"
);

function matchPhoneNumber(textArr){
    let text = textArr.shift();
    // const pattern = 
}
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953+359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740+359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);

function matchDate(arr){
    let text = arr.shift()
    const pattern = 
}
matchDate(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016']);
