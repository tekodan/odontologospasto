import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://odontologospasto.com.co',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
