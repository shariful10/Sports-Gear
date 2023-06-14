module.exports = {
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh", "react"],
	rules: {
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-unescaped-entities": 0,
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react-refresh/only-export-components": "warn",
	},
};
