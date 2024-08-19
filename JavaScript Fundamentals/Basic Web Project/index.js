// const {sum,subtract} = require("./calc-helper");


// let result = sum(4,5);

// console.log(result);



// console.log(subtract(9,4));


const app = require("http");
const port = 3035;







const server = app.createServer((req,res)=>{
    res.writeHead(200);
    res.write(`<button>Hello World</button>`);
    res.end();
}).listen(port,() => console.log(`Listen to port ${port}`));



