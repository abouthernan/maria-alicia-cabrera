import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://mariaaliciacabrera.com',
  base: '/',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel()
})
