import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// Vite didn't detected
	css: {
		postcss: './postcss.config.js'
	}
});
