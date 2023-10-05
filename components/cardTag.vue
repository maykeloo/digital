<script setup lang="ts">
import { TAG, Tag } from '~/types/Tags'

const props = defineProps<Tag>()

const switchAppearance = computed(() => {
  switch (props.type) {
    case TAG.WEB:
      return 'bg-red-200 text-black'
    case TAG.NEW:
      return 'bg-blue-200 text-black'
    default:
      return 'bg-red-200 text-black'
  }
})
</script>

<template>
  <div class="px-4 py-2 rounded-full " :class="switchAppearance">
    {{ content }}
  </div>
</template>