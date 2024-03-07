<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav class="w-full bg-[#161616] h-[48px] flex items-center justify-center gap-5">
      <v-btn color="#26890d" size="small">
        <RouterLink to="/">Página inicial​</RouterLink>
      </v-btn>
      <v-btn color="#26890d" size="small">
        <RouterLink to="/favorites">Favoritos</RouterLink>
      </v-btn>
    </nav>
  </header>
</template>
