import { resolve } from 'node:path'
/**
 * If you use the template method for development, you can use the unplugin-vue-components plugin to enable on-demand loading support.
 * 按需引入
 * https://github.com/antfu/unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'

export function useAutoImportPlugin() {
	return AutoImport({
		// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
		imports: [
			// 基础导入
			'vue',
			'vue-router',
			'pinia',
			'@vueuse/core',
			// 根据需要导入
			{
				'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar', 'useModal'],
			},
			'vue-i18n',
		],
		include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
		dts: resolve('src/types/auto-imports.d.ts'),
	})
}

export function useResolverPlugin() {
	// auto import components lib
	return Components({
		resolvers: [
			NaiveUiResolver(),
			IconsResolver({
				prefix: false,
				customCollections: ['svg-icons'],
			}),
		],
		dts: resolve('src/types/components.d.ts'),
	})
}
