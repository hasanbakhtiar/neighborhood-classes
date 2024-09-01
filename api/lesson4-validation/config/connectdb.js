const { default: mongoose } = require("mongoose");

const connectdb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://hasanbakhtiar:hasanTutorials2024@shop.eptjk.mongodb.net/?retryWrites=true&w=majority&appName=Shop");
        console.log('mongodb connect is successfully');
        
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = connectdb;
