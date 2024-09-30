import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

const libs = [
	{
		name: 'vue',
		var: 'Vue',
		path: 'vue.global.prod.min.js',
	},
	{
		name: 'vue-router',
		var: 'VueRouter',
		path: 'vue-router.global.min.js',
	},
	{
		name: 'vue-i18n',
		var: 'VueI18n',
		path: 'vue-i18n.runtime.global.prod.min.js',
	},
	// 项目中没有直接安装vue-demi，但是pinia用到了，所以需要在引入pinia前引入vue-demi（https://github.com/vuejs/pinia/blob/v2/packages/pinia/package.json#L77）
	{
		name: 'vue-demi',
		var: 'VueDemi',
		path: 'index.iife.min.js',
	},
	{
		name: 'pinia',
		var: 'Pinia',
		path: 'pinia.iife.min.js',
	},
	{
		name: 'element-plus',
		var: 'ElementPlus',
		path: 'index.full.min.js',
		css: 'index.min.css',
	},
	{
		name: 'axios',
		var: 'axios',
		path: 'axios.min.js',
	},
	{
		name: 'dayjs',
		var: 'dayjs',
		path: 'dayjs.min.js',
	},
	{
		name: 'echarts',
		var: 'echarts',
		path: 'echarts.min.js',
	},
]

const useLibs = ['vue', 'vue-router', 'vue-i18n', 'pinia', 'axios', 'dayjs']

/**
 * 平台采用国内cdn：
 * https://www.bootcdn.cn，
 * 或 https://unpkg.com，
 * 或 https://www.jsdelivr.com
 */
const modules = libs.filter((item) => useLibs.includes(item.name))

export function useCDNPlugin() {
	return importToCDN({
		// name: 对应下面modules的name，version: 自动读取本地package.json中dependencies依赖中对应包的版本号，path: 对应下面modules的path，当然也可写完整路径，会替换prodUrl
		prodUrl: 'https://cdn.bootcdn.net/ajax/libs/{name}/{version}/{path}',
		modules,
	})
}
