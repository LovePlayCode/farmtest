console.log(process.argv);
const packageJson = require("./package.json");
console.log(packageJson.scripts);
console.log(process.env.npm_config_params);
console.log(process.env.npm_package_license);
