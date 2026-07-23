import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        careers: resolve(__dirname, 'careers.html'),
        about: resolve(__dirname, 'about.html'),
        'product-rice-starch': resolve(__dirname, 'product-rice-starch.html'),
      },
    },
  },
});
