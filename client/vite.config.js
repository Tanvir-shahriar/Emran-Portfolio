import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [workspaceRoot]
    },
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
});
