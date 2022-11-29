import styles from './Gallery.module.scss';

const Gallery: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Gallery Section'>
      <h2 className='font--thin'>GALLERY</h2>
      <div className={styles.grid} />
    </section>
  );
};

// EXPORT Gallery
Gallery.displayName = 'WILDPASTRY | Gallery';
export default Gallery;
