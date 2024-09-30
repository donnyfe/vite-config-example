import removeConsole from 'vite-plugin-remove-console'

// 打包移除console
export function useRemoveConsolePlugin() {
	return removeConsole({
		// 排除文件的集合
		external: [],
	})
}
