const Home: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Home Section' className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <h1 className='font--thin'>GALLERY HERE</h1>
        </div>
      </div>
    </section>
  );
};

// EXPORT Home
Home.displayName = 'WILDPASTRY | Home';
export default Home;
