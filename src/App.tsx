import './styles/main.scss';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import Nav from './components/layout/nav/Nav';

const App = (): JSX.Element => {
  return (
    <main>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </main>
  );
};

// EXPORT App
App.displayName = 'WILDPASTRY | App';
export default App;
