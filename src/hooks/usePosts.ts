import { ref } from 'vue';

export default function usePosts(page: number = 1) {
  interface Post {
    title: string;
    id: number;
    body: string;
  }

  const posts = ref<Post[]>([]);
  const loading = ref<boolean>(true);
  const error = ref<boolean>(false);

  async function fetchPosts() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await response.json();
      posts.value = [...posts.value, ...data];
      // variavel de controle da página atual.
      page++;
      loading.value = false;
    } catch (err) {
      console.error('Erro ao carregar os dados:', error);
      loading.value = false;
      error.value = true;
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    error,
    posts,
    fetchPosts
  };
}
