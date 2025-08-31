const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDNARY_APIKEY,
  api_secret: process.env.CLOUDNARY_APIKEY_SECRET,
});

exports.uploadonCloudnary = async (localFilepath) => {
  try {
    if (!localFilepath) return null;
    const response = cloudinary.uploader.upload(localFilepath, {
      resource_type: "image",
    });

    return response;
  } catch (error) {
    fs.unlinkSync(localFilepath);
    return null;
  }
};

exports.deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;
    const response = await cloudinary.uploader.destroy(publicId);
    return response;
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    return null;
  }
};
