import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { Provider } from 'react-redux';
import store from '../redux/store';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

// EXPORT App
App.displayName = 'App';
export default App;
