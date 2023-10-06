<script setup lang="ts">
defineSlots<{
    default(): any
}>()
</script>

<template>
  <h5 class="text-3xl font-bold m-0">
    <slot />
  </h5>
</template>