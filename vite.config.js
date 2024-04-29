import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/rw-swarm-post/',
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
    },
  },
});
