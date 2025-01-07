import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repo-name' with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: 'react-portfolio', // This is important for GitHub Pages
});
