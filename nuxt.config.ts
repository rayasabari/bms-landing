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
  }
})