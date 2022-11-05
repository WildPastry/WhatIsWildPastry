import Footer from '../components/sections/footer/Footer';
import Head from 'next/head';
import Header from '../components/sections/header/Header';
import Nav from '../components/sections/nav/Nav';
import type { NextPage } from 'next';
import Main from './main/Main';

const Index: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>What is WildPastry?</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>INDEX</h1>
      <Header />
      <Main />
    </>
  );
};

// EXPORT Index
Index.displayName = 'WILDPASTRY | Index';
export default Index;
