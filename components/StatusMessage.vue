<template>
  <div
    v-if="status === 'pending' && url"
    class="text-2xl tracking-widest flex max-w-32 mx-auto mt-32"
  >
    Loading...
  </div>

  <div v-if="status === 'error' && url" class="text-2xl tracking-wide max-w-[350px] mx-auto mt-32">
    <p class="mb-4">Ups, something went wrong. Please try again</p>
    <p>{{ error.statusMessage }}</p>
  </div>

  <div
    v-if="status === 'success' && data?.products.length === 0"
    class="text-2xl tracking-widest flex max-w-60 mx-auto mt-32"
  >
    No results
  </div>
</template>

<script setup>
defineProps(["status", "error", "data", "url"])
</script>

<style lang="scss" scoped></style>
