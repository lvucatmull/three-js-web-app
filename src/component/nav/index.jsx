import React from 'react';
import Typography from 'component/Typography';
import styles from 'style/style.module.scss';
import { NameLogoVector } from 'images';

const NavHeader = ({ selected, setSelected }) => {
  return (
    <div className={styles.nav}>
      {/* <picture className={styles.mainLogoImage}>
          <src type="image/png" srcset={baseLogo} />
          <img src={baseLogo} alt="" className={styles.mainLogoImage} />
        </picture> */}
      <img src={NameLogoVector} alt="" className={styles.navLogo} />
      <ul className={styles.navBar}>
        <li>
          <a href="/main">
            <Typography p2 white>
              About Me
            </Typography>
          </a>
        </li>
        <li>
          <a href="/portfolio">
            <Typography p2 white>
              Portfolio
            </Typography>
          </a>
        </li>
        <li>
          <a href="/graphics">
            <Typography p2 white>
              3D Graphics
            </Typography>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavHeader;
