const mongoose = require('mongoose');

const dbUrl = `mongodb://${process.env.DB_URL || "localhost:27017" }/${process.env.NODE_ENV ==='prod' ? process.env.DB_NAME : process.env.TEST_DB_NAME }`;

console.log(`----------------------------------`,dbUrl);

class Database{

    constructor(){
        this._connectToDb();
    }

    _connectToDb(){
        mongoose.connect(dbUrl)
        .then(()=>{
            console.log("Connected to databse",dbUrl);
        })
        .catch((err)=>{
            console.log("Error while connecting to db",err)
        })

        mongoose.connection.on("error",(err)=>{
            console.log("Error in databse operation",err);
        })
    }

}


module.exports = new Database();