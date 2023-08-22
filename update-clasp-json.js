const fs = require("fs");

const branch = process.env.GITHUB_REF.split("/").slice(2).join("/");
let scriptId = "";

if (branch === "dev") {
  scriptId = "DEVELOPMENT_SCRIPT_ID";
} else if (branch === "stage") {
  scriptId = "STAGING_SCRIPT_ID";
} else if (branch === "main") {
  scriptId = "PRODUCTION_SCRIPT_ID";
}

const claspJson = {
  scriptId: scriptId,
  rootDir: "apps-script",
};

fs.writeFileSync(".clasp.json", JSON.stringify(claspJson, null, 2));
