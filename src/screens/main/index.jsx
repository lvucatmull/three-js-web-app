import React, { useState } from 'react';
import View from './view';

const MainPage = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = selection => {
    setSelected(selection);
  };

  return <View selected={selected} handleSelected={handleSelected} />;
};

export default MainPage;
