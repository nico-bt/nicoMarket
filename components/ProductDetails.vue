<template>
  <div class="card">
    <span
      @click="() => router.back()"
      class="text-gray-600 text-4xl cursor-pointer rounded-full pb-1 flex justify-center items-center w-[50px] h-[50px] hover:text-black hover:bg-slate-100"
    >
      ←
    </span>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7" />
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
