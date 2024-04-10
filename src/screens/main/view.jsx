import DefaultButton from "component/DefaultButton";
import LNB from "component/LNB";
import Typography from "component/Typography";
import React from "react";
import Gallery from "screens/gallery";
import { ContentBlock, Contents } from "style/page/common";
import { Body } from "style/page/common";
import baseLogo from "images/3d-vector-logo.png";
// import styles from "style/style.module.scss";

const View = ({ sceneNum = null, handleClickScene }) => {
  console.log("[RENDER] MainPage");
  return (
    <>
      <nav
        style={{
          background: "#5568af",
          display: "flex",
          gap: "100px",
        }}
      >
        {/* <picture>
            <source
              media="(max-width:767px)"
              width="100"
              height="55"
              srcset="images/3d-logo.webp"
              type="image/webp"
            />
          </picture> */}
        <img src={baseLogo} alt="" width="100" height="55" />
        {/* <DefaultButton>
          <Typography p2 white>
            Frontend
          </Typography>
        </DefaultButton>
        <DefaultButton>
          <Typography p2>Frontend</Typography>
        </DefaultButton>
        <DefaultButton>
          <Typography p2 white>
            Frontend
          </Typography>
        </DefaultButton> */}
      </nav>

      <Body>
        <LNB>
          <Typography> Scenes</Typography>
        </LNB>
        <Contents>
          <ContentBlock>
            <DefaultButton
              $clicked={sceneNum === 1}
              value={1}
              onClick={handleClickScene}
            >
              {/* <button 
              className={styles.btnMain}
              value={1}
              onClick={handleClickScene}
            > */}
              {/* <p>Three.js</p> */}
              <Typography p2 white>
                Three.js
              </Typography>
              {/* </button> */}
            </DefaultButton>
            <DefaultButton
              $clicked={sceneNum === 2}
              value={2}
              onClick={handleClickScene}
            >
              {/* <button
              className={styles.btnPrimary}
              value={2}
              onClick={handleClickScene}
            > */}
              {/* <p>WebGL</p> */}
              <Typography p2 white>
                WebGL
              </Typography>
            </DefaultButton>
            {/* </button> */}
          </ContentBlock>
          <ContentBlock></ContentBlock>
          <ContentBlock>
            <Gallery sceneNum={sceneNum} />
          </ContentBlock>
        </Contents>
      </Body>
    </>
  );
};

export default View;
