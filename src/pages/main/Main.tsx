import { useCallback, useEffect, useState } from 'react';
import About from '../about/About';
import { AppState } from '../../redux/store';
import Loading from '../../components/features/loading/Loading';
import { setLoading } from '../../redux/slices/loadingSlice';
import styles from './Main.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';

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
        ) : (
          <About />
        )}
      </main>
    );
  };
  // Error logic
  return pageData.isError ? <div>Error</div> : renderPage();
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
