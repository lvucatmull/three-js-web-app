import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import queryKeys from 'utils/queryKeys';
import { TPokemonData, TPokemonDataList } from 'utils/types';

interface usePokemonQueryProps {
  rowsPerPage: number;
  fetchFunction: (pageParam: number) => Promise<TPokemonDataList>;
}

function usePokemonScrollQuery({rowsPerPage, fetchFunction}: usePokemonQueryProps) {
  const { data, isSuccess, isLoading, isError, error, fetchNextPage, fetchPreviousPage } = useInfiniteQuery<TPokemonDataList>({
    queryKey: [queryKeys.POKEMON_LIST],
    queryFn: ({ pageParam = 0 }) => fetchFunction(pageParam as number),
    refetchOnMount: true,
    refetchOnReconnect: true,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      console.log(`%c [getNextPageParam] lastPage=${lastPage}, allPage=${allPages}`, 'background: red, color: white');
      const nextPage = allPages.length + 1;
      return lastPage?.count === 0 || lastPage?.count < rowsPerPage ? undefined : nextPage;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      console.log(`%c [getPreviousPageParam] firstPage=${firstPage} allPages=${allPages}`, 'background: red, color: white');
      return allPages.length > 0 ? allPages.length - 1 : undefined;
    },
    placeholderData: prevData => {
      console.log(`%c [placeholderData] prevData=${prevData}`, 'background: red, color: white');
      return prevData || { pages: [], pageParams: [] };
    },
  });

  const fetchedData = useMemo(() => {
    let result : Array<TPokemonData> = [];    
    if(isSuccess && data) {
      // return data.pages.flatMap(page => page.results);
      result = data.pages.flatMap(page => {
        console.log(`page : ${page}`);
        return page.results;
      });
      console.log("result : ", result);
    }
    return result;
  }, [data, isSuccess]);

  return { fetchedData, isSuccess, isLoading, isError, error, fetchNextPage, fetchPreviousPage };
}

export default usePokemonScrollQuery;
