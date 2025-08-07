const mongoose = require("mongoose");

const ConnectDb = async()=>{
await mongoose.connect("mongodb://localhost:27017/allTypeOfForm")
.then(()=>{
    console.log("Connected to the database");
})
.catch((err)=>{console.log(err)})
}

module.exports = ConnectDb;
