const { readFileSync, rename, writeFileSync } = import("node:fs");

const inquirer = require("inquirer");

const questions = [
	{ type: "input",
		name: "token",
		message: "What token would you like to use for this bot?",
	},
];

inquirer.prompt(questions).then((answers) => {
	rename("../config.default.json", "../config.json", () => {
		let data = readFileSync("..s/config/config.json");
		data = JSON.parse(data);
		data["token"] = answers.token;
		writeFileSync("../config/config.json", JSON.stringify(data));
	});
});
