import Hover from './../../features/hover/Hover';

const About: React.FC = (): JSX.Element => {
  return (
    <section aria-label='About Section'>
      <h3>ABOUT</h3>
      <Hover alt='static-image' src='/images/pastry.jpg' />
    </section>
  );
};

// EXPORT About
About.displayName = 'WILDPASTRY | About';
export default About;
