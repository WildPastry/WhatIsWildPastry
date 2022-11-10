import styles from './Gallery.module.scss';

const Gallery: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Gallery Section'>
      <div className={styles['masonry-with-columns']}>
        <div />
      </div>
    </section>
  );
};

// EXPORT Gallery
Gallery.displayName = 'WILDPASTRY | Gallery';
export default Gallery;
