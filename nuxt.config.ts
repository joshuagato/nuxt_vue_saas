// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  devtools: { enabled: true },
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      prefix: 'Ui'
    },
    {
      path: '~/components',
      extensions: ['.vue'],
      prefix: ''
    }
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'],
    }
  }
})
