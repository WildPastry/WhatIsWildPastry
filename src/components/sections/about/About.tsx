import Hover from '../../components/features/hover/Hover';
import styles from './About.module.scss';

const About: React.FC = (): JSX.Element => {
  return (
    <section aria-label='About Section'>
      <h3>ABOUT</h3>
      {/* <Hover
        alt='static-image'
        src='/img/pastry.jpg'
        height={200}
        width={200}
      /> */}
            <Hover
        alt='static-image'
        src='/img/pastry.jpg'
        height={100}
        width={100}
      />
    </section>
  );
};

// EXPORT About
About.displayName = 'WILDPASTRY | About';
export default About;
