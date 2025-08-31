exports.extractPublicId = (url) => {
  try {
    const parts = url.split("/");
    const fileWithExt = parts[parts.length - 1]; // file.jpg
    const fileName = fileWithExt.split(".")[0]; // file
    const folder = parts[parts.length - 2]; // folder (if exists)

    return `${folder}/${fileName}`;
  } catch (err) {
    return null;
  }
};
