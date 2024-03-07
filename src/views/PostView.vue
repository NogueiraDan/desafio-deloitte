<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Card from '@/components/Card.vue';
import usePost from '@/hooks/usePost';

const router = useRouter();
const id = router.currentRoute.value.params.id;
// Verificação do tipo para resolver o problema de:
//O argumento do tipo 'string | string[]' não é atribuível ao parâmetro do tipo 'string'
const { error, fetchPost, loading, post } = usePost(parseInt(Array.isArray(id) ? id[0] : id));

onMounted(() => {
  fetchPost();
});
</script>

<template>
  <main class="flex flex-col items-center pt-5 w-auto">
    <h1 class="text-3xl font-bold">Infinite Scroll - Deloitte</h1>
    <div v-if="loading" class="text-xl font-bold my-5">Carregando Posts...</div>
    <div v-if="error" class="text-xl font-bold my-5">Ops, parece que algo deu errado...</div>
    <div v-else class="sm:w-[50%] w-[75%]">
      <Card :title="post.title" :id="post.id" :body="post.body" class="mt-5" />
    </div>
  </main>
</template>
