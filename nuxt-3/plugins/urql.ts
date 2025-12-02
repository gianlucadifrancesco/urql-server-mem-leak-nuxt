import {
  cacheExchange,
  createClient,
  fetchExchange,
  type SSRData,
  ssrExchange,
} from '@urql/vue';

const SSR_KEY = '__URQL_DATA__';

export default defineNuxtPlugin((nuxtApp) => {
  const ssr = ssrExchange({ isClient: import.meta.client });

  // when the app is created in the browser, restore SSR state from nuxt payload
  if (import.meta.client) {
    nuxtApp.hook('app:created', () => {
      ssr.restoreData(nuxtApp.payload[SSR_KEY] as SSRData);
    });
  }

  // when the app has rendered on the server, send SSR state to the client
  if (import.meta.server) {
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload[SSR_KEY] = ssr.extractData();
    });
  }

  const apiClient = createClient({
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    exchanges: [cacheExchange, ssr, fetchExchange],
    // requestPolicy: 'cache-and-network',
    preferGetMethod: false,
  });

  /**
   * This is necessary for urql composables to inject the client
   */
  nuxtApp.vueApp.provide('$urql', shallowRef(apiClient));

  return { provide: { apiClient } };
});
