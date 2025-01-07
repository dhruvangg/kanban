import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kanban Board',
        short_name: 'Kanban',
        description: 'Kanban Board for managing tasks and projects',
        theme_color: '#3A6EA5',
        icons: [
          {
            src: '/kanban-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/kanban-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
