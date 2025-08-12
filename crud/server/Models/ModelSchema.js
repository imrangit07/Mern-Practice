const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: String,
    status:Boolean,
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);