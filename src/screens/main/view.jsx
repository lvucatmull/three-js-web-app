import DefaultButton from 'component/Buttons/DefaultButton';
import LNB from 'component/LNB';
import Typography from 'component/Typography';
import React from 'react';
import Gallery from 'screens/gallery';
import { ContentBlock, Contents } from 'style/design/common';
import { Body } from 'style/design/common';
import baseLogo from 'images/3d-vector-logo.png';
import styles from 'style/style.module.scss';

const View = ({
  renderType = null,
  sceneNum = null,
  handleClickType,
  handleClickScene,
}) => {
  console.log('[RENDER] MainPage');
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainHeader}>
        <img src={baseLogo} alt="" className={styles.mainLogoImage} />
        <ul>
          <li>
            <a href="/Introduction">About Me</a>
          </li>
          <li>
            <a href="/Introduction">Portfolio</a>
          </li>
        </ul>
      </div>

      <div className={styles.mainBody}>
        <div className={styles.lnb}>
          <Typography p2 white>
            Scenes
          </Typography>
        </div>
        <div className={styles.contents}>
          <div className={styles.contentsBlock}>
            <DefaultButton
              $clicked={renderType === 'react-three'}
              value={'react-three'}
              onClick={handleClickType}
            >
              <Typography p2 white>
                react-three
              </Typography>
            </DefaultButton>
            <DefaultButton
              $clicked={renderType === 'three'}
              value={'three'}
              onClick={handleClickType}
            >
              <Typography p2 white>
                Three.js
              </Typography>
            </DefaultButton>
            <DefaultButton
              $clicked={renderType === 'webgl'}
              value={'webgl'}
              onClick={handleClickType}
            >
              <Typography p2 white>
                WebGL
              </Typography>
            </DefaultButton>
          </div>

          {renderType === 'react-three' && (
            <div className={styles.contentsBlock}>
              <DefaultButton
                $clicked={sceneNum === 1}
                value={1}
                onClick={handleClickScene}
              >
                <Typography p2 white>
                  ThreeBody
                </Typography>
              </DefaultButton>
            </div>
          )}
          {renderType === 'three' && (
            <div className={styles.contentsBlock}>
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
            </div>
          )}

          <div className={styles.contentsBlock}>
            <Gallery sceneNum={sceneNum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
