module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'react/prop-types': 'off'
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect'
		}
	}
}
