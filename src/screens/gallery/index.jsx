import React from 'react';
import View from './view';
import { checkWebGLCompatibility } from 'utils/webgl';

const Gallery = ({ sceneNum }) => {
  checkWebGLCompatibility();
  return <View sceneNum={sceneNum} />;
};

export default Gallery;
