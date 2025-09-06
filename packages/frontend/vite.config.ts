import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  plugins: [ react() ],
  build: {
    // NOTE: Needed when deploying
    chunkSizeWarningLimit: 800
  }
})
