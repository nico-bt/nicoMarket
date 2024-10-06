<template>
  <header class="shadow-sm bg-white sticky top-0">
    <nav class="container mx-auto p-4 px-8 flex justify-between">
      <NuxtLink to="/" class="font-bold">NicoMarket</NuxtLink>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
  font-weight: bold;
  border-bottom: 3px solid #12b488;
}
</style>
