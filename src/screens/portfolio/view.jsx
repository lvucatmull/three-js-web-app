import Typography from 'component/Typography';
import React from 'react';
import { MainLogoVector } from 'images';
import styles from 'style/style.module.scss';
import NavHeader from 'component/nav';

const View = () => {
  console.log('[RENDER] MainPage');
  return (
    <div className={styles.container}>
      <NavHeader />

      <div className={styles.body}></div>
    </div>
  );
};

export default View;
