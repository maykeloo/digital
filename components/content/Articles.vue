<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps<{
  path: string
}>()

const { data: _articles } = await useAsyncData(() => queryContent(withTrailingSlash(props.path)).where({layout: 'article'}).skip(1).find())
const articles = computed(() => _articles.value || [])
</script>

<template>
  <div v-if="articles.length" class="grid gap-x-5 gap-y-20 grid-cols-3">
    <DetailedCard v-for="article in articles" :key="article._id" :article="article" />
  </div>
</template>