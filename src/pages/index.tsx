import Footer from '../components/sections/footer/Footer';
import Head from 'next/head';
import Main from '../components/Main';
import Nav from '../components/sections/nav/Nav';
import type { NextPage } from 'next';

const Index: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>What is WildPastry?</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

// EXPORT Index
Index.displayName = 'WILDPASTRY | Index';
export default Index;
