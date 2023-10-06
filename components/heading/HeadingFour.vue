<script setup lang="ts">
defineSlots<{
    default(): any
}>()
</script>

<template>
  <h4 class="text-3xl font-bold m-0">
    <slot />
  </h4>
</template>