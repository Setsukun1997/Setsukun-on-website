import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
   
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
