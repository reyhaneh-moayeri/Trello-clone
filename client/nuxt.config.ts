// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  css: ['~/assets/styles/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }
    },
  },
  app: {
    head: {
      title: "Trello",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/_colors.scss";',
        },
      },
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/strapi',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  }
})
