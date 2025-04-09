const fs = require("fs");
const path = require("path");
const files = [];
function getFilesRecursively(directory, skipDir, skipDir2) {
  const filesInDirectory = fs.readdirSync(directory);
  var absolute = "";
  for (const file of filesInDirectory) {
    absolute = path.join(directory, file);
    if (!fs.statSync(absolute).isDirectory()) {
      if (!absolute.includes("x_")) {
        // console.log(absolute);
        files.push(absolute);
      }
    }
  }

  for (const file of filesInDirectory) {
    absolute = path.join(directory, file);
    if (
      fs.statSync(absolute).isDirectory() &&
      file !== skipDir &&
      file !== skipDir2
    ) {
      getFilesRecursively(absolute);
    }
  }
  return files;
}

module.exports = { getFilesRecursively };
