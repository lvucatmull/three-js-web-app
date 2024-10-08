import { useState } from 'react';
import View from './view';

//Main Page
const MainPage = () => {
  const [selected, setSelected] = useState(null);

  console.log("/main page");

  const handleSelected = selection => {
    setSelected(selection);
  };

  let answer = 0;
  
  function findseven(nine, ) {
    
  }
  
  return <View selected={selected} handleSelected={handleSelected} answer={answer} />;
};

export default MainPage;
