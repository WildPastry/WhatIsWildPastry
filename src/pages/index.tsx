import Counter from '../features/counter/Counter';
import Head from 'next/head';
import type { NextPage } from 'next';
import styles from './Index.module.scss';

const IndexPage: NextPage = () => {

  return (
    <main aria-label='Main Section' className={styles.container}>
      <Head>
        <title>What is WildPastry?</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <img src='/logo.svg' className={styles.logo} alt='logo' />
        <Counter />
      </header>
    </main>
  );
};

// EXPORT IndexPage
IndexPage.displayName = 'WILDPASTRY | Index';
export default IndexPage;
