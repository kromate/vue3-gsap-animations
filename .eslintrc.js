module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2021,
		parser: '@typescript-eslint/parser'
	},
	rules: {
		'no-console': 'warn',
		'no-debugger': 'warn',
		'vue/no-deprecated-slot-attribute': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'no-empty-function': 'off',
		'no-undef': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': 'off',
		'vue/no-v-html': 'off',
		'@typescript-eslint/no-implicit-any': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'off',
			{
				multiline: { delimiter: 'none', requireLast: false },
				singleline: { delimiter: 'comma', requireLast: false }
			}
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'no-tabs': 'off',
		'vue/no-reserved-component-names': 'off',
		'no-var': 'error',
		'no-use-before-define': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-mixed-spaces-and-tabs': ['off', 'smart-tabs'],
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		'prefer-const': ['error'],
		'arrow-parens': ['error', 'always'],
		'no-return-assign': 'off',
		curly: 'off',
		'vue/html-indent': ['warn', 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}],
		'vue/multi-word-component-names': 'off',
		'vue/no-mutating-props': 'off',
		'object-property-newline': 'off',
		'require-atomic-updates': 'off',
		'require-await': 'off'
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
