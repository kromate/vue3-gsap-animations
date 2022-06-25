import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
// import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// eslintPlugin(),
		vue(),
		Pages({
			dirs: 'src/views',
			routeStyle: 'nuxt',
			extendRoute: (route: any) =>
			{
				const path = route.path.split('/')
				const lastIndex = path.length - 1
				if (path[lastIndex] && path[lastIndex].includes(':')) path[lastIndex] = path[lastIndex] + '/'
				return { ...route, path: path.join('/') }
			}
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
