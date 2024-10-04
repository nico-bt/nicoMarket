<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "NicoMarket",
  description: "Search products & offers!",
  ogTitle: "NicoMarket",
  ogDescription: "Search products & offers!",
  ogImage: "/screen-img.jpg",
  ogUrl: `http:localhost:3000`,
  twitterTitle: "NicoMarket",
  twitterDescription: "Search products & offers!",
  twitterImage: "/screen-img.jpg",
  twitterCard: "summary",
})
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
