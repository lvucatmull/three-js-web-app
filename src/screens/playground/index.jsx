import { QueryClient } from '@tanstack/react-query';
import usePokemonQuery from 'hooks/queries/usePokemon';
import { useMemo, useState } from 'react';
import View from './view';

//Main Page
const PokemonDex = () => {
  const [selected, setSelected] = useState(null);

  console.log('%c main page');

  //useQuery Status!
  //loading : if there's no cached data and no query attempt was finished yet.
  //error : if the query attempt resulted in an error. The corresponding error property has the error received from the attempted fetch
  //success : if the query has received a response with no errors and is ready to display its data.
  //The corresponding data property on the query is the data received from the successful fetch or if the query's enabled property is set to false
  //and has not been fetched yet data is the first initialData supplied to the query on initialization.
  const queryClient = new QueryClient();
  const { data } = usePokemonQuery(queryClient, { page: null }, null);

  const handleSelected = selection => {
    setSelected(selection);
  };

  const fetchedData = useMemo(() => data? data.results : [], [data]);

  return (
    <View
      selected={selected}
      handleSelected={handleSelected}
      posts={fetchedData}
    />
  );
};

export default PokemonDex;
