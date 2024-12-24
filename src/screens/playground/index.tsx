import useIntersectionObserver from 'hooks/intersection';
import usePokemonScrollQuery from 'hooks/queries/usePokemonInfinite';
import { useEffect, useRef, useState } from 'react';
import { FETCH_BLOCK_SIZE } from 'utils/constant';
import { initAxios } from 'utils/fetch';
import { LogServiceType, TPokemonDataList } from 'utils/types';
import View from './view';

//PokemonDex Page
const PokemonDex = () => {
  const [selected, setSelected] = useState(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  console.log('> [CONTAINER] playground page');

  /****************************************************************
  *                   UseInfiniteQuery
  *****************************************************************/
  const pokemonAxios = initAxios(LogServiceType.POKEMON);

  const fetchPokemonList = async (pageParam: number) => {
    let responseData : TPokemonDataList = {
      count: 0,
      results: [],
    }
    const offset = pageParam * FETCH_BLOCK_SIZE;
    const limit = FETCH_BLOCK_SIZE;
    try {
      const response = await pokemonAxios.get(
        `http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      responseData = response?.data;
    } catch (e) {
      console.log('fetch error : ', e);
    }
    return responseData;
  };

  const { fetchedData, isLoading, isError, error, fetchNextPage } = usePokemonScrollQuery({
    rowsPerPage: 8,
    fetchFunction: (pageParam: number) => fetchPokemonList(pageParam),
  });

  if (isError && error) {
    console.log('Data Fetching Error');
  }

  const handleSelected = (selection: any) => {
    setSelected(selection);
  };

  /****************************************************************
  *                   IntersectionObserver
  *****************************************************************/
  const handleLoadMore = () => {
    fetchNextPage();
  };

  const [observe, unobserve] = useIntersectionObserver(handleLoadMore, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  useEffect(() => {
    const element = loadMoreRef.current;
    if (element) {
      observe(element);
    }

    return () => {
      if (element) {
        unobserve(element);
      }
    };
  }, [observe, unobserve]);

  return (
    <div>
        <View
          selected={selected}
          handleSelected={handleSelected}
          posts={fetchedData}
          loadMoreRef={loadMoreRef}
        />
    </div>
  );
};

export default PokemonDex;
