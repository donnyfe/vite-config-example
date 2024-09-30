import { resolve } from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export function useSvgIconsPlugin() {
	return createSvgIconsPlugin({
		iconDirs: [resolve('src/assets/icons')],
		// 指定symbolId格式
		symbolId: 'svg-[name]',
	})
}
