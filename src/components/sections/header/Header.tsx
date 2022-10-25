import styles from './Header.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header aria-label='Header Section' className={styles.header}>
      <h3>HEADER</h3>
    </header>
  );
};

// EXPORT Header
Header.displayName = 'WILDPASTRY | Header';
export default Header;
