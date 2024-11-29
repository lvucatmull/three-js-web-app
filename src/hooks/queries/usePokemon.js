import { fetchDataWithQuery } from 'utils/api';
import { queryKeys } from "utils/queryKeys";

export function getPokemonQueryObject(queryClient, page) {
  return {
    queryHash: 'getPokemonQueryObject',
    queryKey: [queryKeys.POKEMON_LIST, page],
    queryFn: () => fetchDataWithQuery('GET', 'http://pokeapi.co/api/v2/pokemon?limit=100&offset=0'),
    // refetchInterval: () => (store.influxStore.getIsDelayActive() ? store.influxStore.getDelay() * 1000 : false),
    // refetchIntervalInBackground: false,
    // refetchOnWindowFocus: false,
    // refetchOnMount: true,
    refetchOnReconnect: true,
    placeholderData: () => {
      return queryClient.getQueryData([queryKeys.USER_ACCESS_CLIENT_DATA]);
    },
    onSuccess(data) {
      console.log(
        '%c [Debug Fetch USEQUERY] onSuccess getPokemonQueryObject',
        'background: #ff0ff0; color: #000000; font-size:15px',
      );
    },
  };
}