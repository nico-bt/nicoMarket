<template>
  <Head>
    <Title>NicoMarket | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <ProductDetails :product="product" />
</template>

<script setup>
const id = useRoute().params.id

const { data: product } = await useFetch("/api/products/" + id)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" })
}
</script>
