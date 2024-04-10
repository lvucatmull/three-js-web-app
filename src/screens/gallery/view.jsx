import React from "react";
import DefaultButton from "component/DefaultButton";
import Typography from "component/Typography";
import { useNavigate } from "react-router";
import { ContentBlock, Contents, Main } from "style/page/common";
import { Body } from "style/page/common";

const View = ({ sceneNum }) => {
  console.log("[Gallery] scene number : ", sceneNum);
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <Body>
          <Contents>
            {sceneNum === 1 && (
              <ContentBlock>
                <DefaultButton
                  $primary
                  onClick={() => {
                    navigate("/threeOrbit");
                  }}
                >
                  Load Scene
                </DefaultButton>
              </ContentBlock>
            )}
            {sceneNum === 2 && <Typography>Scene 2</Typography>}
            {sceneNum === 3 && <Typography>Scene 3</Typography>}
          </Contents>
        </Body>
      </Main>
    </>
  );
};

export default View;
