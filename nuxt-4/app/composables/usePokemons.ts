import { useQuery } from '@urql/vue';

// Data load: ~43KB
const PokemonsQuery = `
  query Pokemons {
    pokemon_v2_pokemonspecies(distinct_on: [id], limit: 1000, offset: 0) {
      id
      name
      is_baby
      is_legendary
      is_mythical
      growth_rate_id
      generation_id
      gender_rate
      base_happiness
      capture_rate
      evolution_chain_id
      evolves_from_species_id
      forms_switchable
      has_gender_differences
      hatch_counter
      order
      pokemon_color_id
      pokemon_habitat_id
      pokemon_shape_id
      pokemon_v2_pokemoncolor {
        id
        name
        pokemon_v2_pokemoncolornames {
          id
          language_id
          name
          pokemon_color_id
        }
      }
    }
  }
`;

export function usePokemons() {
  return useQuery({
    query: PokemonsQuery,
  });
}
