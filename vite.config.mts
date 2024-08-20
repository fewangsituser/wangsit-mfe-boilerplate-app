import { defineConfig } from 'vite';
import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import istanbul from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: '.',
  plugins: [
    vue(),
    tsconfigPaths(),
    istanbul({
      include: 'src/*',
      exclude: [
        'node_modules',
        'test/',
        'src/**/*.spec.ts',
        'src/**/*.cy.spec.ts',
        'src/**/*.type.ts',
        'src/**/*.dto.ts',
      ],
      extension: ['.ts', '.vue'],
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'wangsvue': resolve(__dirname, 'node_modules/wangsvue'),
    },
  },
  server: {
    port: 9090,
  },
  build: {
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['wangsvue'],
  },
});
