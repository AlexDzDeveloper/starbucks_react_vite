import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Прописую текстом, що саме Vite має додати при компіляції перед кожним файлом .scss
        additionalData: `
          @use "/src/styles/variables" as *;
          @use "/src/styles/mixins" as *;
        `
      }
    }
  }
})
