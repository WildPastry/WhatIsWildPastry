import { useCallback, useEffect } from 'react';
import About from './sections/about/About';
import { AppState } from '../redux/store';
import Gallery from './sections/gallery/Gallery';
import Loading from './features/loading/Loading';
import Project from './sections/project/Project';
import { setLoading } from '../redux/slices/loadingSlice';
import styles from './Main.module.scss';
import { useAppDispatch } from '../redux/hooks';
import { useSelector } from 'react-redux';

const Main: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

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
  const shouldShowLoading = pageData.isLoading
    ? styles.showLoading
    : styles.hideLoading;

  const renderMain = (): JSX.Element => {
    return (
      <main aria-label='Main Section'>
        <section className={shouldShowLoading}>
          <Loading />
        </section>
        <Gallery />
        <Project />
        <About />
      </main>
    );
  };
  // Error logic
  return pageData.isError ? <div>Error</div> : renderMain();
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
