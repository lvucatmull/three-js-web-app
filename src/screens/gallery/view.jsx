import React from 'react';
import { useNavigate } from 'react-router';
import SponzaScene from 'scenes/SponzaScene';
import { OrbitControls } from '@react-three/drei';
import BoxRotation from 'scenes/BoxRotation';

const View = ({ sceneNum }) => {
  console.log('[Gallery] scene number : ', sceneNum);
  const navigate = useNavigate();
  return (
    <>
      {sceneNum === 1 && <OrbitControls />}
      {sceneNum === 2 && <SponzaScene />}
      {sceneNum === 3 && <BoxRotation />}
      {/* {sceneNum === 4 && <SkyBox />} */}
    </>
  );
};

export default View;
