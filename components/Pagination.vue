<template>
  <div class="pagination">
    <button
      v-if="currentPage > 1"
      @click="goToPreviousPage"
      class="px-2 mx-2 py-0.5 bg-gray-300 text-gray-700 rounded border border-slate-400 text-sm"
    >
      Previous
    </button>

    <span class="text-xl">Page {{ currentPage }} of {{ totalPages }}</span>

    <button
      v-if="currentPage < totalPages"
      @click="goToNextPage"
      class="px-2 mx-2 py-0.5 bg-gray-300 text-gray-700 rounded border border-slate-400 text-sm"
    >
      Next
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})

// Emit event to notify the parent about page change
const emit = defineEmits(["pageChange"])

const goToPreviousPage = () => {
  if (props.currentPage > 1) {
    emit("pageChange", props.currentPage - 1)
  }
}

const goToNextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("pageChange", props.currentPage + 1)
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
