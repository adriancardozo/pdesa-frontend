import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      ...(mode === 'production'
        ? { watch: null, allowedHosts: ['pdesa-frontend-adriancardozo.azurewebsites.net'] }
        : {}),
    },
  };
});
