import { Link } from 'react-router-dom';

const Nav: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Navigation Section'>
      <Link to='/pages/gallery'>Gallery</Link>
      <Link to='/pages/project'>Project</Link>
      <Link to='/pages/about'>About</Link>
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
