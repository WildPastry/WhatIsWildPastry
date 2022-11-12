import HoverImage from '../../components/features/hover-image/HoverImage';
import HoverSpotlight from '../../components/features/hover-spotlight/HoverSpotlight';

const About: React.FC = (): JSX.Element => {
  return (
    <section aria-label='About Section' className='container-fluid'>
      <h2 className='font--thin'>ABOUT</h2>
      <HoverSpotlight
        content={<p>HoverSpotlight</p>}
        width={100}
        height={100}
      />
      <HoverImage
        content={<p>HoverImage</p>}
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
