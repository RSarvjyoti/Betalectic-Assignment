const {connect} = require("mongoose");


const connectDB = async (url) => {
    try{
        await connect(url);
        console.log("connected database");
        
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;