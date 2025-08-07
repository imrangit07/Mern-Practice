
const fs = require("fs")
const path = require("path");
const {uploadImage}= require("../Utils/UploadCloudinary")
const Insert = async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    await uploadImage(req.file.path);
    fs.unlink(req.file.path, (error) => {
        if (error) {
            console.log("Error deleted file", error);
        } else {
            console.log("File deleted successfully!");
        }
    })
    res.json({ message: "data inserted successfully" });
}

module.exports = { Insert };