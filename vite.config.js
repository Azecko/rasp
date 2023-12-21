import pkg from './package.json'
import { defineConfig } from 'vite'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// Common settings
const server = {
  host: 'localhost',
  port: 3000,
  open: true
}

const plugins = [
  vituum(),
  nunjucks({
    root: './src'
  }),
  ViteImageOptimizer({
    png: { quality: 90 },
    jpeg: { quality: 90 },
    jpg: { quality: 90 },
    webp: { lossless: true },
    avif: { lossless: true }
  })
]

export default defineConfig(() => {
  const buildTarget = process.env.VITE_BUILD_TARGET || 'default'

  let base, outDir, assetsDir, rollupOptions

  if (buildTarget === 'default') {
    base = process.env.NODE_ENV === 'development' ? '/' : `/${pkg.name}/`
    outDir = './dist'
    assetsDir = 'assets'
    rollupOptions = undefined
  } else if (buildTarget === 'contao') {
    base = '/build/'
    outDir = './build'
    assetsDir = 'assets'
    rollupOptions = {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetPath) => {
          const isCSSorJS = assetPath.name.endsWith('.css') || assetPath.name.endsWith('.js')
          return isCSSorJS ? '[name].[ext]' : assetsDir + '/[name].[hash].[ext]'
        }
      }
    }
  }

  return {
    base,
    build: {
      outDir,
      emptyOutDir: true,
      assetsDir,
      rollupOptions,
      cssCodeSplit: false,
      target: 'modules'
    },
    server,
    plugins
  }
})
