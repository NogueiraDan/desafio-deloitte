<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  title: String,
  id: Number,
  body: String,
  listItem: { type: Boolean, default: false }
});

interface Card {
  id: number;
  title: string;
  body: string;
  listItem: boolean;
}

const store = useStore();

const isFavorited = (id: number | undefined): boolean => {
  return store.state?.favorites?.favoritedCards?.some((card: Card) => card.id === id);
};

function toogleFavorite() {
  const cardData = {
    id: props.id,
    body: props.body,
    title: props.title,
    listItem: props.listItem
  };

  if (isFavorited(cardData.id)) {
    store.dispatch('favorites/removeFavoriteCard', cardData.id);
  } else {
    store.dispatch('favorites/addFavoriteCard', cardData);
  }
}
</script>

<template>
  <v-card
    class="w-[100%] h-auto min-h-[300px] text-center"
    :title="props.title"
    :subtitle="props.id"
    :text="props.body"
  >
    <v-card-actions class="text-center gap-5 flex justify-center">
      <v-btn v-if="props.listItem" color="#26890d">
        <RouterLink :to="`/post/${props.id}`">Ler mais...</RouterLink>
      </v-btn>
      <button class="w-auto" @click="toogleFavorite">
        {{ isFavorited(props.id) ? '💚​' : '🖤​' }}
      </button>
    </v-card-actions>
  </v-card>
</template>
