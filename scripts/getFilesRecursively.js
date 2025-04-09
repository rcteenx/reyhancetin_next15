const fs = require("fs");
const path = require("path");
const files = [];
function getFilesRecursively(directory, skipDir, skipDir2) {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (
      fs.statSync(absolute).isDirectory() &&
      file !== skipDir &&
      file !== skipDir2
    ) {
      // console.log(file);
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
  return files;
}

module.exports = { getFilesRecursively };
