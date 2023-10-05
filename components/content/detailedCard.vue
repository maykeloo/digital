<script setup lang="ts">
import { Tag } from '~/types/Tags';

withDefaults(defineProps<{
    image?: string | null
    imageAlt?: string 
    imagePosition?: 'top'
    tags: Tag[]
}>(), {
    image: null,
    imageAlt: '',
    imagePosition: 'top'
})

</script>

<template>
  <div class="flex flex-col">
    <NuxtImg
      v-if="image"
      :class="imagePosition"
      :src="image"
      :alt="imageAlt"
      :width="16"
      :height="9"
    />
    <div class="flex gap-2">
      <CardTag v-for="tag in tags" v-bind="tag" :key="tag.content" />
    </div>
    <h1 class="text-red-900">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
  </div>
</template>