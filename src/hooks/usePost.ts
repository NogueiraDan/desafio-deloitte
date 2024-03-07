import { ref } from 'vue';

export default function usePost(id: number) {
  const post = ref({
    title: '',
    id: 0,
    body: ''
  });

  const loading = ref<boolean>(true);
  const error = ref<boolean>(false);

  async function fetchPost() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      post.value = data;
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
    post,
    loading,
    error,
    fetchPost
  };
}
