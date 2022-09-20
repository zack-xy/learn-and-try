import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  // 优化依赖，指定哪些需要优化，哪些不需要优化
  optimizeDeps: {
  },
  resolve: {
    alias: {
      '@styles': '/src/styles',
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssImport,
        autoprefixer,
      ],
    },
    preprocessorOptions: {
    },
  },
})
