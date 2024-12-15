import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react()], 
  server: {
    host: true,
    port: 5137, 
    strictPort: true, 
    hmr: {
      host: 'localhost', 
      protocol: 'ws',
      port: 5137,
    },
    proxy: {
      '/api': {
        target: 'http://localhost/Brazil_Cashback/view/backend', // Caminho do backend
        changeOrigin: true,
      },
    },    
  },
  resolve: {
    alias: {
      '@backend': path.resolve(__dirname, './backend')
    }
  }
});