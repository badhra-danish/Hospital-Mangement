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
