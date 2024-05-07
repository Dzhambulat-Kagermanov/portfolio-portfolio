import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      components: '/src/components',
      constants: '/src/constants',
      types: '/src/types',
      hooks: '/src/hooks',
      utils: '/src/utils',
    },
  },
})
