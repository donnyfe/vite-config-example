import { resolve } from 'node:path'
import UnoCSS from '@unocss/vite'

export function useUnoCSSPlugin() {
	return UnoCSS({
			configFile: resolve('src/unocss.config.ts'),
		}),
}
