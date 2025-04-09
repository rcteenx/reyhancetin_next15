const fs = require("fs");
const path = require("path");
const { getFilesRecursively } = require("./getFilesRecursively");

const { resolve } = require("path");
const domain_url = "https://reyhancetin.org.tr";

const getDirPath = resolve(__dirname, "../out");
const skipDir = "_next";
const skipDir2 = "assets";

let files = getFilesRecursively(getDirPath, skipDir, skipDir2);

var filteredFiles = files.filter((file) => file.endsWith(".html"));

var filteredOtherFiles = filteredFiles
  .filter((file) => !file.includes("404") && !file.includes("index"))
  .map((file) => file.slice(getDirPath.length + 1))
  .map((file) => file.substring(0, file.lastIndexOf(".")));

function generateSiteMap(files) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${domain_url}</loc></url>${filteredOtherFiles
    .map((file) => {
      return `<url><loc>${`${domain_url}/${file}`}</loc></url>`;
    })
    .join("")}
   </urlset>
 `;
}

const sitemap = generateSiteMap(filteredOtherFiles);

fs.writeFile("out/sitemap.xml", sitemap, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
