import legacy from '@vitejs/plugin-legacy'

export function useLegacyPlugin() {
	return legacy({
		targets: ['ie >= 11'],
		renderLegacyChunks: true,
	})
}
