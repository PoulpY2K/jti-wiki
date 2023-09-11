import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'robots.txt', 'sveltekit-pwa.js', 'apple-touch-icon-180x180.png'],
			devOptions: {
				enabled: true
			},
			manifest: {
				name: 'Jujutsu Tech International Wiki',
				short_name: 'JTI Wiki',
				theme_color: '#8b0000',
				icons: [
					{
						src: 'icons/pwa-64x64.png',
						sizes: '64x64',
						type: 'image/png'
					},
					{
						src: 'icons/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'icons/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: 'icons/maskable-icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				]
			}
		})
	]
});
