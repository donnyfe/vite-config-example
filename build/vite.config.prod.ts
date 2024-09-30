import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import {
	useRemoveConsolePlugin,
	useImageminPlugin,
	useCompressPlugin,
	useVisualizerPlugin,
	useCDNPlugin,
} from './plugins'

export default mergeConfig(baseConfig, {
	mode: 'prod',
	base: './',
	plugins: [
		// 移除console
		useRemoveConsolePlugin,
		// 图片压缩
		useImageminPlugin(),
		// cdn
		useCDNPlugin(),
		// 打包压缩
		useCompressPlugin('gzip'),
		// 分析报告
		useVisualizerPlugin(),
	],
	build: {
		target: 'esnext',
		sourcemap: true,
		assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
		reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
		chunkSizeWarningLimit: 2000,
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
				manualChunks(id: string) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				},
			},
		},
	},
})
