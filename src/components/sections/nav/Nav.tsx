import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Navigation Section' className='container-fluid'>
      <Link href='/'>Home</Link>
      <Link href='/about/About'>About</Link>
      <Link href='/gallery/Gallery'>Gallery</Link>
      <Link href='/project/Project'>Project</Link>
    </section>
  );
};

// EXPORT Nav
Nav.displayName = 'WILDPASTRY | Nav';
export default Nav;
