const Gallery: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Gallery Section'>
      <div className='row'>
        <div className='col'>
          <h1 className='font--thin'>GALLERY</h1>
        </div>
      </div>
    </section>
  );
};

// EXPORT Gallery
Gallery.displayName = 'WILDPASTRY | Gallery';
export default Gallery;
