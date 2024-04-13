import DefaultButton from "component/Buttons/DefaultButton";
import LNB from "component/LNB";
import Typography from "component/Typography";
import React from "react";
import Gallery from "screens/gallery";
import { ContentBlock, Contents } from "style/page/common";
import { Body } from "style/page/common";
import baseLogo from "images/3d-vector-logo.png";
import LinkButton from "component/LinkButton";

const View = ({
  renderType = null,
  sceneNum = null,
  handleClickType,
  handleClickScene,
}) => {
  console.log("[RENDER] MainPage");
  return (
    <>
      <nav
        style={{
          background: "#5568af",
          display: "flex",
          gap: "50px",
        }}
      >
        <img src={baseLogo} alt="" width="100" height="55" />
        <LinkButton>
          <Typography p2 white>
            경력
          </Typography>
        </LinkButton>
        <Typography p2 white>
          포트폴리오
        </Typography>
      </nav>

      <Body>
        <LNB>
          <Typography> Scenes </Typography>
        </LNB>
        <Contents>
          <ContentBlock>
            <DefaultButton
              $clicked={renderType === "react-three"}
              value={"react-three"}
              onClick={handleClickType}
            >
              <Typography p2 white>
                react-three
              </Typography>
            </DefaultButton>
            <DefaultButton
              $clicked={renderType === "three"}
              value={"three"}
              onClick={handleClickType}
            >
              <Typography p2 white>
                Three.js
              </Typography>
            </DefaultButton>
            <DefaultButton
              $clicked={renderType === "webgl"}
              value={"webgl"}
              onClick={handleClickType}
            >
              <Typography p2 white>
                WebGL
              </Typography>
            </DefaultButton>
          </ContentBlock>

          {renderType === "react-three" && (
            <ContentBlock>
              <DefaultButton
                $clicked={sceneNum === 1}
                value={1}
                onClick={handleClickScene}
              >
                <Typography p2 white>
                  ThreeBody
                </Typography>
              </DefaultButton>
            </ContentBlock>
          )}
          {renderType === "three" && (
            <ContentBlock>
              <DefaultButton
                $clicked={sceneNum === 2}
                value={2}
                onClick={handleClickScene}
              >
                <Typography p2 white>
                  Sponza
                </Typography>
              </DefaultButton>
              <DefaultButton
                $clicked={sceneNum === 3}
                value={3}
                onClick={handleClickScene}
              >
                <Typography p2 white>
                  Particles
                </Typography>
              </DefaultButton>
            </ContentBlock>
          )}

          <ContentBlock>
            <Gallery sceneNum={sceneNum} />
          </ContentBlock>
        </Contents>
      </Body>
    </>
  );
};

export default View;
