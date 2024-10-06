<template>
  <NuxtLoadingIndicator />
  <div>
    <Navbar />

    <!-- Output page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
