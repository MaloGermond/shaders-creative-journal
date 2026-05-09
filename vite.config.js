import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@codemirror/view',
      '@codemirror/basic-setup',
      '@codemirror/lang-javascript',],
  },
  build: {
    // Assure la compatibilité avec CommonJS si nécessaire
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});