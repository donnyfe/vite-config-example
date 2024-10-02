import eslint from 'vite-plugin-eslint'

export function useEslintPlugin() {
	return eslint({
		fix: true,
		include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
		exclude: ['node_modules', 'dist'],
		cache: false,
	})
}
