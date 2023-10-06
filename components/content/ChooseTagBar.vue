<script setup lang="ts">
const { data: tags } = await useAsyncData(() => queryContent().where({ _partial: true }).find())
</script>

<template>
  <div class="flex gap-4 my-12">
    <NuxtLink v-for="tag in tags" :key="tag._id" :to="tag._path">
      <div class="rounded-full px-4 py-3 border-2 min-w-[150px] flex items-center justify-center border-blue-950">
        <span>{{ tag.title }}</span>
      </div>
    </NuxtLink>
  </div>
</template>