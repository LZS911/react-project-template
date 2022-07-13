import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginESLint from 'vite-plugin-eslint';
import vitePluginWatchI18 from 'vite-plugin-watch-i18';
import createImportPlugin from 'vite-plugin-import';
import vitePluginConditionalCompile from 'vite-plugin-conditional-compile';
import vitePluginVisualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig((config) => {
  var isDebug = config.mode === 'development';
  var isProduction = config.mode === 'production';
  var plugins = [
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
        {
          libraryName: 'lodash',
          camel2DashComponentName: false,
        },
      ],
    }),
  ];
  if (isProduction) {
    plugins.push(
      vitePluginVisualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    );
  }
  return {
    base: '/',
    plugins,
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
