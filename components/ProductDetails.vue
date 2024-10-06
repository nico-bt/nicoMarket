<template>
  <div class="card">
    <div
      @click="() => router.back()"
      class="flex flex-col text-gray-600 cursor-pointer rounded-full justify-center items-center w-[65px] h-[65px] pb-1 hover:text-black hover:bg-slate-100"
    >
      <span class="text-4xl"> ← </span>
      <span class="text-[12px]">back</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="p-7">
        <NuxtImg :src="`${product.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price.toLocaleString() }}</p>
        <p class="mb-7 leading-relaxed" v-html="product.description.replace(/\. /g, '.<br>')"></p>

        <a
          :href="`${product.url}`"
          target="_blank"
          rel="noopener noreferrer"
          class="btn my-4 max-w-64 text-center"
        >
          View Publication in {{ product.source }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const { product } = defineProps(["product"])
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 750px;
}
</style>
