import NavHeader from 'component/nav';
import styles from 'style/style.module.scss';

//Main Page
const View = ({ selected, handleSelected, answer }) => {
  console.log('[RENDER] MainPage');

  return (
    <div className={styles.container}>
      <NavHeader selected={selected} handleSelected={handleSelected} />
      <div className={styles.body}>
        <div className={styles.contents}>
          <div className={styles.contentsBlock}>
            <span className={styles.btnSelection}>
              <p style={{fontSize: 15}}> Answer is ${answer} </p>
            </span>
            <span className={styles.btnSelection}>
              <p style={{fontSize: 15}}> Answer is ${answer} </p>
            </span>
            <span className={styles.btnSelection}>
              <p style={{fontSize: 15}}> Answer is ${answer} </p>
            </span>
            <span className={styles.btnSelection}>
              <p style={{fontSize: 15}}> Answer is ${answer} </p>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
