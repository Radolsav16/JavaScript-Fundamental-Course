function computerStore(input) {
  let i = 0;
  let command = input[i];
  const taxPercentage = 0.2;
  let taxes = 0;
  let priceWithoutTaxes = 0;
  while (command !== "special" && command !== "regular") {
    let partsPrices = Number(input[i]);
    if (partsPrices < 0) {
      console.log(`Invalid price!`);
    } else {
      priceWithoutTaxes += partsPrices;
      taxes += partsPrices * taxPercentage;
    }
    i++;
    command = input[i];
  }
  let finalPrice = priceWithoutTaxes + taxes;
  if (command === "special") {
    finalPrice -= finalPrice * 0.1;
  }

  if (finalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
  }
}
computerStore([
  "1023",

  "15",

  "-20",

  "-5.50",

  "450",

  "20",

  "17.66",

  "19.30",

  "regular",
]);
