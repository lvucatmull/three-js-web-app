import DefaultButton from "component/Buttons/DefaultButton";
import LNB from "component/LNB";
import Typography from "component/Typography";
import React from "react";
import Gallery from "screens/gallery";
import { ContentBlock, Contents } from "style/design/common";
import { Body } from "style/design/common";
import baseLogo from "images/3d-vector-logo.png";
import styles from "style/screen/main.scss";

const View = ({
  renderType = null,
  sceneNum = null,
  handleClickType,
  handleClickScene,
}) => {
  console.log("[RENDER] MainPage");
  return (
    <>
      <nav className={styles.navHeader}>
        <img src={baseLogo} alt="" width="100" height="55" />
        <ul>
          <li>
            <a href="/Introduction">About Me</a>
          </li>
          <li>
            <a href="/Introduction">Portfolio</a>
          </li>
        </ul>
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
