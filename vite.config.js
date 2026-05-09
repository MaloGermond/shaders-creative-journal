import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@codemirror/view'],
  },
  build: {
    // Assure la compatibilité avec CommonJS si nécessaire
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});