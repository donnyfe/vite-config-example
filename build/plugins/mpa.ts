/**
 * @link https://www.npmjs.com/package/vite-plugin-virtual-mpa
 */
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'

export function useMpaPlugin() {
	return createMpaPlugin({
		htmlMinify: false,
		pages: [
			{
				name: 'apple',
				/**
				 * filename is optional, default is `${name}.html`, which is the relative path of `build.outDir`.
				 */
				filename: 'fruits/apple.html', // output into sites/fruits/apple.html at build time.
				entry: '/src/fruits/apple/index.js',
				data: {
					title: 'This is Apple page',
				},
			},
			{
				name: 'banana',
				filename: 'fruits/banana.html',
				entry: '/src/fruits/banana/index.js',
				data: {
					title: 'This is Banana page',
				},
			},
		],
	})
}
