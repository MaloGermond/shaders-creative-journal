import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['codemirror','@codemirror/view','@codemirror/lang-javascript','@codemirror/commands','@codemirror/autocomplete','@codemirror/language'],
  },
  build: {
    // Assure la compatibilité avec CommonJS si nécessaire
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});