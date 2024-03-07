export default {
  namespaced: true,
  state: {
    favoritedCards: JSON.parse(localStorage.getItem('favoritedCards') || '[]')
  },
  mutations: {
    addFavoriteCard(state: any, card: any) {
      state.favoritedCards.push(card);
      localStorage.setItem('favoritedCards', JSON.stringify(state.favoritedCards));
    },
    removeFavoriteCard(state: any, cardId: number) {
      state.favoritedCards = state.favoritedCards.filter((card: any) => card.id !== cardId);
      localStorage.setItem('favoritedCards', JSON.stringify(state.favoritedCards));
    },
    reset(state: any) {
      state.favoritedCards = [];
    }
  },
  actions: {
    addFavoriteCard({ commit }: any, card: any) {
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
