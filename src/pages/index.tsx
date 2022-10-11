import Counter from '../features/counter/Counter';
import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is WildPastry</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <img src='/logo.svg' className={styles.logo} alt='logo' />
        <Counter />
      </header>
    </div>
  );
};

export default IndexPage;
