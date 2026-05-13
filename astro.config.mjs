// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/emociones-bellanew',
  outDir: 'apps/abbott/emociones-bellanew',
  vite: {
    plugins: [tailwindcss()]
  }
});