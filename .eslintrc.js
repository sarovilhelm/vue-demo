module.exports = {
	root: true,

	globals: {
		dataLayer: "writable"
	},

	env: {
		node: true
	},

	parserOptions: {
		ecmaVersion: 2020
	},

	rules: {
		"no-console": "off",
		"no-debugger": "off",
		"no-useless-escape": "off",
		"vue/attributes-order": "error",
		"vue/this-in-template": "error",
		"vue/order-in-components": "error",
		"no-async-promise-executor": "off"
	},

	extends: ["plugin:vue/strongly-recommended", "eslint:recommended", "@vue/prettier"]
}
