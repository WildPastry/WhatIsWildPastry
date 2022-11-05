import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Footer from '../components/sections/footer/Footer';
import Nav from '../components/sections/nav/Nav';
import { Main } from 'next/document';
import Header from '../components/sections/header/Header';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

// EXPORT App
App.displayName = 'App';
export default App;
