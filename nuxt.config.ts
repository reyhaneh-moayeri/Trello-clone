// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss' , '@fortawesome/fontawesome-svg-core/styles.css'],
  build: {
      transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
    },
   app:{
      head:{
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
  ],
})
