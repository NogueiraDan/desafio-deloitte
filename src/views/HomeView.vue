<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import Card from '@/components/Card.vue';
import usePosts from '@/hooks/usePosts';

const { error, fetchPosts, loading, posts } = usePosts();

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchPosts();
    console.log('Refetching posts...');
  }
};
window.addEventListener('scroll', handleScroll);

onMounted(() => {
  fetchPosts();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main class="flex flex-col items-center pt-3 w-auto">
    <header>
      <h1 class="text-3xl font-bold mb-5">Infinite Scroll - Deloitte</h1>
    </header>
    <div v-if="loading" class="text-xl font-bold my-5" aria-live="polite">Carregando Posts...</div>
    <div v-if="error" class="text-xl font-bold my-5" aria-live="assertive">
      Ops, parece que algo deu errado...
    </div>
    <section v-else class="w-auto flex flex-row flex-wrap gap-5 items-start justify-center">
      <article v-for="post in posts" :key="post.id" class="lg:w-[25%] w-[80%] sm:mx-0 mx-4 mb-5">
        <Card :title="post.title" :id="post.id" :body="post.body" :listItem="true" />
      </article>
    </section>
  </main>
</template>
