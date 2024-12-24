import NavHeader from 'component/nav';
import styles from 'style/style.module.scss';
import './style.scss';

//Main Page
const View = (selected, handleSelected) => {
  console.log('[RENDER] MainPage');

  return (
    <div className={styles.container}>
      <NavHeader selected={selected} handleSelected={handleSelected} />
      <div className={styles.body}>
        <div className={styles.contents}>
          <div className={styles.contentsBlock}>
            <h1>RESUME</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
