const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('middleware 1');
    next();
})

app.use((req,res,next)=>{
    console.log('middleware 2');
    next();
})

app.use((req,res,next)=>{
    console.log('middleware 3');
    res.send("res end!")
    res.end();
})


app.listen(7000,()=>{
    console.log('listening on port 7000');
    
})

