import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
  },
});

