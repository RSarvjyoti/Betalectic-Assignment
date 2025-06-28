const {connect} = require("mongoose");

const connectDB = async (DB_URL) => {
    try{
        await connect(DB_URL);
        console.log("connected database");
        
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;