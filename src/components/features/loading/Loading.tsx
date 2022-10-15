import styles from './Loading.module.scss';

const Loading: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles.loaderInner}>
          <div className={styles.loaderLineWrap}>
            <div className={styles.loaderLine} />
          </div>
          <div className={styles.loaderLineWrap}>
            <div className={styles.loaderLine} />
          </div>
          <div className={styles.loaderLineWrap}>
            <div className={styles.loaderLine} />
          </div>
          <div className={styles.loaderLineWrap}>
            <div className={styles.loaderLine} />
          </div>
          <div className={styles.loaderLineWrap}>
            <div className={styles.loaderLine} />
          </div>
        </div>
      </div>
    </>
  );
};

// EXPORT Loading
Loading.displayName = 'WILDPASTRY | Loading';
export default Loading;
