import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'frontend',  // Set the root directory to 'frontend' where your index.html is
  plugins: [react()],
  base: './',         // Use './' if deploying to a subfolder
})
