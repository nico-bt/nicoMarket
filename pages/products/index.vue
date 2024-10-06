<template>
  <div>
    <form v-on:submit.prevent="handleQuery" class="flex gap-2 max-w-[500px] mb-6 mx-auto">
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

    <div
      v-if="status === 'pending' && url"
      class="text-2xl tracking-widest flex max-w-32 mx-auto mt-32"
    >
      Loading...
    </div>

    <div
      v-if="status === 'error' && url"
      class="text-2xl tracking-wide max-w-[350px] mx-auto mt-32"
    >
      <p class="mb-4">Ups, something went wrong. Please try again</p>
      <p>{{ error.statusMessage }}</p>
    </div>

    <div
      v-if="status === 'success' && data?.products.length === 0"
      class="text-2xl tracking-widest flex max-w-60 mx-auto mt-32"
    >
      No results
    </div>

    <div
      v-if="status === 'success' && data?.products"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
    >
      <div v-for="product in data?.products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const query = ref(route.query.q || "")

const handleQuery = async () => {
  if (query.value.trim()) {
    router.push({ query: { q: query.value } })
  }
}

const url = computed(() => (route.query.q ? `/api/products?query=${route.query.q}` : null))

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
