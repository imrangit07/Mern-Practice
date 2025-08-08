
const fs = require("fs");
const modle = require('../Modles/Modles')
const { uploadImage } = require("../Utils/UploadCloudinary")
const Insert = async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    const { name, gender, email, city } = req.body
    const imgUrl = await uploadImage(req.file.path).url;
    console.log("url: ", imgUrl);


    fs.unlink(req.file.path, (error) => {
        if (error) {
            console.log("Error deleted file", error);
        } else {
            console.log("File deleted successfully!");
        }
    })

    try {
        await modle.create({
            name, gender, email, city, imgUrl
        });

        res.json({ message: "data inserted successfully" });

    } catch (error) {
        res.json({ error: "Error inserting data", error })
    }

}

const getData = async(req,res)=>{
    const data = await modle.find();

    console.log("data: ", data);
    res.json({ message: "data fetched successfully!", data })
}
const deleteData = async(req,res)=>{
    const {id}=req.query;
    
    const data = await modle.findByIdAndDelete({_id:id});

    console.log("data: ", data);
    res.json({ message: "data deleted successfully!"})
}
const viewData = async(req,res)=>{
    const {id}=req.query;
    
    const data = await modle.findById({_id:id});

    console.log("data: ", data);
    res.json({ message: "data deleted successfully!",data})
}
const Update = async(req,res)=>{
   try {
        const { _id,name, gender, email, city } = req.body;

        let imgUrl=" ";
        if (req.file) {
            // Upload new image to Cloudinary
          imgUrl = await uploadImage(req.file.path).url;

            // Delete local file
            fs.unlink(req.file.path, (err) => {
                if (err) console.error("Error deleting local file:", err);
                else console.log("Temp file deleted.");
            });
        }

        // Update the document in MongoDB
        const updateData = {
            name,
            gender,
            email,
            city,
            imgUrl
        };

    

        await modle.findByIdAndUpdate(_id, updateData);

        res.json({ message: "Data updated successfully." });

    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ error: "Update failed", details: error.message });
    }
}

module.exports = { Insert,getData,deleteData,viewData,Update};