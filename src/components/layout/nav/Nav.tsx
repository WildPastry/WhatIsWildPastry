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
          <span className={styles.nav__link}>HOME</span>
        </Link>
        <Link to='/pages/project'>
          <span className={styles.nav__link}>RANDOM</span>
        </Link>
        <Link to='/pages/about'>
          <span className={styles.nav__link}>ABOUT</span>
        </Link>
      </nav>
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
