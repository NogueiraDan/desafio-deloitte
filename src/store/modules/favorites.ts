import type { Card } from '@/@types';

export default {
  namespaced: true,
  state: {
    favoritedCards: JSON.parse(localStorage.getItem('favoritedCards') || '[]')
  },
  mutations: {
    addFavoriteCard(state: any, card: Card) {
      state.favoritedCards.push(card);
      localStorage.setItem('favoritedCards', JSON.stringify(state.favoritedCards));
    },
    removeFavoriteCard(state: any, cardId: number) {
      state.favoritedCards = state.favoritedCards.filter((card: Card) => card.id !== cardId);
      localStorage.setItem('favoritedCards', JSON.stringify(state.favoritedCards));
    },
    reset(state: any) {
      state.favoritedCards = [];
    }
  },
  actions: {
    addFavoriteCard({ commit }: any, card: Card) {
      commit('addFavoriteCard', card);
    },
    removeFavoriteCard({ commit }: any, cardId: number) {
      commit('removeFavoriteCard', cardId);
    },
    reset({ commit }: any) {
      commit('reset');
    }
  },
  getters: {
    favorites: (state: any) => state.favoritedCards
  }
};
