<template>
  <div class="col-span-full flex justify-center items-center gap-2">
    <label id="sort" class="font-mono text-gray-800">Sort by:</label>
    <select
      id="sort"
      v-model="sortBy"
      @change="handleChangeSort"
      class="rounded p-1 font-mono text-gray-800"
    >
      <option value="price_desc">Price: High to Low</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="relevance">Relevance</option>
    </select>
  </div>
</template>

<script setup>
const route = useRoute()
const sortBy = ref(route.query.sort || "relevance")

const handleChangeSort = () => {
  navigateTo(`/products/?q=${route.query.q}&page=1&sort=${sortBy.value}`)
}
</script>
