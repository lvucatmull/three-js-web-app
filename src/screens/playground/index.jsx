import { useEffect, useState } from 'react';
import View from './view';

//Main Page
const PokemonDex = () => {
  const [selected, setSelected] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPokeList();
        const data = await response.json();
        setPosts(data.results);
      } catch(e) {
        console.log("fetch error : ", e);
      }
    };
    
    fetchPosts();
  }, []);

  console.log("/main page");

  const handleSelected = selection => {
    setSelected(selection);
  };

  const getPokeList = () => {
    return fetch('http://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  }
  
  return <View selected={selected} handleSelected={handleSelected} posts={posts ? posts : []} />;
};

export default PokemonDex;
