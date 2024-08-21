const express = require('express');

const app = express();

app.get('/catalog',(req,res)=>{

    res.write("Zdrasti")
    res.end();
}).listen(3400,()=>console.log('Surver is loading on 3400'));
