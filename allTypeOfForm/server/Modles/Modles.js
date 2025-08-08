const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    name:String,
    gender:{type:String},
    email:{type:String},
    city:{type:String},
    imgUrl:{type:String} 

})

module.exports = mongoose.model("Modles",mySchema)