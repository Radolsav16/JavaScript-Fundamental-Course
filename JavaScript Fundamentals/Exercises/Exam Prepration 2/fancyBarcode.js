function solve(input) {
  let countOfBarcodes = Number(input.shift());
  const pattern = /@[#]+(?<main>[A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+/g;

  for (let i = 0; i < countOfBarcodes; i++) {
    let barcode = input[i];
    if (pattern.test(barcode)) {
      let match = barcode.match(pattern);
      let str = match[0];
      let digits = "";
      for (let chars of str) {
        let charNum = Number(chars);
        if (!isNaN(charNum)) {
          digits += chars;
        }
      }

      if (digits === "") {
        digits = "00";
      }
      console.log(`Product group: ${digits}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
