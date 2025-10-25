import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['html2pdf.js']
    }
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/_redirects', dest: '.' }
      ]
    })
  ]
});
