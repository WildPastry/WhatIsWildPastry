import { useCallback, useEffect, useState } from 'react';
import { AppState } from '../../redux/store';
import Error from '../../components/layout/error/Error';
import Filter from '../../components/features/filter/Filter';
import Gallery from '../../components/layout/gallery/Gallery';
import Loading from '../../components/features/loading/Loading';
import { setLoading } from '../../redux/slices/loadingSlice';
import styles from './Home.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';

const Home: React.FC = (): JSX.Element => {
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
  const shouldShowLoading = pageData.isLoading
    ? styles['loading--active']
    : styles['loading--inactive'];

  const renderPage = (): JSX.Element => {
    return (
      <main aria-label='Home Section' className={'container-fluid'}>
        {loader ? (
          <section
            className={`${styles.loading} ${shouldShowLoading}`}
            onTransitionEnd={() => setLoader(false)}>
            <Loading />
          </section>
        ) : null}
        <>
          <Filter />
          <Gallery />
        </>
      </main>
    );
  };
  // Error logic
  return pageData.isError ? <Error /> : renderPage();
};

// EXPORT Home
Home.displayName = 'WILDPASTRY | Home';
export default Home;
