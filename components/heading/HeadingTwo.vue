<script setup lang="ts">
defineSlots<{
    default(): any
}>()
</script>

<template>
  <h2 class="text-3xl font-bold m-0">
    <slot />
  </h2>
</template>