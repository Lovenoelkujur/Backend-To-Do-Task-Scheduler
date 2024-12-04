const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnection = () => {
    mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("DB Connection Successfull.");  
    })
    .catch((error) => {
        console.log("DB Connection Error ", error);    
    })
}

module.exports = databaseConnection;