<template>
  <ProductDetails :product="product" />
</template>

<script setup>
const id = useRoute().params.id
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id })
</script>
