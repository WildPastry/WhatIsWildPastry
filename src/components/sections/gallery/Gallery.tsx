import styles from './Gallery.module.scss';

const Gallery: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Gallery Section'>
      <div className={styles.gridContainer}>
        <div className={styles.item1}><p><strong>Item1</strong>GAL</p></div>
        <div className={styles.item2}><p><strong>Item2</strong>GAL</p></div>
        <div className={styles.item3}><p><strong>Item3</strong>GAL</p></div>
        <div className={styles.item4}><p><strong>Item4</strong>GAL</p></div>
        <div className={styles.item5}><p><strong>Item5</strong>GAL</p></div>
      </div>
    </section>
  );
};

// EXPORT Gallery
Gallery.displayName = 'WILDPASTRY | Gallery';
export default Gallery;
