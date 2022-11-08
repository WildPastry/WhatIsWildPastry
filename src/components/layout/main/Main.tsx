import { Outlet } from 'react-router-dom';

const Main: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Main Section' className='container-fluid'>
      <Outlet />
    </section>
  );
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
