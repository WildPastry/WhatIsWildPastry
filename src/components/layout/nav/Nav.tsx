import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav: React.FC = (): JSX.Element => {
  return (
    <section
      aria-label='Navigation Section'
      className={`${styles.nav} container-fluid`}>
      <div aria-label='Navigation Brand'>
        <Link to='/'>
          <h5 className={styles.nav__brand}>WILDPASTRY</h5>
        </Link>
      </div>
      <nav aria-label='Navigation Links'>
        <Link to='/'>
          <a className={styles.nav__link}>HOME</a>
        </Link>
        <Link to='/pages/project'>
          <a className={styles.nav__link}>RANDOM</a>
        </Link>
        <Link to='/pages/about'>
          <a className={styles.nav__link}>ABOUT</a>
        </Link>
      </nav>
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
