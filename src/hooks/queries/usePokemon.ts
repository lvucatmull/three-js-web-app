import { QueryClient, useQuery } from '@tanstack/react-query';
import { initAxios } from '../../utils/fetch';
import queryKeys from '../../utils/queryKeys';
import { TPageInfo, TSortInfo } from '../../utils/types/common';
import { LogServiceType } from '../../utils/types/logType';

const pokemonAxios = initAxios(LogServiceType.POKEMON);

export function getPokemonQueryObject(
  queryClient: QueryClient,
  pageInfo: TPageInfo,
  sortInfo: TSortInfo
) {
  const { page } = pageInfo;

  const offset = page ? 8 * page : 0;
  const limit = page ? 8 * page + 1 : 100;

  const getPokeList = () => {
    return pokemonAxios.get(
      `http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
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
    queryFn: fetchPosts,
    // refetchIntervalInBackground: false,
    // refetchOnWindowFocus: false,
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
      return data;
    },
  };
}

const usePokemonQuery = (
  queryClient: QueryClient,
  pageInfo: TPageInfo,
  sortInfo: TSortInfo
) => {
  console.log('usePokemonQuery');
  return useQuery(getPokemonQueryObject(queryClient, pageInfo, sortInfo));
};

export default usePokemonQuery;
