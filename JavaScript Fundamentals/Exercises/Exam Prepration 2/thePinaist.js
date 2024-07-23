function solve(input) {
  const n = Number(input.shift());
  let collection = {};
  for (let i = 0; i < n; i++) {
    let line = input[i];
    let [piece, composer, key] = line.split("|");
    collection[piece] = { key, composer };
  }
  let pieces = input.shift();

  while (pieces !== "Stop") {
    if (pieces.includes("Add")) {
      let [command, piece, composer, key] = pieces.split("|");
      if (piece in collection) {
        console.log(`${piece} is already in the collection!`);
      } else {
        collection[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    } else if (pieces.includes("Remove")) {
      let [command, piece] = pieces.split("|");
      if (piece in collection) {
        delete collection[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (pieces.includes("ChangeKey")) {
      let [command, piece, newKey] = pieces.split("|");
      if (piece in collection) {
        collection[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    pieces = input.shift();
  }

  for (let keys in collection) {
    console.log(
      `${keys} -> Composer: ${collection[keys].composer}, Key: ${collection[keys].key}`
    );
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
