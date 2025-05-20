import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    federation({
      name: 'commitmentTableMfe',
      filename: 'remoteEntry.js',
      exposes: {
        './CommitmentTable': './src/components/CommitmentTable.tsx',
      },
      shared: ['react', 'react-dom'],
      devMode: true,
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  server: {
    port: 3002,
  },
});
