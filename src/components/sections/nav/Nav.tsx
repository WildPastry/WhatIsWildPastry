import styles from './Nav.module.scss';

const Nav: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Navigation Section' className={styles.nav}>
      <h3>NAV</h3>
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
