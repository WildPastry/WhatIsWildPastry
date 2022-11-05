import Head from 'next/head';
import Main from './main/Main';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>What is WildPastry?</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>INDEX</h1>
    </>
  );
};

Home.getLayout = (page) => {
  return <Main>{page}</Main>;
};

// EXPORT Home
Home.displayName = 'WILDPASTRY | Home';
export default Home;
