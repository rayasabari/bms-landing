// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
  fonts: {
    families: [
      {
        name: 'Epilogue',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900]
      },
      {
        name: 'Plus Jakarta Sans',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900]
      }
    ]
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            heading: ['Epilogue', 'sans-serif'],
          },
          colors: {
            primary: '#FA0C0D'
          }
        }
      }
    }
  },
  app: {
    head: {
      title: 'Brother Meat Shop - Distributor & Supplier Daging',
      meta: [
        {
          name: 'description',
          content: 'Distributor dan supplier daging maupun frozen food berkualitas di Jakarta. 100% fresh dan halal. Pesan sekarang untuk layanan cepat dan terpercaya.'
        },
        // Open Graph
        { property: 'og:title', content: 'Brother Meat Shop - Distributor & Supplier Daging Jakarta' },
        { property: 'og:description', content: 'Distributor dan supplier daging maupun frozen food berkualitas di Jakarta. 100% fresh dan halal. Pesan sekarang untuk layanan cepat dan terpercaya.' },
        { property: 'og:image', content: 'https://brothermeatshop.vercel.app/og-image.webp' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Brother Meat Shop - Distributor & Supplier Daging Jakarta' },
        { name: 'twitter:description', content: 'Distributor dan supplier daging maupun frozen food berkualitas di Jakarta. 100% fresh dan halal. Pesan sekarang untuk layanan cepat dan terpercaya.' },
        { name: 'twitter:image', content: 'https://brothermeatshop.vercel.app/og-image.webp' }
      ]
    }
  }
})