import HoverImage from '../../features/hover-image/HoverImage';
import HoverSpotlight from '../../features/hover-spotlight/HoverSpotlight';

const About: React.FC = (): JSX.Element => {
  return (
    <section aria-label='About Section'>
      <h3>ABOUT</h3>
      <HoverSpotlight height={100} width={100} />
      <HoverImage
        alt='static-image'
        src='/img/pastry.jpg'
        height={200}
        width={200}
      />
    </section>
  );
};

// EXPORT About
About.displayName = 'WILDPASTRY | About';
export default About;
