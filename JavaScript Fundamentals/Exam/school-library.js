function schoolLibrary(input) {
  const library = input.shift().split("&");
  let i = 0;
  let command = input[i];

  while (command !== "Done") {
    let tokenArr = command.split(" | ");
    let singleCommand = tokenArr.shift();

    if (singleCommand === "Add Book") {
      const book = tokenArr.shift();
      if (!library.includes(book)) {
        library.unshift(book);
      }
    } else if (singleCommand === "Take Book") {
      const book = tokenArr.shift();
      if (library.includes(book)) {
        let index = library.indexOf(book);
        library.splice(index, 1);
      }
    } else if (singleCommand === "Swap Books") {
      const book1 = tokenArr.shift();
      const book2 = tokenArr.shift();
      if (library.includes(book1) && library.includes(book2)) {
        let indexOfBook2 = library.indexOf(book2);
        let indexOfBook1 = library.indexOf(book1);
        library.splice(indexOfBook2, 1, book1);
        library.splice(indexOfBook1, 1, book2);
      }
    } else if (singleCommand === "Insert Book") {
      const book = tokenArr.shift();
      if (!library.includes(book)) {
        library.push(book);
      }
    } else if (singleCommand === "Check Book") {
      const index = Number(tokenArr.shift());
      if (library[index]) {
        console.log(library[index]);
      }
    }
    i++;
    command = input[i];
  }

  console.log(library.join(", "));
}
// schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
//     "Add Book | Ulysses",
//     "Take Book | Don Quixote",
//     "Insert Book | Alice's Adventures in Wonderland",
//     "Done"]);
// schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
//     "Add Book | Catch-22",
//     "Swap Books | Anna Karenina | Catch-22",
//     "Take Book | David Copperfield",
//     "Done"])
schoolLibrary([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Check Book | 2",
  "Swap Books | Don Quixote | Ulysses",
  "Done",
]);
