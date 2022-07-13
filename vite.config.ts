import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginESLint from 'vite-plugin-eslint';
import vitePluginWatchI18 from 'vite-plugin-watch-i18';
import createImportPlugin from 'vite-plugin-import';
import vitePluginConditionalCompile from 'vite-plugin-conditional-compile';

// https://vitejs.dev/config/
export default defineConfig((config) => {
  var isDebug = config.mode === 'development';
  var isProduction = config.mode === 'production';

  return {
    base: '/',
    plugins: [
      vitePluginConditionalCompile({
        isDebug,
        expand: {
          isProduction,
        },
      }),
      react(),
      vitePluginESLint(),
      vitePluginWatchI18(),
      createImportPlugin({
        onlyBuild: true,
        babelImportPluginOptions: [
          {
            libraryName: 'antd',
            style: 'css',
          },
        ],
      }),
    ],
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
