import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      resolve: {
        alias: {
          'swiper/css': 'swiper/swiper-bundle.min.css', 
        },
      },
    },
  }, 
});
