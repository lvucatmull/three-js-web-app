import React from 'react';
import styles from 'style/style.module.scss';
import NavHeader from 'component/nav';

const View = ({ selected, handleSelected }) => {
  console.log('[RENDER] MainPage');

  return (
    <div className={styles.container}>
      <NavHeader selected={selected} handleSelected={handleSelected} />
    </div>
  );
};

export default View;
