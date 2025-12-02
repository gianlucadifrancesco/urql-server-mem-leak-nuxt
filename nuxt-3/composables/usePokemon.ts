import { useQuery } from '@urql/vue';

const PokemonQueryDocument = `
  query Pokemon($id: Int!) {
    pokemon_v2_pokemonspeciesname_by_pk(id: $id) {
      genus
      id
      language_id
      name
      pokemon_species_id
    }
  }
`;

export function usePokemon(id: MaybeRef<number>) {
  return useQuery({
    query: PokemonQueryDocument,
    variables: computed(() => ({
      id: unref(id),
    })),
  });
}
