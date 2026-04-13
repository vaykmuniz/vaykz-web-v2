import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from 'vite-plugin-svelte-svg'

export default defineConfig({
	plugins: [tailwindcss(), svg(), sveltekit()]
});
