import styles from './Meme.module.scss';

const Meme: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Meme Section' className={styles.meme}>
      <h2>MEME</h2>
    </section>
  );
};

// EXPORT Meme
Meme.displayName = 'WILDPASTRY | Meme';
export default Meme;
