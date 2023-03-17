
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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