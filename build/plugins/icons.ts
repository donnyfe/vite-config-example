import { resolve } from 'node:path'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export function useIconsPlugin() {
	// auto import iconify's icons
	return Icons({
		defaultStyle: 'display:inline-block',
		compiler: 'vue3',
		customCollections: {
			// 根据实际修改静态资源目录
			'svg-icons': FileSystemIconLoader(resolve('src/assets/svg-icons'), (svg) =>
				svg.replace(/^<svg /, '<svg fill="currentColor" width="1.2em" height="1.2em"')
			),
		},
	})
}
