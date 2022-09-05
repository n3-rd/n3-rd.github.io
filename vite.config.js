import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
    root: '',
    build: {
        outDir: 'docs'
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
})