import HoverImage from '../../components/features/hover-image/HoverImage';
import HoverSpotlight from '../../components/features/hover-spotlight/HoverSpotlight';

const About: React.FC = (): JSX.Element => {
  return (
    <section aria-label='About Section'>
      <h3>ABOUT</h3>
      <HoverSpotlight
        content={<span>HoverSpotlight</span>}
        width={100}
        height={100}
      />
      <HoverImage
        content={<span>HoverImage</span>}
        src='/img/pastry.jpg'
        alt='static-image'
        width={200}
        height={200}
      />
    </section>
  );
};

// EXPORT About
About.displayName = 'WILDPASTRY | About';
export default About;
