import { useCallback, useEffect, useState } from 'react';
import { AppState } from '../../redux/store';
import Error from '../../components/layout/error/Error';
import Filter from '../../components/features/filter/Filter';
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
  const transitionLoader = pageData.isLoading
    ? styles.showLoading
    : styles.hideLoading;

  const renderPage = (): JSX.Element => {
    return (
      <main aria-label='Home Section' className='container-fluid'>
        {loader ? (
          <section
            className={transitionLoader}
            onTransitionEnd={() => setLoader(false)}>
            <Loading />
          </section>
        ) : null}
        <>
          <Filter />
          <h2 className='font--thin'>GALLERY</h2>
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