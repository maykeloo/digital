<script setup lang="ts">
const { data: article } = await useAsyncData(() => queryContent('/articles').where({layout: 'article'}).findOne())
</script>

<template>
  <NuxtLink v-if="article && article._path && article.title" :to="article._path">
    <article
      class="flex w-full my-12 gap-6 p-8 bg-black/20 rounded-2xl"
    >
      <NuxtImg
        v-if="article.cover"
        class=" aspect-video rounded-lg mb-3 w-[400px]"
        :class="imagePosition"
        :src="article.cover"
        :alt="imageAlt"
      />
      <div class="flex flex-col">
        <div v-if="article.tags?.length" class="flex gap-2">
          <CardTag v-for="tag in article.tags" v-bind="tag" :key="tag.content" />
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <HeadingOne>{{ article.title }}</HeadingOne>
          <p>
            {{ article.description }}
          </p>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
