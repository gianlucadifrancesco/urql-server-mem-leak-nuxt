<script setup lang="ts">
import { usePokemons } from '~/composables/usePokemons';

const { data } = await usePokemons();

watchEffect(() => {
  console.log(
    'Pokemons response:',
    data.value?.pokemon_v2_pokemonspecies.length,
  );
});

const pokemonsList = computed<{ id: number; name: string }[] | undefined>(
  () => data.value?.pokemon_v2_pokemonspecies || [],
);
</script>

<template>
  <div :style="{ padding: 20 }">
    <button type="button">Manual Refetch</button>
    <h1>Pokemons: {{ pokemonsList?.length }}</h1>

    <!-- <div
      :style="{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: '10px',
        marginTop: '20px',
      }"
    >
      <NuxtLink
        v-for="pokemon in pokemonsList"
        :key="pokemon.id"
        :to="`/${pokemon.id}`"
      >
        <div
          :style="{
            padding: '5px 10px',
            border: '1px solid #292929',
            borderRadius: '10px',
          }"
        >
          <strong>{{ pokemon.name }}</strong>
        </div>
      </NuxtLink>
    </div> -->
  </div>
</template>
