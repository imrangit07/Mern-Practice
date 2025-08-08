const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const uploadImage = async (imagePath) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            folder: 'new-file',
            // public_id: Date.now().toString(), // filename inside folder
            transformation: [{ width: 800, height: 800, crop: "limit" }],
        });
        console.log('Image uploaded successfully:', result.url);
        return result;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

module.exports = {uploadImage};

