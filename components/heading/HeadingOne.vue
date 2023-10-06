<script setup lang="ts">
defineSlots<{
    default(): any
}>()
</script>

<template>
  <h1 class="text-3xl font-bold m-0">
    <slot />
  </h1>
</template>