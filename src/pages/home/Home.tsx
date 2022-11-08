import { SiAmazons3 } from 'react-icons/si';

const Home: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Home Section' className='container-fluid'>
      <h2 className='font--thin'>GALLERY</h2>
      <SiAmazons3 className='icon--regular' />
    </section>
  );
};

// EXPORT Home
Home.displayName = 'WILDPASTRY | Home';
export default Home;
