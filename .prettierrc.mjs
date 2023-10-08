/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'all',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	useTabs: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};

export default config;
