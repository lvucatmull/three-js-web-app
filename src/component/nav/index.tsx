import Typography from 'component/Typography';
import { Rocket } from 'images';
import styles from 'style/style.module.scss';

const NavHeader = (selected: any, setSelected: () => void) => {
  return (
    // <div className={styles.nav}>
    <nav className={styles.nav}>
      {/* <picture className={styles.mainLogoImage}>
          <src type="image/png" srcset={baseLogo} />
          <img src={baseLogo} alt="" className={styles.mainLogoImage} />
        </picture> */}
      <img src={Rocket} alt="" className={styles.navLogo} />
      <ul className={styles.navBar}>
        <li>
          <a href="/resume">
            <Typography p2 white>
              About Me
            </Typography>
          </a>
        </li>
        <li>
          <a href="/playground">
            <Typography p2 white>
              Playground
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
    </nav>
  );
};

export default NavHeader;
