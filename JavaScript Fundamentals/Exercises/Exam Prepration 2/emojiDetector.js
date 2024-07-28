function solve(input) {
  let str = input.shift();
  const digitFindPattern = /\d/g;
  const thresHold = str.match(digitFindPattern).reduce((acc, val) => acc * val);
  const emojiPattern = /(::|\*\*)(?<text>[A-Z][a-z]{2,})\1/g;
  let letterPattern = /[A-Z]|[a-z]/g;
  const validEmojisIterator = str.matchAll(emojiPattern);
  const emojis = [];
  for (let validEmojiArr of validEmojisIterator) {
    let emoji = validEmojiArr.shift();
    let coolnes = 0;
    let allCharsMatchArr = emoji.match(letterPattern);
    for (let char of allCharsMatchArr) {
      let asciNum = char.charCodeAt(0);
      coolnes += asciNum;
    }
    emojis.push({ emoji, coolnes });
  }

  console.log(`Cool threshold: ${thresHold}`);
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
  emojis.forEach((obj) => {
    if (obj.coolnes > thresHold) {
      console.log(`${obj.emoji}`);
    }
  });
}
solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
