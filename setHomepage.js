const fs = require("fs");

const packageJsonPath = "package.json";
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Set the homepage dynamically
packageJson.homepage = "https://xuantrangk54.github.io/become-king";

// Write the updated package.json back
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Updated homepage in package.json");
