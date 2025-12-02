<script setup lang="ts">
const route = useRoute();

const { data, executeQuery } = await usePokemon(Number(route.params.id) || 1);

watchEffect(() => {
  console.log('Pokemon data updated:', !!data.value);
});
</script>

<template>
  <div :style="{ padding: 20 }">
    <div :style="{ marginBottom: '20px' }">
      <NuxtLink to="/pokemons">Go back</NuxtLink>
    </div>

    <button
      type="button"
      @click="executeQuery({ requestPolicy: 'network-only' })"
    >
      Manual Refetch
    </button>

    <h1>Pokemon ID {{ route.params.id }}</h1>

    <div :style="{ marginTop: 20 }">
      <pre :style="{ whiteSpace: 'pre-line' }">
        {{ data }}
      </pre>
    </div>
  </div>
</template>
