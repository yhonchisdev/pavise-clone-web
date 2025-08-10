import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import Fonts from 'unplugin-fonts/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    Fonts({
      custom: {
        families: [
          {
            name: 'SuisseIntl',
            src: './src/fonts/SuisseIntl-Regular.ttf',
          },
        ],
      },
    }),
    svgr(),
  ],
})
