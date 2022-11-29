import Filter from '../../components/features/filter/Filter';
import Gallery from '../../components/layout/gallery/Gallery';

const Home: React.FC = (): JSX.Element => {
  return (
    <main aria-label='Home Section'>
      <Filter />
      <Gallery />
    </main>
  );
};

// EXPORT Home
Home.displayName = 'WILDPASTRY | Home';
export default Home;
