<template>
  <div class="text-center flex flex-col gap-1 items-center">
    <h1 class="text-5xl font-bold text-gray-800 tracking-wider mb-4">Special Offers!</h1>
    <h2 class="text-xl text-gray-800 mb-4 leading-snug">20% Discount with NicoMarket points</h2>

    <NuxtLink
      to="/products"
      class="max-w-[200px] text-center px-6 py-2 bg-green-700 text-white font-semibold text-lg tracking-wide rounded-lg shadow-md hover:bg-green-800 transition duration-300"
    >
      Search Products
    </NuxtLink>

    <NuxtImg
      src="/buy.jpg"
      alt="Special Offers"
      class="mt-1 w-full max-w-[660px] rounded-lg shadow-lg mx-auto"
    />
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
