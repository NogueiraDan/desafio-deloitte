import { createStore } from 'vuex';
import favorites from './modules/favorites';

export default createStore({
  modules: {
    favorites
  }
});
