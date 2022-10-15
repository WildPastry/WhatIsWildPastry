/* eslint-disable no-console */
import { useCallback, useEffect } from 'react';
import About from './sections/about/About';
import { AppState } from '../redux/store';
import Gallery from './sections/gallery/Gallery';
import Loading from './features/loading/Loading';
import Project from './sections/project/Project';
import { setLoading } from '../redux/slices/loadingSlice';
import { useAppDispatch } from '../redux/hooks';
import { useSelector } from 'react-redux';

const Main: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // UseSelectors for page loading state
  const pageData = useSelector((state: AppState) => {
    console.log(state);
    return state.loading;
  });

  const pageLoading = useCallback((loading: boolean) => {
    setTimeout(() => {
      dispatch(setLoading(loading));
    }, 2000);
  }, []);

  useEffect(() => {
    pageLoading(false);
  }, [pageLoading]);

  const renderMain = (pageData: Loading) => {
    return (
      <main>
        {pageData.isLoading ? <Loading /> : null}
        <Gallery />
        <Project />
        <About />
      </main>
    );
  };

  return pageData.isError ? <div>Error</div> : renderMain(pageData);
};

// EXPORT Main
Main.displayName = 'WILDPASTRY | Main';
export default Main;
