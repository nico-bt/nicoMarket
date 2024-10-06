<template>
  <div class="col-span-full flex justify-center items-center gap-2">
    <label id="sort" class="font-mono text-gray-800">Sort by:</label>
    <select
      id="sort"
      :value="sortBy"
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
const props = defineProps({
  sortBy: String,
})

const emit = defineEmits(["sortChange"])

const handleChangeSort = (event) => {
  emit("sortChange", event.target.value)
}
</script>
