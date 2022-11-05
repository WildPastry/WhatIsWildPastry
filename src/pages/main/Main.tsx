import { useCallback, useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { useSelector } from 'react-redux';
import Loading from '../../components/features/loading/Loading';
import { useAppDispatch } from '../../redux/hooks';
import { setLoading } from '../../redux/slices/loadingSlice';
import { AppState } from '../../redux/store';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import Nav from '../../components/layout/nav/Nav';

const Main: React.FC = (): JSX.Element => {
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
      <main aria-label='Main Section' className='container-fluid'>
        {loader ? (
          <section
            className={transitionLoader}
            onTransitionEnd={() => setLoader(false)}>
            <Loading />
          </section>
        ) : null}
        <Header />
        <Nav />
        <Footer />
      </main>
    );
  };
  // Error logic
  return pageData.isError ? <div>Error</div> : renderPage();
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
