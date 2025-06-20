import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    env: {
      app_url: 'http://localhost:5173',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
