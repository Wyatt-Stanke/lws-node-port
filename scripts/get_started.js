import { readFileSync, rename, writeFileSync } from "node:fs";

import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "token",
    message: "What token would you like to use for this bot?",
  },
];

inquirer.prompt(questions).then((answers) => {
  rename("../config.default.json", "../config.json", () => {
    let data = readFileSync("../config/config.json");
    data = JSON.parse(data);
    data["token"] = answers.token;
    writeFileSync("../config/config.json", JSON.stringify(data));
  });
});
