const Home: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Home Section' className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <h2 className='font--thin'>GALLERY</h2>
        </div>
      </div>
    </section>
  );
};

// EXPORT Home
Home.displayName = 'WILDPASTRY | Home';
export default Home;
