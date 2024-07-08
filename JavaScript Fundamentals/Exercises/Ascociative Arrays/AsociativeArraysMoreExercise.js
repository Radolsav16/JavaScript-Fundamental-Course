function comments(array) {
  const comments = {};
  const articles = [];
  const users = [];
  for (const info of array) {
    if (info.includes("user")) {
      const user = info.split(" ").pop();
      users.push(user);
    } else if (info.includes("article")) {
      const article = info.split(" ").pop();
      articles.push(article);
      if (!comments.hasOwnProperty(articles)) {
        comments[article] = [];
      }
    } else {
      const [username, infoStr] = info.split(" posts on ");
      const [articleName, articleTitleStr] = infoStr.split(": ");
      const [articleTitle, content] = articleTitleStr.split(", ");
      if (users.includes(username) && articles.includes(articleName)) {
        if (comments[articleName].length === 0) {
          comments[articleName].push({ username, articleTitle, content });
        } else {
          comments[articleName].push({ username, articleTitle, content });
        }
      }
    }
  }

  const entries = Object.entries(comments);
  entries.sort((a, b) => b[1].length - a[1].length);
  for (const arrs of entries) {
    console.log(`Comments on ${arrs[0]}`);
    arrs[1].sort((a, b) => a.username.localeCompare(b.username));
    for (let info of arrs[1]) {
      console.log(
        `--- From user ${info.username}: ${info.articleTitle} - ${info.content}`
      );
    }
  }
}
comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle,stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
/*

shelf = id:[genre,{}]

book = {title:"Book",author:"Author",genreOfBook:"scifi"}


*/

function bookShelf(array) {
  const shelf = {};
  for (const info of array) {
    if (info.includes("->")) {
      const [shelfId, shelfGenre] = info.split(" -> ");
      if (!shelf.hasOwnProperty(shelfId)) {
        shelf[shelfId] = [shelfGenre, []];
      }
    } else if (info.includes(":")) {
      const infoArr = info.split(": ");
      const bookTitle = infoArr.shift();
      const str = infoArr.shift();
      const newArr = str.split(",").map((string) => string.trim());
      const bookAuthor = newArr.shift();
      const bookGenre = newArr.shift();

      const values = Object.values(shelf);
      for (const arrays of values) {
        if (arrays[0] === bookGenre) {
          arrays[1].push({ bookTitle, bookAuthor, bookGenre });
          break;
        }
      }
    }
  }

  const entries = Object.entries(shelf);
  entries.sort((a, b) => b[1][1].length - a[1][1].length);
  for (const arrays of entries) {
    const shelfId = arrays.shift();
    let arr = arrays.shift();
    const shelfTitle = arr.shift();
    for (let arrs of arr) {
      arrs.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
      const booksCount = arrs.length;
      console.log(`${shelfId} ${shelfTitle}: ${booksCount}`);
      for (let obj of arrs) {
        console.log(`--> ${obj.bookTitle}: ${obj.bookAuthor}`);
      }
    }
  }
}

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B,romance",
  "Losing Dreams: Gail Starr,sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay,history",
]);

/*

    course:{capacity,[{username,email,credits}]}

*/

function softuniStudents(array) {
  const courses = {};
  for (const info of array) {
    if (info.includes(":")) {
      let [courseName, capacity] = info.split(": ");
      capacity = Number(capacity);
      if (courses.hasOwnProperty(courseName)) {
        courses[courseName].capacity += capacity;
      } else {
        courses[courseName] = { capacity, users: [] };
      }
    } else if (info.includes("with")) {
      const arrOfInfi = info.split(" ");
      const email = arrOfInfi[3];
      const courseName = arrOfInfi[5];
      let userNameInfo = arrOfInfi.shift().split("");
      let leftBracketIndex = userNameInfo.indexOf("[");
      let rightBracketIndex = userNameInfo.indexOf("]");
      let numberStr = "";
      let username = "";
      for (let k = 0; k < leftBracketIndex; k++) {
        let el = userNameInfo[k];
        username += el;
      }
      for (let i = leftBracketIndex + 1; i < rightBracketIndex; i++) {
        numberStr += userNameInfo[i];
      }
      const credits = Number(numberStr);

      if (courses.hasOwnProperty(courseName)) {
        if (courses[courseName].capacity !== 0) {
          courses[courseName].users.push({ username, email, credits });
          courses[courseName].capacity -= 1;
        }
      }
    }
  }

  const entries = Object.entries(courses);
  entries.sort((a, b) => b[1].users.length - a[1].users.length);
  for (let arr of entries) {
    const course = arr.shift();
    const obj = arr.shift();
    const capacity = obj.capacity;
    const users = obj.users;
    users.sort((a, b) => b.credits - a.credits);
    console.log(`${course}: ${capacity} places left`);
    for (let obj of users) {
      const username = obj.username;
      const email = obj.email;
      const credits = obj.credits;
      console.log(`--- ${credits}: ${username}, ${email}`);
    }
  }
}

softuniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

/*

ArmieLeader:[tottalCount:totallcount , users:[{}]]



*/

function armies(array) {
  const leaders = {};
  for (const info of array) {
    if (info.includes("arrive")) {
      const leader = info.split(" arrive").shift();
      leaders[leader] = { totalCount: 0, users: [] };
    } else if (info.includes(":")) {
      const infoArr = info.split(":");
      const leader = infoArr.shift();
      const str = infoArr
        .shift()
        .split(",")
        .map((el) => el.trim());
      let [armyName, armyCount] = str;
      armyCount = Number(armyCount);

      if (leaders[leader]) {
        leaders[leader].users.push({ armyName, armyCount });
        leaders[leader].totalCount += armyCount;
      }
    } else if (info.includes("+")) {
      let [army, armyCount] = info.split(" + ");
      armyCount = Number(armyCount);
      for (let leader in leaders) {
        for (let user of leaders[leader].users) {
          if (user.armyName === army) {
            user.armyCount += armyCount;
            leaders[leader].totalCount += armyCount;
          }
        }
      }
    } else if (info.includes("defeated")) {
      const leader = info.split(" defeated").shift();
      delete leaders[leader];
    }
  }

  const entries = Object.entries(leaders);
  entries.sort((a, b) => b[1].totalCount - a[1].totalCount);

  for (let arrays of entries) {
    const leader = arrays.shift();
    const obj = arrays.shift();
    const totalCount = obj.totalCount;
    console.log(`${leader}: ${totalCount}`);
    const usersArr = obj.users;
    usersArr.sort((a, b) => b.armyCount - a.armyCount);

    for (let obj of usersArr) {
      console.log(`>>> ${obj.armyName} - ${obj.armyCount}`);
    }
  }
}

armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay:Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion,55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);

/*

garages = 
{
    1: [{color:blue,fuelType:"diesel",}.]
}

*/

function garage(array) {
  const garages = {};
  for (const info of array) {
    const infoArr = info.split(" - ");
    const garageNum = Number(infoArr.shift());
    let key = "";
    let value = "";
    for (let information of infoArr) {
      if (!information.includes(",")) {
        let obj = {};
        key = information.split(":").map((str) => str.trim()).shift();
        value = information.split(":").map((str) => str.trim()).pop();
        obj[key] = value;
        if (garages[garageNum]) {
          garages[garageNum].push(obj);
        } else {
          garages[garageNum] = [obj];
        }
      } else {
        const arr = information.split(",").map((str) => str.trim());
        let obj = {};
        for (let str of arr) {
          key = str.split(":").map((str) => str.trim())[0];
          value = str.split(":").map((str) => str.trim())[1];
          obj[key] = value;
        }
        if (garages[garageNum]) {
          garages[garageNum].push(obj);
        } else {
          garages[garageNum] = [obj];
        }
      }
    }
  }
  const entries = Object.entries(garages);
  for (const array of entries) {
    const garage = Number(array[0]);
    console.log(`Garage № ${garage}`);
    for (let obj of array[1]) {
      const keys = Object.keys(obj);
      let result = `--- `;
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (i === keys.length - 1) {
          result += `${key} - ${obj[key]}`;
        } else {
          result += `${key} - ${obj[key]}, `;
        }
      }
      console.log(result);
    }
  }
}
garage([
  "1 - color: blue, fuel type:diesel",
  "1 - color: red,manufacture: Audi",
  "2 - fuel type:petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
