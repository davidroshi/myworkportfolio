import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'node:crypto'

// Polyfill for crypto.getRandomValues is not a function error in Node < 19
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
