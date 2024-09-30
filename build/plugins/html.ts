import { resolve } from 'node:path'
import { createHtmlPlugin } from 'vite-plugin-html'

/**
 * @link: https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md
 */
export function useHtmlPlugin() {
	return createHtmlPlugin({
		minify: true,
		/**
		 * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
		 * @default src/main.ts
		 */
		entry: resolve('src/main.ts'),
		/**
		 * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
		 * @default index.html
		 */
		template: resolve('public/index.html'),

		/**
		 * 需要注入 index.html ejs 模版的数据
		 */
		inject: {
			data: {
				title: 'Vue3Admin',
				injectScript: `<script type="module" src="./inject.js"></script>`
			},
			tags: [
				{
					injectTo: 'body-prepend',
					tag: 'div',
					attrs: {
						id: 'tag'
					}
				}
			]
		}
	})
}
