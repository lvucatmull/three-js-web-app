import React from "react";
import DefaultButton from "component/Buttons/DefaultButton";
import Typography from "component/Typography";
import { useNavigate } from "react-router";
import { ContentBlock, Contents, Main } from "style/design/common";
import SponzaScene from "component/3DScenes/Sponza";
import { OrbitControls } from "@react-three/drei";

const View = ({ sceneNum }) => {
  console.log("[Gallery] scene number : ", sceneNum);
  const navigate = useNavigate();
  return (
    <>
      {sceneNum === 1 && <OrbitControls />}
      {sceneNum === 2 && <SponzaScene />}
      {sceneNum === 3 && <SponzaScene />}
    </>
  );
};

export default View;
