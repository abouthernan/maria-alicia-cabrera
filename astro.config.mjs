import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

export default defineConfig({
  integrations: [react()],
  site: 'https://abouthernan.github.io',
  base: '/front-maria-alicia-cabrera'
})
