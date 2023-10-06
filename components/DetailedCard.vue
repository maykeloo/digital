<script setup lang="ts">
import {DetailedCard} from '~/types/Article';

defineProps<{article: DetailedCard}>()
</script>

<template>
  <article
    v-if="article._path && article.title"
    class="flex flex-col w-full"
  >
    <NuxtLink :to="article._path">
      <NuxtImg
        v-if="article.cover"
        class="w-full aspect-video rounded-lg mb-3"
        :class="imagePosition"
        :src="article.cover"
        :alt="imageAlt"
      />
      <div v-if="article.tags?.length" class="flex gap-2">
        <CardTag v-for="tag in article.tags" v-bind="tag" :key="tag.content" />
      </div>
      <div class="flex flex-col gap-2 mt-3">
        <HeadingOne>{{ article.title }}</HeadingOne>
        <p>
          {{ article.description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
