import { Link, Outlet } from 'react-router-dom';

const Nav: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Navigation Section' className='container-fluid'>
      <Link to='/pages/gallery/'>Gallery</Link>
      <Link to='/pages/project/'>Project</Link>
      <Link to='/pages/about/'>About</Link>
      <Outlet />
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
