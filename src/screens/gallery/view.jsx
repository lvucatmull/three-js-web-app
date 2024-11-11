import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router';
import BoxRotation from 'scenes/BoxRotation';
import SponzaScene from 'scenes/SponzaScene';
import WebGLContext from 'scenes/WebGL';

const View = ({ sceneNum }) => {
  console.log('[Gallery] scene number : ', sceneNum);
  const navigate = useNavigate();
  return (
    <>
      {sceneNum === 1 && <OrbitControls />}
      {sceneNum === 2 && <SponzaScene />}
      {sceneNum === 3 && <BoxRotation />}
      {sceneNum === 4 && <WebGLContext />}
    </>
  );
};

export default View;
