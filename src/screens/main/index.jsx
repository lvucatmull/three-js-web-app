import React, { useCallback, useState } from "react";
import View from "./view";

const MainPage = () => {
  const [sceneNum, setSceneNum] = useState(-1);

  const handleClickScene = useCallback(
    (event) => {
      if (event.currentTarget.value) {
        const val = Number(event.currentTarget.value);
        setSceneNum((prev) => {
          return prev === val ? -1 : val;
        });
      }
      event.stopPropagation();
    },
    [setSceneNum]
  );

  return <View sceneNum={sceneNum} handleClickScene={handleClickScene} />;
};

export default MainPage;
