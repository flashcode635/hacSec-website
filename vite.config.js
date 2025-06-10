import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 👈 This is the key part to expose to the network
    port: 5173        // 👈 Optional, but ensures consistency
  }
})
