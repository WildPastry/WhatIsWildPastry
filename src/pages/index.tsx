import Footer from '../components/sections/footer/Footer';
import Head from 'next/head';
import Header from '../components/sections/header/Header';
import Main from './main/Main';
import Nav from '../components/sections/nav/Nav';
import type { NextPage } from 'next';

const Index: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>What is WildPastry?</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <h1>INDEX</h1>
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

// EXPORT Index
Index.displayName = 'WILDPASTRY | Index';
export default Index;
