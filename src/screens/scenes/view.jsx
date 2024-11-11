import DefaultButton from 'component/Buttons/DefaultButton';
import Typography from 'component/Typography';
import NavHeader from 'component/nav';
import Gallery from 'screens/gallery';
import styles from 'style/style.module.scss';

const View = ({
  renderType = null,
  sceneNum = null,
  handleClickType,
  handleClickScene,
}) => {
  console.log('[RENDER] MainPage');
  return (
    <div className={styles.container}>
      <NavHeader />

      <div className={styles.body}>
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

          {renderType === 'webgl' && (
            <div className={styles.contentsBlock}>
              <DefaultButton
                $clicked={sceneNum === 4}
                value={4}
                onClick={handleClickScene}
              >
                <Typography p2 white>
                  WebGL Scene 1
                </Typography>
              </DefaultButton>
              <DefaultButton
                $clicked={sceneNum === 5}
                value={5}
                onClick={handleClickScene}
              >
                <Typography p2 white>
                  WebGL Scene 2
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
