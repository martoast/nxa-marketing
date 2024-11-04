// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", 'nuxt-gtag'],
  image: {
    provider: 'netlify',
    domains: ['images.unsplash.com', 'tailwindui.com', 'localhost'],
    format: ['webp', 'svg'],
    sizes: 'sm:100vw md:50vw lg:400px'
  },
  gtag: {
    initMode: 'manual',
    id: process.env.GTAG_ID
  },
  runtimeConfig: {
    gtagId: process.env.GTAG_ID,
    ZAPIER_WEBHOOK_URL: process.env.ZAPIER_WEBHOOK_URL
  }
})