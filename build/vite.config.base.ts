import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import {
	// 使用UnoCSS
	useUnoCSSPlugin,
	useIconsPlugin,
	useAutoImportPlugin,
	useResolverPlugin,
} from './plugins'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		// 支持jsx
		vueJsx(),
		// 使用UnoCSS
		useUnoCSSPlugin(),
		// 使用icons
		useIconsPlugin(),
		// 使用自动导入
		useAutoImportPlugin(),
		useResolverPlugin(),
	],
	resolve: {
		alias: {
			'@': resolve('src'),
		},
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
})
