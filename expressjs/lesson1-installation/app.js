const express = require('express');
const app = express();

app.use((req,res)=>{
    res.send('Hello Express JS');
})


app.listen(7000,()=>{
    console.log('listening on port 7000');
    
})

