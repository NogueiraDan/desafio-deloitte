<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from '@/components/Card.vue';
import type { Post } from '@/@types';


const favorites = ref<Post[]>([]);

onMounted(() => {
  const existingFavorites = JSON.parse(localStorage.getItem('favoritedCards') || '[]');
  favorites.value = existingFavorites;
});
</script>

<template>
  <main class="flex flex-col items-center pt-5 w-auto">
    <header class="mb-5 flex items-center justify-center flex-col gap-3">
      <h1 class="text-3xl font-bold">Favoritos</h1>
    </header>

    <section class="w-auto flex flex-row flex-wrap gap-5 items-start justify-center">
      <h2 v-if="favorites.length === 0" class="text-xl font-bold">
        Você não favoritou nenhum Card ainda!
      </h2>
      <article
        v-for="post in favorites"
        :key="post.id"
        class="lg:w-[25%] w-[80%] sm:mx-0 mx-4 mb-5"
      >
        <Card :title="post.title" :id="post.id" :body="post.body" :listItem="true" />
      </article>
    </section>
  </main>
</template>
