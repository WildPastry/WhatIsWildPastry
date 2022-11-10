import styles from './Gallery.module.scss';

const Gallery: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Gallery Section'>
      <div className={styles['masonry-with-columns']}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </section>
  );
};

// EXPORT Gallery
Gallery.displayName = 'WILDPASTRY | Gallery';
export default Gallery;
