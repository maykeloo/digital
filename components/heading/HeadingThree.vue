<script setup lang="ts">
defineSlots<{
    default(): any
}>()
</script>

<template>
  <h3 class="text-3xl font-bold m-0">
    <slot />
  </h3>
</template>