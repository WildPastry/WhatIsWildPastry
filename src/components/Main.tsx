import About from './sections/about/About';
import Gallery from './sections/gallery/Gallery';
import Loading from './features/loading/Loading';
import Project from './sections/project/Project';

const Main: React.FC = (): JSX.Element => {
  return (
    <main>
      <Loading />
      <Gallery />
      <Project />
      <About />
    </main>
  );
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
