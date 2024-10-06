<template>
  <div>
    <form v-on:submit.prevent="handleQuery" class="flex gap-2 max-w-[500px] mb-4 mx-auto">
      <input
        v-model="query"
        type="text"
        placeholder="Search product"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-300"
      />
      <button
        type="submit"
        class="px-6 py-2 bg-green-700 text-white font-semibold tracking-wider rounded-lg shadow-md hover:bg-green-800 transition duration-300 disabled:opacity-60"
        :disabled="status === 'pending'"
      >
        {{ status === "pending" ? "..." : "Search" }}
      </button>
    </form>

    <StatusMessage :status="status" :error="error" :data="data" :url="url" />

    <div
      v-if="status === 'success' && data?.products.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
    >
      <Pagination :currentPage="page" :totalPages="totalPages" @pageChange="handlePageChange" />

      <div v-for="product in data?.products" :key="product.id">
        <ProductCard :product="product" />
      </div>

      <Pagination :currentPage="page" :totalPages="totalPages" @pageChange="handlePageChange" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const query = ref(route.query.q || "")

const page = ref(Number(route.query.page) || 1)
const LIMIT = 50
const totalPages = computed(() => Math.ceil((data.value?.paging.primary_results || 1) / LIMIT))

const handleQuery = async () => {
  page.value = 1
  if (query.value.trim()) {
    router.push({ query: { q: query.value } })
  }
}

const handlePageChange = (newPage) => {
  page.value = newPage
  router.push({
    query: {
      q: query.value,
      page: newPage,
    },
  })
}

const url = computed(() =>
  route.query.q ? `/api/products?query=${route.query.q}&page=${page.value}` : null
)

const { data, error, status } = await useFetch(url, { watch: [url] })

useSeoMeta({
  title: () => route.query.q || "Search products",
  description: "Special offers marketplace",
  ogTitle: () => route.query.q || "Search products",
  ogDescription: "Special offers marketplace",
  ogImage: () => data.value?.products[0]?.image || "/screen-img.jpg",
  ogUrl: route.fullPath,
  twitterTitle: () => route.query.q || "Search products",
  twitterDescription: "Special offers marketplace",
  twitterImage: () => data.value?.products[0]?.image || "/screen-img.jpg",
  twitterCard: "summary",
})
</script>
