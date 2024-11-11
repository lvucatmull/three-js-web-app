import { useState } from 'react';
import View from './view';

//Main Page
const ResumePage = () => {
  const [selected, setSelected] = useState(null);

  console.log("/main page");

  const handleSelected = selection => {
    setSelected(selection);
  };

  let answer = 0;
  
  return <View selected={selected} handleSelected={handleSelected} answer={answer} />;
};

export default ResumePage;
