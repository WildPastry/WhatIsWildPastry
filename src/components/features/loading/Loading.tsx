import styles from './Loading.module.scss';

const Loading: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Loading Section' className={styles.loader}>
      <div className={styles.loader__inner}>
        <div className={styles.loader__linewrap}>
          <div className={styles.loader__line} />
        </div>
        <div className={styles.loader__linewrap}>
          <div className={styles.loader__line} />
        </div>
        <div className={styles.loader__linewrap}>
          <div className={styles.loader__line} />
        </div>
        <div className={styles.loader__linewrap}>
          <div className={styles.loader__line} />
        </div>
        <div className={styles.loader__linewrap}>
          <div className={styles.loader__line} />
        </div>
      </div>
    </section>
  );
};

// EXPORT Loading
Loading.displayName = 'WILDPASTRY | Loading';
export default Loading;
