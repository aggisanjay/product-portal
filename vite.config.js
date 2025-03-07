import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-bootstrap'],
    },
  }, resolve: {
    alias: {
      'react-bootstrap': 'react-bootstrap/dist/react-bootstrap.min.js'
    }
  }
})

