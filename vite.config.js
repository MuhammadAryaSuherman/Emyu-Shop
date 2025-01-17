import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Pastikan Vite server mendengarkan di semua alamat
    port: 5173,        // Gunakan port yang sesuai dengan yang diinginkan
  },
});
