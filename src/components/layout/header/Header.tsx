import Theme from '../../features/theme/Theme';
import styles from './Header.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header
      aria-label='Header Section'
      className={`${styles.header} container-fluid`}>
      <h3>HEADER</h3>
      <Theme />
    </header>
  );
};

// EXPORT Header
Header.displayName = 'WILDPASTRY | Header';
export default Header;
