const express = require('express');
const Product = require('./models/product');
const connectdb = require('./config/connectdb');
const app = express();
const cors = require('cors');
// Start Middleware
app.use(cors())
app.use(express.json());
// End Middleware



// Router Start
const productRoute = require('./routers/product');
app.use('/product',productRoute);

// Router End






// Start Server
app.use('/',(req,res)=>{
    res.send("Start App");
})
connectdb();
app.listen("3001",()=>{
    console.log("Server on port 3001");
    
})