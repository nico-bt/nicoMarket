// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      title: "NicoMarket",
      meta: [
        {
          name: "description",
          content: "Shop from Mercado Libre and Amazon. Special club group discounts",
        },
        { name: "author", content: "Nico Battaglia" },
      ],
    },
  },
})