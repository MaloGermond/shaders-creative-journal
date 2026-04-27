// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Baskerville',
			cssVariable: '--font-baskerville',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/Baskervville-VariableFont_wght.ttf'],
						weight: '100 900',
						style: 'normal',
						display: 'swap',
						variable: true,
					},
					{
						src: ['./src/assets/fonts/Baskervville-Italic-VariableFont_wght.ttf'],
						weight: '100 900',
						style: 'italic',
						display: 'swap',
						variable: true,
					},
				],
			},
		},
	],
});
