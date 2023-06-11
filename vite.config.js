import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
	root: 'src',
	base: './',
	build: {
		outDir: '../dist',
	},
	envDir: '../',
	server: {
		host: true, // to test on other devices with IP address
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
