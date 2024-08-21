
const express = require('express');

const app = express();

app.get('/catalog',(req,res)=>{

    res.write(`<h1>This is Catalog Page</h1>`)
    res.end();
}).listen(3400,()=>console.log('Surver is loading on 3400'));


