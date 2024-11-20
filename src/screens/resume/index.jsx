import { useState } from 'react';
import View from './view';

//Main Page
const ResumePage = () => {
  const [selected, setSelected] = useState(null);

  console.log("/main page");

  const handleSelected = selection => {
    setSelected(selection);
  };
  
  
  return <View selected={selected} handleSelected={handleSelected} />;
};

export default ResumePage;
