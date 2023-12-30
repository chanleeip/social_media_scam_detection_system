import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the output directory (default is 'dist')
    outDir: 'build',
    // Specify assets subdirectory (default is 'assets')
    // Set the base path for your project
  },
})
