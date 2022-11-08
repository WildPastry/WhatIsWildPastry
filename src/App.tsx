import './styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import About from './pages/about/About';
import { AppState } from './redux/store';
import Footer from './components/layout/footer/Footer';
import Gallery from './pages/gallery/Gallery';
import Header from './components/layout/header/Header';
import Loading from './components/features/loading/Loading';
import Nav from './components/layout/nav/Nav';
import Project from './pages/project/Project';
import { setLoading } from './redux/slices/loadingSlice';
import styles from './App.module.scss';
import { useAppDispatch } from './redux/hooks';
import { useSelector } from 'react-redux';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(true);

  // UseSelector for reading page loading state
  const pageData = useSelector((state: AppState): Loading => {
    return state.loading;
  });

  // Callback / dispatch and effect for setting page loading state
  const pageLoading = useCallback((loading: boolean): void => {
    setTimeout(() => {
      dispatch(setLoading(loading));
    }, 1000);
  }, []);

  useEffect((): void => {
    pageLoading(false);
  }, [pageLoading]);

  // Spinner logic
  const transitionLoader = pageData.isLoading
    ? styles.showLoading
    : styles.hideLoading;

  const renderPage = (): JSX.Element => {
    return (
      <main aria-label='Main Section'>
        {loader ? (
          <section
            className={transitionLoader}
            onTransitionEnd={() => setLoader(false)}>
            <Loading />
          </section>
        ) : null}
        <section>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Nav />}>
                <Route index path='/pages/gallery/' element={<Gallery />} />
                <Route path='/pages/project/' element={<Project />} />
                <Route path='/pages/about/' element={<About />} />
                {/* <Route path='*' element={<NoPage />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </section>
      </main>
    );
  };
  // Error logic
  return pageData.isError ? <div>Error</div> : renderPage();
};

// EXPORT App
App.displayName = 'WILDPASTRY | App';
export default App;
