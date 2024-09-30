import { visualizer } from 'rollup-plugin-visualizer'
/**
 * Generation packaging analysis
 * 生成打包分析
 */
export function useVisualizerPlugin() {
	return visualizer({
		filename: './node_modules/.cache/visualizer/stats.html',
		open: true,
		gzipSize: true,
		brotliSize: true,
	})
}
