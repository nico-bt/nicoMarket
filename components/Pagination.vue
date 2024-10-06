<template>
  <div class="pagination">
    <button
      v-if="page > 1"
      @click="goToPreviousPage"
      class="px-2 mx-2 py-0.5 bg-gray-300 text-gray-700 rounded border border-slate-400 text-sm"
    >
      Previous
    </button>

    <span class="text-xl">Page {{ page }} of {{ totalPages }}</span>

    <button
      v-if="page < totalPages"
      @click="goToNextPage"
      class="px-2 mx-2 py-0.5 bg-gray-300 text-gray-700 rounded border border-slate-400 text-sm"
    >
      Next
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  paging: {
    type: Object,
    required: true,
  },
})
const route = useRoute()

const page = ref(Number(route.query.page) || 1)
const LIMIT = 50
const totalPages = computed(() => Math.ceil((props.paging?.primary_results || 1) / LIMIT))

const goToPreviousPage = () => {
  if (page.value > 1) {
    page.value = page.value - 1
    navigateTo(`/products/?q=${route.query.q}&page=${page.value}&sort=${route.query.sort}`)
  }
}

const goToNextPage = () => {
  if (page.value < totalPages.value) {
    page.value = page.value + 1
    navigateTo(`/products/?q=${route.query.q}&page=${page.value}&sort=${route.query.sort}`)
  }
}
</script>

<style scoped>
.pagination {
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
