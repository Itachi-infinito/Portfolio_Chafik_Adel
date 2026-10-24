import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    // Date du build (AAAA-MM-JJ), affichée comme révision dans le cartouche du header
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
})