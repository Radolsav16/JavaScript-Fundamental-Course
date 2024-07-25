function solve(input) {
  let str = input.shift();
  const pattern = /(@|#)(?<word>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
  const matches = [...str.matchAll(pattern)];
  let validPairsCount = 0;
  let mirorWords = [];

  if (matches.length === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${matches.length} word pairs found!`);
  }

  for (const match of matches) {
    let obj = match.groups;
    let word1 = obj.word;
    let word2 = obj.word2;

    if (word1 === word2.split("").reverse().join("")) {
      mirorWords.push({ word1, word2 });
    }
  }

  if (mirorWords.length === 0) {
    console.log(`No mirror words!`);
  } else {
    let result = [];
    for (const obj of mirorWords) {
      result.push(`${obj.word1} <=> ${obj.word2}`);
    }

    console.log(`The mirror words are:`);
    console.log(result.join(", "));
  }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]);
// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// solve(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
