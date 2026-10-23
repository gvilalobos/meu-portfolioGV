// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gvilalobos.github.io',
  base: '/omeuportefoliogv', // GitHub Pages "
  vite: {
    plugins: [tailwindcss()]
  }
});