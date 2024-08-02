import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    publicDir: path.resolve(__dirname, './src/static'),
    resolve: {
      alias: [
        {
          find: '@src',
          replacement: path.resolve(__dirname, './src'),
        }
      ],
      extensions: ['.js', '.ts', '.vue', '.json'],
    },
    plugins: [
      // compile vue
      vue(),
      // linter
      eslintPlugin({
        fix: true,
        overrideConfigFile: path.resolve(__dirname, 'eslint.config.mjs'),
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          sample: path.resolve(__dirname, './src/sample.ts')
        },
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
        },
      },
      emptyOutDir: true,
    },
  });
};
