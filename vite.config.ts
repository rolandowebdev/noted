import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    minify: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom', 'react-icons'],
          axios: ['axios'],
          chakra: [
            '@chakra-ui/icons',
            '@chakra-ui/react',
            '@emotion/react',
            '@emotion/styled',
            '@fontsource/poppins',
            'framer-motion',
          ],
        },
      },
    },
  },
})
