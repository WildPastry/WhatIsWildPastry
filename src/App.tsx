import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import Nav from './components/layout/nav/Nav';
import NoPage from './pages/nopage/NoPage';
import Project from './pages/project/Project';

const App = (): JSX.Element => {
  return (
    <main aria-label='App Section'>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/pages/project' element={<Project />} />
          <Route path='/pages/about' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
      <Footer />
    </main>
  );
};

// EXPORT App
App.displayName = 'WILDPASTRY | App';
export default App;
