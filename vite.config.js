import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000, 
    strictPort: true, 
    hmr: {
      host: '192.168.100.13', 
      port: 3000,
    },
  },
});

