import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OtterTech',
			social: {
				github: 'https://github.com/JimmyDuong00',
			},
			sidebar: [
				{	// Each item here is one entry in the navigation menu.

					label: 'Start Here',
					autogenerate: { directory: 'start here' },
				},
				{	// Each item here is one entry in the navigation menu.

					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Guides',
					items: [
						
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Documentation',
					autogenerate: { directory: 'documentaton' },
				},
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
			],
		}),
	],
});
