import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true }), tsconfigPaths()],
  server: {
    open: true,
    port: 2310,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
