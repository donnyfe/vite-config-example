import { resolve } from 'node:path'
import { viteVConsole } from 'vite-plugin-vconsole'

export function useVConsolePlugin() {
	return viteVConsole({
		entry: resolve('src/main.ts'),
		enabled: true, // 应根据实际条件判定启用或禁用
		config: {
			maxLogNumber: 1000,
			theme: 'dark',
		},
	})
}
