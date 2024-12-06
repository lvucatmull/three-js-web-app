import { QueryClient, useQuery } from '@tanstack/react-query';
import { initAxios } from '../../utils/fetch';
import queryKeys from '../../utils/queryKeys';
import { PageInfoType, SortInfoType } from '../../utils/types/commonType';
import { LogServiceType } from '../../utils/types/logType';

const pokemonAxios = initAxios(LogServiceType.POKEMON);

export function getPokemonQueryObject(
  queryClient: QueryClient,
  pageInfo: PageInfoType,
  sortInfo: SortInfoType
) {
  const { page } = pageInfo;

  const offset = page ? 8 * page : 0;
  const limit = page ? 8 * page + 1 : 100;

  const getPokeList = () => {
    // return fetch('http://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    return pokemonAxios.get(
      'http://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };
  const fetchPosts = async () => {
    try {
      const response = await getPokeList();
      return response?.data;
    } catch (e) {
      console.log('fetch error : ', e);
    }
  };

  return {
    queryHash: 'getPokemonQueryObject',
    queryKey: [queryKeys.POKEMON_LIST, page],
    queryFn: () => fetchPosts(),
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    placeholderData: () => {
      return queryClient.getQueryData([queryKeys.POKEMON_LIST]);
    },
    onSuccess(data: Map<String, Object>) {
      console.log(
        `%c [Debug Fetch USEQUERY] onSuccess getPokemonQueryObject ${data}`,
        'background: #ff0ff0; color: #000000; font-size:15px'
      );
    },
  };
}

const usePokemonQuery = (
  queryClient: QueryClient,
  pageInfo: PageInfoType,
  sortInfo: SortInfoType
) => useQuery(getPokemonQueryObject(queryClient, pageInfo, sortInfo));

export default usePokemonQuery;
