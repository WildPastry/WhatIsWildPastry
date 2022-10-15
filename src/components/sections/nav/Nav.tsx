import styles from './Nav.module.scss';

const Nav: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Navigation Section' className={styles.nav}>
      Nav
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
