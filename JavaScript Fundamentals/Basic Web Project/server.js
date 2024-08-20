const server = require("http");
server.createServer((req,res)=>{
    res.writeHead(200);
    res.write(`
      <button>Click Me</button>  
         `)
    res.end();     
}).listen(3034);