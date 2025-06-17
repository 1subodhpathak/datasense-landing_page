import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000
  // },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            'framer-motion',
            'react-type-animation'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  publicDir: 'public', // This ensures public folder files are served correctly
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
})
