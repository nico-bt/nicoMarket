<template>
  <div class="card text-center">
    <NuxtImg :src="`${product.image}`" class="thumb" />
    <p class="font-bold text-gray-800 m-4 truncate">{{ product.title }}</p>
    <p class="font-bold text-gray-600 m-4 truncate">$ {{ product.price.toLocaleString() }}</p>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.source }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NormalizedProduct } from "@/server/api/products"

const props = defineProps<{ product: NormalizedProduct }>()
</script>

<style scoped>
.thumb {
  height: 160px;
  object-fit: contain;
  max-width: 70%;
  margin: 0 auto;
}
</style>
