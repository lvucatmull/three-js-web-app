import React, { useCallback, useState } from 'react';
import View from './view';

const GalleryPage = () => {
  const [renderType, setRenderType] = useState(null);
  const [sceneNum, setSceneNum] = useState(-1);

  const handleClickType = useCallback(
    event => {
      if (event.currentTarget.value) {
        const val = event.currentTarget.value;
        setRenderType(prev => {
          return prev === val ? null : val;
        });
      }
      event.stopPropagation();
    },
    [setSceneNum],
  );

  const handleClickScene = useCallback(
    event => {
      if (event.currentTarget.value) {
        const val = Number(event.currentTarget.value);
        setSceneNum(prev => {
          return prev === val ? -1 : val;
        });
      }
      event.stopPropagation();
    },
    [setSceneNum],
  );

  return (
    <View
      renderType={renderType}
      sceneNum={sceneNum}
      handleClickType={handleClickType}
      handleClickScene={handleClickScene}
    />
  );
};

export default GalleryPage;
