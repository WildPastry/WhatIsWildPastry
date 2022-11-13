import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import { ETimerCounts } from './models/enums';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import Main from './components/layout/main/Main';
import Meme from './components/features/meme/Meme';
import Nav from './components/layout/nav/Nav';
import NoPage from './pages/nopage/NoPage';
import Project from './pages/project/Project';
import styles from './App.module.scss';
import { useIdleTimer } from 'react-idle-timer';
import { useState } from 'react';

const App = (): JSX.Element => {
  const [showMeme, setShowMeme] = useState(false);

  const handleOnIdle = () => {
    document.hidden ? setShowMeme(true) : null;
  };

  const handleOnAction = () => {
    setTimeout(() => {
      setShowMeme(false);
    }, ETimerCounts.timerShort);
  };

  const handleClick = () => {
    setShowMeme(false);
  };

  const renderMeme = (): JSX.Element => {
    return <Meme click={() => handleClick()} />;
  };

  useIdleTimer({
    timeout: ETimerCounts.timerLong,
    onIdle: handleOnIdle,
    onAction: handleOnAction,
    debounce: 100
  });

  return (
    <main aria-label='App Section' className={styles.app}>
      {showMeme ? renderMeme() : null}
      <Header />
      <BrowserRouter>
        <Nav />
        <section className={`${styles.app__outlet} container-fluid`}>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/pages/project' element={<Project />} />
            <Route path='/pages/about' element={<About />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </section>
      </BrowserRouter>
      <Outlet />
      <Footer />
    </main>
  );
};

// EXPORT App
App.displayName = 'WILDPASTRY | App';
export default App;
