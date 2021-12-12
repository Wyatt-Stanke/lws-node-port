module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "prettier"],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"sort-imports": [
			"error",
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
				allowSeparatedGroups: true,
			},
		],
	},
};
