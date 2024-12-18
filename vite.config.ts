import path from 'node:path';
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import UnoCSS from 'unocss/vite';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import postcssNesting from 'postcss-nesting';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const envConfig = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      UnoCSS(),
      svgr(),
      // gz包
      {
        ...viteCompression(),
        apply: 'build',
      },
      // 分析生成包的大小
      visualizer({
        open: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base: envConfig.VITE_PUBLIC_PATH,
    server: {
      port: Number(envConfig.VITE_APP_PORT),
      proxy: {
        '/api': {
          target: 'http://localhost:38080',
          changeOrigin: true,
        },
      },
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('>=0.25%')),
      },
      postcss: {
        plugins: [postcssNesting],
      },
    },
    build: {
      cssCodeSplit: true,
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            lib: ['zustand'],
            antd: ['antd'],
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  });
};
