import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: command === 'serve' && mode === 'development' 
    ? '/' 
    : (process.env.VITE_BASE_PATH || '/detective-board/')
}))