module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaFeatures: { legacyDecorators: true }
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:prettier/recommended',
		'prettier/vue',
		'prettier/@typescript-eslint'
	],
	plugins: ['vue', 'prettier', '@typescript-eslint', 'json'],
	settings: {
		'import/core-modules': ['vue', 'vuex','axios'],
		'import/resolver': {
			nuxt: {
				nuxtSrcDir: 'src',
				extensions: ['.js', '.ts', '.json', '.vue']
			}
		}
	},
	// add your custom rules here
	rules: {
		//'class-methods-use-this': 0,
		'prettier/prettier': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'import/no-unresolved': 'warn',
		'unicorn/number-literal-case': 'off',
		'import/no-dynamic-require': 'off',
		'global-require': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'max-classes-per-file': 'warn',
		'import/prefer-default-export': 'warn',
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				ignores: [
					'nuxt',
					'nuxt-link',
					'n-link',
					'nuxt-child',
          'no-ssr',
          'client-only',
					'svg-icon'
				]
			}
		]
	},
	overrides: [
		{
			files: ['*.d.ts'],
			rules: {
				'import/no-extraneous-dependencies': 0
			}
		}
	]
}

