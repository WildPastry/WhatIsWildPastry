import { Outlet } from 'react-router-dom';
import styles from './Main.module.scss';

const Main: React.FC = (): JSX.Element => {
  return (
    <section
      aria-label='Main Section'
      className={`${styles.main} container-fluid`}>
      <Outlet />
    </section>
  );
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
