import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginESLint from 'vite-plugin-eslint';
import vitePluginConditionalCompile from 'vite-plugin-conditional-compile';
import vitePluginWatchI18 from 'vite-plugin-watch-i18';

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    base: '/',
    plugins: [react(), vitePluginESLint(), vitePluginConditionalCompile(), vitePluginWatchI18()],
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
  };
});
