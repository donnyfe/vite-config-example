import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import { useEslintPlugin, useDevToolsPlugin } from './plugins'

// https://vitejs.dev/config/
export default mergeConfig(baseConfig, {
	mode: 'dev',
	plugins: [
		// 使用开发者工具
		useDevToolsPlugin(),
		useEslintPlugin(),
	],
	// 依赖预构建
	optimizeDeps: {
		include: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
	},
	server: {
		host: '0.0.0.0',
		port: 5173,
		open: false,
		proxy: {
			'/api': {
				target: 'http://localhost:8085',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
				secure: false,
				configure: (proxy: any, options: any) => {
					// 此配置可在响应头中看到请求的真实地址
					proxy.on('proxyRes', (proxyRes: any, req: any) => {
						proxyRes.headers['x-real-url'] = new URL(req.url || '', options.target)?.href || ''
					})
				},
			},
		},
	},
})
